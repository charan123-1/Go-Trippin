import React, { useState, useEffect } from 'react';
import './Flashtorches.css'
import ProductCard from './ProductCard';

function Flashtorches() {
    const [flashtorch, setFlashtorch] = useState([])
    // read json data
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
            <div className="flashtorch__wrapper">
                {flashtorch.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Flashtorches;