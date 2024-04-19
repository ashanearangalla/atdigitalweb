import React from 'react'
import logo from './images/logo.png';
import './style.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div className="company-details">
        <div className='footer-box-1'>
            <img alt='logo of at digital company' src={logo} className="logo-footer" />
            <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
        </div>
        <div className='footer-box-2'>
            <div className="footer-subbox">
                <p className='footer-subbox-header'>Our Technologies</p>
                <a href='/aboutus'>ReactJS</a>
                <a href='/aboutus'>Gatsby</a>
                <a href='/aboutus'>NextJS</a>
                <a href='/aboutus'>NodeJS</a>
            </div>
            <div className="footer-subbox">
                <p className='footer-subbox-header'>Our Services</p>
                <a href='/aboutus'>Social media Marketing</a>
                <a href='/aboutus'>Web & Mobile App Development</a>
                <a href='/aboutus'>Data & Analytics</a>

            </div>

        </div>
      </div>
      <div className="footer-bottom">
        <div className='footer-bottom-box'>
            <a href='#'>Privacy Policy</a>
            <p>|</p>
            <a href='#'>Terms & Conditions</a>

        </div>
      </div>
    </div>
  )
}
