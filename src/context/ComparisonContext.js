// src/context/ComparisonContext.js
'use client';
import React, { createContext, useContext, useState } from 'react';

const ComparisonContext = createContext();

export function ComparisonProvider({ children }) {
  const [comparisonProducts, setComparisonProducts] = useState([]);

  const addToComparison = (product) => {
    if (comparisonProducts.length < 4 && !comparisonProducts.some(p => p._id === product._id)) {
      setComparisonProducts([...comparisonProducts, product]);
    }
  };

  const removeFromComparison = (productId) => {
    setComparisonProducts(comparisonProducts.filter(p => p._id !== productId));
  };

  const clearComparison = () => {
    setComparisonProducts([]);
  };

  return (
    <ComparisonContext.Provider value={{
      comparisonProducts,
      addToComparison,
      removeFromComparison,
      clearComparison,
      canAddMore: comparisonProducts.length < 4
    }}>
      {children}
    </ComparisonContext.Provider>
  );
}

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
};