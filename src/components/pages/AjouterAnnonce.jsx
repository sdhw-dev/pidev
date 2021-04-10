import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Input from "@material-ui/core/Input";
import { BrowserRouter as Router, Link } from "react-router-dom";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
class AjouterAnnonce extends Component {
  state = {
    Ville: [],
    Categorie: [],
    annonce: {
      idVille: 1,
      idCategorie: 1,
      description: "",
      titre: "",
      image: "",
      idUser: 0,
    },
    file: "",
  };

  handleCliqueAjouterAnnonce = () => {
    const formData = new FormData();
    formData.append("image", this.state.file);
    formData.append("annonce", JSON.stringify(this.state.annonce));
    axios.post("/addImagestoAnnonce", formData);
  };

  componentWillMount = async () => {
    await axios
      .get("/getVilles")
      .then((res) => this.setState({ Ville: res.data }));
    await axios
      .get("/getCategories")
      .then((res) => this.setState({ Categorie: res.data }));
  };

  render() {
    return (
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
        <FormControl component="fieldset">
          <RadioGroup aria-label="type" name="gender1">
            <FormControlLabel value="bien" control={<Radio />} label="Bien" />
            <FormControlLabel
              value="service"
              control={<Radio />}
              label="Service"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          id="titre"
          label="titre de l'annonce"
          required
          style={{ margin: 8 }}
          margin="normal"
          variant="outlined"
          onChange={(event) => {
            this.state.annonce.titre = event.target.value;
          }}
        />
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Description de l'annonce"
          onChange={(event) =>
            (this.state.annonce.description = event.target.value)
          }
        />
        <Autocomplete
          id="Ville"
          options={this.state.Ville}
          getOptionLabel={(option) => option.nom}
          style={{ margin: 8 }}
          renderInput={(params) => (
            <TextField {...params} label="ville" variant="outlined" />
          )}
          onChange={(event, value) => {
            this.state.annonce.idVille = value.id;
          }}
        />
        <Autocomplete
          id="Categorie"
          options={this.state.Categorie}
          getOptionLabel={(option) => option.nom}
          style={{ margin: 8 }}
          renderInput={(params) => (
            <TextField {...params} label="Categorie" variant="outlined" />
          )}
          onChange={(event, value) => {
            this.state.annonce.idCategorie = value.id;
          }}
        />

        <Input
          type="file"
          onChange={(e) => {
            this.state.file = e.target.files[0];
          }}
        />
        <button
          style={{ borderColor: "#000000" }}
          className="btn"
          key="AjouterAnnonce"
          onClick={this.handleCliqueAjouterAnnonce}
        >
          Enregistrer l'annonce
        </button>
      </Box>
    );
  }
}

export default AjouterAnnonce;
