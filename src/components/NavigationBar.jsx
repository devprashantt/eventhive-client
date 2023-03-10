import React from "react";
import "./../styles/navigationbar.scss";
import { Button } from "./../components";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="navigation__bar">
      <div className="left">
        <h1>
          Event<span>Hive</span>
        </h1>
      </div>
      <div className="right">
        <Link to="/signin">
          <p>Signin</p>
        </Link>
        <Link to="/signup">
          <Button.TextButtton text="Signup" />
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
