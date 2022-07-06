import React from "react";
import { Link } from "react-router-dom";
import styles from "./Country.module.css";

export function Country({ id, name, continent, flag }) {
  return (
    <div className={styles.card} key={id}>
      <div className={styles.imgContainer}>
        <Link className={styles.link} to={`/countries/${id}`}>
          <img className={styles.img} src={flag} alt="national-flag" />
        </Link>
      </div>
      <div className={styles.textContainer}>
        {/* <Link className={styles.link} to={`/countries/${id}`}> */}
        <h3 className={styles.country}>{name}</h3>
        {/* </Link> */}
        <h4 className={styles.continent}>{continent}</h4>
      </div>
    </div>
  );
}
