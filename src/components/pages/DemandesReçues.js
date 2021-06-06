import React from "react";
import "../../App.css";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
import { isThisHour } from "date-fns";

class DemandesReçues extends Component {
  state = {
    listeDemandes: [1, 1, 1],
    infosDemandes: [],
  };
  componentDidMount = async () => {
    await axios
      .get(
        "/getListeDemandes?id=" + JSON.parse(localStorage.getItem("user"))._id
      )
      .then((res) => {
        this.setState({ listeDemandes: res.data });
      })
      .catch((er) => console.log(er));
  };

  demande = () => {
    return (
      <form>
        {this.state.listeDemandes.map((demande) => {
          return (
            <div>
              <div class="form-group">
                <div style={{ fontSize: "25px" }} for="textarea">
                  Demande reçue par :
                  <Link
                    style={{ fontSize: "25px", color: "blue" }}
                    to={"/ProfilTroqueur/" + demande.idDemandeur}
                  >
                    {demande.nomDemandeur}
                  </Link>
                  Troc demandé :
                  <Link
                    style={{ fontSize: "25px", color: "gray" }}
                    to={"/MyTroc/" + demande.idAnnonceConcerné}
                  >
                    {demande.titreAnnonceDemandé}
                  </Link>
                  En échange de :
                  <Link
                    style={{ fontSize: "25px", color: "gray" }}
                    to={"/MyTroc/" + demande.idAnnonceProposé}
                  >
                    {demande.titreAnnonceProposé}
                  </Link>
                </div>

                <hr />
                <div style={{ backgroundColor: "white" }}>
                  {demande.message}
                </div>
              </div>

              <Route
                render={({ history }) => (
                  <button
                    to="/EnvoyerMessage"
                    className="btn btn-sm btn-primary pull-right"
                    onClick={() => {
                      history.push("/EnvoyerMessage");
                    }}
                  >
                    Accepter
                  </button>
                )}
              />
              <Route
                render={({ history }) => (
                  <button
                    to="/EnvoyerMessage"
                    className="btn btn-sm btn-primary pull-right"
                    onClick={() => {
                      history.push("/EnvoyerMessage");
                    }}
                  >
                    Refuser
                  </button>
                )}
              />
            </div>
          );
        })}
      </form>
    );
  };
  render() {
    return (
      <div className="DemandesReçues">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Sidebar />
          <div style={{ flex: "1", flexDirection: "row" }}>
            <h1 style={{ backgroundColor: "white" }}>Demandes reçues</h1>
            <this.demande />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DemandesReçues;
