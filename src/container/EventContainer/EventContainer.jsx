import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "./EventContainer.scss";
import { EventCard, Spinner } from "../../components";
import { formatDate } from "../../utils";
import { images } from "../../constants";
import { DataContext } from "../../context/DataContext";

const EventContainer = () => {
  const { events } = useContext(DataContext);

  const [search, setSearch] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    const filtered = events.filter((event) =>
      event.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [search, events]);

  const handleSearch = () => {
    const filtered = events.filter((event) =>
      event.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const handleReset = () => {
    setSearch("");
    setFilteredEvents(events);
  };

  return (
    <div className="event__container">
      <div className="event__header">
        <h2>
          Upcoming <span>Events</span>
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
      <div>
        {filteredEvents.length > 0 ? (
          <div className="event__list">
            {filteredEvents
              .slice(0, 6)
              .reverse()
              .map((event) => (
                <Link key={event._id} to={`/events/${event._id}`}>
                  <EventCard
                    key={event._id}
                    name={event.name}
                    date={event.start_date}
                    time={event.start_time}
                    location={event.location}
                    status={event.status}
                    img={event.banner}
                  />
                </Link>
              ))}
          </div>
        ) : (
          <div className="event__list__empty">
            <img src={images.dummy} alt="No events found" />
            <p>Searching events....</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventContainer;
