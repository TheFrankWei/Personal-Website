import React from 'react';
import './Letter.css';

const Letter = (props) => {
  let style = {
    color:'#2B3A42'
  };

  const styleHelper = () => {
    let rand = Math.floor(Math.random() * 5);
    switch(rand){
      case rand === 1:
      style.color = '#3F5866';
        break;
      case rand === 2:
      style.color = '#BDD3DE';
        break;
      case rand === 3:
        style.color = '#F0F0DF';
        break;
      case rand === 4:
        style.color = '#FF8F00';
        break;
      default:
        break;
    };
  };


  return(
  <span
  className = {'Letter'+'__'+props.className}
  id = {props.value}
  style = {style}
  >
  {props.value}
  </span>
)
}

export default Letter;
