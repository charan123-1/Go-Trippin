import React from 'react';
import { Link } from 'react-router-dom';

function ShopCardItem(props) {
  return (
    <>
      
      <li className='shop_cards__item'>
        {/* According to the attributes given from ShopCards.js file we are giving it here for Link to the page and the image as well as the text respectively*/}
        <Link className='shop_cards__item__link' to={props.path}>
          <figure className='shop_cards__item__pic-wrap' data-category={props.label}>
            <img
              className='shop_cards__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='shop_cards__item__info'>
            <h5 className='shop_cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ShopCardItem;