import React from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';

function App() {
    return (
        <div>
            <Header />
            <div className="noteBoard">
                <Note />
                <Footer />
            </div>
        </div>
    );
}

export default App;