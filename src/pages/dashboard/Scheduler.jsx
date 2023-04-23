import React from "react";
import Calendar from "./Calendar/Calendar";

const Scheduler = () => {
  return (
    <div
      style={{
        padding: "1rem 1rem",
        borderRadius: "1rem",
      }}
    >
      <Calendar />
    </div>
  );
};

export default Scheduler;
