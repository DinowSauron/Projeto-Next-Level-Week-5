import { format, parseISO } from "date-fns";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import ptBR from "date-fns/locale/pt-BR";

import { api } from "../../services/api";
import { convertSecondsToTime } from "../../misc/convertSecondsToTime";

import styles from "../../styles/episode.module.scss"
import { usePlayer } from "../../context/PlayerContex";


type EpisodeProps = {
    episode: {
        id: string,
        title: string,
        thumbnail: string,
        members: string,
        publishedAt: string,
        duration: number,
        durationString: string,
        description: string,
        url: string,
  }}

export default function Episode(props: EpisodeProps){
    //const router = useRouter();
    //router.query.slug

    const { play } = usePlayer();
    const episodeTitle = props.episode.title.replace("|", "     ").substring(0,16)

    return (
        <div className={styles.episode}>

            <Head>
                <title>{episodeTitle} | WorldListener </title>
            </Head>


            <div className={styles.thumbnailContainer}>
                <Link href="/">
                    <button type="button">
                        <img src="/arrow-left.svg" alt="Retornar"/>
                    </button>
                </Link>
                <Image width={700} height={200} src={props.episode.thumbnail} objectFit="cover"/>
                <button type="button" onClick={() => play(props.episode)}> 
                    <img src="/play.svg" alt="Tocar Episodio"/>
                </button>
            </div>

            <header>
                <h1>{props.episode.title}</h1>
                <span>{props.episode.members}</span>
                <span>{props.episode.publishedAt}</span>
                <span>{props.episode.durationString}</span>
            </header>
            {/* Fazer isso para renderizar tags html por react */}
            <div className={styles.description} dangerouslySetInnerHTML={{__html: props.episode.description}}/>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await api.get("episodes" , {
        params: {
            _limit: 2,
            _sort: "published_at",
            _order: "desc",
        }
    });

    const paths = data.map(episode => {
        return {
            params: {
                slug: episode.id
            }
        }
    })
      
    return { // aula 4 - 04:40 > 24:00 
        paths,
        fallback: "blocking" 
    } //Incrementeal Static Generation
}

export const getStaticProps: GetStaticProps = async (contex) => {
    const { slug } = contex.params;
    const { data } = await api.get(`/episodes/${slug}`)

    const episode = {
        id: data.id,
        title: data.title,
        thumbnail: data.thumbnail,
        members: data.members,
        publishedAt: format(parseISO(data.published_at), "d MMM yy", {locale: ptBR}),
        duration: Number(data.file.duration),
        durationString: convertSecondsToTime(Number(data.file.duration)),
        description: data.description,
        url: data.file.url,
    };

    return {
        props: {
            episode
        },
        revalidate: 3600 * 24 // 24 Hours
    }
}