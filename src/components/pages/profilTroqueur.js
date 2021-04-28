import React, { Component } from "react";
import { Route } from "react-router-dom";

import Footer from "../Footer";
import "../../App.css";
import "./profilTroqueur.css";
import axios from "axios";
class profilTroqueur extends Component {
  constructor(props) {
    super(props);
    this.state = { user: { contact: {}, adresse: {} } };
  }

  componentWillMount = () => {
    axios
      .get("/getUser?" + this.props.match.params.id)
      .then((res) => {
        this.setState({ user: res.data });
        console.log(this.state.user);
      })
      .catch((error) => console.log(error));
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
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6" id="infosTroqueur">
                    <div class="col-md-8">
                      <h2 id="profilTroqueur">Profil du troqueur</h2>
                    </div>
                    <div class="row">
                      <div class="col-md-8">
                        <h5>
                          Nom et prénom :
                          {this.state.user.nom + " " + this.state.user.prenom}{" "}
                        </h5>
                      </div>
                      <div class="col-md-6">
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
                  <div class="col-md-2">
                    <Route
                      render={({ history }) => (
                        <button
                          to="/"
                          className="LinkMP"
                          onClick={() => {
                            history.push("/");
                          }}
                        >
                          Retour 
                        </button>
                      )}
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <ul class="list-group">
                      <li class="list-group-item text-muted">
                        <h4>Description :</h4>{" "}
                        <i class="fa fa-dashboard fa-1x"></i>
                      </li>
                      <div class="form-group">
                        <textarea id="textarea" class="form-control"></textarea>
                      </div>
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
