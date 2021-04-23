//Consumindo API (1:00:00, 2°ep)


// SPA 
// (não indexavel usa javascript do browser) 
/*
import {useEffect} from "react"
export default function Home() {
  useEffect(() => {
    fetch("http://localhost:3333/episodes")
      .then(response => response.json())
      .then(data => console.log(data))
  }, []) 
  return (<h1>Index</h1>);
}
*/



// SSR
// Alterações em tempo real, sempre atualizando
/*
import {GetServerSideProps} from "next"
export default function Home(props) {
  console.log(props.episodes)

  return (
    <h1>Index</h1>
  );
}


export async function getServerSideProps(){

  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return { // precisa retornar o props
    props: {
      episodes: data,
    }
  }
}
*/







//SSG
// cria um cache destes dados
// pagina semi-estatica.
//todos os acessos terão o mesmo resultado!
// sem tipagem: export async function getStaticProps(){

// <p>{JSON.stringify(props.episodes)}</p>
import {GetStaticProps} from "next";
import { api } from "../services/api";
import Image from "next/image";
import Link from "next/link";
import { format, parseISO} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { convertSecondsToTime } from "../misc/convertSecondsToTime";
import {useRouter} from "next/router";

import styles from "../styles/home.module.scss";


type Episode = {
  id: string,
  title: string,
  thumbnail: string,
  members: string,
  publishedAt: string,
  duration: number,
  durationString: string,
  url: string,
}

type HomeProps = {
  latestEpisodes: Episode[],
  allEpisodes: Episode[],
}

export default function Home(props: HomeProps) {

  // console.log(props.allEpisodes)
  
  return (
    <div className={styles.homepage}>
      <section className={styles.latestEpisodes}>
        <h2>Últimos episodios</h2>

        <ul>
          {props.latestEpisodes.map(episode => {
            return ( //necessário uma key para melhor gerenciamento!   (3ª 38min)
              <li key={episode.id}> 
                <Image 
                  width={192} 
                  height={192}
                  objectFit="cover"
                  src={episode.thumbnail} 
                  alt={episode.title}
                />

                <div className={styles.episodeDetails} >
                  <span>
                    <Link href={`/episodes/${episode.id}`}>
                      <a>{episode.title}</a>
                    </Link>
                  </span>
                  <p>{episode.members}</p>
                  <span>{episode.publishedAt}</span>
                  <span>{episode.durationString}</span>
                </div>

                <button type="button">
                  <img src="/play-green.svg" alt="Inmiciar Episodio"/>
                </button>
              </li>
            )
          })}
        </ul>
      </section>
      <section className={styles.allEpisodes}>
          <h2>Todos episódios</h2>

          <table cellSpacing={0}>
            <thead>
              <tr>
                <th></th>
                <th>Podcast</th>
                <th>Integrantes</th>
                <th>Data</th>
                <th>Duração</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.allEpisodes.map(episode => {
                return (
                  <tr key={episode.id}>
                    <td style={{width: 65}}>
                      <Image 
                      width={120}
                      height={120}
                      src={episode.thumbnail}
                      alt={episode.title}
                      objectFit="cover"/>
                    </td>
                    <td>
                      <Link href={`/episodes/${episode.id}`}>
                        <a>{episode.title}</a>
                      </Link>
                    </td>
                    <td>{episode.members}</td>
                    <td style={{width: 95}}>{episode.publishedAt}</td>
                    <td>{episode.durationString}</td>
                    <td>
                      <button type="button">
                        <img src="/play-green.svg" alt="Iniciar Episodio"/>
                      </button></td>
                  </tr>
                )
                }
              )}
            </tbody>
          </table>
      </section>
    </div>
  );
}
//15:50 3ª aula

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("episodes" , {
    params: {
      _limit: 12,
      _sort: "published_at",
      _order: "desc",
    }
  });

  //formatando os dados
  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), "d MMM yy", {locale: ptBR}),
      duration: Number(episode.file.duration),
      durationString: convertSecondsToTime(Number(episode.file.duration)),
      url: episode.file.url,
    };
  })

  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length)

  return { // precisa retornar o props
    props: {
      latestEpisodes,
      allEpisodes,
    },
    // timer do cache, (8hrs)
    revalidate: 60*60*8,
  }
}