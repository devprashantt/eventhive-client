import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import { Input } from "./../components";
import { images } from "./../constants";
import "./../styles/signin.scss";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/auth/signin", {
        email,
        password,
      });
      const token = res.data.token;
      console.log(token);
      localStorage.setItem("token", token); // store token in local storage
      navigate("/"); // redirect to home page
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="signin">
      <div className="left">
        <div className="right__container">
          <h1 className="logo">
            Event<span>Hive</span>
          </h1>
          <h1>Sign In to Event Hive</h1>
          {error && <div className="error">{error}</div>}
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Enter your email"
              label="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Enter your password"
              label="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Signin</button>
          </form>
          <p>Or</p>
          <button className="google__button">
            <img src={images.google} alt="google" />
            <p>Signin with Google</p>
          </button>
        </div>
      </div>

      <div className="right">
        <img src={images.signin_image} alt="signup" />
        <div className="content">
          <h1>Welcome back</h1>
          <p>To keep connected with us provide us with your information</p>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
