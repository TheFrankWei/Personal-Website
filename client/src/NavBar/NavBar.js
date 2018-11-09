import React from 'react';
import './NavBar.css'
const NavBar = () => {
  return(
    <nav className= "NavBar">
    <ul>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/home">Home</a></li>
      {/*<li className="HomePage"><a href="./index.js">Frank Wei</a></li>*/}
    </ul>
    </nav>
  )
};

export default NavBar;
