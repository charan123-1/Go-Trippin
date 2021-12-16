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
              src='https://media.istockphoto.com/photos/conceptual-travel-map-picture-id1297914597?b=1&k=20&m=1297914597&s=170667a&w=0&h=bmdz6b6pp8X6Mv2HK_kmgNrksVYQHcO4DNsAIf-mEI8='
              text='Travel Essesntials'
              path='/item'
            />
            <ShopCardItem
              src='https://media.istockphoto.com/photos/success-woman-hiker-hiking-on-sunrise-mountain-peak-young-woman-with-picture-id1285296688?b=1&k=20&m=1285296688&s=170667a&w=0&h=TtQMZf_3Gc4LsDRUO2CWFjnXIgKYt48J7hcdfP__3K8='
              text='Adventure '
              path='/item'
            />
          </ul>


        </div>
      </div>
    </div>
  );
}

export default ShopCards;