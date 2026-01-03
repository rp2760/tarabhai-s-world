// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import { features } from "process";

// export default function AddProduct() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     productId: "",
//     name: "",
//     features: "",
//     description: "",
//     originalPrice: "",
//     currentPrice: "",
//     category: "",
//     stock: "",
//     tag: "",
//     image: "",
//     images: [],
//     brand: "",
//     color: "",
//     size: "",
//     weight: "",
//     dimensions: "",
//     shippingCharge: "",
//     deliveryTime: "working days",
//     variants: [], // 👈 ADD THIS
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleImageArrayChange = (e, index) => {
//     const newImages = [...formData.images];
//     newImages[index] = e.target.value;
//     setFormData((prev) => ({
//       ...prev,
//       images: newImages,
//     }));
//   };

//   const addImageField = () => {
//     setFormData((prev) => ({
//       ...prev,
//       images: [...prev.images, ""],
//     }));
//   };

//   const removeImageField = (index) => {
//     const newImages = formData.images.filter((_, i) => i !== index);
//     setFormData((prev) => ({
//       ...prev,
//       images: newImages,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("/api/products", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         router.push("/admin");
//       }
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };

//   // ----- VARIANT HANDLERS -----
//   const addVariant = () => {
//     setFormData((prev) => ({
//       ...prev,
//       variants: [
//         ...prev.variants,
//         { color: "", images: [""], stock: "", price: "", sizeOptions: [] },
//       ],
//     }));
//   };

//   const removeVariant = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       variants: prev.variants.filter((_, i) => i !== index),
//     }));
//   };

//   const handleVariantChange = (index, field, value) => {
//     const updatedVariants = [...formData.variants];
//     updatedVariants[index][field] = value;
//     setFormData((prev) => ({ ...prev, variants: updatedVariants }));
//   };

//   const handleVariantImageChange = (variantIndex, imgIndex, value) => {
//     const updatedVariants = [...formData.variants];
//     updatedVariants[variantIndex].images[imgIndex] = value;
//     setFormData((prev) => ({ ...prev, variants: updatedVariants }));
//   };

//   const addVariantImage = (variantIndex) => {
//     const updatedVariants = [...formData.variants];
//     updatedVariants[variantIndex].images.push("");
//     setFormData((prev) => ({ ...prev, variants: updatedVariants }));
//   };

//   const removeVariantImage = (variantIndex, imgIndex) => {
//     const updatedVariants = [...formData.variants];
//     updatedVariants[variantIndex].images.splice(imgIndex, 1);
//     setFormData((prev) => ({ ...prev, variants: updatedVariants }));
//   };

//   const handleVariantSizeChange = (variantIndex, sizes) => {
//     const updatedVariants = [...formData.variants];
//     updatedVariants[variantIndex].sizeOptions = sizes
//       .split(",")
//       .map((s) => s.trim());
//     setFormData((prev) => ({ ...prev, variants: updatedVariants }));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
//       <header className="bg-purple-600 text-white p-6 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Add New Product</h1>
//           <Link
//             href="/admin"
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
//           >
//             Back to Dashboard
//           </Link>
//         </div>
//       </header>

//       <main className="container mx-auto p-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Form Section */}
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-6">
//               Product Details
//             </h2>
//             <form onSubmit={handleSubmit}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     htmlFor="productId"
//                   >
//                     Product ID
//                   </label>
//                   <input
//                     type="text"
//                     id="productId"
//                     name="productId"
//                     value={formData.productId}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     htmlFor="name"
//                   >
//                     Product Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     htmlFor="name"
//                   >
//                     Product Features
//                   </label>
//                   <input
//                     type="text"
//                     id="features"
//                     name="features"
//                     value={formData.features}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4 md:col-span-2">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     htmlFor="description"
//                   >
//                     Description
//                   </label>
//                   <textarea
//                     id="description"
//                     name="description"
//                     value={formData.description}
//                     onChange={handleChange}
//                     rows="3"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     required
//                   ></textarea>
//                 </div>

//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     htmlFor="originalPrice"
//                   >
//                     Original Price (₹)
//                   </label>
//                   <input
//                     type="number"
//                     id="originalPrice"
//                     name="originalPrice"
//                     value={formData.originalPrice}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     htmlFor="currentPrice"
//                   >
//                     Current Price (₹)
//                   </label>
//                   <input
//                     type="number"
//                     id="currentPrice"
//                     name="currentPrice"
//                     value={formData.currentPrice}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     htmlFor="category"
//                   >
//                     Category
//                   </label>
//                   <input
//                     type="text"
//                     id="category"
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     htmlFor="stock"
//                   >
//                     Stock Quantity
//                   </label>
//                   <input
//                     type="string"
//                     id="stock"
//                     name="stock"
//                     value={formData.stock}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     required
//                   />
//                 </div>

//                 {/* tag  */}
//                 <div>
//                   <label className="block text-gray-700 text-sm font-bold mb-2">
//                     Tag
//                   </label>
//                   <input
//                     type="text"
//                     name="tag"
//                     value={formData.tag}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                   />
//                 </div>

//                 {/* Weight */}
//                 <div>
//                   <label className="block text-gray-700 text-sm font-bold mb-2">
//                     Weight
//                   </label>
//                   <input
//                     type="text"
//                     name="weight"
//                     value={formData.weight}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                   />
//                 </div>

//                 {/* Dimensions */}
//                 <div className="md:col-span-2">
//                   <label className="block text-gray-700 text-sm font-bold mb-2">
//                     Dimensions
//                   </label>
//                   <input
//                     type="text"
//                     name="dimensions"
//                     value={formData.dimensions}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     htmlFor="image"
//                   >
//                     Main Image URL
//                   </label>
//                   <input
//                     type="url"
//                     id="image"
//                     name="image"
//                     value={formData.image}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     htmlFor="shippingCharge"
//                   >
//                     Shipping Charge (₹)
//                   </label>
//                   <input
//                     type="number"
//                     id="shippingCharge"
//                     name="shippingCharge"
//                     value={formData.shippingCharge}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     htmlFor="deliveryTime"
//                   >
//                     Delivery Time
//                   </label>
//                   <input
//                     type="text"
//                     id="deliveryTime"
//                     name="deliveryTime"
//                     value={formData.deliveryTime}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   />
//                 </div>

//                 <div className="mb-4 md:col-span-2">
//                   <label className="block text-gray-700 text-sm font-bold mb-2">
//                     Additional Images
//                   </label>
//                   {formData.images.map((img, index) => (
//                     <div key={index} className="flex items-center mb-2">
//                       <input
//                         type="url"
//                         value={img}
//                         onChange={(e) => handleImageArrayChange(e, index)}
//                         className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                         placeholder={`Image URL ${index + 1}`}
//                       />
//                       <button
//                         type="button"
//                         onClick={() => removeImageField(index)}
//                         className="ml-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   ))}
//                   <button
//                     type="button"
//                     onClick={addImageField}
//                     className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
//                   >
//                     Add Another Image
//                   </button>
//                 </div>

//                 {/* VARIANTS SECTION */}
//                 <div className="mb-8 md:col-span-2">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-3">
//                     Product Variants
//                   </h3>
//                   {formData.variants.map((variant, index) => (
//                     <div
//                       key={index}
//                       className="border border-gray-300 rounded-lg p-4 mb-4 bg-gray-50"
//                     >
//                       <div className="flex justify-between items-center mb-3">
//                         <h4 className="font-medium text-gray-700">
//                           Variant {index + 1}
//                         </h4>
//                         <button
//                           type="button"
//                           onClick={() => removeVariant(index)}
//                           className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
//                         >
//                           Remove
//                         </button>
//                       </div>

//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                           <label className="block text-gray-700 text-sm font-bold mb-2">
//                             Color
//                           </label>
//                           <input
//                             type="text"
//                             value={variant.color}
//                             onChange={(e) =>
//                               handleVariantChange(
//                                 index,
//                                 "color",
//                                 e.target.value
//                               )
//                             }
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                             required
//                           />
//                         </div>

//                         <div>
//                           <label className="block text-gray-700 text-sm font-bold mb-2">
//                             Stock
//                           </label>
//                           <input
//                             type="number"
//                             value={variant.stock}
//                             onChange={(e) =>
//                               handleVariantChange(
//                                 index,
//                                 "stock",
//                                 e.target.value
//                               )
//                             }
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                             required
//                           />
//                         </div>

//                         <div>
//                           <label className="block text-gray-700 text-sm font-bold mb-2">
//                             Variant Price (optional)
//                           </label>
//                           <input
//                             type="number"
//                             value={variant.price}
//                             onChange={(e) =>
//                               handleVariantChange(
//                                 index,
//                                 "price",
//                                 e.target.value
//                               )
//                             }
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                           />
//                         </div>

//                         <div className="md:col-span-2">
//                           <label className="block text-gray-700 text-sm font-bold mb-2">
//                             Size Options (comma separated)
//                           </label>
//                           <input
//                             type="text"
//                             value={variant.sizeOptions.join(", ")}
//                             onChange={(e) =>
//                               handleVariantSizeChange(index, e.target.value)
//                             }
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                             placeholder="e.g. S, M, L, XL"
//                           />
//                         </div>

//                         {/* Variant images */}
//                         <div className="md:col-span-2">
//                           <label className="block text-gray-700 text-sm font-bold mb-2">
//                             Variant Images
//                           </label>
//                           {variant.images.map((img, imgIndex) => (
//                             <div
//                               key={imgIndex}
//                               className="flex items-center mb-2"
//                             >
//                               <input
//                                 type="url"
//                                 value={img}
//                                 onChange={(e) =>
//                                   handleVariantImageChange(
//                                     index,
//                                     imgIndex,
//                                     e.target.value
//                                   )
//                                 }
//                                 className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
//                                 placeholder={`Image URL ${imgIndex + 1}`}
//                               />
//                               <button
//                                 type="button"
//                                 onClick={() =>
//                                   removeVariantImage(index, imgIndex)
//                                 }
//                                 className="ml-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
//                               >
//                                 Remove
//                               </button>
//                             </div>
//                           ))}
//                           <button
//                             type="button"
//                             onClick={() => addVariantImage(index)}
//                             className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
//                           >
//                             Add Another Image
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}

//                   <button
//                     type="button"
//                     onClick={addVariant}
//                     className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
//                   >
//                     Add Variant
//                   </button>
//                 </div>

//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     htmlFor="brand"
//                   >
//                     Brand
//                   </label>
//                   <input
//                     type="text"
//                     id="brand"
//                     name="brand"
//                     value={formData.brand}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     htmlFor="color"
//                   >
//                     Color
//                   </label>
//                   <input
//                     type="text"
//                     id="color"
//                     name="color"
//                     value={formData.color}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     htmlFor="size"
//                   >
//                     Size
//                   </label>
//                   <input
//                     type="text"
//                     id="size"
//                     name="size"
//                     value={formData.size}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   />
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <button
//                   type="submit"
//                   className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition"
//                 >
//                   Add Product
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* Preview Section */}
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-6">
//               Product Preview
//             </h2>
//             <div className="border border-gray-200 rounded-lg p-4">
//               {formData.image ? (
//                 <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
//                   <Image
//                     src={formData.image}
//                     alt="Product preview"
//                     fill
//                     className="object-contain"
//                     priority
//                     unoptimized={true}
//                   />
//                 </div>
//               ) : (
//                 <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-4 rounded-lg">
//                   <span className="text-gray-400">Image will appear here</span>
//                 </div>
//               )}

//               {/* Additional images preview */}
//               {formData.images.length > 0 && (
//                 <div className="mb-6">
//                   <h4 className="text-sm font-medium text-gray-700 mb-2">
//                     Additional Images:
//                   </h4>
//                   <div className="grid grid-cols-3 gap-2">
//                     {formData.images.map(
//                       (img, index) =>
//                         img && (
//                           <div key={index} className="relative h-24">
//                             <Image
//                               src={img}
//                               alt={`Preview ${index + 1}`}
//                               fill
//                               className="object-cover rounded-md"
//                               unoptimized={true}
//                             />
//                           </div>
//                         )
//                     )}
//                   </div>
//                 </div>
//               )}

//               <h3 className="text-xl font-bold text-gray-800">
//                 {formData.name || "Product Name"}
//               </h3>
//               <div className="flex items-center mt-2">
//                 <span className="text-lg font-bold text-purple-600">
//                   ₹{formData.currentPrice || "0"}
//                 </span>
//                 {formData.originalPrice &&
//                   formData.originalPrice > formData.currentPrice && (
//                     <>
//                       <span className="ml-2 text-sm text-gray-500 line-through">
//                         ₹{formData.originalPrice}
//                       </span>
//                       <span className="ml-2 text-sm font-medium text-green-600">
//                         {Math.round(
//                           ((formData.originalPrice - formData.currentPrice) /
//                             formData.originalPrice) *
//                             100
//                         )}
//                         % off
//                       </span>
//                     </>
//                   )}
//               </div>

//               <div className="mt-4">
//                 <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
//                   {formData.category || "Category"}
//                 </span>
//                 {formData.tag && (
//                   <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full ml-2">
//                     {formData.tag}
//                   </span>
//                 )}
//               </div>

//               <p className="mt-4 text-gray-600">
//                 {formData.description ||
//                   "Product description will appear here."}
//               </p>

//               {/* Shipping info in preview */}
//               <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
//                 <div>
//                   <span className="font-medium text-gray-700">Shipping:</span>
//                   {formData.shippingCharge > 0
//                     ? `₹${formData.shippingCharge}`
//                     : "FREE"}
//                 </div>
//                 <div>
//                   <span className="font-medium text-gray-700">Delivery:</span>
//                   {formData.deliveryTime}
//                 </div>
//               </div>

//               <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
//                 <div>
//                   <span className="font-medium text-gray-700">Brand:</span>{" "}
//                   {formData.brand || "-"}
//                 </div>
//                 <div>
//                   <span className="font-medium text-gray-700">Color:</span>{" "}
//                   {formData.color || "-"}
//                 </div>
//                 <div>
//                   <span className="font-medium text-gray-700">Size:</span>{" "}
//                   {formData.size || "-"}
//                 </div>
//                 <div>
//                   <span className="font-medium text-gray-700">Stock:</span>{" "}
//                   {formData.stock || "0"}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }












"use client";

// ✅ useCallback import add kiya
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function AddProduct() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("basic"); // basic, pricing, variants, media, shipping
  const [formData, setFormData] = useState({
    productId: "",
    name: "",
    features: "",
    description: "",
    originalPrice: "",
    currentPrice: "",
    category: "",
    tag: "",
    image: "",
    images: [],
    brand: "",
    weight: "",
    dimensions: "",
    shippingCharge: "",
    deliveryTime: "3-5 working days",
    variants: [],
  });

  // ✅ useCallback se wrap kiya for better performance
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleImageArrayChange = useCallback((e, index) => {
    const newImages = [...formData.images];
    newImages[index] = e.target.value;
    setFormData((prev) => ({ ...prev, images: newImages }));
  }, [formData.images]);

  const addImageField = useCallback(() => {
    setFormData((prev) => ({ ...prev, images: [...prev.images, ""] }));
  }, []);

  const removeImageField = useCallback((index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, images: newImages }));
  }, [formData.images]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }, [formData, router]);

  // Variant handlers
  const addVariant = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      variants: [
        ...prev.variants,
        { color: "", images: [""], options: [{ size: "", price: "", stock: "" }] },
      ],
    }));
  }, []);

  const removeVariant = useCallback((index) => {
    setFormData((prev) => ({
      ...prev,
      variants: prev.variants.filter((_, i) => i !== index),
    }));
  }, []);

  const handleVariantChange = useCallback((index, field, value) => {
    const updatedVariants = [...formData.variants];
    updatedVariants[index][field] = value;
    setFormData((prev) => ({ ...prev, variants: updatedVariants }));
  }, [formData.variants]);

  const handleVariantImageChange = useCallback((variantIndex, imgIndex, value) => {
    const updatedVariants = [...formData.variants];
    updatedVariants[variantIndex].images[imgIndex] = value;
    setFormData((prev) => ({ ...prev, variants: updatedVariants }));
  }, [formData.variants]);

  const addVariantImage = useCallback((variantIndex) => {
    const updatedVariants = [...formData.variants];
    updatedVariants[variantIndex].images.push("");
    setFormData((prev) => ({ ...prev, variants: updatedVariants }));
  }, [formData.variants]);

  const removeVariantImage = useCallback((variantIndex, imgIndex) => {
    const updatedVariants = [...formData.variants];
    updatedVariants[variantIndex].images.splice(imgIndex, 1);
    setFormData((prev) => ({ ...prev, variants: updatedVariants }));
  }, [formData.variants]);

  const addOption = useCallback((variantIndex) => {
    const updatedVariants = [...formData.variants];
    updatedVariants[variantIndex].options.push({ size: "", price: "", stock: "" });
    setFormData((prev) => ({ ...prev, variants: updatedVariants }));
  }, [formData.variants]);

  const removeOption = useCallback((variantIndex, optionIndex) => {
    const updatedVariants = [...formData.variants];
    updatedVariants[variantIndex].options.splice(optionIndex, 1);
    setFormData((prev) => ({ ...prev, variants: updatedVariants }));
  }, [formData.variants]);

  const handleOptionChange = useCallback((variantIndex, optionIndex, field, value) => {
    const updatedVariants = [...formData.variants];
    updatedVariants[variantIndex].options[optionIndex][field] = value;
    setFormData((prev) => ({ ...prev, variants: updatedVariants }));
  }, [formData.variants]);

  const tabs = [
    { id: "basic", label: "Basic Info", icon: "📝" },
    { id: "pricing", label: "Pricing", icon: "💰" },
    { id: "variants", label: "Variants", icon: "🎨" },
    { id: "media", label: "Media", icon: "🖼️" },
    { id: "shipping", label: "Shipping", icon: "🚚" },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-6 shadow-2xl sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-extrabold">✨ Add New Product</h1>
            <p className="text-indigo-100 text-sm mt-1">Create amazing products for your store</p>
          </div>
          <Link href="/admin" className="bg-white text-indigo-600 px-6 py-2.5 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105">
            ← Back
          </Link>
        </div>
      </header>

      <main className="container mx-auto p-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-indigo-100">
              {/* Tabs */}
              <div className="flex border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-4 py-4 text-sm font-semibold transition-all ${
                      activeTab === tab.id
                        ? "bg-white text-indigo-600 border-b-4 border-indigo-600"
                        : "text-gray-600 hover:bg-white/50"
                    }`}
                  >
                    <span className="text-lg mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                {/* Basic Info Tab */}
                {activeTab === "basic" && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">📝 Basic Information</h3>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Product ID *</label>
                        <input type="text" name="productId" value={formData.productId} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition" placeholder="e.g., PROD-001" required />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Category *</label>
                        <input type="text" name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition" placeholder="e.g., Electronics, Fashion" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Product Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition text-lg" placeholder="e.g., iPhone 15 Pro Max" required />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Key Features *</label>
                      <textarea name="features" value={formData.features} onChange={handleChange} rows="2" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition" placeholder="e.g., A17 Pro chip, 48MP camera, Titanium design" required />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Description *</label>
                      <textarea name="description" value={formData.description} onChange={handleChange} rows="4" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition" placeholder="Detailed product description..." required />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Brand</label>
                        <input type="text" name="brand" value={formData.brand} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition" placeholder="e.g., Apple" />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Tag</label>
                        <input type="text" name="tag" value={formData.tag} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition" placeholder="e.g., Bestseller, New Arrival" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Weight</label>
                        <input type="text" name="weight" value={formData.weight} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition" placeholder="e.g., 221g" />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Dimensions</label>
                        <input type="text" name="dimensions" value={formData.dimensions} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition" placeholder="e.g., 159.9 x 76.7 x 8.25mm" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Pricing Tab */}
                {activeTab === "pricing" && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">💰 Pricing Details</h3>
                    
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Original Price (₹) *</label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-lg">₹</span>
                            <input type="number" name="originalPrice" value={formData.originalPrice} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition text-lg font-semibold" placeholder="0" required />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Selling Price (₹) *</label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-lg">₹</span>
                            <input type="number" name="currentPrice" value={formData.currentPrice} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition text-lg font-semibold" placeholder="0" required />
                          </div>
                        </div>
                      </div>

                      {formData.originalPrice && formData.currentPrice && formData.originalPrice > formData.currentPrice && (
                        <div className="mt-4 p-4 bg-white rounded-xl flex items-center justify-between">
                          <span className="text-gray-700 font-medium">Discount:</span>
                          <span className="text-2xl font-bold text-green-600">
                            {Math.round(((formData.originalPrice - formData.currentPrice) / formData.originalPrice) * 100)}% OFF
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
                      <p className="text-sm text-blue-800">
                        <strong>💡 Tip:</strong> Set base prices here. You can override prices for specific variants in the Variants tab.
                      </p>
                    </div>
                  </div>
                )}

                {/* Variants Tab */}
                {activeTab === "variants" && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">🎨 Product Variants</h3>
                        <p className="text-sm text-gray-600 mt-1">Create color variants with different sizes and prices</p>
                      </div>
                      <button type="button" onClick={addVariant} className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105">
                        + Add Color
                      </button>
                    </div>

                    {formData.variants.length === 0 ? (
                      <div className="text-center py-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
                        <div className="text-6xl mb-4">🎨</div>
                        <p className="text-gray-600 font-medium mb-4">No variants yet</p>
                        <button type="button" onClick={addVariant} className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
                          Create First Variant
                        </button>
                      </div>
                    ) : (
                      formData.variants.map((variant, vIndex) => (
                        <div key={vIndex} className="border-2 border-indigo-200 rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-bold text-indigo-700">Color #{vIndex + 1}</h4>
                            <button type="button" onClick={() => removeVariant(vIndex)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition font-semibold">
                              🗑️ Remove
                            </button>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-bold text-gray-700 mb-2">Color Name *</label>
                              <input type="text" value={variant.color} onChange={(e) => handleVariantChange(vIndex, "color", e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition" placeholder="e.g., Titanium Gray" required />
                            </div>

                            <div>
                              <label className="block text-sm font-bold text-gray-700 mb-2">Variant Images</label>
                              {variant.images.map((img, imgIndex) => (
                                <div key={imgIndex} className="flex gap-2 mb-2">
                                  <input type="url" value={img} onChange={(e) => handleVariantImageChange(vIndex, imgIndex, e.target.value)} className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg" placeholder="Image URL" />
                                  <button type="button" onClick={() => removeVariantImage(vIndex, imgIndex)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">✕</button>
                                </div>
                              ))}
                              <button type="button" onClick={() => addVariantImage(vIndex)} className="mt-2 text-indigo-600 font-semibold hover:text-indigo-800">+ Add Image</button>
                            </div>

                            <div className="bg-white rounded-xl p-4 mt-4">
                              <div className="flex justify-between items-center mb-3">
                                <h5 className="font-bold text-gray-800">Size/Storage Options</h5>
                                <button type="button" onClick={() => addOption(vIndex)} className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700">+ Add Option</button>
                              </div>

                              {variant.options.map((option, oIndex) => (
                                <div key={oIndex} className="grid grid-cols-4 gap-3 mb-3 p-3 bg-gray-50 rounded-lg border">
                                  <div>
                                    <label className="block text-xs font-bold text-gray-600 mb-1">Size</label>
                                    <input type="text" value={option.size} onChange={(e) => handleOptionChange(vIndex, oIndex, "size", e.target.value)} className="w-full px-2 py-2 border border-gray-300 rounded text-sm" placeholder="256GB" required />
                                  </div>
                                  <div>
                                    <label className="block text-xs font-bold text-gray-600 mb-1">Price (₹)</label>
                                    <input type="number" value={option.price} onChange={(e) => handleOptionChange(vIndex, oIndex, "price", e.target.value)} className="w-full px-2 py-2 border border-gray-300 rounded text-sm" required />
                                  </div>
                                  <div>
                                    <label className="block text-xs font-bold text-gray-600 mb-1">Stock</label>
                                    <input type="number" value={option.stock} onChange={(e) => handleOptionChange(vIndex, oIndex, "stock", e.target.value)} className="w-full px-2 py-2 border border-gray-300 rounded text-sm" required />
                                  </div>
                                  <div className="flex items-end">
                                    <button type="button" onClick={() => removeOption(vIndex, oIndex)} className="w-full bg-red-500 text-white px-2 py-2 rounded text-xs font-semibold hover:bg-red-600">Remove</button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}

                {/* Media Tab */}
                {activeTab === "media" && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">🖼️ Product Media</h3>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Main Product Image *</label>
                      <input type="url" name="image" value={formData.image} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition" placeholder="https://example.com/image.jpg" required />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Additional Images</label>
                      {formData.images.map((img, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <input type="url" value={img} onChange={(e) => handleImageArrayChange(e, index)} className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl" placeholder="Additional image URL" />
                          <button type="button" onClick={() => removeImageField(index)} className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 font-semibold">Remove</button>
                        </div>
                      ))}
                      <button type="button" onClick={addImageField} className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-semibold">+ Add Image</button>
                    </div>
                  </div>
                )}

                {/* Shipping Tab */}
                {activeTab === "shipping" && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">🚚 Shipping Information</h3>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Shipping Charge (₹)</label>
                        <input type="number" name="shippingCharge" value={formData.shippingCharge} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition" placeholder="0 for free shipping" />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Delivery Time</label>
                        <input type="text" name="deliveryTime" value={formData.deliveryTime} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition" placeholder="e.g., 3-5 working days" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="mt-8 flex gap-4">
                  <button type="submit" className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 rounded-xl hover:shadow-2xl transition-all hover:scale-105 text-lg">
                    ✅ Create Product
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24 border border-indigo-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>👁️</span> Live Preview
              </h2>
              <div className="border-2 border-gray-200 rounded-xl p-4">
                {formData.image ? (
                  <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-gray-50">
                    <Image src={formData.image} alt="Preview" fill className="object-contain" priority unoptimized />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-gray-400">No image</span>
                  </div>
                )}

                <h3 className="text-lg font-bold text-gray-900 mb-2">{formData.name || "Product Name"}</h3>
                
                <div className="flex items-center gap-2 mb-3">
                  {formData.originalPrice && formData.currentPrice && (
                    <>
                      <span className="text-sm line-through text-gray-400">₹{formData.originalPrice}</span>
                      <span className="text-2xl font-bold text-green-600">₹{formData.currentPrice}</span>
                      {formData.originalPrice > formData.currentPrice && (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">
                          {Math.round(((formData.originalPrice - formData.currentPrice) / formData.originalPrice) * 100)}% OFF
                        </span>
                      )}
                    </>
                  )}
                </div>

                {formData.variants.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-gray-600 mb-2">Variants:</p>
                    <div className="space-y-2">
                      {formData.variants.map((v, i) => (
                        <div key={i} className="text-xs bg-indigo-50 p-2 rounded-lg">
                          <span className="font-semibold text-indigo-700">{v.color || `Color ${i+1}`}</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {v.options.map((o, j) => (
                              <span key={j} className="bg-white px-2 py-1 rounded text-xs">{o.size}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-sm text-gray-600 line-clamp-3">{formData.description || "Description..."}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}