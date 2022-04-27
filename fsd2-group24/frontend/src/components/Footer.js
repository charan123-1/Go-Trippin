import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {FiTwitter,FiFacebook,FiInstagram,FiMail} from 'react-icons/fi'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join us to explore the best tourist places around you
        </p>
        
        <div className='input-areas'>

            <Link to='/sign-up'>

            {<Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </Link>

        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Follow us on</h2>
            <div class="social">
            <Link to='/' className='social'><FiInstagram /></Link>
            <Link to='/' className='social'><FiTwitter/></Link>
            <Link to='/' className='social'><FiFacebook /></Link>
            <Link to='/' className='social'><FiMail /></Link>
          </div>
          </div>

        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              GoTrippin
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>GoTrippin © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;