import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import { assets } from "./../../assets/assets";

// Sidebar component for admin dashboard
const Sidebar = () => {
  return (
    <div className="sidebar-main" >
      <ul className="ul-list" >
        <NavLink className="nav-link" to="/">
          <img src={assets.home_icon} alt="dashboard-icon" />
          <li>Dashboard</li>
        </NavLink>
        <NavLink className="nav-link" to="/appointments">
          <img src={assets.appointment_icon} alt="dashboard-icon" />
          <li>Appointments</li>
        </NavLink>
        <NavLink className="nav-link" to="/add-doctor">
          <img src={assets.add_icon} alt="dashboard-icon" />
          <li>Add Doctor</li>
        </NavLink>
        <NavLink className="nav-link" to="/all-doctors">
          <img src={assets.people_icon} alt="dashboard-icon" />
          <li>Doctors List</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
