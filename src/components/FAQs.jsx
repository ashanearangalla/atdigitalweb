import React from "react";
import "./style.css";


export default function FAQs() {
  return (
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
  );
}
