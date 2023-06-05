import React from "react";

import "./Spinner.scss";

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner__circle"></div>
      <p>Loading content...</p>
    </div>
  );
};

export default Spinner;
