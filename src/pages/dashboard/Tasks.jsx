import { useEffect, useState } from "react";
import TaskCard from "./components/TaskCard";
import {
  addToDo,
  getAllToDo,
  updateToDo,
  deleteToDo,
} from "../../utils/HandleApi";

function Tasks() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Add ToDos..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            padding: "0 2rem",
            backgroundColor: "#7848f4",
            color: "white",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
          onClick={
            isUpdating
              ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
              : () => addToDo(text, setText, setToDo)
          }
        >
          {isUpdating ? "Update" : "Add"}
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        {toDo.map((item) => (
          <TaskCard
            key={item._id}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deleteToDo={() => deleteToDo(item._id, setToDo)}
          />
        ))}
      </div>
    </div>
  );
}

export default Tasks;
