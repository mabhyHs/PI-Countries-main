import React from 'react'
import styles from './Home.module.css'
import Searchbar from './SearchBar'

export default function Home() {
  return (
    <div className={styles.container}>Home
    <Searchbar></Searchbar>
    </div>
  )
}
