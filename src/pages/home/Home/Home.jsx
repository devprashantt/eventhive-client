import { Link } from "react-router-dom";

import "./Home.scss";
import {
  EventContainer,
  DropdownContainer,
  CollegeContainer,
} from "../../../container";
import { Header, Advertisement } from "../../../components";

function Home() {
  return (
    <div className="home">
      <Header />

      <DropdownContainer />
      <EventContainer />

      <Advertisement />

      <CollegeContainer />
    </div>
  );
}

export default Home;
