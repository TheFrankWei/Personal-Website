import React, {Component} from 'react';
import './Nav.css';
import { HashLink as Link } from 'react-router-hash-link';


class Nav extends Component{
  render(){
    const scrollToTop= () => {
      window.scrollTo({top:0, behavior:'smooth'});
  };
  return(
    <div className = 'Nav' id = 'Nav'>
    <div id = "Navbar">
    <ul>
      <li><Link smooth to='/#Contact'>Contact</Link></li>
      <li><Link smooth to='/#Portfolio'>Portfolio</Link></li>
      <li><Link smooth to='/#About'>About</Link></li>
      <li><Link smooth to='/#Welcome'>Home</Link></li>
    </ul>
    </div>

    <button id = 'toTop'
            onClick={scrollToTop}>to top</button>
    </div>

  );
}
}
export default Nav;
