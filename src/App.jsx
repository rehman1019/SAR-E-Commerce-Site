// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Helpcenter from './components/Helpcenter';
import Cart from './components/Cart';
import Account from './components/Account';
import Product from './components/Product';
import EditProfile from './components/EditProfile';

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/helpcenter" element={<Helpcenter />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/account" element={<Account />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
