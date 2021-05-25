import React, { Component } from "react";
import "../demander.css";
import Footer from "../Footer";
import { Route } from "react-router-dom";
import axios from "axios";

class demander extends Component {
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
      <div className="demandertroc">
        <div
          className="Demander"
          style={{
            flex: "1",
            flexDirection: "row",
            backgroundImage: "",
            height: "500px",
          }}
        >
          <br />
          <h4 style={{ marginLeft: "80px", color: "blue" }}>
            Demander le troc
          </h4>
          <br />

          <form
            class="form-horizontal "
            role="form"
            method="post"
            action="index.php"
          >
            <div class="form-group ">
              <h6 style={{ marginLeft: "15px" }}>
                Troqueur : {this.state.nom}
              </h6>
              <h6 style={{ marginLeft: "15px" }}>
                Pour son troc : {this.state.troc.titre}
              </h6>
            </div>

            <div class="form-group">
              <label for="message" class="col-sm-2 control-label">
                Demande à envoyer :
              </label>
              <div class="col-sm-8">
                <textarea
                  class="form-control"
                  rows="4"
                  name="Message"
                ></textarea>
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-10 col-sm-offset-2">
                <input
                  id="submit"
                  name="submit"
                  type="submit"
                  value="Envoyer"
                  class="btn btn-primary"
                  style={{ marginLeft: "450px" }}
                />
                <input
                  id="delete"
                  name="delete"
                  type="submit"
                  value="Annuler"
                  class="btn btn-primary"
                  style={{ marginLeft: "20px" }}
                />
                <Route
                  render={({ history }) => (
                    <button
                      to={"//MyTroc/:id"}
                      className="btn btn-primary"
                      style={{ marginLeft: "20px" }}
                      onClick={() => {
                        history.push("/MyTroc/" + this.state.troc._id);
                      }}
                    >
                      Retour
                    </button>
                  )}
                />
              </div>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    );
  }
}

export default demander;
