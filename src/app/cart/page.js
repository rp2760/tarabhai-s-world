// src/app/cart/page.js
"use client";

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Loader2, X, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subtotal, setSubtotal] = useState(0);
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/sign-in?redirect_url=/cart');
      return;
    }

    const fetchCart = async () => {
      try {
        const res = await fetch('/api/cart');
        if (res.ok) {
          const data = await res.json();
          setCartItems(data.items || []);
          setSubtotal(data.subtotal || 0);
        }
      } catch (error) {
        console.error('Failed to fetch cart', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [isSignedIn, router]);

  const removeItem = async (productId) => {
    try {
      const res = await fetch(`/api/cart?productId=${productId}`, {
        method: 'DELETE'
      });
      
      if (res.ok) {
        const data = await res.json();
        setCartItems(prev => prev.filter(item => item.productId._id !== productId));
        setSubtotal(data.subtotal);
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
      }
    } catch (error) {
      console.error('Failed to update quantity', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="animate-spin text-indigo-600" size={32} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <ShoppingBag size={48} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
            <Link
              href="/products"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {cartItems.map((item) => (
                  <div key={item.productId._id} className="p-4 border-b flex gap-4">
                    <div className="relative h-24 w-24 flex-shrink-0">
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
                          className="text-lg font-medium hover:text-indigo-600"
                        >
                          {item.productId.name}
                        </Link>
                        <button 
                          onClick={() => removeItem(item.productId._id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <X size={20} />
                        </button>
                      </div>
                      <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <button 
                          onClick={() => updateQuantity(item.productId._id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border rounded-l hover:bg-gray-100"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="w-10 h-8 flex items-center justify-center border-t border-b text-sm">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.productId._id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border rounded-r hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-gray-600">Calculated at checkout</span>
                  </div>
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => router.push('/checkout')}
                  className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 font-medium"
                >
                  Proceed to Checkout
                </button>

                <Link
                  href="/products"
                  className="block text-center text-indigo-600 hover:text-indigo-800 mt-4"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}