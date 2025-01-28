import React from 'react';
import Header from './components/Header';
import Category from './components/Category';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Signup from './components/Signin';
import Offers from './components/Offers';
import Help from './components/Help';
import Footer from './components/Footer';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header />
          <Home />
          <Footer/>
        </>
      ),
    },
    {
      path: '/cart',
      element: (
        <>
          <Header />
          <Cart/>
        </>
      ),
    },
    {
      path: '/offers',
      element: (
        <>
          <Header />
          <Offers/>
        </>
      ),
    },
    {
      path: '/help',
      element: (
        <>
          <Header />
          <Help/>
        </>
      ),
    },
    {
      path: '/signin',
      element: (
        <>
          <Header />
          <Signup/>
        </>
      ),
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
