import React from 'react'
import logo from './images/logo.png';
import './style.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div className="company-details">
        <div className='footer-box-1'>
            <img alt='logo of at digital' src={logo} className="logo-footer" />
            <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
        </div>
        <div className='footer-box-2'>
            <div className="footer-subbox">
                <p className='footer-subbox-header'>Our Technologies</p>
                <a href=''>ReactJS</a>
                <a href=''>Gatsby</a>
                <a href=''>NextJS</a>
                <a href=''>NodeJS</a>
            </div>
            <div className="footer-subbox">
                <p className='footer-subbox-header'>Our Services</p>
                <a href=''>Social media Marketing</a>
                <a href=''>Web & Mobile App Development</a>
                <a href=''>Data & Analytics</a>

            </div>

        </div>
      </div>
      <div className="footer-bottom">
        <div className='footer-bottom-box'>
            <a>Privacy Policy</a>
            <p>|</p>
            <a>Terms & Conditions</a>

        </div>
      </div>
    </div>
  )
}
