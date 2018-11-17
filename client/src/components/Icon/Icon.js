import React from 'react';
import './Icon.css';

const Icon = (props) => {
return(
  <a className='Icon' id = {props.id} href= {props.href} target="_blank" rel="noopener" onClick ={props.onClick}><img src = {props.src}  alt = {props.alt}/></a>
)

}
export default Icon;
