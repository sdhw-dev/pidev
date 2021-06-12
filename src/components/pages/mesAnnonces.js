import React from "react";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import { Component } from "react";
import axios from "axios";
import "./mesFavorisT.css";

class mesAnnoces extends Component {
    state ={
        getListeAnnonces : [],
    };


    componentDidMount = async () => {
        await axios
          .get(
            "/getAnnonces?id=" + JSON.parse(localStorage.getItem("user"))._id
          )
          .then((res) => {
            console.log(res.data);
            this.setState({ getListeFavoris: res.data });
            console.log(this.state.getListeFavoris);
          })
          .catch((error) => console.log(error));
      };

      annonces = () => {
          return (
              <div className="wrapper">
                  {this.state.getListeAnnonces.map((annonce) => {
                      return (
                        <div className="card">
                        <div className="card">
                          <img src={"/getImage?path=" + annonce.image} />
                          <h2 className="card__title">{annonce.titre}</h2>
                          <p className="card__description">{annonce.description}</p>
                        </div>
                        <button
                          className="card__btn"
                          onClick={() => {
                            axios.get(
                              "/supprimerFavoris?id=" +
                                JSON.parse(localStorage.getItem("user"))._id +
                                "&annonceId=" +
                                annonce._id
                            );
                            const index = this.state.getListeAnnonces.indexOf(annonce);
                            if (index > -1) {
                              let liste = this.state.getListeAnnonces;
                              liste.splice(index, 1);
                              console.log(liste);
                              this.setState({
                                getListeAnnonces: liste,
                              });
                            }
                          }}
                        >
                          Supprimer{" "}
                        </button>
                      </div>
                      );
                  }
                  )}
            </div>
          );
      };


      render() {
        return (
          <div className="mesAnnonces">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Sidebar />
              <div style={{ flex: "1", flexDirection: "row" }}>
                <h1>Mes Ann onces</h1>
                <this.annonces />
              </div>
            </div>
            <Footer />
          </div>
        );
      }

    }



export default mesAnnoces;