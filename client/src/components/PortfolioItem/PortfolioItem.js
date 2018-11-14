import React from 'react';
import './PortfolioItem.css';
import GitHub from './../../images/github.svg';
import PDF from './../../images/pdf.svg';
import Javascript from './../../images/javascript.svg';

const PortfolioItem = (props) => {

  if (props.render) return props.render;
  else
    return (
      <div
        className="PortfolioItem"
      >
        <div className="PortfolioItem__title">Badass</div>

        <div className="PortfolioItem__desc">
          I do badass things and kickass everyday! I do badass things and
          kickass everyday! I do badass things and kickass everyday!
        </div>
        <div className="PortfolioItem__icon">
          <i className="fab fa-js" />
          <i className="fab fa-react" />
          <img src ={Javascript} alt= 'Javascript'/>
        </div>
        <div className="PortfolioItem__links">
          <a src="#">Code</a>
          <a src="#">Blog</a>
        </div>
      </div>
    );
};

export default PortfolioItem;
