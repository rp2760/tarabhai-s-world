// src/app/components/ReviewList.jsx
"use client";

import { useState, useEffect } from "react";
import { ThumbsUp, CheckCircle } from "lucide-react";

export default function ReviewList({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [stats, setStats] = useState({
    averageRating: 0,
    totalReviews: 0,
    ratingDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
  });
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("recent");
  const [filterRating, setFilterRating] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, [productId, sortBy, filterRating]);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      let url = `/api/reviews?productId=${productId}&sortBy=${sortBy}`;
      if (filterRating) {
        url += `&rating=${filterRating}`;
      }
      
      const res = await fetch(url);
      const data = await res.json();
      
      setReviews(data.reviews || []);
      setStats({
        averageRating: data.averageRating || 0,
        totalReviews: data.totalReviews || 0,
        ratingDistribution: data.ratingDistribution || { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
      });
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleHelpful = async (reviewId) => {
    try {
      const res = await fetch("/api/reviews/helpful", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, reviewId })
      });
      
      if (res.ok) {
        fetchReviews();
      }
    } catch (error) {
      console.error("Failed to update helpful vote:", error);
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const getPercentage = (count) => {
    if (stats.totalReviews === 0) return 0;
    return Math.round((count / stats.totalReviews) * 100);
  };

  if (loading) {
    return (
      <div className="py-10">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="h-20 bg-gray-200 rounded"></div>
          <div className="h-20 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Customer Reviews</h2>

      {/* Rating Summary */}
      <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Average Rating */}
          <div className="text-center">
            <div className="text-6xl font-bold text-gray-900 mb-2">
              {stats.averageRating.toFixed(1)}
            </div>
            <div className="flex justify-center mb-3">
              {renderStars(Math.round(stats.averageRating))}
            </div>
            <p className="text-gray-600">
              Based on {stats.totalReviews} {stats.totalReviews === 1 ? 'review' : 'reviews'}
            </p>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-3">
                <button
                  onClick={() => setFilterRating(filterRating === star ? null : star)}
                  className={`flex items-center gap-1 text-sm font-medium hover:text-indigo-600 ${
                    filterRating === star ? "text-indigo-600" : "text-gray-600"
                  }`}
                >
                  {star} <span className="text-yellow-400">★</span>
                </button>
                <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-yellow-400 h-full transition-all"
                    style={{ width: `${getPercentage(stats.ratingDistribution[star])}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-12 text-right">
                  {getPercentage(stats.ratingDistribution[star])}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sort and Filter */}
      <div className="flex gap-4 mb-6">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          <option value="recent">Most Recent</option>
          <option value="helpful">Most Helpful</option>
          <option value="rating">Highest Rating</option>
        </select>

        {filterRating && (
          <button
            onClick={() => setFilterRating(null)}
            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            Clear Filter
          </button>
        )}
      </div>

      {/* Reviews */}
      <div className="space-y-6">
        {reviews.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-2xl">
            <p className="text-gray-600 text-lg">No reviews yet. Be the first to review!</p>
          </div>
        ) : (
          reviews.map((review) => (
            <div key={review._id} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {review.userName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">{review.userName}</span>
                        {review.verified && (
                          <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                            <CheckCircle size={12} />
                            Verified Purchase
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{new Date(review.createdAt).toLocaleDateString()}</span>
                        {review.variant?.color && (
                          <span>• Color: {review.variant.color}</span>
                        )}
                        {review.variant?.size && (
                          <span>• Size: {review.variant.size}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <h4 className="font-bold text-gray-900 mb-2">{review.title}</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">{review.comment}</p>

              {/* Helpful Button */}
              <button
                onClick={() => handleHelpful(review._id)}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition"
              >
                <ThumbsUp size={16} />
                <span>Helpful ({review.helpfulCount})</span>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}