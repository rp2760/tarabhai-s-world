// // app/api/products/[id]/route.js
// import { connectDB } from "@/lib/db";
// import { Product } from "@/models/Product";
// import { NextResponse } from "next/server";
// import mongoose from "mongoose";

// export async function GET(req, { params }) {
//   await connectDB();
  
//   const { id } =await params;
  
//   if (!id || !mongoose.Types.ObjectId.isValid(id)) {
//     return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
//   }

//   try {
//     const product = await Product.findById(id);
    
//     if (!product) {
//       return NextResponse.json({ error: "Product not found" }, { status: 404 });
//     }
    
//     return NextResponse.json(product);
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to fetch product", details: error.message },
//       { status: 500 }
//     );
//   }
// }







import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "../../../../lib/db";
import { Product } from "../../../../models/Product";

export async function GET(req, { params }) {
  await connectDB();

  const { id } = await params;
  
  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
  }

  try {
    const product = await Product.findById(id);
    // console.log(product);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch product", details: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
  }

  try {
    const body = await req.json();
    const updatedProduct = await Product.findByIdAndUpdate(id, body, { new: true });
    
    if (!updatedProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    
    return NextResponse.json(updatedProduct);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update product", details: error.message },
      { status: 500 }
    );
  }
}