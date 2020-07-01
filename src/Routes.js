import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Members from "./membes/Members";
import Register from "./register/Register";
import Login from "./login/Login";
import MySpace from "./myspace/MySpace";
import { Navbar, Nav } from "react-bootstrap";
import ProtectedRoute from "./ProtectedRoute";

export default function Routes() {

  const [user, setUser] = useState(false);

  const handleLogin = e => {
    e.preventDefault();
    setUser(true);
  }

  const handleLogout = e => {
    e.preventDefault();
    setUser(false);
  }
  return (
    <Router>
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
              <Nav.Link href="/members">Members</Nav.Link>
              if (!user) {
                <>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                </>
              } else {
                <>
              <Nav.Link href="/my-space">My Space</Nav.Link>
              <Nav.Link href="/logout">Logout</Nav.Link>
              </>
            }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" handleLogin={handleLogin}>
            <Home user={user} handleLogin={handleLogin} />
          </Route>

          <Route path="/members">
            <Members user={user} />
          </Route>
          <Route path="/register">
            <Register user={user} />
          </Route>
          <Route path="/login" component={Login}/>
          <ProtectedRoute
            exact
            path="/my-space"
            user={user}
            handleLogout={handleLogout}
            component={MySpace}
          />
          <Route path="/logout">
            <Home user={user} />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}
