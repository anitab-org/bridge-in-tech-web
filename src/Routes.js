import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import Members from "./members/Members";
import MemberPortfolio from "./members/MemberPortfolio";
import Member from "./members/Member";
import Portfolio from "./myspace/Portfolio";
import ErrorPage from "./errorPage/ErrorPage"
import PersonalDetails from "./myspace/PersonalDetails";
import AdditionalInfo from "./myspace/AdditionalInfo";
import PersonalBackground from "./myspace/PersonalBackground";
import Organizations from "./organizations/Organizations";
import Organization from "./organizations/Organization";
import EditPrograms from "./myorganization/EditPrograms";
import EditOrganization from "./myorganization/EditOrganization";
import EditProgram from "./myorganization/EditProgram";
import Program from "./organizations/Program";
import Register from "./register/Register";
import Login from "./login/Login";
import ProtectedRoute from "./ProtectedRoute";
import AuthProvider from "./AuthContext";
import Programs from "./organizations/Programs";
import About from "./home/About";
import Benefit from "./home/Benefit"
import Nav from "./Navigation"

export default function Routes() {
  return (
    <Router>
        <AuthProvider>
          <Nav/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/benefit">
            <Benefit />
          </Route>
          <ProtectedRoute exact path="/members">
            <Members />
          </ProtectedRoute>
          <ProtectedRoute path="/members/portfolio/">
            <MemberPortfolio />
          </ProtectedRoute>
          <ProtectedRoute path="/members/profile/">
            <Member />
          </ProtectedRoute>
          <ProtectedRoute exact path="/organizations">
            <Organizations />
          </ProtectedRoute>
          <ProtectedRoute path="/organizations/portfolio/">
            <Programs />
          </ProtectedRoute>
          <ProtectedRoute path="/organizations/profile/">
            <Organization />
          </ProtectedRoute>
          <ProtectedRoute path="/organizations/programs/">
            <Program />
          </ProtectedRoute>
          <ProtectedRoute exact path="/portfolio">
            <Portfolio />
          </ProtectedRoute>
          <ProtectedRoute exact path="/personal-details">
            <PersonalDetails />
          </ProtectedRoute>
          <ProtectedRoute exact path="/additional-info">
            <AdditionalInfo />
          </ProtectedRoute>
          <ProtectedRoute exact path="/personal-background">
            <PersonalBackground />
          </ProtectedRoute>
          <ProtectedRoute exact path="/request-history"></ProtectedRoute>
          <ProtectedRoute exact path="/organization-portfolio">
            <EditPrograms />
          </ProtectedRoute>
          <ProtectedRoute exact path="/organization-profile">
            <EditOrganization />
          </ProtectedRoute>
          <ProtectedRoute path="/organization-programs/">
            <EditProgram />
          </ProtectedRoute>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}
