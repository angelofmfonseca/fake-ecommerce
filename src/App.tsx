import React, { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { getProducts } from './services/products/productsSlice';
import GlobalStyles from './styles/GlobalStyles';

const Layout = lazy(() => import('./Layout'));
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Product = lazy(() => import('./pages/Product'));
const Cart = lazy(() => import('./pages/Cart'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Loading = lazy(() => import('./components/Loading'));

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="products"
            element={
              <Suspense fallback={<Loading />}>
                <Products />
              </Suspense>
            }
          />
          <Route
            path="product"
            element={
              <Suspense fallback={<Loading />}>
                <Product />
              </Suspense>
            }
          />
          <Route
            path="cart"
            element={
              <Suspense fallback={<Loading />}>
                <Cart />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </main>
  );
};

export default App;
