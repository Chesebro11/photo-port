import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from "./components/Gallery"
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
