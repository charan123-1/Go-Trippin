import React from 'react';
import './Aboutpage.css';
//import A from './images/aboutusimg.jpg'
//import A from '../img/A.jpg'
import {AiOutlineForm} from 'react-icons/ai';
import {FiShoppingCart} from 'react-icons/fi';
import {GoTasklist} from 'react-icons/go';
function Aboutpage(){
    
    return(
        <div class="about">

            <ul class="flex-container">
                <li class="aboutus">
                    <h1>About Us</h1>
                    <h2>GoTrippin app is an online travel planning web application supporting a platform to enjoy a perfect vacation by fulfilling the demands of people looking for travel experiences.</h2>
                </li>
                <li class="aboutuspic">
                

                </li>

            </ul>
            <ul class="flex-container2" id="flex-container2">

                <li class="flex-item2">
                    <AiOutlineForm size="60px"/>
                    <h3 className='h3-1'>Trusted Reviews</h3>
                    <p className='p1'>Get honest reviews from our users about a particular destination.</p>
                </li>
                <li class="flex-item2">
                    <FiShoppingCart size="60px"/>
                    <h3 className='h3-1'>Shop</h3>
                    <p className='p1'>Buy all your travel needs from one place.</p>
                </li>
                <li class="flex-item2">
                    <GoTasklist size="60px"/>
                    <h3 className='h3-1'>Bucket List</h3>
                    <p className='p1'>Never forget to note down your plans.</p>
                </li>
            </ul>
            <div class="howitwork">
            <h3 style={{color:"black"}} className='h3-2'>How it works</h3>
            <p>Our website allows travelers to browse reviews and opinion of accomodations,restaurants,experiences etc. It also acts as a ecommerce site to allows users to shop for all thier travel needs.  </p>
            <ul  class="feature" >
                <li >
                We provide users an option where they will be able to give reviews and rating to the locations they have been to.  
                </li>
                <li>
                Users are able to browse for accomodation and restaurants at the location they wish to visit.   
                </li>
                <li>
                We make it easy for our users to purchase all the necessary items for their travel.  
                </li>
                <li>
                Tired of forgething things?Here youll be able to note down things you wish to accomplish during your trip.
                </li>
            </ul> 
            
            </div>
        </div>
        
        
    );
}
export default Aboutpage;