import React from 'react';
import Global from '../style/global';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <Global />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;