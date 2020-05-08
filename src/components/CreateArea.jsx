import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  const [isTyping, setIsTyping] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleNote(event) {
    const { name, value } = event.target;

    setNote(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  function submitNote(event) {
    event.preventDefault();
    props.addNote(note);
    setNote({
      title: "",
      content: ""
    });
  }
  console.log(note)

  function typingHandler() {
    setIsTyping(true)
  }

  return (
    <div>
      <form className="create-note">
        {isTyping && <input name="title" value={note.title} onChange={handleNote} placeholder="Title" />}        
        <textarea name="content" value={note.content} onChange={handleNote} onClick={typingHandler} placeholder="Take a note..." rows={isTyping ? 3 : 1} />
        <Zoom in={isTyping} timeout={600}>
          <Fab onClick={submitNote} aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
