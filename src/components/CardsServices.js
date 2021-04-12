import React, { Component } from "react";
import "./Cards.css";
import axios from "axios";
import CardItem from "./CardItem";

class CardsServices extends Component {
  state = {
    annonces: [],
  };

  componentWillMount = () => {
    axios.post("/getAnnonces", this.props.filtre).then((res) => {
      console.log(res.data);
      this.setState({ annonces: res.data });
    });
  };

  componentWillReceiveProps = (props) => {
    axios.post("/getAnnonces", props.filtre).then((res) => {
      console.log("willr");
      this.setState({ annonces: res.data });
    });
  };

  render() {
    return (
      <>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              {this.state.annonces.map((annonce) => {
                return (
                  <CardItem
                    src={"/getImage?path=" + annonce.image}
                    text="Voir le profil"
                    path="/profil"
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default CardsServices;
