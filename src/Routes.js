import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Members from "./members/Members";
import Register from "./register/Register";
import Login from "./login/Login";
import Portfolio from "./myspace/Portfolio";
import PersonalDetails from "./myspace/PersonalDetails";
import AdditionalInfo from "./myspace/AdditionalInfo";
import PersonalBackground from "./myspace/PersonalBackground";
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
          <ProtectedRoute exact path="/members">
            <Members />
          </ProtectedRoute>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <ProtectedRoute
            exact path="/portfolio">
            <Portfolio />
          </ProtectedRoute>
          <ProtectedRoute
            exact path="/personal-details">
            <PersonalDetails />
          </ProtectedRoute>
          <ProtectedRoute
            exact path="/additional-info">
            <AdditionalInfo />
          </ProtectedRoute>
          <ProtectedRoute
            exact path="/personal-background">
            <PersonalBackground />
          </ProtectedRoute>
          <ProtectedRoute
            exact path="/request-history">
          </ProtectedRoute>
        </Switch>
      </AuthProvider>
    </Router>
  );
}