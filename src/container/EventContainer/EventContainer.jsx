import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SyncLoader from "react-spinners/SyncLoader";

import "./EventContainer.scss";
import { EventCard, Spinner } from "../../components";
import { images } from "../../constants";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const EventContainer = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const eventsResponse = await axios.get(
          `${import.meta.env.VITE_BACKEND_HOST}/events`
        );
        const eventsData = eventsResponse.data;
        setEvents(eventsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };
    fetchData();

    const filtered = events.filter((event) =>
      event.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [search]);

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
            <img src={images.dummy} alt="Searching events...." />
            <SyncLoader
              color={"#7848F4"}
              loading={loading}
              css={override}
              size={10}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventContainer;
