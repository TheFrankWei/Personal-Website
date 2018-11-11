import React from 'react';
import './Letter.css';

const Letter = (props) => {

  const animationHelper = () => {
  
  }
  return(
  <span
  className = 'Letter'
  onMouseOver = {animationHelper}>
  {props.value}

  </span>
)
}

export default Letter;
