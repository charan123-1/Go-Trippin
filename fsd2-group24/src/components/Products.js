import React,{useState,useEffect} from 'react';
import './Products.css'
import  ProductCard  from './ProductCard';

function Products() {
  const[items, setItems] =useState([])
  // read json data
  useEffect(() => {
    fetch('http://localhost:5000/productItems').then(res => {
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
        {items.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
        </div>
</div >
    )

}
export default Products;