import React, { useState } from "react";
import "./Register.css";


export default function Register() {
    const [validName, setValidName] = useState(true);
    const [validUsername, setValidUsername] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [responseMessage, setResponseMessage] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        let payload = {}
        new FormData(e.target).forEach((value, key) => {
            if (key === "terms_and_conditions_checked" || key === "need_mentoring" || key === "available_to_mentor")
                if (value === "true")
                    payload[key] = true;
                else
                    payload[key] = false;
            else
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

        let data = "";
        fetch("http://127.0.0.1:5000/register", requestRegister)
            .then(async response => {

                data = await response.json();
                setResponseMessage(data["message"]);
            })
            .catch(error => {
                setResponseMessage(data["message"]);
            });
    }

    const validateName = e => {
        setValidName(e.target.checkValidity());
    };
    const validateUsername = e => {
        setValidUsername(e.target.checkValidity());
    };
    const validateEmail = e => {
        setValidEmail(e.target.checkValidity());
    };
    const validatePassword = e => {
        setValidPassword(e.target.checkValidity());
    };
    
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Register Form</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <form className="register-form mx-auto" onSubmit={handleSubmit}>
                        <form-group controlId="formName">
                            <p className="input-control">
                                <label htmlFor="name">Name :</label>
                                <input className="field"
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
                            {!validName && (
                                <span className="error">Must be between 2-30 characters long. Can only contain alphabets, whitespace and dash '-'</span>
                            )}
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formUserame">
                            <p className="input-control">
                                <label htmlFor="username">Username :</label>
                                <input className="field"
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
                            {!validUsername && (
                                <span className="error">Must be between 5-25 characters long. Can only contain alphabets, numbers and underscore '_'</span>
                            )}
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formEmail">
                            <p className="input-control">
                                <label htmlFor="email">Email :</label>
                                <input className="field"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                                    onChange={validateEmail}
                                    required
                                />
                            </p>
                            {!validEmail && (
                                <span className="error">Must match standard email format xxx@xxx.xxx</span>
                            )}
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formPassword">
                            <p className="input-control">
                                <label htmlFor="password">Password :</label>
                                <input className="field"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    minLength={8}
                                    maxLength={64}
                                    onChange={validatePassword}
                                    required
                                />
                            </p>
                            {!validPassword && (
                                <span className="error">Must be between 8-64 characters</span>
                            )}
                        </form-group>
                        <div><br></br></div>
                        <div><br></br></div>
                        <form-group>
                            <div className="row">
                                <div className="col-sm text-center">
                                    <label htmlFor="availability">Available to be a :</label>
                                    <form-group>
                                        {['checkbox'].map((type) => (
                                            <div key={`inline-${type}`} className="mb-3">
                                                <div className="row">
                                                    <div className="col-sm">
                                                        <input
                                                            name="available_to_mentor"
                                                            aria-label="mentor"
                                                            type={type}
                                                            value={"on" ? true : false}
                                                            id={`inline-${type}-1`} />
                                                        <label htmlFor="mentor">Mentor</label>
                                                    </div>
                                                    <div className="col-sm">
                                                        <input
                                                            name="need_mentoring"
                                                            aria-label="mentee"
                                                            type={type}
                                                            value={"on" ? true : false}
                                                            id={`inline-${type}-2`} />
                                                        <label htmlFor="mentee">Mentee</label>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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
                            {responseMessage !== null && <span className="error" name="response" aria-label="response" role="alert">{responseMessage}</span>}
                        </div>
                        <div className="row">
                            <label>Already register? Login here.</label>
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