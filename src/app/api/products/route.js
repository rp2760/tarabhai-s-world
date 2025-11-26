// // src/app/api/products/route.js

// import { Product } from "@/models/Product";
// import { NextResponse } from "next/server";
// import mongoose from "mongoose";
// import { connectDB } from "@/lib/db";

// function calculateDiscount(originalPrice, currentPrice) {
//   if (!originalPrice || originalPrice <= 0 || !currentPrice) return 0;
//   return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
// }

// export async function GET(req) {
//   await connectDB();
//   const { searchParams } = new URL(req.url);
//   const category = searchParams.get("category");

//   try {
//     const query = category ? { category: category.toLowerCase() } : {};
//     const products = await Product.find(query);
//     return NextResponse.json(products);
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
//   }
// }

// export async function POST(req) {
//   await connectDB();
//   const body = await req.json();

//   if (!body.name || !body.originalPrice || !body.currentPrice || !body.category || !body.image) {
//     return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
//   }

//   try {
//     const discountPercentage = calculateDiscount(body.originalPrice, body.currentPrice);
//     const product = new Product({
//       ...body,
//       discountPercentage,
//     });

//     const saved = await product.save();
//     return NextResponse.json(saved, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to create product", details: error.message }, { status: 500 });
//   }
// }

// export async function PUT(req) {
//   await connectDB();
//   const { searchParams } = new URL(req.url);
//   const id = searchParams.get("id");
//   const update = await req.json();

//   if (!id || !mongoose.Types.ObjectId.isValid(id)) {
//     return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
//   }

//   try {
//     if (update.originalPrice && update.currentPrice) {
//       update.discountPercentage = calculateDiscount(update.originalPrice, update.currentPrice);
//     }

//     const updated = await Product.findByIdAndUpdate(id, update, { new: true });
//     if (!updated) return NextResponse.json({ error: "Product not found" }, { status: 404 });

//     return NextResponse.json(updated);
//   } catch (error) {
//     return NextResponse.json({ error: "Update failed", details: error.message }, { status: 500 });
//   }
// }

// export async function DELETE(req) {
//   await connectDB();
//   const { searchParams } = new URL(req.url);
//   const id = searchParams.get("id");

//   if (!id || !mongoose.Types.ObjectId.isValid(id)) {
//     return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
//   }

//   const deleted = await Product.findByIdAndDelete(id);
//   if (!deleted) return NextResponse.json({ error: "Product not found" }, { status: 404 });

//   return NextResponse.json({ message: "Deleted", product: deleted });
// }









import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "../../../lib/db";
import { Product } from "../../../models/Product";

function calculateDiscount(originalPrice, currentPrice) {
  if (!originalPrice || originalPrice <= 0 || !currentPrice) return 0;
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

// GET products
export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);

  // console.log(`search params is = ${searchParams}`);

  const category = searchParams.get("category");
// console.log(category);
  try {
    const query = category ? { category: category.toLowerCase() } : {};
    const products = await Product.find(query);
    // console.log(products);
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

// POST product
export async function POST(req) {
  await connectDB();
  const body = await req.json();


  if (!body.name || !body.originalPrice || !body.currentPrice || !body.category || !body.image) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const discountPercentage = calculateDiscount(body.originalPrice, body.currentPrice);
    const product = new Product({
      ...body,
      discountPercentage,
    });

    const saved = await product.save();
    return NextResponse.json(saved, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create product", details: error.message }, { status: 500 });
  }
}

// PUT product (update)
export async function PUT(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const update = await req.json();

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    if (update.originalPrice && update.currentPrice) {
      update.discountPercentage = calculateDiscount(update.originalPrice, update.currentPrice);
    }

    const updated = await Product.findByIdAndUpdate(id, update, { new: true });
    if (!updated) return NextResponse.json({ error: "Product not found" }, { status: 404 });

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Update failed", details: error.message }, { status: 500 });
  }
}

// DELETE product
export async function DELETE(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const deleted = await Product.findByIdAndDelete(id);
  if (!deleted) return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({ message: "Deleted", product: deleted });
}
