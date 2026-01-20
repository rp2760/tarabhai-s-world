"use client";

import { useState, useEffect, useCallback, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import Navbar from "../components/Navbar";

// Separate component that uses useSearchParams
function ShopContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 12,
    totalPages: 1
  });

  const [activeFilters, setActiveFilters] = useState({
    brands: [],
    minPrice: 0,
    maxPrice: 100000,
    rating: 0,
    sortBy: "newest"
  });

  // Use ref to track if initial fetch has been done
  const initialFetchDone = useRef(false);

  // Fetch products - stable function that doesn't change
  const fetchProducts = useCallback(async (filters, page = 1) => {
    try {
      setLoading(true);

      const params = new URLSearchParams();

      if (category) params.append("category", category);

      // Handle multiple brands as comma-separated
      if (filters.brands && filters.brands.length > 0) {
        params.append("brand", filters.brands.join(','));
      }

      if (filters.minPrice > 0) params.append("minPrice", filters.minPrice);
      if (filters.maxPrice < 100000) params.append("maxPrice", filters.maxPrice);
      if (filters.rating > 0) params.append("minRating", filters.rating);
      if (filters.sortBy) params.append("sortBy", filters.sortBy);

      params.append("limit", 12);
      params.append("page", page);

      const res = await fetch(`/api/products?${params.toString()}`);
      const data = await res.json();

      setProducts(data.products || []);
      setPagination(data.pagination || {
        total: 0,
        page: 1,
        limit: 12,
        totalPages: 1
      });
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, [category]);

  // Initial load - only run once when category changes
  useEffect(() => {
    // Reset the initial fetch flag when category changes
    initialFetchDone.current = false;
    
    // Reset filters when category changes
    setActiveFilters({
      brands: [],
      minPrice: 0,
      maxPrice: 100000,
      rating: 0,
      sortBy: "newest"
    });
    
    fetchProducts({
      brands: [],
      minPrice: 0,
      maxPrice: 100000,
      rating: 0,
      sortBy: "newest"
    }, 1);
    
    initialFetchDone.current = true;
  }, [category, fetchProducts]);

  // Handle filter change
  const handleFilterChange = (filters) => {
    setActiveFilters(filters);
    fetchProducts(filters, 1);
    setShowFilters(false); // Close mobile filter
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    fetchProducts(activeFilters, newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Count active filters
  const getActiveFilterCount = () => {
    let count = 0;
    if (activeFilters.brands && activeFilters.brands.length > 0) count++;
    if (activeFilters.minPrice > 0 || activeFilters.maxPrice < 100000) count++;
    if (activeFilters.rating > 0) count++;
    return count;
  };

  // Remove individual filter
  const removeFilter = (type, value = null) => {
    let newFilters = { ...activeFilters };

    if (type === 'brand' && value) {
      newFilters.brands = activeFilters.brands.filter(b => b !== value);
    } else if (type === 'rating') {
      newFilters.rating = 0;
    } else if (type === 'price') {
      newFilters.minPrice = 0;
      newFilters.maxPrice = 100000;
    }

    handleFilterChange(newFilters);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-6 md:py-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mt-16 md:mt-20 mb-6 md:mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2 capitalize">
                {category ? `${category} Products` : "All Products"}
              </h1>
              <p className="text-gray-600 text-sm md:text-base flex items-center gap-2">
                <span className="font-semibold text-violet-600">{pagination.total}</span>
                products found
                {getActiveFilterCount() > 0 && (
                  <span className="hidden sm:inline-flex items-center gap-1 ml-2 px-2 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-semibold">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                    </svg>
                    {getActiveFilterCount()} active
                  </span>
                )}
              </p>
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="font-semibold text-gray-900">Filters</span>
              {getActiveFilterCount() > 0 && (
                <span className="bg-violet-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {getActiveFilterCount()}
                </span>
              )}
            </button>
          </div>

          {/* Active Filters Chips */}
          {getActiveFilterCount() > 0 && (
            <div className="bg-white rounded-xl shadow-md p-4 md:p-5 border border-gray-200">
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <span className="text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">
                  Active Filters:
                </span>

                {activeFilters.brands && activeFilters.brands.map(brand => (
                  <span
                    key={brand}
                    className="inline-flex items-center gap-1.5 md:gap-2 bg-violet-100 text-violet-700 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium hover:bg-violet-200 transition-colors"
                  >
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    {brand}
                    <button
                      onClick={() => removeFilter('brand', brand)}
                      className="hover:text-violet-900 ml-1"
                    >
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </span>
                ))}

                {activeFilters.rating > 0 && (
                  <span className="inline-flex items-center gap-1.5 md:gap-2 bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium hover:bg-amber-200 transition-colors">
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {activeFilters.rating}★+
                    <button
                      onClick={() => removeFilter('rating')}
                      className="hover:text-amber-900 ml-1"
                    >
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </span>
                )}

                {(activeFilters.minPrice > 0 || activeFilters.maxPrice < 100000) && (
                  <span className="inline-flex items-center gap-1.5 md:gap-2 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium hover:bg-green-200 transition-colors">
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    ₹{activeFilters.minPrice.toLocaleString()} - ₹{activeFilters.maxPrice.toLocaleString()}
                    <button
                      onClick={() => removeFilter('price')}
                      className="hover:text-green-900 ml-1"
                    >
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </span>
                )}

                <button
                  onClick={() => {
                    handleFilterChange({
                      brands: [],
                      minPrice: 0,
                      maxPrice: 100000,
                      rating: 0,
                      sortBy: "newest"
                    });
                  }}
                  className="text-xs md:text-sm text-red-600 hover:text-red-700 font-semibold whitespace-nowrap ml-auto"
                >
                  Clear All
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <ProductFilter
              category={category}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Mobile Filter Overlay */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setShowFilters(false)}>
              <div
                className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between z-10">
                  <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <ProductFilter
                    category={category}
                    onFilterChange={handleFilterChange}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {[...Array(6)].map((_, i) => (
                  <ProductCard key={i} loading={true} />
                ))}
              </div>
            ) : products.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
                <div className="mb-6">
                  <svg
                    className="w-20 h-20 md:w-24 md:h-24 mx-auto text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  No Products Found
                </h3>
                <p className="text-gray-600 mb-6 text-sm md:text-base">
                  Try adjusting your filters
                </p>
                <button
                  onClick={() => {
                    handleFilterChange({
                      brands: [],
                      minPrice: 0,
                      maxPrice: 100000,
                      rating: 0,
                      sortBy: "newest"
                    });
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                  {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {pagination.totalPages > 1 && (
                  <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => handlePageChange(pagination.page - 1)}
                      disabled={pagination.page === 1}
                      className={`w-full sm:w-auto px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold transition-all ${pagination.page === 1
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-violet-50 shadow-md hover:shadow-lg"
                        }`}
                    >
                      ← Previous
                    </button>

                    <div className="flex gap-2 overflow-x-auto py-2 px-2">
                      {[...Array(Math.min(pagination.totalPages, 5))].map((_, i) => {
                        const pageNum = i + 1;
                        return (
                          <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`min-w-[40px] h-10 md:min-w-[44px] md:h-11 rounded-lg font-semibold transition-all ${pagination.page === pageNum
                              ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg scale-105"
                              : "bg-white text-gray-700 hover:bg-violet-50 shadow-md"
                              }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => handlePageChange(pagination.page + 1)}
                      disabled={pagination.page === pagination.totalPages}
                      className={`w-full sm:w-auto px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold transition-all ${pagination.page === pagination.totalPages
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-violet-50 shadow-md hover:shadow-lg"
                        }`}
                    >
                      Next →
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main component with Suspense boundary
export default function ShopPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-6 md:py-10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-16 md:mt-20 mb-6 md:mb-10">
              <div className="h-12 bg-gray-300 rounded-lg animate-pulse mb-4 w-64"></div>
              <div className="h-6 bg-gray-200 rounded animate-pulse w-48"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-4 animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }>
        <ShopContent />
      </Suspense>
    </>
  );
}