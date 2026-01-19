// src/app/api/reviews/route.js
import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import { Product } from "../../../models/Product";
import { Order } from "../../../models/Order";
import { auth, currentUser } from "@clerk/nextjs/server";

// POST - Create a new review
export async function POST(req) {
  try {
    await connectDB();
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await currentUser();
    const userName = user?.firstName && user?.lastName 
      ? `${user.firstName} ${user.lastName}` 
      : user?.firstName || "Anonymous";
    const userEmail = user?.emailAddresses?.[0]?.emailAddress;

    const reviewData = await req.json();
    const { productId, orderId, rating, title, comment, variant } = reviewData;

    // Validate required fields
    if (!productId || !orderId || !rating || !title || !comment) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify the user purchased this product
    const order = await Order.findOne({
      orderId: orderId,
      userId: userId,
      'items.productId': productId,
      status: { $in: ['delivered', 'processing', 'shipped'] } // Can review after order is processed
    });

    if (!order) {
      return NextResponse.json(
        { error: "You can only review products you have purchased" },
        { status: 403 }
      );
    }

    // Find the product
    const product = await Product.findById(productId);
    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    // Check if user already reviewed this product
    const existingReview = product.reviews.find(
      review => review.userId === userId && review.orderId === orderId
    );

    if (existingReview) {
      return NextResponse.json(
        { error: "You have already reviewed this product for this order" },
        { status: 400 }
      );
    }

    // Add the review
    const newReview = {
      userId,
      userName,
      userEmail,
      orderId,
      rating: parseInt(rating),
      title,
      comment,
      variant: variant || {},
      verified: true,
      createdAt: new Date()
    };

    product.reviews.push(newReview);
    
    // Calculate new ratings
    product.calculateRatings();
    
    await product.save();

    return NextResponse.json({
      message: "Review added successfully",
      review: newReview
    }, { status: 201 });

  } catch (error) {
    console.error("Error creating review:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create review" },
      { status: 500 }
    );
  }
}

// GET - Get reviews for a product
export async function GET(req) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get('productId');
    const sortBy = searchParams.get('sortBy') || 'recent'; // recent, helpful, rating
    const rating = searchParams.get('rating'); // Filter by specific rating

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const product = await Product.findById(productId);
    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    let reviews = [...product.reviews];

    // Filter by rating if specified
    if (rating) {
      reviews = reviews.filter(review => review.rating === parseInt(rating));
    }

    // Sort reviews
    switch (sortBy) {
      case 'helpful':
        reviews.sort((a, b) => b.helpfulCount - a.helpfulCount);
        break;
      case 'rating':
        reviews.sort((a, b) => b.rating - a.rating);
        break;
      case 'recent':
      default:
        reviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return NextResponse.json({
      reviews,
      averageRating: product.averageRating,
      totalReviews: product.totalReviews,
      ratingDistribution: product.ratingDistribution
    });

  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}