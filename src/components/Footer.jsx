import React from "react";

//css-
import "../css/footer.css";

//img-
import logo from "../assets/logo1.png";
import instagram from "../assets/instagram.svg";
import linkdin from "../assets/linkdin.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <img src={logo} alt="logo" className="footer-logo" />
        <div className="instagram-container">
          <img
            src={instagram}
            alt="instagram-logo"
            className="instagram-logo"
          />
          <a
            href="https://www.instagram.com/justlivatx?utm_source=qr"
            className="instagram-container-text"
          >
            Connect with us on Instagram ♡
          </a>
        </div>
        <p className="policy">Privacy policy</p>
        <p className="statement">Accessibility Statement</p>
        <a
          href="https://www.linkedin.com/company/justliv-app-for-busy-parents/"
          className="linkdin-container"
        >
          <img src={linkdin} alt="linkdin" />
        </a>
        <p className="copyright">© 2024 by JustLiv</p>
      </div>
    </div>
  );
}

export default Footer;
