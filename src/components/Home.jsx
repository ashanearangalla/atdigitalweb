import React, { Fragment } from 'react'
import './Style.css'
import logoAtDigital from './logoatdigital.png'
import imageMagGlass from './imagemagglass.png'
import imageDesktop from './imagedesktop.png'

export default function Home() {
  return (
    <Fragment>
    
    <div className="nav-bar">
      <div className="box-1">
        <img alt='logo of AT Digital Company' src={logoAtDigital} className="logo" />
      </div>
      <div className="box-2">
        <div>
          <a href="/services">SERVICES</a>
        </div>
        <div>
          <a href="/aboutus">ABOUT US</a>
        </div>
        <div>
          <a href="/contact">CONTACT US</a>
        </div>
        <div>
          <a href="/careers">CAREERS</a>
        </div>
      </div>

      <div className="box-3">
        
        <i className="bi bi-list"></i>
        
        <div className="overlay">
          <a href="/home">HOME</a>
          <a href="/services">SERVICES</a>
          <a href="/about">ABOUT US</a>
          <a href="/contact">CONTACT US</a>
          <a href="/careers">CAREERS</a>
          <i className="bi bi-x"></i>
        </div>
        
      </div>
    </div>

    <div className="hero">
        <div className="hero-image">
        

    </div>
    <div className="frame-497">
            <div className="text-box">
            <p>We crush your competitors, goals, and sales records - without the B.S.</p>
            </div>
           
            <button>GET FREE CONSULTION</button>
        </div>
    </div>

    <div className='flow-body'>
    <div className='flow-box'>
      <img alt='Desktop Computer' className='image-frame' src={imageDesktop}/>
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

      <div className='flow-box'>
      <img alt='Frame 2' className='image-frame-mobile' src={imageMagGlass}/>
        <div className="text-box-frame">
        <p className='heading'>
        Digital Strategy Consulting
        </p>
        <p className='content'>
        Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
        </p>
        <button>LEARN MORE</button>
      </div>
      <img alt='Magnifying Glass' id='image-frame-desktop' className='image-frame' src={imageMagGlass}/>
      
    </div>

      <div>
      <div className="faq-box">
      <p className="heading">Web & Mobile App Development</p>
      <div className="faqs">
        <div className="faq-clicked">
          <div className="faq-header-box">
            <p>
            Lorem  ipsum dolor sit amet consectetur. Leo at sit eu libero?
            </p>
            <i id="dash" className="bi bi-dash"></i>
          </div>
          <div className="faq-context-box">
            <p>
            Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.
            </p>
          </div>
        </div>
        
        <div className="faq-default">
          <div className="faq-header-box">
            <p>
              Lorem ipsum dolor sit amet consectetur. Tortor scelerisque
              integer?
            </p>
            <i id="plus" className="bi bi-plus"></i>
          </div>
        </div>

        <div className="faq-default">
          <div className="faq-header-box">
            <p>
              Lorem ipsum dolor sit amet consectetur. Tortor scelerisque
              integer?
            </p>
            <i id="plus" className="bi bi-plus"></i>
          </div>
        </div>
      </div>
    </div>
    </div>

    </div>

    <div className='footer'>
      <div className="company-details">
        <div className='footer-box-1'>
            <img alt='logo of at digital company' src={logoAtDigital} className="logo-footer" />
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
            <a href='/aboutus'>Privacy Policy</a>
            <p>|</p>
            <a href='/aboutus'>Terms & Conditions</a>

        </div>
      </div>
    </div>
    </Fragment>
  )
}
