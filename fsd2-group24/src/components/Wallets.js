import React, { useState, useEffect } from 'react';
import './Wallets.css'
import ProductCard from './ProductCard';

function Wallets() {

    const [wallet, setWallet] = useState([])
    //Reading json data
    useEffect(() => {
        fetch('http://localhost:4000/walletitems').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setWallet(data);
            })
    }, [])

    return (
        <div className='wallet'>
        <h1 className='backpack-h1'>Wallets</h1>
            <div className="wallet__wrapper">
                {/* Iterating through json data using map function and returning it */}
                {wallet.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Wallets;