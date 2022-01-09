import React, { useState, useEffect } from 'react';
import './Backpacks.css'
import ProductCard from './ProductCard';

function Backpacks() {
    const [backpack, setBackpack] = useState([])
    // read json data
    useEffect(() => {
        fetch('http://localhost:5000/backpackItems').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setBackpack(data);
            })
    }, [])

    return (
        <div className='backpack'>
            <h1 className='backpack-h1'>Backpacks</h1>
            <div className="backpack__wrapper">
                {/* Using map function to iterate through the json data and returning it*/}
                {backpack.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Backpacks;