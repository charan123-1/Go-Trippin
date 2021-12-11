import React from 'react';
import '../App.css';
import { Button } from './Button';
import './ShopHeroSection.css';
import Navbar from './Navbar'
import {BsSearch} from 'react-icons/bs'
function ShopHeroSection() {
  return (
    <div className='hero-container'>

      <image src='/images/ShopHeroSection.jpg'/>
      <h1>SHOPPING SPOT</h1>

        <div className='search-bar'>
            <input placeholder='What are you looking for?'/>
            <button className='search-btn' type='submit'><BsSearch/></button>
        </div>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LET'S START PACKING
        </Button>
        
      </div>
    </div>
  );
}

export default ShopHeroSection;