// App.js
import React, { useState, useEffect } from "react";
import NoteInput from "./components/NoteInput";
import Note from "./components/Note";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  const addNote = (newNote) => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <div className="app">
      <NoteInput addNote={addNote} />
      {notes.map((note) => (
        <Note key={note.id} note={note} onDelete={deleteNote} />
      ))}
    </div>
  );
};

export default App;
