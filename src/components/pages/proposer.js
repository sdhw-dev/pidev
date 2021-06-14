import React, { Component } from "react";
import "../demander.css";
import Footer from "../Footer";
import { Route } from "react-router-dom";
import axios from "axios";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { Link } from 'react-router-dom';

class Proposer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infosTroqueur: {
        troc: {},
        adresse: "",
        categorie: "",
        date: "",
        nom: "",
        idAnnonce: "",
        idTroqueur: "",
      },
      listeTrocs: [],
      demande: {
        idAnnonceConcerné: "",
        idAnnonceProposé: "",
        idProposeur: "",
        idDemandeur: "",
        message: "",
        nbrePoints: 0,
        titreAnnonceDemandé: "",
        titreAnnonceProposé: "",
        nomDemandeur: "",
      },
    };
  }
  

  componentWillMount = () => {
    axios
      .get("/getAnnonceInfo?id=" + this.props.match.params.id)
      .then((res) => {
        this.setState({ infosTroqueur: res.data });
      })
      .catch((error) => console.log(error));
    axios
      .get("/getListeTrocs?id=" + JSON.parse(localStorage.getItem("user"))._id)
      .then((res) => {
        this.setState({ listeTrocs: res.data });
      })
      .catch((error) => console.log(error));
    console.log(this.state);
  };

  render() {
    return (
      <div className="proposertroc">
        <div
          className="Proposer"
          style={{
            flex: "1",
            flexDirection: "row",
            backgroundImage: "",
            height: "500px",
          }}
        >
          <br />
          <h4 style={{ marginLeft: "80px", color: "blue" }}>
            Proposer un troc en échange
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
                Troqueur : {this.state.infosTroqueur.nom}
              </h6>
              <h6 style={{ marginLeft: "15px" }}>
                Pour son troc : {this.state.infosTroqueur.troc.titre}
              </h6>

              <h6 style={{ marginLeft: "15px" }}>Troc en échange :</h6>
              <Autocomplete
                id="combo-box-demo"
                options={this.state.listeTrocs}
                getOptionLabel={(option) => option.titre}
                style={{ margin: 8, width: "820px" }}
                renderInput={(params) => (
                  <TextField {...params} label="Trocs" variant="outlined" />
                )}
                onChange={(event, value) => {
                  this.state.demande.idAnnonceProposé = value._id;
                  console.log(this.state);
                }}
              />
            </div>

            <div class="form-group">
              <label for="message" class="col-sm-2 control-label">
                Proposition à envoyer:
              </label>
              <div class="col-sm-8">
                <textarea
                  class="form-control"
                  rows="4"
                  name="Message"
                  onChange={(event) =>
                    (this.state.demande.message = event.target.value)
                  }
                ></textarea>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-10 col-sm-offset-2">
<<<<<<< HEAD
              
                <input
                  id="submit"
                  name="submit"
                  value="Envoyer"
                  class="btn btn-primary"
                  onClick={() => {
                    this.state.demande.idDemandeur = JSON.parse(
                      localStorage.getItem("user")
                    )._id;
                    
                    this.state.demande.idProposeur =
                      this.state.infosTroqueur.idTroqueur;
                    this.state.demande.idAnnonceConcerné =
                      this.state.infosTroqueur.idAnnonce;
                    this.state.demande.titreAnnonceDemandé =
                      this.state.infosTroqueur.troc.titre;
                    this.state.demande.nomDemandeur =
                      JSON.parse(localStorage.getItem("user")).nom +
                      " " +
                      JSON.parse(localStorage.getItem("user")).prenom;
                    for (let i = 0; i < this.state.listeTrocs.length; i++) {
                      if (
                        this.state.listeTrocs[i]._id ===
                        this.state.demande.idAnnonceProposé
                      ) {
                        this.state.demande.titreAnnonceProposé =
                          this.state.listeTrocs[i].titre;
                      }
                    }
                    axios
                      .post("/enregistrerDemande", this.state.demande)
                      .then((res) => {})
                      .catch((error) => console.log(error));
                  }}
                  style={{ marginLeft: "450px" }}
=======
                <Route
                  render={({ history }) => (
                    <input
                      id="submit"
                      name="submit"
                      value="Envoyer"
                      class="btn btn-primary"
                      onClick={() => {
                        this.state.demande.idDemandeur = JSON.parse(
                          localStorage.getItem("user")
                        )._id;
                        this.state.demande.idProposeur =
                          this.state.infosTroqueur.idTroqueur;
                        this.state.demande.idAnnonceConcerné =
                          this.state.infosTroqueur.idAnnonce;
                        this.state.demande.titreAnnonceDemandé =
                          this.state.infosTroqueur.troc.titre;
                        this.state.demande.nomDemandeur =
                          JSON.parse(localStorage.getItem("user")).nom +
                          " " +
                          JSON.parse(localStorage.getItem("user")).prenom;
                        for (let i = 0; i < this.state.listeTrocs.length; i++) {
                          if (
                            this.state.listeTrocs[i]._id ===
                            this.state.demande.idAnnonceProposé
                          ) {
                            this.state.demande.titreAnnonceProposé =
                              this.state.listeTrocs[i].titre;
                          }
                        }
                        axios
                          .post("/enregistrerDemande", this.state.demande)
                          .then((res) => {
                            history.push(
                              "/Mytroc/" + this.state.demande.idAnnonceConcerné
                            );
                          })
                          .catch((error) => console.log(error));
                      }}
                      style={{ marginLeft: "450px" }}
                    />
                  )}
>>>>>>> 0a2bc25e1dc02b4e4636eca968a6d8c9ff30d2f4
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

export default Proposer;
