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
      .get("/getMessages?id=" + "6050b84ae0aba24ab82793ec")
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
            <form>
              <div class="form-group">
                <label for="select">Select : </label>
                <select id="select" class="form-control">
                  <option>Tous mes messages</option>
                  <option>Messages envoyés</option>
                  <option>Messages reçus</option>
                </select>
              </div>

              <this.messages />
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default mesMessages;
