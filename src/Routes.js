import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Members from "./members/Members";
import Register from "./register/Register";
import Login from "./login/Login";
import MySpace from "./myspace/MySpace";
import ProtectedRoute from "./ProtectedRoute";
import Navigation from "./Navigation";
import AuthProvider from "./AuthContext";


export default function Routes() {

  return (
    <AuthProvider.Provider>
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
        </Switch>
      </Router>
    </AuthProvider.Provider>
  );
}

