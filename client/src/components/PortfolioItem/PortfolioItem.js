import React from 'react';
import './PortfolioItem.css';

const PortfolioItem = (props) => {

  if (props.render) return props.render;
  else
    return (
      <div
        className="PortfolioItem"
      >
        <div className="portfolio-item__title">Badass</div>

        <div className="portfolio-item__desc">
          I do badass things and kickass everyday! I do badass things and
          kickass everyday! I do badass things and kickass everyday!
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-js" />
          <i className="fab fa-react" />
          <i className="fab fa-html5" />
        </div>
        <div className="portfolio-item__links">
          <a src="#">Code</a>
          <a src="#">Blog</a>
        </div>
      </div>
    );
};

export default PortfolioItem;
