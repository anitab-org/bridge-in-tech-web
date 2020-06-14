import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import { Navbar, Nav } from "react-bootstrap";


export default (
  <BrowserRouter>
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
            <img
              className="d-inline-block align-top"
              src="public/assets/images/AnitaBLogo.png"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/programs">Programs</Nav.Link>
              <Nav.Link href="/organizations">Organizations</Nav.Link>
              <Nav.Link href="/members">Members</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);
