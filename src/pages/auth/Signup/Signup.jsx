import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Signup.scss";
import { Input } from "../../../components";
import { images } from "../../../constants";

function Signup() {
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const [error, setError] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    setLoading(true);
    const res = await axios
      .post(`${import.meta.env.VITE_BACKEND_HOST}/auth/signup`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    setLoading(false);
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/signin"));
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
              name="name"
              value={inputs.name}
              onChange={handleChange}
            />
            <Input
              type="email"
              placeholder="Enter your email"
              label="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
            />
            <Input
              type="password"
              placeholder="Enter your password"
              label="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
            />
            <button type="submit">{loading ? "Loading..." : "Signup"}</button>
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
