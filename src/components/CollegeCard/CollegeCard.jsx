import React from "react";

import "./CollegeCard.scss";

const CollegeCard = ({ name, location, image, description }) => {
  return (
    <div className="college__card">
      <div className="college__card__image">
        <img src={image} alt="college__card" />
      </div>
      <div className="college__card__content">
        <h3 className="college__card__content__name">{name}</h3>
        <p className="college__card__content__desc">{description}</p>
        <p className="college__card__content__location">{location}</p>
      </div>
    </div>
  );
};

export default CollegeCard;
