import React, { Component } from "react";
import "../../App.css";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import { Route } from "react-router-dom";
import axios from "axios";
import { isThisSecond } from "date-fns";
class EnvoyerMessage extends Component {
  state = {
    userSending: JSON.parse(localStorage.getItem("user")), //this.props.userSending,
    userReceiving: this.props.match.params.id,
    message: "",
  };

  componentDidMount = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div className="mesmessages">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Sidebar />
          <div style={{ flex: "1", flexDirection: "row" }}>
            <br />
            <br />

            <form
              class="form-horizontal "
              role="form"
              method="post"
              action="index.php"
            >
              <div class="form-group">
                <label for="message" class="col-sm-2 control-label">
                  Message à envoyer :
                </label>
                <div class="col-sm-8">
                  <textarea
                    class="form-control"
                    rows="4"
                    name="Message"
                    onChange={(event) => {
                      this.setState({ message: event.target.value });
                    }}
                  ></textarea>
                </div>
              </div>

              <div class="form-group">
                <div class="col-sm-10 col-sm-offset-2">
                  <input
                    id="submit"
                    name="submit"
                    value="Envoyer"
                    class="btn btn-primary"
                    onClick={() => {
                      axios
                        .post("/sendMessage", {
                          message: this.state.message,
                          userSending: this.state.userSending,
                          userId: this.state.userReceiving,
                        })
                        .then()
                        .catch((error) => console.log(error));
                    }}
                  />
                  <input
                    id="delete"
                    name="delete"
                    type="submit"
                    value="Annuler"
                    class="btn btn-primary"
                  />
                  <Route
                    render={({ history }) => (
                      <button
                        to="/mesMessages"
                        className="btn btn-primary"
                        onClick={() => {
                          history.push("/mesMessages");
                        }}
                      >
                        Retour
                      </button>
                    )}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default EnvoyerMessage;
