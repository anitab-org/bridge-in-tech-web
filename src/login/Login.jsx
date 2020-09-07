import React, { useState, useContext } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import {BASE_API} from "../config";
import { SERVICE_UNAVAILABLE_ERROR } from "../messages";

export default function Login() {
    const [errorMessage, setErrorMessage] = useState(null);
    const {isAuth,login} = useContext(AuthContext);
    const [user, setUser] = useState(null);
    
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
        fetch(`${BASE_API}/login`, requestLogin)
            .then(async response => {
                let data = await response.json();
                if (response.ok) 
                    return login(data, user);
                setErrorMessage(data.message);
            })
            .catch(() => setErrorMessage(SERVICE_UNAVAILABLE_ERROR));
    }


    return isAuth ?
        <Redirect to="/" />
        : (
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
                                <label id="Username">Username or Email:</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="Username"
                                    name="username"
                                    placeholder="Username or Email"
                                    onChange={e => setUser(e.target.value)}
                                    required
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formPassword">
                            <p className="input-control">
                                <label id="Password">Password :</label>
                                <input className="field"
                                    type="password"
                                    aria-labelledby="Password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <div>
                            {errorMessage && <span className="error" name="errorMessage" aria-label="errorMessage" role="alert">{errorMessage}</span>}
                        </div>
                        <div className="row">
                            <label>Not yet registered? Click on sign up.</label>
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
