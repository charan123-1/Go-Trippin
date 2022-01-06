import React from 'react';
import './Aboutpage.css';
//import A from '../img/A.jpg'
function Aboutpage(){
    
    return(
        <div class="about">
            <ul class="flex-container">
                <li class="aboutus">
                    <h1>About Us</h1>
                    <p>Our team provides a platform for young entrepreneurs to showcase their product and attract audience who might be interested in what they can offer.</p>
                </li>
                <li class="aboutuspic">
                    
                </li>
             
            </ul>
            <ul class="flex-container2">
                <li class="flex-item2">
                    <i class="icon far fa-check-circle fa-3x"></i>
                    <h3>Easy to use.</h3>
                    <p>All components are well explained and known.</p>
                </li>
                <li class="flex-item2">
                    <i class="icon fas fa-arrow-up fa-3x"></i>
                    <h3>Grow your buisness</h3>
                    <p>Reach exponential heights with your buisness.</p>
                </li>
                <li class="flex-item2">
                    <i class="icon fas fa-dollar-sign fa-3x"></i>
                    <h3>Get additional support</h3>
                    <p>Need extra help? Our funds section have you covered</p>
                </li>
            </ul>
            <div class="howitwork">
            <h3>How it works</h3>
            <p>Our website users can submit their self-produced articles, product details and videos for promoting their own business on this platform. List of submissions can be reviewed and users will be able to promote their ideas.</p>
            <ul  class="feature" >
                <li >
                We provide users an option where they will be able to give reviews and rating to the startups.  
                </li>
                <li>
                Users are given an option to give their contact details like email and submit queries.   
                </li>
                <li>
                We embrace people who come up with unique thoughts and insights. We help them to access funding that keeps the initiatives to scale faster. This contribution passionately helps for the betterment that keeps the spirits ahead.  
                </li>
                <li>
                We generate employment by introducing an option for Job opportunities.
                </li>
            </ul> 
            
            </div>
        </div>
        
        
    );
}
export default Aboutpage;