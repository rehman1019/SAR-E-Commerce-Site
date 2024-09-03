// src/components/Footer.jsx

import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright &copy; {new Date().getFullYear()} SAR. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
