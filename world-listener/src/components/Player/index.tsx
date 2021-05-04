import { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import Slider from "rc-slider";

import { PlayerContex } from "../../context/PlayerContex";

import styles from "./styles.module.scss";
import "rc-slider/assets/index.css"

export default function Player(){
    const audioRef = useRef<HTMLAudioElement>(null);

    const { 
        episodeList,
        currentEpisodeIndex,
        isPlaying,
        togglePlay,
    } = useContext(PlayerContex);

    useEffect(() => {
        if (!audioRef.current){
            return;
        }

        if (isPlaying){
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying])

    const episode = episodeList[currentEpisodeIndex];
  
    return (
        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando agora"/>
                <strong>Tocando Agora</strong>
            </header>

            { episode ? (
                <div className={styles.currentEpisode}>
                    <Image width={592} height={592} src={episode.thumbnail} objectFit="cover"/>
                    <strong>{episode.title}</strong>
                    <span>{episode.members}</span>
                </div>
            ) : (
                <div className={styles.emptyPlayer}>
                    <strong>Selecione um podcast para ouvir</strong>
                </div>
            )}
            

            <footer className={!episode ? styles.empty : ""}>
                <div className={styles.progress}>
                    <span>00:00</span>
                    <div className={styles.slider}>
                        {episode ? (
                            <Slider 
                            trackStyle={{backgroundColor: "#84d361"}} 
                            railStyle={{background: "#9f75ff"}}
                            handleStyle={{borderColor: "#84d361", borderWidth: 4}} />
                        ) : (
                            <div className={styles.emptySlider}></div>
                        ) }
                    </div>
                    <span>00:00</span>
                </div>

                { episode && 
                    <audio
                    src={episode.url}
                    ref={audioRef}
                    autoPlay
                    onPlay={() => {togglePlay(true)}}
                    onPause={() => {togglePlay(false)}}
                    />
                }

                <div className={styles.buttons}>
                    <button type="button" disabled={!episode}>
                        <img src="/shuffle.svg" alt="Aleatorizar"/>
                    </button>
                    <button type="button" disabled={!episode}>
                        <img src="/play-previous.svg" alt="Tocar anterior"/>
                    </button>
                    <button type="button" className={styles.playButton} disabled={!episode} onClick={() => togglePlay()}>
                        {isPlaying ? (
                            <img src="/pause.svg" alt="Iniciar"/>
                        ) : ( 
                            <img src="/play.svg" alt="Iniciar"/>
                        )}
                    </button>
                    <button type="button" disabled={!episode}>
                        <img src="/play-next.svg" alt="Tocar Proximo"/>
                    </button>
                    <button type="button" disabled={!episode}>
                        <img src="/repeat.svg" alt="Repetir"/>
                    </button>
                </div>
            </footer>
        </div>
    );
}