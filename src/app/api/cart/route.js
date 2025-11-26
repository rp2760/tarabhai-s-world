// src/app/api/cart/route.js
import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import { Cart } from "../../../models/Cart";
import { Product } from "../../../models/Product";
import { auth } from "@clerk/nextjs/server";
import Email from "next-auth/providers/email";

// GET cart
export async function GET() {
  try {
    await connectDB();
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Find cart by userId
    const cart = await Cart.findOne({ userId })
      .populate({
        path: "items.productId",
        model: "Product"
      })
      .lean()
      .exec();

    if (!cart) {
      return NextResponse.json({
        items: [],
        totalItems: 0,
        subtotal: 0
      });
    }

    const totalItems = cart.items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = cart.items.reduce((total, item) => {
      return item.selected ? total + item.price * item.quantity : total;
    }, 0);

    return NextResponse.json({
      items: cart.items,
      totalItems,
      subtotal
    });
  } catch (error) {
    console.error("Error fetching cart:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch cart" },
      { status: 500 }
    );
  }
}

// POST (add/update item in cart)
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

    const { productId, quantity } = await req.json();

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const product = await Product.findById(productId).lean();
    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (existingItemIndex >= 0) {
      cart.items[existingItemIndex].quantity += quantity || 1;
    } else {
      cart.items.push({
        productId,
        quantity: quantity || 1,
        price: product.currentPrice,
        selected: true
      });
    }

    await cart.save();

    return NextResponse.json({
      message: "Cart updated successfully",
      totalItems: cart.items.reduce((total, item) => total + item.quantity, 0)
    });
  } catch (error) {
    console.error("Error updating cart:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update cart" },
      { status: 500 }
    );
  }
}

// PUT (update cart item quantity/selection)
export async function PUT(req) {
  try {
    await connectDB();
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { productId, quantity, selected } = await req.json();

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return NextResponse.json(
        { error: "Cart not found" },
        { status: 404 }
      );
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex === -1) {
      return NextResponse.json(
        { error: "Item not found in cart" },
        { status: 404 }
      );
    }

    if (typeof quantity !== "undefined") {
      if (quantity < 1) {
        cart.items.splice(itemIndex, 1);
      } else {
        cart.items[itemIndex].quantity = quantity;
      }
    }

    if (typeof selected !== "undefined") {
      cart.items[itemIndex].selected = selected;
    }

    await cart.save();

    const totalItems = cart.items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = cart.items.reduce((total, item) => {
      return item.selected ? total + item.price * item.quantity : total;
    }, 0);

    return NextResponse.json({
      message: "Cart item updated successfully",
      subtotal,
      totalItems
    });
  } catch (error) {
    console.error("Error updating cart item:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update cart item" },
      { status: 500 }
    );
  }
}

// DELETE (remove item from cart)
export async function DELETE(req) {
  try {
    await connectDB();
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return NextResponse.json(
        { error: "Cart not found" },
        { status: 404 }
      );
    }

    const initialCount = cart.items.length;
    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    if (cart.items.length === initialCount) {
      return NextResponse.json(
        { error: "Item not found in cart" },
        { status: 404 }
      );
    }

    await cart.save();

    const totalItems = cart.items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = cart.items.reduce((total, item) => {
      return item.selected ? total + item.price * item.quantity : total;
    }, 0);

    return NextResponse.json({
      message: "Item removed from cart",
      subtotal,
      totalItems
    });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    return NextResponse.json(
      { error: error.message || "Failed to remove item from cart" },
      { status: 500 }
    );
  }
}