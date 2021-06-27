import React, { useState, useContext } from "react";
import "./Register.css";
import { Redirect, Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { BASE_API } from "../config";
import { SERVICE_UNAVAILABLE_ERROR } from "../messages";
import TermsAndPrivacyPolicyModal from "./TermsAndPrivacyPolicyModal";

export default function Register() {
  const { isAuth } = useContext(AuthContext);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
  const [responseMessage, setResponseMessage] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword === password) {
      let payload = {
        need_mentoring: false,
        available_to_mentor: false,
      };
      new FormData(e.target).forEach((value, key) => {
        if (
          key === "terms_and_conditions_checked" ||
          key === "need_mentoring" ||
          key === "available_to_mentor"
        )
          value = value === "true" ? true : false;
        if (key !== "confirmPassword") payload[key] = value;
      });
      const requestRegister = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      };

      fetch(`${BASE_API}/register`, requestRegister)
        .then(async (response) => {
          let data = await response.json();
          if (response.status_code === 201)
            return setResponseMessage(data.message);
          setResponseMessage(data.message);
        })
        .catch(() => {
          setResponseMessage(SERVICE_UNAVAILABLE_ERROR);
        });
    }
  };

  const handleTogglePasswordDisplay = (e) => {
    setIsPasswordShown(e.target.checked);
  };

  const validateName = (e) => {
    if (e.target.value.trim() === "") {
      setIsValidName(false);
    } else {
      setIsValidName(e.target.checkValidity());
    }
  };
  const validateUsername = (e) => {
    setIsValidUsername(e.target.checkValidity());
  };
  const validateEmail = (e) => {
    setIsValidEmail(e.target.checkValidity());
  };
  const validatePassword = (e) => {
    if (e.target.value.trim() === "") {
      setIsValidPassword(false);
    } else {
      setPassword(e.target.value);
      setIsValidPassword(e.target.checkValidity());
    }
  };
  const validateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setIsValidConfirmPassword(
      e.target.checkValidity() && e.target.value === password
    );
  };

  return isAuth ? (
    <Redirect to="/" />
  ) : (
    <div className="container">
      <div class="row align-items-start">
        <div class="col">
          <img src="src/assets/images/side_image.jpg" alt="background" />
        </div>
        <div class="col">
          <div className="row">
            <div className="col-lg-12">
              <form className="register-form" onSubmit={handleSubmit} id="form">
                <h1>Welcome To Bridge In Tech</h1>
                <h4>
                  Lets start your account setup so you can have access to a
                  great pool of talent.
                </h4>
                <form-group controlId="formEmail">
                  <p className="input-control">
                    <label id="email">Email :</label>
                    <input
                      aria-labelledby="email"
                      className="feilds"
                      type="email"
                      name="email"
                      placeholder="Email"
                      pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                      onChange={validateEmail}
                      required
                    />
                  </p>
                  {!isValidEmail && (
                    <span className="error">
                      Must match standard email format xxx@xxx.xxx
                    </span>
                  )}
                </form-group>

                <form-group controlId="formName">
                  <p className="input-control">
                    <label id="name">Full Name :</label>
                    <input
                      aria-labelledby="name"
                      className="feilds"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      minLength={2}
                      maxLength={30}
                      pattern="^[a-zA-Z\s\-]+$"
                      onChange={validateName}
                      required
                    />
                  </p>
                  {!isValidName && (
                    <span className="error">
                      Must be between 2-30 characters long. Can only contain
                      alphabets, whitespace and dash '-'
                    </span>
                  )}
                </form-group>

                {/*
                        <form-group controlId="formUserName">
                            <p className="input-control">
                                <label id="username">Username :</label>
                                <input aria-labelledby="username"
                                    className="feilds"
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    minLength={5}
                                    maxLength={25}
                                    pattern="^[a-zA-Z0-9/_]+$"
                                    onChange={validateUsername}
                                    required
                                />
                            </p>
                          {!isValidUsername && (
                                <span className="error">Must be between 5-25 characters long. Can only contain alphabets, numbers and underscore '_'</span>
                           )}
                        </form-group>
                          */}

                <form-group controlId="formPassword">
                  <p className="input-control">
                    <label id="password">Password :</label>
                    <input
                      aria-labelledby="password"
                      className="feilds"
                      type={isPasswordShown ? "text" : "password"}
                      name="password"
                      placeholder="atleast 8 characters"
                      minLength={8}
                      maxLength={64}
                      onChange={validatePassword}
                      required
                    />
                  </p>
                  {!isValidPassword && (
                    <span className="error">
                      Must be between 8-64 characters
                    </span>
                  )}
                </form-group>

                <form-group controlId="formPassword">
                  <p className="input-control">
                    <label id="confirmPassword">Confirm Password :</label>
                    <input
                      aria-labelledby="confirmPassword"
                      className="feilds"
                      type={isPasswordShown ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="atleast 8 characters"
                      minLength={8}
                      maxLength={64}
                      onChange={validateConfirmPassword}
                      required
                    />
                  </p>
                  {!isValidConfirmPassword && (
                    <span className="error">Must be same as password</span>
                  )}
                </form-group>
                {/*
                        <div><br></br></div>
                        <form-group>
                            <input type="checkbox" className="my-2" name="show_password_checkbox" id="showPassword" onClick={handleTogglePasswordDisplay}/>
                            <label className="ml-2 my-2" htmlFor="showPassword">Show Password</label>
                        </form-group>*/}
                <form-group controlId="formTermsCheck">
                  <div className="row">
                    <p className="input-control" id="terms">
                      <input
                        type="checkbox"
                        name="terms_and_conditions_checked"
                        aria-label="termsCheck"
                        value={"on" ? true : false}
                        required
                      />
                    </p>

                    <label>
                      I agree to the{" "}
                      <a
                        href="#modal"
                        onClick={() => {
                          setShowTermsModal(true);
                        }}
                      >
                        Terms and Conditions.
                      </a>
                      
                    </label>
                  </div>
                  {/* Modal popup for displaying code of conduct, terms and privacy policy */}
                  <TermsAndPrivacyPolicyModal
                    show={showTermsModal}
                    handleClose={() => {
                      setShowTermsModal(false);
                    }}
                  />
                </form-group>
                        <div>
                            {responseMessage && <span className="error" name="response" aria-label="response" role="alert">{responseMessage}</span>}
                        </div>
                <form-group>
                            <div className="row">
                                <div className="col-sm text-center">
                                    <label htmlFor="availability">Available to be a :</label>
                                    <form-group>
                                            <div className="mb-3">
                                                <div className="row">
                                                    <div className="col-sm">
                                                        <input
                                                            name="available_to_mentor"
                                                            aria-label="mentor"
                                                            type="checkbox"
                                                            value={"on" ? true : false}
                                                        />
                                                        <label htmlFor="mentor">Mentor</label>
                                                    </div>
                                                    <div className="col-sm">
                                                        <input
                                                            name="need_mentoring"
                                                            aria-label="mentee"
                                                            type="checkbox"
                                                            value={"on" ? true : false}
                                                        />
                                                        <label htmlFor="mentee">Mentee</label>
                                                    </div>
                                                </div>
                                            </div>
                                    </form-group>
                                    </div>
                                    </div>
                                    </form-group>
                <div className="signup">
                  <button
                    className="btn btn-success"
                    id="signup"
                    variant="success"
                    type="submit"
                    name="submit"
                    value="Signup"
                  >
                    Sign Up
                  </button>
                </div>

                <div className="login">
                  Have an Account?<a href="/login">Sign In.</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
