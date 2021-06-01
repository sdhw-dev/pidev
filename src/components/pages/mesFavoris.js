import React from "react";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import { Component } from "react";
import axios from "axios";
import "./mesFavorisT.css";
class mesFavoris extends Component {
  state = {
    getListeFavoris: [],
  };

  componentDidMount = async () => {
    await axios
      .get(
        "/getListeFavoris?id=" + JSON.parse(localStorage.getItem("user"))._id
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ getListeFavoris: res.data });
        console.log(this.state.getListeFavoris);
      })
      .catch((error) => console.log(error));
  };

  services = () => {
    return (
      <div className="wrapper">
        {this.state.getListeFavoris.map((service) => {
          return (
            <div className="card">
              <div className="card">
                <img src={"/getImage?path=" + service.image} />
                <h2 className="card__title">{service.titre}</h2>
                <p className="card__description">{service.description}</p>
              </div>
              <button className="card__btn">Supprimer</button>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="mesFavoris">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Sidebar />
          <div style={{ flex: "1", flexDirection: "row" }}>
            <h1>Mes Favoris</h1>

            <this.services />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default mesFavoris;
