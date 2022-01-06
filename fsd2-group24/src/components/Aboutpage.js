import React from 'react';
import './Aboutpage.css';
//import A from './images/aboutusimg.jpg'
//import A from '../img/A.jpg'
function Aboutpage(){
    
    return(
        <div class="about">
            <ul class="flex-container">
                <li class="aboutus">
                    <h1>About Us</h1>
                    <h2>GoTrippin is an online travel planning web application supporting a platform to enjoy a perfect vacation by fulfilling the demands of people looking for travel experiences.</h2>
                </li>
                <li class="aboutuspic">
                
                    
                </li>
             
            </ul>
            <ul class="flex-container2" id="flex-container2">
                <li class="flex-item2">
                    <i class="icon far fa-check-circle fa-3x"></i>
                    <h3>Trusted Reviews</h3>
                    <p>Get honest reviews from our users about a particular destination.</p>
                </li>
                <li class="flex-item2">
                    <i class="icon fas fa-arrow-up fa-3x"></i>
                    <h3>Shop</h3>
                    <p>Buy all your travel needs from one place.</p>
                </li>
                <li class="flex-item2">
                    <i class="icon fas fa-dollar-sign fa-3x"></i>
                    <h3>Bucket List</h3>
                    <p>Never forget to note down your plans.</p>
                </li>
            </ul>
            <div class="howitwork">
            <h3 style={{color:"black"}}>How it works</h3>
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