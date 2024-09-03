// src/components/Products.jsx

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { AppContext } from "../context/AppContext";

const Products = () => {
  const { products, query, errmsg } = useContext(AppContext);

  if (!errmsg) {
    return (
      <div className="products">
        <div className="products-info">
          <h1>Our Products</h1>
          <div className="products-list">
            {products
              .filter((product) =>
                product.category.toLowerCase().includes(query)
              )
              .map((product) => (
                <div key={product.id} className="product-card">
                  {/* Pass the product ID as state to the Link */}
                  <Link to="/product" state={{ id: product.id }}>
                    <img src={product.image} alt={product.category} />
                    <h3>{product.category}</h3>
                    <p>$ {product.price}</p>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="net-slow">
        <h3>Unable to fetch data, please check your internet connection</h3>
      </div>
    );
  }
};

export default Products;
