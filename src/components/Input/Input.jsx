import React from "react";

import "./Input.scss";

const Input = ({ type, placeholder, label, value, onChange, name }) => {
  return (
    <div className="input__box">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={label}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
