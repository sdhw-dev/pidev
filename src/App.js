import Connexion from "./components/pages/connexion";
import EspaceP from "./components/pages/EspaceP";
import Inscription from "./components/pages/inscription";
import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import Home from "./components/pages/Home";
import Servicesnc from "./components/pages/Servicesnc";
import Biensnc from "./components/pages/Biensnc";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AjouterAnnonce from "./components/pages/AjouterAnnonce.jsx";
import Navbar from "./components/Navbar";
import NavbarServices from "./components/NavbarServices";


export default class App extends Component {
  state = {
    isConnected: false,
    user: {},
    userId: "60509c17d5280b4db0720397",
  };

  navbar = () => {
    if (this.state.isConnected) {
      return <NavbarServices />;
    } else {
      return <Navbar />;
    }
  };

  render() {
    return (
      <Router>
        <this.navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ajouterAnnonce">
            <AjouterAnnonce userId={this.state.userId} />
          </Route>
          <Route path="/servicesnc" component={Servicesnc} />
          <Route path="/biensnc" component={Biensnc} />
          <Route path="/connexion">
            <Connexion
              onConnexion={(user) =>
                this.setState({ isConnected: true, user: user })
              }
            />
          </Route>
          <Route path="/inscription">
            <Inscription
              onInscription={(user) =>
                this.setState({ isConnected: true, user: user })
              }
            />
          </Route>
          <Route path="/espaceP" component={EspaceP} />
        </Switch>
      </Router>
    );
  }
}
