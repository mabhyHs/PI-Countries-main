import React from "react";
import { Link } from "react-router-dom";
import effect from "../img/effect.png";
import backbox from "../img/backbox.png";
import frontBox from "../img/frontBox.png";
import RightSide from "../img/RightSide.png";
import leftSide from "../img/leftSide.png";
import TopToBox from "../img/TopToBox.png";
import "./Landing.css";
import styles from "./Landing.module.css";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div
        id="video-lightbox"
        style={{ display: "block", opacity: "1", zIndex: "100000" }}
      >
        <div className="popup">
          <div className="image_of_logo">
            <div className="box">
              <div className="box__face box__face--front">
                <img
                  src={backbox}
                  className="front-on"
                  alt="front of the box"
                />
                <img src={effect} className="front-off" alt="airplane" />
              </div>
              <div className="box__face box__face--back">
                <img src={frontBox} alt="back to the box whit text" />
              </div>
              <div className="box__face box__face--right">
                <img src={RightSide} alt="right side of the box" />
              </div>
              <div className="box__face box__face--left">
                <img src={leftSide} alt="left side of the box" />
              </div>
              <div className="box__face box__face--top">
                <img src={TopToBox} alt="top of te box" />
              </div>
            </div>
          </div>

          <Link to="/countries">
            <button className={styles.btn}> Start </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
