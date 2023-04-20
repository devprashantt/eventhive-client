import React from "react";

import MiniCalendar from "../../components/Calendar/Calendar";
import WeeklyRevenue from "./components/WeeklyRevenue";
import DailyTraffic from "./components/DailyTraffic";
import PieChart from "../../components/Charts/PieChart";

const User = () => {
  const cards = [{}, {}, {}, {}];
  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {cards.map(() => {
          return (
            <div
              style={{
                flex: "1 1 0",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                alignItems: "center",
                padding: "5rem",
                borderRadius: "10px",
              }}
            >
              Card
            </div>
          );
        })}
      </div>
      <WeeklyRevenue
        style={{
          with: "60%",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      />
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
        }}
      >
        <MiniCalendar
          h="100%"
          selectRange={true}
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default User;
