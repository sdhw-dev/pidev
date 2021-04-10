import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const CheckMail = (data) => {
  var res;
  const url = "/checkMail";
  res = axios
    .post(url, { mail: data })
    .then((response) => {
      return JSON.parse(JSON.stringify(response.data));
    })

    .catch((error) => {
      console.log(error.response);
    });
  return res;
};

const handleAddUser = (utilisateur) => {
  const url = "/addUser";
  const data = utilisateur;
  axios
    .post(url, data)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error.response);
    });
};

class Inscription extends Component {
  state = {
    infosInscription: {
      nom: "",
      prenom: "",
      pass: "",
      contact: {
        mail: "",
        tel: "",
      },
      adresse: {
        idVille: 0,
        adresse: "",
      },
    },
    pass2: "",
    error: false, // erreur mot de passes differents
    erreurMailExitant: false,
    erreurChampsVide: false, // Si un des champs est laissé vide avant clique sur inscription
  };

  render() {
    return (
      <Box style={{ overflow: "auto" }}>
        <Box
          border={1}
          display="flex"
          flexDirection="column"
          maxWidth="sm"
          style={{
            maxInlineSize: 600,
            marginLeft: "auto",
            marginRight: 15,
            marginTop: 15,
            marginBottom: 15,
            alignItems: "baselineposition",
            borderRadius: 15,
          }}
        >
          <TextField
            id="nom"
            label="Nom"
            required
            margin="normal"
            error={this.state.erreurChampsVide}
            style={{ margin: 8 }}
            variant="outlined"
            onChange={(event) => {
              this.state.infosInscription.nom = event.target.value;
            }}
          />
          <TextField
            id="prenom"
            label="Prenom"
            required
            margin="normal"
            error={this.state.erreurChampsVide}
            variant="outlined"
            style={{ margin: 8 }}
            onChange={(event) => {
              this.state.infosInscription.prenom = event.target.value;
            }}
          />

          <TextField
            id="pass1"
            label="Mot de passe"
            required
            style={{ margin: 8 }}
            margin="normal"
            variant="outlined"
            error={this.state.erreurChampsVide}
            type="password"
            onChange={(event) => {
              this.setState({ error: false });
              this.state.infosInscription.pass = event.target.value;
            }}
          />
          <TextField
            id="pass2"
            label="Confirmation mot de passe"
            style={{ margin: 8 }}
            margin="normal"
            required
            variant="outlined"
            error={this.state.error || this.state.erreurChampsVide}
            helperText={this.state.error ? "mot de passes differents" : ""}
            type="password"
            onChange={(event) => {
              this.setState({ error: false });
              this.state.pass2 = event.target.value;
            }}
          />

          <TextField
            id="mail"
            label="adresse mail"
            style={{ margin: 8 }}
            margin="normal"
            required
            variant="outlined"
            error={this.state.erreurMailExitant || this.state.erreurChampsVide}
            helperText={
              this.state.erreurMailExitant ? "cette adresse existe deja " : ""
            }
            onChange={(event) => {
              this.state.infosInscription.contact.mail = event.target.value;
              this.setState({ erreurMailExitant: false });
            }}
          />
          <TextField
            id="tel"
            label="Numero de telephone"
            style={{ margin: 8 }}
            margin="normal"
            variant="outlined"
            onChange={(event) => {
              this.state.infosInscription.contact.tel = event.target.value;
            }}
          />
          <Autocomplete
            id="combo-box-demo"
            options={villes}
            getOptionLabel={(option) => option.nom}
            style={{ margin: 8 }}
            renderInput={(params) => (
              <TextField {...params} label="ville" variant="outlined" />
            )}
            onChange={(event, value) => {
              this.state.infosInscription.adresse.idVille = value.id;
            }}
          />
          <TextField
            id="adresse"
            label="Adresse"
            style={{ margin: 8 }}
            margin="normal"
            required
            variant="outlined"
            error={this.state.erreurChampsVide}
            helperText={
              this.state.erreurChampsVide
                ? "Remplissez tout les champs avec * et choisissez votre ville"
                : ""
            }
            onChange={(event) => {
              this.state.infosInscription.adresse.adresse = event.target.value;
            }}
          />
          <Route
            render={({ history }) => (
              <button
                className="btn"
                key="inscription"
                style={{ backgroundColor: "#008000" }}
                onClick={() => {
                  if (
                    //Si l'un des champs est vide
                    this.state.infosInscription.nom == "" ||
                    this.state.infosInscription.prenom == "" ||
                    this.state.infosInscription.pass == "" ||
                    this.state.infosInscription.contact.mail == "" ||
                    this.state.infosInscription.adresse.idVille == 0 ||
                    this.state.infosInscription.adresse.adresse == ""
                  ) {
                    this.setState({ erreurChampsVide: true });
                    return;
                  } else {
                    this.setState({ erreurChampsVide: false });
                    //si tout les champs son remplies
                    if (this.state.pass2 === this.state.infosInscription.pass) {
                      let res = CheckMail(
                        this.state.infosInscription.contact.mail
                      );
                      res.then((a) => {
                        if (!a) {
                          handleAddUser(this.state.infosInscription);
                          this.props.onInscription(this.state.infosInscription);
                          console.log("a" + this.state.infosInscription);
                          history.push("./espaceP");
                        } else {
                          this.setState({ erreurMailExitant: true });
                        }
                      });
                    } else {
                      this.setState({ error: true });
                    }
                  }
                }}
              >
                S'inscrire
              </button>
            )}
          />

          <li>
            Si vous avez deja un compte,
            <Link to="/connexion"> Connectez vous ici</Link>{" "}
          </li>
        </Box>
      </Box>
    );
  }
}
const villes = [
  { nom: "Meknes", id: 1 },
  { nom: "Casablanca", id: 2 },
  { nom: "Rabat", id: 3 },
  { nom: "Marrakech", id: 4 },
];

export default Inscription;
