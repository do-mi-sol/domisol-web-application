import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Header from "../src/components/header/Header";
import Login from "./screens/auth/Login";
import FindID from "./screens/auth/FindID";
import FindPW from "./screens/auth/FindPW";
import SignUp from "./screens/auth/SignUp";
import Home from "./screens/main/Home";
import Board from "./screens/main/Board";
import Detail from "./screens/main/Detail";
import Write from "./screens/main/Write";

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
      <Route exact path="/findid" component={FindID} />
      <Route exact path="/findpw" component={FindPW} />
      <Route exact path="/detail" component={Detail} />
      <Route exact path="/write" component={Write} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
