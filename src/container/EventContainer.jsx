import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EventCard, Spinner } from "./../components";
import { FormatDate } from "./../utils";
import { images } from "./../constants";
import axios from "axios";

const EventContainer = ({ title }) => {
  const [events, setEvents] = useState([]);
  const [originalEvents, setOriginalEvents] = useState([]);

  const [numToShow, setNumToShow] = useState(6);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsResponse] = await Promise.all([
          axios.get("http://localhost:3000/events"),
        ]);
        setEvents(eventsResponse.data);
        setOriginalEvents(eventsResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredEvents = events.filter((event) =>
      event.name.toLowerCase().includes(search.toLowerCase())
    );
    setEvents(filteredEvents);
  };

  const handleReset = () => {
    setSearch("");
    setEvents(originalEvents);
  };

  const visibleEvents = events.slice(0, numToShow);

  return (
    <div className="event__container">
      <div className="event__header">
        <h2>
          {title} <span>Events</span>
        </h2>
        <div className="input">
          <input
            type="text"
            placeholder="Search for events"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="input__icon" onClick={handleSearch}>
            <img src={images.search} alt="Search" />
          </div>
          {search && (
            <div className="input__icon" onClick={handleReset}>
              <img src={images.reset} alt="Reset" />
            </div>
          )}
        </div>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="event__list">
          {visibleEvents.length > 0 ? (
            <>
              {visibleEvents.map((event) => (
                <Link key={event._id} to={`/events/${event._id}`}>
                  <EventCard
                    key={event._id}
                    name={event.name}
                    date={FormatDate(event.date)}
                    time={event.time}
                    location={event.location}
                    status={event.status}
                    img={event.img}
                  />
                </Link>
              ))}
              {visibleEvents.length < events.length && (
                <Link to="/events">
                  <button>Load More...</button>
                </Link>
              )}
            </>
          ) : (
            <div className="event__list__empty">
              <img src={images.dummy} alt="No events found" />
              <p>No events found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EventContainer;
