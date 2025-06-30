// src/pages/AboutUs.js
import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-page container mt-4">
      <h1 className="text-center mb-4">About GroFresh</h1>

      <div className="about-section">
        <p>
          Welcome to <strong>GroFresh</strong> — your trusted online grocery store. 
          We are committed to delivering fresh groceries, fruits, vegetables, and everyday essentials directly to your doorstep.
        </p>
        <p>
          Our mission is to make grocery shopping easier, faster, and more affordable for everyone.
          With an easy-to-use platform and wide range of products, we ensure that your experience is smooth and satisfying.
        </p>
        <p>
          Why choose GroFresh?
        </p>
        <ul>
          <li>Fresh and quality products</li>
          <li>Fast and timely delivery</li>
          <li>Affordable prices and amazing deals</li>
          <li>Easy returns and customer-first policies</li>
        </ul>
        <p>
          Thank you for trusting GroFresh. We promise to keep bringing you the best grocery shopping experience every day!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
