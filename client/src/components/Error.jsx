import React from 'react'
import styles from "./Error.module.css";

export default function Error({ text }) {
  return (
    <div className={styles.error}>
      <h1>There has been an error...</h1>
      <h2>{text}</h2>
    </div>
  )
}
