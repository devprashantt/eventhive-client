import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../context/DataContext";
import { Link } from "react-router-dom";

import "./Colleges.scss";
import { CollegeCard } from "../../../components";
import { images } from "../../../constants";

const Colleges = () => {
  const { colleges } = useContext(DataContext);
  console.log(colleges);
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

  const imgArray = [images.college1, images.college2, images.college3];

  return (
    <div className="colleges">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "black",
            fontSize: "64px",
            fontSmooth: "always",
            fontWeight: "bold",
            lineHeight: "1.2",
          }}
        >
          Checkout your{" "}
          <span
            style={{
              color: "#7848F4",
            }}
          >
            college events
          </span>{" "}
          now!!
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gridGap: "20px",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              clipPath: "circle(50.0% at 50% 50%)",
              height: "300px",
              background: `url(${imgArray[0]})`,
            }}
          >
            hy
          </div>
          <div
            style={{
              width: "100%",
              clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
              height: "300px",
              background: `url(${imgArray[1]})`,
            }}
          ></div>
          <div
            style={{
              width: "100%",
              clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
              height: "300px",
              background: `url(${imgArray[2]})`,
            }}
          ></div>
        </div>
      </div>
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
              description={college.description.substring(0, 100) + "..."}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
