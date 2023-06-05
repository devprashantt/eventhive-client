import React from "react";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__header">
        <h1 className="contact__heading">
          Contact{" "}
          <span
            style={{
              color: "#7848F4",
            }}
          >
            Us
          </span>
        </h1>
        <p className="contact__content">
          We value your feedback and are always here to assist you. If you have
          any questions, concerns, or suggestions, please don't hesitate to get
          in touch with us. Our dedicated team is ready to help and provide you
          with the information you need.
        </p>
      </div>
      <div className="contact__info">
        <h3>Contact Information:</h3>
        <ul>
          <li>
            Phone: <a href="tel:8009396321">+91 8009396321</a>
          </li>
          <li>
            Email:{" "}
            <a href="mailto:officialprashanttt@gmail.com">
              officialprashanttt@gmail.com
            </a>
          </li>
          <li>
            Address:{" "}
            <a href="https://en.wikipedia.org/wiki/New_Delhi">
              New Delhi, India
            </a>
          </li>
        </ul>
        <p>
          Feel free to reach out to us through any of the provided contact
          methods. We strive to respond promptly and ensure your inquiries are
          addressed effectively. <br /> We appreciate your interest and look
          forward to hearing from you soon!
        </p>
      </div>
    </div>
  );
};

export default Contact;
