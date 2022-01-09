import React, { useState, useEffect } from 'react';
import './Trekkings.css'
import ProductCard from './ProductCard';

function Trekkings() {
    const [trekking, setTrekking] = useState([])
    //Reading json data
    useEffect(() => {
        fetch('http://localhost:5000/TrekkingItems').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setTrekking(data);
            })
    }, [])

    return (
        <div className='trekking'>
        <h1 className='backpack-h1'>Trekking</h1>
            <div className="trekking__wrapper">
                {/* Iterating through the json data using map function and returning it */}
                {trekking.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Trekkings;