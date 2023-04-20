import React from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
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

export default UserProfile;
