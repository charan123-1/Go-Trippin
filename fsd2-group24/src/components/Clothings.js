import React, { useState, useEffect } from 'react';
import './Clothings.css'
import ProductCard from './ProductCard';

function Clothings() {
    const [clothing, setClothing] = useState([])
    // read json data
    useEffect(() => {
        fetch('http://localhost:4000/clothing').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setClothing(data);
            })
    }, [])

    return (
        <div className='clothing'>
            <h1>Clothing</h1>
            <div className="clothing__wrapper">
                {/* iterating through json data named as clothing using map function and returing the list */}
                {clothing.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Clothings;