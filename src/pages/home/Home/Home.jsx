import { Link } from "react-router-dom";

import "./Home.scss";
import {
  EventContainer,
  DropdownContainer,
  CollegeContainer,
} from "../../../container";
import { Header, Footer } from "../../../components";

function Home() {
  return (
    <div className="home">
      <Header />
      <DropdownContainer />
      <EventContainer />
      <div className="home__button">
        <Link to="/events">
          <button>Load More...</button>
        </Link>
      </div>

      <CollegeContainer />
      <div className="home__button">
        <Link to="/colleges">
          <button>Show All</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
