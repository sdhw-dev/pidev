import React from 'react';
import '../../App.css';
import CardsServices from '../CardsServices';






class Biensnc extends React.Component {
  constructor(){
    super();
    this.state = {
        catégorie:null,
    }

    this.handleInputChange = this.handleInputChange.bind(this);

}


handleInputChange(event) {

    this.setState({
        catégorie: event.target.value

    });

    

}


submit(){

    console.warn(this.state)

}


render(){

    return(

        <div className="biensnc">
           
            
            <div className="row">

                <div className="col-md-6 offset-md-3">

                    

                    <h3>Accueil/Biens</h3>

                    

                        <div className="form-row">
                            <div className="form-group col-md-6">

                                <label>Ville :</label>

                                <select className="form-control" name="catégorie" onChange={this.handleInputChange}>

                                    <option selected>Choisir une ville</option>
                                    <option value="1">Marrakech</option>
                                    <option value="2">Rabat</option>
                                    <option value="3">Casablanca</option>
                                    <option value="4">Agadir</option>
                                    <option value="5">Tanger</option>
                                    <option value="6">Meknes</option>
                                    <option value="7">Fes</option>

                                </select>

                            </div>
                            <div className="form-group col-md-6">
                                <label>Catégorie :</label>

                                <select className="form-control" name="city" onChange={this.handleInputChange}>

                                    <option selected>Choisir une catégorie</option>

                                    <option value="1">Bureaux</option>
                                    <option value="2">Salle de bain</option>
                                    <option value="3">Cuisine</option>
                                    <option value="4">Mobilier de jardin</option>
                                    <option value="5">Salon</option>
                                    <option value="6">Chambre</option>
                                    <option value="7">Salle à manger</option>

                                </select>

                            </div>
                           

                        </div>


                        <div className="form-row">

                            <div className="col-md-12 text-center">

                                <button type="submit" className="btn btn-primary" onClick={()=>this.submit()}>Recherche</button>

                            </div>

                        </div>

                    

                </div>
                
            </div>
            
            <CardsServices/>
        </div>

    )  

}
} export default Biensnc;