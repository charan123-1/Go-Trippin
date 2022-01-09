import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {BsSearch} from 'react-icons/bs'
import {Link} from 'react-router-dom';


function HeroSection() {
  return (
    <div className='hero-container'>

      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>

        <div className='search-bar'>
            <input placeholder='What are you looking for?'/>
            <button className='search-btn' type='submit'><BsSearch/></button>
        </div>
      <div className='hero-btns'>
        <Link to='/sign-up'>

            {<Button buttonSize='btn--large' buttonStyle='btn--outline'>GET STARTED</Button>}
          </Link>

      </div>
    </div>
  );
}

export default HeroSection;