import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/db";
import { Product } from "../../../../models/Product";

// GET filter metadata (brands, price range, etc.)
export async function GET(req) {
  await connectDB();
  
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  try {
    // Build base query
    const query = category ? { category: category.toLowerCase() } : {};
    // Get unique brands
    const brands = await Product.distinct("brand", query);
    // Get price range
    const priceStats = await Product.aggregate([
      { $match: query },
      {
        $group: {
          _id: null,
          minPrice: { $min: "$currentPrice" },
          maxPrice: { $max: "$currentPrice" }
        }
      }
    ]);

    return NextResponse.json({
      brands: brands.filter(Boolean).sort(),
      priceRange: priceStats[0] || { minPrice: 0, maxPrice: 100000 }
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch filter metadata", details: error.message },
      { status: 500 }
    );
  }
}