import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "./../../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(Cookies.get("token"));
  const [isOpend, SetisOpened] = useState(false);
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
        <ul className="nav-ul-tag desktop-nav">
          <NavLink to="/">
            <li className="nav-link" >Home</li>
            <hr className="nav-hr" />
          </NavLink>
          <NavLink to="/docters">
            <li className="nav-link" >All Doctors</li>
            <hr className="nav-hr" />
          </NavLink>
          <NavLink to="/about-us">
            <li className="nav-link" >ABOUT</li>
            <hr className="nav-hr" />
          </NavLink>
          <NavLink to="/contact-us">
            <li className="nav-link" >Contact</li>
            <hr className="nav-hr" />
          </NavLink>
        </ul>
        <div className="desktop-nav">
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
        <div className="mobile-view" onClick={() => SetisOpened(!isOpend)}>
          {isOpend ? <IoMdClose /> : <RxHamburgerMenu />}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
