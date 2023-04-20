import { useState, useEffect } from "react";
import axios from "axios";

import "./CreateEvent.scss";
import { images } from "./../../../constants";

function CreateEvent() {
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
    img: "",
    collegeOptions: [],
    selectedCollege: "",
  });

  useEffect(() => {
    async function fetchColleges() {
      const response = await axios.get("http://localhost:3000/colleges");
      setEventData((prevState) => ({
        ...prevState,
        collegeOptions: response.data,
      }));
    }
    fetchColleges();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: eventData.name,
      description: eventData.description,
      date: eventData.date,
      location: eventData.location,
      img: eventData.img,
      college: eventData.selectedCollege,
    };
    console.log("Event created successfully");
    console.log(data);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setEventData((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="create__event">
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            name="name"
            value={eventData.name}
            onChange={handleChange}
            placeholder="Write your event name..."
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            placeholder="Write description about your event..."
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
          />
        </label>

        <div className="flex">
          <label style={{ flex: "1" }}>
            Start time:
            <input type="time" />
          </label>
          <label style={{ flex: "1" }}>
            End Time:
            <input type="time" />
          </label>
        </div>

        <label>
          Location:
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            placeholder="Location of event..."
          />
        </label>
        <label for="input_img" className="label__img">
          Image:
          <div>Choose Image</div>
          <img src="" alt="" />
          <input
            type="file"
            name="img"
            id="input_img"
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onloadend = () => {
                setEventData((prevState) => ({
                  ...prevState,
                  img: reader.result,
                }));
              };
              reader.readAsDataURL(file);
            }}
          />
        </label>
        <label>
          College:
          <select
            name="selectedCollege"
            value={eventData.selectedCollege}
            onChange={handleChange}
          >
            <option value="">Select a college</option>
            {eventData.collegeOptions.map((college) => (
              <option key={college._id} value={college._id}>
                {college.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}

export default CreateEvent;
