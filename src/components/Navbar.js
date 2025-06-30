import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) => location.pathname === path ? 'active-link' : '';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo + Brand */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="GroFresh Logo" className="navbar-logo" />
          <span className="site-name">GroFresh</span>
        </Link>

        {/* Hamburger toggler */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <div className={open ? 'bar open' : 'bar'}></div>
          <div className={open ? 'bar open' : 'bar'}></div>
          <div className={open ? 'bar open' : 'bar'}></div>
        </div>

        {/* Nav Links */}
        <ul className={`navbar-links ${open ? 'open' : ''}`}>
          <li><Link to="/"    className={isActive('/')}>Home</Link></li>
          <li><Link to="/cart"    className={isActive('/cart')}>Cart</Link></li>
          <li><Link to="/profile" className={isActive('/profile')}>Profile</Link></li>
          <li><Link to="/faq"    className={isActive('/faq')}>FAQ</Link></li>
          <li><Link to="/terms-and-conditions" className={isActive('/terms-and-conditions')}>Terms</Link></li>
          <li><Link to="/privacy-policy" className={isActive('/privacy-policy')}>Privacy</Link></li>
          <li className="auth"><Link to="/login"  className={isActive('/login')}>Login</Link></li>
          <li className="auth"><Link to="/signup" className={isActive('/signup')}>Signup</Link></li>
        </ul>
      </div>
    </nav>
  );
}
