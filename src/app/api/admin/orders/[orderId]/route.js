// import { NextResponse } from "next/server";
// import { connectDB } from "../../../../../../lib/db";
// import { Order } from "../../../../../../models/Order";

// export async function GET(req, { params }) {
//   try {
//     await connectDB();
    
//     const { orderId } = params;
    
//     const order = await Order.findOne({ orderId })
//       .populate('items.productId')
//       .exec();

//     if (!order) {
//       return NextResponse.json(
//         { error: "Order not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(order);
//   } catch (error) {
//     console.error("Error fetching order:", error);
//     return NextResponse.json(
//       { error: error.message || "Failed to fetch order" },
//       { status: 500 }
//     );
//   }
// }

// export async function PUT(req, { params }) {
//   try {
//     await connectDB();
    
//     const { orderId } = params;
//     const { status } = await req.json();
    
//     if (!status) {
//       return NextResponse.json(
//         { error: "Status is required" },
//         { status: 400 }
//       );
//     }
    
//     const order = await Order.findOneAndUpdate(
//       { orderId },
//       { status },
//       { new: true }
//     ).populate('items.productId').exec();

//     if (!order) {
//       return NextResponse.json(
//         { error: "Order not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(order);
//   } catch (error) {
//     console.error("Error updating order:", error);
//     return NextResponse.json(
//       { error: error.message || "Failed to update order" },
//       { status: 500 }
//     );
//   }
// }



























import { NextResponse } from "next/server";
import { connectDB } from "../../../../../lib/db";
import { Order } from "../../../../../models/Order";

export async function GET(req, { params }) {
  try {
    await connectDB();
    
    const { orderId } =await params;
    
    const order = await Order.findOne({ orderId })
      .populate('items.productId')
      .exec();

    if (!order) {
      return NextResponse.json(
        { error: "Order not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch order" },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();
    
    const { orderId } = await params;
    const { status } = await req.json();
    
    if (!status) {
      return NextResponse.json(
        { error: "Status is required" },
        { status: 400 }
      );
    }
    
    // Validate status
    const validStatuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: "Invalid status" },
        { status: 400 }
      );
    }
    
    const order = await Order.findOneAndUpdate(
      { orderId },
      { status },
      { new: true, runValidators: true }
    ).populate('items.productId').exec();

    if (!order) {
      return NextResponse.json(
        { error: "Order not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update order" },
      { status: 500 }
    );
  }
}