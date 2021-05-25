import React from "react";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import "../../App.css";
import { Component } from "react";
import axios from "axios";

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
      <div>
        {this.state.getListeFavoris.map((service) => {
          return (
            <div class="form-group">
              <li>
                <label>Titre : {service.titre}</label>
              </li>
              <li>
                <label>Description : {service.description}</label>
              </li>
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
