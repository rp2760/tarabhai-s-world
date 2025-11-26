// import { connectDB } from '@/lib/db';
// import { SliderProduct } from '@/models/SliderProduct';
// import { NextResponse } from 'next/server';

// export async function GET() {
//   await connectDB();
//   const products = await SliderProduct.find().sort({ createdAt: -1 });
//   return NextResponse.json(products);
// }

// export async function POST(req) {
//   await connectDB();
//   const body = await req.json();
//   const newProduct = await SliderProduct.create(body);
//   return NextResponse.json(newProduct);
// }







import { connectDB } from "../../../lib/db";
import { SliderProduct } from "../../../models/SliderProduct";
import { NextResponse } from "next/server";

// GET slider products
export async function GET() {
  await connectDB();
  try {
    const products = await SliderProduct.find().sort({ createdAt: -1 });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch slider products", details: error.message }, { status: 500 });
  }
}

// POST new slider product
export async function POST(req) {
  await connectDB();
  try {
    const body = await req.json();
    const newProduct = await SliderProduct.create(body);
    return NextResponse.json(newProduct);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create slider product", details: error.message }, { status: 500 });
  }
}
