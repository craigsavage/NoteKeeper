import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([])

  // Adds a note to the notes array
  function addNote(note) {
    setNotes(prev => [...prev, note]);
  }

  // Removes a note from the notes array
  function deleteNote(id) {
    setNotes(prev => {
      return prev.filter((note, index) => index !== id)
    });
  }
  console.log(notes)

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
