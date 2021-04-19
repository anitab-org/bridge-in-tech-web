import React, { useState, useContext } from "react";
import "./Login.css";
import { Redirect, Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import {BASE_API} from "../config";
import { SERVICE_UNAVAILABLE_ERROR } from "../messages";

export default function Login() {
    const [errorMessage, setErrorMessage] = useState(null);
    const {isAuth,login} = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const [isPasswordShown, setIsPasswordShown] = useState(false)
    
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
                if (response.ok){
                    const access_token = data['access_token']
                    fetch(`${BASE_API}/user/personal_details`, {
                        method: "GET",
                        headers: {
                             "Authorization": `Bearer ${access_token}`,
                             "Accept": "application/json",
                             "Content-Type": "application/json",
                        }
                    }).then(async response => {
                        let userData = await response.json();
                        if (response.ok)
                            return login(data, userData['username']); 
                        setErrorMessage(data.message);
                    }).catch(() => setErrorMessage(SERVICE_UNAVAILABLE_ERROR));
                }    
                setErrorMessage(data.message);
            })
            .catch(() => setErrorMessage(SERVICE_UNAVAILABLE_ERROR));
    }

    const handleTogglePasswordDisplay = e => {
        setIsPasswordShown(e.target.checked)
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
                                    type={isPasswordShown? "text" : "password"}
                                    aria-labelledby="Password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                            </p>
                        </form-group>
                        <form-group>
                            <input type="checkbox" className="my-2" name="show_password_checkbox" id="showPassword" onClick={handleTogglePasswordDisplay}/>
                            <label className="ml-2 my-2" htmlFor="showPassword">Show Password</label>
                        </form-group>
                        <div><br></br></div>
                        <div>
                            {errorMessage && <span className="error" name="errorMessage" aria-label="errorMessage" role="alert">{errorMessage}</span>}
                        </div>
                        <div className="row">
                            <label>Not yet registered? Click on sign up.</label>
                        </div>
                        <div className="row button-group">
                            <div className="col">
                                    <Link 
                                        className="btn btn-primary" 
                                        id="registerBtn" 
                                        to="/register" 
                                        role="button">Sign Up
                                    </Link>
                            </div>
                            <div className="col-0.5"></div>
                            <div className="col">
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
