import React, { useState, useEffect } from 'react';
import './Skincares.css'
import ProductCard from './ProductCard';

function Skincares() {
    const [skincare, setSkincare] = useState([])
    // read json data
    useEffect(() => {
        fetch('http://localhost:5000/skincareItems').then(res => {
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
                {skincare.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Skincares;