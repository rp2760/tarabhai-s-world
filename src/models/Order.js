// // models/Order.js
// import mongoose from 'mongoose';

// const orderSchema = new mongoose.Schema({
//   orderId: {
//     type: String,
//     unique: true,
//     sparse: true, 
//     default: function() {
//       // Generate a unique order ID (e.g., ORD-123456)
//       return 'ORD-' + Math.floor(100000 + Math.random() * 900000);
//     }
//   },
//   userId: {
//     type: String,
//     required: true
//   },
//   items: [{
//     productId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Product',
//       required: true
//     },
//     quantity: {
//       type: Number,
//       required: true,
//       min: 1
//     },
//     price: {
//       type: Number,
//       required: true
//     }
//   }],
//   address: {
//     type: Object,
//     required: true
//   },
//   payment: {
//     type: Object,
//     required: true
//   },
//   subtotal: {
//     type: Number,
//     required: true
//   },
//   shipping: {
//     type: Number,
//     default: 0
//   },
//   tax: {
//     type: Number,
//     default: 0
//   },
//   total: {
//     type: Number,
//     required: true
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
//     default: 'pending'
//   }
// }, {
//   timestamps: true
// });

// export const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);




































// // models/Order.js
// import mongoose from 'mongoose';

// const orderSchema = new mongoose.Schema({
//   orderId: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   userId: {
//     type: String,
//     required: true
//   },
//   items: [{
//     productId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Product',
//       required: true
//     },
//     quantity: {
//       type: Number,
//       required: true,
//       min: 1
//     },
//     price: {
//       type: Number,
//       required: true,
//       min: 0
//     }
//   }],
//   address: {
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: false // Change to false if email is optional
//   },
//   phone: String,
//   street: String,
//   city: String,
//   state: String,
//   zipCode: String,
//   country: String
// },
//   payment: {
//     method: {
//       type: String,
//       required: true,
//       enum: ['credit_card', 'card', 'cash', 'upi', 'wallet', 'cod'], // Added credit_card
//       default: 'card'
//     },
//     status: {
//       type: String,
//       required: true,
//       enum: ['pending', 'completed', 'failed', 'refunded'],
//       default: 'pending'
//     }
//   },
//   status: {
//     type: String,
//     required: true,
//     enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
//     default: 'pending'
//   },
//   subtotal: {
//     type: Number,
//     required: true,
//     min: 0
//   },
//   shipping: {
//     type: Number,
//     required: true,
//     min: 0,
//     default: 0
//   },
//   tax: {
//     type: Number,
//     required: true,
//     min: 0,
//     default: 0
//   },
//   total: {
//     type: Number,
//     required: true,
//     min: 0
//   }
// }, {
//   timestamps: true
// });

// // Create index for better query performance
// // orderSchema.index({ orderId: 1 });
// orderSchema.index({ userId: 1 });
// orderSchema.index({ status: 1 });
// orderSchema.index({ createdAt: -1 });

// export const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

















// src/models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: String,
    required: true
  },
  items: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    price: {
      type: Number,
      required: true,
      min: 0
    }
  }],
  address: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: String,
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  payment: {
    method: {
      type: String,
      required: true,
      enum: ['credit_card', 'card', 'cash', 'upi', 'wallet', 'cod'],
      default: 'card'
    },
    status: {
      type: String,
      required: true,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending'
    },
    // New fields for Razorpay integration
    razorpayOrderId: String,
    razorpayPaymentId: String,
    razorpaySignature: String,
    transactionId: String, // For COD or other methods
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  subtotal: {
    type: Number,
    required: true,
    min: 0
  },
  shipping: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  tax: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  total: {
    type: Number,
    required: true,
    min: 0
  }
}, {
  timestamps: true
});

orderSchema.index({ userId: 1 });
orderSchema.index({ status: 1 });
orderSchema.index({ createdAt: -1 });

export const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);