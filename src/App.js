import Connexion from "./components/pages/connexion";
import Inscription from "./components/pages/inscription";
import "./App.css";
import React, { Component, useEffect } from "react";
import axios from "axios";
import Home from "./components/pages/Home";
import Biensnc from "./components/pages/Biensnc";
import EspaceP from './components/pages/EspaceP';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AjouterAnnonce from "./components/pages/AjouterAnnonce.jsx";
import Navbar from "./components/Navbar";
import NavbarServices from "./components/NavbarServices";
import ModifProfil from "./components/pages/ModifProfil";
import mesMessages from "./components/pages/mesMessages";
import Calendrier from "./components/pages/Calendrier";
import mesTrocs from "./components/pages/mesTrocs";
import EventCalendar from "./components/pages/EventCalendar";
export default class App extends Component {
  state = {
    isConnected: false,
    user: {},
    userId: "60509c17d5280b4db0720397",
  };

  setUser = (user) => {
    this.setState({
      isConnected: true,
      user: user,
      userId: user._id,
    });
  };

  deconnexion = () => {
    this.setState({
      isConnected: false,
      user: {},
      userId: "",
    });
    localStorage.clear();
  };

  navbar = () => {
    if (this.state.isConnected) {
      return <NavbarServices onDeconnexion={this.deconnexion} />;
    } else {
      return <Navbar />;
    }
  };

  componentWillMount = () => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      console.log(loggedInUser);
      this.setUser(JSON.parse(loggedInUser));
    }
  };

  render() {
    return (
      <Router>
        <this.navbar />
        <Switch>
        <Route path="/calendrier" exact component={EventCalendar} />
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
                this.setUser(user);
                localStorage.setItem("user", JSON.stringify(user));
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
          <Route path="/espaceP">
            <EspaceP user={this.state.user} />
          </Route>
          <Route path="/modifprofil" component={ModifProfil} />
          <Route path="/mesMessages" component={mesMessages} />
          <Route path="/mesTrocs" component={mesTrocs} />
          <Route path="/calendrier" component={Calendrier} />
        </Switch>
      </Router>
    );
  }
}