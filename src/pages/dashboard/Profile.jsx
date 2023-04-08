import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    console.log("Navigating to main page...");
    navigate("/");
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>Profile page</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
