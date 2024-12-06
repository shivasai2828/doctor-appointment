import React from "react";
import "./Footer.css";
import { assets } from "./../../assets/assets";
const Footer = () => {
  return (
    <div className="footer-bg" >
      <div className="footer-first-component">
        <div className="footer-flex-1">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="footer-flex-2">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-flex-3">
          <h2>Get In Touch</h2>
          <ul>
            <li>+91 8500548260</li>
            <li>Boddushivasai@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="last-footer-container"  >
        <hr />
        <p className="copy-rights" >Copyright © 2024 Shivasai- All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
