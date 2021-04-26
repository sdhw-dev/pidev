import React from 'react';
import Sidebar from "../SideBar";
import Footer from "../Footer";
import "../../App.css";



class mesTrocs extends React.Component{
   
    constructor(){

        super();   

    }


    submit(){
        console.log("salut")
        const option=document.getElementById("id")
        console.log(option)

        if(option==1){
            <div>Salut id=1</div>
        }
        console.warn(this.state)

    }
    


    render(){
        
        return(
            
            <div >
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Sidebar />
                    <div style={{ flex: "1", flexDirection: "row" }}>

                        <div className="row">

                    <div className="col-md-6 offset-md-3">
                            <div className="form-row">

                                <div className="form-group col-md-6">

                                    <label>Filtrer par :</label>

                                    <select className="form-control" name="tous-mes-trocs" onChange={this.handleInputChange}>

                                        <option id="1">Mes trocs</option>
                                        <option id="2">Mes trocs en cours d'exécution</option>
                                        <option id="3">Mes trocs terminés</option>
                                        <option id="4">Mes demandes</option>
                                        <option id="5">Mes offres</option>

                                    </select>
                                    <select className="form-control" name="catégorie" onChange={this.handleInputChange}>

                                        <option value="1">Catégorie</option>
                                        <option value="2">Ville</option>

                                    </select>

                                </div>

                            </div>


                            <div className="form-row">

                                <div className="col-md-12 text-center">

                                    <button type="submit" className="btn btn-primary" onClick={()=>this.submit()}>Filtrer</button>

                                </div>

                            </div>

                        

                    </div>

                </div>
                <h2>Mes trocs :</h2>
                <div class="form-group">
                <label for="textarea"></label>
                <textarea id="textarea" class="form-control"></textarea>
              </div>
             
          
                    </div>
        
                </div>
            
               
                <Footer />
            </div>

        )  

    }

}


export default mesTrocs;
