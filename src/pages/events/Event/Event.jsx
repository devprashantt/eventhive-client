import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import "./Event.scss";
import { DataContext } from "../../../context/DataContext";
import { images } from "../../../constants";
import { EventCard, Register, Map } from "../../../components";
import { EventContainer } from "../../../container";

const Event = () => {
  const { events } = useContext(DataContext);
  const { colleges } = useContext(DataContext);
  const { id } = useParams();

  const event = events.find((event) => event._id === id);
  const college = colleges.find((college) => college._id === event.colleges[0]);

  console.log(colleges);
  console.log(event.colleges[0]);
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
              {event.description}
            </div>
            <div className="register__header__detail__content__location">
              <img src={images.MapPin} alt="location" />
              <p>View on map</p>
            </div>
          </div>
          <div className="event__header__detail__register">
            <Register />
          </div>
        </div>
      </div>
      <div className="register__body">
        <div className="register__body_l">
          <div className="register__body_l__description">
            <h1></h1>
            <p></p>
          </div>
          <div className="register__body_l__hours">
            <h1></h1>
            <p></p>
          </div>
          <div className="register__body_l__contact">
            <h1></h1>
            <p></p>
          </div>
        </div>
        <div className="register__body_r">
          <div className="register__body_r__location">
            <h1></h1>
            <div className="register__body_r__location__map">
              <Map />
            </div>
            <h3></h3>
            <p></p>
          </div>
          <div className="register__body_r__tags">
            <div className="register__body_r__tags__tag"></div>
          </div>
          <div className="register__body_r__socials">
            <img src={images.facebook} alt="FacebookLogo" />
            <img src={images.twitter} alt="InstagramLogo" />
            <img src={images.linkedin} alt="LinkedinLogo" />
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
