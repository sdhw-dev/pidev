import Connexion from "./components/pages/connexion";
import Inscription from "./components/pages/inscription";
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
       
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/connexion">
            <Connexion
              onInscription={this.handleGoToInscriptionPage}
              onConnection={this.handleConnection}
              />
          </Route>
          <Route path="/inscription">
            <Inscription onInscription={this.handleAddUser} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
