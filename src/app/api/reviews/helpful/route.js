// src/app/api/reviews/helpful/route.js
import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/db";
import { Product } from "../../../../models/Product";
import { auth } from "@clerk/nextjs/server";

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

    const { productId, reviewId } = await req.json();

    if (!productId || !reviewId) {
      return NextResponse.json(
        { error: "Product ID and Review ID are required" },
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

    const review = product.reviews.id(reviewId);
    if (!review) {
      return NextResponse.json(
        { error: "Review not found" },
        { status: 404 }
      );
    }

    // Check if user already voted
    const hasVoted = review.helpfulVotes.some(vote => vote.userId === userId);

    if (hasVoted) {
      // Remove vote
      review.helpfulVotes = review.helpfulVotes.filter(vote => vote.userId !== userId);
      review.helpfulCount = Math.max(0, review.helpfulCount - 1);
    } else {
      // Add vote
      review.helpfulVotes.push({ userId });
      review.helpfulCount += 1;
    }

    await product.save();

    return NextResponse.json({
      message: hasVoted ? "Vote removed" : "Vote added",
      helpfulCount: review.helpfulCount,
      hasVoted: !hasVoted
    });

  } catch (error) {
    console.error("Error updating helpful vote:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update helpful vote" },
      { status: 500 }
    );
  }
}