import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home.js'
import Nopage from './page/Nopage.js'
import Singleproduct from './page/Singleproduct.js';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import Contact from './page/Contact.js';
import About from './page/About.js';
import Product from './page/Product.js';
import Gototop from './component/Gototop.js';
import Cart from './page/Cart.js';

const App = () => {
  return (
    <div>
      <Gototop />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/singleproduct/:id' element={<Singleproduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App