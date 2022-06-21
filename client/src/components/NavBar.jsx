import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries } from "../actions";
import styles from "./Navbar.module.css";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

export default function Navbar({ sort, contFilter, actFilter, actNameFilter }) {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllCountries());
  }

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);


  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.earth} onClick={(e) => handleClick(e)}>
          <i class="fa fa-fw fa-home"></i>
        </h1>

        <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={(e) => handleClick(e)}>
          Reload countries
        </button>

        <button className={styles.btn}>
          <Link className={styles.link} to="/activity">
            Add Activity
          </Link>
        </button>

      </div>
        <Searchbar />
        <div className={styles.filterContainer}>
          {/* filter by continent */}
          <select className={styles.filter} onChange={(e) => contFilter(e)}>
            <option value="All">Filter by region...</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>

          {/* filter by season*/}
          <select className={styles.filter} onChange={(e) => actFilter(e)}>
            <option value="All">Filter activities by season...</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
          </select>

          {/* filter by activity */}
          <select className={styles.filter} onChange={(e) => actNameFilter(e)}>
            <option value="All">Filter by activity...</option>
            <option value="Skiing">Skiing</option>
            <option value="Surfing">Surfing</option>
          </select>

          {/* order by nunmber o population */}
          <select className={styles.filter} onChange={(e) => sort(e)}>
            <option value="AZ">Sort by...</option>
            <option value="AZ">Name (A-Z)</option>
            <option value="ZA">Name (Z-A)</option>
            <option value="populationAsc">Population (asc)</option>
            <option value="populationDesc">Population (desc)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
