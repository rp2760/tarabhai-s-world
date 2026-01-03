import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "../../../lib/db";
import { Product } from "../../../models/Product";

function calculateDiscount(originalPrice, currentPrice) {
  if (!originalPrice || originalPrice <= 0 || !currentPrice) return 0;
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

// GET products - Supports BOTH simple fetching AND advanced filtering
export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  // console.log("ye abhi curent searchparams hei :",searchParams);

  // Check if this is a filtering request or simple fetch
  const isFilterRequest = searchParams.has("page") || 
                          searchParams.has("sortBy") || 
                          searchParams.has("minPrice") || 
                          searchParams.has("maxPrice") ||
                          searchParams.has("minRating") ||
                          searchParams.has("brand");

  // console.log(isFilterRequest);

  try {
    // Build query object
    const query = {};
    
    // Category filter (works for both modes)
    const category = searchParams.get("category");
    if (category) {
      query.category = category.toLowerCase();
    }

    // ADVANCED FILTERING MODE
    if (isFilterRequest) {
      // Brand filter - handle multiple brands
      const brandParam = searchParams.get("brand");
      if (brandParam) {
        // Split by comma if multiple brands are passed
        const brands = brandParam.split(',').map(b => b.trim());
        if (brands.length === 1) {
          query.brand = new RegExp(`^${brands[0]}$`, "i"); // Exact match, case insensitive
        } else {
          query.brand = { $in: brands.map(b => new RegExp(`^${b}$`, "i")) };
        }
      }

      // Price range filter
      const minPrice = searchParams.get("minPrice");
      const maxPrice = searchParams.get("maxPrice");
      if (minPrice || maxPrice) {
        query.currentPrice = {};
        if (minPrice) query.currentPrice.$gte = parseFloat(minPrice);
        if (maxPrice) query.currentPrice.$lte = parseFloat(maxPrice);
      }

      // Rating filter
      const minRating = searchParams.get("minRating");
      if (minRating) {
        query.averageRating = { $gte: parseFloat(minRating) };
      }

      // Sorting
      const sortBy = searchParams.get("sortBy") || "newest";
      let sortOptions = {};
      switch (sortBy) {
        case "price-low-high":
          sortOptions = { currentPrice: 1 };
          break;
        case "price-high-low":
          sortOptions = { currentPrice: -1 };
          break;
        case "newest":
          sortOptions = { createdAt: -1 };
          break;
        case "popular":
          sortOptions = { totalReviews: -1, averageRating: -1 };
          break;
        case "rating":
          sortOptions = { averageRating: -1 };
          break;
        default:
          sortOptions = { createdAt: -1 };
      }
      // console.log("here is a sort by :",sortBy);
      // console.log("here is a sort options : ",sortOptions)


      // Pagination
      const limit = parseInt(searchParams.get("limit")) || 15;
      const page = parseInt(searchParams.get("page")) || 1;
      const skip = (page - 1) * limit;

      // Execute query with pagination
      const products = await Product.find(query)
        .sort(sortOptions)
        .limit(limit)
        .skip(skip);

      // Get total count for pagination
      const totalCount = await Product.countDocuments(query);

      // Return with pagination info
      return NextResponse.json({
        products,
        pagination: {
          total: totalCount,
          page,
          limit,
          totalPages: Math.ceil(totalCount / limit)
        }
      });
    } 
    // SIMPLE FETCH MODE (for product detail page, home page, etc.)
    else {
      const products = await Product.find(query).sort({ createdAt: -1 });
      return NextResponse.json(products);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products", details: error.message },
      { status: 500 }
    );
  }
}

// POST product
export async function POST(req) {
  await connectDB();
  const body = await req.json();

  if (!body.name || !body.originalPrice || !body.currentPrice || !body.category || !body.image) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const discountPercentage = calculateDiscount(body.originalPrice, body.currentPrice);
    const product = new Product({
      ...body,
      discountPercentage,
    });

    const saved = await product.save();
    return NextResponse.json(saved, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create product", details: error.message }, { status: 500 });
  }
}

// PUT product (update)
export async function PUT(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const update = await req.json();

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    if (update.originalPrice && update.currentPrice) {
      update.discountPercentage = calculateDiscount(update.originalPrice, update.currentPrice);
    }

    const updated = await Product.findByIdAndUpdate(id, update, { new: true });
    if (!updated) return NextResponse.json({ error: "Product not found" }, { status: 404 });

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Update failed", details: error.message }, { status: 500 });
  }
}

// DELETE product
export async function DELETE(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const deleted = await Product.findByIdAndDelete(id);
  if (!deleted) return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({ message: "Deleted", product: deleted });
}