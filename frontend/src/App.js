import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import { Routes, Route, useLocation } from "react-router-dom";
import Docters from "./Pages/Docters/Docters";
import SpecificityDocter from "./Pages/SpecificyDocter/SpecificityDocter";
import Myprofile from "./Pages/My-profile/Myprofile";
import MyAppointment from "./Pages/My-Appointments/MyAppointment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const location = useLocation();

  const IsloginUrl = location.pathname === "/login";
  const IssignupUrl = location.pathname === "/signup";

  return (
    <div className="main-wrapper">
      {IsloginUrl || IssignupUrl ? null : <Navbar />}

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/docters" element={<Docters />} />
        <Route path="/docters/:speciality" element={<Docters />} />
        <Route path="/my-profile" element={<Myprofile />} />
        <Route path="/my-appointment" element={<MyAppointment />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/appointment/:specificity"
          element={<SpecificityDocter />}
        />
      </Routes>
      <ToastContainer />
      {IsloginUrl || IssignupUrl ? null : <Footer />}
    </div>
  );
};

export default App;
