import React, { Component } from 'react';
import './Welcome.css'
import Letter from './../../../components/Letter/Letter.js';
class Welcome extends Component {
  render() {
    return (
      <div className = 'Welcome'>
      <div id="Name">
        <span class="logo">
          <Letter value="F"/>
          <Letter value="R"/>
          <Letter value="A"/>
          <Letter value="N"/>
          <Letter value="K"/>
          <br/>
          <Letter value="W"/>
          <Letter value="E"/>
          <Letter value="I"/>
        </span>
        </div>
        {/*<div className= 'bio'><p>Web Developer!<br/>Photographer!<br/>(click anywear to interact)</p></div>*/}
      </div>
    );
  }
}

export default Welcome;
