import React, { useState, useEffect } from 'react';
import './Trekkings.css'
import ProductCard from './ProductCard';

function Trekkings() {
    const [trekking, setTrekking] = useState([])
    // read json data
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
            <div className="trekking__wrapper">
                {trekking.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Trekkings;