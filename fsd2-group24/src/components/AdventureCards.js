import React from 'react';
import './AdventureCards.css';
import AdventureCardItem from './AdventureCardItem';


function AdventureCards() {
    return (
        <div className='Adventure_cards'>
            <h1>The ultimate money-saving tools for your journey.. </h1>
            <div className='Adventure_cards__container'>
                <div className='Adventure_cards__wrapper'>
                    <ul className='Adventure_cards__items'>
                        <AdventureCardItem
                            src='https://images.unsplash.com/photo-1467139701929-18c0d27a7516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                            text='Trekking'
                            path='/item'
                        />
                        <AdventureCardItem
                            src='https://media.istockphoto.com/photos/skydivers-fall-towards-the-earth-picture-id1055668334?b=1&k=20&m=1055668334&s=170667a&w=0&h=n9X2Fe6MvJNVEammgfM9sFuLks9OE3ksL8Nqn8yO6IE='
                            text='Skydiving'
                            path='/item'
                        />
                        <AdventureCardItem
                            src='https://img.olympicchannel.com/images/image/private/t_16-9_3200/v1568209469/primary/zu9vjmupm9typ4rjohdz'
                            text='Surfing'
                            path='/item'
                        />
                    </ul>
                    <ul className='Adventure_cards__items'>
                        <AdventureCardItem
                            src='https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/05/11/biking-boulder-colorado.jpg.rend.hgtvcom.966.725.suffix/1491582048869.jpeg'
                            text='Cycling'
                            path='/item'
                        />
                        <AdventureCardItem
                            src='https://www.tripsavvy.com/thmb/NBpuFKFoPCHX9Ktu_C3YDPAPFGQ=/2880x2160/smart/filters:no_upscale()/GettyImages-597572085-584819855f9b5851e593fd0b-5c336fd646e0fb0001d39014.jpg'
                            text='Scuba Diving'
                            path='/item'
                        />
                        <AdventureCardItem
                            src='https://experiencekerala.in/kerala-tourism-blog/wp-content/uploads/2018/05/1-1.jpg'
                            text='Swimming'
                            path='/item'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AdventureCards;