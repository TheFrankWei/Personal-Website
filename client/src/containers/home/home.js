import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './home.css';

import About from './about/about.js';
import Portfolio from './portfolio/portfolio.js';
import Contact from './contact/contact.js';

class Home extends Component {
  render() {
    return (
      <div className = 'Home'>
        <ul>
          <li><Link to='/'> Home </Link></li>
          <li><Link to='/About'> About Me </Link></li>
          <li><Link to='/Portfolio'> Portfolio </Link></li>
          <li><Link to='/Contact'> Contact </Link></li>
        </ul>

        

        <Route path='/' exact />
        <Route path='/About' exact component={About}/>
        <Route path='/Portfolio' exact component={Portfolio}/>
        <Route path='/Contact' exact component={Contact}/>
      </div>
    );
  }
}

export default Home;
