import React, { useState, useContext } from "react";
import "./Register.css";
import { Redirect, Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import {BASE_API} from "../config";
import {SERVICE_UNAVAILABLE_ERROR} from "../messages";
import TermsAndPrivacyPolicyModal from "./TermsAndPrivacyPolicyModal";

export default function Register() {
    const {isAuth} = useContext(AuthContext);
    const [isValidName, setIsValidName] = useState(true);
    const [isValidUsername, setIsValidUsername] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
    const [responseMessage, setResponseMessage] = useState(null);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [showTermsModal,setShowTermsModal] = useState(false);
    
    const handleSubmit = async e => {
        e.preventDefault();
        if (confirmPassword === password){
            let payload = {
                need_mentoring: false,
                available_to_mentor: false
              }
              new FormData(e.target).forEach((value, key) => {
                if (key === "terms_and_conditions_checked" || key === "need_mentoring" || key === "available_to_mentor")
                  value = (value === "true") ? true : false   
                if (key !== "confirmPassword") payload[key] = value;
              });
            const requestRegister = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            };

            fetch(`${BASE_API}/register`, requestRegister)
                .then(async response => {
                    let data = await response.json();
                    if (response.status_code === 201)
                        return setResponseMessage(data.message);
                    setResponseMessage(data.message);
                })
                .catch(() => {
                    setResponseMessage(SERVICE_UNAVAILABLE_ERROR);
                });
        }
    }

    const handleTogglePasswordDisplay = e => {
        setIsPasswordShown(e.target.checked)
    }

    const validateName = e => {
        setIsValidName(e.target.checkValidity());
    };
    const validateUsername = e => {
        setIsValidUsername(e.target.checkValidity());
    };
    const validateEmail = e => {
        setIsValidEmail(e.target.checkValidity());
    };
    const validatePassword = e => {
        setPassword(e.target.value)
        setIsValidPassword(e.target.checkValidity());
    };
    const validateConfirmPassword = e => {
        setConfirmPassword(e.target.value)
        setIsValidConfirmPassword(e.target.checkValidity() && e.target.value === password);
    };

    return isAuth ?
        <Redirect to="/" />
        : (
        <div className="container">
            <div className="row mb-5">
                <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Register</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <form className="register-form mx-auto" onSubmit={handleSubmit}>
                        <form-group controlId="formName">
                            <p className="input-control">
                                <label id="name">Name :</label>
                                <input aria-labelledby="name"
                                    className="field"
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
                                <span className="error">Must be between 2-30 characters long. Can only contain alphabets, whitespace and dash '-'</span>
                             )}
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formUserName">
                            <p className="input-control">
                                <label id="username">Username :</label>
                                <input aria-labelledby="username"
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
                            </p>
                          {!isValidUsername && (
                                <span className="error">Must be between 5-25 characters long. Can only contain alphabets, numbers and underscore '_'</span>
                           )}
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formEmail">
                            <p className="input-control">
                                <label id="email">Email :</label>
                                <input aria-labelledby="email"
                                    className="field"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                                    onChange={validateEmail}
                                    required
                                />
                            </p>
                             {!isValidEmail && (
                                <span className="error">Must match standard email format xxx@xxx.xxx</span>
                               )}
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formPassword">
                            <p className="input-control">

                                <label id="password">Password :</label>
                                <input aria-labelledby="password" 
                                    className="field"
                                    type={isPasswordShown? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    minLength={8}
                                    maxLength={64}
                                    onChange={validatePassword}
                                    required
                                />
                            </p>
                           {!isValidPassword && (
                                <span className="error">Must be between 8-64 characters</span>
                             )}
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formPassword">
                            <p className="input-control">

                                <label id="confirmPassword">Confirm Password :</label>
                                <input aria-labelledby="confirmPassword"
                                    className="field"
                                    type={isPasswordShown? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
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
                        <div><br></br></div>
                        <form-group>
                            <input type="checkbox" className="my-2" name="show_password_checkbox" id="showPassword" onClick={handleTogglePasswordDisplay}/>
                            <label className="ml-2 my-2" htmlFor="showPassword">Show Password</label>
                        </form-group>
                        <div><br></br></div>
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
                        <form-group controlId="formTermsCheck">
                            <div className="row">
                                <div className="col-sm">
                                    <p className="input-control">
                                        <input
                                            type="checkbox"
                                            name="terms_and_conditions_checked"
                                            aria-label="termsCheck"
                                            value={"on" ? true : false}
                                            required
                                        />
                                    </p>
                                </div>
                                <div className="col-sm-10">
                                    <label>
                                        By checking this box, I affirm that I have read and accept
                                        to be bound by the AnitaB.org <a href="#modal" onClick={()=>{setShowTermsModal(true)}}>Code of Conduct, Terms, and
                                        Privacy Policy</a>. Further I consent to the use of my
                                        information for the stated purpose.
                                    </label>
                                </div>
                            </div>
                            {/* Modal popup for displaying code of conduct, terms and privacy policy */}
                            <TermsAndPrivacyPolicyModal show={showTermsModal} handleClose={()=>{setShowTermsModal(false)}}/>
                        </form-group>
                        <div>
                            {responseMessage && <span className="error" name="response" aria-label="response" role="alert">{responseMessage}</span>}
                        </div>
                        <div className="row">
                            <label>Already registered? Click on Login.</label>
                        </div>
                        <div className="row button-group">
                            <div className="col">
                                    <Link   
                                        className="btn btn-primary" 
                                        id="loginBtn" 
                                        to="/login" 
                                        role="button">
                                    Login
                                    </Link>
                            </div>
                            <div className="col-0.5"></div>
                            <div className="col">
                                <button className="btn btn-success"
                                    variant="success"
                                    type="submit"
                                    name="submit"
                                    value="Signup"
                                >Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
