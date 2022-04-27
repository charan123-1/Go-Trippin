import React, { useState, useEffect } from 'react';
import './Chargers.css'
import ProductCard from './ProductCard';

function Chargers() {
    const [charger, setCharger] = useState([])
    // read json data
    useEffect(() => {
        fetch('http://localhost:4000/chargeritems').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setCharger(data);
            })
    }, [])

    return (
        <div className='charger'>
        <h1 className='backpack-h1'>Portable Chargers</h1>
            <div className="charger__wrapper">
                {/* Iterating through json data named charger using map function and returning it */}
                {charger.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Chargers;