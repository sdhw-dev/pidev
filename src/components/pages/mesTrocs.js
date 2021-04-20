import React from 'react';
import Sidebar from "../SideBar";
import Footer from "../Footer";
import "../../App.css";



class mesTrocs extends React.Component{
   
    constructor(){

        super();

        this.state = {

            city:null,

        }


        this.handleInputChange = this.handleInputChange.bind(this);

    }


    handleInputChange(event) {

        

        this.setState({

            city: event.target.value

        });

        

    }


    submit(){

        console.warn(this.state)

    }


    render(){

        return(

            <div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Sidebar />
                    <div style={{ flex: "1", flexDirection: "row" }}>

                        <div className="row">

                    <div className="col-md-6 offset-md-3">
                            <div className="form-row">

                                <div className="form-group col-md-6">

                                    <label>Filtrer par :</label>

                                    <select className="form-control" name="tous-mes-trocs" onChange={this.handleInputChange}>

                                        <option selected>tous mes trocs</option>

                                        <option value="2">tous mes demandes</option>

                                        <option value="3">tous mes offres</option>

                                    </select>
                                    <select className="form-control" name="catégorie" onChange={this.handleInputChange}>

                                        <option selected>Catégorie</option>

                                        <option value="2">Date</option>

                                        <option value="3">Ville</option>

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
                    </div>
                </div>
                <Footer />
            </div>

        )  

    }

}


export default mesTrocs;
