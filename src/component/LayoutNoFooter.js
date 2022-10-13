import React from 'react';
import Global from '../style/global';
import Header from './Header';

function LayoutNoFooter({ children }) {
  return (
    <>
      <Global />
      <Header />
      {children}
    </>
  );
}

export default LayoutNoFooter;