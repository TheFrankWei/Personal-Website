import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Home.css';

import About from './About/About.js';
import Portfolio from './Portfolio/Portfolio.js';
import Contact from './Contact/Contact.js';
import Welcome from './Welcome/Welcome.js';

class Home extends Component {
  render() {
    return (
      <div className = 'Home'>
        <ul>
          <li><Link to='/Contact'>Contact</Link></li>
          <li><Link to='/Portfolio'>Portfolio</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/'>Home</Link></li>
        </ul>


        {Welcome}
        {About}
        {Portfolio}
        {Contact}

        <Route path='/' exact component = {Welcome} />
        <Route path='/About' exact component={About}/>
        <Route path='/Portfolio' exact component={Portfolio}/>
        <Route path='/Contact' exact component={Contact}/>
      </div>
    );
  }
}

export default Home;
