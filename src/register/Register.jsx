import React, { useState } from "react";
import "./Register.css";
import {BASE_API} from "../config";
import {SERVICE_UNAVAILABLE_ERROR} from "../messages";


export default function Register() {
    const [isValidName, setIsValidName] = useState(true);
    const [isValidUsername, setIsValidUsername] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [responseMessage, setResponseMessage] = useState(null);
    
    const handleSubmit = async e => {
        e.preventDefault();
        let payload = {
            need_mentoring: false,
            available_to_mentor: false
          }
          new FormData(e.target).forEach((value, key) => {
            if (key === "terms_and_conditions_checked" || key === "need_mentoring" || key === "available_to_mentor")
              value = (value === "true") ? true : false   
            payload[key] = value;
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
        setIsValidPassword(e.target.checkValidity());
    };

    return (
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
                                <label id="Name">Name :</label>
                                <input aria-labelledby="Name"
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
                         <div>{!isValidName && (
                                <span className="error" title="errorname" aria-label="errorname" role="alert">Must be between 2-30 characters long. Can only contain alphabets, whitespace and dash '-'</span>
                             )}</div>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formUserame">
                            <p className="input-control">
                                <label Id="Username">Username :</label>
                                <input aria-labelledby="Username"
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
                       <div>{!isValidUsername && (
                                <span className="error" title="errorusername" aria-label="errorusername" role="alert">Must be between 5-25 characters long. Can only contain alphabets, numbers and underscore '_'</span>
                           )}</div>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formEmail">
                            <p className="input-control">
                                <label id="Email">Email :</label>
                                <input aria-labelledby="Email"
                                    className="field"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                                    onChange={validateEmail}
                                    required
                                />
                            </p>
                           <div>{!isValidEmail && (
                                <span className="error" title="erroremail" aria-label="erroremail" role="alert">Must match standard email format xxx@xxx.xxx</span>
                               )}</div>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formPassword">
                            <p className="input-control">
                                <label Id="Password">Password :</label>
                                <input aria-labelledby="Password" 
                                    className="field"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    minLength={8}
                                    maxLength={64}
                                    onChange={validatePassword}
                                    required
                                />
                            </p>
                         <div>{!isValidPassword && (
                                <span className="error" title="errorpassword" aria-label="errorpassword" role="alert">Must be between 8-64 characters</span>
                             )}</div>
                        </form-group>
                        <div><br></br></div>
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
                                        to be bound by the AnitaB.org Code of Conduct, Terms, and
                                        Privacy Policy. Further I consent to the use of my
                                        information for the stated purpose.
                                    </label>
                                </div>
                            </div>
                        </form-group>
                        <div>
                            {responseMessage && <span className="error" name="response" aria-label="response" role="alert">{responseMessage}</span>}
                        </div>
                        <div className="row">
                            <label>Already registered? Click on Login.</label>
                        </div>
                        <div className="row button-group">
                            <div className="col-sm">
                                <div className="row">
                                    <a className="btn btn-primary" id="loginbtn" href="/login" role="button">Login</a>
                                </div>
                            </div>
                            <div className="col-sm"></div>
                            <div className="col-sm">
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
