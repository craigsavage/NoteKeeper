import React from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import notes from '../notes';

function App() {
    return (
        <div>
            <Header />
            <div className="noteBoard">
                {notes.map(note => <Note key={note.key} noteTitle={note.title} noteBody={note.content}/> )}
            </div>
            <Footer />
        </div>
    );
}

export default App;