import React from "react";
import "../../App.css";
import CardsServices from "../CardsServices";
import axios from "axios";

class Servicesnc extends React.Component {
  constructor() {
    super();
    this.state = {
      catégorie: null,
      listeAnnonces: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  filtre = { type: true, idCategorie: 0, idVille: 0 };

  handleRecherche = (filtre) => {
    axios.post("/getAnnonces", filtre).then((res) => {
      this.setState({ listeAnnonces: res.date });
    });
  };

  componentWillMount = () => {
    axios.post("/getAnnonces", this.props.filtre).then((res) => {
      this.setState({ listeAnnonces: res.data });
    });
  };

  handleInputChange(event) {
    this.setState({
      catégorie: event.target.value,
    });
  }

  submit() {
    console.warn(this.state);
  }

  render() {
    return (
      <div className="servicesnc">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h3>Accueil/Services</h3>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Ville :</label>

                <select
                  className="form-control"
                  name="catégorie"
                  onChange={this.handleInputChange}
                >
                  <option selected>Choisir une ville</option>
                  <option value="1">Marrakech</option>
                  <option value="2">Rabat</option>
                  <option value="3">Casablanca</option>
                  <option value="4">Agadir</option>
                  <option value="5">Tanger</option>
                  <option value="6">Meknes</option>
                  <option value="7">Fes</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label>Catégorie :</label>

                <select
                  className="form-control"
                  name="city"
                  onChange={this.handleInputChange}
                >
                  <option selected>Choisir une catégorie</option>

                  <option value="1">Jardinage</option>
                  <option value="2">Bricolage</option>
                  <option value="3">Coaching sportif</option>
                  <option value="4">carrosserie</option>
                  <option value="5">Electricité</option>
                  <option value="6">Baby sitting</option>
                  <option value="7">Coaching personnel</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="col-md-12 text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => this.submit()}
                >
                  Recherche
                </button>
              </div>
            </div>
          </div>
        </div>

        <CardsServices annonces={this.state.listeAnnonces} />
      </div>
    );
  }
}
export default Servicesnc;
