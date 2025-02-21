import React from "react";

//css-
import "../css/Feature.css";

//data-
import { data } from "../data/data.js";

//img imports-
import star from "../assets/star.svg";

function Feature() {
  return (
    <div className="feature">
      <h2 className="feature-heading">Why JustLiv?</h2>

      <div className="feature-container">
        {data.map((item, index) => (
          <div className="feature-box-container" key={index}>
            <div className="feature-box">
              <img src={star} alt="star-icon" />
              <h3 className="feature-box-heading">{item.heading}</h3>
              <p className="feature-box-text">{item.text}</p>
            </div>
            <img src={item.img} className="feature-box-img" alt="feature-img" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
