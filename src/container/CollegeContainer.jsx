import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../constants";
import { CollegeCard, Spinner } from "../components";

const CollegeContainer = () => {
  const [colleges, setColleges] = React.useState([]);
  const [originalColleges, setOriginalColleges] = useState([]);

  const [numToShow, setNumToShow] = useState(6);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [collegesResponse] = await Promise.all([
          axios.get("http://localhost:3000/colleges"),
        ]);
        setColleges(collegesResponse.data);
        setOriginalColleges(collegesResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredEvents = colleges.filter((college) =>
      college.name.toLowerCase().includes(search.toLowerCase())
    );
    setColleges(filteredEvents);
  };

  const handleReset = () => {
    setSearch("");
    setColleges(originalEvents);
  };

  const visibleColleges = colleges.slice(0, numToShow);

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
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="college__container__body__list">
            {visibleColleges.length > 0 ? (
              <>
                {visibleColleges.map((college) => (
                  <Link key={college._id} to={`/colleges/${college._id}`}>
                    <CollegeCard
                      key={college._id}
                      name={college.name}
                      image={college.imgUrl}
                      location={college.location}
                    />
                  </Link>
                ))}
                {visibleColleges.length < colleges.length && (
                  <Link to="/colleges">
                    <button>Load More...</button>
                  </Link>
                )}
              </>
            ) : (
              <div className="college__container__body__list__empty">
                <img src={images.dummy} alt="No college found" />
                <p>No events found</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegeContainer;
