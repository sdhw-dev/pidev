import React, {Component} from 'react';
import './Cards.css';

<<<<<<< HEAD
import CardItem from './CardItem';


class CardsServices extends Component{
  constructor(props){
    super(props) 
  } 
  handleChange = (event) => { let selectedValue = event.target.value;
    this.props.onSelectChange(selectedValue);
 }
 render(){
    let arrayOfData = this.props.arrayOfData;
    let options = arrayOfData.map((data) => <option key={data.id} value={data.id} > {data.name} </option> ); 
=======
function CardsServices() {
  return (
    <>
  
    <div className='cards'>
      Accueil/Service
    </div>
    </>
  );
}
>>>>>>> b36a6be6d163ba733b54f579032ef3e3a21ea362

    let arrayOfData1 = this.props.arrayOfData1;
    let options1 = arrayOfData1.map((data) => <option key={data.id} value={data.id} > {data.name} </option> ); 
    return( 
      <>
     
      <div className='cards'>
      <h1>Services</h1>
      <div className='selectedList'>
      <select name="customSearch" className="custom-search-select" onChange={this.handleChange}>
        <option>
          Villes
        </option>
        {options} 
      </select> 
      <select name="customSearch" className="custom-search-select" onChange={this.handleChange}>
        <option>
          Catégories
        </option>
        {options1} 
      </select>
      
      </div> 
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              //src={img1}
              text='Lorem ipsum dolor sit amet'
              label='Service'
              path='/services'
            />
            <CardItem
              //src={img1}
              text='Lorem ipsum dolor sit amet'
              label='Service'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
               //src={img1}
               text='Lorem ipsum dolor sit amet'
               label='Service'
               path='/services'
            />
            <CardItem
               //src={img1}
               text='Lorem ipsum dolor sit amet'
               label='Service'
               path='/services'
            />
            <CardItem
               //src={img1}
               text='Lorem ipsum dolor sit amet'
               label='Service'
               path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
    
      </>
    ) 
  } 
} export default CardsServices;