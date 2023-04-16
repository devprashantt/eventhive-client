import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../context/DataContext";
import { Link } from "react-router-dom";

import "./Colleges.scss";
import { CollegeCard } from "../../../components";
import { images } from "../../../constants";

const Colleges = () => {
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
    <div className="colleges">
      <div className="colleges__header">
        <h1 className="colleges__header__name">Colleges</h1>
        <div className="colleges__header__input">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for colleges"
            className="colleges__header__input__search"
          />
          <div className="colleges__header__input__icon" onClick={handleSearch}>
            <img src={images.search} alt="Search" />
          </div>
          {search && (
            <div
              className="colleges__header__input__icon"
              onClick={handleReset}
            >
              <img src={images.reset} alt="Reset" />
            </div>
          )}
        </div>
      </div>
      <div className="colleges__container">
        {filteredColleges.map((college) => (
          <Link key={college._id} to={`/colleges/${college._id}`}>
            <CollegeCard
              name={college.name}
              location={college.location}
              image={college.imgUrl}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
