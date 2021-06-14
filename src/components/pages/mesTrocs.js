import React from "react";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import "../../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./mesTrocs.css";
import { Link } from "react-router-dom";

class mesTrocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valeurChoisie: 1,
      troc: {},
      adresse: "",
      categorie: "",
      date: "",
      nom: "",
      idAnnonce: "",
      idTroqueur: "",
      listeTrocs: [[], [], [], []],
    };
  }

  componentDidMount = async () => {
    await axios
      .get("/getTrocs?id=" + JSON.parse(localStorage.getItem("user"))._id)
      .then((res) => {
        console.log(res.data);
        this.setState({ listeTrocs: res.data });
      })
      .catch((error) => console.log(error));
  };

  submit() {
    console.log("salut");
    const option = document.getElementById("id");
    console.log(option);

    if (option == 1) {
      <div>Salut id=1</div>;
    }
    console.warn(this.state);
  }

  boutonTerminé = (id, i, idAnnonce) => {
    if (!i) {
      return (
        <Route
          render={({ history }) => (
            <button
              className="card__btn"
              onClick={() => {
                axios
                  .post("/setEtat", {
                    idUser: JSON.parse(localStorage.getItem("user"))._id,
                    idDemande: id,
                  })
                  .then(() => {
                    history.push("/noterTroc/" + idAnnonce);
                  });
              }}
            >
              terminer{" "}
            </button>
          )}
        />
      );
    } else {
      return null;
    }
  };
  component = () => {
    return (
      <div>
        <h2>Mes trocs </h2>

        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

        <section id="team" class="pb-5">
          <div class="container">
            <div class="row">
              {this.state.listeTrocs[1].map((troc) => {
                return (
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="image-flip">
                      <div class="mainflip flip-0">
                        <div class="frontside">
                          <div class="card">
                            <div class="card-body text-center">
                              <p>
                                <img
                                  class=" img-fluid"
                                  src={
                                    "/getImageAnnonce?id=" +
                                    troc.idAnnonceConcerné
                                  }
                                />
                              </p>
                              <h4 class="card-title">
                                {troc.titreAnnonceDemandé}
                              </h4>
                              <p class="card-text">
                                {troc.descriptionAnnonceDemandé}
                              </p>

                              <a
                                href="https://www.fiverr.com/share/qb8D02"
                                class="btn btn-primary btn-sm"
                              >
                                <i class="fa fa-plus"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="backside">
                          <div class="card">
                            <div class="card-body text-center">
                              <p>
                                <img
                                  class=" img-fluid"
                                  src={
                                    "/getImageAnnonce?id=" +
                                    troc.idAnnonceProposé
                                  }
                                />
                              </p>
                              <h4 class="card-title">
                                {troc.titreAnnonceProposé}
                              </h4>
                              <p class="card-text">
                                {troc.descriptionAnnonceProposé}
                              </p>
                              <p class="card-text">
                                Etat :{" "}
                                {troc.etat == 4 || troc.etat == 2
                                  ? "terminé"
                                  : "en cours"}
                              </p>
                              {this.boutonTerminé(
                                troc._id,
                                troc.etat == 4 || troc.etat == 2,
                                troc.idAnnonceConcerné
                              )}

                              <a
                                href="https://www.fiverr.com/share/qb8D02"
                                class="btn btn-primary btn-sm"
                              >
                                <i class="fa fa-plus"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {this.state.listeTrocs[0].map((troc) => {
                return (
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="image-flip">
                      <div class="mainflip flip-0">
                        <div class="frontside">
                          <div class="card">
                            <div class="card-body text-center">
                              <p>
                                <img
                                  class=" img-fluid"
                                  src={
                                    "/getImageAnnonce?id=" +
                                    troc.idAnnonceProposé
                                  }
                                />
                              </p>
                              <h4 class="card-title">
                                {troc.titreAnnonceProposé}
                              </h4>
                              <p class="card-text">
                                Description du troc:
                                {this.state.troc.description}Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit
                              </p>
                              <a
                                href="https://www.fiverr.com/share/qb8D02"
                                class="btn btn-primary btn-sm"
                              >
                                <i class="fa fa-plus"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="backside">
                          <div class="card">
                            <div class="card-body text-center">
                              <p>
                                <img
                                  class=" img-fluid"
                                  src={
                                    "/getImageAnnonce?id=" +
                                    troc.idAnnonceConcerné
                                  }
                                />
                              </p>
                              <h4 class="card-title">
                                {troc.titreAnnonceDemandé}
                              </h4>
                              <p class="card-text">{"description"}</p>
                              <p class="card-text">
                                Etat :{" "}
                                {troc.etat == 4 || troc.etat == 3
                                  ? "terminé"
                                  : "en cours"}
                              </p>
                              {this.boutonTerminé(
                                troc._id,
                                troc.etat == 4 || troc.etat == 3,
                                troc.idAnnonceConcerné
                              )}

                              <a
                                href="https://www.fiverr.com/share/qb8D02"
                                class="btn btn-primary btn-sm"
                              >
                                <i class="fa fa-plus"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Sidebar />
          <div style={{ flex: "1", flexDirection: "row" }}>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <br />
                <br />
                <div className="form-row">
                  <div className="col-md-4">
                    <label>Filtrer par :</label>
                  </div>

                  <div className="form-group col-md-8">
                    <select
                      className="form-control"
                      name="tous-mes-trocs"
                      onChange={(event) => {
                        this.setState({
                          valeurChoisie: event.target.selectedIndex + 1,
                        });
                      }}
                    >
                      <option id="1">Mes trocs</option>
                      <option id="2">Mes trocs en cours d'exécution</option>
                      <option id="3">Mes trocs terminés</option>
                    </select>
                  </div>

                  <this.component />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default mesTrocs;
