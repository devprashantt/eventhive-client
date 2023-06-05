import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { authActions } from "./../../store";
import { images } from "../../constants";

axios.defaults.withCredentials = true;

import "./Navbar.scss";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef1.current &&
      !dropdownRef1.current.contains(event.target) &&
      dropdownRef2.current &&
      !dropdownRef2.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const sendLogoutReq = async () => {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_HOST}/auth/logout`,
      null,
      {
        withCredentials: true,
      }
    );
    if (res.status == 200) {
      return res;
    }
    return new Error("Unable to Logout. Please try again");
  };

  const handleLogout = () => {
    sendLogoutReq().then(() => dispatch(authActions.logout()));
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="navigation">
      <Link to="/">
        <img src={images.logo} alt="logo" className="navigation__logo" />
      </Link>

      <div className="navigation__menu">
        <Link to={"/colleges"} className="menu">
          Colleges
        </Link>
        <Link to={"events"} className="menu">
          Events
        </Link>
        <Link to={"/about"} className="menu">
          About
        </Link>
        <Link to={"/contact"} className="menu">
          Contact
        </Link>
      </div>

      <div className="navigation__right">
        {isLoggedIn ? (
          <>
            <Link to={"/create-event"} className="navigation__create">
              Create
            </Link>
            <div className="navigation__profile" ref={dropdownRef1}>
              <img
                className="navigation__profile__image"
                src={images.menu}
                alt="profile image"
                onClick={toggleDropdown}
                style={{ cursor: "pointer" }}
              />

              {isDropdownOpen && (
                <div
                  className="navigation__profile__options"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div role="none">
                    <Link
                      to={"/dashboard"}
                      className="navigation__profile__options__item"
                      role="menuitem"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="navigation__profile__options__item"
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="navigation__menu" ref={dropdownRef2}>
              <img src={images.menu} alt="menu" onClick={toggleDropdown} />
              {isDropdownOpen && (
                <div
                  className="navigation__profile__options"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div role="none">
                    <Link
                      to={"/dashboard"}
                      className="navigation__profile__options__item"
                      role="menuitem"
                    >
                      Your Profile
                    </Link>
                    <Link
                      to={"/colleges"}
                      className="navigation__profile__options__item"
                      role="menuitem"
                    >
                      Colleges
                    </Link>
                    <Link
                      to={"/events"}
                      className="navigation__profile__options__item"
                      role="menuitem"
                    >
                      Events
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="navigation__profile__options__item"
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="navigation__auth">
            <Link to="/signin" className="navigation__signin">
              Login
            </Link>
            <Link to="/signup" className="navigation__signup">
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
