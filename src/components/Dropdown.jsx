import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../styles/dropdown.scss";
import Button from "./Button";

const Dropdown = () => {
  // Initialize state variables
  const [colleges, setColleges] = useState([]);
  const [categories, setCategories] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");

  useEffect(() => {
    // Use Promise.all to make parallel API requests
    Promise.all([
      axios.get("http://localhost:3000/api/colleges"),
      axios.get("http://localhost:3000/api/categories"),
      axios.get("http://localhost:3000/api/events"),
    ])
      .then((responses) => {
        // Destructure responses to get data from each request
        const [collegesResponse, categoriesResponse, eventsResponse] =
          responses;
        // Update state variables with response data
        setColleges(collegesResponse.data);
        setCategories(categoriesResponse.data);
        setEvents(eventsResponse.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = () => {
    const filteredEvents = events.filter(
      (event) =>
        (!selectedCollege || selectedCollege === event.colleges[0]) &&
        (!selectedCategory || selectedCategory === event.category[0]) &&
        (!selectedEvent || selectedEvent === event.status)
    );
    console.log(selectedCollege);
    console.log(selectedCategory);
    console.log(selectedEvent);
    console.log(events);
    console.log(filteredEvents);
  };

  // Render the dropdown menus and search button
  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <label htmlFor="college-dropdown">Select College</label>
        <select
          id="college-dropdown"
          value={selectedCollege}
          onChange={(e) => setSelectedCollege(e.target.value)}
        >
          <option value=""> College</option>
          {colleges.map((college) => (
            <option key={college._id} value={college._id}>
              {college.name}
            </option>
          ))}
        </select>
      </div>
      <div className="dropdown">
        <label htmlFor="category-dropdown">Select Category</label>
        <select
          id="category-dropdown"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value=""> Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="dropdown">
        <label htmlFor="time-dropdown">Select Status</label>
        <select
          id="time-dropdown"
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
        >
          <option value="">Upcoming</option>
          {events.map((event) => (
            <option key={event._id} value={event.status}>
              {event.status}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Dropdown;
