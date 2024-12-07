import React from "react";
import "./ContactPage.css";
import { assets } from "./../../assets/assets";

const ContactPage = () => {
  return (
    <div className="contact-us">
      <h1 className="contact-us-heading">
        Contact <span>Us</span>
      </h1>
      <div className="contact-us-row">
        <img src={assets.contact_image} alt="contact-img" />
        <div className="contact-flex-right">
          <p className="office--heading">OUR OFFICE</p>
          <p className="contact-address">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <div className="contact-number-details-contaier">
            <p>Tel: (+91) 8500548260</p>
            <p>Email: boddushivasai@gmail.com</p>
          </div>

          <h4>Careers at PRESCRIPTO</h4>
          <p className="contact-last-p">
            Learn more about our teams and job openings.
          </p>
          <button>Explor More</button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
