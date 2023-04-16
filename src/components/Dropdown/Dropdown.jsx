import React from "react";

import "./Dropdown.scss";

const Dropdown = ({ options, label, value, onChange }) => {
  return (
    <div className="dropdown">
      <label htmlFor={`${label}-dropdown`}>{label}</label>
      <select
        id={`${label}-dropdown`}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
