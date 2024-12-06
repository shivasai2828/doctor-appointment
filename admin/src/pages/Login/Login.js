import React, { useContext, useState } from "react";
import "./Login.css";
import axios from "axios";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";

const Login = () => {
  const [loginInfo, SetLoginInfo] = useState("Admin");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [errorText, SetErrorText] = useState("");
  const [isError, setIsError] = useState(false);

  const { SetAToken } = useContext(AdminContext);

  const fetchDataI = async () => {
    try {
      if (loginInfo === "Admin") {
        const url = "http://localhost:5000/api/admin/login";
        const { data } = await axios.post(url, { email, password });

        if (!data.success) {
          toast.error(data.message);
          setIsError(true);
          SetErrorText(data.message);
        } else {
          setIsError(false);
          SetErrorText("");
          SetAToken(data.token);
          // Add your token handling logic here
          localStorage.setItem("aToken", data.token);
          // window.location.replace("/dashboard");
        }
      } else {
      }
    } catch (error) {}

    // console.log(data.token);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!email || !password) {
      console.log("please enter data");
    }
    fetchDataI();
    // Add your authentication logic here
    // console.log(email, password);
  };
  return (
    <div className="login-bg">
      <form onSubmit={onSubmitForm} className="form-container-login">
        <h2 className="login-header">
          <span>{loginInfo}</span> Login
        </h2>
        <div className="login-col-div">
          <label htmlFor="email">email:</label>
          <input
            required
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className="login-col-div">
          <label htmlFor="password">Password:</label>
          <input
            required
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button className="login-btn-admin-panel" type="submit">
          Login
        </button>
        {isError && <p>{errorText}</p>}
        <p>
          {loginInfo === "Admin" ? (
            <p>
              Doctor Login
              <span
                className="span-change-login-link"
                onClick={() => SetLoginInfo("Docter")}
              >
                Click Here
              </span>
            </p>
          ) : (
            <p>
              Admin Login
              <span
                className="span-change-login-link"
                onClick={() => SetLoginInfo("Admin")}
              >
                Click Here
              </span>
            </p>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
