// src/app/api/cart/clear/route.js
import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/db";
import { Cart } from "../../../../models/Cart";
import { auth } from "@clerk/nextjs/server";




export async function POST() {
  try {
    await connectDB();
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return NextResponse.json(
        { error: "Cart not found" },
        { status: 404 }
      );
    }

    cart.items = [];
    await cart.save();

    return NextResponse.json({
      message: "Cart cleared successfully",
      items: [],
      totalItems: 0,
      subtotal: 0
    });
  } catch (error) {
    console.error("Error clearing cart:", error);
    return NextResponse.json(
      { error: error.message || "Failed to clear cart" },
      { status: 500 }
    );
  }
}