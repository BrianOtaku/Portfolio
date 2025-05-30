import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <span>CompanyName @ 202X. All rights reserved.</span>
      <div className="footer__socials">
        <i className="youtube">
          <FontAwesomeIcon icon={faYoutube} className="icon" />
        </i>
        <i className="facebook">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
        </i>
        <i className="twitter">
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </i>
        <i className="instagram">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </i>
      </div>
    </footer>
  );
};

export default Footer;
