import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products';
import './Home.css';
import AdCarousel from '../components/AdCarousel'; // make sure path is correct

function Home({ handleAddToCart }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  useEffect(() => {
    setFilteredProducts(
      productsData.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to GroFresh</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Ad Carousel Section */}
      <AdCarousel />

      {/* Product Grid Section */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              handleAdd={handleAddToCart}
            />
          ))
        ) : (
          <p className="no-products">No products found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
