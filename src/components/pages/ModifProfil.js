import "../../App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class ModifProfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.user };
    this.handleClickEnregistrer = this.handleClickEnregistrer.bind(this);
    this.handleClickAnnuler = this.handleClickAnnuler.bind(this);
  }

  componentWillmount = () => {
    axios
      .get("/getUser?id=" + this.props.user._id)
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch((error) => console.log(error));
  };

  handleClickEnregistrer = () => {
    console.log(this.state.user);
    axios.post("/updateUser", this.state.user).then((res) => {
      console.log(res);
      this.props.updateUser(res.data);
    });
  };

  handleClickAnnuler = () => {
    axios
      .get("/getUser?id=" + this.props.user._id)
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <>
        <hr />
        <div className="modifProfil">
          <div class="row">
            <div class="col-sm-10">
              <h1>Nom d'utilisateur</h1>
            </div>
            <div class="col-sm-2"></div>
          </div>

          <div class="row">
            <div class="col-sm-3">
              <div class="text-center">
                <img
                  src={
                    this.state.user.image
                      ? "/getImage?path=" + this.state.user.image
                      : "http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                  }
                  class="avatar img-circle img-thumbnail"
                  alt="avatar"
                />
                <h6>Télécharger une photo...</h6>
                <input
                  type="file"
                  class="text-center center-block file-upload"
                  onChange={(image) => {
                    const formData = new FormData();
                    formData.append(
                      "image",
                      image.target.files[image.target.files.length - 1]
                    );
                    axios.post("/ajouterImage", formData).then((url) => {
                      let state = { ...this.state };
                      state.user.image = url.data;
                      this.setState(state);
                    });
                  }}
                />
              </div>
              <hr />
              <br />
            </div>
            <div class="col-sm-9">
              <ul class="nav nav-tabs">
                <li>
                  <a data-toggle="tab">Profil/</a>
                </li>
                <li>
                  <a data-toggle="tab">Modification du profil</a>
                </li>
              </ul>

              <div class="tab-content">
                <div class="tab-pane active" id="home">
                  <hr />
                  <div class="form-group">
                    <div class="col-xs-6">
                      <label for="first_name">
                        <h4>Prénom</h4>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="first_name"
                        id="first_name"
                        placeholder="prénom"
                        title="Entrez votre prénom"
                        defaultValue={this.state.user.prenom}
                        onChange={(event) => {
                          let state = { ...this.state };
                          state.user.prenom = event.target.value;
                          this.setState(state);
                          console.log(this.state);
                        }}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-xs-6">
                      <label for="last_name">
                        <h4>Nom</h4>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="last_name"
                        id="last_name"
                        placeholder="nom"
                        title="Entrez votre nom."
                        defaultValue={this.state.user.nom}
                        onChange={(event) => {
                          let state = { ...this.state };
                          state.user.nom = event.target.value;
                          this.setState(state);
                        }}
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-xs-6">
                      <label for="phone">
                        <h4>Tél</h4>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="phone"
                        id="phone"
                        placeholder="Tél"
                        title="Entrez votre téléphone"
                        defaultValue={this.state.user.contact.tel}
                        onChange={(event) => {
                          let user = { ...this.state.user };
                          user.contact.tel = event.target.value;
                          this.setState({ user });
                        }}
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-xs-6">
                      <label for="email">
                        <h4>Email</h4>
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="you@email.com"
                        title="Entrez votre email."
                        defaultValue={this.state.user.contact.mail}
                        onChange={(event) => {
                          let user = { ...this.state.user };
                          user.contact.mail = event.target.value;
                          this.setState({ user });
                        }}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-xs-6">
                      <label for="email">
                        <h4>Adresse</h4>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="location"
                        placeholder="Adresse"
                        title="Entrez votre adresse"
                        defaultValue={this.state.user.adresse.adresse}
                        onChange={(event) => {
                          let user = { ...this.state.user };
                          user.adresse.adresse = event.target.value;
                          this.setState({ user });
                        }}
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-xs-6">
                      <label for="description">
                        <h4>Description</h4>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="description"
                        id="description"
                        placeholder="description"
                        title="Tapez votre description."
                        defaultValue={this.state.user.description}
                        onChange={(event) => {
                          let state = { ...this.state };
                          state.user.description = event.target.value;
                          this.setState(state);
                        }}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-xs-12">
                      <br />
                      <button
                        class="btn btn-lg btn-success"
                        type="submit"
                        onClick={this.handleClickEnregistrer}
                      >
                        <i class="glyphicon glyphicon-ok-sign"></i>Enregistrer
                      </button>
                      <button
                        class="btn btn-lg"
                        type="reset"
                        onClick={this.handleClickAnnuler}
                      >
                        <i class="glyphicon glyphicon-repeat"></i>Annuler
                      </button>
                      <Link to="/espaceP" className="LinkMP">
                        Retour
                      </Link>
                    </div>
                  </div>

                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ModifProfil;
