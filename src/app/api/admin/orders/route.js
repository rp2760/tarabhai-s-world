import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/db";
import { Order } from "../../../../models/Order";

export async function GET(req) {
  console.log('Admin orders API called');
  
  try {
    await connectDB();
    console.log('Database connected');
    
    // Get query parameters for filtering and pagination
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 20;
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    
    console.log('Query params:', { page, limit, status, search });
    
    // Build filter object
    const filter = {};
    if (status && status !== 'all') {
      filter.status = status;
    }
    
    if (search) {
      filter.$or = [
        { orderId: { $regex: search, $options: 'i' } },
        { 'address.name': { $regex: search, $options: 'i' } },
        { 'address.email': { $regex: search, $options: 'i' } }
      ];
    }
    
    console.log('Filter:', filter);
    
    // Get orders with pagination - REMOVE userId filter for admin
    const orders = await Order.find(filter)
      .populate('items.productId')
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip((page - 1) * limit)
      .exec();
    
    console.log('Found orders:', orders.length);
    
    // Get total count for pagination
    const total = await Order.countDocuments(filter);
    
    return NextResponse.json({
      orders,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("Error in admin orders API:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch orders" },
      { status: 500 }
    );
  }
}