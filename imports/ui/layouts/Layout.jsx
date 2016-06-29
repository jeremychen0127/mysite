import React from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

export const Layout =  ({content}) => (
  <div className="app-root">
    <Navbar />
    <br />
    <div className="container">
      {content}
    </div>
    <Footer />
  </div>
);