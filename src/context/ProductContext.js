// src/context/ProductContext.js
import React, { createContext, useState } from 'react';
import productsData from '../data/products';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);

  const updateProductQuantity = (productId, quantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    );
  };

  return (
    <ProductContext.Provider value={{ products, updateProductQuantity }}>
      {children}
    </ProductContext.Provider>
  );
};
