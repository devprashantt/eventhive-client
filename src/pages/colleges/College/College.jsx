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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "2rem",
                backgroundColor: "#fff",
                padding: "1rem",
                borderRadius: "1rem",
              }}
            >
              <div className="image">
                <img
                  src={event.imgUrl}
                  alt={event.name}
                  style={{
                    width: "20rem",
                    height: "15rem",
                    objectFit: "fill",
                    borderRadius: "1rem",
                  }}
                />
              </div>
              <div
                className="content"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "0.5rem",
                }}
              >
                <div
                  className="title"
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#000",
                  }}
                >
                  {event.name}
                </div>
                <div className="desc">
                  <p>{event.description}</p>
                </div>
                <a href={event.website}>{event.website}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
