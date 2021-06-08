import React from "react";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import "../../App.css";
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import axios from "axios";
>>>>>>> 00e864f40ee71a381d3c7dc14f32f8c043b0c2bc
import "./mesTrocs.css";

class mesTrocs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      valeurChoisie: 1,
<<<<<<< HEAD
      troc: {
        imagePropsée:"",
        titreProposé:"",
        points:"",
        titreDemandé:"",
        nomDemandé:"",
        adresseDemandée:""
      },
      annonce:{
        description:"",
      }
    
    };
  }

  

  component = () => {
    switch (this.state.valeurChoisie) {
      case 1:
        return (
          <div>
            <h2>Mes trocs </h2>

            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>



            <section id="team" class="pb-5">
                <div class="container">
                    
                    <div class="row">

                    <div class="col-xs-12 col-sm-6 col-md-6">
                            <div class="image-flip" >
                                <div class="mainflip flip-0">
                                    <div class="frontside">
                                        <div class="card">
                                            <div class="card-body text-center">
                                                <p><img class=" img-fluid" src={this.state.troc.imagePropsée
                                                    ? "/getImage?path=" + this.state.troc.imageProposée
                                                    : "https://www.viepratique.fr/wp-content/uploads/sites/4/2019/04/bricolage-et-diy-quels-outils-avoir-chez-soi.jpg"}/></p>
                                                <h4 class="card-title">Nom du troc:{this.state.troc.titreProposé} Bricolage</h4>
                                                
                                                <p class="card-text">Nombre des points en échange:{this.state.troc.points}100 pts</p>
                                                <p class="card-text">Description du troc:{this.state.annonce.description}Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                                <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                                <h4 class="card-title">Nom du troc en échange:{this.state.troc.titreDemandé} Jardinage</h4>
                                               
                                                <p class="card-text">Nom du troqueur: {this.state.nomDemandé} </p>
                                                <p class="card-text">Adresse du troqueur: {this.state.adresseDemandée}</p>
                                                <Link to='/MyTroc/:id' className='nav-links' >
                                                  Pour plus d'informations
                                                </Link>
                                                
                                             
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
        break;
      case 2:
        return (
          <div>
            <h1>Trocs en cours d'exécution</h1>

            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>



            <section id="team" class="pb-5">
                <div class="container">
                    
                    <div class="row">

                    <div class="col-xs-12 col-sm-6 col-md-6">
                            <div class="image-flip" >
                                <div class="mainflip flip-0">
                                    <div class="frontside">
                                        <div class="card">
                                            <div class="card-body text-center">
                                                <p><img class=" img-fluid" src={this.state.troc.imagePropsée
                                                    ? "/getImage?path=" + this.state.troc.imageProposée
                                                    : "https://www.viepratique.fr/wp-content/uploads/sites/4/2019/04/bricolage-et-diy-quels-outils-avoir-chez-soi.jpg"}/></p>
                                                <h4 class="card-title">Nom du troc:{this.state.troc.titreProposé} Bricolage</h4>
                                                
                                                <p class="card-text">Nombre des points en échange:{this.state.troc.points}100 pts</p>
                                                <p class="card-text">Description du troc:{this.state.annonce.description}Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                                <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                                <h4 class="card-title">Nom du troc en échange:{this.state.troc.titreDemandé} Jardinage</h4>
                                               
                                                <p class="card-text">Nom du troqueur: {this.state.nomDemandé} </p>
                                                <p class="card-text">Adresse du troqueur: {this.state.adresseDemandée}</p>
                                                <Link to='/MyTroc/:id' className='nav-links' >
                                                  Pour plus d'informations
                                                </Link>
                                                
                                             
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
        break;
      case 3:
        return (
          <div>
            <h1>Trocs terminés</h1>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>



            <section id="team" class="pb-5">
                <div class="container">
                    
                    <div class="row">

                    <div class="col-xs-12 col-sm-6 col-md-6">
                            <div class="image-flip" >
                                <div class="mainflip flip-0">
                                    <div class="frontside">
                                        <div class="card">
                                            <div class="card-body text-center">
                                                <p><img class=" img-fluid" src={this.state.troc.imagePropsée
                                                    ? "/getImage?path=" + this.state.troc.imageProposée
                                                    : "https://www.viepratique.fr/wp-content/uploads/sites/4/2019/04/bricolage-et-diy-quels-outils-avoir-chez-soi.jpg"}/></p>
                                                <h4 class="card-title">Nom du troc:{this.state.troc.titreProposé} Bricolage</h4>
                                                
                                                <p class="card-text">Nombre des points en échange:{this.state.troc.points}100 pts</p>
                                                <p class="card-text">Description du troc:{this.state.annonce.description}Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                                <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                                <h4 class="card-title">Nom du troc en échange:{this.state.troc.titreDemandé} Jardinage</h4>
                                               
                                                <p class="card-text">Nom du troqueur: {this.state.nomDemandé} </p>
                                                <p class="card-text">Adresse du troqueur: {this.state.adresseDemandée}</p>
                                                <Link to='/MyTroc/:id' className='nav-links' >
                                                  Pour plus d'informations
                                                </Link>
                                                
                                             
                                            </div>
                                        </div>
                                    </div>
                                </div>
=======
      troc: {},
      adresse: "",
      categorie: "",
      date: "",
      nom: "",
      idAnnonce: "",
      idTroqueur: "",
      listeTrocs: [],
    };
  }

  componentDidMount = async () => {
    await axios
      .get("/getTrocs?id=" + JSON.parse(localStorage.getItem("user"))._id)
      .then((res) => {
        console.log(res.data);
        this.setState({ listeTrocs: res.data });
      })
      .catch((error) => console.log(error));
  };

  submit() {
    console.log("salut");
    const option = document.getElementById("id");
    console.log(option);

    if (option == 1) {
      <div>Salut id=1</div>;
    }
    console.warn(this.state);
  }

  component = () => {
    return (
      <div>
        <h2>Mes trocs </h2>

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
              {this.state.listeTrocs.map((troc) => {
                return (
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
                                    "/getImageAnnonce?id=" +
                                    troc.idAnnonceConcerné
                                  }
                                />
                              </p>
                              <h4 class="card-title">
                                {troc.titreAnnonceDemandé}
                              </h4>
                              <p class="card-text">
                                Description du troc:
                                {this.state.troc.description}Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit
                              </p>
                              <a
                                href="https://www.fiverr.com/share/qb8D02"
                                class="btn btn-primary btn-sm"
                              >
                                <i class="fa fa-plus"></i>
                              </a>
>>>>>>> 00e864f40ee71a381d3c7dc14f32f8c043b0c2bc
                            </div>
                          </div>
                        </div>
<<<<<<< HEAD

                      
                        
                        
                        
                      </div>
                      
                        
                </div>
              </section>
            </div>
        );
        break;
      
      
      default:
        return <h1>Erreur!</h1>;
        break;
    }
=======
                        <div class="backside">
                          <div class="card">
                            <div class="card-body text-center">
                              <p>
                                <img
                                  class=" img-fluid"
                                  src={
                                    "/getImageAnnonce?id=" +
                                    troc.idAnnonceProposé
                                  }
                                />
                              </p>
                              <h4 class="card-title">
                                {troc.titreAnnonceDemandé}
                              </h4>
                              <p class="card-text">{"description"}</p>
                              <a
                                href="https://www.fiverr.com/share/qb8D02"
                                class="btn btn-primary btn-sm"
                              >
                                <i class="fa fa-plus"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
>>>>>>> 00e864f40ee71a381d3c7dc14f32f8c043b0c2bc
  };

  render() {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Sidebar />
          <div style={{ flex: "1", flexDirection: "row" }}>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <br />
                <br />
                <div className="form-row">
                  <div className="col-md-4">
                    <label>Filtrer par :</label>
                  </div>

                  <div className="form-group col-md-8">
                    <select
                      className="form-control"
                      name="tous-mes-trocs"
                      onChange={(event) => {
                        this.setState({
                          valeurChoisie: event.target.selectedIndex + 1,
                        });
                      }}
                    >
                      <option id="1">Mes trocs</option>
                      <option id="2">Mes trocs en cours d'exécution</option>
                      <option id="3">Mes trocs terminés</option>
<<<<<<< HEAD
                  
=======
>>>>>>> 00e864f40ee71a381d3c7dc14f32f8c043b0c2bc
                    </select>
                  </div>

                  <this.component />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}


export default mesTrocs;
