import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Members from "./membes/Members";
import Register from "./register/Register";
import Login from "./login/Login";
import MySpace from "./myspace/MySpace";
import ProtectedRoute from "./ProtectedRoute";
import Navigation from "./Navigation";
import Unauthorized from "./Unauthorized";

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

    <div>
      <Navigation user={user} />
      <Router>
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
          <Route path="/login" component={Login} />
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
          <Route exact path="/unauthorized">
            <Unauthorized />
          </Route>
        </Switch>
      </Router>
    </div>

  );

}
