import React from 'react';
import Footer from './Footer';
import "../../myTroc.css";
import {  Route } from "react-router-dom";
import Ripples from 'react-ripples';


export default class MyTroc extends React.Component {
    constructor(props){
        super(props);
        this.state ={troc : props.troc};
    }

    render() {
        
        return (
          
           
            <div className="troc" style={{backgroundColor:"#ABD0BE"}}>
                <NavbarServices/>
                <div style= {{display:'flex' , flexDirection :'row' , paddingLeft:"15px"}} >
                
                <div className="troc">
                <div class="container emp-profile" style={{backgroundColor:"#ABD0BE" , width:"3500px"}}>
                 <form method="post">
                     <div class="row">
                     <div class="col-md-4">
                    <div className="profile-img"  >
                      <img 
                        src="https://www.viepratique.fr/wp-content/uploads/sites/4/2019/04/bricolage-et-diy-quels-outils-avoir-chez-soi.jpg"
                        alt=""
                        style={{height:"350" , width:"400"}}
                      />
                    </div>
                  </div>  
                    <div class="col-md-6" >
                        <div className="profile-head" >

                        <h4> {this.state.troc.nomService} </h4> 
                        <h6>{this.state.troc.typeService}</h6>
                        <h6>{this.state.troc.categorieService}</h6>
                        <h6>{this.state.troc.adresseService} </h6>
                        <h6> {this.state.troc.dateService} </h6>
                        <h4>Informations </h4>

                        <h6>{this.state.troc.infoService}  </h6>
                        </div>
                    </div>
                    <h3>Pour plus d'informations :</h3>
                    <div class="col-md-2">
                     
                    <Route
                      render={({ history }) => (
                        <Ripples color="yellow">
                        <button to="/contactertroqueur" type="button" className="btn btn-primary" style={{ display: 'inline-flex', borderRadius: 25,overflow: 'hidden',}}
                          onClick={() => {
                            history.push("/contactertroqueur");}}>
                         Contacter le troqueur 
                        </button>
                        </Ripples>
                      )}
                    />
                  </div>
                    
                    
                     </div>
                </form>   
                
                
              <div className ="button-dem" style={{ display: 'inline-flex', borderRadius: 25,overflow: 'hidden',}}>
               <Route
                render={({history} )=> (
                  <Ripples color={'yellow'}>
                   <button  to="/demandertroc" type="button" className="btn btn-primary" style={{width:"350px",height:"50px"}}
                    onClick={() => {
                      history.push("/demandertroc");}}>
                  
                     Demander
                     </button>
                  </Ripples>
                  )}
              />
              </div>
              
              <div className ="button-prop" style={{ display: 'inline-flex', borderRadius: 25,overflow: 'hidden', }}>
              <Route
              render = {({history}) => (
                <Ripples color={'yellow'}>
                   <button to ="/proposertroc" type="button" className="btn btn-primary" style={{width:"350px",height:"50px", }}
                   onClick={() => {
                    history.push("/proposertroc");}}>
                     Proposer
                   </button>
              </Ripples>
              )
            }
              />
              
              </div>
              </div>
              
              </div>
          </div>
          <Footer/>
            </div>
        )
      }
    }

