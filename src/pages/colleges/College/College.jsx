import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import "./College.scss";
import { DataContext } from "../../../context/DataContext";
import EventCard from "../../../components/EventCard/EventCard";
import { images } from "../../../constants";

const Event = () => {
  const { colleges } = useContext(DataContext);
  const { id } = useParams();

  const college = colleges.find((event) => event._id === id);

  if (!college) {
    return <div>Event not found</div>;
  }

  console.log(college);

  return (
    <div
      className="college"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <div className="college__image">
        <img src={college.imgUrl} alt={college.name} />
        <Link to="/colleges">
          <div className="college__image__button">
            <p>Back</p>
          </div>
        </Link>
      </div>

      <div className="college__content">
        <div className="college__logo">
          <img
            src={college.logoUrl}
            alt="logo"
            style={{
              width: "10rem",
              height: "10rem",
              objectFit: "contain",
              margin: "2rem 0",
            }}
          />
        </div>
        <div className="college__content__title">{college.name}</div>
        <div className="college__content__description">
          <p>{college.description}</p>
        </div>
      </div>

      <div className="college__events">
        <div className="college__events__title">Festivals</div>
        <div className="college__events__list">
          {college.fests.map((event) => (
            <EventCard
              key={event._id}
              id={event._id}
              name={event.name}
              img={event.imgUrl}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
