// src/components/Cart.jsx

import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import "../App.css";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(AppContext);
  const [isCartEmpty, setIsCartEmpty] = useState(true); // Set initial state to empty

  // Update isCartEmpty whenever cartItems change
  useEffect(() => {
    setIsCartEmpty(cartItems.length === 0);
  }, [cartItems]);

  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Handle the purchase action
  const handlePurchase = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items to purchase.");
      return;
    }
    alert("Successfully purchased!");
    clearCart();
     // Clear the cart after a successful purchase
  };

  // Render when the cart is empty
  if (isCartEmpty) {
    return <p className="empty-cart">Your cart is empty. Please add items. Go to the Products section and Buy now</p>;
  }

  // Render when there are items in the cart
  return (
    <>
      <div className="cart">
        <div className="cart-info">
          <h1>Cart Items List</h1>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <p>{item.category}</p>
                <p>Price: $ {item.price.toFixed(2)}</p>
                <button className="remove-btn" onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="total">
            <h2>Total Price: $ {totalPrice.toFixed(2)}</h2>
          </div>
          <button className="purchase-btn" onClick={handlePurchase}>
            Purchase
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
