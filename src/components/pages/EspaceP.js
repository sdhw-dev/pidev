import React, { Component } from "react";
import { Route } from "react-router-dom";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import "../../App.css";

class EspaceP extends Component {
  constructor(props) {
    super(props);
    this.state = { user: props.user };
  }

  render() {
    return (
      <div className="EspaceP">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Sidebar />
          <div style={{ flex: "1", flexDirection: "row" }}>
            <div class="container emp-profile">
              <form method="post">
                <div class="row">
                  <div class="col-md-4">
                 
                     <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="avatar img-circle img-thumbnail" alt="avatar"/>
          
                  </div>
                  <div class="col-md-6">
                    <div class="profileHead">
                      <h2>
                        {this.state.user.nom + " " + this.state.user.prenom}
                      </h2>
                      
                      <p class="profile-rating">
                        Moyenne des appréciations : <span>8/10</span>
                      </p>
                
                    </div>
                  </div>

                  <div class="col-md-2">
                    <Route
                      render={({ history }) => (
                        <button
                          to="/modifprofil"
                          className="btn btn-sm btn-primary pull-right"
                          onClick={() => {
                            history.push("/modifprofil");
                          }}
                        >
                          Modifier profil
                        </button>
                      )}
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="profile-work">
                      
                      <ul class="list-group">
                        <li class="list-group-item text-muted">
                          Activité <i class="fa fa-dashboard fa-1x"></i>
                        </li>
                        <li class="list-group-item text-right">
                          <span class="pull-left">
                            <strong>Trocs complets</strong>
                          </span>{" "}
                          10
                        </li>
                        <li class="list-group-item text-right">
                          <span class="pull-left">
                            <strong>Favoris</strong>
                          </span>{" "}
                          13
                        </li>
                        <li class="list-group-item text-right">
                          <span class="pull-left">
                            <strong>Trocs en cours</strong>
                          </span>{" "}
                          5
                        </li>
                        <li class="list-group-item text-right">
                          <span class="pull-left">
                            <strong>Clients</strong>
                          </span>{" "}
                          20
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                      <div
                        class="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <br/>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Nom et prénom : </label>
                          </div>
                          <div class="col-md-6">
                            <p>
                              {this.state.user.nom +
                                " " +
                                this.state.user.prenom}
                            </p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Email :</label>
                          </div>
                          <div class="col-md-6">
                            <p>{this.state.user.contact.mail}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Tél :</label>
                          </div>
                          <div class="col-md-6">
                            <p>{this.state.user.contact.tel}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Adresse : </label>
                          </div>
                          <div class="col-md-6">
                            <p>{}</p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-6">
                            <label>Description :</label>
                          </div>
                          <div class="col-md-6">
                            <p>{this.state.user.description}</p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      ></div>
                    </div>
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

export default EspaceP;
