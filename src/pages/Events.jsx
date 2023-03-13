import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EventCard, Input, Spinner } from "./../components";
import { FormatDate } from "./../utils";
import { images } from "./../constants";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsResponse] = await Promise.all([
          axios.get("http://localhost:3000/events"),
        ]);
        setEvents(eventsResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="events">
      <h1>Event</h1>
      {events.map((event) => (
        <Link key={event._id} to={`/events/${event._id}`}>
          {event.name}
        </Link>
      ))}
    </div>
  );
};

export default Events;
