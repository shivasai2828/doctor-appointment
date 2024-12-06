import React, { useEffect } from "react";
import "./HomePage.css";
import { assets, doctors, specialityData } from "./../../assets/assets";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const HomePage = () => {
  const navigator = useNavigate();

  return (
    <>
      <div className="home-header-bg">
        <div className="home-header-flex-row">
          <div className="home-header-flex-left">
            {/* { left-side} */}
            <p className="home-header-main-para">
              Book Appointment <br />
              With Trusted Docter
            </p>
            <div className="flex-row-home">
              <img src={assets.group_profiles} alt="" />
              <p className="home-header-second-para">
                Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.
              </p>
            </div>
            <button
              className="home-header-button"
              onClick={() => navigator("#specility")}
            >
              Book appointment{" "}
            </button>
          </div>
          <div className="home-header-flex-right">
            {/* { right-side} */}
            <img
              className="header_img"
              src={assets.header_img}
              alt="header_img"
            />
          </div>
        </div>
      </div>
      {/* second section home  */}
      <div className="home-section-two" id="specility">
        <h2 className="home-sec-two-h2">Find by Speciality </h2>
        <p className="home-sec-two-p">
          Simply browse through our extensive list of trusted doctors.
        </p>
        <div className="home-flex-row-sec-2">
          {specialityData.map((item, index) => (
            <div
              onClick={() => {
                navigator(`/docters/${item.speciality}`);
                window.scroll(0, 0);
              }}
              key={index}
              className="each-speciality-home"
            >
              <img
                className="speciality-img-home"
                src={item.image}
                alt={item.speciality}
              />
              <p className="speciality-name-home">{item.speciality}</p>
            </div>
          ))}
        </div>
      </div>
      {/* third section home */}
      <div>
        <div className="third-sec-home-top-content">
          <h1>Top Doctors to Book</h1>
          <p>Simply browse through our extensive list of trusted doctors.</p>
        </div>
        <div className="all-docters-containers-home">
          {doctors.slice(0, 10).map((item, index) => {
            return (
              <div
                key={index}
                className="each-doctor-home"
                onClick={() => {
                  navigator(`/appointment/${item._id}`);
                  window.scroll(0, 0);
                }}
              >
                {/* <div className="docter-img-bg"> */}
                <img
                  className="doctor-img-home"
                  src={item.image}
                  alt={item.name}
                />
                {/* </div> */}
                <div className="doctor-info-home">
                  <p className="doctor-available-home">
                    <span className="dot-span">&#9679; </span> Available
                  </p>
                  <p className="doctor-name-home">{item.name}</p>
                  <p className="doctor-speciality-home">{item.speciality}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="home-btn-con">
          <button
            className="home-more-dr-btn"
            onClick={() => {
              navigator("/docters");
              window.scroll(0, 0);
            }}
          >
            More
          </button>
        </div>
      </div>
      {/* fourth section  */}
      <div className="fourth-section-home">
        <div className="fourth-section-home-left">
          <p>
            Book Appointment <br /> With 100+ Trusted Doctors
          </p>
          <button onClick={() => navigator("/signup")}>Create account</button>
        </div>
        <div className="fourth-section-home-right">
          <img
            className="fourth-section-home-img"
            src={assets.appointment_img}
            alt="last-home"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
