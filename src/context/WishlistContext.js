// // src/context/WishlistContext.js
// "use client";

// import { createContext, useContext, useState, useEffect, useCallback } from "react";
// import { useUser } from "@clerk/nextjs";

// const WishlistContext = createContext();

// export function WishlistProvider({ children }) {
//   const [wishlistItems, setWishlistItems] = useState([]);
//   const [wishlistCount, setWishlistCount] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const { isSignedIn } = useUser();

//   // Fetch wishlist
//   const fetchWishlist = useCallback(async () => {
//     if (!isSignedIn) {
//       setWishlistItems([]);
//       setWishlistCount(0);
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await fetch("/api/wishlist");
//       if (res.ok) {
//         const data = await res.json();
//         setWishlistItems(data.products || []);
//         setWishlistCount(data.totalItems || 0);
//       }
//     } catch (error) {
//       console.error("Failed to fetch wishlist:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, [isSignedIn]);

//   useEffect(() => {
//     fetchWishlist();
//   }, [fetchWishlist]);

//   // Add to wishlist
//   const addToWishlist = async (productId) => {
//     if (!isSignedIn) {
//       return { success: false, message: "Please sign in to add to wishlist" };
//     }

//     try {
//       const res = await fetch("/api/wishlist", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ productId }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         await fetchWishlist();
//         return { success: true, message: "Added to wishlist" };
//       }

//       return { success: false, message: data.error || "Failed to add" };
//     } catch (error) {
//       console.error("Add to wishlist error:", error);
//       return { success: false, message: "Something went wrong" };
//     }
//   };

//   // Remove from wishlist
//   const removeFromWishlist = async (productId) => {
//     try {
//       const res = await fetch(`/api/wishlist?productId=${productId}`, {
//         method: "DELETE",
//       });

//       if (res.ok) {
//         await fetchWishlist();
//         return { success: true, message: "Removed from wishlist" };
//       }

//       return { success: false, message: "Failed to remove" };
//     } catch (error) {
//       console.error("Remove from wishlist error:", error);
//       return { success: false, message: "Something went wrong" };
//     }
//   };

//   // Check if product is in wishlist
//   const isInWishlist = (productId) => {
//     return wishlistItems.some(item => item._id === productId);
//   };

//   // Toggle wishlist
//   const toggleWishlist = async (productId) => {
//     if (isInWishlist(productId)) {
//       return await removeFromWishlist(productId);
//     } else {
//       return await addToWishlist(productId);
//     }
//   };

//   const value = {
//     wishlistItems,
//     wishlistCount,
//     loading,
//     addToWishlist,
//     removeFromWishlist,
//     isInWishlist,
//     toggleWishlist,
//     refreshWishlist: fetchWishlist,
//   };

//   return (
//     <WishlistContext.Provider value={value}>
//       {children}
//     </WishlistContext.Provider>
//   );
// }

// export function useWishlist() {
//   const context = useContext(WishlistContext);
//   if (!context) {
//     throw new Error("useWishlist must be used within WishlistProvider");
//   }
//   return context;
// }



// import mongoose from "mongoose";

// const WishlistSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: String,
//       required: true,
//       unique: true,
//       index: true,
//     },
//     products: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Product",
//       },
//     ],
//     updatedAt: {
//       type: Date,
//       default: Date.now,
//     },
//   },
//   { timestamps: true }
// );

// WishlistSchema.index({ userId: 1 });
// WishlistSchema.index({ products: 1 });

// WishlistSchema.methods.addProduct = function (productId) {
//   if (!this.products.includes(productId)) {
//     this.products.push(productId);
//   }
// };

// WishlistSchema.methods.removeProduct = function (productId) {
//   this.products = this.products.filter(
//     (id) => id.toString() !== productId.toString()
//   );
// };

// export default mongoose.models.Wishlist ||
//   mongoose.model("Wishlist", WishlistSchema);









"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useUser } from "@clerk/nextjs";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const { isSignedIn } = useUser();

  const fetchWishlist = useCallback(async () => {
    if (!isSignedIn) {
      setWishlistItems([]);
      setWishlistCount(0);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/wishlist");
      if (res.ok) {
        const data = await res.json();
        setWishlistItems(data.products || []);
        setWishlistCount(data.totalItems || 0);
      }
    } catch (error) {
      console.error("Fetch wishlist error:", error);
    } finally {
      setLoading(false);
    }
  }, [isSignedIn]);

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  const addToWishlist = async (productId) => {
    if (!isSignedIn) {
      return { success: false, message: "Please sign in to add items" };
    }

    try {
      const res = await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const data = await res.json();
      if (res.ok) {
        await fetchWishlist();
        return { success: true, message: data.message };
      }
      return { success: false, message: data.error };
    } catch {
      return { success: false, message: "Something went wrong" };
    }
  };

  const removeFromWishlist = async (productId) => {
    try {
      const res = await fetch(`/api/wishlist?productId=${productId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        await fetchWishlist();
        return { success: true };
      }
      return { success: false };
    } catch {
      return { success: false };
    }
  };

  const isInWishlist = (productId) =>
    wishlistItems.some((item) => item._id === productId);

  const toggleWishlist = async (productId) =>
    isInWishlist(productId)
      ? await removeFromWishlist(productId)
      : await addToWishlist(productId);

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        wishlistCount,
        loading,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        refreshWishlist: fetchWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be inside WishlistProvider");
  return ctx;
}
