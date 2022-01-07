import React, { useState, useEffect } from 'react';
import './Cyclings.css'
import ProductCard from './ProductCard';

function Cyclings() {
    const [cycling, setCycling] = useState([])
    // read json data
    useEffect(() => {
        fetch('http://localhost:5000/CyclingItems').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setCycling(data);
            })
    }, [])

    return (
        <div className='cycling'>
            <div className="cycling__wrapper">
                {cycling.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Cyclings;