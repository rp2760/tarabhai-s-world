// src/app/components/ComparisonModal.js
'use client';

import { useComparison } from '../../context/ComparisonContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ComparisonModal({ isOpen, onClose }) {
  const { comparisonProducts, removeFromComparison, clearComparison } = useComparison();
  const [activeFeature, setActiveFeature] = useState(0);
  
  if (!isOpen) return null;

  const featuresToCompare = [
    'features',
    'currentPrice',
    'originalPrice',
    'description',
    'brand',
    'color',
    'size',
    'weight',
    'dimensions',
    'shippingCharge',
    'deliveryTime',
    'inStock'
  ];

  // Add navigation dots for mobile
  const totalFeatures = featuresToCompare.length;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden border border-white/20 dark:border-gray-700/50">
        {/* Header */}
        <div className="flex justify-between items-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border-b border-white/30 dark:border-gray-700/30 flex-shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Product Comparison</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Compare {comparisonProducts.length} product{comparisonProducts.length !== 1 ? 's' : ''}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-white/50 dark:hover:bg-gray-700/50"
            aria-label="Close comparison"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile feature navigation */}
        {comparisonProducts.length > 0 && (
          <div className="md:hidden flex justify-center py-3 bg-white/50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              {featuresToCompare.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    activeFeature === index ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to feature ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Content - This is the scrollable area */}
        <div className="flex-1 overflow-auto">
          {comparisonProducts.length === 0 ? (
            <div className="flex items-center justify-center h-full p-6">
              <div className="bg-white/50 dark:bg-gray-800/50 p-8 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 text-center max-w-md">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-indigo-500 dark:text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">No products selected for comparison</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  Add products to compare by clicking the compare icon on product cards
                </p>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto h-full">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                    <th className="text-left p-5 text-gray-700 dark:text-gray-300 font-semibold min-w-[200px] sticky left-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm z-10 border-r border-gray-200 dark:border-gray-700">
                      
                    </th>
                    {comparisonProducts.map((product, index) => (
                      <th
                        key={product._id}
                        className="text-center p-5 relative group border-r border-gray-200 dark:border-gray-700 last:border-r-0"
                      >
                        <button
                          onClick={() => removeFromComparison(product._id)}
                          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50 z-20"
                          title="Remove from comparison"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                        <div className="px-2">
                          <div className="relative h-40 w-full mb-4 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                              unoptimized
                            />
                          </div>
                          <h3 className="font-bold text-gray-800 dark:text-white text-lg mb-2 line-clamp-2">
                            {product.name}
                          </h3>
                          <div className="flex items-center justify-center">
                            <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-xs">
                              {product.category}
                            </span>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featuresToCompare.map((feature, idx) => (
                    <tr
                      key={feature  }
                      className={idx % 2 === 0 ? 'bg-gray-50/50 dark:bg-gray-800/30' : 'bg-white/30 dark:bg-gray-900/20'}
                      id={`feature-${idx}`}
                    >
                      <td className="p-4 text-gray-700 dark:text-gray-300 font-medium capitalize sticky left-0 bg-inherit backdrop-blur-sm border-r border-gray-200 dark:border-gray-700 z-10">
                        {feature.replace(/([A-Z])/g, '$1').trim()}
                      </td>
                      {comparisonProducts.map(product => (
                        <td
                          key={`${product._id}-${feature}`}
                          className="p-4 text-center border-r border-gray-200 dark:border-gray-700 last:border-r-0"
                        >
                          {renderFeatureValue(product, feature)}
                        </td>
                      ))}
                    </tr>
                  ))}
                  
                  {/* Action row */}
                  <tr className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                    <td className="p-4 sticky left-0 bg-inherit border-r border-gray-200 dark:border-gray-700"></td>
                    {comparisonProducts.map(product => (
                      <td
                        key={`${product._id}-actions`}
                        className="p-4 text-center border-r border-gray-200 dark:border-gray-700 last:border-r-0"
                      >
                        <div className="flex flex-col gap-2">
                          <Link
                            href={`/products/${product._id}`}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                            onClick={onClose}
                          >
                            View Details
                          </Link>
                          <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors text-sm">
                            Add to Cart
                          </button>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/30 dark:border-gray-700/30 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm flex justify-between items-center flex-shrink-0">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Compare up to 4 products at once
          </div>
          <div className="flex gap-3">
            <button
              onClick={clearComparison}
              className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={comparisonProducts.length === 0}
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderFeatureValue(product, feature) {
  const value = product[feature];
  
  if (feature === 'currentPrice') {
    return (
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold text-gray-800 dark:text-white">₹{value}</span>
        {product.originalPrice > value && (
          <span className="text-sm text-gray-500 dark:text-gray-400 line-through">₹{product.originalPrice}</span>
        )}
      </div>
    );
  }
  
  if (feature === 'originalPrice') {
    return null; // We already show original price with current price
  }
  
  if (feature === 'inStock') {
    return value ? (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
        In Stock
      </span>
    ) : (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
        Out of Stock
      </span>
    );
  }
  
  if (feature === 'description') {
    return <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">{value}</p>;
  }
  
  if (feature === 'shippingCharge') {
    return value === 0 ? (
      <span className="text-green-600 dark:text-green-400 font-medium">Free</span>
    ) : (
      <span>₹{value}</span>
    );
  }
  
  if (feature === 'name') {
    return null; // We already show name in the header
  }
  
  return <span className="text-gray-700 dark:text-gray-300">{value || '-'}</span>;
}