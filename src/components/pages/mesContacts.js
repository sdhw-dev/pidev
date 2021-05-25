import React from "react";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import "../../App.css";
import { Component } from "react";
import axios from "axios";

class mesContacts extends Component {
  state = {
    getListeContacts: [],
  };

  componentDidMount = async () => {
    await axios
      .get(
        "/getListeContacts?id=" + JSON.parse(localStorage.getItem("user"))._id
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ getListeContacts: res.data });
        console.log(this.state.getListeContacts);
      })
      .catch((error) => console.log(error));
  };

  contacts = () => {
    return (
      <div>
        {this.state.getListeContacts.map((contact) => {
          return (
            <div class="form-group">
              <li>
                <label>Nom : {contact.nom}</label>
              </li>
              <li>
                <label>Prenom : {contact.prenom}</label>
              </li>
              <li>
                <label>tel : {contact.contact.tel}</label>
              </li>
              <li>
                <label>adresse : {contact.adresse.adresse}</label>
              </li>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="meContacts">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Sidebar />
          <div style={{ flex: "1", flexDirection: "row" }}>
            <h1>Mes contacts</h1>

            <this.contacts />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default mesContacts;
