import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Events.scss";
import { DataContext } from "../../../context/DataContext";
import { formatDate } from "../../../utils";
import { EventCard } from "../../../components";
import { images } from "../../../constants";

const Events = () => {
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
    <div className="events">
      <div className="events__header">
        <h1 className="events__header__name">Events</h1>
        <div className="events__header__input">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for events"
            className="events__header__input__search"
          />
          <div className="events__header__input__icon" onClick={handleSearch}>
            <img src={images.search} alt="Search" />
          </div>
          {search && (
            <div className="events__header__input__icon" onClick={handleReset}>
              <img src={images.reset} alt="Reset" />
            </div>
          )}
        </div>
      </div>
      <div className="events__container">
        {filteredEvents.map((event) => (
          <Link key={event._id} to={`/events/${event._id}`}>
            <EventCard
              name={event.name}
              date={formatDate(event.date)}
              time={event.time}
              location={event.location}
              img={event.img}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;
