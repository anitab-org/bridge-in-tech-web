import React, { useState, useReducer } from "react";
import "./Register.css";
import { BASE_API } from "../config";
import { SERVICE_UNAVAILABLE_ERROR } from "../messages";

const defaultState = {
    isValidName: true,
    isValidUsername: true,
    isValidEmail: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
    isPasswordShown: false,
    password: "",
    confirmPassword: ""
}

const reducer = (state, action) => {
    if (action.type === "VALIDATION") {
        const { field, val } = action.payload;
        return {
            ...state,
            [field]: val
        }
    }
}

export default function Register() {
    const [state, dispatch] = useReducer(reducer, defaultState);
    const [responseMessage, setResponseMessage] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        const { confirmPassword, password } = state;
        if (confirmPassword === password) {
            let payload = {
                need_mentoring: false,
                available_to_mentor: false
            }
            new FormData(e.target).forEach((value, key) => {
                if (key === "terms_and_conditions_checked" || key === "need_mentoring" || key === "available_to_mentor")
                    value = value === "true" || false
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

    const handleValidation = (inputField, value) => {
        dispatch({ type: "VALIDATION", payload: { field: inputField, val: value } });
    };
    const validatePassword = e => {
        dispatch({ type: "VALIDATION", payload: { field: "password", val: e.target.value } });
        dispatch({ type: "VALIDATION", payload: { field: "isValidPassword", val: e.target.checkValidity() } });
    };
    const validateConfirmPassword = e => {
        dispatch({ type: "VALIDATION", payload: { field: "confirmPassword", val: e.target.value } });
        dispatch({
            type: "VALIDATION",
            payload: {
                field: "isValidConfirmPassword",
                val: e.target.checkValidity() && e.target.value === state.password
            }
        });
    };

    const { isValidName, isValidEmail,
        isValidUsername, isValidPassword,
        isValidConfirmPassword, isPasswordShown } = state;
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
                                <label id="name">Name :</label>
                                <input aria-labelledby="name"
                                    className="field"
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    minLength={2}
                                    maxLength={30}
                                    pattern="^[a-zA-Z\s\-]+$"
                                    onChange={(e) =>
                                        handleValidation("isValidName", e.target.checkValidity())}
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
                                    onChange={(e) =>
                                        handleValidation("isValidUsername", e.target.checkValidity())}
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
                                    onChange={(e) =>
                                        handleValidation("isValidEmail", e.target.checkValidity())}
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
                                    type={isPasswordShown ? "text" : "password"}
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
                                    type={isPasswordShown ? "text" : "password"}
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
                            <input type="checkbox" className="my-2" name="show_password_checkbox" id="showPassword"
                                onClick={(e) => handleValidation("isPasswordShown", e.target.checked)} />
                            <label className="ml-1 my-2" htmlFor="showPassword">Show Password</label>
                        </form-group>
                        <div><br></br></div>
                        <form-group>
                            <div className="row">
                                <div className="col-sm text-center">
                                    <label htmlFor="availability">Available to be a :</label>
                                    <form-group>
                                        <div className="row mb-3">
                                            <div className="col-sm">
                                                <input
                                                    name="available_to_mentor"
                                                    id="mentor"
                                                    aria-label="mentor"
                                                    type="checkbox"
                                                    value={"on" ? true : false}
                                                />
                                                <label htmlFor="mentor" className="ml-1">Mentor</label>
                                            </div>
                                            <div className="col-sm">
                                                <input
                                                    name="need_mentoring"
                                                    id="mentee"
                                                    aria-label="mentee"
                                                    type="checkbox"
                                                    value={"on" ? true : false}
                                                />
                                                <label htmlFor="mentee" className="ml-1">Mentee</label>
                                            </div>
                                        </div>
                                    </form-group>
                                </div>
                            </div>
                        </form-group>
                        <form-group controlId="formTermsCheck">
                            <div className="row mb-3">
                                <div className="col-sm-">
                                    <p className="input-control">
                                        <input
                                            type="checkbox"
                                            id="terms_and_conditions"
                                            name="terms_and_conditions_checked"
                                            aria-label="termsCheck"
                                            value={"on" ? true : false}
                                            required
                                        />
                                    </p>
                                </div>
                                <div className="col-sm-11">
                                    <label htmlFor="terms_and_conditions">
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
                        <div className="row mb-3">
                            <label>Already registered? Click on Login.</label>
                        </div>
                        <div className="button-group row">
                            <a className="btn btn-primary col-3" id="loginbtn" href="/login" role="button">Login</a>
                            <div className="col-6"></div>
                            <button className="btn btn-success col-3"
                                variant="success"
                                type="submit"
                                name="submit"
                                value="Signup"
                            >Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
