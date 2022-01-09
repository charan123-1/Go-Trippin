import React, { useState, useEffect } from 'react';
import './Flashtorches.css'
import ProductCard from './ProductCard';

function Flashtorches() {
    const [flashtorch, setFlashtorch] = useState([])//setting the flashtorch list as null at first
    // reading json data
    useEffect(() => {
        fetch('http://localhost:5000/flashtorchesItems').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setFlashtorch(data);
            })
    }, [])

    return (
        <div className='flashtorch'>
        <h1 className='backpack-h1'>Flash Torches</h1>
            <div className="flashtorch__wrapper">
                {/* Iterating through the flashtorch list using map function and return it */}
                {flashtorch.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Flashtorches;