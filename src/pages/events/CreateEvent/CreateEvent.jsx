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

  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  console.log(tags);

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

    axios.post("http://localhost:3000/events", data).then((response) => {});
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setEventData((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="create__event">
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <h1 style={{ margin: "0" }}>BASIC INFORMATION</h1>
            <p style={{ margin: "0" }}>
              Name your event and tell event-goers why they should come. Add
              details that highlight what makes it unique.
            </p>
          </div>
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

          <div>
            {tags.map((tag) => (
              <div key={tag}>
                {tag} <button onClick={() => handleRemoveTag(tag)}>X</button>
              </div>
            ))}
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <h1 style={{ margin: "0" }}>DATE & TIME</h1>
            <p style={{ margin: "0" }}>
              When is your event taking place? Be sure to set a start and end
              time.
            </p>
          </div>
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
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <h1 style={{ margin: "0" }}>LOCATION</h1>
            <p style={{ margin: "0" }}>
              Where is your event taking place? Be sure to set a start and end
            </p>
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
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <h1 style={{ margin: "0" }}>LOGO & BANNER</h1>
            <p style={{ margin: "0" }}>
              Add a logo and banner to your event page. These will appear at the
            </p>
          </div>
          <label for="input_img" className="label__img">
            Banner:
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
        </div>

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}

export default CreateEvent;
