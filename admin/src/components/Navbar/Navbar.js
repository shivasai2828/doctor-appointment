import React, { useContext } from "react";
import "./Navbar.css";
import { assets } from "./../../assets/assets";
import { AdminContext } from "../../context/AdminContext";

const Navbar = () => {
  // Add your code here to handle the logout functionality using a context or Redux store.
  const { AToken, SetAToken } = useContext(AdminContext);
  // console.log(AToken);
  const handleLogout = () => {
    // console.log("logout");
    AToken && SetAToken("");
    AToken && localStorage.removeItem("aToken");
  };
  return (
    <>
      <div className="navbar-bg">
        <div className="navbar-row-div">
          <img
            src={assets.admin_logo}
            alt="admin_logo"
            className="nav-bar-logo"
          />
          <button className="navbar-admin-btn">Admin</button>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
