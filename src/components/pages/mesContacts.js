import React from "react";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import "../../App.css";
import { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

class mesContacts extends Component {
  state = {
    getListeContacts: [],
  };

  componentDidMount = async () => {
    await axios
      .get(
        "/getListeContacts?id=" + JSON.parse(localStorage.getItem("user"))._id
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ getListeContacts: res.data });
        console.log(this.state.getListeContacts);
      })
      .catch((error) => console.log(error));
  };

  contacts = () => {
    return (
      <div>
        {this.state.getListeContacts.map((contact) => {
          return (
            <div class="form-group">
              <link
                href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                rel="stylesheet"
                id="bootstrap-css"
              />
              <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
              <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

              <section id="team" class="pb-5">
                <div class="container">
                  <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-6">
                      <div class="image-flip">
                        <div class="mainflip flip-0">
                          <div class="frontside">
                            <div class="card">
                              <div class="card-body text-center">
                                <p>
                                  <img
                                    class=" img-fluid"
                                    src={
                                      contact.image
                                        ? "/getImage?path=" + contact.image
                                        : "https://www.viepratique.fr/wp-content/uploads/sites/4/2019/04/bricolage-et-diy-quels-outils-avoir-chez-soi.jpg"
                                    }
                                  />
                                </p>
                                <h4 class="card-title">Nom : {contact.nom} </h4>
                                <h4 class="card-title">
                                  Prenom : {contact.prenom}
                                </h4>

                                <a
                                  href="https://www.fiverr.com/share/qb8D02"
                                  class="btn btn-primary btn-sm"
                                >
                                  <i class="fa fa-plus"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="backside">
                            <div class="card">
                              <div class="card-body text-center mt-4">
                                <h4 class="card-title">Nom : {contact.nom} </h4>
                                <h4 class="card-title">
                                  Prenom : {contact.prenom}
                                </h4>
                                <p class="card-text">
                                  Tel : {contact.contact.tel}
                                </p>
                                <p class="card-text">
                                  Adresse : {contact.adresse.adresse}
                                </p>
                                <Link to={'/ProfilTroqueur/'+contact._id} className='nav-links' >
                                      Consulter le profil du troqueur
                                </Link>
                                <button
                          className="card__btn"
                         
                          
                        >
                          Supprimer{" "}
                    </button>
                              
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
               
                  </div>
                
                </div>
              </section>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="meContacts">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Sidebar />
          <div style={{ flex: "1", flexDirection: "row" }}>
            <h1>Mes contacts</h1>

            <this.contacts />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default mesContacts;
