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
            <div>
              <div class="media-block">
                <a class="media-left" href="#">
                  <img
                    class="img-circle img-sm"
                    alt="Profile Picture"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  />
                </a>
                <div class="media-body">
                  <div class="mar-btm">
                    <a
                      href="#"
                      class="btn-link text-semibold media-heading box-inline"
                    >
                      {message.nomUser}
                    </a>
                    <a> Reçu le : 01/08/2020</a>
                  </div>
                  <p>{message.message}</p>
                  <div class="pad-ver">
                    <a
                      class="btn btn-sm btn-default btn-hover-primary"
                      href="#"
                    >
                      Repondre
                    </a>
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
