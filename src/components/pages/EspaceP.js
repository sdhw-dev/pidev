import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import "../../App.css";

class EspaceP extends Component {
  
  constructor(props) {
      super(props);
      this.state = {isToggleOn: true, user:props.user};

      // This binding is necessary to make `this` work in the callback  
        this.handleClick = this.handleClick.bind(this);  
    }

  handleClick() { 
       this.setState(state => ({      isToggleOn: !state.isToggleOn    }));
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
                  <div class="profile-img">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                        alt=""
                      />
                    </div>
                    

                  </div>
                  <div class="col-md-6">
                    <div class="profile-head">
                      <h5>
                        {this.state.user.nom + " " + this.state.user.prenom}
                      </h5>
                      <h6>Troqueur</h6>
                      <p class="proile-rating">
                        Moyenne des appréciations : <span>8/10</span>
                      </p>
                      <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            id="home-tab"
                            data-toggle="tab"
                            href="#home"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            A propos
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-2">
                  <button to='/modifprofil' className='LinkMP' onClick={this.handleClick}>
                            {this.state.isToggleOn ? 'ON' : 'OFF'}
                            Modifier profil
                  </button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="profile-work">
                      <h4>Adresse : </h4>
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
                        <div class="row">
                          <div class="col-md-6">
                            <label>Id du Troqueur : </label>
                          </div>
                          <div class="col-md-6">
                            <p>Kshiti123</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Nom et prénom</label>
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
                            <label>Email</label>
                          </div>
                          <div class="col-md-6">
                            <p>{this.state.user.contact.mail}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Tél</label>
                          </div>
                          <div class="col-md-6">
                            <p>{this.state.user.contact.tel}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Description</label>
                          </div>
                          <div class="col-md-6">
                            <p>Spécialiste jardinage</p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div class="row">
                          <div class="col-md-6">
                            <label>Experience</label>
                          </div>
                          <div class="col-md-6">
                            <p>Expert</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Hourly Rate</label>
                          </div>
                          <div class="col-md-6">
                            <p>10$/hr</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Total Projects</label>
                          </div>
                          <div class="col-md-6">
                            <p>230</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>English Level</label>
                          </div>
                          <div class="col-md-6">
                            <p>Expert</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Availability</label>
                          </div>
                          <div class="col-md-6">
                            <p>6 months</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <label>Your Bio</label>
                            <br />
                            <p>Your detail description</p>
                          </div>
                        </div>
                      </div>
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
