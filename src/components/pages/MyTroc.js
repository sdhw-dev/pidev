import React from "react";
import Footer from "../Footer";
import "./myTroc.css";
import { Route } from "react-router-dom";
import Ripples from "react-ripples";
import axios from "axios";

import Avis from "./Avis";

export default class MyTroc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      troc: {},
      adresse: "",
      categorie: "",
      date: "",
      nom: "",
      idAnnonce: "",
      idTroqueur: "",
    };
  }

  note = () => {
    if (this.state.troc.notes) {
      return (
        <div>
          {this.state.troc.notes.map((note) => {
            return (
              <div className="Avis">
                <link
                  href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
                  rel="stylesheet"
                />
                <div class="container bootdey">
                  <div class="col-md-12 bootstrap snippets">
                    <div class="panel">
                      <div class="panel-body">
                        <div class="media-block">
                          <div class="media-body">
                            <div class="mar-btm"></div>
                            <p>{"note: " + note.note}</p>
                            <p>{"commentaire:" + note.commentaire}</p>

                            <hr />
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  };

  componentWillMount = () => {
    axios
      .get("/getAnnonceInfo?id=" + this.props.match.params.id)
      .then((res) => {
        this.setState(res.data);
      })
      .catch((error) => console.log(error));
  };

  buttons = () => {
    if (localStorage.getItem("user")) {
      return (
        <div class="row">
          <div
            className=" col-md-2 "
            style={{
              display: "inline-flex",
              borderRadius: 25,
              overflow: "hidden",
              backgroundcolor: "cadetblue",
            }}
          ></div>

          <div
            className="col-md-2 "
            style={{
              display: "inline-flex",
              borderRadius: 25,
              overflow: "hidden",
            }}
          >
            <Route
              render={({ history }) => (
                <Ripples color={"yellow"}>
                  <button
                    to="/proposertroc"
                    type="button"
                    className="btn btn-primary"
                    style={{ width: "350px", height: "50px" }}
                    onClick={() => {
                      history.push("/proposertroc/" + this.state.troc._id);
                    }}
                  >
                    Demander
                  </button>
                </Ripples>
              )}
            />
          </div>
          <div
            className=" col-md-2"
            style={{
              display: "inline-flex",
              borderRadius: 25,
              overflow: "hidden",
            }}
          >
            <Route
              render={({ history }) => (
                <Ripples color={"yellow"}>
                  <button
                    to="/Avis"
                    type="button"
                    className="btn btn-primary"
                    style={{ width: "350px", height: "50px" }}
                    onClick={() => {
                      axios.post("/ajouterAuxFavoris", {
                        idAnnonce: this.state.idAnnonce,
                        idUser: JSON.parse(localStorage.getItem("user"))._id,
                      });
                    }}
                  >
                    Ajouter aux favoris
                  </button>
                </Ripples>
              )}
            />
          </div>
          <div
            className=" col-md-3"
            style={{
              display: "inline-flex",
              borderRadius: 25,
              overflow: "hidden",
            }}
          >
            <Route
              render={({ history }) => (
                <Ripples color={"yellow"}>
                  <button
                    to="/ProfilTroqueur/:id"
                    type="button"
                    className="btn btn-primary"
                    style={{ width: "350px", height: "50px" }}
                    onClick={() => {
                      axios.post("/ajouterAuxContacts", {
                        idContact: this.state.idTroqueur,
                        idUser: JSON.parse(localStorage.getItem("user"))._id,
                      });
                    }}
                  >
                    Ajouter aux contactes
                  </button>
                </Ripples>
              )}
            />
          </div>
          <div
            className=" col-md-3"
            style={{
              display: "inline-flex",
              borderRadius: 25,
              overflow: "hidden",
            }}
          >
            <Route
              render={({ history }) => (
                <Ripples color={"yellow"}>
                  <button
                    to="/ProfilTroqueur/:id"
                    type="button"
                    className="btn btn-primary"
                    style={{ width: "350px", height: "50px" }}
                    onClick={() => {
                      history.push("/ProfilTroqueur/" + this.state.troc.idUser);
                    }}
                  >
                    Consulter le profil du troqueur
                  </button>
                </Ripples>
              )}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div
          className=" col-md-3"
          style={{
            display: "inline-flex",
            borderRadius: 25,
            overflow: "hidden",
          }}
        >
          <Route
            render={({ history }) => (
              <Ripples color={"yellow"}>
                <button
                  to="/ProfilTroqueur/:id"
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "350px", height: "50px" }}
                  onClick={() => {
                    history.push("/ProfilTroqueur/" + this.state.troc.idUser);
                  }}
                >
                  Consulter le profil du troqueur
                </button>
              </Ripples>
            )}
          />
        </div>
      );
    }
  };

  render() {
    return (
      <div className="troc" style={{ backgroundColor: "#ABD0BE" }}>
        <div
          style={{ display: "flex", flexDirection: "row", paddingLeft: "15px" }}
        >
          <div className="troc">
            <div
              class="container emp-profile"
              style={{ backgroundColor: "#ABD0BE", width: "3500px" }}
            >
              <form method="post">
                <div class="row">
                  <div class="col-md-6">
                    <img
                      src={
                        this.state.troc.image
                          ? "/getImage?path=" + this.state.troc.image
                          : "https://www.viepratique.fr/wp-content/uploads/sites/4/2019/04/bricolage-et-diy-quels-outils-avoir-chez-soi.jpg"
                      }
                      alt=""
                      style={{ height: "350px", width: "400px" }}
                    />
                  </div>

                  <div class="col-md-6">
                    <div className="profile-head">
                      <h4> {this.state.troc.titre} </h4>
                      <h6>
                        {"type: " + (this.state.troc.type ? "service" : "bien")}
                      </h6>
                      <h6>{"categorie: " + this.state.categorie}</h6>
                      <h6>
                        {
                          "adresse du Troqueur: " +
                            this.state.adresse /*addrTroq*/
                        }{" "}
                      </h6>
                      <h6>
                        {" "}
                        {"date d'ajout: " + this.state.troc.date /*date*/}{" "}
                      </h6>
                      moyenne des notes:
                      {this.state.troc.note
                        ? this.state.troc.note
                        : "aucune note"}
                    </div>
                    <br />
                    <div className="description">
                      <h4>Description de l'annonce: </h4>

                      <h6>{this.state.troc.description} </h6>
                    </div>
                  </div>
                </div>

                <br />
                <br />
                <this.buttons />
              </form>
            </div>
          </div>
        </div>
        <this.note />
        <Footer />
      </div>
    );
  }
}
