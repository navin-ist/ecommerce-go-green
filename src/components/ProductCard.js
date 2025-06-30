import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, handleAdd }) => {
  const [showToast, setShowToast] = useState(false);

  const onAdd = () => {
    if (typeof handleAdd === 'function') {
      handleAdd(product);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } else {
      console.warn('handleAdd is not a function');
    }
  };

  return (
    <>
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
         {/* Rating */}
      <div className="rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`star ${i < Math.round(product.rating / 20) ? 'filled' : ''}`}>
            ★
          </span>
        ))}
        <span className="rating-percent"> {product.rating}%</span>
      </div>
        <p className="product-price">₹{product.price}</p>
        <button className="add-to-cart-btn" onClick={onAdd}>
          Add to Cart
        </button>
      </div>

      {showToast && (
        <div className="add-toast">
          <strong>{product.name}</strong> added to cart!
        </div>
      )}
    </>
  );
};

export default ProductCard;
