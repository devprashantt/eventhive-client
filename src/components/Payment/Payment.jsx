import React, { useState } from "react";
import axios from "axios";

const Payment = ({ eventId, userId }) => {
  const handlePayment = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_HOST}/events/:eventId/payments`, {
        amount: 1,
        eventId: eventId,
        userId: userId,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  return <button onClick={handlePayment}>Book</button>;
};

export default Payment;
