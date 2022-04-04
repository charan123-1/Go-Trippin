import React,{useState,useEffect} from 'react';
import './Products.css'
import  ProductCard  from './ProductCard';

function Products() {
  const[items, setItems] =useState([])
  // reading json data
  useEffect(() => {
    fetch('http://localhost:4000/footwear').then(res => {
      return res.json();
    })
      .then(data => {
        console.log(data);
        setItems(data);
      })
  }, [])
  
  return (
    <div className='shoes'>
      <h1>Footwear</h1>
      <div className="products__wrapper">
        {/* Iterating through the items using map function and returning it */}
        {items.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
        </div>
</div >
    )

}
export default Products;