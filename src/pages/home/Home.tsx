import React from "react";
import "./Home.scss";

import shogunRaiden from "../../assets/shogun_raiden.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home__text">
        <h4 className="home__text__up">HI, I'M BRIAN</h4>
        <h2 className="home__text__mid">I'M A WEB DESIGNER</h2>
        <p className="home__text__down">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quos,
          illo animi sapiente sunt architecto itaque. Maxime voluptates sint
          ipsam ipsum dicta explicabo praesentium velit possimus? Eos et
          doloribus velit!
        </p>
        <button className="home__button">VIEW MY PROJECTS</button>
      </div>
      <circle></circle>
      <picture>
        <img src={shogunRaiden} alt="Shogun Raiden" />
      </picture>
    </div>
  );
};

export default Home;
