import React from 'react';
import "../../App.css";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import { Route } from "react-router-dom";
import { Link } from 'react-router-dom';

function DemandesReçues() {
  return (
    <div className='DemandesReçues'>
      <div style={{display:'flex', flexDirection:'row'}}>
        <Sidebar/>
        <div style={{flex:'1', flexDirection:'row'}}>
          <h1 style={{backgroundColor :'white'}}>Demandes reçues</h1>
          <form>
         
              <div class="form-group">
                <div style={{fontSize: '25px'}} for="textarea">Demande reçue par : 
                   <Link style={{fontSize: '25px', color:'gray'}} to='/ProfilTroqueur/:id' >Anonyme145</Link>
                </div>
                <hr/>
                 <div style={{fontSize: '25px'}} for="textarea">Troc demandé :  
                  <Link style={{fontSize: '25px', color:'gray'}} to='/MyTroc/:id' >Jardinage</Link>
                </div>
                 <hr/>
                <div style={{fontSize: '25px'}} for="textarea">En échange de : x points</div>
                <hr/>
                <div style={{fontSize: '25px'}}>Infos sur le troc: </div>
                <hr/>
                <div style={{backgroundColor :'white'}}>
                  value to early human hunter-gatherers led to them quickly
                  becoming ubiquitous across world cultures. Dogs perform many roles for
                  people, such as hunting, herding, pulling loads, protection, assisting
                  police and military, companionship, and, more recently, aiding
                  handicapped individuals. This impact on human society has given them the
                  nickname "man's best friend" in the Western world. In some cultures,
                  however, dogs are also a source of meat
                </div>
              </div>
              
              <Route
                      render={({ history }) => (
                        <button style={{marginLeft:"50px"}}
                          to="/EnvoyerMessage"
                          className="btn btn-sm btn-primary pull-right"
                          onClick={() => {  
                            history.push("/EnvoyerMessage");
                          }}
                        >
                          Répondre à la demande 
                        </button>
                      )}
              />
              
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default DemandesReçues;