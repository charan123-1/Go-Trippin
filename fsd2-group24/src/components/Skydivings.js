import React, { useState, useEffect } from 'react';
import './Skydivings.css'
import ProductCard from './ProductCard';

function Skydivings() {
    const [skydiving, setSkydiving] = useState([])
    // read json data
    useEffect(() => {
        fetch('http://localhost:5000/SkydivingItems').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setSkydiving(data);
            })
    }, [])

    return (
        <div className='skydiving'>
            <div className="skydiving__wrapper">
                {skydiving.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Skydivings;