// src/app/api/reviews/can-review/route.js
import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/db";
import { Product } from "../../../../models/Product";
import { Order } from "../../../../models/Order";
import { auth } from "@clerk/nextjs/server";

export async function GET(req) {
  try {
    await connectDB();
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ canReview: false, reason: "Not logged in" });
    }

    const { searchParams } = new URL(req.url);
    const productId = searchParams.get('productId');

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    // Find orders containing this product
    const orders = await Order.find({
      userId: userId,
      'items.productId': productId,
      status: { $in: ['delivered', 'processing', 'shipped'] }
    });

    if (orders.length === 0) {
      return NextResponse.json({
        canReview: false,
        reason: "You need to purchase this product first"
      });
    }

    // Check if user has already reviewed for all orders
    const product = await Product.findById(productId);
    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    // Find orders that haven't been reviewed yet
    const unReviewedOrders = orders.filter(order => {
      return !product.reviews.some(
        review => review.userId === userId && review.orderId === order.orderId
      );
    });

    if (unReviewedOrders.length === 0) {
      return NextResponse.json({
        canReview: false,
        reason: "You have already reviewed this product"
      });
    }

    return NextResponse.json({
      canReview: true,
      orders: unReviewedOrders.map(order => ({
        orderId: order.orderId,
        createdAt: order.createdAt
      }))
    });

  } catch (error) {
    console.error("Error checking review eligibility:", error);
    return NextResponse.json(
      { error: error.message || "Failed to check review eligibility" },
      { status: 500 }
    );
  }
}