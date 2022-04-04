import React, { useState, useEffect } from 'react';
import './Skydivings.css'
import ProductCard from './ProductCard';

function Skydivings() {
    const [skydiving, setSkydiving] = useState([])
    // reading json data
    useEffect(() => {
        fetch('http://localhost:4000/skydivingitems').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setSkydiving(data);
            })
    }, [])

    return (
        <div className='skydiving'>
        <h1 className='backpack-h1'>Skydiving</h1>
            <div className="skydiving__wrapper">
                {/* Iterating through the json data using map function and returning it */}
                {skydiving.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Skydivings;