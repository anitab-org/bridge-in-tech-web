import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainNavPublic from "./js/components/MainNavPublic";
import Home from "./js/Home";

export default (
  <BrowserRouter>
    <div>
      <MainNavPublic />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);
