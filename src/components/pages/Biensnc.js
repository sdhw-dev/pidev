import React from "react";
import "../../App.css";
import axios from "axios";
import "../Cards.css";
import CardItem from "../CardItem";
class Biensnc extends React.Component {
  constructor() {
    super();
    this.state = {
      annonces: [],
      filtre: { type: false, idCategorie: -1, idVille: -1 },
    };

    this.handleInputChangeCategorie = this.handleInputChangeCategorie.bind(
      this
    );
    this.handleInputChangeVille = this.handleInputChangeVille.bind(this);
  }

  componentWillMount = async () => {
    this.state.filtre.type = this.props.type;
    this.setState();
    axios.post("/getAnnonces", this.state.filtre).then((res) => {
      console.log(res.data);
      this.setState({ annonces: res.data });
    });
  };

  componentWillReceiveProps = (props) => {
    console.log("props" + props.type);
    this.state.filtre.type = props.type;
    this.setState();
    axios.post("/getAnnonces", this.state.filtre).then((res) => {
      console.log(res.data);
      this.setState({ annonces: res.data });
    });
  };

  handleInputChangeCategorie(event) {
    this.state.filtre.idCategorie = event.target.value;
  }

  handleInputChangeVille(event) {
    this.state.filtre.idVille = event.target.value;
  }

  submit() {
    this.setState();
    axios.post("/getAnnonces", this.state.filtre).then((res) => {
      this.setState({ annonces: res.data });
    });
    console.warn(this.state);
  }

  ligneOfCards = (L) => {
    return (
      <ul className="cards__items">
        {L.map((annonce) => {
          return (
            <CardItem
              src={"/getImage?path=" + annonce.image}
              text={annonce.titre}
              path="/profil"
            />
          );
        })}
      </ul>
    );
  };
  cardServices = () => {
    let L = [];
    for (let i = 0; i < this.state.annonces.length; i += 4) {
      L[i / 4] = [this.state.annonces[i]];
      if (i + 1 < this.state.annonces.length) {
        L[i / 4].push(this.state.annonces[i + 1]);
      }
      if (i + 2 < this.state.annonces.length) {
        L[i / 4].push(this.state.annonces[i + 2]);
      }
      if (i + 3 < this.state.annonces.length) {
        L[i / 4].push(this.state.annonces[i + 3]);
      }
    }
    return (
      <>
        <div className="cards__container">
          <div className="cards__wrapper">
            {L.map((liste) => {
              return this.ligneOfCards(liste);
            })}
          </div>
        </div>
      </>
    );
  };

  categories = () => {
    if (this.state.filtre.type) {
      return (
        <div>
          <label>Catégorie :</label>

          <select
            className="form-control"
            name="city"
            onChange={this.handleInputChangeCategorie}
          >
            <option selected value="-1">
              Toute les Categories
            </option>

            <option value="1">Jardinage</option>
            <option value="2">Bricolage</option>
            <option value="3">Coaching sportif</option>
            <option value="4">carrosserie</option>
            <option value="5">Electricité</option>
            <option value="6">Baby sitting</option>
            <option value="7">Coaching personnel</option>
          </select>
        </div>
      );
    } else {
      return (
        <div>
          <label>Catégorie :</label>

          <select
            className="form-control"
            name="city"
            onChange={this.handleInputChangeCategorie}
          >
            <option selected value="-1">
              Toute les Categories
            </option>

            <option value="8">Bureaux</option>
            <option value="9">Salle de bain</option>
            <option value="10">Cuisine</option>
            <option value="11">Mobilier de jardin</option>
            <option value="12">Salon</option>
            <option value="13">Chambre</option>
            <option value="14">Salle à manger</option>
          </select>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="biensnc">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h3>Accueil/{this.state.filtre.type ? "service" : "bien"}</h3>
            <br />

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Ville :</label>

                <select
                  className="form-control"
                  name="catégorie"
                  onChange={this.handleInputChangeVille}
                >
                  <option selected value="-1">
                    Toute les villes
                  </option>
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
                <this.categories />
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
        <this.cardServices />
      </div>
    );
  }
}
export default Biensnc;
