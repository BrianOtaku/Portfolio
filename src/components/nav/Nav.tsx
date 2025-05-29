import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFull } from "@fortawesome/free-regular-svg-icons";
import "./Nav.scss";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <div className="nav__logo__icon">
          <FontAwesomeIcon icon={faSquareFull} className="icon" />
        </div>
        <div className="nav__logo__text">
          <text className="nav__logo__text__up">WebbyFrames</text>
          <text className="nav__logo__text__down">for Figma</text>
        </div>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
        <div className="line"></div>
        <ul>
          <span>
            <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
          </span>
          <span>
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </span>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
