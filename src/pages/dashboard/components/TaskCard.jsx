import React from "react";

import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const TaskCard = ({ text, updateMode, deleteToDo }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        flexWrap: "wrap",
        flex: "1 1 0",
        minWidth: "20rem",
        minHeight: "5rem",
        padding: "1rem",
        borderRadius: "0.5rem",
        backgroundColor: "#FFF",
      }}
    >
      <div className="text">{text}</div>
      <div
        className="icons"
        style={{
          display: "flex",
          gap: "0.5rem",
        }}
      >
        <BiEdit
          className="icon"
          onClick={updateMode}
          style={{
            cursor: "pointer",
          }}
        />
        <AiFillDelete
          className="icon"
          onClick={deleteToDo}
          style={{
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default TaskCard;
