// src/models/Cart.js
import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  productId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product', 
    required: true 
  },
  quantity: { 
    type: Number, 
    required: true, 
    default: 1,
    min: [1, 'Quantity cannot be less than 1']
  },
  price: { 
    type: Number, 
    required: true 
  },
  selected: {
    type: Boolean,
    default: true
  }
}, { _id: false });

const cartSchema = new mongoose.Schema({
  userId: { 
    type: String, 
    required: true,
    unique: true 
  },
  items: [cartItemSchema],
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Update the updatedAt field before saving
cartSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Calculate total items in cart
cartSchema.virtual('totalItems').get(function() {
  return this.items.reduce((total, item) => total + item.quantity, 0);
});

// Calculate subtotal
cartSchema.virtual('subtotal').get(function() {
  return this.items.reduce((total, item) => {
    return item.selected ? total + (item.price * item.quantity) : total;
  }, 0);
});

export const Cart = mongoose.models.Cart || mongoose.model('Cart', cartSchema);