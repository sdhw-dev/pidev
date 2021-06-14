import React from "react";
import "../../App.css";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import { Link, Route } from "react-router-dom";
import { Component } from "react";
import { isThisHour } from "date-fns";
import axios from "axios";
import "./mesMessages.css"
import { user } from "firebase-functions/lib/providers/auth";
import { ButtonOr } from "semantic-ui-react";

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
      <div >
        {this.state.listeMessages.map((message) => {
          return (
            <div>
              <div style={{padding:"10px"}}>
              <img style={{float:"left" , width:"200px" ,height:"200px"}}
                    alt="Profile Picture"
                    src={"/getImageUser?id=" + message.user}
                  />
              <div style={{marginTop:"50px" }} >
                    <pre>
                    &thinsp;De :
                    <Link to={"/ProfilTroqueur/" + message.user}>
                      {message.nomUser}
                    </Link>
                  
                    <a> &thinsp; {"  ,Reçu le :" + message.date}</a>
                    <hr />
                  <p>&thinsp;{message.message}</p>
                  
                  <hr />

                    <Link to={"/EnvoyerMessage/" + message.user}>Repondre</Link>
                  
                  
                    </pre>
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
