// // // // models/Product.js
// // // import mongoose from 'mongoose';

// // // const productSchema = new mongoose.Schema({
// // //   name: String,
// // //   description: String,
// // //   price: String,
// // //   tag: String,
// // //   image: String,  
// // // });

// // // export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);


// // // models/Product.js
// // // import mongoose from 'mongoose';

// // // const productSchema = new mongoose.Schema({
// // //   name: String,
// // //   description: String,
// // //   price: String,
// // //   tag: String,
// // //   image: String,
// // //   category: { type: String, required: true } // Add category field
// // // });

// // // export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

// // import mongoose from 'mongoose';

// // const productSchema = new mongoose.Schema({
// //   productid:{ type:String, require:true },
// //   name: { type: String, required: true },
// //   description: { type: String, required: true },
// //   price: { type: String, required: true },
// //   tag: { type: String, required: true },
// //   image: { type: String, required: true },
// //   category: { type: String, required: true,}
// // });

// // export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);









// // // abhi niche jo he wo 31 ka updates hei




// // models/Product.js
// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//   productId: { type: String, required: true, unique: true }, // unique product code
//   name: { type: String, required: true },
//   description: { type: String, required: true },

//   // Pricing
//   originalPrice: { type: Number, required: true },
//   currentPrice: { type: Number, required: true },
//   discountPercentage: { type: Number, default: 0 }, // auto-calculated if not given
//   currency: { type: String, default: 'INR' },

//   // Category (referenced by ID or string)
//   category: { type: String, required: true }, // We will link to Category model later

//   // Stock and Shipping
//   stock: { type: Number, required: true },
//   inStock: { type: Boolean, default: true },
//   shippingCharge: { type: Number, default: 0 },
//   deliveryTime: { type: String }, // e.g. "2-4 business days"

//   // Tags and Keywords
//   tag: { type: String },
//   keywords: [{ type: String }], // SEO or search terms

//   // Images and Media
//   image: { type: String, required: true }, // main image
//   images: [{ type: String }], // multiple images

//   // Ratings and Reviews
//   averageRating: { type: Number, default: 0 },
//   totalReviews: { type: Number, default: 0 },

//   // Seller or Brand
//   brand: { type: String },
//   seller: { type: String },

//   // Other metadata
//   warranty: { type: String },
//   color: { type: String },
//   size: { type: String },
//   weight: { type: String },
//   dimensions: { type: String },
//   createdAt: { type: Date, default: Date.now }
// });

// export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);



// import mongoose from 'mongoose';



// const productSchema = new mongoose.Schema({
//    variants: [{
//     color: { type: String, required: true },
//     images: [{ type: String }],
//     stock: { type: Number, required: true },
//     price: { type: Number }, // Optional: can override main price
//     sizeOptions: [{ type: String }] // Optional: size variants per color
//   }],
//   productId: { type: String, required: true, unique: true },
//   name: { type: String, required: true },
//   features:{type: String, required: true },
//   description: { type: String, required: true },
//   originalPrice: { type: Number, required: true },
//   currentPrice: { type: Number, required: true },
//   category: { type: String, required: true },
//   stock: { type: Number, required: true, default: 0 },
//   tag: { type: String },
//   image: { type: String, required: true },
//   images: [{ type: String }],
//   brand: { type: String },
//   color: { type: String },
//   size: { type: String },
//   weight: { type: String },
//   dimensions: { type: String},
//   shippingCharge: { type: Number, default: 0 },
//   deliveryTime: { type: String, default: '3-5 working days' },
//   createdAt: { type: Date, default: Date.now }

// }, 
// {
//   toJSON: { virtuals: true },
//   toObject: { virtuals: true }
// });

// // Add virtual for recently viewed
// productSchema.virtual('recentlyViewed', {
//   ref: 'RecentlyViewed',
//   localField: '_id',
//   foreignField: 'productId',
//   justOne: false
// });

// // Calculate discount percentage before saving
// productSchema.pre('save', function(next) {
//   if (this.originalPrice && this.currentPrice) {
//     this.discountPercentage = Math.round
//       ((this.originalPrice - this.currentPrice) / this.originalPrice * 100
//     );
//   }
//   next();
// });

// export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);






// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//   // Nested variant structure: Color -> Size/Storage options
//   variants: [{
//     color: { type: String, required: true },
//     images: [{ type: String }],
//     options: [{
//       size: { type: String, required: true }, // e.g., "256GB", "512GB", "1TB"
//       price: { type: Number, required: true },
//       stock: { type: Number, required: true, default: 0 }
//     }]
//   }],
//   productId: { type: String, required: true, unique: true },
//   name: { type: String, required: true },
//   features: { type: String, required: true },
//   description: { type: String, required: true },
//   originalPrice: { type: Number, required: true }, // Base original price for discount calculation
//   currentPrice: { type: Number, required: true }, // Base current price (can be overridden by variants)
//   category: { type: String, required: true },
//   stock: { type: Number, default: 0 }, // Total stock (optional, can be calculated from variants)
//   tag: { type: String },
//   image: { type: String, required: true },
//   images: [{ type: String }],
//   brand: { type: String },
//   weight: { type: String },
//   dimensions: { type: String },
//   shippingCharge: { type: Number, default: 0 },
//   deliveryTime: { type: String, default: '3-5 working days' },
//   createdAt: { type: Date, default: Date.now }
// }, 
// {
//   toJSON: { virtuals: true },
//   toObject: { virtuals: true }
// });

// // Add virtual for recently viewed
// productSchema.virtual('recentlyViewed', {
//   ref: 'RecentlyViewed',
//   localField: '_id',
//   foreignField: 'productId',
//   justOne: false
// });

// // Calculate total stock from variants
// productSchema.pre('save', function(next) {
//   if (this.variants && this.variants.length > 0) {
//     let totalStock = 0;
//     this.variants.forEach(variant => {
//       variant.options.forEach(option => {
//         totalStock += option.stock || 0;
//       });
//     });
//     this.stock = totalStock;
//   }
//   next();
// });

// export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);





import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  orderId: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  title: {
    type: String,
    required: true,
    maxlength: 100
  },
  comment: {
    type: String,
    required: true,
    maxlength: 1000
  },
  // Variant info for the reviewed product
  variant: {
    color: String,
    size: String
  },
  // Helpful votes
  helpfulCount: {
    type: Number,
    default: 0
  },
  helpfulVotes: [{
    userId: String
  }],
  // Verification
  verified: {
    type: Boolean,
    default: true // true if purchased
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const productSchema = new mongoose.Schema({
  // Nested variant structure: Color -> Size/Storage options
  variants: [{
    color: { type: String, required: true },
    images: [{ type: String }],
    options: [{
      size: { type: String, required: true },
      price: { type: Number, required: true },
      stock: { type: Number, required: true, default: 0 }
    }]
  }],
  productId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  features: { type: String, required: true },
  description: { type: String, required: true },
  originalPrice: { type: Number, required: true },
  currentPrice: { type: Number, required: true },
  category: { type: String, required: true },
  stock: { type: Number, default: 0 },
  tag: { type: String },
  image: { type: String, required: true },
  images: [{ type: String }],
  brand: { type: String },
  weight: { type: String },
  dimensions: { type: String },
  shippingCharge: { type: Number, default: 0 },
  deliveryTime: { type: String, default: '3-5 working days' },
  
  // Review fields
  reviews: [reviewSchema],
  averageRating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  totalReviews: {
    type: Number,
    default: 0
  },
  ratingDistribution: {
    5: { type: Number, default: 0 },
    4: { type: Number, default: 0 },
    3: { type: Number, default: 0 },
    2: { type: Number, default: 0 },
    1: { type: Number, default: 0 }
  },
  
  createdAt: { type: Date, default: Date.now }
}, 
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Add virtual for recently viewed
productSchema.virtual('recentlyViewed', {
  ref: 'RecentlyViewed',
  localField: '_id',
  foreignField: 'productId',
  justOne: false
});

// Calculate total stock from variants
productSchema.pre('save', function(next) {
  if (this.variants && this.variants.length > 0) {
    let totalStock = 0;
    this.variants.forEach(variant => {
      variant.options.forEach(option => {
        totalStock += option.stock || 0;
      });
    });
    this.stock = totalStock;
  }
  next();
});

// Method to calculate average rating and distribution
productSchema.methods.calculateRatings = function() {
  if (this.reviews.length === 0) {
    this.averageRating = 0;
    this.totalReviews = 0;
    this.ratingDistribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    return;
  }

  const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  let totalRating = 0;

  this.reviews.forEach(review => {
    totalRating += review.rating;
    distribution[review.rating]++;
  });

  this.averageRating = parseFloat((totalRating / this.reviews.length).toFixed(1));
  this.totalReviews = this.reviews.length;
  this.ratingDistribution = distribution;
};

// Index for faster review queries
productSchema.index({ 'reviews.userId': 1 });
productSchema.index({ averageRating: -1 });
productSchema.index({ totalReviews: -1 });

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);