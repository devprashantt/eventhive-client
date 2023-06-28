import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import SyncLoader from "react-spinners/SyncLoader";

import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";

import "./Event.scss";
import { images } from "../../../constants";
import { Register } from "../../../components";
import { EventContainer } from "../../../container";
import { formatDate } from "../../../utils";

const Event = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [colleges, setColleges] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const collegesResponse = await axios.get(
          `${import.meta.env.VITE_BACKEND_HOST}/colleges`
        );
        const eventsResponse = await axios.get(
          `${import.meta.env.VITE_BACKEND_HOST}/events`
        );
        const collegesData = collegesResponse.data;
        const eventsData = eventsResponse.data;
        setColleges(collegesData);
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const event = events.find((event) => event._id === id);
  const college = colleges.find((college) => college._id === event.colleges[0]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "3rem",
        }}
      >
        <SyncLoader
          color={"#7848F4"}
          loading={loading}
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (!event) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "3rem",
        }}
      >
        Event not found
      </div>
    );
  }

  const maxLength = 40;
  let truncatedString = event.name.substring(0, maxLength);
  if (event.name.length > maxLength) {
    truncatedString += "...";
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
              {truncatedString}
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
            minWidth: "50%",
            gap: "2rem",
          }}
        >
          <h1>
            <span>Event Details</span>
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "400",
              color: "gray",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                margin: "0 0 1rem 0",
                color: "#7848f4",
              }}
            >
              {event.name}
            </p>
            {event.description}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "1rem",
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
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
            gap: "1.5rem",
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
            {event.tags.slice(0, 6).map((tag) => (
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            <h1>
              <span>Share with friend</span>
            </h1>
            <div
              style={{
                display: "flex",
                gap: "1rem",
              }}
            >
              <a href={event.social_links[0].linkedin}>
                <img
                  src={images.linkedin}
                  alt="linkedin"
                  style={{
                    cursor: "pointer",
                  }}
                />
              </a>
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
              <a href={event.social_links[0].facebook}>
                <img
                  src={images.facebook}
                  alt="facebook"
                  style={{
                    cursor: "pointer",
                  }}
                />
              </a>
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
