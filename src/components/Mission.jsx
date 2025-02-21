import React from "react";

//css-
import "../css/mission.css";

//img-
import family from "../assets/family.png";
import multiLove from "../assets/multiLove.svg";

function Mission() {
  return (
    <div className="mission">
      <h4 className="mission-heading">Our Mission</h4>
      <p className="mission-subheading">
        Parents need a simple way to find, book, and track their kids
        activities. Businesses need a better way to be found and to keep
        families coming <br />
        back.
      </p>
      <p className="mission-text">Our purpose is to</p>
      <h4 className="mission-heading2">
        make parents lives <span className="pink">easier</span>,
        <span className="pink">happier</span>, and
        <span className="pink">less stressful</span>.
      </h4>
      <p className="mission-text2">
        As parents and business owners, we get it.
      </p>

      <img src={family} alt="family" className="family" />
      <img src={multiLove} alt="love-icon" className="love" />
    </div>
  );
}

export default Mission;
