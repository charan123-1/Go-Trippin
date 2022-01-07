import React from 'react';
import './TravelCards.css';
import TravelCardItem from './TravelCardItem';

function TravelCards() {
    return (
        <div className='travel_cards'>
            <h1>Travel essentials made simple..!</h1>
            <div className='travel_cards__container'>
                <div className='travel_cards__wrapper'>
                    <ul className='travel_cards__items'>
                        <TravelCardItem
                            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/alaska-2488-reduced-1574273862.jpg?crop=0.657xw:0.657xh;0.0240xw,0.178xh&resize=640:*'
                            text='Backpacks'
                            path='/backpack'
                        />
                        <TravelCardItem
                            src='https://www.redpoints.com/wp-content/uploads/2019/01/fashion.png'
                            text='Clothing'
                            path='/clothing'
                        />
                        <TravelCardItem
                            src='https://www.findingtheuniverse.com/wp-content/uploads/2019/04/Travel-shoes_by_Laurence-Norah.jpg'
                            text='Shoes'
                            path='/item'
                        />
                    </ul>
                    <ul className='travel_cards__items'>
                        <TravelCardItem
                            src='https://i5.walmartimages.com/asr/b0a6beb2-b463-4558-8392-cd3479dbb9de.9547dba250f5eacbe16be1ecf942c438.jpeg'
                            text='Medication'
                            path='/medication'
                        />
                        <TravelCardItem
                            src='https://media.istockphoto.com/photos/collection-of-personal-hygiene-products-picture-id147280026?k=20&m=147280026&s=612x612&w=0&h=PGgdy3j1TZ85MKOlUYeEa1WAF6Cof-tApGNpFnxz3wM='
                            text='Toiletries'
                            path='/toiletries'
                        />
                        <TravelCardItem
                            src='https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg'
                            text='Skincare'
                            path='/skincare'
                        />
                    </ul>
                    <ul className='travel_cards__items'>
                        <TravelCardItem
                            src='https://www.rovence.com/wp-content/uploads/2019/07/leather-luxury-travel-passport-wallet-organizer-rfid-blocking-travel-document-holder-blue-color-womens.jpg'
                            text='Wallets'
                            path='/wallets'
                        />
                        <TravelCardItem
                            src='https://n1.sdlcdn.com/imgs/h/v/i/3-Mode-Tactical-Flash-Light-SDL188186300-6-758e4.JPEG'
                            text='Flash Torches'
                            path='/flashtorches'
                        />
                        <TravelCardItem
                            src='https://www.sony-mea.com/image/42f703ee31e9446e9e807391082c019d?fmt=jpeg&wid=960&qlt=43'
                            text='Portable chargers'
                            path='/chargers'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TravelCards;