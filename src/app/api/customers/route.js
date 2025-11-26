import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import { Order } from "../../../models/Order";

export async function GET() {
  try {
    await connectDB();
    
    // Get all orders
    const orders = await Order.find({})
      .sort({ createdAt: -1 })
      .exec();

    // Group orders by customer (using the userId from orders)
    const customersMap = {};
    
    orders.forEach(order => {
      if (!order.userId) return;
      
      // Use the userId directly from the order
      const userId = order.userId;
      
      if (!customersMap[userId]) {
        customersMap[userId] = {
          _id: userId,
          userId: userId,
          name: order.address?.name || 'Unknown Customer',
          email: order.address?.email || 'No email',
          ordersCount: 0,
          totalSpent: 0,
          lastOrder: null
        };
      }
      
      customersMap[userId].ordersCount += 1;
      customersMap[userId].totalSpent += order.total || 0;
      
      if (!customersMap[userId].lastOrder || order.createdAt > customersMap[userId].lastOrder) {
        customersMap[userId].lastOrder = order.createdAt;
      }
    });
    
    const customers = Object.values(customersMap);
    
    return NextResponse.json(customers);
  } catch (error) {
    console.error("Error fetching customers:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch customers" },
      { status: 500 }
    );
  }
}