import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SyncLoader from "react-spinners/SyncLoader";

import "./Events.scss";
import { EventCard } from "../../../components";
import { images } from "../../../constants";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const eventsResponse = await axios.get(
          `${import.meta.env.VITE_BACKEND_HOST}/events`
        );
        const eventsData = eventsResponse.data;
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
      <div
        className="events__landing"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: "-1",
            right: "25%",
            width: "40rem",
            height: "40rem",
            backgroundImage:
              "radial-gradient(circle at center, #7848f4 0%, #7848f4 5%, rgba(120, 120, 120, 0) 40%)",
          }}
        ></div>
        <div
          className="events__landing__content"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            paddingRight: "2rem",
            gap: "15px",
          }}
        >
          <div
            className="events__landing__content__desc"
            style={{
              fontSize: "1.2rem",
              fontStyle: "italic",
            }}
          >
            Thriving Above Event Expectations.
          </div>
          <div
            className="events__landing__content__title"
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              lineHeight: "1",
            }}
          >
            Event
            <span
              style={{
                color: "#7848F4",
              }}
            >
              Hive
            </span>
            -ing the Best.Day.Ever.
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              marginTop: "30px",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "10px",
                backgroundColor: "#7848F4",
                color: "#FFFFFF",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                {events.length}+
              </span>
              <span>Total Events Hosted</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "10px",
                backgroundColor: "#7848F4",
                color: "#FFFFFF",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                100+
              </span>
              <span
                style={{
                  textAlign: "start",
                  fontSize: "1.2rem",
                }}
              >
                Total Events Live
              </span>
            </div>
          </div>
        </div>
        <div>
          <img
            src={images.event}
            alt="event"
            style={{
              borderRadius: "15px",
            }}
          />
        </div>
      </div>
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
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "3rem",
          }}
        >
          <SyncLoader
            color={"#7848F4"}
            loading={loading}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="events__container">
          {filteredEvents.reverse().map((event) => (
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
      )}
    </div>
  );
};

export default Events;
