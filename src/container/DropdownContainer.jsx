import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "./../components";
import axios from "axios";

const DropdownContainer = () => {
  const [colleges, setColleges] = useState([]);
  const [categories, setCategories] = useState([]);
  const [events, setEvents] = useState([]);

  const [selectedCollege, setSelectedCollege] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [collegesResponse, categoriesResponse, eventsResponse] =
          await Promise.all([
            axios.get("http://localhost:3000/colleges"),
            axios.get("http://localhost:3000/categories"),
            axios.get("http://localhost:3000/events"),
          ]);
        setColleges(collegesResponse.data);
        setCategories(categoriesResponse.data);
        setEvents(eventsResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const statusOptions = [
    { _id: "1", name: "Pending" },
    { _id: "2", name: "Approved" },
    { _id: "3", name: "Rejected" },
    { _id: "4", name: "Cancelled" },
    { _id: "5", name: "Completed" },
  ];

  const handleCollegeChange = async (value) => {
    setSelectedCollege(value);
  };

  const handleCategoryChange = async (value) => {
    setSelectedCategory(value);
  };

  const handleStatusChange = async (value) => {
    setSelectedStatus(value);
  };

  const handleSearch = async () => {
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
        options={statusOptions}
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
