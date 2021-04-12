import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";

import { BrowserRouter as Router, Link } from "react-router-dom";

class AjouterAnnonce extends Component {
  state = {};

  render() {
    return (
      <div>
        <textarea>Bonjour, voici du texte dans une zone de texte</textarea>
        <input type="file" />
      </div>
    );
  }
}

export default AjouterAnnonce;
