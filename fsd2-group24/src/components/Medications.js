import React, { useState, useEffect } from 'react';
import './Medications.css'
import ProductCard from './ProductCard';

function Medications() {
    const [medication, setMedication] = useState([])
    // read json data
    useEffect(() => {
        fetch('http://localhost:5000/MedicationItems').then(res => {
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
                {medication.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div >
    )

}
export default Medications;