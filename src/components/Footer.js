// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-left">
          <p>&copy; {new Date().getFullYear()} GroFresh. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/faq">FAQ</Link>
          </div>
        </div>

        <div className="footer-right">
          <h5>Contact Us</h5>
          <p><FaPhoneAlt /> +91 9876543210</p>
          <div className="footer-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
