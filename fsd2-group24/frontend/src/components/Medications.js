import React, { useState, useEffect } from 'react';
import './Medications.css'
import ProductCard from './ProductCard';

function Medications() {
    const [medication, setMedication] = useState([]) //initially setting the medication as empty list
    // reading json data
    useEffect(() => {
        fetch('http://localhost:4000/medication').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setMedication(data);
            })
    }, [])

    return (
        <div className='medication'>
        <h1 className='backpack-h1'>Medication</h1>
            <div className="medication__wrapper">
                {/* Iterating through the  medication list using map function and returning it*/}
                {medication.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Medications;