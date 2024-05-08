import React, { useState } from "react";
import Draggable from "react-draggable";

const Note = ({ note, onDelete }) => {
  const [position, setPosition] = useState({ x: note.x, y: note.y });

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const handleDelete = () => {
    onDelete(note.id);
  };

  return (
    <Draggable position={position} onDrag={handleDrag}>
      <div
        className="note"
        style={{
          background: "rgba(255, 255, 255, 0.35)",
          padding: "20px",
          maxWidth: "fit-content",
          cursor: "move",
          display: "flex",
          alignItems: "center",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(2.3px)",
          WebkitBackdropFilter: "blur(2.3px)",
          border: "1px solid rgba(255, 255, 255, 0.65)",
          position: "relative",
        }}
      >
        <p style={{ marginRight: "10px" }}>📌</p>
        <div style={{ marginRight: "20px" }}>{note.text}</div>
        <button
          onClick={handleDelete}
          style={{
            marginLeft: "auto",
            border: "none",
            background: "lightcoral",
            padding: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            position: "absolute",
            top: 0,
            right: 0,
          }}
        >
          X
        </button>
      </div>
    </Draggable>
  );
};

export default Note;
