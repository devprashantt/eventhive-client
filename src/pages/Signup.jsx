import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { Input } from "./../components";
import { images } from "./../constants";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/auth/signup", {
        name,
        email,
        password,
      });
      const token = res.data.token;
      localStorage.setItem("token", token); // store token in local storage
      navigate("/"); // redirect to home page
    } catch (err) {
      console.error(err);
      setError("Could not create account");
    }
  };

  return (
    <div className="signup">
      <div className="left">
        <img src={images.signup_image} alt="signup" />
        <div className="content">
          <h1>Welcome back</h1>
          <p>To keep connected with us provide us with your information</p>
          <Link to="/signin">
            <button>Signin</button>
          </Link>
        </div>
      </div>

      <div className="right">
        <div className="right__container">
          <h1 className="logo">
            Event<span>Hive</span>
          </h1>
          <h1>Sign Up to Event Hive</h1>
          {error && <div className="error">{error}</div>}
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Enter your name"
              label="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <button type="submit">Signup</button>
          </form>
          <p>Or</p>
          <Link to="/">
            <button className="google__button">
              <img src={images.google} alt="google" />
              <p>Signup with Google</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
