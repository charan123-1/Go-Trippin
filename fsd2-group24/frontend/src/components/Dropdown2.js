import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems2';
import './Dropdown.css'
function Dropdown2() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {/* Iterating through meuItems which has dropdown list for Experience using map function and returning them on Hover*/}
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>

        </>
    )
}

export default Dropdown2;
