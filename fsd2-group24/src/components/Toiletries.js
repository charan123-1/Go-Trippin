import React, { useState, useEffect } from 'react';
import './Toiletries.css'
import ProductCard from './ProductCard';

function Toiletries() {
    const [toiletrie, setToiletrie] = useState([])
    // read json data
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
            <div className="toiletrie__wrapper">
                {toiletrie.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )
}
export default Toiletries;