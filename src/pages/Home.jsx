import { Link } from "react-router-dom";
import { images } from "../constants";
import { NavigationBar } from "../components";
import "./../styles/home.scss";
import Dropdown from "../components/Dropdown";

function Home() {
  return (
    <div className="home">
      <NavigationBar />
      <div className="home__img">
        <img src={images.home_image} alt="hero" />
      </div>
      <Dropdown />
    </div>
  );
}

export default Home;
