import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Visakhapatnam.jpg'
              text='Visakhapatnam - the city of Destiny'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/Hyderabad.jpg'
              text='Hyderabad - the city of Pearls'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Tirupati.jpg'
              text='Tirumala & Tirupati - Spiritual City'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/Araku.jpg'
              text='Araku - Ooty of Andhra'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/Warangal.jpg'
              text='Warangal - Historical city of Telangana'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;