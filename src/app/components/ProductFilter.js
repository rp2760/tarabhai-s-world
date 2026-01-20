"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ProductFilter({ 
  onFilterChange, 
  category = null
}) {
  const [brands, setBrands] = useState([]);
  const [priceRange, setPriceRange] = useState({ minPrice: 0, maxPrice: 100000 });
  const [loading, setLoading] = useState(true);

  // Filter states
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceFilter, setPriceFilter] = useState([0, 100000]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [sortBy, setSortBy] = useState("newest");

  // Use ref to store the latest onFilterChange without causing re-renders
  const onFilterChangeRef = useRef(onFilterChange);
  
  useEffect(() => {
    onFilterChangeRef.current = onFilterChange;
  }, [onFilterChange]);

  // Fetch filter metadata on mount
  useEffect(() => {
    async function fetchFilterData() {
      try {
        setLoading(true);
        const url = category 
          ? `/api/products/filters?category=${category}`
          : '/api/products/filters';
        
        const res = await fetch(url);
        const data = await res.json();
        
        setBrands(data.brands || []);
        setPriceRange(data.priceRange || { minPrice: 0, maxPrice: 100000 });
        setPriceFilter([data.priceRange.minPrice || 0, data.priceRange.maxPrice || 100000]);
      } catch (error) {
        console.error("Failed to fetch filter data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFilterData();
  }, [category]);

  // Apply filters - using ref to avoid dependency on onFilterChange
  const applyFilters = useCallback(() => {
    const filters = {
      brands: selectedBrands,
      minPrice: priceFilter[0],
      maxPrice: priceFilter[1],
      rating: ratingFilter,
      sortBy
    };
    onFilterChangeRef.current(filters);
  }, [selectedBrands, priceFilter, ratingFilter, sortBy]);

  // Reset all filters
  const resetFilters = () => {
    setSelectedBrands([]);
    setPriceFilter([priceRange.minPrice, priceRange.maxPrice]);
    setRatingFilter(0);
    setSortBy("newest");
    
    onFilterChangeRef.current({
      brands: [],
      minPrice: priceRange.minPrice,
      maxPrice: priceRange.maxPrice,
      rating: 0,
      sortBy: "newest"
    });
  };

  // Handle brand toggle
  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  // Handle sort change - apply filters immediately
  const handleSortChange = (value) => {
    setSortBy(value);
    // Apply filters with new sort value
    const filters = {
      brands: selectedBrands,
      minPrice: priceFilter[0],
      maxPrice: priceFilter[1],
      rating: ratingFilter,
      sortBy: value // Use the new value directly
    };
    onFilterChangeRef.current(filters);
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-32 mb-6"></div>
        <div className="h-32 bg-gray-200 rounded mb-4"></div>
        <div className="h-32 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
        <button
          onClick={resetFilters}
          className="text-sm text-violet-600 hover:text-violet-700 font-semibold"
        >
          Reset All
        </button>
      </div>

      {/* Sort By */}
      <div className="mb-8">
        <Label className="text-base font-semibold text-gray-900 mb-3 block">
          Sort By
        </Label>
        <Select value={sortBy} onValueChange={handleSortChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select sort order" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="price-low-high">Price: Low to High</SelectItem>
            <SelectItem value="price-high-low">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Price Range Slider */}
      <div className="mb-8 pb-8 border-b border-gray-200">
        <Label className="text-base font-semibold text-gray-900 mb-4 block">
          Price Range
        </Label>
        <div className="px-2">
          <Slider
            value={priceFilter}
            onValueChange={setPriceFilter}
            min={priceRange.minPrice}
            max={priceRange.maxPrice}
            step={100}
            className="mb-4"
          />
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-gray-700">
              ₹{priceFilter[0].toLocaleString()}
            </span>
            <span className="text-gray-500">to</span>
            <span className="font-semibold text-gray-700">
              ₹{priceFilter[1].toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Brand Filter */}
      {brands.length > 0 && (
        <div className="mb-8 pb-8 border-b border-gray-200">
          <Label className="text-base font-semibold text-gray-900 mb-4 block">
            Brand
          </Label>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-3">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() => toggleBrand(brand)}
                />
                <Label
                  htmlFor={`brand-${brand}`}
                  className="text-sm text-gray-700 cursor-pointer hover:text-gray-900"
                >
                  {brand}
                </Label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Rating Filter */}
      <div className="mb-8">
        <Label className="text-base font-semibold text-gray-900 mb-4 block">
          Minimum Rating
        </Label>
        <div className="space-y-3">
          {[4, 3, 2, 1].map((rating) => (
            <div
              key={rating}
              onClick={() => setRatingFilter(rating === ratingFilter ? 0 : rating)}
              className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer transition-all ${
                ratingFilter === rating
                  ? "bg-violet-50 border-2 border-violet-600"
                  : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
              }`}
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < rating ? "text-amber-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm font-medium text-gray-700">
                  & Up
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Filters Button */}
      <Button
        onClick={applyFilters}
        className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-semibold py-3 rounded-xl"
      >
        Apply Filters
      </Button>
    </div>
  );
}