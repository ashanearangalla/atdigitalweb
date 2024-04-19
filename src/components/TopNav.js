import React from "react";
import logo from "./images/logo.png";
import "./style.css";

export default function TopNav() {
  return (
    <div className="nav-bar">
      <div className="box-1">
        <img alt='logo of AT Digital Company' src={logo} className="logo" />
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
  );
}
