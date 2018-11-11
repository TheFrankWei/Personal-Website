import React, { Component } from 'react';
import './About.css';
import Letter from './../../../components/Letter/Letter.js';

class About extends Component {
  render() {
    return (
      <div className = 'About'>
      <h1>
          <Letter value="A"/>
          <Letter value="B"/>
          <Letter value="O"/>
          <Letter value="U"/>
          <Letter value="T"/>
      </h1>

          <div className = 'bio'>
            <p>Thanks for visiting my website! My name is Frank Wei and I currently live in New York City. I love coding, designing, and combining the two to make awesome creations.</p>
            <br/><p>I built this site from scratch, taking inspiration other cool sites and learning React along the way. When I'm not coding you can find me out taking photos, at a concert, or exploring the city.</p>
            <br/><p>In this site, you can browse through my portfolio of design, projects and photography -- hope you enjoy!</p>
          </div>

      </div>
    );
  }
}

export default About;
