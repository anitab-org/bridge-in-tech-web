import React, { useState, useContext } from "react";
import "./Login.css";
import { Redirect, Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { BASE_API } from "../config";
import { SERVICE_UNAVAILABLE_ERROR } from "../messages";
import signup from '../assets/images/signup.jpg';

export default function Login() {
    const [errorMessage, setErrorMessage] = useState(null);
    const { isAuth, login } = useContext(AuthContext);
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
                if (response.ok) {
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
            <img className="side-img" src={signup} alt="image here" ></img>
              <div className="heading">
                  <h1>Welcome Back!</h1>
              </div>

              <div className="content">
                  <p>Glad to see you again, kindly provide the details below and lets get you back on track again.</p>
              </div>

            


              <form className="login-form mx-auto" onSubmit={handleSubmit}/>
                        <form-group controlId="formUserame">
                            <p className="input-control">
                                <label id="Username">Username or Email:</label>
                                <input className="field1"
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
                                <label id="Password">Password:</label>
                                <input className="field2"
                                    type={isPasswordShown? "text" : "password"}
                                    aria-labelledby="Password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                            </p>
                        </form-group>
                       
                        <div>
                            {errorMessage && <span className="error" name="errorMessage" aria-label="errorMessage" role="alert">{errorMessage}</span>}
                        </div>
                        
                        <div className="row">
                            <label>Dont have an Account? Sign Up.</label>
                        </div>
                        
                        <button className="btn"
                               variant="success"
                                    type="submit"
                                    name="submit"
                                    value="Sign In"
                                > 
                                Sign In
                            </button>

                         
                            
                           
               
                   
                 </div>
            
               
            );
}
