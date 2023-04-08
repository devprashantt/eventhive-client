import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleClick = async () => {
    const res = await fetch("http://localhost:3000/subscriber", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (data.success) {
      alert("Subscribed successfully");
    } else {
      alert("Something went wrong");
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="footer">
      <div className="footer__logo">
        <h1>
          Event <span>Hive</span>
        </h1>
      </div>
      <div className="footer__mail">
        <input
          className="footer__mail__input"
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <button className="footer__mail__button" onClick={handleClick}>
          Subscribe
        </button>
      </div>
      <div className="footer__menu">
        <Link>
          <p>Home</p>
        </Link>
        <Link>
          <p>About</p>
        </Link>
        <Link>
          <p>Services</p>
        </Link>
        <Link>
          <p>Get in touch</p>
        </Link>
        <Link>
          <p>FAQs</p>
        </Link>
      </div>
      <hr className="footer__line" />
      <div className="footer__bottom">
        <div className="footer__bottom__language">
          <button>English</button>
        </div>
        <div className="footer__bottom__copyright">
          Non Copyrighted © 2023 Upload by Event Hive
        </div>
        <div className="footer__bottom__social">
          <img src={images.FacebookLogo} alt="FacebookLogo" />
          <img src={images.InstagramLogo} alt="InstagramLogo" />
          <img src={images.LinkedinLogo} alt="LinkedinLogo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
