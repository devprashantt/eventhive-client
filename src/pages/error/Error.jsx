import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";

const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        gap: "1.5rem",
      }}
    >
      <div>
        <img src={images.error} alt="error" />
      </div>
      <div>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Oops!
        </h1>
        <p
          style={{
            fontSize: "1rem",
            fontWeight: "200",
            textAlign: "center",
          }}
        >
          We can’t seem to find the page you are looking for
        </p>
      </div>
      <div>
        <Link
          to={"/"}
          style={{
            color: "#fff",
            backgroundColor: "#7848F4",
            padding: "1rem 1.5rem",
            borderRadius: "0.5rem",
            textDecoration: "none",
            fontSize: "1.2rem",
          }}
        >
          Back to Homepage
        </Link>
      </div>
      <div>
        <p>Follow us on</p>
      </div>
    </div>
  );
};

export default Error;
