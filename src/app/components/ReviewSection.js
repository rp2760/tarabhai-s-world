// src/app/components/ReviewSection.js

"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function ReviewSection({ productId }) {
  const { user, isSignedIn } = useUser();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [ratingDistribution, setRatingDistribution] = useState({});
  const [pagination, setPagination] = useState({});
  const [sortBy, setSortBy] = useState("recent");
  
  // Form state
  const [formData, setFormData] = useState({
    rating: 0,
    title: "",
    comment: "",
    images: []
  });
  const [imagePreview, setImagePreview] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

 useEffect(() => {
  fetchReviews();
}, [fetchReviews]); // ✅ fetchReviews added
  const fetchReviews = useCallback(async (page = 1) => {
  try {
    setLoading(true);
    const res = await fetch(`/api/reviews?productId=${productId}&page=${page}&sortBy=${sortBy}`);
    const data = await res.json();
    
    if (res.ok) {
      setReviews(data.reviews);
      setRatingDistribution(data.ratingDistribution);
      setPagination(data.pagination);
    }
  } catch (error) {
    console.error("Error fetching reviews:", error);
  } finally {
    setLoading(false);
  }
}, [productId, sortBy]); // ✅ Dependencies added


  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + imagePreview.length > 5) {
      showAlert("You can upload maximum 5 images", "warning");
      return;
    }

    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(prev => [...prev, reader.result]);
        setFormData(prev => ({ ...prev, images: [...prev.images, reader.result] }));
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setImagePreview(prev => prev.filter((_, i) => i !== index));
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    
    if (!isSignedIn) {
      showAlert("Please sign in to submit a review", "warning");
      return;
    }

    if (formData.rating === 0) {
      showAlert("Please select a rating", "warning");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          ...formData
        })
      });

      const data = await res.json();

      if (res.ok) {
        showAlert("Review submitted successfully! It will appear after admin approval.", "success");
        setFormData({ rating: 0, title: "", comment: "", images: [] });
        setImagePreview([]);
        setShowReviewForm(false);
        fetchReviews();
      } else {
        showAlert(data.error || "Failed to submit review", "error");
      }
    } catch (error) {
      showAlert("Something went wrong. Please try again.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleVote = async (reviewId, voteType) => {
    if (!isSignedIn) {
      showAlert("Please sign in to vote", "warning");
      return;
    }

    try {
      const res = await fetch(`/api/reviews?reviewId=${reviewId}&vote=${voteType}`, {
        method: "PATCH"
      });

      if (res.ok) {
        fetchReviews();
        showAlert("Vote recorded!", "success");
      } else {
        const data = await res.json();
        showAlert(data.error || "Failed to record vote", "error");
      }
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  const showAlert = (message, type) => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false, message: "", type: "" }), 3000);
  };

  const calculateAverageRating = () => {
    const total = Object.values(ratingDistribution).reduce((sum, count) => sum + count, 0);
    if (total === 0) return 0;
    
    const weightedSum = Object.entries(ratingDistribution).reduce(
      (sum, [rating, count]) => sum + (parseInt(rating) * count),
      0
    );
    return (weightedSum / total).toFixed(1);
  };

  const getRatingPercentage = (rating) => {
    const total = Object.values(ratingDistribution).reduce((sum, count) => sum + count, 0);
    if (total === 0) return 0;
    return Math.round((ratingDistribution[rating] / total) * 100);
  };

  return (
    <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
      {/* Alert */}
      {alert.show && (
        <div className={`mb-4 p-4 rounded-lg ${
          alert.type === "success" ? "bg-green-100 text-green-800" :
          alert.type === "error" ? "bg-red-100 text-red-800" :
          "bg-yellow-100 text-yellow-800"
        }`}>
          {alert.message}
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Customer Reviews</h2>
        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:scale-105 transition-transform"
        >
          {showReviewForm ? "Cancel" : "Write a Review"}
        </button>
      </div>

      {/* Rating Summary */}
      <div className="grid md:grid-cols-2 gap-8 mb-8 p-6 bg-gray-50 rounded-xl">
        <div className="text-center">
          <div className="text-5xl font-bold text-indigo-600 mb-2">
            {calculateAverageRating()}
          </div>
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-6 h-6 ${i < Math.floor(calculateAverageRating()) ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="text-gray-600">
            Based on {pagination.total || 0} reviews
          </div>
        </div>

        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map(rating => (
            <div key={rating} className="flex items-center gap-2">
              <span className="text-sm font-medium w-8">{rating}★</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-400 h-2 rounded-full transition-all"
                  style={{ width: `${getRatingPercentage(rating)}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 w-12">
                {getRatingPercentage(rating)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <form onSubmit={handleSubmitReview} className="mb-8 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Write Your Review</h3>
          
          {/* Star Rating */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Rating *</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className="focus:outline-none"
                >
                  <svg
                    className={`w-10 h-10 ${star <= formData.rating ? "text-yellow-400" : "text-gray-300"} hover:text-yellow-400 transition-colors`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Review Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="Sum up your experience"
              maxLength={100}
              required
            />
          </div>

          {/* Comment */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Your Review *</label>
            <textarea
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              rows="5"
              placeholder="Share your thoughts about this product"
              maxLength={1000}
              required
            ></textarea>
            <div className="text-right text-sm text-gray-500 mt-1">
              {formData.comment.length}/1000
            </div>
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Add Photos (Optional)</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
              id="review-images"
            />
            <label
              htmlFor="review-images"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Upload Images
            </label>
            <div className="flex gap-2 mt-3 flex-wrap">
              {imagePreview.map((img, index) => (
                <div key={index} className="relative">
                 <div className="relative w-20 h-20">
  <Image
    src={img}
    alt={`Preview ${index}`}
    fill
    className="object-cover rounded-lg"
  />
</div>

                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:scale-105 transition-transform disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      )}

      {/* Sort Options */}
      <div className="flex gap-2 mb-6">
        {["recent", "helpful", "rating"].map(option => (
          <button
            key={option}
            onClick={() => setSortBy(option)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              sortBy === option
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      {/* Reviews List */}
      {loading ? (
        <div className="text-center py-8">Loading reviews...</div>
      ) : reviews.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No reviews yet. Be the first to review this product!
        </div>
      ) : (
        <div className="space-y-6">
          {reviews.map(review => (
            <div key={review._id} className="border-b border-gray-200 pb-6">
              <div className="flex gap-4">
                <Image
                  src={review.userImage || "/default-avatar.png"}
                  alt={review.userName}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="font-semibold">{review.userName}</div>
                      {review.isVerifiedPurchase && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          ✓ Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <h4 className="font-semibold mb-2">{review.title}</h4>
                  <p className="text-gray-700 mb-3">{review.comment}</p>

                  {review.images && review.images.length > 0 && (
                    <div className="flex gap-2 mb-3">
                      {review.images.map((img, index) => (
                        <Image
  key={index}
  src={img}
  alt={`Review ${index}`}
  width={80}
  height={80}
  className="object-cover rounded-lg cursor-pointer transition-transform hover:scale-105"
/>

                      ))}
                    </div>
                  )}

                  <div className="flex gap-4 text-sm">
                    <button
                      onClick={() => handleVote(review._id, "helpful")}
                      className="flex items-center gap-1 text-gray-600 hover:text-indigo-600"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      Helpful ({review.helpfulVotes})
                    </button>
                    <button
                      onClick={() => handleVote(review._id, "unhelpful")}
                      className="flex items-center gap-1 text-gray-600 hover:text-red-600"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                      </svg>
                      Unhelpful ({review.unhelpfulVotes})
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {pagination.pages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(pagination.pages)].map((_, i) => (
            <button
              key={i}
              onClick={() => fetchReviews(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                pagination.page === i + 1
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}