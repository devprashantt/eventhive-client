import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = ({ isLoggedIn }) => {
  const userData = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="navigation__bar">
      <div className="left">
        <Link to="/">
          <h1>
            Event<span>Hive</span>
          </h1>
        </Link>
      </div>
      <div className="right">
        {userData && isLoggedIn ? (
          <>
            <Link to="/profile">
              <p>
                Welcome<span>{userData.name}</span>
              </p>
            </Link>
            <Link to="/create-event">
              <button>Create Event</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/signin">
              <p>Signin</p>
            </Link>
            <Link to="/signup">
              <button>Signup</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
