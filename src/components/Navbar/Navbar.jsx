import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.scss";
import { images } from "../../constants";

const Navbar = ({ isLoggedIn }) => {
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

  const handleLogout = () => {
    localStorage.clear();
    isLoggedIn = false;
    navigate("/");
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
        <Link to="colleges" className="menu">
          Colleges
        </Link>
        <Link to="events" className="menu">
          Events
        </Link>
        <Link className="menu">About</Link>
        <Link className="menu">Contact</Link>
      </div>

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
                      to="/dashboard"
                      className="navigation__profile__options__item"
                      role="menuitem"
                    >
                      Your Profile
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
            <Link to="/signin" className="navigation__signin">
              Login
            </Link>
            <Link to="/signup" className="navigation__signup">
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
