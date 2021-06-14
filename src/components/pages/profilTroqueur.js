import React, { Component } from "react";
import { Route } from "react-router-dom";

import Footer from "../Footer";
import "../../App.css";
import "./profilTroqueur.css";
import axios from "axios";
import isThisHour from "date-fns/isThisHour";

class profilTroqueur extends Component {
  constructor(props) {
    super(props);
    this.state = { user: { contact: {}, adresse: {} } };
  }

  componentWillMount = () => {
    console.log(this.props.match);
    axios
      .get("/getUser?id=" + this.props.match.params.id)
      .then((res) => {
        this.setState({ user: res.data });
        console.log(this.state.user);
      })
      .catch((error) => console.log(error));
  };

  button = () => {
    if (localStorage.getItem("user")) {
      return (
        <div class="col-md-2">
          <Route
            render={({ history }) => (
              <button
                to="/EnvoyerMessage"
                className="btn btn-sm btn-primary pull-right"
                onClick={() => {
                  history.push("/EnvoyerMessage/" + this.state.user._id);
                }}
              >
                Envoyer un message
              </button>
            )}
          />
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  render() {
    return (
      <div className="profilTroqueur">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: "1", flexDirection: "row" }}>
            <div class="container emp-profile">
              <form method="post">
                <div class="row">
                  <div class="col-md-4">
                    <div class="profile-img">
                      <img style={{width:"350px" , height:"350px"}}
                        src={
                          this.state.user.image
                            ? "/getImage?path=" + this.state.user.image
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6" id="infosTroqueur">
                    <div class="col-md-8">
                      <h2 id="profilTroqueur">Profil du troqueur</h2>
                    </div>
                    <div class="row" style={{marginTop:"40px"}}>
                      <div class="col-md-8">
                        <h5>
                          Nom et prénom :
                          {this.state.user.nom + " " + this.state.user.prenom}{" "}
                        </h5>
                      </div>
                      <div class="col-md-6" >
                        <h5></h5>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-8">
                        <h5>Email :{this.state.user.contact.mail} </h5>
                      </div>
                      <div class="col-md-8">
                        <h5></h5>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-8">
                        <h5>Tél :{this.state.user.contact.tel}</h5>
                      </div>
                      <div class="col-md-8">
                        <h5></h5>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-8">
                        <h5>Adresse : {this.state.user.adresse.adresse}</h5>
                      </div>
                      <div class="col-md-8">
                        <h5></h5>
                      </div>
                    </div>
                  </div>

                  <this.button />
                </div>
                <div class="row" style={{marginTop:"40px"}}>
                  <div class="col-md-12">
                    <ul class="list-group">
                      <li class="list-group-item text-muted">
                        <h4>Description :{this.state.user.description}</h4>{" "}
                        <i class="fa fa-dashboard fa-1x"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default profilTroqueur;
