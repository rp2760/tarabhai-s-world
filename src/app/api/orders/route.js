// // src/app/api/orders/route.js
// import { NextResponse } from "next/server";
// import { connectDB } from "../../../lib/db";
// import { Order } from "../../../models/Order";
// import { auth } from "@clerk/nextjs/server";

// export async function POST(req) {
//   try {
//     await connectDB();
//     const { userId } = await auth();
    
//     if (!userId) {
//       return NextResponse.json(
//         { error: "Unauthorized" },
//         { status: 401 }
//       );
//     }

//     const { items, address, payment, subtotal, shipping, tax, total } = await req.json();

//     // Validate required fields
//     if (!items || !address || !payment || !subtotal || !total) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     // Create order
//     const order = new Order({
//       userId,
//       items,
//       address,
//       payment,
//       subtotal,
//       shipping,
//       tax,
//       total
//     });

//     const savedOrder = await order.save();

//     return NextResponse.json(savedOrder, { status: 201 });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     return NextResponse.json(
//       { error: error.message || "Failed to create order" },
//       { status: 500 }
//     );
//   }
// }

// export async function GET(req) {
//   try {
//     await connectDB();
//     const { userId } = auth();
    
//     if (!userId) {
//       return NextResponse.json(
//         { error: "Unauthorized" },
//         { status: 401 }
//       );
//     }

//     const orders = await Order.find({ userId })
//       .sort({ createdAt: -1 })
//       .populate('items.productId')
//       .exec();

//     return NextResponse.json(orders);
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     return NextResponse.json(
//       { error: error.message || "Failed to fetch orders" },
//       { status: 500 }
//     );
//   }
// }

















// below is working code but commenting now



// // src/app/api/orders/route.js
// import { NextResponse } from "next/server";
// import { connectDB } from "../../../lib/db";
// import { Order } from "../../../models/Order";
// import { auth } from "@clerk/nextjs/server";

// function generateOrderId() {
//   const timestamp = Date.now().toString().slice(-6);
//   const random = Math.floor(100 + Math.random() * 900);
//   return `ORD-${timestamp}${random}`;
// }

// export async function POST(req) {
//   try {
//     await connectDB();
//     const { userId } = await auth();
    
//     if (!userId) {
//       return NextResponse.json(
//         { error: "Unauthorized" },
//         { status: 401 }
//       );
//     }

//     const { items, address, payment, subtotal, shipping, tax, total } = await req.json();

//     // Validate required fields
//     if (!items || !address || !payment || !subtotal || !total) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     // Create order with generated orderId
//     const order = new Order({
//       orderId: generateOrderId(), // Add this line
//       userId,
//       items,
//       address,
//       payment,
//       subtotal,
//       shipping,
//       tax,
//       total
//     });

//     const savedOrder = await order.save();

//     return NextResponse.json(savedOrder, { status: 201 });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     return NextResponse.json(
//       { error: error.message || "Failed to create order" },
//       { status: 500 }
//     );
//   }
// }

// export async function GET(req) {
//   try {
//     await connectDB();
//     const { userId } = await auth();
    
//     if (!userId) {
//       return NextResponse.json(
//         { error: "Unauthorized" },
//         { status: 401 }
//       );
//     }

//     const orders = await Order.find({ userId })
//       .sort({ createdAt: -1 })
//       .populate('items.productId')
//       .exec();

//     return NextResponse.json(orders);
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     return NextResponse.json(
//       { error: error.message || "Failed to fetch orders" },
//       { status: 500 }
//     );
//   }
// }


















// // src/app/api/orders/route.js
// import { NextResponse } from "next/server";
// import { connectDB } from "../../../lib/db";
// import { Order } from "../../../models/Order";
// import { auth,currentUser } from "@clerk/nextjs/server";



 

// function generateOrderId() {
//   const timestamp = Date.now().toString().slice(-6);
//   const random = Math.floor(100 + Math.random() * 900);
//   return `ORD-${timestamp}${random}`;
// }

// export async function POST(req) {
//   try {
//     await connectDB();
//     const { userId } = await auth();
    
//     if (!userId) {
//       return NextResponse.json(
//         { error: "Unauthorized" },
//         { status: 401 }
//       );
//     }

// // Clerk se current user ka data lo
//     const user = await currentUser();
//     const userEmail = user?.emailAddresses?.[0]?.emailAddress;

//     if (!userEmail) {
//       return NextResponse.json(
//         { error: "User email not found" },
//         { status: 400 }
//       );
//     }

//     // const orderData = await req.json();
//     // const { items, address, payment, subtotal, shipping, tax, total } = orderData;

//     console.log('User email from Clerk:', userEmail);



//     const orderData = await req.json();
//     const { items, address, payment, subtotal, shipping, tax, total } = orderData;

//     console.log('Received order data:', orderData);

//     // Validate required fields with better error messages
//     if (!items || !Array.isArray(items) || items.length === 0) {
//       return NextResponse.json(
//         { error: "Items are required and must be a non-empty array" },
//         { status: 400 }
//       );
//     }

//     if (!address || !address.fullName) {
//       return NextResponse.json(
//         { error: "Address with fullName is required" },
//         { status: 400 }
//       );
//     }

//     if (!payment || !payment.method) {
//       return NextResponse.json(
//         { error: "Payment method is required" },
//         { status: 400 }
//       );
//     }

//     if (subtotal === undefined || total === undefined) {
//       return NextResponse.json(
//         { error: "Subtotal and total are required" },
//         { status: 400 }
//       );
//     }

//     // Normalize payment method to match enum values
//     const normalizedPaymentMethod = normalizePaymentMethod(payment.method);

//     // For email, we'll use a placeholder since frontend doesn't send it
//     // In a real app, you might want to get this from user authentication
//     // const userEmail = `${userId.replace('user_', '')}@example.com`;

//     // Create order with normalized data - map frontend fields to model fields
//     const order = new Order({
//       orderId: generateOrderId(),
//       userId,
//       items: items.map(item => ({
//         productId: item.productId,
//         quantity: item.quantity,
//         price: item.price
//         // Note: name and image are not stored in the order model, only productId
//       })),
//       address: {
//         name: address.fullName, // Map fullName to name
//         email: userEmail, // Use generated email since frontend doesn't provide
//         phone: address.phoneNumber || '', // Map phoneNumber to phone
//         street: address.streetAddress || '', // Map streetAddress to street
//         city: address.city || '',
//         state: address.state || '',
//         zipCode: address.postalCode || '', // Map postalCode to zipCode
//         country: address.country || 'India' // Default to India if not provided
//       },
//       payment: {
//         method: normalizedPaymentMethod,
//         status: 'pending'
//       },
//       status: 'pending',
//       subtotal: subtotal || 0,
//       shipping: shipping || 0,
//       tax: tax || 0,
//       total: total || 0
//     });

//     const savedOrder = await order.save();
//     await savedOrder.populate('items.productId');

//     console.log('Order created successfully:', savedOrder.orderId);

//     return NextResponse.json(savedOrder, { status: 201 });
//   } catch (error) {
//     console.error("Error creating order:", error);
    
//     // More specific error handling
//     if (error.name === 'ValidationError') {
//       const errors = Object.values(error.errors).map(err => err.message);
//       return NextResponse.json(
//         { error: "Validation failed", details: errors },
//         { status: 400 }
//       );
//     }
    
//     return NextResponse.json(
//       { error: error.message || "Failed to create order" },
//       { status: 500 }
//     );
//   }
// }

// // Helper function to normalize payment methods
// function normalizePaymentMethod(method) {
//   const methodMap = {
//     'credit_card': 'card',
//     'credit card': 'card',
//     'debit_card': 'card',
//     'debit card': 'card',
//     'cash_on_delivery': 'cod',
//     'cash on delivery': 'cod',
//     'upi': 'upi',
//     'wallet': 'wallet'
//   };
  
//   return methodMap[method.toLowerCase()] || method;
// }

// export async function GET(req) {
//   try {
//     await connectDB();
//     const { userId } = await auth();
    
//     if (!userId) {
//       return NextResponse.json(
//         { error: "Unauthorized" },
//         { status: 401 }
//       );
//     }

//     const orders = await Order.find({ userId })
//       .sort({ createdAt: -1 })
//       .populate('items.productId')
//       .exec();

//     return NextResponse.json(orders);
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     return NextResponse.json(
//       { error: error.message || "Failed to fetch orders" },
//       { status: 500 }
//     );
//   }
// }























import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import { Order } from "../../../models/Order";
import { auth, currentUser } from "@clerk/nextjs/server";
import { sendOrderConfirmationEmail } from "../../../lib/nodemailer";

// Enhanced Order ID Generator with Daily Counter
async function generateOrderId() {
  const date = new Date();
  const year = date.getFullYear().toString(); // Last 2 digits of year
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month with leading zero
  const day = String(date.getDate()).padStart(2, '0'); // Day with leading zero
  
  const datePrefix = `${year}${month}${day}`;
  
  // Get today's start and end time for filtering
  const startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
  const endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
  
  // Count today's orders
  const todayOrderCount = await Order.countDocuments({
    createdAt: {
      $gte: startOfDay, // gte means greaater than or eqauls to 
      $lte: endOfDay  // less than or equls to 
    }
  });
  
  // Increment counter for new order
  const orderNumber = String(todayOrderCount + 1).padStart(6, '0');
  
  // Format: ORD-YYMMDD-000001 (e.g., ORD-241028-000001)
  return `ORD-${datePrefix}-${orderNumber}`;
}

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

    // Get current user data from Clerk
    const user = await currentUser();
    const userEmail = user?.emailAddresses?.[0]?.emailAddress;

    if (!userEmail) {
      return NextResponse.json(
        { error: "User email not found" },
        { status: 400 }
      );
    }

    const orderData = await req.json();
    const { items, address, payment, subtotal, shipping, tax, total } = orderData;

    console.log('User email from Clerk:', userEmail);
    console.log('Received order data:', orderData);

    // Validate required fields with better error messages
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Items are required and must be a non-empty array" },
        { status: 400 }
      );
    }

    if (!address || !address.fullName) {
      return NextResponse.json(
        { error: "Address with fullName is required" },
        { status: 400 }
      );
    }

    if (!payment || !payment.method) {
      return NextResponse.json(
        { error: "Payment method is required" },
        { status: 400 }
      );
    }

    if (subtotal === undefined || total === undefined) {
      return NextResponse.json(
        { error: "Subtotal and total are required" },
        { status: 400 }
      );
    }

    // Normalize payment method to match enum values
    const normalizedPaymentMethod = normalizePaymentMethod(payment.method);

    // Generate unique order ID based on today's count
    const orderId = await generateOrderId();

    // Create order with normalized data
    const order = new Order({
      orderId,
      userId,
      items: items.map(item => ({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price
      })),
      address: {
        name: address.fullName,
        email: userEmail, // Use the email from Clerk
        phone: address.phoneNumber || '',
        street: address.streetAddress || '',
        city: address.city || '',
        state: address.state || '',
        zipCode: address.postalCode || '',
        country: address.country || 'India'
      },
      payment: {
        method: normalizedPaymentMethod,
        status: 'pending'
      },
      status: 'pending',
      subtotal: subtotal || 0,
      shipping: shipping || 0,
      tax: tax || 0,
      total: total || 0
    });

    const savedOrder = await order.save();
    await savedOrder.populate('items.productId');

    console.log('Order created successfully:', savedOrder.orderId);

    // Send confirmation email
    try {
      await sendOrderConfirmationEmail(savedOrder, userEmail);
      console.log('Order confirmation email sent successfully');
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json(savedOrder, { status: 201 });
  } catch (error) {
    console.error("Error creating order:", error);
    
    // More specific error handling
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return NextResponse.json(
        { error: "Validation failed", details: errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: error.message || "Failed to create order" },
      { status: 500 }
    );
  }
}

// Helper function to normalize payment methods
function normalizePaymentMethod(method) {
  const methodMap = {
    'credit_card': 'card',
    'credit card': 'card',
    'debit_card': 'card',
    'debit card': 'card',
    'cash_on_delivery': 'cod',
    'cash on delivery': 'cod',
    'upi': 'upi',
    'wallet': 'wallet'
  };
  
  return methodMap[method.toLowerCase()] || method;
}

export async function GET(req) {
  try {
    await connectDB();
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const orders = await Order.find({ userId })
      .sort({ createdAt: -1 })
      .populate('items.productId')
      .exec();

    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch orders" },
      { status: 500 }
    );
  }
}