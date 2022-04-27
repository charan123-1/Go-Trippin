import React, { useState,useEffect,useContext } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import { BiSearchAlt } from 'react-icons/bi';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { GiTireIronCross, GiHamburgerMenu } from 'react-icons/gi';
import { AiFillInfoCircle, AiFillHome} from 'react-icons/ai';
import { FaUserEdit } from 'react-icons/fa';
import { UserContext } from "../App"
function Navbar() {
  const { state, dispatch } = useContext(UserContext);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false); //to set the dropdown for browse, first setting it as false
  const [dropdown2, setDropdown2] = useState(false);// to set the dropdown for experience, first setting it as false
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
  //on mouse enter setting the dropdown to true
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  //on mouse leave setting the dropdown to false
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  //on mouse enter setting the dropdown2 to true
  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };
  //on mouse leave setting the dropdown2 to false
  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("Logged Out!!")
    dispatch({ type: "USER", payload: false })
    console.log(state)
    window.location.reload();
  };
  useEffect(() => {
    showButton();
  }, []);
  const RenderMenu = () => {
    if (state == true) {
      console.log(state);
      return (
        <>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <AiFillHome /> Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <AiFillInfoCircle style={{ color: 'white' }} /> About
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
           <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <BiSearchAlt /> Browse
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/shop'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <BsFillBagCheckFill /> Shop
            </Link>
          </li>
          <li className='nav-item'
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}>
            <Link
              to='/experience'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <FaUserEdit /> Experience
              {dropdown2 && <Dropdown2 />}
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'>
              
              </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/logout'
              className='nav-links'
              onClick={handleLogout}
            >
              LogOut
              {/* { props.status? "Logout":"Login"} */}
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='cart-img' to='/cart'> <img src={'images/cart-icon-28356-Windows.ico'} alt="cart" className="logo-img" /></Link>
          </li>
          <li className='nav-item'>
            <Link className='cart-img' to='/todo'> <img src={'images/9068936.png'} alt="cart" className="logo-img2" /></Link>
          </li>
        </>
      )
    }
    else {
      return (
        <>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <AiFillHome /> Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <AiFillInfoCircle style={{ color: 'white' }} /> About
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <BiSearchAlt /> Browse
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/shop'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <BsFillBagCheckFill /> Shop
            </Link>
          </li>
          <li className='nav-item'
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}>
            <Link
              to='/experience'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <FaUserEdit /> Experience
              {dropdown2 && <Dropdown2 />}
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/sign-up'
              className='nav-links'
            >
              SignUp
              {/* {props.status? "":"SignUp"} */}
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/login'
              className='nav-links'
            >
              LogIn
              {/* { props.status? "Logout":"Login"} */}
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='cart-img' to='/cart'> <img src={'images/cart-icon-28356-Windows.ico'} alt="cart" className="logo-img" /></Link>
          </li>
          <li className='nav-item'>
            <Link className='cart-img' to='/todo'> <img src={'images/9068936.png'} alt="cart" className="logo-img2" /></Link>
          </li>
        </>
    )
    }
  }
  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar'>
        {/* Logo */}
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          GoTrippin
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <GiTireIronCross style={{ color: 'white' }} /> : <GiHamburgerMenu style={{ color: 'white' }}/>}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <RenderMenu/>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;