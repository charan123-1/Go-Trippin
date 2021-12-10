import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { BiSearchAlt ,BiShoppingBag} from 'react-icons/bi';
import { BsFillBagCheckFill ,BsFillCartFill } from 'react-icons/bs';
import { GiTireIronCross , GiHamburgerMenu} from 'react-icons/gi';
import { AiFillInfoCircle,AiFillHome,AiOutlineShoppingCart } from 'react-icons/ai';
import { FaUserEdit } from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <GiTireIronCross/> : <GiHamburgerMenu/>}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                <AiFillHome/>Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <AiFillInfoCircle/>About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               <BiSearchAlt/> Browse
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               <BsFillBagCheckFill/> Shop
              </Link>
            </li>
            <li className='nav-item'>
                 <Link
                  to='/products'
                     className='nav-links'
                     onClick={closeMobileMenu}
                    >
                <FaUserEdit/> Experience
              </Link>
            </li>


            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}>
                Login
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
        <Link className='cart-img' to='/todo'> <img src={'images/cart-icon-28356-Windows.ico'} className="logo-img" /></Link>
        <Link className='cart-img' to='/todo'> <img src={'images/9068936.png'} className="logo-img" /></Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;