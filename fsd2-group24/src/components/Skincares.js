import React, { useState, useEffect } from 'react';
import './Skincares.css'
import ProductCard from './ProductCard';

function Skincares() {
    // assigning skincare variable as empty
    const [skincare, setSkincare] = useState([])
    // reading json data
    useEffect(() => {
        fetch('http://localhost:4000/skincare').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setSkincare(data);
            })
    }, [])

    return (
        <div className='skincare'>
        <h1 className='backpack-h1'>Skincare</h1>
            <div className="skincare__wrapper">
                {/* Iterating through the json data using map function and returning it */}
                {skincare.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Skincares;