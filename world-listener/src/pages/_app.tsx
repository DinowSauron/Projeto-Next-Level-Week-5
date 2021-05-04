import { useState } from "react"
import Header from "../components/Header"
import Player from "../components/Player"
import { PlayerContexProvider } from "../context/PlayerContex"

import styles from "../styles/app.module.scss"
import "../styles/global.scss"



function MyApp({ Component, pageProps }) {
  return (
    <PlayerContexProvider>
      <div className={styles.wrapper}>
        <main>
          <Header/>
          <Component {...pageProps} />
        </main>
        <Player/>
      </div>
    </PlayerContexProvider>
  )
}

export default MyApp
