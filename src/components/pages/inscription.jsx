import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Autocomplete from "@material-ui/lab/Autocomplete";


import { BrowserRouter as Router, Link } from "react-router-dom";

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
    error2: false, //erreur adresse mail deja associé a un compte
  };
  

  render() {
    return (
      <Box style={{ overflow: "auto" }} >
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
            margin="normal"
            style={{ margin: 8 }}
            variant="outlined"
            onChange={(event) => {
              this.state.infosInscription.nom = event.target.value;
            }}
          />
          <TextField
            id="prenom"
            label="Prenom"
            margin="normal"
            variant="outlined"
            style={{ margin: 8 }}
            onChange={(event) => {
              this.state.infosInscription.prenom = event.target.value;
            }}
          />

          <TextField
            id="pass1"
            label="Mot de passe"
            style={{ margin: 8 }}
            margin="normal"
            variant="outlined"
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
            variant="outlined"
            error={this.state.error}
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
            variant="outlined"
            onChange={(event) => {
              this.state.infosInscription.contact.mail = event.target.value;
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
          <TextField
            id="adresse"
            label="Adresse"
            style={{ margin: 8 }}
            margin="normal"
            variant="outlined"
            onChange={(event) => {
              this.state.infosInscription.adresse.adresse = event.target.value;
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
          <button
            className="btn"
            key="inscription"
            style={{ backgroundColor: "#008000" }}
            onClick={() => {
              if (this.state.pass2 === this.state.infosInscription.pass) {
                console.log(this.state.pass2);
                this.props.onInscription(this.state.infosInscription);
              } else {
                this.setState({ error: true });
              }
            }}
          >
            S'inscrire
          </button>
          <li>
            Si vous avez deja un compte,
            <Link to="/login"> Connectez vous ici</Link>{" "}
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
