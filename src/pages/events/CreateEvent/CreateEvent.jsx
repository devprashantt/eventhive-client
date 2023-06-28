import { useState, useEffect } from "react";
import axios from "axios";

import "./CreateEvent.scss";
import { images } from "./../../../constants";

function CreateEvent() {
  const [active, setActive] = useState(false);
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    location: "",
    img: "",
    socialLinks: {
      facebook: "",
      linkedin: "",
    },
    collegeOptions: [],
    selectedCollege: "",
    tags: [],
    category: "",
  });

  useEffect(() => {
    async function fetchColleges() {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_HOST}/colleges`
      );

      setEventData((prevState) => ({
        ...prevState,
        collegeOptions: response.data,
      }));
    }

    fetchColleges();
  }, []);

  async function handleSubmit(event) {
    setActive(true);
    event.preventDefault();

    const data = {
      name: eventData.name,
      description: eventData.description,
      date: eventData.date,
      startTime: eventData.startTime,
      endTime: eventData.endTime,
      location: eventData.location,
      banner: eventData.img,
      socialLinks: eventData.socialLinks,
      college: eventData.selectedCollege,
      tags: eventData.tags,
      category: eventData.category,
    };

    axios
      .post(`${import.meta.env.VITE_BACKEND_HOST}/events`, data)
      .then((response) => {
        setActive(false);
        window.location.href = "/";
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "tags") {
      const tagsArray = value.split(",");
      setEventData((prevState) => ({
        ...prevState,
        tags: tagsArray,
      }));
    } else if (name === "facebook" || name === "linkedin") {
      setEventData((prevState) => ({
        ...prevState,
        socialLinks: {
          ...prevState.socialLinks,
          [name]: value,
        },
      }));
    } else {
      setEventData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
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

          <div
            style={{
              width: "100%",
              display: "flex",
              gap: "2rem",
            }}
          >
            <label>
              Tags:
              <input
                type="text"
                name="tags"
                value={eventData.tags}
                onChange={handleChange}
                placeholder="Add tags separated by commas..."
              />
            </label>

            <label>
              Category:
              <input
                type="text"
                name="category"
                value={eventData.category}
                onChange={handleChange}
                placeholder="Add category..."
              />
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
              <input
                type="time"
                name="startTime"
                value={eventData.startTime}
                onChange={handleChange}
              />
            </label>
            <label style={{ flex: "1" }}>
              End Time:
              <input
                type="time"
                name="endTime"
                value={eventData.endTime}
                onChange={handleChange}
              />
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
              📍 Where is your event taking place? 🕒 Set your start and end
              time!
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
            <h1 style={{ margin: "0" }}>SOCIAL MEDIA LINKS</h1>
            <p style={{ margin: "0" }}>
              Create your unforgettable event with ease! 🌟 Fill in the details
              below to get started on crafting an incredible experience for your
              attendees.
            </p>
          </div>

          <label>
            <img
              style={{
                width: "20px",
                height: "20px",
              }}
              src={images.facebook}
              alt="facebook"
            />
            Facebook:
            <input
              type="text"
              name="facebook"
              value={eventData.socialLinks.facebook}
              onChange={handleChange}
              placeholder="Facebook link..."
            />
          </label>

          <label>
            <img
              style={{
                width: "20px",
                height: "20px",
              }}
              src={images.linkedin}
              alt="linkedin"
            />
            Linkedin:
            <input
              type="text"
              name="linkedin"
              value={eventData.socialLinks.linkedin}
              onChange={handleChange}
              placeholder="Linkedin link..."
            />
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
          <label htmlFor="input_img" className="banner__img">
            Event Banner:
            <div>Choose Image</div>
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

          {eventData.img && (
            <img
              src={eventData.img}
              alt="Event Banner"
              style={{
                maxWidth: "100%",
                height: "25rem",
                objectFit: "cover",
                borderRadius: "0.5rem",
              }}
            />
          )}
        </div>

        <button type="submit">{active ? "Creating..." : "Create Event"}</button>
      </form>
    </div>
  );
}

export default CreateEvent;
