import React from "react";
import "./App.css";
import logo from "./images/DAN_AGENCY.png";

function Footer() {
  return (
    <div className="footer">
      <div className="list1">
        <img src={logo}></img>
        <p>
          it is a long established fact that distracted by the content of a page
          it is a long established fact that distracted by the content of a page
          when when
        </p>
      </div>
      <div className="list2">
        <h1>Need Help</h1>
        <li>Shipping and Return Policy</li>
        <li>Installation and Assembly</li>
        <li>Our Brochure</li>
        <li> Help</li>
      </div>
      <div className="list2">
        <h1>useful Link</h1>
        <li>Create Account</li>
        <li>Shopping cart</li>
        <li>Private Account</li>
        <li> Press Releases</li>
      </div>
    </div>
  );
}

export default Footer;
