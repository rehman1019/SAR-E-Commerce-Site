// src/components/Product.jsx

import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import { Link } from 'react-router-dom';
import { AppContext } from "../context/AppContext";

const Product = () => {
  const location = useLocation();
  const { id } = location.state || {};
  const { addToCart } = useContext(AppContext);
  const [product, setProduct] = useState({});
  const [errmsg, setErrmsg] = useState(false);

  const getSingleData = async () => {
    try {
      if (id) {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } else {
        setErrmsg(true);
      }
    } catch (error) {
      setErrmsg(true);
    }
  };

  useEffect(() => {
    getSingleData();
  }, [id]);

  if (!errmsg) {
    return (
      <div className="product">
        <div className="product-item">
          <button className="back-home"><Link to="/products">Back</Link></button>
            <div className="item-img">
              <img src={product.image} alt={product.category} />
            </div>
            <div className="product-item-info">
              <div>
                <b>Product Title : </b>
                <br />
                {product.title}
              </div>
              <div>
                <b>Category : </b>
                 {product.category}
              </div>
              <div>
                <b>Description : </b> <br />
                {product.description}
              </div>
              <div className="item-price">
                <b>Price : </b> $ {product.price}
              </div>
              <button onClick={() => addToCart(product)} className="cart-btn">
                Add to cart
              </button>
            </div>
          </div>
      </div>
    );
  } else {
    return (
      <div className="red">
        <h1>Something Went Wrong</h1>
      </div>
    );
  }
};

export default Product;
