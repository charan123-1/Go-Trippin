import React, { useState, useEffect } from 'react';
import './Swimmings.css'
import ProductCard from './ProductCard';

function Swimmings() {
    const [swimming, setSwimming] = useState([])
    // reading json data
    useEffect(() => {
        fetch('http://localhost:4000/swimmingitems').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setSwimming(data);
            })
    }, [])

    return (
        <div className='swimming'>
        <h1 className='backpack-h1'>Swimming</h1>
            <div className="swimming__wrapper">
                {/* Iterating through json data using map function and returning it */}
                {swimming.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Swimmings;