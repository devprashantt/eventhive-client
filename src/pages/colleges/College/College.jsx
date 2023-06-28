import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import "./College.scss";
import EventCard from "../../../components/EventCard/EventCard";

const Event = () => {
  const [colleges, setColleges] = useState([]);
  const [events, setEvents] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collegesResponse = await axios.get(
          `${import.meta.env.VITE_BACKEND_HOST}/colleges`
        );
        const eventsResponse = await axios.get(
          `${import.meta.env.VITE_BACKEND_HOST}/events`
        );
        const collegesData = collegesResponse.data;
        const eventsData = eventsResponse.data;

        setColleges(collegesData);
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };
    fetchData();
  }, []);

  const collegeData = colleges.find((college) => college._id === id);

  const collegeEvents = events.filter((event) => event.colleges[0] === id);

  if (!collegeData) {
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
        <img src={collegeData.imgUrl} alt={collegeData.name} />
        <Link to="/">
          <div className="college__image__button">
            <p>Back</p>
          </div>
        </Link>
      </div>

      <div className="college__content">
        <div className="college__logo">
          <img
            src={collegeData.logoUrl}
            alt="logo"
            style={{
              width: "10rem",
              height: "10rem",
              objectFit: "contain",
              margin: "2rem 0",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div className="college__content__title">{collegeData.name}</div>
          <div className="college__content__description">
            <p>{collegeData.description}</p>
          </div>
        </div>
      </div>

      {collegeData.events.length !== 0 ? (
        <div className="college__events">
          <div className="college__events__title">
            Upcoming <span>Events</span>
          </div>
          <div className="college__events__list">
            {collegeEvents.reverse().map((event) => (
              <Link key={event._id} to={`/events/${event._id}`}>
                <EventCard
                  name={event.name}
                  date={event.start_date}
                  time={event.start_time}
                  location={event.location}
                  img={event.banner}
                />
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      <div className="college__events">
        <div>
          {collegeData.fests.length === 0 ? (
            <div className="college__events__title">
              No <span>Events</span>
            </div>
          ) : null}
        </div>
        <div className="college__events__title">
          Regular <span>Events</span>
        </div>
        <div className="college__events__list">
          {collegeData.fests.map((event) => (
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
