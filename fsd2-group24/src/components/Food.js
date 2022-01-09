import React, { useState, useEffect, useRef } from 'react'
import "./Food.css"
import  FoodCard  from './FoodCard';

let autoComplete;

const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
        autoCompleteRef.current,
        { types: ["(cities)"], componentRestrictions: { country: "us" } }
    );
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
        handlePlaceSelect(updateQuery)
    );
}

async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
    console.log(addressObject);
}
function Food() {
    const [items, setItems] = useState([])
    const [searchTerm, setSearchTerm]=useState("")
  // read json data
  useEffect(() => {
    fetch('http://localhost:5000/food').then(res => {
      return res.json();
    })
      .then(data => {
        console.log(data);
        setItems(data);
      })
  }, [])
    const [query, setQuery] = useState("");
    const autoCompleteRef = useRef(null);
    const APIKey ="AIzaSyD1hrUHm5CzRtbuAkoBvCgAGjhEv - Xt4Vc"
    useEffect(() => {
        loadScript(
            `https://maps.googleapis.com/maps/api/js?key=${APIKey}&libraries=places`,
            () => handleScriptLoad(setQuery, autoCompleteRef)
        );
    }, []);
    return (
        <div className='acc'>
            <div className='form-group'>
                <input type="search" className="form-control" id="search_input" onChange={event => { setSearchTerm(event.target.value) }} placeholder="Search for Delicious Food?"/>
            </div>
            <div className="Food__wrapper">
                {items.filter((item) => {
                    if (searchTerm == "") {
                        return item
                    } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
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