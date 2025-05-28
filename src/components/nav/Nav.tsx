import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFull } from "@fortawesome/free-regular-svg-icons";
import "./Nav.scss";

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
          <li>
            <text>Eleven</text>
          </li>
          <li>
            <text>Twelve</text>
          </li>
          <li>
            <text>Thirteen</text>
          </li>
          <li>
            <text>Fourteen</text>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
