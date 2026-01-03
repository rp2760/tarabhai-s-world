// src/context/CartContext.js
"use client";

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const { isSignedIn } = useUser();

   const fetchCartCount = useCallback(async () => {
    if (!isSignedIn) {
      setCartCount(0);
      return;
    }
    
    try {
      const res = await fetch('/api/cart');
      if (res.ok) {
        const data = await res.json();
        setCartCount(data.totalItems || 0);
      }
    } catch (error) {
      console.error('Failed to fetch cart count', error);
    }
  }, [isSignedIn]);

  useEffect(() => {
    fetchCartCount();
  }, [fetchCartCount]); 

  const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <CartContext.Provider value={{ cartCount, updateCartCount, refreshCart: fetchCartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}