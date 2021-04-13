import Connexion from "./components/pages/connexion";
import EspaceP from "./components/pages/EspaceP";
import Inscription from "./components/pages/inscription";
import "./App.css";
import React, { Component, useEffect } from "react";
import axios from "axios";
import Home from "./components/pages/Home";
import Biensnc from "./components/pages/Biensnc";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AjouterAnnonce from "./components/pages/AjouterAnnonce.jsx";
import Navbar from "./components/Navbar";
import NavbarServices from "./components/NavbarServices";
import ModifProfil from "./components/pages/ModifProfil";

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
          <Route path="/servicesnc">
            <Biensnc type={true} />
          </Route>
          <Route path="/biensnc">
            <Biensnc type={false} />
          </Route>

          <Route path="/connexion">
            <Connexion
              onConnexion={(user) => {
                this.setState({
                  isConnected: true,
                  user: user,
                  userId: user._id,
                });
                console.warn(this.state);
                localStorage.setItem("user", user);
              }}
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
          <Route path="/modifprofil" component={ModifProfil} />
        </Switch>
      </Router>
    );
  }
}
