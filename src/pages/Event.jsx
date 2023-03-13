import React from "react";
import axios from "axios";

import { useState } from "react";
import { useParams, Link } from "react-router-dom";

import { EventCard, Input } from "./../components";
import { EventContainer } from "../container";
import { FormatDate } from "./../utils";

const Event = () => {
  const { id } = useParams();

  const [event, setEvent] = useState({});

  const fetchData = async () => {
    try {
      const [eventResponse] = await Promise.all([
        axios.get(`http://localhost:3000/events/${id}`),
      ]);
      setEvent(eventResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();

  return (
    <div>
      <Link to="/">Back to Events</Link>
      <br />
      {event.name}
    </div>
  );
};

export default Event;
