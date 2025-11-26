  // models/SliderProduct.js
  import mongoose from 'mongoose';

  const sliderProductSchema = new mongoose.Schema({
    title: { type: String, required: true },         // e.g. "Smart Fitness Watch"
    description: { type: String, required: true },   // e.g. "Track your health metrics"
    price: { type: String, required: true },         // e.g. "$159.99"
    tag: { type: String },                           // e.g. "Trending Now"
    slogan: { type: String },                        // e.g. "Your health companion"
    bgImage: { type: String, required: true },       // Background image (full width)
    productImage: { type: String, required: true },  // Product image to display
    createdAt: { type: Date, default: Date.now }
  });

  export const SliderProduct = mongoose.models.SliderProduct || mongoose.model('SliderProduct', sliderProductSchema);
