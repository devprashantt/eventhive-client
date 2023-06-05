import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Dropdown } from "../../components";
import "./DropdownContainer.scss";
import { DataContext } from "../../context/DataContext";

const DropdownContainer = () => {
  const { colleges, categories, events } = useContext(DataContext);

  const [selectedCollege, setSelectedCollege] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleCollegeChange = (value) => {
    setSelectedCollege(value);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleStatusChange = (value) => {
    setSelectedStatus(value);
  };

  const handleSearch = () => {
    console.log("Selected College:", selectedCollege);
    console.log("Selected Category:", selectedCategory);
    console.log("Selected Status:", selectedStatus);
  };

  return (
    <div className="dropdown__container">
      <Dropdown
        options={colleges}
        label="Select College"
        value={selectedCollege}
        onChange={handleCollegeChange}
      />
      <Dropdown
        options={categories}
        label="Select Category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      />
      <Dropdown
        options={events}
        label="Select Status"
        value={selectedStatus}
        onChange={handleStatusChange}
      />
      <Link to="/search">
        <button onClick={handleSearch}>Search</button>
      </Link>
    </div>
  );
};

export default DropdownContainer;
