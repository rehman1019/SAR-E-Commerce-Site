// src/context/AppContext.jsx

import React, { createContext, useState, useEffect } from "react";

// Create context
export const AppContext = createContext();

// Create provider component
export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem("cartItems")) || []);
  const [user, setUser] = useState({ name: "Aathif", email: "aatif1019@gmail.com", phoneNo: "7396791560" });
  const [query, setQuery] = useState("");
  const [errmsg, setErrmsg] = useState(false);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setErrmsg(true);
      }
    };
    fetchProducts();
  }, []);

  // Update localStorage whenever cart items change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    alert("Added successfully");
  };

  // Remove product from cart
  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]); // Clear the state
    setIsCartEmpty(true)
    localStorage.removeItem("cartItems"); // Clear from localStorage
  };

  // Update user profile
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart, // Added clearCart function here
        user,
        updateUser,
        query,
        setQuery,
        errmsg,
        setErrmsg,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
