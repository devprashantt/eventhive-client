import React from "react";

import formatDate from "../../utils/FormatDate";

import "./EventCard.scss";

const EventCard = ({ name, date, time, location, img, description }) => {
  const maxLength = 40;
  let truncatedString = name.substring(0, maxLength);
  if (name.length > maxLength) {
    truncatedString += "...";
  }
  return (
    <div className="event">
      <div className="event__image">
        <img src={img} alt="event__image" />
      </div>
      <div className="event__info">
        <h3 className="event__title">{truncatedString}</h3>
        {description && (
          <p className="event__description">
            {description.substring(0, 90)}
            <span
              style={{
                color: "#7848f4",
                cursor: "pointer",
              }}
              onClick={() => {
                alert(description);
              }}
            >
              {"  "}
              Show all
            </span>
          </p>
        )}
        {date && (
          <p className="event__dt">
            <span className="event__date">{formatDate(date)}</span>
            <span className="event__time">{time}</span>
          </p>
        )}
        <p className="event__location">{location}</p>
      </div>
    </div>
  );
};

export default EventCard;
