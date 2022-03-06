import React, { useState, useContext } from "react";
import "./Register.css";
import Footer from "../home/Footer";
import { Redirect, Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { BASE_API } from "../config";
import { SERVICE_UNAVAILABLE_ERROR } from "../messages";
import TermsAndPrivacyPolicyModal from "./TermsAndPrivacyPolicyModal";
import hidePwd from "../assets/images/Hide_pwd_icon.svg";
import showPwd from "../assets/images/show_pwd_icon.svg";

export default function Register() {
  const { isAuth } = useContext(AuthContext);
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
  const [responseMessage, setResponseMessage] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);
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
    <React.Fragment>
      <section className="screen">
        <section className="split-screen">
          <div className="left"></div>
          <div className="right">
            <form id="form" onSubmit={handleSubmit}>
              <section className="register">
                <h1>Welcome To Bridge In Tech</h1>
                <h4>
                  Let's start your account setup so you can have access to a
                  great pool of talent.
                </h4>
                <form-group controlId="formName">
                  <div className="input-control">
                    <label htmlFor="fname">Full Name :</label>
                    <input
                      aria-labelledby="name"
                      className="field"
                      id="fname"
                      name="fname"
                      type="text"
                      placeholder="Full Name"
                      minLength={2}
                      maxLength={30}
                      pattern="^[a-zA-Z\s\-]+$"
                      onChange={validateName}
                      required
                    />
                  </div>
                  {!isValidName && (
                    <span className="error">
                      Must be between 2-30 characters long. Can only contain
                      alphabets, whitespace and dash '-'
                    </span>
                  )}
                </form-group>
                <form-group controlId="formUserName">
                  <div className="input-control">
                    <label id="username">Username :</label>
                    <input
                      aria-labelledby="username"
                      className="field"
                      type="text"
                      name="username"
                      placeholder="Username"
                      minLength={5}
                      maxLength={25}
                      pattern="^[a-zA-Z0-9/_]+$"
                      onChange={validateUsername}
                      required
                    />
                  </div>
                  {!isValidUsername && (
                    <span className="error">
                      Must be between 5-25 characters long. Can only contain
                      alphabets, numbers and underscore '_'
                    </span>
                  )}
                </form-group>
                <form-group controlId="formEmail">
                  <div className="input-control">
                    <label htmlFor="email">Email :</label>
                    <input
                      aria-labelledby="email"
                      className="field"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                      onChange={validateEmail}
                      required
                    />
                  </div>
                  {!isValidEmail && (
                    <span className="error">
                      Must match standard email format xxx@xxx.xxx
                    </span>
                  )}
                </form-group>

                <form-group controlId="formPassword">
                  <div className="input-control">
                    <label htmlFor="password">Password :</label>

                    <input
                      aria-labelledby="password"
                      className="field"
                      id="password"
                      name="password"
                      placeholder="Password"
                      type={isPasswordShown ? "text" : "password"}
                      minLength={8}
                      maxLength={64}
                      onChange={validatePassword}
                      required
                    />
                    <img
                      title="password_icon"
                      alt="text"
                      type={isPasswordShown ? "text" : "password"}
                      src={isPasswordShown ? showPwd : hidePwd}
                      onClick={() =>
                        setIsPasswordShown((prevState) => !prevState)
                      }
                    />
                  </div>
                  {!isValidPassword && (
                    <span className="error">
                      Must be between 8-64 characters
                    </span>
                  )}
                </form-group>
                <form-group controlId="formPassword">
                  <div className="input-control">
                    <label htmlFor="confirmPassword">Confirm Password :</label>
                    <input
                      aria-labelledby="confirmPassword"
                      id="confirmPassword"
                      className="field"
                      placeholder="Confirm Password"
                      type={isConfirmPasswordShown ? "text" : "password"}
                      name="confirmPassword"
                      minLength={8}
                      maxLength={64}
                      onChange={validateConfirmPassword}
                      required
                    />
                    <img
                      title="confirmpassword_icon"
                      alt="text"
                      type={isConfirmPasswordShown ? "text" : "password"}
                      src={isConfirmPasswordShown ? showPwd : hidePwd}
                      onClick={() =>
                        setIsConfirmPasswordShown((prevState) => !prevState)
                      }
                    />
                  </div>
                  {!isValidConfirmPassword && (
                    <span className="error">Must be same as password</span>
                  )}
                </form-group>
                <form-group controlId="formTermsCheck">
                  <div className="insert_checkbox">
                    <div className="input-control">
                      <input
                        type="checkbox"
                        aria-label="termsCheck"
                        name="terms_and_conditions_checked"
                        value={"on" ? true : false}
                        required
                      />
                    </div>
                    <label id="terms">
                      I agree to the{" "}
                      <a
                        href="#modal"
                        onClick={() => {
                          setShowTermsModal(true);
                        }}
                      >
                        <strong>Terms and Conditions.</strong>
                      </a>
                    </label>

                    {/* Modal popup for displaying code of conduct, terms and privacy policy */}
                    <TermsAndPrivacyPolicyModal
                      show={showTermsModal}
                      handleClose={() => {
                        setShowTermsModal(false);
                      }}
                    />
                  </div>
                </form-group>
                <form-group>
                  <label>Available as a :</label>
                  <div className="choice">
                    <div className="choice_mentor">
                      <div className="insert_checkbox">
                        <input
                          type="checkbox"
                          aria-label="mentor"
                          name="available_to_mentor"
                          value={"on" ? true : false}
                        />
                        <label className="checkbox_class" id="mentor">
                          Mentor
                        </label>
                      </div>
                    </div>
                    <div className="choice_mentee">
                      <div className="insert_checkbox">
                        <input
                          type="checkbox"
                          aria-label="mentee"
                          name="need_mentoring"
                          value={"on" ? true : false}
                        />
                        <label id="mentee" className="checkbox_class">
                          Mentee
                        </label>
                      </div>
                    </div>
                  </div>
                </form-group>
                {responseMessage && (
                  <span className="error" title="response" role="alert">
                    {responseMessage}
                  </span>
                )}

                <button
                  className="btn btn-success"
                  id="signup"
                  variant="success"
                  type="submit"
                  name="Sign Up"
                  value="Signup"
                >
                  Sign Up
                </button>
                <div className="login">
                  {" "}
                  Have an Account?
                  <strong>
                    <Link to="/login"> Sign In</Link>
                  </strong>
                </div>
              </section>
            </form>
          </div>
        </section>
        <Footer />
      </section>
    </React.Fragment>
  );
}
