import React from "react";
import "./../styles/button.scss";

const TextButtton = ({ text }) => {
  return (
    <div className="text__button">
      <button>{text}</button>
    </div>
  );
};

const IconButton = ({ icon }) => {
  return (
    <div className="icon__button">
      <button>
        <img src={icon} alt="icon__button" />
      </button>
    </div>
  );
};

const TextIconButton = ({ text, icon }) => {
  return (
    <div className="text-icon__button">
      <button>
        <img src={icon} alt={text} />
        <p>{text}</p>
      </button>
    </div>
  );
};

const CircularIconButton = ({ icon }) => {
  return (
    <div className="circular-icon__button">
      <button>
        <img src={icon} alt="circular-icon__button" />
      </button>
    </div>
  );
};

export default {
  TextButtton,
  IconButton,
  TextIconButton,
  CircularIconButton,
};
