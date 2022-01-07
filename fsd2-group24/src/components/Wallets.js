import React, { useState, useEffect } from 'react';
import './Wallets.css'
import ProductCard from './ProductCard';

function Wallets() {
    const [wallet, setWallet] = useState([])
    // read json data
    useEffect(() => {
        fetch('http://localhost:5000/walletItems').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setWallet(data);
            })
    }, [])

    return (
        <div className='wallet'>
            <div className="wallet__wrapper">
                {wallet.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Wallets;