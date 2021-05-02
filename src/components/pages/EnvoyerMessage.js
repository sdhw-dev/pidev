import React, { Component } from "react";
import "../../App.css";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import { Route } from "react-router-dom";

class EnvoyerMessage extends  Component {
    render(){
        return (
            <div className='mesmessages'>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <Sidebar/>
                    <div style={{flex:'1', flexDirection:'row'}}>
                        
                        <br/>
                        <br/>
                       
                        <form class="form-horizontal " role="form" method="post" action="index.php">
                            <div class="form-group ">
                                <label for="name" class="col-sm-2 control-label">Nom et prénom du troqueur : </label>
                                <div class="col-md-8">
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Nom et Prénom" value=""/>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="message" class="col-sm-2 control-label">Message à envoyer :</label>
                                <div class="col-sm-8">
                                    <textarea class="form-control" rows="4" name="Message"></textarea>
                                </div>
                            </div>
                          
                            <div class="form-group">
                                <div class="col-sm-10 col-sm-offset-2">
                                    <input id="submit" name="submit" type="submit" value="Envoyer" class="btn btn-primary"/>
                                    <input id="delete" name="delete" type="submit" value="Annuler" class="btn btn-primary"/>
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
                <Footer/>
            </div>
        );
    }
}

export default EnvoyerMessage;
