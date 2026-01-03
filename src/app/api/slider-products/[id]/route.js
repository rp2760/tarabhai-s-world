// import { connectDB } from '../../../../lib/db';
// import { SliderProduct } from '../../../../models/SliderProduct';
// import { NextResponse } from 'next/server';

// export async function DELETE(_, { params }) {
//   await connectDB();
//   const deleted = await SliderProduct.findByIdAndDelete(params.id);
//   return NextResponse.json({ message: 'Deleted', deleted });
// }

// export async function PUT(req, { params }) {
//   await connectDB();
//   const body = await req.json();
//   const updated = await SliderProduct.findByIdAndUpdate(params.id, body, { new: true });
//   return NextResponse.json(updated);
// }


import { connectDB } from "../../../../lib/db";
import { SliderProduct } from "../../../../models/SliderProduct";
import { NextResponse } from "next/server";

// GET single slider product
export async function GET(_, { params }) {
  await connectDB();
  try {
    const { id } = await params; // Await params before accessing properties
    const product = await SliderProduct.findById(id);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch slider product", details: error.message },
      { status: 500 }
    );
  }
}

// UPDATE slider product
export async function PUT(req, { params }) {
  await connectDB();
  try {
    const { id } = await params; // Await params before accessing properties
    const body = await req.json();
    const updated = await SliderProduct.findByIdAndUpdate(id, body, { new: true });
    
    if (!updated) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update slider product", details: error.message },
      { status: 500 }
    );
  }
}

// DELETE slider product
export async function DELETE(_, { params }) {
  await connectDB();
  try {
    const { id } = await params; // Await params before accessing properties
    const deleted = await SliderProduct.findByIdAndDelete(id);
    
    if (!deleted) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    
    return NextResponse.json({ message: "Deleted successfully", deleted });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete slider product", details: error.message },
      { status: 500 }
    );
  }
}