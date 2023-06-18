import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import { EventContainer } from "../../container";

const UserEvents = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        gap: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          gap: "1.5rem",
          width: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "50%",
            position: "absolute",
            padding: "0 2rem",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <h1>Discover and experience extraordinary Events</h1>
          <p>
            Enter in the world of events. Discover now the latest Events or
            start creating your own!
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Link
              to={"/events"}
              style={{
                padding: "1rem 2rem",
                borderRadius: "0.5rem",
                backgroundColor: "#fff",
                color: "#000",
              }}
            >
              Discover now
            </Link>
            <Link
              style={{
                color: "#fff",
              }}
            >
              Watch video
            </Link>
          </div>
        </div>
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "1rem",
          }}
          src={images.events_dashboard}
          alt=""
        />
      </div>
    </div>
  );
};

export default UserEvents;
