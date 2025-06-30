// src/pages/Checkout.js
import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect back if cart is empty
  useEffect(() => {
    if (cart.length === 0) {
      navigate('/cart');
    }
  }, [cart, navigate]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleConfirm = () => {
    if (!currentUser) {
      alert('Please login to confirm your order.');
      return navigate('/login');
    }

    // Save to orders in localStorage
    const allOrders = JSON.parse(localStorage.getItem('orders') || '{}');
    const userKey = currentUser.phone;
    const userOrders = allOrders[userKey] || [];
    const newOrder = {
      date: new Date().toLocaleString(),
      items: cart,
      total,
    };
    allOrders[userKey] = [...userOrders, newOrder];
    localStorage.setItem('orders', JSON.stringify(allOrders));

    // Clear cart and redirect
    clearCart();
    alert('Order confirmed! Thank you for shopping.');
    navigate('/profile');
  };

  return (
    <div className="container checkout-page mt-4">
      <h2 className="text-center mb-4">Checkout</h2>
      <ul className="list-group mb-3">
        {cart.map(item => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{item.name}</strong> x {item.quantity}
            </div>
            <span>₹{item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-between align-items-center">
        <h4>Total: ₹{total}</h4>
        <button className="btn btn-success btn-lg" onClick={handleConfirm}>
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
