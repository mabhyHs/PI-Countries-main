import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, getAllActivities } from "../actions";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import imgNav from "../img/NavBarIcon.png";

import "./Navbar.css";

export default function Navbar({ sort, contFilter, actFilter, actNameFilter }) {
  const dispatch = useDispatch();
  //activities
  const activities = useSelector((state) => state.allActivities);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllCountries());
  }

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const [click, setClick] = React.useState(false);

  const handleClickNavbar = () => setClick(!click);

  const Close = () => setClick(false);

  return (
    <div className="navbar-wrapper">
      <div className={click ? "main-container" : ""} onClick={() => Close()} />

      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <Link className="back-link" to="/">
            <img
              src={imgNav}
              className="nav-img"
              alt="name henry cuntries"
            ></img>
          </Link>
          <button className="nav-btn" onClick={(e) => handleClick(e)}>
            Reload countries
          </button>
          <button className="nav-btn">
            <Link className="navBtnLink" to="/activity">
              Add Activity
            </Link>
          </button>
          <Searchbar />
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <select className="nav-links" onChange={(e) => contFilter(e)}>
                <option value="All">Filter by region...</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </li>

            <li className="nav-item">
              <select className="nav-links" onChange={(e) => actFilter(e)}>
                <option value="All">Filter activities by season...</option>
                <option value="Summer">Summer</option>
                <option value="Fall">Fall</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
              </select>
            </li>

            <li className="nav-item">
              <select
                className="nav-links"
                name="activities"
                onChange={(e) => actNameFilter(e)}
                required
              >
                <option value="">Filter by activity...</option>
                {activities.map((a) => (
                  <option value={a.name}>{a.name}</option>
                ))}
              </select>
            </li>

            <li className="nav-item">
              <select className="nav-links" onChange={(e) => sort(e)}>
                <option value="AZ">Sort by...</option>
                <option value="AZ">Name (A-Z)</option>
                <option value="ZA">Name (Z-A)</option>
                <option value="populationAsc">Population (asc)</option>
                <option value="populationDesc">Population (desc)</option>
              </select>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClickNavbar}>
            <div className="nav-btn">
              Filters <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
