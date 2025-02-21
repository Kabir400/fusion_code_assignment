import React from "react";

import "../css/hero.css";

//img import
import heroImg from "../assets/hero.png";
import heroMobile from "../assets/heroMobile.png";
import star from "../assets/star.svg";

function Hero() {
  return (
    <div className="hero-container">
      <img src={heroImg} alt="Hero-Img" className="hero-img" />
      <img src={heroMobile} alt="Hero-Img" className="hero-mobile" />
      <div className="hero-box">
        <h1 className="hero-heading">
          Your Child's Perfect Schedule <br className="desktop-br" />
          in Just a Few Clicks
        </h1>
        <p className="hero-sub-heading">Less Planning, More Living.</p>
        <div className="hero-btn">
          <img src={star} alt="star-icon" />
          <a href="#waitlist" className="hero-btn-text">
            Join the Waitlist
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
