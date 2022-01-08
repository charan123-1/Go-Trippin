import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import axios from "axios";
export const Cart = (props) => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cart').then(res => {
            return res.json();
        })
            .then(data => {
                console.log(data);
                setCarts(data);
            })
    }, []);
    //Remove Cart Item
    const removeItem = id => {
        const removedArr = [...carts].filter(cart => cart.id !== id);
        setCarts(removedArr);
        axios.delete("http://localhost:5000/cart/" + id).then(res => {
            console.log("Cart Item deleted!!");
            alert("Cart Item Deleted!!")
        }).catch(error => {
            console.log(error);
        })
    };
    //Decrement Quantity of Item
    const decreaseqty = (CartId, newValue, name, price, image, productId) => {
        
        axios.put('http://localhost:5000/cart/' + CartId, {
            "id": CartId,
            "quantity": newValue,
            "name": name,
            "price": price,
            "image": image,
            "productId": productId
        })
            .then(res => {
                console.log(newValue);
            })
            .catch((err) => {
                console.log(err);
            })
        console.log(newValue)
        const newList = carts.map((item) => {
            if (item.id === CartId) {
                const updatedItem = {
                    ...item,
                    "quantity": newValue,
                };

                return updatedItem;
            }

            return item;
        });

        setCarts(newList);
    };

    //Increasing Quantity of Item
    const increaseqty = (CartId, newValue,name,price,image,productId) => {

        axios.put('http://localhost:5000/cart/' + CartId, {
            "id": CartId,
            "quantity": newValue,
            "name": name,
            "price": price,
            "image": image,
            "productId":productId
            
           })
            .then(res => {
                console.log(newValue);
            })
            .catch((err) => {
                console.log(err);
            })
        console.log(newValue)
        const newList = carts.map((item) => {
            if (item.id === CartId) {
                const updatedItem = {
                    ...item,
                    "quantity": newValue,
                };

                return updatedItem;
            }

            return item;
        });

        setCarts(newList);
    };

    //Add all amount
    const addall = () => {
        let total = 0;
        for (var i = 0; i < carts.length; i++){
            total = total+carts[i].quantity * carts[i].price;
        }
        return total
    }

    return(<div className="cart-container">
        <h2>Shopping Cart</h2>
        {carts.length === 0 ? (
            <div className="cart-empty">
                <p>Your cart is currently empty</p>
                <div className="start-shopping">
                    <Link to="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-arrow-left"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                            />
                        </svg>
                        <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        ) : (
            <div>
                <div className="titles">
                    <h3 className="product-title">Product</h3>
                    <h3 className="price">Price</h3>
                    <h3 className="quantity">Quantity</h3>
                    <h3 className="total">Total</h3>
                </div>
                <div className="cart-items">
                    {carts &&
                        carts.map((cartItem) => (
                            <div className="cart-item" key={cartItem.id}>
                                <div className="cart-product">
                                    <img src={cartItem.image} alt={cartItem.name} />
                                    <div>
                                        <h3 className="cartname">{cartItem.name}</h3>
                                        <button onClick={() => removeItem(cartItem.id)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                                <div className="cart-product-price">₹{cartItem.price}</div>
                                <div className="cart-product-quantity">
                                    <button onClick={() => decreaseqty(cartItem.id, cartItem.quantity - 1, cartItem.name, cartItem.price, cartItem.image, cartItem.productId)}>
                                        -
                                    </button>
                                    <div className="count">{cartItem.quantity}</div>
                                    <button onClick={() => increaseqty(cartItem.id, cartItem.quantity + 1, cartItem.name, cartItem.price, cartItem.image, cartItem.productId)}>+</button>
                                </div>
                                <div className="cart-product-total-price">
                                    ₹{cartItem.price * cartItem.quantity}
                                </div>
                            </div>
                        ))}
                </div>
                <div className="cart-summary">
                    {/* <button className="clear-btn" onClick={}>
                        Clear Cart
                    </button> */}
                    <div className="cart-checkout">
                        <div className="subtotal">
                            <span>Subtotal</span>
                                <span className="amount">₹{addall()}</span>
                        </div>
                        {/* <p>Taxes and shipping calculated at checkout</p>
                        <button>Check out</button> */}
                        <div className="continue-shopping">
                            <Link to="/shop">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-arrow-left"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                    />
                                </svg>
                                <span>Continue Shopping</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};