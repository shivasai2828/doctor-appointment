import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const Login = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const navigator = useNavigate();

  const loginUrl =
    "https://doctor-appointment-dfna.onrender.com/api/user/login";
  const submitForm = async (e) => {
    e.preventDefault();
    const data = { email, password };
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (result.success) {
      toast.success(result.message);
      Cookies.set("token", result.token, { expires: 7 });
      navigator("/");
    } else {
      toast.error(result.message);
    }
  };
  return (
    <div className="login-bg">
      <div className="login-container">
        <h1 className="login-heading">Login</h1>
        <p className="login-para">Please login to book appointment</p>
        <form className="form-login" onSubmit={submitForm}>
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
            Login
          </button>
        </form>
        <p>
          Create an
          <span onClick={() => navigator("/signup")} className="login-span">
            account?
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
