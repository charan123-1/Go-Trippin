import React, { useState, useEffect } from 'react';
import './Toiletries.css'
import ProductCard from './ProductCard';

function Toiletries() {
    const [toiletrie, setToiletrie] = useState([])
    // Reading json data
    useEffect(() => {
        fetch('http://localhost:5000/ToiletriesItems').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setToiletrie(data);
            })
    }, [])

    return (
        <div className='toiletrie'>
        <h1 className='backpack-h1'>Toiletries</h1>
            <div className="toiletrie__wrapper">
                {/* Iterating through json data using map function and returning the list */}
                {toiletrie.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )
}
export default Toiletries;