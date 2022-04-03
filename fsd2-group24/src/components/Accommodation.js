import React, { useState, useEffect, useRef } from 'react'
import "./Accommodation.css"
import  AccommodationCard  from './AccommodationCard';

function Accommodation() {
    const[items, setItems] =useState([])
  // read json data
  useEffect(() => {
    fetch('http://localhost:4000/accommodation').then(res => {
      return res.json();
    })
      .then(data => {
        console.log(data);
        setItems(data);
      })
  }, [])
    //assigning Search Term as null at first
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className='accc'>
            <div className='form-group'>
                <input type="search" className="form-control" id="search_input" onChange={event => { setSearchTerm(event.target.value) }} placeholder="Where to?"/>
            </div>
            <div className="accommodation__wrapper">
                {/* Filtering the list according to the search Term */}
                {items.filter((item) => {
                    if (searchTerm == "") {
                        return item
                    } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase())){
                        return item
                    }
                }).map((item) => { return(
                    <AccommodationCard key={item.id} Accommodation={item} />); })}
        </div>

        
        </div>
    )
}
export default Accommodation