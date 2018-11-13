import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Home.css';

import Nav from './../../components/Nav/Nav.js';
import About from './About/About.js';
import Portfolio from './Portfolio/Portfolio.js';
import Contact from './Contact/Contact.js';
import Welcome from './Welcome/Welcome.js';

class Home extends Component {
  render() {
    return (
      <div className = 'Home' id= 'Home'>
        <Nav/>

    {/* <Route path='/Welcome' exact component = {Welcome} />
        <Route path='/About' exact component={About}/>
        <Route path='/Portfolio' exact component={Portfolio}/>
        <Route path='/Contact' exact component={Contact}/>   */}

        <Welcome/>
        <About/>
        <Portfolio />
        <Contact/>
      </div>
    );
  }
}

export default Home;
