import React from "react";

const Input = ({ type, placeholder, label, value, onChange }) => {
  return (
    <div className="input__box">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
