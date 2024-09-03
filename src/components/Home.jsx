// src/components/Home.jsx

import React, { useContext } from 'react';
import '../App.css';
import Homeimage from '../assets/Homeimage.webp';
import Products from './Products';
import { AppContext } from '../context/AppContext';

const Home = () => {
  const { query } = useContext(AppContext);

  return (
    <>
      <div className="home">
        <div className="hero-banner">
          <img src={Homeimage} alt="banner" />
        </div>
      </div>
      <Products query={query} />
    </>
  );
};

export default Home;
