import React from "react";

//css-
import "../css/HowItWorks.css";

//img imports-
import search from "../assets/search.svg";
import date from "../assets/date.svg";
import love from "../assets/love.svg";
import downArrow from "../assets/downArrow.png";
import twistedArrow from "../assets/twistedArrow.png";

//data-
const data = [
  {
    img: search,
    heading: "Browse",
    title: "Discover activities from our partner booking providers.",
  },
  {
    img: date,
    heading: "Build",
    title: () => (
      <>
        Share your child’s interests, schedule, and preferences. Watch as.
        <br />
        JustLiv creates the perfect calendar filled with activities.
      </>
    ),
  },
  {
    img: love,
    heading: "Book",
    title: "Finalize your selections with one click and enjoy peace of mind.",
  },
];

function HowItWorks() {
  return (
    <div className="how-it-works">
      <h3 className="how-it-works-heading">How it works</h3>
      <div className="how-it-works-container">
        {data.map((item, index) => (
          <div className="how-it-works-box" key={index}>
            <div className="how-it-works-left">
              <img src={item.img} alt="icon" />
            </div>
            <div className="how-it-works-right">
              <h4 className="how-it-works-right-title">{item.heading}</h4>
              <p className="how-it-works-right-text">
                {index === 1 ? item.title() : item.title}
              </p>
            </div>
          </div>
        ))}

        <img src={downArrow} alt="downArrow" className="downArrow" />
        <img src={twistedArrow} alt="twistedArrow" className="twistedArrow" />
      </div>
    </div>
  );
}

export default HowItWorks;
