import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./NavigationBar.scss";
import { images } from "./../../constants";

const NavigationBar = ({ isLoggedIn, handleLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user"));

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
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

      <div className="navigation__right">
        {isLoggedIn ? (
          <>
            <Link to="/create-event" className="navigation__create">
              Create
            </Link>
            <div className="navigation__profile" ref={dropdownRef}>
              <img
                className="navigation__profile__image"
                src={images.google}
                alt="Profile image"
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
                      to="/profile"
                      className="navigation__profile__options__item"
                      role="menuitem"
                    >
                      Your Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="navigation__profile__options__item"
                      role="menuitem"
                    >
                      Settings
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
          <>
            <Link to="/signin" className="navigation__auth">
              Login
            </Link>
            <Link to="/signup" className="navigation__auth">
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default NavigationBar;
