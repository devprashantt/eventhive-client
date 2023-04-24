import React from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

const AddCardModal = ({ visible, onClose, handleCardAdd }) => {
  const [title, setTitle] = React.useState("");
  const [detail, setDetail] = React.useState("");

  return (
    <Rodal
      customStyles={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "20px",
        height: "300px",
      }}
      visible={visible}
      onClose={onClose}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            gap: "10px",
          }}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Card Title
          </span>
          <input
            type="text"
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "5px",
              marginBottom: "10px",
            }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            gap: "10px",
          }}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Detail
          </span>
          <textarea
            rows={5}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "5px",
              outline: "none",
            }}
            value={detail}
            type="text"
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>

        <button
          disabled={title === "" && detail === ""}
          style={{
            backgroundColor: "#7f5af0",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
          onClick={() => {
            handleCardAdd(title, detail);
            setDetail("");
            setTitle("");
          }}
        >
          Add
        </button>
      </div>
    </Rodal>
  );
};

export default AddCardModal;
