import React from "react";
import logo from "./images/logo.png";
import "./style.css";

export default function TopNav() {
  return (
    <div className="nav-bar">
      <div className="box-1">
        <img src={logo} className="logo" />
      </div>
      <div className="box-2">
        <div>
          <a href="">SERVICES</a>
        </div>
        <div>
          <a href="">ABOUT US</a>
        </div>
        <div>
          <a href="">CONTACT US</a>
        </div>
        <div>
          <a href="">CAREERS</a>
        </div>
      </div>

      <div className="box-3">
        
        <i className="bi bi-list"></i>
        
        <div className="overlay">
          <a>HOME</a>
          <a>SERVICES</a>
          <a>ABOUT US</a>
          <a>CONTACT US</a>
          <a>CAREERS</a>
          <i className="bi bi-x"></i>
        </div>
        
      </div>
    </div>
  );
}
