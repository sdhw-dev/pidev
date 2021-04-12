import TextField from "@material-ui/core/TextField";
import { Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Component } from "react";
import axios from "axios";
import React from "react";
import "../../App.css";
const handleConnection = (data) => {
  const url = "/connexion";
  var res = axios
    .post(url, data)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return JSON.parse(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error.response);
    });
  return res;
};

class Connexion extends Component {
  state = {
    infoAuthentification: {
      mail: "",
      pass: "",
    },
    erreur: false,
  };

  render() {
    return (
      <div className="connexion">
        <Container maxWidth="sm" style={{}}>
          <Box
            border={1}
            display="flex"
            flexDirection="column"
            style={{ borderRadius: 15, borderColor: "#CACACA" }}
          >
            <header className="header">
              <Route
                render={({ history }) => (
                  <button
                    className="btn"
                    key="inscription"
                    style={{ backgroundColor: "#008000", marginLeft: "auto" }}
                    onClick={() => {
                      history.push("/sign-up");
                    }}
                  >
                    Créer un compte
                  </button>
                )}
              />
            </header>
            <Box display="flex" flexDirection="column">
              <TextField
                id="Mail"
                label="Adresse e-Mail"
                style={{ margin: 8 }}
                margin="normal"
                variant="outlined"
                error={this.state.erreur}
                onChange={(event) => {
                  this.state.infoAuthentification.mail = event.target.value;
                }}
              />
              <TextField
                id="Password"
                label="Mot de passe"
                style={{ margin: 8 }}
                margin="normal"
                type="password"
                variant="outlined"
                error={this.state.erreur}
                helperText={
                  this.state.erreur
                    ? "adresse mail ou mot de passe incorrect "
                    : ""
                }
                onChange={(event) => {
                  this.state.infoAuthentification.pass = event.target.value;
                }}
              />
            </Box>
            <footer>
              <Route
                render={({ history }) => (
                  <button
                    className="btn"
                    key="connection"
                    style={{
                      backgroundColor: "#008000",
                      color: "#000000",
                      borderColor: "#000000",
                    }}
                    onClick={async () => {
                      await handleConnection(
                        this.state.infoAuthentification
                      ).then((res) => {
                        if (!res) {
                          this.setState({ erreur: true });
                        } else {
                          this.setState({ erreur: false });
                          console.log(res);
                          this.props.onConnexion(res);
                          history.push("./EspaceP");
                        }
                      });
                    }}
                  >
                    {" "}
                    Se connecter{" "}
                  </button>
                )}
              />
            </footer>
          </Box>
        </Container>
      </div>
    );
  }
}

export default Connexion;
