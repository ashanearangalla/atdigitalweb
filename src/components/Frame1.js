import React from 'react'
import './style.css';
import image from './images/image2.png';

export default function Frame1() {
  return (
    <div className='flow-box'>
      <img alt='image of desktop' className='image-frame' src={image}/>
      <div className="text-box-frame">
        <p className='heading'>
        Web & Mobile App Development
        </p>
        <p className='content'>
        Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
        </p>
        <button>LEARN MORE</button>
      </div>
    </div>
  )
}
