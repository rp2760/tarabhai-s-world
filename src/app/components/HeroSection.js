// src/app/components/HeroSection.js
"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Twitter, Music2, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const [sliderProducts, setSliderProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSliderProducts = async () => {
      try {
        const res = await fetch("/api/slider-products");
        const data = await res.json();
        setSliderProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch slider products:", error);
        setLoading(false);
      }
    };

    fetchSliderProducts();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (sliderProducts.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderProducts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderProducts.length]);

  const currentProduct = sliderProducts[currentIndex];
  
  if (loading) {
    return (
      <div className="w-full h-[600px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl animate-pulse" />
    );
  }

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-3xl overflow-hidden shadow-xl p-8 md:p-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Tag */}
          <div className="flex items-center gap-2 text-gray-600">
            <Music2 className="w-5 h-5" />
            <span className="text-sm font-medium">Music is Classic</span>
          </div>

          {/* Main Heading */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              {currentProduct?.name || "Sequoia Inspiring"}
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Musico.
            </h1>
          </div>

          {/* Feature Section */}
          <div className="flex items-start gap-4">
            <div className="text-6xl font-light text-gray-300">01</div>
            <div className="flex-1 pt-4">
              <div className="h-px bg-gray-300 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Clear Sounds</h3>
              <p className="text-sm text-gray-600">
                Making your dream music come true stay with Sequios Sounds!
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/products">
            <button className="group flex items-center gap-3 bg-lime-300 hover:bg-lime-400 text-gray-900 px-6 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              View All Products
              <span className="bg-gray-900 text-lime-300 p-2 rounded-full group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-4">
            <span className="text-sm text-gray-500">Follow us on:</span>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Music2 className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Content - Product Image */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square">
            {/* Decorative circles */}
            <div className="absolute top-10 right-20 w-4 h-4 bg-gray-300 rounded-full" />
            <div className="absolute top-20 left-10 w-3 h-3 bg-gray-400 rounded-full" />
            <div className="absolute bottom-32 right-32 w-5 h-5 bg-indigo-200 rounded-full" />
            <div className="absolute bottom-20 left-20 w-4 h-4 bg-gray-900 rounded-full" />

            {/* Product Image */}
            {currentProduct?.image ? (
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            ) : (
              <div className="relative z-10 w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full shadow-2xl">
                <Music2 className="w-32 h-32 text-white" />
              </div>
            )}

            {/* Product indicator */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-900 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Dots */}
      {sliderProducts.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {sliderProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-gray-900 w-8" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}