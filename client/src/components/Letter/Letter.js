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
      this.setState({colorChange:'#3F5866'});
        break;
      case rand === 2:
      this.setState({colorChange:'#BDD3DE'});
        break;
      case rand === 3:
      this.setState({colorChange:'#F0F0DF'});
        break;
      case rand === 4:
      this.setState({colorChange:'#FF8F00'});
        break;
      default:
        break;
    };
  };

  return(
  <span
  id="Letter"
  className = {'Letter'+'__'+props.className}
  style = {style}
  onClick = {console.log('clicked')}
  >
  {props.value}
  </span>
)
}

export default Letter;
