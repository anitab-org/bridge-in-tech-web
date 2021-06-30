import React, { useState, useContext } from "react";
import "./Register.css";
import Footer from "../home/Footer";
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
    <React.Fragment>
    <section class="split-screen">
      <div class="left"></div>
      <div class="right">
        <form id="form" onSubmit={handleSubmit}>
          <section class="register">
            <h1>Welcome To Bridge In Tech</h1>
            <h4>
              Lets start your account setup so you can have access to a great
              pool of talent.
            </h4>
            <form-group controlId="formEmail">
            <div class="fields email">
              <label for="email">Email :</label>
              <input
                aria-labelledby="email"
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
            <form-group controlId="formName">
            <div class="fields name">
              <label for="fname">FullName :</label>
              <input
                aria-labelledby="name"
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
            <form-group controlId="formPassword">
            <div class="fields password">
              <label for="password">Password :</label>
              <input
                aria-labelledby="password"
                id="password"
                name="password"
                placeholder="at least 8 characters"
                type={isPasswordShown ? "text" : "password"}
                placeholder="atleast 8 characters"
                minLength={8}
                maxLength={64}
                onChange={validatePassword}
                required
              />
              <i class="far fa-eye-slash"></i>
              </div>
              {!isValidPassword && (
                <span className="error">Must be between 8-64 characters</span>
              )}
            </form-group>
            <form-group controlId="formPassword">
            <div class="fields password">
              <label for="confirm_password">Confirm Password :</label>
              <input
                aria-labelledby="confirmPassword"
                id="confirm_password"
                placeholder="re-type password"
                type={isPasswordShown ? "text" : "password"}
                name="confirmPassword"
                placeholder="re-type password"
                minLength={8}
                maxLength={64}
                onChange={validateConfirmPassword}
                required
              />
              <img class="icons"/>
              </div>
              {!isValidConfirmPassword && (
                <span className="error">Must be same as password</span>
              )}
            </form-group>
            <form-group controlId="formTermsCheck">
            <div class="insert_checkbox">
              <input
                type="checkbox"
                aria-label="termsCheck"
                name="terms_and_conditions_checked"
                value={"on" ? true : false}
                required
              />
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
              {responseMessage && (
                <span className="error" name="response" role="alert">
                  {responseMessage}
                </span>
              )}
            </form-group>
<form-group>
            <label>Available as a :</label>
            <div class="choice">
              <div class="choice_mentor">
                <div class="insert_checkbox">
                  <input
                    type="checkbox"
                    aria-label="mentor"
                    name="available_to_mentor"
                    value={"on" ? true : false}
                  />
                  <label class="checkbox_class" id="mentor">
                    Mentor
                  </label>
                </div>
              </div>
              <div class="choice_mentee">
                <div class="insert_checkbox">
                  <input
                    type="checkbox"
                    aria-label="mentee"
                    name="need_mentoring"
                    value={"on" ? true : false}
                  />
                  <label id="mentee" class="checkbox_class">
                    Mentee
                  </label>
                </div>
              </div>
            </div>
            </form-group>
            <button
              class="btn btn-success"
              id="signup"
              variant="success"
              type="submit"
              name="submit"
              value="Signup"
            >
              Sign Up
            </button>
            <div class="login">
              {" "}
              Have an Account?
              <strong>
                <a href="/login"> Sign In</a>
              </strong>
            </div>
          </section>
        </form>
      </div>
    </section>
    <Footer />
    </React.Fragment>
    
  );
}