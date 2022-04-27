import React, { useState, useEffect } from 'react';
import './Cyclings.css'
import ProductCard from './ProductCard';

function Cyclings() {
    const [cycling, setCycling] = useState([])
    // read json data
    useEffect(() => {
        fetch('http://localhost:4000/cyclingitems').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setCycling(data);
            })
    }, [])

    return (
        <div className='cycling'>
        <h1 className='backpack-h1'>Cycling</h1>
            <div className="cycling__wrapper">
                {/* iterating through json data named as cycling using map function and returing the list */}
                {cycling.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Cyclings;