// // src/app/api/orders/[orderId]/route.js
// import { NextResponse } from "next/server";
// import { connectDB } from "../../../../lib/db";
// import { Order } from "../../../../models/Order";
// import { auth } from "@clerk/nextjs/server";

// export async function GET(req, { params }) {
//   try {
//     await connectDB();
//     const { userId } = await auth();
    
//     if (!userId) {
//       return NextResponse.json(
//         { error: "Unauthorized" },
//         { status: 401 }
//       );
//     }

//     const { orderId } = params;
    
//     const order = await Order.findOne({ 
//       orderId: orderId,
//       userId: userId 
//     }).populate('items.productId').exec();

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













import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/db";
import { Order } from "../../../../models/Order";
import { auth } from "@clerk/nextjs/server";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { orderId } =await params;
    
    const order = await Order.findOne({ 
      orderId: orderId,
      userId: userId 
    }).populate('items.productId').exec();

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