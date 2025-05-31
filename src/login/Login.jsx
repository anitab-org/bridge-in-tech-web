import React, { useState, useContext } from "react";
import "./Login.css";
import { Redirect, Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { BASE_API } from "../config";
import { SERVICE_UNAVAILABLE_ERROR } from "../messages";
import Footer from "../home/Footer";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState(null);
  const { isAuth, login } = useContext(AuthContext);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let payload = {};
    new FormData(e.target).forEach((value, key) => {
      payload[key] = value;
    });

    const requestLogin = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    fetch(`${BASE_API}/login`, requestLogin)
      .then(async (response) => {
        let data = await response.json();
        if (response.ok) {
          const access_token = data["access_token"];
          fetch(`${BASE_API}/user/personal_details`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${access_token}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then(async (response) => {
              let userData = await response.json();
              if (response.ok) return login(data, userData["username"]);
              setErrorMessage(data.message);
            })
            .catch(() => setErrorMessage(SERVICE_UNAVAILABLE_ERROR));
        } else {
          setErrorMessage(data.message);
        }
      })
      .catch(() => setErrorMessage(SERVICE_UNAVAILABLE_ERROR));
  };

  const handleTogglePasswordDisplay = (e) => {
    setIsPasswordShown(e.target.checked);
  };

  if (isAuth) return <Redirect to="/" />;

  return (
    <div className="sign-in-container">

      <div className="main-content">
        <div className="image-section">
          {/* Team collaboration image */}
          <img src="https://images.pexels.com/photos/7437499/pexels-photo-7437499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Team collaboration" />
        </div>

        <div className="form-section">
          <h1>Welcome back!</h1>
          <p>
            Glad to see you again, kindly provide the details below and lets get you back on track again.
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username or Email:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username or Email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password :</label>
              <input
                type={isPasswordShown ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="form-group flex" style={{ alignItems: "center" }}>
              <input
                type="checkbox"
                id="showPassword"
                onChange={handleTogglePasswordDisplay}
                style={{ marginRight: 8 }}
                name="show_password_checkbox"
              />
              <label htmlFor="showPassword">
                Show Password
              </label>
            </div>

            {errorMessage && (
              <span
                className="error"
                name="errorMessage"
                aria-label="errorMessage"
                role="alert"
              >
                {errorMessage}
              </span>
            )}

            <button type="submit" className="sign-in-btn">
              Login
            </button>

            <p className="signup-link">
              Don't have an Account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>

      <Footer/>
    </div >
  );
}
