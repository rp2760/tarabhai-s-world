// src/app/api/products/compare/route.js
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "../../../../lib/db";
import { Product } from "../../../../models/Product";

export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const ids = searchParams.get("ids");

  if (!ids) {
    return NextResponse.json({ error: "No product IDs provided" }, { status: 400 });
  }

  const idArray = ids.split(',').filter(id => mongoose.Types.ObjectId.isValid(id));

  if (idArray.length === 0) {
    return NextResponse.json({ error: "Invalid product IDs" }, { status: 400 });
  }

  try {
    const products = await Product.find({ _id: { $in: idArray } });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products for comparison", details: error.message },
      { status: 500 }
    );
  }
}