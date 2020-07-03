import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Members from "./members/Members";
import Register from "./register/Register";
import Login from "./login/Login";
import Logout from "./Logout";
import MySpace from "./myspace/MySpace";
import ProtectedRoute from "./ProtectedRoute";
import Navigation from "./Navigation";
import Cookies from "js-cookie";


export const SessionUser = createContext(Cookies.get("user"));
export const BASE_API_URL = "http://127.0.0.1:5000";

export default function Routes() {
  const [user, setUser] = useState(Cookies.get("user"));
  useEffect(
    () => {
      setUser(Cookies.get("user"));
    },
    [user]
  );

  return (
    <SessionUser.Provider value={user}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/members">
            <Members />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <ProtectedRoute
            exact
            path="/my-space"
          >
            <MySpace />
          </ProtectedRoute>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
      </Router>
    </SessionUser.Provider>
  );
}

