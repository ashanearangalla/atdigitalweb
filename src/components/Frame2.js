import React from 'react'
import './style.css';
import image from './images/image1.png';

export default function Frame2() {
  return (
    <div className='flow-box'>
      <img alt='image for mobile' className='image-frame-mobile' src={image}/>
        <div className="text-box-frame">
        <p className='heading'>
        Digital Strategy Consulting
        </p>
        <p className='content'>
        Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
        </p>
        <button>LEARN MORE</button>
      </div>
      <img alt='image for desktop' id='image-frame-desktop' className='image-frame' src={image}/>
      
    </div>
  )
}
