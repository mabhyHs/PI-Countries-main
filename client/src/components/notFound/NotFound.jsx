import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.page_404}>
      <div className={styles.four_zero_four_bg}>
        <h1 className={styles.h1}>404</h1>
      </div>

      <div className={styles.contant_box_404}>
        <h3 className={styles.h3}>Look like you're lost</h3>
        <p>The page you are looking for doesn't exist or not avaible! </p>
        <Link className={styles.btn} to={"/countries"}>
          Go to Home
        </Link>{" "}
      </div>
    </div>
  );
}
