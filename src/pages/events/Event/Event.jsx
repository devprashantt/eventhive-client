import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";

import "./Event.scss";
import { DataContext } from "../../../context/DataContext";
import { images } from "../../../constants";
import { EventCard, Register, Map, Payment } from "../../../components";
import { EventContainer } from "../../../container";
import { formatDate } from "../../../utils";

const Event = () => {
  const { events } = useContext(DataContext);
  const { colleges } = useContext(DataContext);
  const { id } = useParams();

  const event = events.find((event) => event._id === id);
  const college = colleges.find((college) => college._id === event.colleges[0]);

  console.log(events);
  console.log(college);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="register">
      <div className="register__header">
        <img src={event.banner} alt={event.name} />
        <div className="register__header__detail">
          <div className="register__header__detail__content">
            <Link to="/">
              <div className="register__header__detail__content__button">
                <p
                  style={{
                    padding: "10px",
                  }}
                >
                  Back
                </p>
              </div>
            </Link>
            <div className="register__header__detail__content__title">
              {event.name}
            </div>
            <div className="register__header__detail__content__college">
              {college.name}
            </div>
            <div className="register__header__detail__content__description">
              {event.description.slice(0, 250) + "..."}
            </div>
            <div className="register__header__detail__content__location">
              <img src={images.MapPin} alt="location" />
              <p>View on map</p>
            </div>
          </div>
          <div className="event__header__detail__register">
            <Register
              date={formatDate(event.start_date)}
              time={event.start_time}
              eventId={id}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          gap: "3rem",
          padding: "1% 5%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <h1>
            <span>Event Details</span>
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "400",
              lineHeight: "1.5",
              color: "gray",
            }}
          >
            {event.description}
          </p>
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <h1>Event Timing</h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AiOutlineCalendar
                style={{
                  fontSize: "1.5rem",
                  marginRight: "0.5rem",
                }}
              />
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "gray",
                }}
              >
                {formatDate(event.start_date)}
              </p>
              <AiOutlineClockCircle
                style={{
                  fontSize: "1.5rem",
                  marginRight: "0.5rem",
                  marginLeft: "2rem",
                }}
              />
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "gray",
                }}
              >
                {event.start_time} - {event.end_time}
              </p>
            </div>
          </div>
          <div>
            <h1>Organizer Contacts</h1>
            <a
              style={{
                fontSize: "1.2rem",
                color: "gray",
              }}
              href={college.link}
            >
              College website
            </a>
            <Link to={"/colleges/" + event.colleges[0]}>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "gray",
                }}
              >
                College page
              </p>
            </Link>
            <p
              style={{
                fontSize: "1.2rem",
                color: "gray",
              }}
            >
              College location:{" "}
              <span
                style={{
                  fontWeight: "bold",
                  color: "#7848f4",
                }}
              >
                {college.location}
              </span>
            </p>
            <h3>Previous events</h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              {college.fests.map((fest) => {
                return (
                  <h4
                    style={{
                      backgroundColor: "#7848f4",
                      width: "fit-content",
                      fontWeight: "300",
                      fontSize: "1.2rem",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      color: "white",
                      margin: "0",
                    }}
                  >
                    {fest.name}
                  </h4>
                );
              })}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <h1>
            <span>Location</span>
          </h1>
          <div>
            <img src={images.map} alt="" />
          </div>
          <p
            style={{
              fontSize: "1.5rem",
            }}
          >
            Event will be held at{" "}
            <span
              style={{
                fontWeight: "bold",
                color: "#7848f4",
              }}
            >
              {event.location}
            </span>
          </p>
          <h1>Tags</h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.2rem",
            }}
          >
            {[
              "Technical",
              "Jaskaran event",
              "NIT Goa",
              "Joy",
              "Seminar",
              "NIT Goa",
            ].map((tag) => (
              <div
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#fff",
                  borderRadius: "0.2rem",
                  border: "1px solid #7848f4",
                  color: "#7848f4",
                  marginRight: "1rem",
                  marginBottom: "1rem",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div>
            <h1>
              <span>Share with friend</span>
            </h1>
            <div
              style={{
                display: "flex",
                gap: "1rem",
              }}
            >
              <img
                src={images.linkedin}
                alt="linkedin"
                style={{
                  cursor: "pointer",
                }}
              />
              <img
                src={images.twitter}
                alt="twitter"
                style={{
                  cursor: "pointer",
                }}
              />
              <img
                src={images.whatsapp}
                alt="whatsapp"
                style={{
                  cursor: "pointer",
                }}
              />
              <img
                src={images.facebook}
                alt="facebook"
                style={{
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="register__similar">
        <EventContainer />
      </div>
    </div>
  );
};

export default Event;
