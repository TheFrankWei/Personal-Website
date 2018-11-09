import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar.js';
class App extends Component {
  render() {
    return (
      <div className = 'App'>
    
      <header>
        <NavBar/>
      </header>
      Software Developer | Photographer
      </div>
    );
  }
}

export default App;
