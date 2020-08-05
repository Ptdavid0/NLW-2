import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import api from "../../services/api";

import logo from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyicon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHearthIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("/connections").then((response) => {
      setTotalConnections(response.data.total);
    });
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="Proffy logo" />
          <h2>The best plataform for online studies</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyicon} alt="study icon" />
            Study
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="give classes icon" />
            Give Classes
          </Link>
        </div>

        <span className="total-connections">
          More than {totalConnections} connections already made
          <img src={purpleHearthIcon} alt="Heart" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
