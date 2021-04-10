import React, {Component} from 'react';
import './Cards.css';

import CardItem from './CardItem';


class CardsServices extends Component{
  


  
 render(){
   
    return( 
      <>
   
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              //src={img1}
              text='Voir le profil'
              path='/profil'
              
           
            />
            <CardItem
              //src={img1}
              text='Voir le profil'
              path='/profil'
            />
             <CardItem
              //src={img1}
              text='Voir le profil'
              path='/profil'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              //src={img1}
              text='Voir le profil'
              path='/profil'
            />
            <CardItem
               //src={img1}
              text='Voir le profil'
              path='/profil'
            />
            <CardItem
              //src={img1}
              text='Voir le profil'
              path='/profil'
            />
          </ul>
        </div>
      </div>
    
    
      </>
    ) 
  } 
} export default CardsServices;