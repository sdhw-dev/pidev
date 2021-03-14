import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../images/img-1.jpg'
import img2 from '../images/img-2.jpg'
import img3 from '../images/img-3.jpg'
import img4 from '../images/img-4.jpg'
import img5 from '../images/img-5.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Nos meilleurs services pour vous!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='Nouvelle coupe pour une nouvelle vie'
              label='Service'
              path='/services'
            />
            <CardItem
              src={img2}
              text='Un grand ménage de printemps!'
              label='Service'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text="Baby Sitting et Garde d'enfants"
              label='Service'
              path='/services'
            />
            <CardItem
              src={img4}
              text="Besoin d'un coach sportif"
              label='service'
              path='/products'
            />
            <CardItem
              src={img5}
              text='Retouche photos'
              label='service'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;