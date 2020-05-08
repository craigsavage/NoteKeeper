import React, {useState} from "react";

function CreateArea() {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleNote(event) {
    const {name, value} = event.target;

    setNote(prev => {
      return {
        ...prev,
        [name]: value
      }      
    })
    
  }
  console.log(note)
  return (
    <div>
      <form >
        <input name="title" value={note.title} onChange={handleNote} placeholder="Title" />
        <textarea name="content" value={note.content} onChange={handleNote}  placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
