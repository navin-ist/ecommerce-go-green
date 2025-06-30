import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom'; // 👈 Import navigate

export default function Signup() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate(); // 👈 Initialize navigate

  const phonePattern = /^[6-9]\d{9}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const errs = {};
    if (!values.name.trim()) {
      errs.name = 'Name is required';
    }
    if (!emailPattern.test(values.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!phonePattern.test(values.phone)) {
      errs.phone = 'Enter a valid 10‑digit Indian phone number';
    }
    if (values.password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }
    return errs;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(v => ({ ...v, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem('user', JSON.stringify(values));
      setShowToast(true);

      // Delay for toast display, then navigate to home
      setTimeout(() => {
        setShowToast(false);
        navigate('/'); // 👈 Redirect to Home page
      }, 2000);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              className={errors.name ? 'invalid' : ''}
              placeholder="Your name"
            />
            {errors.name && <small className="error">{errors.name}</small>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className={errors.email ? 'invalid' : ''}
              placeholder="e.g. john.doe@example.com"
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              className={errors.phone ? 'invalid' : ''}
              placeholder="e.g. 9876543210"
            />
            {errors.phone && <small className="error">{errors.phone}</small>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className={errors.password ? 'invalid' : ''}
            />
            {errors.password && <small className="error">{errors.password}</small>}
          </div>

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>
      </div>

      {showToast && <div className="toast">Signed up successfully! Redirecting...</div>}
    </div>
  );
}
