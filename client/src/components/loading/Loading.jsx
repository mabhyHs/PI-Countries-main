import React from 'react'
import loadingGif from "../../img/loading.gif";

import styles from "./Loading.module.css";

export default function Loading({ text }) {
  return (
    <div className={styles.error}>
      <img className={styles.loadingGif} src={loadingGif} alt="" />
      <h1 className={styles.loadingText}>Loading...</h1>
      <h2 className={styles.errorText}>{text}</h2>
    </div>
  )
}
