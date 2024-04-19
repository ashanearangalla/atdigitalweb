import React from 'react'
import Frame1 from './Frame1'
import Frame2 from './Frame2'
import './style.css';
import FAQs from './FAQs';

export default function Flow() {
  return (
    <div className='flow-body'>
      <Frame1/>
      <Frame2/>
      <FAQs/>
    </div>
  )
}
