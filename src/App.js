import Login from "./components/login";
import Inscription from "./components/inscription";
import Navbar from "./components/Navbar";
import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sign-up">
            <Inscription />
          </Route>
        </Switch>
      </Router>
    );
  }
}
