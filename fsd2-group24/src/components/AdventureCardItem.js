import React from 'react';
import { Link } from 'react-router-dom';

function AdventureCardItem(props) {
    return (
        <>
            <li className='Adventure_cards__item'>
                {/* According to the attributes given from AdventureCards.js file we are giving it here for Link to the page and the image as well as the text respectively*/}
                <Link className='Adventure_cards__item__link' to={props.path}>
                    <figure className='Adventure_cards__item__pic-wrap' data-category={props.label}>
                        <img
                            className='Adventure_cards__item__img'
                            alt='Adventure'
                            src={props.src}
                        />
                    </figure>
                    <div className='Adventure_cards__item__info'>
                        <h5 className='Adventure_cards__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default AdventureCardItem;