import React, { useState, useEffect } from 'react';
import './Surfings.css'
import ProductCard from './ProductCard';

function Surfings() {
    const [surfing, setSurfing] = useState([])
    // reading json data
    useEffect(() => {
        fetch('http://localhost:4000/surfingitems').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setSurfing(data);
            })
    }, [])

    return (
        <div className='surfing'>
        <h1 className='backpack-h1'>Surfing</h1>
            <div className="surfing__wrapper">
                {/* Iterating through json using map function and returning it */}
                {surfing.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Surfings;