import React from 'react';
import "../../App.css";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import { Route } from "react-router-dom";

function mesMessages() {
  return (
    <div className='mesmessages'>
      <div style={{display:'flex', flexDirection:'row'}}>
        <Sidebar/>
        <div style={{flex:'1', flexDirection:'row'}}>
          <h1>Mes messages</h1>
          <form>
          <div class="form-group">
                <label for="select">Select : </label>
                <select id="select" class="form-control">
                  <option>Tous mes messages</option>
                  <option>Messages envoyés</option>
                  <option>Messages reçus</option>
                </select>
              </div>
              <div class="form-group">
                <label for="textarea">Reçu le : 01/08/2020</label>
                <textarea id="textarea" class="form-control">De troqueur : anonyme1247</textarea>
              </div>
              <div class="form-group">
                <label for="textarea">Reçu le : 05/07/2020</label>
                <textarea id="textarea" class="form-control">De troqueur : webDesigner47785</textarea>
              </div>
              <div class="form-group">
                <label for="textarea">Reçu le : 02/03/2021</label>
                <textarea id="textarea" class="form-control">De troqueur : Coach5899</textarea>
              </div>
              <Route
                      render={({ history }) => (
                        <button
                          to="/EnvoyerMessage"
                          className="btn btn-sm btn-primary pull-right"
                          onClick={() => {
                            history.push("/EnvoyerMessage");
                          }}
                        >
                          Envoyer un message 
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

export default mesMessages;
