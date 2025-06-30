import React from 'react';
import './Cart.css'; // Ensure you have matching styles

function Cart({ cartItems = [], handleRemove, handleCheckout }) {
  // Merge duplicates and calculate quantities
  const mergedCart = cartItems.reduce((acc, item) => {
    const existing = acc.find(p => p.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const getTotalPrice = () =>
    mergedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const checkoutAlert = () => {
    alert('✅ Order placed successfully!');
    handleCheckout();
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Your Cart</h1>
      {mergedCart.length === 0 ? (
        <p className="text-center">Your cart is empty!</p>
      ) : (
        <>
          <div className="row g-4">
            {mergedCart.map((item, index) => (
              <div key={item.id} className="col-md-3 col-sm-6">
                <div className="product-card shadow animate__animated animate__fadeIn d-flex flex-column h-100 justify-content-between">
                  <img src={item.image} alt={item.name} className="product-image" />
                  <div className="px-3 py-2">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>Price: ₹{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Total: ₹{item.price * item.quantity}</p>
                  </div>
                  <button className="btn btn-danger remove-btn" onClick={() => handleRemove(index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <h3>Total: ₹{getTotalPrice()}</h3>
            <button className="btn btn-success checkout-btn mt-2" onClick={checkoutAlert}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
