import Login from "./components/pages/login";
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
  handleAddUser = (utilisateur) => {
    const url = "/addUser";
    const data = utilisateur;
    axios
      .post(url, data)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  handleConnection = (data) => {
    const url = "/connection";
    axios
      .post(url, data)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/login">
            <Login
              onInscription={this.handleGoToInscriptionPage}
              onConnection={this.handleConnection}
            />
          </Route>
          <Route path="/sign-up">
            <Inscription onInscription={this.handleAddUser} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
