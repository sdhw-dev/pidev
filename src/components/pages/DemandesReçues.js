import React from "react";
import "../../App.css";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
import { isThisHour } from "date-fns";

class DemandesReçues extends Component {
  state = {
    listeDemandes: [],
    infosDemandes: [],
  };
  componentDidMount = async () => {
    await axios
      .get(
        "/getListeDemandes?id=" + JSON.parse(localStorage.getItem("user"))._id
      )
      .then((res) => {
        this.setState({ listeDemandes: res.data });
      })
      .catch((er) => console.log(er));
  };

  demande = () => {
    return (
      <form>
        {this.state.listeDemandes.map((demande) => {
          return (
            <div>
              <div style={{padding:"9px" ,backgroundColor:"rgb(202, 207, 210)" , fontFamily:"calibri" , fontSize:"20px"}}>
                <div style={{marginTop:"50px" }}>
                <pre>
                  
                  Demande reçue par :
                  <Link
                    to={"/ProfilTroqueur/" + demande.idDemandeur}
                  >
                    {demande.nomDemandeur}
                  </Link>
                  <hr />
                  Troc demandé :
                  <Link
                   
                    to={"/MyTroc/" + demande.idAnnonceConcerné}
                  >
                    {demande.titreAnnonceDemandé}
                  </Link>
                  <hr />
                  En échange de :
                  <Link
                   
                    to={"/MyTroc/" + demande.idAnnonceProposé}
                  >
                    {demande.titreAnnonceProposé}
                  </Link>
                  </pre>
                </div>

                <hr />
                <p>&thinsp;&thinsp;{demande.message}</p>
               
              </div>
              <button style={{ marginRight:"200px"}}
                className="btn btn-sm btn-primary pull-right"
                onClick={() => {
                  axios.get("/accepterDemande?id=" + demande._id);
                }}
              >
                Accepter
              </button>
              
              <button style={{ marginRight:"50px"}}
                className="btn btn-sm btn-primary pull-right"
                onClick={() => {
                  axios.get("/refuserDemande?id=" + demande._id);
                }}
              >
                Refuser
              </button>
              
            </div>
          );
        })}
      </form>
    );
  };
  render() {
    return (
      <div className="DemandesReçues">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Sidebar />
          <div style={{ flex: "1", flexDirection: "row" }}>
            <h1 style={{ backgroundColor: "white" }}>Demandes reçues</h1>
            <this.demande />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DemandesReçues;
