import React, {Component} from 'react';
import './Nav.css';
import { HashLink as Link } from 'react-router-hash-link';
import UpIcon from './../../images/scroll_up_icon.svg';

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

    <div className = 'toTopWrapper'>
    {/* <button id = 'toTop'
    //         onClick={scrollToTop}><img
    //         src={UpIcon}
    //         alt='scroll up!'/>
    // </button>*/}
    <a
      id = 'toTop'
      onClick={scrollToTop}><img
      src={UpIcon}
      alt='scroll up!'/>
    </a>
    </div>
    </div>

  );
}
}
export default Nav;
