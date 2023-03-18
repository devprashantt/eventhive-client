import {
  EventContainer,
  DropdownContainer,
  CollegeContainer,
} from "../../container";
import { Header, Footer } from "../../components";

function Home() {
  return (
    <div className="home">
      <Header />
      <DropdownContainer />
      <EventContainer />
      <CollegeContainer />
    </div>
  );
}

export default Home;
