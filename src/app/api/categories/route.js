// import { connectDB } from "../../../lib/db";
// import { Category } from "../../../models/Category";
// import { NextResponse } from "next/server";

// // GET all categories
// export async function GET() {
//   try {
//     await connectDB();
//     const categories = await Category.find().sort({ name: 1 });
//     return NextResponse.json(categories);
//   } catch (err) {
//     console.error("Database error:", err);
//     return NextResponse.json(
//       { error: "Failed to fetch categories", details: err.message },
//       { status: 500 }
//     );
//   }
// }

// // POST new category
// export async function POST(req) {
//   try {
//     await connectDB();
//     const { categoryId, name, description, bannerImage } = await req.json();

//     // Validation
//     if (!categoryId || !name) {
//       return NextResponse.json(
//         { error: "categoryId and name are required" },
//         { status: 400 }
//       );
//     }

//     // Check for existing category
//     const existing = await Category.findOne({
//       $or: [{ categoryId }, { name }],
//     });
//     if (existing) {
//       return NextResponse.json(
//         {
//           error: "Category already exists",
//           conflict: existing.categoryId === categoryId ? "categoryId" : "name",
//         },
//         { status: 409 }
//       );
//     }

//     // Set default image if none provided
//     const finalBannerImage = bannerImage || "/default-category.jpg";

//     // Create new category
//     const newCategory = new Category({
//       categoryId,
//       name,
//       description,
//       bannerImage: finalBannerImage,
//     });

//     const saved = await newCategory.save();
//     return NextResponse.json(saved, { status: 201 });
//   } catch (err) {
//     console.error("Database error:", err);
//     return NextResponse.json(
//       {
//         error: "Failed to create category",
//         details: err.message,
//       },
//       { status: 500 }
//     );
//   }
// }








// import { connectDB } from "../../../lib/db";
// import { Category } from "../../../models/Category";
// import { NextResponse } from "next/server";

// // GET all categories
// export async function GET() {
//   try {
//     await connectDB();
//     const categories = await Category.find().sort({ name: 1 });
//     return NextResponse.json(categories);
//   } catch (err) {
//     return NextResponse.json(
//       { error: "Failed to fetch categories", details: err.message },
//       { status: 500 }
//     );
//   }
// }

// // POST new category
// export async function POST(req) {
//   try {
//     await connectDB();
//     const { categoryId, name, description, bannerImage } = await req.json();

//     if (!categoryId || !name) {
//       return NextResponse.json(
//         { error: "categoryId and name are required" },
//         { status: 400 }
//       );
//     }

//     const existing = await Category.findOne({
//       $or: [{ categoryId }, { name }],
//     });
//     if (existing) {
//       return NextResponse.json(
//         {
//           error: "Category already exists",
//           conflict: existing.categoryId === categoryId ? "categoryId" : "name",
//         },
//         { status: 409 }
//       );
//     }

//     const finalBannerImage = bannerImage || "/default-category.jpg";

//     const newCategory = new Category({
//       categoryId,
//       name,
//       description,
//       bannerImage: finalBannerImage,
//     });

//     const saved = await newCategory.save();
//     return NextResponse.json(saved, { status: 201 });
//   } catch (err) {
//     return NextResponse.json(
//       { error: "Failed to create category", details: err.message },
//       { status: 500 }
//     );
//   }
// }















// operation 

import { NextResponse } from 'next/server';
import Category from '../../../models/Category';
import { connectDB } from '../../../lib/db';

export async function GET() {
  try {
    await connectDB();
    const categories = await Category.find({}).sort({ createdAt: -1 });
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    if (!data.categoryId || !data.name) {
      return NextResponse.json(
        { error: 'Category ID and Name are required' },
        { status: 400 }
      );
    }

    // Always generate slug from name, ignore client slug
    const slug = data.name
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '') // Remove invalid chars
      .replace(/\s+/g, '-')        // Replace spaces with hyphens
      .replace(/-+/g, '-')         // Multiple hyphens to one
      .replace(/^-+|-+$/g, '');    // Trim hyphens

    const cleanData = {
      categoryId: data.categoryId.trim(),
      name: data.name.trim(),
      description: data.description?.trim() || '',
      bannerImage: data.bannerImage?.trim() || '',
      slug: slug
    };

    // Only check for slug uniqueness if slug is non-empty
    const queryOr = [
      { categoryId: cleanData.categoryId },
      { name: cleanData.name }
    ];
    if (cleanData.slug) queryOr.push({ slug: cleanData.slug });
    const existingCategory = await Category.findOne({ $or: queryOr });

    if (existingCategory) {
      let conflict = '';
      if (existingCategory.categoryId === cleanData.categoryId) conflict = 'categoryId';
      else if (existingCategory.name === cleanData.name) conflict = 'name';
      else if (existingCategory.slug === cleanData.slug) conflict = 'slug';
      return NextResponse.json(
        {
          error: `Category ${conflict} already exists`,
          conflict
        },
        { status: 409 }
      );
    }

    const newCategory = new Category(cleanData);
    const savedCategory = await newCategory.save();
    return NextResponse.json(savedCategory, { status: 201 });
  } catch (error) {
    // Handle MongoDB duplicate key error
    if (error.code === 11000 && error.keyPattern) {
      const field = Object.keys(error.keyPattern)[0];
      return NextResponse.json(
        {
          error: `Category ${field} already exists`,
          conflict: field,
          details: `The ${field} must be unique`
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        error: 'Failed to create category',
        details: error.message
      },
      { status: 500 }
    );
  }
}
