// src/app/checkout/page.js
"use client";

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Loader2, MapPin, CreditCard, Truck } from 'lucide-react';

export default function CheckoutPage() {
  const [step, setStep] = useState(1); // 1: Address, 2: Order Summary, 3: Payment
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState({
    fullName: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    phoneNumber: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('');

  const { user, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/sign-in?redirect_url=/checkout');
      return;
    }

    const fetchCart = async () => {
      try {
        const res = await fetch('/api/cart');
        if (res.ok) {
          const data = await res.json();
          setCartItems(data.items || []);
          setSubtotal(data.subtotal || 0);
          
          // Calculate shipping and tax
          const shippingCost = data.subtotal > 500 ? 0 : 50;
          const taxAmount = data.subtotal * 0.18; // 18% GST
          const totalAmount = data.subtotal + shippingCost + taxAmount;
          
          setShipping(shippingCost);
          setTax(taxAmount);
          setTotal(totalAmount);
        }
      } catch (error) {
        console.error('Failed to fetch cart', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [isSignedIn, router]);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
  };

  // Update the handlePlaceOrder function in src/app/checkout/page.js
const handlePlaceOrder = async () => {
  if (!paymentMethod) {
    alert('Please select a payment method');
    return;
  }

  setProcessing(true);
  try {
    const orderData = {
      items: cartItems.map(item => ({
        productId: item.productId._id,
        quantity: item.quantity,
        price: item.price,
        name: item.productId.name,
        image: item.productId.image
      })),
      address,
      payment: { method: paymentMethod },
      subtotal,
      shipping,
      tax,
      total
    };

    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    });

    if (res.ok) {
      const order = await res.json();
      
      // Clear cart after successful order
      const clearRes = await fetch('/api/cart/clear', { 
        method: 'POST' 
      });
      
      if (clearRes.ok) {
        // Redirect to order confirmation page
        router.push(`/order-confirmation/${order.orderId}`);
      } else {
        throw new Error('Failed to clear cart');
      }
    } else {
      const error = await res.json();
      alert(`Failed to place order: ${error.error}`);
    }
  } catch (error) {
    console.error('Failed to place order', error);
    alert('Failed to place order. Please try again.');
  } finally {
    setProcessing(false);
  }
};

  

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="animate-spin text-indigo-600" size={32} />
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-6">Add some items to your cart before checkout.</p>
          <button 
            onClick={() => router.push('/products')}
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        
        {/* Progress Steps */}
        <div className="flex justify-between mb-8 relative">
          <div className="flex-1 flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              <MapPin size={16} />
            </div>
            <div className={`ml-2 text-sm ${step >= 1 ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>Address</div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="h-0.5 bg-gray-300 flex-1 mx-2"></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              <Truck size={16} />
            </div>
            <div className={`ml-2 text-sm ${step >= 2 ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>Order Summary</div>
          </div>
          <div className="flex-1 flex items-center justify-end">
            <div className="h-0.5 bg-gray-300 flex-1 mx-2"></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              <CreditCard size={16} />
            </div>
            <div className={`ml-2 text-sm ${step >= 3 ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>Payment</div>
          </div>
        </div>

        {/* Step 1: Address Form */}
        {step === 1 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
            <form onSubmit={handleAddressSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={address.fullName}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={address.phoneNumber}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={address.streetAddress}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={address.city}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input
                    type="text"
                    name="state"
                    value={address.state}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={address.postalCode}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 font-medium"
              >
                Continue to Order Summary
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Order Summary */}
        {step === 2 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            
            <div className="border-b pb-4 mb-4">
              <h3 className="font-medium mb-2">Shipping Address</h3>
              <p className="text-gray-600">
                {address.fullName}<br />
                {address.streetAddress}<br />
                {address.city}, {address.state} {address.postalCode}<br />
                {address.phoneNumber}
              </p>
              <button 
                onClick={() => setStep(1)}
                className="mt-2 text-indigo-600 hover:text-indigo-800 text-sm"
              >
                Change address
              </button>
            </div>

            <h3 className="font-medium mb-2">Items</h3>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.productId._id} className="flex gap-4">
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
                    <p className="font-medium">{item.productId.name}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (18%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-medium text-lg border-t pt-2">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => setStep(3)}
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 font-medium mt-6"
            >
              Continue to Payment
            </button>
          </div>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-medium mb-4">Payment Method</h2>
            
            <div className="space-y-3 mb-6">
              <div 
                className={`border rounded-md p-4 cursor-pointer ${paymentMethod === 'credit_card' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300'}`}
                onClick={() => handlePaymentMethodSelect('credit_card')}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${paymentMethod === 'credit_card' ? 'border-indigo-600 bg-indigo-600' : 'border-gray-400'}`}>
                    {paymentMethod === 'credit_card' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <span>Credit Card</span>
                </div>
              </div>
              
              <div 
                className={`border rounded-md p-4 cursor-pointer ${paymentMethod === 'debit_card' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300'}`}
                onClick={() => handlePaymentMethodSelect('debit_card')}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${paymentMethod === 'debit_card' ? 'border-indigo-600 bg-indigo-600' : 'border-gray-400'}`}>
                    {paymentMethod === 'debit_card' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <span>Debit Card</span>
                </div>
              </div>
              
              <div 
                className={`border rounded-md p-4 cursor-pointer ${paymentMethod === 'upi' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300'}`}
                onClick={() => handlePaymentMethodSelect('upi')}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${paymentMethod === 'upi' ? 'border-indigo-600 bg-indigo-600' : 'border-gray-400'}`}>
                    {paymentMethod === 'upi' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <span>UPI</span>
                </div>
              </div>
              
              <div 
                className={`border rounded-md p-4 cursor-pointer ${paymentMethod === 'net_banking' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300'}`}
                onClick={() => handlePaymentMethodSelect('net_banking')}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${paymentMethod === 'net_banking' ? 'border-indigo-600 bg-indigo-600' : 'border-gray-400'}`}>
                    {paymentMethod === 'net_banking' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <span>Net Banking</span>
                </div>
              </div>
              
              <div 
                className={`border rounded-md p-4 cursor-pointer ${paymentMethod === 'cod' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300'}`}
                onClick={() => handlePaymentMethodSelect('cod')}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${paymentMethod === 'cod' ? 'border-indigo-600 bg-indigo-600' : 'border-gray-400'}`}>
                    {paymentMethod === 'cod' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <span>Cash on Delivery</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(2)}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 font-medium"
              >
                Back
              </button>
              <button
                onClick={handlePlaceOrder}
                disabled={processing || !paymentMethod}
                className="flex-1 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 font-medium disabled:bg-indigo-400 disabled:cursor-not-allowed"
              >
                {processing ? (
                  <div className="flex items-center justify-center">
                    <Loader2 className="animate-spin mr-2" size={16} />
                    Processing...
                  </div>
                ) : (
                  'Place Order'
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}