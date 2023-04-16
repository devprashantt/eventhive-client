import React from "react";

import "./Register.scss";
import { images } from "../../constants";

const Register = () => {
  return (
    <div className="ticket">
      <div className="ticket__heading">
        <h1>Date & Time</h1>
      </div>
      <div className="ticket__time">
        <h2>Saturdat, March 18 2023, 9.30PM</h2>
      </div>
      <div className="ticket__book">
        <button>Book Now</button>
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
