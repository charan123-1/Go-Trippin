import React, { useState, useEffect } from 'react';
import './Scubadivings.css'
import ProductCard from './ProductCard';

function Scubadivings() {
    const [scubadiving, setScubadiving] = useState([])
    // reading json data
    useEffect(() => {
        fetch('http://localhost:5000/ScubadivingItems').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setScubadiving(data);
            })
    }, [])

    return (
        <div className='scubadiving'>
        <h1 className='backpack-h1'>Scuba diving</h1>
            <div className="scubadiving__wrapper">
                {/* Iterating through the json data using map function and returning it */}
                {scubadiving.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Scubadivings;