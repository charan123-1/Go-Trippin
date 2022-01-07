import React, { useState, useEffect } from 'react';
import './Surfings.css'
import ProductCard from './ProductCard';

function Surfings() {
    const [surfing, setSurfing] = useState([])
    // read json data
    useEffect(() => {
        fetch('http://localhost:5000/SurfingItems').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setSurfing(data);
            })
    }, [])

    return (
        <div className='surfing'>
            <div className="surfing__wrapper">
                {surfing.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Surfings;