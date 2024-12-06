import React from "react";
import "./AboutUs.css";
import { assets } from "./../../assets/assets";

const AboutUs = () => {
  return (
    <div className="about-bg">
      <h3 className="about-us-header">
        About <span>Us</span>
      </h3>
      <div className="about-top-section">
        <img className="about-img" src={assets.about_image} alt="about_image" />
        <div className="about-flex-2">
          <p className="about-paras">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p className="about-paras">
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <h3 className="about-us-center-heading">Our Vision</h3>
          <p className="about-paras">
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <h1>
        Why <span>Choose Us</span>
      </h1>
      <div className="about-us-last-container">
        <div className="about-us-last-container-child">
          <p className="about-us-headings">Efficiency:</p>
          <p className="about-us-paras">
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="about-us-last-container-child">
          <p className="about-us-headings">Convenience:</p>
          <p className="about-us-paras">
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="about-us-last-container-child">
          <p className="about-us-headings">Personalization:</p>
          <p className="about-us-paras">
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
