import React from "react";

//css-
import "../css/dance.css";

//img-
import star from "../assets/star.svg";

function Dance() {
  return (
    <div className="dance">
      <h2 className="dance-heading">Ready to Simplify Your Life?</h2>
      <p className="dance-text">
        Be the first to know when we launch! Join our waiting list and <br />
        get exclusive updates and early access to our journey.
      </p>
      <div className="dance-btn" id="waitlist">
        <img src={star} alt="star" />
        <p className="dance-btn-text">Join the waitlist</p>
      </div>
    </div>
  );
}

export default Dance;
