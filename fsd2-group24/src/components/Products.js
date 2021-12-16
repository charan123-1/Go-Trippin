import React from 'react';
import ReactDOM from 'react-dom';
import './Products.css'
import { Link } from 'react-router-dom';

function Products(){
    return(
        <>

        <div class="container">
<div class='row'>
    <div class="column">
  <div class="card">
    <div class="imgBx">
      <img src="https://assets.codepen.io/4164355/shoes.png"/>
    </div>
    <div class="contentBx">
      <h2>Nike Shoes</h2>
      <div class="size">
        <h3>Size :</h3>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
      </div>
      <div class="color">
        <h3>Color :</h3>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Link to="/cart">Add to Cart</Link>
    </div>
  </div>
  </div>

  <div class="column">
  <div class="card">
    <div class="imgBx">
      <img src="https://assets.codepen.io/4164355/shoes.png"/>
    </div>
    <div class="contentBx">
      <h2>Puma Shoes</h2>
      <div class="size">
        <h3>Size :</h3>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
      </div>
      <div class="color">
        <h3>Color :</h3>
        <span></span>
        <span></span>
        <span></span>
      </div>
                  <Link to="/cart">Add to Cart</Link>
    </div>
  </div>
  </div>
  <div class="column">
  <div class="card">
    <div class="imgBx">
      <img src="https://assets.codepen.io/4164355/shoes.png"/>
    </div>
    <div class="contentBx">
      <h2>Adidas Shoes</h2>
      <div class="size">
        <h3>Size :</h3>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
      </div>
      <div class="color">
        <h3>Color :</h3>
        <span></span>
        <span></span>
        <span></span>
      </div>
                  <Link to="/cart">Add to Cart</Link>
    </div>
  </div>
  </div>




  </div>

</div>

        </>

    )

}

export default Products;