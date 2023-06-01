import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../containers/Footer';
import Header from '../containers/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
