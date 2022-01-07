import React, { useState, useEffect } from 'react';
import './Swimmings.css'
import ProductCard from './ProductCard';

function Swimmings() {
    const [swimming, setSwimming] = useState([])
    // read json data
    useEffect(() => {
        fetch('http://localhost:5000/SwimmingItems').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setSwimming(data);
            })
    }, [])

    return (
        <div className='swimming'>
            <div className="swimming__wrapper">
                {swimming.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Swimmings;