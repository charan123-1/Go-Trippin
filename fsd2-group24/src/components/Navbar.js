import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import Dropdown from './Dropdown';
// import Dropdown2 from './Dropdown2';
function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        setDropdown1(true);
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown1(false);
        } else {
            setDropdown1(false);
        }
    };

    const onMouseEnter1 = () => {
        setDropdown2(true);

    }

    const onMouseLeave1 = () => {
        if (window.innerWidth < 960) {
            setDropdown2(false);
        } else {
            setDropdown2(false);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    TRAVEL
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li
                        className='nav-item'
                    >
                        <Link
                            to="/about"
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            <i class="fas fa-address-card"></i>About
                        </Link>
                    </li>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to ="/"
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            <i class="far fa-window-restore"></i> Browse<i className='fas fa-caret-down' />
                        </Link>
                        {/* {dropdown1 && <Dropdown />} */}
                    </li>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnter1}
                        onMouseLeave={onMouseLeave1}
                    >
                        <Link
                            to='/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            <i class="fas fa-question"></i>Shop<i className='fas fa-caret-down' />
                        </Link>
                        {/* {dropdown2 && <Dropdown2 />} */}
                    </li>
                    <li className='nav-item'>
                        <Link to='/experience' className='nav-links' onClick={closeMobileMenu}>
                            <i className="fas fa-user-edit"></i> Experience
                        </Link>
                    </li>
                </ul>
                <button className="btn1">SignUp</button>
                <button className="btn1">LogIn</button>
                {/* {(document.getElementById('btn2').innerHTML !== name) ? <div><Button3 /></div> : <div><Logout /></div>} */}
            </nav>
        </>
    );
}

export default Navbar;