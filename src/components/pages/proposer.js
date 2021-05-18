import React, { Component } from "react";
import "../demander.css";
import Footer from "../Footer";
import { Route } from "react-router-dom";
import axios from "axios";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";


class Proposer extends Component {
  constructor(props) {
    super(props);
    this.state = { troc: {}, adresse: "", categorie: "", date: "", nom: "" };
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
                Troqueur : {this.state.nom}
              </h6>
              <h6 style={{ marginLeft: "15px" }}>
                Pour son troc : {this.state.troc.titre}
              </h6>
              <h6 style={{ marginLeft: "15px" }}>
                Troc en échange : 
              </h6>
              <Autocomplete id="combo-box-demo"
                            options={Trocs}
                            getOptionLabel={(option) => option.nom}
                           style={{ margin: 8 , width:"820px" }}
                             renderInput={(params) => (
                           <TextField {...params} label="Trocs" variant="outlined" />
                                )}
                             onChange={(event, value) => {
                           this.state.troqueur.idTrocs = value.id;
                             }}
                            />

                            <form>
                         <h6 style={{marginLeft:"15px"}}>
                            En échange de :
                       <input type="text" name="name" />  points
                         </h6>
                    
                            </form>
            
            </div>

            <div class="form-group">
              <label for="message" class="col-sm-2 control-label">
                Proposition à envoyer :
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
                      to="//MyTroc/:id "
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
const Trocs = [
  { nom: "troc1", id: 1 },
  { nom: "troc2", id: 2 },
  { nom: "troc3", id: 3 },
  { nom: "troc4", id: 4 },
];
export default Proposer;
