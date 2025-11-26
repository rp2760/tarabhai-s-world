// src/app/components/CartPreview.js
"use client";

import { SignInButton } from "@clerk/nextjs";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Loader2, X } from 'lucide-react';
import { useUser } from '@clerk/nextjs';

export default function CartPreview({ onClose , onItemCountChange }) {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subtotal, setSubtotal] = useState(0);
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      const fetchCart = async () => {
        try {
          const res = await fetch('/api/cart');
          if (res.ok) {
            const data = await res.json();
            setCartItems(data.items || []);
            setSubtotal(data.subtotal || 0);
            onItemCountChange(data.totalItems || 0);
          }
        } catch (error) {
          console.error('Failed to fetch cart', error);
        } finally {
          setLoading(false);
        }
      };
      fetchCart();
    } else {
      setLoading(false);
    }
  }, [isSignedIn, onItemCountChange]);

  const removeItem = async (productId) => {
    try {
      const res = await fetch(`/api/cart?productId=${productId}`, {
        method: 'DELETE'
      });
      
      if (res.ok) {
        const data = await res.json();
        setCartItems(prev => prev.filter(item => item.productId._id !== productId));
        setSubtotal(data.subtotal);
        onItemCountChange(data.totalItems);
      }
    } catch (error) {
      console.error('Failed to remove item', error);
    }
  };

  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    try {
      const res = await fetch('/api/cart', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId, quantity: newQuantity })
      });
      
      if (res.ok) {
        const data = await res.json();
        setCartItems(prev => 
          prev.map(item => 
            item.productId._id === productId 
              ? { ...item, quantity: newQuantity } 
              : item
          )
        );
        setSubtotal(data.subtotal);
        onItemCountChange(data.totalItems);
      }
    } catch (error) {
      console.error('Failed to update quantity', error);
    }
  };

  if (!isSignedIn) {
    return (
      <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50 p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-900 hover:text-gray-700">Your Cart</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={18} />
          </button>
        </div>
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">Please sign in to view your cart</p>
        
          <SignInButton mode="modal">
                  <button  className="text-indigo-600 hover:text-indigo-800 font-medium">
                    Sign in
                  </button>
                </SignInButton>
        
{/*         
          <Link 
            href="/" 
            className="text-indigo-600 hover:text-indigo-800 font-medium"
            onClick={onClose}
          >
            Sign In
          </Link> */}
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50 p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">Your Cart</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={18} />
          </button>
        </div>
        <div className="flex justify-center py-8">
          <Loader2 className="animate-spin text-indigo-600" size={24} />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">Your Cart ({cartItems.length})</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={18} />
          </button>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="p-8 text-center">
          <p className="text-gray-600">Your cart is empty</p>
          <Link 
            href="/products" 
            className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium"
            onClick={onClose}
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="max-h-96 overflow-y-auto">
            {cartItems.map((item) => (
              <div key={item.productId._id} className="p-4 border-b flex gap-3">
                <div className="relative h-16 w-16 flex-shrink-0">
                  <Image
                    src={item.productId.image}
                    alt={item.productId.name}
                    fill
                    className="object-contain"
                   unoptimized={true}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <Link 
                      href={`/products/${item.productId._id}`}
                      className="text-sm font-medium hover:text-indigo-600 line-clamp-1"
                      onClick={onClose}
                    >
                      {item.productId.name}
                    </Link>
                    <button 
                      onClick={() => removeItem(item.productId._id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">₹{item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-1">
                    <button 
                      onClick={() => updateQuantity(item.productId._id, item.quantity - 1)}
                      className="w-6 h-6 flex items-center justify-center border rounded-l hover:bg-gray-100"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="w-8 h-6 flex items-center justify-center border-t border-b text-sm">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => updateQuantity(item.productId._id, item.quantity + 1)}
                      className="w-6 h-6 flex items-center justify-center border rounded-r hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))} 
          </div>
          <div className="p-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Subtotal:</span>
              <span className="font-medium">₹{subtotal.toFixed(2)}</span>
            </div>
            <Link
              href="/cart"
              className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 rounded-md transition-colors"
              onClick={onClose}
            >
              View Cart
            </Link>
          </div>
        </>
      )}
    </div>
  );
}