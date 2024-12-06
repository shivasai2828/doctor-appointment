import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "./../../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(Cookies.get("token"));

  const navigator = useNavigate();
  return (
    <>
      <div className="nav-bg">
        <img
          className="nav-logo"
          onClick={() => navigator("/")}
          src={assets.logo}
          alt="logo"
        />
        <ul className="nav-ul-tag">
          <NavLink to="/">
            <li>Home</li>
            <hr className="nav-hr" />
          </NavLink>
          <NavLink to="/docters">
            <li>All Doctors</li>
            <hr className="nav-hr" />
          </NavLink>
          <NavLink to="/about-us">
            <li>ABOUT</li>
            <hr className="nav-hr" />
          </NavLink>
          <NavLink to="/contact-us">
            <li>Contact</li>
            <hr className="nav-hr" />
          </NavLink>
        </ul>
        {isLogin ? (
          <div className="nav-main-login">
            <div className="nav-login-box">
              <img
                className="profile-img"
                src={assets.profile_pic}
                alt="profile-pic"
              />
              <img src={assets.dropdown_icon} alt="dropdown_icon" />
            </div>
            <div className="nav-bar-menu">
              <p onClick={() => navigator("/my-profile")}>My Profile</p>
              <p onClick={() => navigator("/my-appointment")}>
                My Appointments
              </p>
              <p
                onClick={() => {
                  return Cookies.remove("token"), setIsLogin(false);
                }}
              >
                Logout
              </p>
            </div>
          </div>
        ) : (
          <button className="nav-btn" onClick={() => navigator("/signup")}>
            Create Account
          </button>
        )}
      </div>
      <hr />
    </>
  );
};

export default Navbar;
