import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import AdminDashboard from './pages/AdminDashboard';
import Checkout from './pages/Checkout';
import 'animate.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    if (typeof product === 'object') {
      setCartItems(prev => [...prev, product]);
    } else {
      console.warn('Product is invalid or undefined');
    }
  };

  const handleRemoveFromCart = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
  };

  const handleCheckout = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleRemove={handleRemoveFromCart}
              handleCheckout={handleCheckout}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
