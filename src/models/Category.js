// import mongoose from 'mongoose';

// const categorySchema = new mongoose.Schema({
//   categoryId: { type: String, required: true, unique: true },
//   name: { type: String, required: true, unique: true },
//   description: { type: String },
//   bannerImage: { type: String },
//   createdAt: { type: Date, default: Date.now },
// });

// export const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);
// src/models/Category.js
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  categoryId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /^[a-zA-Z0-9-]+$/
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    sparse: true, // This allows multiple null values but enforces uniqueness for non-null values
    trim: true
  },
  description: {
    type: String,
    trim: true,
    default: ''
  },
  bannerImage: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Pre-save middleware to generate slug from name if not provided
categorySchema.pre('save', function(next) {
  if (!this.slug && this.name) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '') // Remove invalid characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim('-');
  }
  next();
});

// Add index for better performance
categorySchema.index({ categoryId: 1, name: 1 });

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);

export default Category;
// import mongoose from "mongoose";

// const categorySchema = new mongoose.Schema({
//   name: { type: String, required: true, unique: true }, // e.g. "Electronics"
//   description: { type: String },                        // optional
//   image: { type: String },                               // category image (optional)
//   createdAt: { type: Date, default: Date.now },
// });

// export const Category =
//   mongoose.models.Category || mongoose.model("Category", categorySchema);
