import React from "react";
import Footer from "../Footer";
import "../../myTroc.css";
import { Route } from "react-router-dom";
import Ripples from "react-ripples";
import axios from "axios";

export default class MyTroc extends React.Component {
  constructor(props) {
    super(props);
    this.state = { troc: {}, adresse: "", categorie: "", date: "" };
  }

  componentWillMount = () => {
    axios
      .get("/getAnnonceInfo?id=" + this.props.match.params.id)
      .then((res) => {
        this.setState(res.data);
        console.log(this.state);
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
                  <div class="col-md-4">
                    <div className="profile-img">
                      <img
                        src="https://www.viepratique.fr/wp-content/uploads/sites/4/2019/04/bricolage-et-diy-quels-outils-avoir-chez-soi.jpg"
                        alt=""
                        style={{ height: "350", width: "400" }}
                      />
                    </div>
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
                      <h4>Description de l'annonce: </h4>

                      <h6>{this.state.troc.description} </h6>
                    </div>
                  </div>
                  <h3>Pour plus d'nformations :</h3>
                  <div class="col-md-2">
                    <Route
                      render={({ history }) => (
                        <Ripples color="yellow">
                          <button
                            to="/contactertroqueur"
                            type="button"
                            className="btn btn-primary"
                            style={{
                              display: "inline-flex",
                              borderRadius: 25,
                              overflow: "hidden",
                            }}
                            onClick={() => {
                              history.push("/contactertroqueur");
                            }}
                          >
                            Contacter le troqueur
                          </button>
                        </Ripples>
                      )}
                    />
                  </div>
                </div>
              </form>

              <div
                className="button-dem"
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
                        to="/demandertroc"
                        type="button"
                        className="btn btn-primary"
                        style={{ width: "350px", height: "50px" }}
                        onClick={() => {
                          history.push("/demandertroc");
                        }}
                      >
                        Demander
                      </button>
                    </Ripples>
                  )}
                />
              </div>

              <div
                className="button-prop"
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
                          history.push("/proposertroc");
                        }}
                      >
                        Proposer
                      </button>
                    </Ripples>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
