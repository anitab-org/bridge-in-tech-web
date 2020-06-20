import React, { useState } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";
import "../myspace/MySpace";


export default function Login() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    
    const handleSubmit = async e => {
        e.preventDefault();
        
        let payload = {}
        new FormData(e.target).forEach((value, key) => {
            payload[key] = value;
        });

        const requestLogin = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        };

        let data = "";
        let resStatus = 0;
        fetch("http://127.0.0.1:5000/login", requestLogin)
            .then(async response => {
                resStatus = response.status
                data = await response.json();
            })
            .then(res => {
                if (resStatus === 200)
                    setIsAuthenticated(true);
                else
                    setErrorMessage(data["message"]);
            })
            .catch(error => {
                setErrorMessage(data["message"]);
            });
    }

    if (isAuthenticated === true) {
        return <Redirect to="/my-space" />
    }

    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Login</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <form className="login-form mx-auto" onSubmit={handleSubmit}>
                        <form-group controlId="formUserame">
                            <p className="input-control">
                                <label htmlFor="username">Username or Email:</label>
                                <input className="field"
                                    type="text"
                                    name="username"
                                    placeholder="Username or Email"
                                    required
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formPassword">
                            <p className="input-control">
                                <label htmlFor="password">Password :</label>
                                <input className="field"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <div>
                            {errorMessage !== null && <span className="error" name="errorMessage" aria-label="errorMessage" role="alert">{errorMessage}</span>}
                        </div>
                        <div className="row">
                            <label>Not yet register? Sign Up here.</label>
                        </div>
                        <div className="row button-group">
                            <div className="col-sm">
                                <div className="row">
                                    <a className="btn btn-primary" id="registerbtn" href="/register" role="button">Sign Up</a>
                                </div>
                            </div>
                            <div className="col-sm"></div>
                            <div className="col-sm">
                                <button className="btn btn-success"
                                    variant="success"
                                    type="submit"
                                    name="submit"
                                    value="Login"
                                >Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}