import { useState } from "react"
import Header from "../components/Header"
import Player from "../components/Player"
import { PlayerContex } from "../context/PlayerContex"

import styles from "../styles/app.module.scss"
import "../styles/global.scss"



function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setcurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false)

  function play(episode){
    setEpisodeList([episode]);
    setcurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function togglePlay(value: boolean = null){
    if (value == null){
      setIsPlaying(!isPlaying);
    } else {
      setIsPlaying(value);
    }
  }

  return (
    <PlayerContex.Provider value={{episodeList, currentEpisodeIndex, play, isPlaying, togglePlay}}>
      <div className={styles.wrapper}>
        <main>
          <Header/>
          <Component {...pageProps} />
        </main>
        <Player/>
      </div>
    </PlayerContex.Provider>
  )
}

export default MyApp
