import React, { Component } from 'react';
import '../../App.css';
import CardsServices from '../CardsServices';
import NavbarServices from '../NavbarServices';

const arrayOfData = [ { id: '1 - Marrakech', name: 'Marrakech' }, { id: '2 - Rabat', name: 'Rabat' },
 { id: '3 - Casablanca', name: 'Casablanca' }, { id: '4 - Agadir', name: 'Agadir' },
 { id: '5 - Tanger', name: 'Tanger' }, { id: '6- Meknes', name: 'Meknes' },
 { id: '7 - Fes', name: 'Fes' }, ];
 const arrayOfData1 = [ { id: '1 - Jardinage', name: 'Jardinage' }, { id: '2 - Bricolage', name: 'Bricolage' },
 { id: '3 - Coaching', name: 'Coaching sportif' }, { id: '4 - carrosserie', name: 'carrosserie' },
 { id: '5 - Electricité', name: 'Electricité' }, { id: '6- Baby sitting', name: 'Baby sitting' },
 { id: '7 - Coaching personnel', name: 'Coaching personnel' }, ];
class Services extends Component {
   constructor(props){
      super(props);
      this.state={ selectedValue: "Rien n'est encore sélectionné" } 
    } handleSelectChange = (selectedValue) =>{
       this.setState({ selectedValue: selectedValue }); 
} 
render(){ 
  return ( 
    <>
    <NavbarServices/>
       <p className="App-intro">
          <CardsServices arrayOfData={arrayOfData} arrayOfData1={arrayOfData1} onSelectChange={this.handleSelectChange} /> 
          <br />
          <br /> 
        <div> 
        Valeur sélectionnée: {this.state.selectedValue} 
        </div> 
      </p> 
    
    </> 
  ); 
  } 
} export default Services;


