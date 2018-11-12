import React, { Component } from 'react';
import Letter from './../../../components/Letter/Letter.js';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className = 'Contact'>
      <h1 className='CTitle'>
        <Letter className = 'CTitle' value="C"/>
        <Letter className = 'CTitle' value="O"/>
        <Letter className = 'CTitle' value="N"/>
        <Letter className = 'CTitle' value="T"/>
        <Letter className = 'CTitle' value="A"/>
        <Letter className = 'CTitle' value="C"/>
        <Letter className = 'CTitle' value="T"/>
      </h1>
      </div>
    );
  }
}

export default Contact;
