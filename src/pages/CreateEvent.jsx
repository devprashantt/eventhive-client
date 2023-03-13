import { useState, useEffect } from "react";
import axios from "axios";

function CreateEvent() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [img, setImg] = useState("");
  const [collegeOptions, setCollegeOptions] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState("");

  useEffect(() => {
    async function fetchColleges() {
      const response = await axios.get("http://localhost:3000/colleges");
      setCollegeOptions(response.data);
    }
    fetchColleges();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name,
      description,
      date,
      location,
      img,
      college: selectedCollege,
    };
    console.log("Event created successfully");
    console.log(data);
    await axios.post("http://localhost:3000/events", data);
    // redirect to events page or show success message
    console.log("Event created successfully");
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Event Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
      </label>
      <label>
        College:
        <select
          value={selectedCollege}
          onChange={(e) => setSelectedCollege(e.target.value)}
        >
          <option value="">Select a college</option>
          {collegeOptions.map((college) => (
            <option key={college._id} value={college._id}>
              {college.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Create Event</button>
    </form>
  );
}

export default CreateEvent;
