// import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
// import { Link } from 'react-router-dom';
// import Dropdown from './Dropdown';
// import './Navbar.css';

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);
//   const [dropdown1, setDropdown1] = useState(false);
//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };
//   const onMouseEnter = () => {
//     if (window.innerWidth < 960) {
//       setDropdown1(false);
//     } else {
//       setDropdown1(true);
//     }
//   };

//   const onMouseLeave = () => {
//     if (window.innerWidth < 960) {
//       setDropdown1(false);
//     } else {
//       setDropdown1(false);
//     }
//   }

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);

//   return (
//     <>
//       <nav className='navbar'>
//         <div className='navbar-container'>
//           <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//             TRVL
//             <i class='fab fa-typo3' />
//           </Link>
//           <div className='menu-icon' onClick={handleClick}>
//             {click ? <GiTireIronCross/> : <GiHamburgerMenu/>}
//           </div>
//           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             <li className='nav-item'>
//               <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                 <AiFillHome/>Home
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/about'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 <AiFillInfoCircle/>About
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/browse'
//                 className='nav-links'
//                 onMouseEnter={onMouseEnter}
//                 onMouseLeave={onMouseLeave}
//               >
//                <BiSearchAlt/> Browse
//               </Link>
//               {dropdown1 && <Dropdown />}
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/shop'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                <BsFillBagCheckFill/> Shop
//               </Link>
//             </li>
//             <li className='nav-item'>
//                  <Link
//                   to='/experience'
//                      className='nav-links'
//                      onClick={closeMobileMenu}
//                     >
//                 <FaUserEdit/> Experience
//               </Link>
//             </li>


//             <li>
//               <Link
//                 to='/sign-up'
//                 className='nav-links-mobile'
//                 onClick={closeMobileMenu}
//               >
//                 Sign Up
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to='/login'
//                 className='nav-links-mobile'
//                 onClick={closeMobileMenu}>
//                 Login
//               </Link>
//             </li>
//           </ul>
//           {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
//           {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
//         <Link className='cart-img' to='/todo'> <img src={'images/cart-icon-28356-Windows.ico'} className="logo-img" /></Link>
//         <Link className='cart-img' to='/todo'> <img src={'images/9068936.png'} className="logo-img" /></Link>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import React, { useState,useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import { BiSearchAlt, BiShoppingBag } from 'react-icons/bi';
import { BsFillBagCheckFill, BsFillCartFill } from 'react-icons/bs';
import { GiTireIronCross, GiHamburgerMenu } from 'react-icons/gi';
import { AiFillInfoCircle, AiFillHome, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaUserEdit } from 'react-icons/fa';
function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
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
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          TRVL <i className='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <GiTireIronCross style={{ color: 'white' }} /> : <GiHamburgerMenu style={{ color: 'white' }}/>}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
              <AiFillInfoCircle style={{ color: 'white' }}/> About
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
               <BsFillBagCheckFill/> Shop
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
              {dropdown2 && <Dropdown2/>}
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
          <li className='nav-item'>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </li>
          <li className='nav-item'>
            {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
          </li>
          <li className='nav-item'>
            <Link className='cart-img' to='/todo'> <img src={'images/cart-icon-28356-Windows.ico'} className="logo-img" /></Link>
          </li>
          <li className='nav-item'>
            <Link className='cart-img' to='/todo'> <img src={'images/9068936.png'} className="logo-img2" /></Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;