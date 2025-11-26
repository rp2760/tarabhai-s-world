// // import { NextResponse } from 'next/server';
// // import { connectDB } from '@/lib/db';
// // import { Category } from '@/models/Category';

// // export async function PUT(req, { params }) {
// //   await connectDB();
// //   const { id } = params;

// //   try {
// //     const body = await req.json();
// //     const updatedCategory = await Category.findByIdAndUpdate(id, body, {
// //       new: true,
// //     });

// //     if (!updatedCategory) {
// //       return NextResponse.json({ error: 'Category not found' }, { status: 404 });
// //     }

// //     return NextResponse.json(updatedCategory);
// //   } catch (err) {
// //     return NextResponse.json({ error: 'Failed to update category' }, { status: 500 });
// //   }
// // }

// // export async function DELETE(_, { params }) {
// //   await connectDB();
// //   const { id } = params;

// //   try {
// //     const deleted = await Category.findByIdAndDelete(id);
// //     if (!deleted) {
// //       return NextResponse.json({ error: 'Category not found' }, { status: 404 });
// //     }

// //     return NextResponse.json({ message: 'Category deleted successfully' });
// //   } catch (err) {
// //     return NextResponse.json({ error: 'Failed to delete category' }, { status: 500 });
// //   }
// // }



// // src/app/api/categories/[categoryId]/route.js
// import { connectDB } from "@/lib/db";
// import { Category } from "@/models/Category";
// import { NextResponse } from "next/server";

// // GET single category
// export async function GET(_, { params }) {
//   await connectDB();
//   try {
//     const { categoryId } = params;
//     const category = await Category.findOne({ categoryId });

//     if (!category) {
//       return NextResponse.json(
//         { error: "Category not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(category);
//   } catch (err) {
//     return NextResponse.json(
//       { error: "Failed to fetch category" },
//       { status: 500 }
//     );
//   }
// }

// // PUT - Update category
// export async function PUT(req, { params }) {
//   await connectDB();
//   try {
//     const { categoryId } = params;
//     const updateData = await req.json();

//     // Don't allow changing the categoryId through update
//     if (updateData.categoryId) {
//       return NextResponse.json(
//         { error: "Cannot change categoryId" },
//         { status: 400 }
//       );
//     }

//     // Check if new name already exists
//     if (updateData.name) {
//       const existingName = await Category.findOne({
//         name: updateData.name,
//         categoryId: { $ne: categoryId }, // Exclude current category
//       });
//       if (existingName) {
//         return NextResponse.json(
//           { error: "Category name already exists" },
//           { status: 409 }
//         );
//       }
//     }

//     const updatedCategory = await Category.findOneAndUpdate(
//       { categoryId },
//       updateData,
//       { new: true, runValidators: true }
//     );

//     if (!updatedCategory) {
//       return NextResponse.json(
//         { error: "Category not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(updatedCategory);
//   } catch (err) {
//     return NextResponse.json(
//       { error: "Failed to update category", details: err.message },
//       { status: 500 }
//     );
//   }
// }

// // DELETE - Remove category
// export async function DELETE(_, { params }) {
//   await connectDB();
//   try {
//     const { categoryId } = params;
//     const deletedCategory = await Category.findOneAndDelete({ categoryId });

//     if (!deletedCategory) {
//       return NextResponse.json(
//         { error: "Category not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({
//       message: "Category deleted successfully",
//       deletedCategory,
//     });
//   } catch (err) {
//     return NextResponse.json(
//       { error: "Failed to delete category" },
//       { status: 500 }
//     );
//   }
// }




// import { connectDB } from "../../../../lib/db";
// import { Category } from "../../../../models/Category";
// import { NextResponse } from "next/server";

// // GET single category
// export async function GET(_, { params }) {
//   await connectDB();
//   try {
//     const { categoryId } = params;
//     const category = await Category.findOne({ categoryId });

//     if (!category) {
//       return NextResponse.json({ error: "Category not found" }, { status: 404 });
//     }

//     return NextResponse.json(category);
//   } catch (err) {
//     return NextResponse.json({ error: "Failed to fetch category" }, { status: 500 });
//   }
// }

// // PUT - update category
// export async function PUT(req, { params }) {
//   await connectDB();
//   try {
//     const { categoryId } = params;
//     const data = await req.json();

//     if (data.categoryId) {
//       return NextResponse.json({ error: "Cannot change categoryId" }, { status: 400 });
//     }

//     const updated = await Category.findOneAndUpdate({ categoryId }, data, { new: true });

//     if (!updated) {
//       return NextResponse.json({ error: "Category not found" }, { status: 404 });
//     }

//     return NextResponse.json(updated);
//   } catch (err) {
//     return NextResponse.json({ error: "Failed to update category", details: err.message }, { status: 500 });
//   }
// }

// // DELETE - delete category
// export async function DELETE(_, { params }) {
//   await connectDB();
//   try {
//     const { categoryId } = params;
//     const deleted = await Category.findOneAndDelete({ categoryId });

//     if (!deleted) {
//       return NextResponse.json({ error: "Category not found" }, { status: 404 });
//     }

//     return NextResponse.json({ message: "Category deleted", category: deleted });
//   } catch (err) {
//     return NextResponse.json({ error: "Failed to delete category" }, { status: 500 });
//   }
// }







// import { connectDB } from "../../../../lib/db";
// import { Category } from "../../../../models/Category";
// import { NextResponse } from "next/server";

// // GET single category
// export async function GET(_, { params }) {
//   try {
//     await connectDB();
//     const { id: categoryId } = params;
    
//     if (!categoryId) {
//       return NextResponse.json(
//         { error: "Category ID is required" },
//         { status: 400 }
//       );
//     }

//     const category = await Category.findOne({ categoryId });
//     if (!category) {
//       return NextResponse.json(
//         { error: "Category not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(category);
//   } catch (err) {
//     console.error("Error fetching category:", err);
//     return NextResponse.json(
//       { error: "Failed to fetch category", details: err.message },
//       { status: 500 }
//     );
//   }
// }

// // UPDATE category
// export async function PUT(req, { params }) {
//   try {
//     await connectDB();
//     const { id: categoryId } = params;
//     const updateData = await req.json();

//     if (!categoryId) {
//       return NextResponse.json(
//         { error: "Category ID is required" },
//         { status: 400 }
//       );
//     }

//     // Check if trying to update categoryId (not allowed)
//     if (updateData.categoryId) {
//       return NextResponse.json(
//         { error: "Cannot change categoryId" },
//         { status: 400 }
//       );
//     }

//     // Check for name conflict
//     if (updateData.name) {
//       const existingName = await Category.findOne({
//         name: updateData.name,
//         categoryId: { $ne: categoryId }
//       });
//       if (existingName) {
//         return NextResponse.json(
//           { error: "Category name already exists", conflict: "name" },
//           { status: 409 }
//         );
//       }
//     }

//     const updatedCategory = await Category.findOneAndUpdate(
//       { categoryId },
//       updateData,
//       { new: true, runValidators: true }
//     );

//     if (!updatedCategory) {
//       return NextResponse.json(
//         { error: "Category not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(updatedCategory);
//   } catch (err) {
//     console.error("Error updating category:", err);
//     return NextResponse.json(
//       { error: "Failed to update category", details: err.message },
//       { status: 500 }
//     );
//   }
// }

// // DELETE category
// export async function DELETE(_, { params }) {
//   try {
//     await connectDB();
//     const { id: categoryId } = params;

//     if (!categoryId) {
//       return NextResponse.json(
//         { error: "Category ID is required" },
//         { status: 400 }
//       );
//     }

//     const deletedCategory = await Category.findOneAndDelete({ categoryId });
//     if (!deletedCategory) {
//       return NextResponse.json(
//         { error: "Category not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(
//       { message: "Category deleted successfully" },
//       { status: 200 }
//     );
//   } catch (err) {
//     console.error("Error deleting category:", err);
//     return NextResponse.json(
//       { error: "Failed to delete category", details: err.message },
//       { status: 500 }
//     );
//   }
// }



// operation 

import { NextResponse } from 'next/server';
import Category from '../../../../models/Category';
import { connectDB } from '../../../../lib/db';

// GET single category
export async function GET(request, { params }) {
  try {
    await connectDB();
    const category = await Category.findOne({
      $or: [
        { _id: params.id },
        { categoryId: params.id }
      ]
    });
    
    if (!category) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(category);
  } catch (error) {
    console.error('Error fetching category:', error);
    return NextResponse.json(
      { error: 'Failed to fetch category' },
      { status: 500 }
    );
  }
}

// PUT update category
export async function PUT(request, { params }) {
  try {
    await connectDB();
    const data = await request.json();
    
    // Check if name is being updated and already exists
    if (data.name) {
      const existingName = await Category.findOne({
        name: data.name,
        _id: { $ne: params.id }
      });
      
      if (existingName) {
        return NextResponse.json(
          { error: 'Category name already exists', conflict: 'name' },
          { status: 409 }
        );
      }
    }
    
    const updatedCategory = await Category.findOneAndUpdate(
      {
        $or: [
          { _id: params.id },
          { categoryId: params.id }
        ]
      },
      data,
      { new: true, runValidators: true }
    );
    
    if (!updatedCategory) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(updatedCategory);
  } catch (error) {
    console.error('Error updating category:', error);
    return NextResponse.json(
      { error: 'Failed to update category' },
      { status: 500 }
    );
  }
}

// DELETE category
export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const deletedCategory = await Category.findOneAndDelete({
      $or: [
        { _id: params.id },
        { categoryId: params.id }
      ]
    });
    
    if (!deletedCategory) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: 'Category deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json(
      { error: 'Failed to delete category' },
      { status: 500 }
    );
  }
}