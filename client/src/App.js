import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className = 'App'>
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
