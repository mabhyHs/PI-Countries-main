import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetails } from "../../Redux/actions";
import { Link } from "react-router-dom";
import styles from "./Details.module.css";
import headerNav from "../../img/iconDark.png";
import Loading from "../loading/Loading";

export default function Details({ country }) {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.countryDetail);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(getCountryDetails(country, setLoading));
  }, [country, dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          alt="Henry countries tittle"
          src={headerNav}
          className={styles.headerImg}
        />
        {loading ? (
          <Loading />
        ) : (
          <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
              <img alt="flag" src={details.flag} className={styles.img} />
            </div>
            <h1 className={styles.title}>
              {details.name} ({details.id})
            </h1>
            <h2 className={styles.subtitle}>
              {details.continent}
              {details.subregion ? " | " + details.subregion : null}
            </h2>
            <h4>Capital: {details.capital}</h4>
            <h4>Population: {details.population}</h4>
            <h4>Area: {details.area} km²</h4>

            <h4 className={styles.activities}>Activities:</h4>
            <ul>
              {details.activities &&
                details.activities.map((act) => (
                  <li key={act.id}>
                    <p>
                      <strong>{act.name}</strong> ({act.season}) | Duration:{" "}
                      {act.duration} - Difficulty: {act.difficulty}
                    </p>
                  </li>
                ))}
            </ul>
            <Link to="/countries">
              <button className={styles.btn}>Go back</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
