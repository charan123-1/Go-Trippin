import React from 'react';
import { Link } from 'react-router-dom';

function TravelCardItem(props) {
    return (
        <>
            <li className='travel_cards__item'>
                {/* According to the attributes given from TravelCards.js file we are giving it here for Link to the page and the image as well as the text respectively*/}

                <Link className='travel_cards__item__link' to={props.path}>
                    <figure className='travel_cards__item__pic-wrap' data-category={props.label}>
                        <img
                            className='travel_cards__item__img'
                            alt='Travel'
                            src={props.src}
                        />
                    </figure>
                    <div className='travel_cards__item__info'>
                        <h5 className='travel_cards__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default TravelCardItem;