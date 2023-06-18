import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

import "./CollegeContainer.scss";
import { images } from "../../constants";
import { CollegeCard } from "../../components";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const CollegeContainer = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredColleges, setFilteredColleges] = useState(colleges);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const collegesResponse = await axios.get(
          `${import.meta.env.VITE_BACKEND_HOST}/colleges`
        );
        const collegesData = collegesResponse.data;
        setColleges(collegesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };
    fetchData();

    const filtered = colleges.filter((college) =>
      college.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredColleges(filtered);
  }, [search]);

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
        <div>
          {filteredColleges.length > 0 ? (
            <div className="college__container__body__list">
              {filteredColleges.slice(0, 6).map((college) => (
                <Link key={college._id} to={`/colleges/${college._id}`}>
                  <CollegeCard
                    key={college._id}
                    name={college.name}
                    image={college.imgUrl}
                    location={college.location}
                    description={college.description.substring(0, 100) + "..."}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="college__container__body__list__empty">
              <img src={images.dummy} alt="Loading colleges..." />
              <SyncLoader
                color={"#7848F4"}
                loading={loading}
                css={override}
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollegeContainer;
