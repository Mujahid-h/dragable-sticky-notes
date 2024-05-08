import React, { useState } from "react";

const NoteInput = ({ addNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleInputChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleAddNote = () => {
    if (noteText.trim() !== "") {
      addNote({
        id: Math.random().toString(36).substr(2, 9), // Generate unique id
        text: noteText,
        x: Math.floor(Math.random() * window.innerWidth), // Random x position
        y: Math.floor(Math.random() * window.innerHeight), // Random y position
      });
      setNoteText("");
    }
  };

  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.35)",
        margin: "20px auto", // Center horizontally
        width: "400px",
        display: "flex",
        justifyContent: "center",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(2.3px)",
        WebkitBackdropFilter: "blur(1.5px)",
        border: "1px solid rgba(255, 255, 255, 0.65)",
        padding: "10px",
        borderRadius: "8px", // Rounded corners
      }}
    >
      <input
        type="text"
        value={noteText}
        onChange={handleInputChange}
        placeholder="Add a note..."
        style={{
          marginRight: "10px",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          flex: "1", // Take remaining width
        }}
      />
      <button
        onClick={handleAddNote}
        style={{
          padding: "8px 12px",
          border: "none",
          borderRadius: "4px",
          background: "#007bff",
          color: "#fff",
          cursor: "pointer",
          transition: "background 0.3s ease",
        }}
      >
        Post Note
      </button>
    </div>
  );
};

export default NoteInput;
