import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import "./CollegeContainer.scss";
import { images } from "../../constants";
import { CollegeCard, Spinner } from "../../components";
import { DataContext } from "../../context/DataContext";

const CollegeContainer = () => {
  const { colleges } = useContext(DataContext);

  const [search, setSearch] = useState("");

  const [filteredColleges, setFilteredColleges] = useState(colleges);

  useEffect(() => {
    const filtered = colleges.filter((college) =>
      college.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredColleges(filtered);
  }, [search, colleges]);

  const handleSearch = () => {
    const filtered = colleges.filter((college) =>
      college.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredColleges(filtered);
  };

  const handleReset = () => {
    setSearch("");
    setFilteredColleges(colleges);
  };

  return (
    <div className="college__container">
      <div className="college__container__header">
        <h2>
          College <span>Events</span>
        </h2>
        <div className="college__container__header__search">
          <input
            type="text"
            placeholder="Search for colleges"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="input__icon" onClick={handleSearch}>
            <img src={images.search} alt="Search" />
          </div>
          {search && (
            <div className="input__icon" onClick={handleReset}>
              <img src={images.reset} alt="Reset" />
            </div>
          )}
        </div>
      </div>
      <div className="college__container__body">
        <div className="college__container__body__list">
          {filteredColleges.length > 0 ? (
            <>
              {filteredColleges.slice(0, 6).map((college) => (
                <Link key={college._id} to={`/colleges/${college._id}`}>
                  <CollegeCard
                    key={college._id}
                    name={college.name}
                    image={college.imgUrl}
                    location={college.location}
                  />
                </Link>
              ))}
            </>
          ) : (
            <div className="college__container__body__list__empty">
              <img src={images.dummy} alt="No college found" />
              <p>No college found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollegeContainer;
