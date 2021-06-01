import React from 'react';
import Sidebar from "../SideBar";
import Footer from "../Footer";
import { Component } from "react";
import axios from "axios";
import "./mesFavorisT.css";
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';



class mesFavoris extends Component {
 
    state = {
      getListeFavoris: [],
    };
   
    componentDidMount = async () => {
      await axios
      .get(
        "/getListeFavoris?id=" + JSON.parse(localStorage.getItem("user"))._id
      )
        .then((res) => {
          console.log(res.data);
          this.setState({ getListeFavoris: res.data });
          console.log(this.state.getListeFavoris);
        })
        .catch((error) => console.log(error));
    };
    

   

    services = () => {
      return (
        <div className="wrapper">
          
          {this.state.getListeFavoris.map((service) => {
            return (
                
                <div className="card">
                  <div className="card">
                  <img  src={service.image}/>
                  <h2 className="card__title">{service.titre}</h2>
                  <p className="card__description">{service.description}</p>
                  </div>
                  <IconButton aria-label="delete" >
                      <DeleteIcon fontSize="small" />
                   </IconButton>
                </div>
               
            );
          })}
        </div>
    
      );
    };
    
    render() {
      return (
        <div className="mesFavoris">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Sidebar />
            <div style={{ flex: "1", flexDirection: "row" }}>
              <h1>Mes Favoris</h1>
  
              <this.services/>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
  
 
  export default mesFavoris;
  