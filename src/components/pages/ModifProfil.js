import "../../App.css";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ModifProfil() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);

  return (
    <>
      <hr/>
      <div className="modifProfil">
        <div class="row">
        <div class="col-sm-10"><h1>Nom d'utilisateur</h1></div>
        <div class="col-sm-2">
        </div>
        </div>

        <div class="row">
        <div class="col-sm-3">
                

        <div class="text-center">
          <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="avatar img-circle img-thumbnail" alt="avatar"/>
          <h6>Télécharger une photo...</h6>
          <input type="file" class="text-center center-block file-upload"/>
        </div>
        <hr/><br/>


            
        </div>
        <div class="col-sm-9">
              <ul class="nav nav-tabs">
              <li><a data-toggle="tab" >Profil/</a></li>
                  <li><a data-toggle="tab" >Modification du profil</a></li>
                </ul>
                

                
            <div class="tab-content">
              <div class="tab-pane active" id="home">
                  <hr/>
                    <form class="form" action="##" method="post" id="registrationForm">
                        <div class="form-group">
                            
                            <div class="col-xs-6">
                                <label for="first_name"><h4>Prénom</h4></label>
                                <input type="text" class="form-control" name="first_name" id="first_name" placeholder="prénom" title="Entrez votre prénom"/>
                            </div>
                        </div>
                        <div class="form-group">
                            
                            <div class="col-xs-6">
                              <label for="last_name"><h4>Nom</h4></label>
                                <input type="text" class="form-control" name="last_name" id="last_name" placeholder="nom" title="Entrez votre nom."/>
                            </div>
                        </div>
            
                        <div class="form-group">
                            
                            <div class="col-xs-6">
                                <label for="phone"><h4>Tél</h4></label>
                                <input type="text" class="form-control" name="phone" id="phone" placeholder="Tél" title="Entrez votre téléphone"/>
                            </div>
                        </div>
            
                    
                        <div class="form-group">
                            
                            <div class="col-xs-6">
                                <label for="email"><h4>Email</h4></label>
                                <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="Entrez votre email."/>
                            </div>
                        </div>
                        <div class="form-group">
                            
                            <div class="col-xs-6">
                                <label for="email"><h4>Adresse</h4></label>
                                <input type="email" class="form-control" id="location" placeholder="Adresse" title="Entrez votre adresse"/>
                            </div>
                        </div>
                        <div class="form-group">
                            
                            <div class="col-xs-6">
                                <label for="password"><h4>Password</h4></label>
                                <input type="password" class="form-control" name="password" id="password" placeholder="password" title="entrez votre mot de passe."/>
                            </div>
                        </div>
                        <div class="form-group">
                            
                            <div class="col-xs-6">
                              <label for="password2"><h4>Confirmation de mot de passe</h4></label>
                                <input type="password" class="form-control" name="password2" id="password2" placeholder="password2" title="Retapez votre mot de passe."/>
                            </div>
                            <div class="col-xs-6">
                              <label for="description"><h4>Description</h4></label>
                                <input type="text" class="form-control" name="description" id="description" placeholder="description" title="Tapez votre description."/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-12">
                                  <br/>
                                  <button class="btn btn-lg btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"></i>Enregistrer</button>
                                  <button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i>Annuler</button>
                                  <Link to='/espaceP' className='LinkMP' onClick={closeMobileMenu}>
                                        Retour
                                  </Link>
                     
                              </div>
                        </div>
                  </form>
                
                <hr/>
                
              </div>
              <div class="tab-pane" id="messages">
                
                <h2></h2>
                
                <hr/>
                    <form class="form" action="##" method="post" id="registrationForm">
                        <div class="form-group">
                            
                            <div class="col-xs-6">
                                <label for="first_name"><h4>Prénom</h4></label>
                                <input type="text" class="form-control" name="first_name" id="first_name" placeholder="prénom" title="Entrez votre prénom."/>
                            </div>
                        </div>
                        <div class="form-group">
                            
                            <div class="col-xs-6">
                              <label for="last_name"><h4>Nom</h4></label>
                                <input type="text" class="form-control" name="last_name" id="last_name" placeholder="nom" title="Entrez votre nom."/>
                            </div>
                        </div>
            
                        <div class="form-group">
                            
                            <div class="col-xs-6">
                                <label for="phone"><h4>Tél</h4></label>
                                <input type="text" class="form-control" name="phone" id="phone" placeholder="Tél" title="Entrez votre numéro de tél"/>
                            </div>
                        </div>
            
   
                        <div class="form-group">
                            
                            <div class="col-xs-6">
                                <label for="email"><h4>Email</h4></label>
                                <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="Entrez votre email."/>
                            </div>
                        </div>
                        <div class="form-group">
                            
                            <div class="col-xs-6">
                                <label for="email"><h4>Adresse</h4></label>
                                <input type="email" class="form-control" id="location" placeholder="adresse" title="Tapez votre adresse"/>
                            </div>
                        </div>
                        <div class="form-group">
                            
                            <div class="col-xs-6">
                                <label for="password"><h4>Mot de passe</h4></label>
                                <input type="password" class="form-control" name="password" id="password" placeholder="mot de passe" title="Entrez votre mot de passe"/>
                            </div>
                        </div>
                        <div class="form-group">
                            
                            <div class="col-xs-6">
                              <label for="password2"><h4>Modification de mot de passe</h4></label>
                                <input type="password" class="form-control" name="password2" id="password2" placeholder="password2" title="Retapez votre mot de passe"/>
                            </div>
                            <div class="col-xs-6">
                              <label for="description"><h4>Description</h4></label>
                                <input type="text" class="form-control" name="description" id="description" placeholder="description" title="Tapez votre description."/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-12">
                                  <br/>
                                  <button class="btn btn-lg btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Enregistrer</button>
                                  <button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i>Annuler</button>
                                  
                              </div>
                        </div>
                  </form>
                
              </div>
              
            </div>
        </div>
      </div>
      </div>
    </>  

  );
}
export default ModifProfil;
