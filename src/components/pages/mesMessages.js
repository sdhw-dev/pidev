import React from "react";
import "../../App.css";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import { Link, Route } from "react-router-dom";
import { Component } from "react";
import { isThisHour } from "date-fns";
import axios from "axios";
import { user } from "firebase-functions/lib/providers/auth";

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
            <div>
              <div class="media-block">
                <a class="media-left" href="#">
                  <img
                    class="img-circle img-sm"
                    alt="Profile Picture"
                    src={"/getImageUser?id=" + message.user}
                  />
                </a>
                <div class="media-body">
                  <div class="mar-btm">
                    <Link to={"/ProfilTroqueur/" + message.user}>
                      {message.nomUser}
                    </Link>

                    <a> {"Reçu le :" + message.date}</a>
                  </div>
                  <p>{message.message}</p>
                  <div class="pad-ver">
                    <Link to={"/EnvoyerMessage/" + message.user}>Repondre</Link>
                  </div>
                  <hr />
                </div>
              </div>
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
