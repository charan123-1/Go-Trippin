import React, { useState, useEffect, useRef } from 'react'
import "./Food.css"
import  FoodCard  from './FoodCard';

function Food() {
    const [items, setItems] = useState([])
    //assigning Search Term as null at first
    const [searchTerm, setSearchTerm]=useState("")
  // reading Restaurants json data
  useEffect(() => {
    fetch('http://localhost:4000/food').then(res => {
      return res.json();
    })
      .then(data => {
        console.log(data);
        setItems(data);
      })
  }, [])
    return (
        <div className='acc'>
            <div className='form-group'>
                <input type="search" className="form-control" id="search_input" onChange={event => { setSearchTerm(event.target.value) }} placeholder="Search for Delicious Food?"/>
            </div>
            <div className="Food__wrapper">
                {/* Filtering the list according to the search Term and returning */}
                {items.filter((item) => {
                    if (searchTerm == "") {
                        return item
                    } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return item
                    }
                }).map((item) => {
                    return (
                        <FoodCard key={item.id} Food={item} />
                    );
                })}
        </div>


        </div>
    )
}
export default Food