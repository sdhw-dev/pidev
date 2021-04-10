import Connexion from "./components/pages/connexion";
import EspaceP from "./components/pages/EspaceP";
import Inscription from "./components/pages/inscription";
import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AjouterAnnonce from "./components/pages/AjouterAnnonce.jsx";
import Navbar from "./components/Navbar";
import NavbarServices from "./components/NavbarServices";
import Sidebar from "./components/SideBar";

export default class App extends Component {
  state = {
    isConnected: false,
    user: {},
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
            <AjouterAnnonce />
          </Route>
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
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
