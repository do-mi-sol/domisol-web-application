import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Header from "../src/components/header/Header";
import Login from "./screens/auth/Login";
import SignUp from "./screens/auth/SignUp";
import Home from "./screens/main/Home";
import Board from "./screens/main/Board";

import "./FontAwesome";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/board" component={Board} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
