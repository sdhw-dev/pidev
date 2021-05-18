import React from "react";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import "../../App.css";
import { List } from 'semantic-ui-react'


class mesTrocs extends React.Component {

 

  constructor(props) {
    super(props);
    this.state = {
      valeurChoisie: 1,
     
    };
  }

  submit() {
    console.log("salut");
    const option = document.getElementById("id");
    console.log(option);

    if (option == 1) {
      <div>Salut id=1</div>;
    }
    console.warn(this.state);
  }

  component = () => {
    switch (this.state.valeurChoisie) {
      case 1:
        return (
          <div>
            <h2>Mes trocs </h2>
            {}

          </div>
        );
        break;
      case 2:
        return (
          <div>
      
            <h1>Trocs en cours d'exécution</h1>
            {" "}
          </div>
        );
        break;
      case 3:
        return (
          <div>
            
            <h1>Trocs terminés</h1>
            {" "}
          </div>
        );
        break;
      case 4:
        return (
          <div>
            
            <h1>Mes demandes</h1>
            {" "}
          </div>
        );
        break;
      case 5:
        return (
          <div>
            
            <h1>Mes offres</h1>
            {" "}
          </div>
        );
        break;

      default:
        return <h1>Erreur!</h1>;
        break;
    }
  };

 

  render() {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Sidebar />
          <div style={{ flex: "1", flexDirection: "row" }}>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <br />
                <br />
                <div className="form-row">
                  <div className="col-md-4">
                    <label>Filtrer par :</label>
                  </div>

                  <div className="form-group col-md-8">
                    <select
                      className="form-control"
                      name="tous-mes-trocs"
                      onChange={(event) => {
                        this.setState({
                          valuerChoisie: Number(event.target.value),
                        });
                      }}
                    >
                      <option id="1">Mes trocs</option>
                      <option id="2">Mes trocs en cours d'exécution</option>
                      <option id="3">Mes trocs terminés</option>
                      <option id="4">Mes demandes</option>
                      <option id="5">Mes offres</option>
                    </select>
                  </div>

                  <this.component/>
                </div>
              </div>
            </div>
          
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
// const ListTrocs = () => (
//   <List>
//     <List.Item>Troc1</List.Item>
//     <List.Item>Troc2</List.Item>
//     <List.Item></List.Item>
//   </List>
// )


export default mesTrocs;
