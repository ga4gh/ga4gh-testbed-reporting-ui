import React from 'react';
import Footer from '../navigation/Footer.js';
import Header from '../navigation/Header.js';

const Layout = ({ children }) => {
  return (
    <div>
      {children}
    <Footer />
    </div>
  );
};

export default Layout;
