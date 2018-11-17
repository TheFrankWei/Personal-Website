import React from 'react';
import './Letter.css';

const Letter = (props) => {

  let colors = ['#112F41','#068587','#4FB99F','#F2B134','#ED553B']
  let style = {
    color: colors[Math.floor(Math.random() * 5)]
  }

  if(style.color === ''){
    style.color = colors[Math.floor(Math.random() * 5)];
  }

  return(

  <span
  id="Letter"
  className = {'Letter'+'__'+props.className}
  style = {style}
  >
  {props.value}
  </span>
)
}

export default Letter;
