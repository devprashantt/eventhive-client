import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import "./College.scss";
import { DataContext } from "../../../context/DataContext";
import { images } from "../../../constants";

const Event = () => {
  const { colleges } = useContext(DataContext);
  const { id } = useParams();

  const college = colleges.find((event) => event._id === id);

  if (!college) {
    return <div>Event not found</div>;
  }

  return (
    <div className="college">
      <div className="college__image">
        <img src={college.imgUrl} alt={college.name} />
        <Link to="/colleges">
          <div className="college__image__button">
            <img src={images.caretleft} alt="careleft" />
            <p>Back to colleges</p>
          </div>
        </Link>
      </div>
      <div className="college__content">
        <div className="college__content__title">{college.name}</div>
        <div className="college__content__description">
          <p>{/* {college.description} */}</p>
          <p>
            DesignHub organized a 3D Modeling Workshop using Blender on 16th
            February at 5 PM. The workshop taught participants the magic of
            creating stunning 3D models and animations using Blender. It was
            suitable for both beginners and experienced users. The event was
            followed by a blender-render competition, which added to the
            excitement. DesignHub organized a 3D Modeling Workshop using Blender
            on 16th February at 5 PM. The workshop taught participants the magic
            of creating stunning 3D models and animations using Blender. It was
            suitable for both beginners and experienced users. The event was
            followed by a blender-render competition, which added to the
            excitement. DesignHub organized a 3D Modeling Workshop using Blender
            on 16th February at 5 PM. The workshop taught participants the magic
            of creating stunning 3D models and animations using Blender. It was
            suitable for both beginners and experienced users. The event was
            followed by a blender-render competition, which added to the
            excitement. DesignHub organized a 3D Modeling Workshop using Blender
            on 16th February at 5 PM. The workshop taught participants the magic
            of creating stunning 3D models and animations using Blender. It was
            suitable for both beginners and experienced users. The event was
            followed by a blender-render competition, which added to the
            excitement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event;
