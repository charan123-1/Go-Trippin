import React from 'react';
import './ShopCards.css';
import ShopCardItem from './ShopCardItem';


function ShopCards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ShopCardItem
              src='images/travel-backpacks.jpg'
              text='Travel Backpacks'
              path='/item'
            />
            <ShopCardItem
              src='images/Waterbottles.jpg'
              text='Waterbottles- Hydrate yourself'
              path='/item'
            />
          </ul>
          <ul className='cards__items'>
            <ShopCardItem
              src='images/InstantCamera.jpg'
              text='Capture every moment of your journey'
              path='/item'
            />
            <ShopCardItem
              src='images/Shoes.jpg'
              text='Do not stop until you done all yout Todo things '
              path='/item'
            />
            <ShopCardItem
              src='images/Wallets.jpg'
              text='Keep your money safe..'
              path='/item'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default ShopCards;