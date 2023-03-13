import { images } from "../constants";
import { EventContainer, DropdownContainer } from "../container";
import { useState } from "react";

function Home() {
  const imgArray = [
    images.home_image,
    images.image1,
    images.image2,
    images.image3,
  ];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const goForward = () => {
    if (currentImgIndex === imgArray.length - 1) {
      setCurrentImgIndex(0);
    } else {
      setCurrentImgIndex(currentImgIndex + 1);
    }
  };

  const goBackward = () => {
    if (currentImgIndex === 0) {
      setCurrentImgIndex(imgArray.length - 1);
    } else {
      setCurrentImgIndex(currentImgIndex - 1);
    }
  };

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__img">
          <img src={imgArray[currentImgIndex]} alt="hero" />
          <div className="home__img-controls">
            <div onClick={goBackward} className="home__img-control">
              <img src={images.caretleft} alt="careleft" />
            </div>
            <div onClick={goForward} className="home__img-control">
              <img src={images.careright} alt="careright" />
            </div>
          </div>
          <h1>
            Made for those <br />
            who do
          </h1>
        </div>
      </div>
      <DropdownContainer />
      <EventContainer title="Upcoming" />
    </div>
  );
}

export default Home;
