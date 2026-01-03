"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useComparison } from "../../context/ComparisonContext";
import { useCart } from "@/context/CartContext";
import { useUser } from "@clerk/nextjs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// ProductCard Component
function ProductCard({ product, loading }) {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);
  const { addToComparison, canAddMore, comparisonProducts } = useComparison();
  const { refreshCart } = useCart();
  const { isSignedIn } = useUser();

  // Alert dialog states
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertConfig, setAlertConfig] = useState({
    title: "",
    description: "",
    type: "info",
  });

  if (!product && !loading) {
    return null;
  }

  const isInComparison = product
    ? comparisonProducts.some((p) => p._id === product._id)
    : false;

  const isInStock = () => {
    if (!product || !product.stock) return false;
    if (typeof product.stock === "string") {
      return parseInt(product.stock) > 0;
    }
    return product.stock > 0;
  };

  const inStock = isInStock();

  const showAlert = (title, description, type = "info") => {
    setAlertConfig({ title, description, type });
    setAlertOpen(true);
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse border border-gray-100">
        <div className="relative h-72 bg-gradient-to-br from-gray-100 to-gray-200"></div>
        <div className="p-5">
          <div className="h-6 bg-gray-200 rounded-lg mb-3 w-4/5"></div>
          <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
        </div>
      </div>
    );
  }

  const handleAddToCart = async (e) => {
    e.stopPropagation();

    if (!isSignedIn) {
      showAlert(
        "Sign In Required",
        "Please sign in to add items to your cart.",
        "warning"
      );
      return;
    }

    if (!inStock) {
      showAlert(
        "Out of Stock",
        "This product is currently out of stock.",
        "error"
      );
      return;
    }

    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product._id,
          name: product.name,
          price: product.currentPrice || product.price,
          quantity: 1,
        }),
      });

      if (res.ok) {
        await refreshCart();
        showAlert(
          "Added to Cart!",
          `${product.name} has been added to your cart successfully.`,
          "success"
        );
      } else {
        const error = await res.json();
        console.error("Add to cart failed:", error);
        showAlert(
          "Failed to Add",
          "Failed to add product to cart. Please try again.",
          "error"
        );
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      showAlert("Error", "Something went wrong. Please try again.", "error");
    }
  };

  const handleCompareClick = (e) => {
    e.stopPropagation();
    if (isInComparison) return;
    if (canAddMore) {
      addToComparison(product);
    } else {
      showAlert(
        "Comparison Limit Reached",
        "You can compare up to 4 products at once.",
        "warning"
      );
    }
  };

  const gotoproduct = () => {
    router.push(`/products/${product._id}`);
  };

  const calculateDiscount = () => {
    if (product.originalPrice && product.currentPrice) {
      return Math.round(
        ((product.originalPrice - product.currentPrice) /
          product.originalPrice) *
          100
      );
    }
    return product.discountPercentage || 0;
  };

  const getAlertIcon = () => {
    switch (alertConfig.type) {
      case "success":
        return (
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        );
      case "error":
        return (
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        );
      case "warning":
        return (
          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-amber-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        );
    }
  };

  return (
    <>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="group h-full"
      >
        <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
          <div
            className={`absolute inset-0 bg-gradient-to-br from-violet-500/5 via-fuchsia-500/5 to-pink-500/5 transition-opacity duration-500 ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
          ></div>

          <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-30">
            {calculateDiscount() > 0 && (
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                {calculateDiscount()}% OFF
              </div>
            )}
            {!inStock && (
              <div className="bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg ml-auto">
                Out of Stock
              </div>
            )}
          </div>

          <div
            onClick={gotoproduct}
            className="relative h-72 flex items-center justify-center p-8 pt-12 pb-16 overflow-hidden cursor-pointer bg-gradient-to-br from-gray-50 to-gray-100"
          >
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-violet-200 to-fuchsia-200 rounded-full blur-3xl transition-all duration-700 ${
                isHovering ? "scale-150 opacity-40" : "scale-100 opacity-0"
              }`}
            ></div>

           <Image
  src={product.image}
  alt={product.name}
  width={400}
  height={208} // h-52 ≈ 208px
  className={`relative z-10 object-contain w-full transition-all duration-500 ${
    isHovering ? "scale-105" : "scale-100"
  }`}
/>


            <button
              onClick={(e) => {
                e.stopPropagation();
                console.log("Added to wishlist:", product.name);
              }}
              className={`absolute top-4 right-4 z-20 p-2.5 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 ${
                isHovering
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }`}
            >
              <svg
                className="w-5 h-5 text-red-500 hover:fill-red-500 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>

            <div
              className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent transition-all duration-500 ${
                isHovering
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex gap-2 justify-center">
                <button
                  onClick={gotoproduct}
                  className="flex-1 bg-white text-gray-900 px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Quick View
                </button>
                <button
                  onClick={handleCompareClick}
                  className={`px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
                    isInComparison
                      ? "bg-violet-600 text-white"
                      : "bg-white text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  {isInComparison ? "Added" : "Compare"}
                </button>
              </div>
            </div>
          </div>

          <div className="relative z-10 p-5">
            <h3
              onClick={gotoproduct}
              className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 cursor-pointer hover:text-violet-600 transition-colors duration-300 min-h-[3.5rem]"
            >
              {product.name}
            </h3>

            <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed min-h-[2.5rem]">
              {product.description}
            </p>

            {product.averageRating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.averageRating)
                          ? "text-amber-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-900">
                  {product.averageRating.toFixed(1)}
                </span>
                <span className="text-xs text-gray-500">
                  ({product.totalReviews || 0})
                </span>
              </div>
            )}

            <div className="flex items-center gap-2 mb-3">
              <div
                className={`w-2 h-2 rounded-full ${
                  inStock ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
              <span
                className={`text-sm font-medium ${
                  inStock ? "text-green-600" : "text-red-600"
                }`}
              >
                {inStock ? `${product.stock} in stock` : "Out of stock"}
              </span>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex flex-col">
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {product.currency || "₹"}
                    {product.originalPrice}
                  </span>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-gray-900">
                    {product.currency || "₹"}
                    {product.currentPrice || product.price}
                  </span>
                </div>
              </div>

              <button
                disabled={!inStock}
                onClick={handleAddToCart}
                className={`px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 transform flex items-center gap-2 ${
                  inStock
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-700 hover:to-fuchsia-700 hover:shadow-lg hover:scale-105 active:scale-95"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {inStock ? "Add to Cart" : "Unavailable"}
              </button>
            </div>
          </div>

          <div
            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 transition-all duration-500 ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>
      </div>

      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent className="sm:max-w-[425px]">
          <AlertDialogHeader>
            <div className="flex flex-col items-center text-center">
              {getAlertIcon()}
              <AlertDialogTitle className="text-xl font-bold">
                {alertConfig.title}
              </AlertDialogTitle>
              <AlertDialogDescription className="text-base mt-2">
                {alertConfig.description}
              </AlertDialogDescription>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:justify-center">
            <AlertDialogAction
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-8"
              onClick={() => setAlertOpen(false)}
            >
              Got it
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

// Main Component - Combines Category Nav and Product Section
export default function ProductsWithCategoryNav({
  defaultTitle = "Featured Products",
}) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productsLoading, setProductsLoading] = useState(true);
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "";
  const pathname = usePathname();

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true);
        const res = await fetch("/api/categories");

        if (!res.ok) {
          throw new Error("Failed to load categories");
        }

        const data = await res.json();
        setCategories([
          {
            name: "All",
            categoryId: "all",
            bannerImage:
              "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww",
          },
          ...data,
        ]);
      } catch (error) {
        console.error("Failed to load categories", error);
        setCategories([
          {
            name: "All",
            categoryId: "all",
            bannerImage: "/all-categories.jpg",
          },
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  // Fetch products based on category
  useEffect(() => {
    async function fetchProducts() {
      setProductsLoading(true);
      try {
        const url = currentCategory
          ? `/api/products?category=${currentCategory}`
          : "/api/products";

        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setProductsLoading(false);
      }
    }
    fetchProducts();
  }, [currentCategory]);

  return (
    <div className="bg-gray-50">
      {/* Category Navigation */}
      <div className="bg-white shadow-sm z-10 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 py-3">
          {loading ? (
            <div className="flex space-x-8 overflow-x-auto pb-2">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-gray-200 animate-pulse"></div>
                  <div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex space-x-8 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((cat) => (
                <Link
                  key={cat.categoryId}
                  href={
                    cat.categoryId === "all"
                      ? pathname
                      : `${pathname}?category=${encodeURIComponent(cat.name)}`
                  }
                  className="flex flex-col items-center space-y-2 group min-w-[70px]"
                >
                  <div
                    className={`relative w-16 h-16 rounded-full overflow-hidden border-2 transition-all ${
                      currentCategory === cat.name ||
                      (currentCategory === "" && cat.categoryId === "all")
                        ? "border-indigo-600 shadow-lg"
                        : "border-gray-200 group-hover:border-indigo-300"
                    }`}
                  >
                    <Image
                      src={cat.bannerImage || "/default-category.jpg"}
                      alt={cat.name}
                      width={64}
                      height={64}
                      unoptimized
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span
                    className={`text-xs font-medium transition-colors text-center ${
                      currentCategory === cat.name ||
                      (currentCategory === "" && cat.categoryId === "all")
                        ? "text-indigo-600"
                        : "text-gray-600 group-hover:text-indigo-500"
                    }`}
                  >
                    {cat.name}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-indigo-600 pl-3">
            {currentCategory
              ? `${
                  currentCategory.charAt(0).toUpperCase() +
                  currentCategory.slice(1)
                }`
              : defaultTitle}
          </h2>

          {productsLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <ProductCard key={i} loading />
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg
                className="w-24 h-24 mx-auto text-gray-300 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <p className="text-gray-500 text-lg">
                No products found in this category
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}