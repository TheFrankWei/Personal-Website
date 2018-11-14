import React from 'react';
import GitHub from './../../../images/github.svg';
import PDF from './../../../images/pdf.svg';
import Javascript from './../../../images/javascript.svg';

export default [{
  name: 'typy',
  render: (
    <div className='PortfolioItem'>
      <div className='PortfolioItem__title'>
        LiftSpotter
      </div>
      <div className='PortfolioItem__desc'>
        JavaScript Webapp allowing you to record Workouts
      </div>
      <div className='PortfolioItem__icon'>
        <i className="Javascript"></i>
        <i className="fab fa-npm"></i>
      </div>
      <div className='PortfolioItem__links'>
        <a target="_blank" rel="noopener noreferrer"><img src="https://github.com/TheFrankWei/LiftSpotter" alt='Github Link'/></a>
      </div>
    </div>
  )
},{
  name: 'typy',
  render: (
    <div className='PortfolioItem'>
      <div className='PortfolioItem__title'>
        QRFound
      </div>
      <div className='PortfolioItem__desc'>
        Javascript Webapp helping you find your stuff!
      </div>
      <div className='PortfolioItem__icon'>
        <i className="Javascript"></i>
        <i className="fab fa-npm"></i>
      </div>
      <div className='PortfolioItem__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/TheFrankWei/QRFound">More</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/TheFrankWei/QRFound">GitHub</a>
      </div>
    </div>
    )
  }, {
    name: 'typy',
    render: (
      <div className='PortfolioItem'>
        <div className='PortfolioItem__title'>
          SoundByte
        </div>
        <div className='PortfolioItem__desc'>
          UX Design Project
        </div>
        <div className='PortfolioItem__icon'>
          <i className="Javascript"></i>
          <i className="fab fa-npm"></i>
        </div>
        <div className='PortfolioItem__links'>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/TheFrankWei/QRFound">More</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/TheFrankWei/LiftSpotter">Google Drive</a>
        </div>
      </div>
    )
  },{
    name: 'typy',
    render: (
      <div className='PortfolioItem'>
        <div className='PortfolioItem__title'>
          Photography
        </div>
        <div className='PortfolioItem__desc'>
          Pictures I've taken and edited!
        </div>
        <div className='PortfolioItem__icon'>
          <i className="fab fa-js"></i>
          <i className="fab fa-npm"></i>
        </div>
        <div className='PortfolioItem__links'>
          <p>(to be added)</p>
        </div>
      </div>
    )
  }];
