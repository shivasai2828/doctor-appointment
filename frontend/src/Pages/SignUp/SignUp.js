import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const SignUp = () => {
  const [fullName, SetFullName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const navigator = useNavigate();
  const registerUrl =
    "https://doctor-appointment-dfna.onrender.com/api/user/register";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name: fullName, email, password };
    console.log(data);
    const response = await fetch(registerUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
    if (result.success) {
      toast.success(result.message);
      Cookies.set("token", result.token, { expires: 7 });
      navigator("/");
    } else {
      toast.error(result.message);
      console.log(result.message);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-container">
        <h1 className="login-heading">Create Account</h1>
        <p className="login-para">Please sign up to book appointment</p>
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="label-wisth-input">
            <label htmlFor="name">Name</label>
            <input
              value={fullName}
              onChange={(e) => SetFullName(e.target.value)}
              className="login-input"
              id="name"
              type="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="label-wisth-input">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              className="login-input"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="label-wisth-input">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
              className="login-input"
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button className="login-btn" type="submit">
            Create 
          </button>
        </form>
        <p>
          Already have an account?
          <span onClick={() => navigator("/login")} className="login-span">
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
