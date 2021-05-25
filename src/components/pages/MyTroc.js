import React from "react";
import Footer from "../Footer";
import "./myTroc.css";
import { Route } from "react-router-dom";
import Ripples from "react-ripples";
import axios from "axios";
import demander from "./demander";
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

  componentWillMount = () => {
    axios
      .get("/getAnnonceInfo?id=" + this.props.match.params.id)
      .then((res) => {
        this.setState(res.data);
      })
      .catch((error) => console.log(error));
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
                      <h6> {"date d'ajout: " /*date*/} </h6>
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
                <div class="row">
                  <div
                    className=" col-md-2 "
                    style={{
                      display: "inline-flex",
                      borderRadius: 25,
                      overflow: "hidden",
                      backgroundcolor: "cadetblue",
                    }}
                  >
                    <Route
                      render={({ history }) => (
                        <Ripples color={"yellow"}>
                          <button
                            to="/demandertroc"
                            type="button"
                            className="btn btn-primary"
                            style={{ width: "350px", height: "50px" }}
                            onClick={() => {
                              history.push(
                                "/demandertroc/" + this.state.troc._id
                              );
                            }}
                          >
                            Demander
                          </button>
                        </Ripples>
                      )}
                    />
                  </div>

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
                              history.push(
                                "/proposertroc/" + this.state.troc._id
                              );
                            }}
                          >
                            Proposer
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
                                idUser: JSON.parse(localStorage.getItem("user"))
                                  ._id,
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
                                idUser: JSON.parse(localStorage.getItem("user"))
                                  ._id,
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
                              history.push(
                                "/ProfilTroqueur/" + this.state.troc.idUser
                              );
                            }}
                          >
                            Consulter le profil du troqueur
                          </button>
                        </Ripples>
                      )}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Avis />
        <Footer />
      </div>
    );
  }
}
