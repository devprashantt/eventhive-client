import React, { useState } from "react";
import axios from "axios";

import "./Register.scss";
import { images } from "../../constants";

const Register = ({ date, time, eventId }) => {
  const [payment, setPayment] = useState(false);
  const handlePayment = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_HOST}/events/:eventId/payments`, {
        amount: 1,
        eventId: eventId,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setPayment(true);
        console.log(payment);
      });
  };
  return (
    <div className="ticket">
      <div className="ticket__heading">
        <h1
          style={{
            padding: "0",
            margin: "0",
          }}
        >
          Date & Time
        </h1>
      </div>
      <div className="ticket__time">
        <h2>
          Saturday, {date}, {time}
        </h2>
      </div>
      <div className="ticket__book">
        <button onClick={handlePayment}>
          {payment ? "Booked" : "Book now"}
        </button>
      </div>
      <div className="ticket__promote">
        <button>Program promoter</button>
      </div>
      <div className="ticket__refund">
        <p>Refund Policy</p>
      </div>
    </div>
  );
};

export default Register;
