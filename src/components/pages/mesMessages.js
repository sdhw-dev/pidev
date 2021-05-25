import React from "react";
import "../../App.css";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import { Route } from "react-router-dom";
import { Component } from "react";
import { isThisHour } from "date-fns";
import axios from "axios";

class mesMessages extends Component {
  state = {
    listeMessages: [],
  };

  componentDidMount = async () => {
    await axios
      .get("/getMessages?id=" + JSON.parse(localStorage.getItem("user"))._id)
      .then((res) => {
        console.log(res.data);
        this.setState({ listeMessages: res.data });
        console.log(this.state.listeMessages);
      })
      .catch((error) => console.log(error));
  };

  messages = () => {
    return (
      <div>
        {this.state.listeMessages.map((message) => {
          return (
            <div class="form-group">
              <li>
                {" "}
                <label>Reçu le : 01/08/2020</label>
              </li>
              <li>
                <label>du troqueur : {message.nomUser}</label>
              </li>
              <li>
                <label>contenu : {message.message}</label>
              </li>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="mesmessages">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Sidebar />
          <div style={{ flex: "1", flexDirection: "row" }}>
            <h1>Mes messages</h1>

            <this.messages />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default mesMessages;
