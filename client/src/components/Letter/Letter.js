import React from 'react';
import './Letter.css';

const Letter = (props) => {


  return(
  <span
  className = {'Letter'+'__'+props.className}
  id = {props.value}>
  {props.value}
  </span>
)
}

export default Letter;
