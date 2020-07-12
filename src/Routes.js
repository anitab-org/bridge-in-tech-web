import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Members from "./members/Members";
import Register from "./register/Register";
import Login from "./login/Login";
import MyPortfolio from "./myspace/Portfolio";
import MyProfile from "./myspace/Profile"
import ProtectedRoute from "./ProtectedRoute";
import Navigation from "./Navigation";
import AuthProvider from "./AuthContext";


export default function Routes() {

  return (
    <Router>
      <AuthProvider>
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
            exact path="/portfolio">
            <MyPortfolio />
          </ProtectedRoute>
          <ProtectedRoute
            exact path="/profile">
            <MyProfile />
          </ProtectedRoute>
          <ProtectedRoute
            exact path="/request-history">
          </ProtectedRoute>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

