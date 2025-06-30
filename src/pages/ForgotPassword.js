import React, { useState } from 'react';
import './AuthPages.css'; // Optional: if you want nice form style

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Simulate sending reset link
    setMessage('Password reset link sent to your email (simulation).');
    setEmail('');
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword} className="auth-form">
        <div className="form-group">
          <label>Enter your email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Send Reset Link</button>
      </form>
      {message && <div className="alert alert-success mt-3">{message}</div>}
    </div>
  );
}

export default ForgotPassword;
