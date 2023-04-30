import React from "react";

import formatDate from "../../utils/FormatDate";

import "./EventCard.scss";

const EventCard = ({ name, date, time, location, img, description }) => {
  return (
    <div className="event">
      <div className="event__image">
        <img src={img} alt="event__image" />
      </div>
      <div className="event__info">
        <h3 className="event__title">{name}</h3>
        <p className="event__dt">
          <span className="event__date">{formatDate(date)}</span>
          <span className="event__time">{time}</span>
        </p>
        <p className="event__location">{location}</p>
      </div>
    </div>
  );
};

export default EventCard;
