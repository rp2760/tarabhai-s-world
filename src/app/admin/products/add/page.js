"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { features } from "process";

export default function AddProduct() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    productId: "",
    name: "",
    features: "",
    description: "",
    originalPrice: "",
    currentPrice: "",
    category: "",
    stock: "",
    tag: "",
    image: "",
    images: [],
    brand: "",
    color: "",
    size: "",
    weight: "",
    dimensions: "",
    shippingCharge: "",
    deliveryTime: "working days",
    variants: [], // 👈 ADD THIS
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageArrayChange = (e, index) => {
    const newImages = [...formData.images];
    newImages[index] = e.target.value;
    setFormData((prev) => ({
      ...prev,
      images: newImages,
    }));
  };

  const addImageField = () => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ""],
    }));
  };

  const removeImageField = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      images: newImages,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // ----- VARIANT HANDLERS -----
  const addVariant = () => {
    setFormData((prev) => ({
      ...prev,
      variants: [
        ...prev.variants,
        { color: "", images: [""], stock: "", price: "", sizeOptions: [] },
      ],
    }));
  };

  const removeVariant = (index) => {
    setFormData((prev) => ({
      ...prev,
      variants: prev.variants.filter((_, i) => i !== index),
    }));
  };

  const handleVariantChange = (index, field, value) => {
    const updatedVariants = [...formData.variants];
    updatedVariants[index][field] = value;
    setFormData((prev) => ({ ...prev, variants: updatedVariants }));
  };

  const handleVariantImageChange = (variantIndex, imgIndex, value) => {
    const updatedVariants = [...formData.variants];
    updatedVariants[variantIndex].images[imgIndex] = value;
    setFormData((prev) => ({ ...prev, variants: updatedVariants }));
  };

  const addVariantImage = (variantIndex) => {
    const updatedVariants = [...formData.variants];
    updatedVariants[variantIndex].images.push("");
    setFormData((prev) => ({ ...prev, variants: updatedVariants }));
  };

  const removeVariantImage = (variantIndex, imgIndex) => {
    const updatedVariants = [...formData.variants];
    updatedVariants[variantIndex].images.splice(imgIndex, 1);
    setFormData((prev) => ({ ...prev, variants: updatedVariants }));
  };

  const handleVariantSizeChange = (variantIndex, sizes) => {
    const updatedVariants = [...formData.variants];
    updatedVariants[variantIndex].sizeOptions = sizes
      .split(",")
      .map((s) => s.trim());
    setFormData((prev) => ({ ...prev, variants: updatedVariants }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <header className="bg-purple-600 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Add New Product</h1>
          <Link
            href="/admin"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Product Details
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="productId"
                  >
                    Product ID
                  </label>
                  <input
                    type="text"
                    id="productId"
                    name="productId"
                    value={formData.productId}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Product Features
                  </label>
                  <input
                    type="text"
                    id="features"
                    name="features"
                    value={formData.features}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <div className="mb-4 md:col-span-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="originalPrice"
                  >
                    Original Price (₹)
                  </label>
                  <input
                    type="number"
                    id="originalPrice"
                    name="originalPrice"
                    value={formData.originalPrice}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="currentPrice"
                  >
                    Current Price (₹)
                  </label>
                  <input
                    type="number"
                    id="currentPrice"
                    name="currentPrice"
                    value={formData.currentPrice}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="category"
                  >
                    Category
                  </label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="stock"
                  >
                    Stock Quantity
                  </label>
                  <input
                    type="string"
                    id="stock"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                {/* tag  */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Tag
                  </label>
                  <input
                    type="text"
                    name="tag"
                    value={formData.tag}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                {/* Weight */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Weight
                  </label>
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                {/* Dimensions */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Dimensions
                  </label>
                  <input
                    type="text"
                    name="dimensions"
                    value={formData.dimensions}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="image"
                  >
                    Main Image URL
                  </label>
                  <input
                    type="url"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="shippingCharge"
                  >
                    Shipping Charge (₹)
                  </label>
                  <input
                    type="number"
                    id="shippingCharge"
                    name="shippingCharge"
                    value={formData.shippingCharge}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="deliveryTime"
                  >
                    Delivery Time
                  </label>
                  <input
                    type="text"
                    id="deliveryTime"
                    name="deliveryTime"
                    value={formData.deliveryTime}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="mb-4 md:col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Additional Images
                  </label>
                  {formData.images.map((img, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="url"
                        value={img}
                        onChange={(e) => handleImageArrayChange(e, index)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder={`Image URL ${index + 1}`}
                      />
                      <button
                        type="button"
                        onClick={() => removeImageField(index)}
                        className="ml-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addImageField}
                    className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                  >
                    Add Another Image
                  </button>
                </div>

                {/* VARIANTS SECTION */}
                <div className="mb-8 md:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Product Variants
                  </h3>
                  {formData.variants.map((variant, index) => (
                    <div
                      key={index}
                      className="border border-gray-300 rounded-lg p-4 mb-4 bg-gray-50"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-medium text-gray-700">
                          Variant {index + 1}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeVariant(index)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Color
                          </label>
                          <input
                            type="text"
                            value={variant.color}
                            onChange={(e) =>
                              handleVariantChange(
                                index,
                                "color",
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Stock
                          </label>
                          <input
                            type="number"
                            value={variant.stock}
                            onChange={(e) =>
                              handleVariantChange(
                                index,
                                "stock",
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Variant Price (optional)
                          </label>
                          <input
                            type="number"
                            value={variant.price}
                            onChange={(e) =>
                              handleVariantChange(
                                index,
                                "price",
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Size Options (comma separated)
                          </label>
                          <input
                            type="text"
                            value={variant.sizeOptions.join(", ")}
                            onChange={(e) =>
                              handleVariantSizeChange(index, e.target.value)
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="e.g. S, M, L, XL"
                          />
                        </div>

                        {/* Variant images */}
                        <div className="md:col-span-2">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Variant Images
                          </label>
                          {variant.images.map((img, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="flex items-center mb-2"
                            >
                              <input
                                type="url"
                                value={img}
                                onChange={(e) =>
                                  handleVariantImageChange(
                                    index,
                                    imgIndex,
                                    e.target.value
                                  )
                                }
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                                placeholder={`Image URL ${imgIndex + 1}`}
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  removeVariantImage(index, imgIndex)
                                }
                                className="ml-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() => addVariantImage(index)}
                            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                          >
                            Add Another Image
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={addVariant}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
                  >
                    Add Variant
                  </button>
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="brand"
                  >
                    Brand
                  </label>
                  <input
                    type="text"
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="color"
                  >
                    Color
                  </label>
                  <input
                    type="text"
                    id="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="size"
                  >
                    Size
                  </label>
                  <input
                    type="text"
                    id="size"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>

          {/* Preview Section */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Product Preview
            </h2>
            <div className="border border-gray-200 rounded-lg p-4">
              {formData.image ? (
                <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={formData.image}
                    alt="Product preview"
                    fill
                    className="object-contain"
                    priority
                    unoptimized={true}
                  />
                </div>
              ) : (
                <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-4 rounded-lg">
                  <span className="text-gray-400">Image will appear here</span>
                </div>
              )}

              {/* Additional images preview */}
              {formData.images.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Additional Images:
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {formData.images.map(
                      (img, index) =>
                        img && (
                          <div key={index} className="relative h-24">
                            <Image
                              src={img}
                              alt={`Preview ${index + 1}`}
                              fill
                              className="object-cover rounded-md"
                              unoptimized={true}
                            />
                          </div>
                        )
                    )}
                  </div>
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-800">
                {formData.name || "Product Name"}
              </h3>
              <div className="flex items-center mt-2">
                <span className="text-lg font-bold text-purple-600">
                  ₹{formData.currentPrice || "0"}
                </span>
                {formData.originalPrice &&
                  formData.originalPrice > formData.currentPrice && (
                    <>
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        ₹{formData.originalPrice}
                      </span>
                      <span className="ml-2 text-sm font-medium text-green-600">
                        {Math.round(
                          ((formData.originalPrice - formData.currentPrice) /
                            formData.originalPrice) *
                            100
                        )}
                        % off
                      </span>
                    </>
                  )}
              </div>

              <div className="mt-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {formData.category || "Category"}
                </span>
                {formData.tag && (
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full ml-2">
                    {formData.tag}
                  </span>
                )}
              </div>

              <p className="mt-4 text-gray-600">
                {formData.description ||
                  "Product description will appear here."}
              </p>

              {/* Shipping info in preview */}
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Shipping:</span>
                  {formData.shippingCharge > 0
                    ? `₹${formData.shippingCharge}`
                    : "FREE"}
                </div>
                <div>
                  <span className="font-medium text-gray-700">Delivery:</span>
                  {formData.deliveryTime}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Brand:</span>{" "}
                  {formData.brand || "-"}
                </div>
                <div>
                  <span className="font-medium text-gray-700">Color:</span>{" "}
                  {formData.color || "-"}
                </div>
                <div>
                  <span className="font-medium text-gray-700">Size:</span>{" "}
                  {formData.size || "-"}
                </div>
                <div>
                  <span className="font-medium text-gray-700">Stock:</span>{" "}
                  {formData.stock || "0"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
