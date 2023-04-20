import React from "react";
import { Link } from "react-router-dom";

import "./Advertisement.scss";
import { images } from "../../constants";

const Advertisement = () => {
  return (
    <div className="ad">
      <div className="ad__img">
        <img src={images.ad_image} alt="ad_image" />
      </div>
      <div className="ad__text">
        <h2>Make your own Event </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <Link to="/create-event">
          <button>Create Events</button>
        </Link>
      </div>
    </div>
  );
};

export default Advertisement;
