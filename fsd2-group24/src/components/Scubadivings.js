import React, { useState, useEffect } from 'react';
import './Scubadivings.css'
import ProductCard from './ProductCard';

function Scubadivings() {
    const [scubadiving, setScubadiving] = useState([])
    // read json data
    useEffect(() => {
        fetch('http://localhost:5000/ScubadivingItems').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setScubadiving(data);
            })
    }, [])

    return (
        <div className='scubadiving'>
            <div className="scubadiving__wrapper">
                {scubadiving.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Scubadivings;