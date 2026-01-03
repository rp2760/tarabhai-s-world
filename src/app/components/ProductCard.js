// // "use client";
// // import Link from "next/link";

// // export default function ProductCard({ product }) {
// //   // return (
// //   //   <div className="bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
// //   //     <div className="h-48 overflow-hidden">
// //   //       <img
// //   //         src={product.image}
// //   //         alt={product.name}
// //   //         className="w-full h-full object-cover"
// //   //       />
// //   //     </div>
// //   //     <div className="p-4">
// //   //       <span className="inline-block bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded-full font-medium mb-2">
// //   //         {product.tag}
// //   //       </span>
// //   //       <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
// //   //       <p className="text-sm text-gray-600 mb-2">{product.description}</p>
// //   //       <div className="flex justify-between items-center mt-3">
// //   //     <span className="text-lg font-bold text-indigo-600">{product.price}</span>
// //   //         <div className="flex space-x-2">
// //   //           <button className="text-sm text-indigo-600 hover:underline">Buy</button>
// //   //           <button className="text-sm text-gray-500 hover:text-indigo-600">Details</button>
// //   //         </div>
// //   //       </div>
// //   //     </div>
// //   //   </div>
// //   // );
// // // Product Card Component

// //   return (
// //    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
// //       <div className="relative h-48 overflow-hidden">
// //         <img 
// //           src={product.image}
// //           alt={product.name}
// //           className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
// //         />
// //         <span className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded">
// //           {product.tag}
// //         </span>
// //       </div>
// //       <div className="p-4">
// //         <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
// //         <p className="text-gray-600 text-sm mb-2">{product.description}</p>
// //         <div className="flex justify-between items-center mt-3">
// //           <span className="text-lg font-bold text-gray-900">{product.price}</span>
// //           <div className="flex space-x-2">
// //             <AddToCartButton />
// //             <QuickViewButton />
// //           </div>
// //         </div>
// //       </div>
// //     </div>

// //   );
// // }



// // // Button Components
// // // function CTAButton({ text }) {
// // //   return (
// // //     <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50">
// // //       {text}
// // //     </button>
// // //   );
// // // }

// // // function SecondaryButton({ text }) {
// // //   return (
// // //     <button className="bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 border border-white hover:border-transparent">
// // //       {text}
// // //     </button>
// // //   );
// // // }

// // function AddToCartButton() {
// //   return (
// //     <button className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 p-2 rounded-full transition-colors duration-200">
// //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
// //       </svg>
// //     </button>
// //   );
// // }

// // function QuickViewButton() {
// //   return (
// //     <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded-full transition-colors duration-200">
// //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
// //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
// //       </svg>
// //     </button>
// //   );
// // }















// // // abhi niche jo he wo 31 ka updates hei




// "use client";
// import { useRouter } from "next/navigation";


// export default function ProductCard({ product }) {
  
//     const router = useRouter();
//     const gotoproduct = () => {
//     router.push(`/products/${product._id}`); // navigates to the about page
//     };

//   return (
//     <>
     
//     {/* // <Link href={`/products/${product._id}`}> */}
//       <div onClick={gotoproduct} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]">
//         <div className="relative  h-48 overflow-hidden">
//           <img 
//             src={product.image}
//             alt={product.name}
//             className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//           />
//           <span className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded">
//             {product.tag}
//           </span>
//         </div>
//         <div className="p-4">
//           <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
//           <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
//           <div className="flex justify-between items-center mt-3">
//             <span className="text-lg font-bold text-gray-900">{product.price}</span>
//             <div className="flex space-x-2">
//               <AddToCartButton onClick={(e) => e.preventDefault()} />
//               <QuickViewButton onClick={(e) => e.preventDefault()} />
//             </div>
//           </div>
//         </div>
//       </div>
//     {/* // </Link> */}
//   </>
//   );
// }

// // Button Components
// function AddToCartButton({ onClick }) {
//   return (
//     <button 
//       onClick={onClick}
//       className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 p-2 rounded-full transition-colors duration-200"
//     >
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//       </svg>
//     </button>
//   );
// }

// function QuickViewButton({ onClick }) {
//   return (
//     <button 
//       onClick={onClick}
//       className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded-full transition-colors duration-200"
//     >
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//       </svg>
//     </button>
//   );
// }













// "use client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function ProductCard({ product, loading }) {
//   const router = useRouter();
//   const [isHovering, setIsHovering] = useState(false);
//   const [cartAnimating, setCartAnimating] = useState(false);
  


//   if (loading) {
//     return (
//       <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] relative">
//         <div className="relative h-48 bg-gray-200 animate-pulse"></div>
//         <div className="p-4">
//           <div className="h-5 bg-gray-200 rounded-full animate-pulse mb-2 w-3/4"></div>
//           <div className="space-y-2">
//             <div className="h-3 bg-gray-200 rounded-full animate-pulse w-full"></div>
//             <div className="h-3 bg-gray-200 rounded-full animate-pulse w-5/6"></div>
//           </div>
//           <div className="flex justify-between items-center mt-4">
//             <div className="h-6 bg-gray-200 rounded-full animate-pulse w-1/4"></div>
//             <div className="flex space-x-2">
//               <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
//               <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }





//   const gotoproduct = () => {
//     router.push(`/products/${product._id}`);
//   };

//   const calculateDiscount = () => {
//     if (product.originalPrice && product.currentPrice) {
//       return Math.round(((product.originalPrice - product.currentPrice) / product.originalPrice) * 100);
//     }
//     return product.discountPercentage || 0;
//   };

//   const handleAddToCart = (e) => {
//     e.stopPropagation();
//     setCartAnimating(true);
//     // Add your cart logic here
//     setTimeout(() => setCartAnimating(false), 1000);
//   };

//   return (
//     <div 
//       onClick={gotoproduct}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//       className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] relative"
//     >
//       {/* Discount Badge */}
//       {calculateDiscount() > 0 && (
//         <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
//           {calculateDiscount()}% OFF
//         </div>
//       )}
      
//       {/* Tag Badge */}
//       <span className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded">
//         {product.tag}
//       </span>
      
//       {/* Product Image */}
//       <div className="relative h-48 overflow-hidden">
//         <img 
//           src={product.image}
//           alt={product.name}
//           className={`w-full h-full object-cover transition-transform duration-500 ${isHovering ? 'scale-105' : 'scale-100'}`}
//         />
//       </div>
      
//       {/* Product Info */}
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
//         <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
        
//         {/* Price Section */}
//         <div className="mb-3">
//           {product.originalPrice && (
//             <span className="text-sm text-gray-500 line-through mr-2">
//               {product.currency || '₹'}{product.originalPrice}
//             </span>
//           )}
//           <span className="text-lg font-bold text-gray-900">
//             {product.currency || '₹'}{product.currentPrice || product.price}
//           </span>
//         </div>
        
//         {/* Stock Status */}
//         <div className="mb-3">
//           <div className="w-full bg-gray-200 rounded-full h-2">
//             <div 
//               className="bg-green-600 h-2 rounded-full" 
//               style={{ width: `${Math.min(100, (product.stock / 50) * 100)}%` }}
//             ></div>
//           </div>
//           <p className="text-xs text-gray-500 mt-1">
//             {product.inStock ? `${product.stock} left in stock` : 'Out of stock'}
//           </p>
//         </div>
        
//         {/* Rating */}
//         {product.averageRating && (
//           <div className="flex items-center mb-3">
//             <div className="flex">
//               {[...Array(5)].map((_, i) => (
//                 <svg
//                   key={i}
//                   className={`w-4 h-4 ${i < Math.floor(product.averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//               ))}
//             </div>
//             <span className="text-xs text-gray-500 ml-1">
//               ({product.totalReviews || 0} reviews)
//             </span>
//           </div>
//         )}
        
//         {/* Action Buttons */}
//         <div className="flex justify-between items-center">
//           <div className="flex space-x-2">
//             <AddToCartButton 
//               onClick={handleAddToCart} 
//               isAnimating={cartAnimating}
//               disabled={!product.inStock}
//             />
//             <QuickViewButton onClick={(e) => e.preventDefault()} />
//           </div>
          
//           {product.deliveryTime && (
//             <span className="text-xs text-gray-500">
//               Delivery: {product.deliveryTime}
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Enhanced AddToCartButton with animation
// // Update the AddToCartButton in your ProductCard.js
// function AddToCartButton({ onClick, isAnimating, disabled }) {
//   return (
//     <button 
//       onClick={onClick}
//       disabled={disabled}
//       className={`relative bg-indigo-100 hover:bg-indigo-200 text-indigo-800 p-2 rounded-full transition-all duration-200 ${
//         disabled ? 'opacity-50 cursor-not-allowed' : ''
//       } ${
//         isAnimating ? 'animate-ping' : ''
//       }`}
//     >
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//       </svg>
//       {isAnimating && (
//         <span className="absolute -top-1 -right-1 flex h-3 w-3">
//           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//           <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
//         </span>
//       )}
//     </button>
//   );
// }

// // Update the handleAddToCart function in ProductCard
// const handleAddToCart = async (e) => {
//   e.stopPropagation();
//   setCartAnimating(true);
  
//   try {
//     const res = await fetch('/api/cart', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ 
//         productId: product._id,
//         quantity: 1
//       })
//     });
    
//     if (res.ok) {
//       // Optional: Show a success message or update cart count
//     }
//   } catch (error) {
//     console.error('Failed to add to cart', error);
//   } finally {
//     setTimeout(() => setCartAnimating(false), 1000);
//   }
// };

// // Enhanced QuickViewButton
// function QuickViewButton({ onClick }) {
//   return (
//     <button 
//       onClick={onClick}
//       className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded-full transition-all duration-200 group relative"
//     >
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//       </svg>
//       <span className="absolute bottom-full mb-2 hidden group-hover:block w-auto px-2 py-1 text-xs text-white bg-gray-800 rounded whitespace-nowrap">
//         Quick View
//       </span>
//     </button>
//   );
// }













// "use client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useComparison } from '../../context/ComparisonContext';

// export default function ProductCard({ product, loading }) {
//   const router = useRouter();
//   const [isHovering, setIsHovering] = useState(false);
//   const { addToComparison, canAddMore, comparisonProducts } = useComparison();
//   const isInComparison = comparisonProducts.some(p => p._id === product._id);


//   if (loading) {
//     return (
//       <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
//         <div className="relative h-52 bg-gray-200"></div>
//         <div className="p-4">
//           <div className="h-5 bg-gray-200 rounded-full mb-2 w-3/4"></div>
//           <div className="h-3 bg-gray-200 rounded-full mb-2 w-5/6"></div>
//           <div className="h-3 bg-gray-200 rounded-full w-2/3"></div>
//         </div>
//       </div>
//     );
//   }

//   const handleCompareClick = (e) => {
//     e.stopPropagation();
//     if (isInComparison) {
//       // Optionally navigate to comparison page or show notification
//     } else if (canAddMore) {
//       addToComparison(product);
//       // Show success notification
//     } else {
//       // Show error notification - max products reached
//       alert('You can compare up to 4 products at once');
//     }
//   };





//   const gotoproduct = () => {
//     router.push(`/products/${product._id}`);
//   };

//   const calculateDiscount = () => {
//     if (product.originalPrice && product.currentPrice) {
//       return Math.round(
//         ((product.originalPrice - product.currentPrice) /
//           product.originalPrice) *
//           100
//       );
//     }
//     return product.discountPercentage || 0;
//   };

//   return (
//    <div
//       onClick={gotoproduct}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//       className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-xl relative group"
//     >
//       {/* Discount Badge */}
//       {calculateDiscount() > 0 && (
//         <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10 shadow-md">
//           {calculateDiscount()}% OFF
//         </div>
//       )}

//       {/* Tag Badge */}
//       {product.tag && (
//         <span className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded shadow-md">
//           {product.tag}
//         </span>
//       )}

//       {/* Product Image */}
//       <div className="relative h-56 overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.name}
//           className={`w-full h-full object-cover transition-transform duration-500 ${
//             isHovering ? "scale-105" : "scale-100"
//           }`}
//         />

//         {/* Hover Action Buttons */}
//         <div
//         className={`absolute top-3 right-3 flex flex-col gap-2 transform transition-all duration-300 ${
//           isHovering ? "opacity-100 scale-100" : "opacity-0 scale-75"
//         }`}
//       >
//         <AddToCartButton disabled={!product.inStock} />
//         <QuickViewButton />
//         <CompareButton 
//           onClick={handleCompareClick} 
//           isInComparison={isInComparison}
          
//         />
//       </div>
//       </div>

//       {/* Product Info */}
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-900 mb-1">
//           {product.name}
//         </h3>
//         <p className="text-gray-600 text-sm mb-2 line-clamp-2">
//           {product.description}
//         </p>

//         {/* Price Section */}
//         <div className="mb-3">
//           {product.originalPrice && (
//             <span className="text-sm text-gray-500 line-through mr-2">
//               {product.currency || "₹"}
//               {product.originalPrice}
//             </span>
//           )}
//           <span className="text-lg font-bold text-indigo-700">
//             {product.currency || "₹"}
//             {product.currentPrice || product.price}
//           </span>
//         </div>

//         {/* Rating */}
//         {product.averageRating && (
//           <div className="flex items-center mb-2">
//             <div className="flex">
//               {[...Array(5)].map((_, i) => (
//                 <svg
//                   key={i}
//                   className={`w-4 h-4 ${
//                     i < Math.floor(product.averageRating)
//                       ? "text-yellow-400"
//                       : "text-gray-300"
//                   }`}
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//               ))}
//             </div>
//             <span className="text-xs text-gray-500 ml-1">
//               ({product.totalReviews || 0})
//             </span>
//           </div>
//         )}

//         {/* Delivery Time */}
//         {product.deliveryTime && (
//           <p className="text-xs text-gray-500">
//             Delivery: {product.deliveryTime}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// /* Floating Buttons */
// function AddToCartButton({ disabled }) {
//   return (
//     <button
//       disabled={disabled}
//       className={`bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full shadow-md transition-all duration-300 ${
//         disabled ? "opacity-100 " : ""
//       }`}
//       onClick={(e) => {
//         e.stopPropagation();
//         // cart logic here  
//       }}
//     >
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 
//           2.293c-.63.63-.184 1.707.707 1.707H17m0 
//           0a2 2 0 100 4 2 2 0 000-4zm-8 
//           2a2 2 0 11-4 0 2 2 0 014 0z"
//         />
//       </svg>
//     </button>
//   );
// }

// function QuickViewButton() {
//   return (
//     <button
//       onClick={(e) => e.preventDefault()}
//       className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded-full shadow-md transition-all duration-300"
//     >
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//         />
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M2.458 12C3.732 7.943 
//           7.523 5 12 5c4.478 0 8.268 2.943 
//           9.542 7-1.274 4.057-5.064 7-9.542 
//           7-4.477 0-8.268-2.943-9.542-7z"
//         />
//       </svg>
//     </button>
//   );
// }




// function CompareButton({ onClick, isInComparison }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`p-2 rounded-full shadow-md transition-all duration-300 ${
//         isInComparison 
//           ? "bg-indigo-600 text-white" 
//           : "bg-gray-100 hover:bg-gray-200 text-gray-800"
//       }`}
//       title={isInComparison ? "Already in comparison" : "Add to comparison"}
//     >
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//         />
//       </svg>
//     </button>
//   );
// }





// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useComparison } from "../../context/ComparisonContext";
// import { useCart } from "@/context/CartContext";
// import { useUser } from "@clerk/nextjs";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from "@/components/ui/alert-dialog";

// export default function ProductCard({ product, loading }) {
//   const router = useRouter();
//   const [isHovering, setIsHovering] = useState(false);
//   const [showQuickView, setShowQuickView] = useState(false);
//   const { addToComparison, canAddMore, comparisonProducts } = useComparison();
//   const { refreshCart } = useCart();
//   const { isSignedIn } = useUser();

//   // Alert dialog states
//   const [alertOpen, setAlertOpen] = useState(false);
//   const [alertConfig, setAlertConfig] = useState({
//     title: "",
//     description: "",
//     type: "info", // 'success', 'error', 'info', 'warning'
//   });

//   // Safety check for product
//   if (!product && !loading) {
//     return null;
//   }

//   const isInComparison = product
//     ? comparisonProducts.some((p) => p._id === product._id)
//     : false;

//   // Check if product is in stock
//   const isInStock = () => {
//     if (!product || !product.stock) return false;
//     if (typeof product.stock === "string") {
//       return parseInt(product.stock) > 0;
//     }
//     return product.stock > 0;
//   };

//   const inStock = isInStock();

//   // Helper function to show alert
//   const showAlert = (title, description, type = "info") => {
//     setAlertConfig({ title, description, type });
//     setAlertOpen(true);
//   };

//   if (loading) {
//     return (
//       <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse border border-gray-100">
//         <div className="relative h-72 bg-gradient-to-br from-gray-100 to-gray-200"></div>
//         <div className="p-5">
//           <div className="h-6 bg-gray-200 rounded-lg mb-3 w-4/5"></div>
//           <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
//           <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
//           <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
//         </div>
//       </div>
//     );
//   }

//   // 🛒 Add to cart logic
//   const handleAddToCart = async (e) => {
//     e.stopPropagation();

//     if (!isSignedIn) {
//       showAlert(
//         "Sign In Required",
//         "Please sign in to add items to your cart.",
//         "warning"
//       );
//       return;
//     }

//     if (!inStock) {
//       showAlert(
//         "Out of Stock",
//         "This product is currently out of stock.",
//         "error"
//       );
//       return;
//     }

//     try {
//       const res = await fetch("/api/cart", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           productId: product._id,
//           name: product.name,
//           price: product.currentPrice || product.price,
//           quantity: 1,
//         }),
//       });

//       if (res.ok) {
//         await refreshCart(); // ✅ Update global cart count instantly
//         showAlert(
//           "Added to Cart!",
//           `${product.name} has been added to your cart successfully.`,
//           "success"
//         );
//       } else {
//         const error = await res.json();
//         console.error("Add to cart failed:", error);
//         showAlert(
//           "Failed to Add",
//           "Failed to add product to cart. Please try again.",
//           "error"
//         );
//       }
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       showAlert(
//         "Error",
//         "Something went wrong. Please try again.",
//         "error"
//       );
//     }
//   };

//   const handleCompareClick = (e) => {
//     e.stopPropagation();
//     if (isInComparison) return;
//     if (canAddMore) {
//       addToComparison(product);
//     } else {
//       showAlert(
//         "Comparison Limit Reached",
//         "You can compare up to 4 products at once.",
//         "warning"
//       );
//     }
//   };

//   const handleQuickView = (e) => {
//     e.stopPropagation();
//     setShowQuickView(!showQuickView);
//     console.log("Quick view:", product.name);
//     // Add your quick view modal logic here
//   };

//   const gotoproduct = () => {
//     router.push(`/products/${product._id}`);
//   };

//   const calculateDiscount = () => {
//     if (product.originalPrice && product.currentPrice) {
//       return Math.round(
//         ((product.originalPrice - product.currentPrice) /
//           product.originalPrice) *
//           100
//       );
//     }
//     return product.discountPercentage || 0;
//   };

//   // Get icon based on alert type
//   const getAlertIcon = () => {
//     switch (alertConfig.type) {
//       case "success":
//         return (
//           <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
//             <svg
//               className="w-6 h-6 text-green-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//           </div>
//         );
//       case "error":
//         return (
//           <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
//             <svg
//               className="w-6 h-6 text-red-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </div>
//         );
//       case "warning":
//         return (
//           <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
//             <svg
//               className="w-6 h-6 text-amber-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
//               />
//             </svg>
//           </div>
//         );
//       default:
//         return (
//           <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
//             <svg
//               className="w-6 h-6 text-blue-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//           </div>
//         );
//     }
//   };

//   return (
//     <>
//       <div
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//         className="group h-full"
//       >
//         <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
//           {/* Gradient overlay on hover */}
//           <div
//             className={`absolute inset-0 bg-gradient-to-br from-violet-500/5 via-fuchsia-500/5 to-pink-500/5 transition-opacity duration-500 ${
//               isHovering ? "opacity-100" : "opacity-0"
//             }`}
//           ></div>

//           {/* Top Badges */}
//           <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-30">
//             {calculateDiscount() > 0 && (
//               <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
//                 {calculateDiscount()}% OFF
//               </div>
//             )}
//             {!inStock && (
//               <div className="bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg ml-auto">
//                 Out of Stock
//               </div>
//             )}
//           </div>

//           {/* Product Image Section */}
//           <div
//             onClick={gotoproduct}
//             className="relative h-72 flex items-center justify-center p-8 pt-12 pb-16 overflow-hidden cursor-pointer bg-gradient-to-br from-gray-50 to-gray"
//           >
//             {/* Animated background circles */}
//             <div
//               className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-violet-200 to-fuchsia-200 rounded-full blur-3xl transition-all duration-700 ${
//                 isHovering ? "scale-150 opacity-40" : "scale-100 opacity-0"
//               }`}
//             ></div>

//             <img
//               src={product.image}
//               alt={product.name}
//               className={`relative z-10 object-contain h-52 w-full transition-all duration-500 ${
//                 isHovering ? "scale-105" : "scale-100"
//               }`}
//             />

//             {/* Wishlist button */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 console.log("Added to wishlist:", product.name);
//               }}
//               className={`absolute top-4 right-4 z-20 p-2.5 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 ${
//                 isHovering
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 -translate-y-2"
//               }`}
//             >
//               <svg
//                 className="w-5 h-5 text-red-500 hover:fill-red-500 transition-all"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                 />
//               </svg>
//             </button>

//             {/* Quick action overlay */}
//             <div
//               className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent transition-all duration-500 ${
//                 isHovering
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-4"
//               }`}
//             >
//               <div className="flex gap-2 justify-center">
//                 <button
//                   onClick={gotoproduct}
//                   className="flex-1 bg-white text-gray-900 px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
//                 >
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                     />
//                   </svg>
//                   Quick View
//                 </button>
//                 <button
//                   onClick={handleCompareClick}
//                   className={`px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
//                     isInComparison
//                       ? "bg-violet-600 text-white"
//                       : "bg-white text-gray-900 hover:bg-gray-100"
//                   }`}
//                 >
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//                     />
//                   </svg>
//                   {isInComparison ? "Added" : "Compare"}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Product Info Section */}
//           <div className="relative z-10 p-5">
//             <h3
//               onClick={gotoproduct}
//               className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 cursor-pointer hover:text-violet-600 transition-colors duration-300 min-h-[3.5rem]"
//             >
//               {product.name}
//             </h3>

//             <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed min-h-[2.5rem]">
//               {product.description}
//             </p>

//             {product.averageRating && (
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <svg
//                       key={i}
//                       className={`w-4 h-4 ${
//                         i < Math.floor(product.averageRating)
//                           ? "text-amber-400"
//                           : "text-gray-300"
//                       }`}
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <span className="text-sm font-bold text-gray-900">
//                   {product.averageRating.toFixed(1)}
//                 </span>
//                 <span className="text-xs text-gray-500">
//                   ({product.totalReviews || 0})
//                 </span>
//               </div>
//             )}

//             {/* Stock indicator */}
//             <div className="flex items-center gap-2 mb-3">
//               <div
//                 className={`w-2 h-2 rounded-full ${
//                   inStock ? "bg-green-500" : "bg-red-500"
//                 }`}
//               ></div>
//               <span
//                 className={`text-sm font-medium ${
//                   inStock ? "text-green-600" : "text-red-600"
//                 }`}
//               >
//                 {inStock ? `${product.stock} in stock` : "Out of stock"}
//               </span>
//             </div>

//             {/* Price and Add to Cart */}
//             <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//               <div className="flex flex-col">
//                 {product.originalPrice && (
//                   <span className="text-sm text-gray-400 line-through">
//                     {product.currency || "₹"}
//                     {product.originalPrice}
//                   </span>
//                 )}
//                 <div className="flex items-baseline gap-1">
//                   <span className="text-2xl font-bold text-gray-900">
//                     {product.currency || "₹"}
//                     {product.currentPrice || product.price}
//                   </span>
//                 </div>
//               </div>

//               <button
//                 disabled={!inStock}
//                 onClick={handleAddToCart}
//                 className={`px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 transform flex items-center gap-2 ${
//                   inStock
//                     ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-700 hover:to-fuchsia-700 hover:shadow-lg hover:scale-105 active:scale-95"
//                     : "bg-gray-200 text-gray-400 cursor-not-allowed"
//                 }`}
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                   />
//                 </svg>
//                 {inStock ? "Add to Cart" : "Unavailable"}
//               </button>
//             </div>
//           </div>

//           {/* Bottom accent line */}
//           <div
//             className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 transition-all duration-500 ${
//               isHovering ? "opacity-100" : "opacity-0"
//             }`}
//           ></div>
//         </div>
//       </div>

//       {/* shadcn Alert Dialog */}
//       <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
//         <AlertDialogContent className="sm:max-w-[425px]">
//           <AlertDialogHeader>
//             <div className="flex flex-col items-center text-center">
//               {getAlertIcon()}
//               <AlertDialogTitle className="text-xl font-bold">
//                 {alertConfig.title}
//               </AlertDialogTitle>
//               <AlertDialogDescription className="text-base mt-2">
//                 {alertConfig.description}
//               </AlertDialogDescription>
//             </div>
//           </AlertDialogHeader>
//           <AlertDialogFooter className="sm:justify-center">
//             <AlertDialogAction
//               className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-8"
//               onClick={() => setAlertOpen(false)}
//             >
//               Got it
//             </AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </>
//   );
// }






"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
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
import Image from "next/image";

export default function ProductCard({ product, loading }) {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const { addToComparison, canAddMore, comparisonProducts } = useComparison();
  const { refreshCart } = useCart();
  const { isSignedIn } = useUser();

  // Alert dialog states
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertConfig, setAlertConfig] = useState({
    title: "",
    description: "",
    type: "info", // 'success', 'error', 'info', 'warning'
  });

  // Safety check for product
  if (!product && !loading) {
    return null;
  }

  const isInComparison = product
    ? comparisonProducts.some((p) => p._id === product._id)
    : false;

  // Calculate total stock from variants (nested structure)
  const getTotalStock = () => {
    if (!product) return 0;
    
    // If product has variants with nested options
    if (product.variants && Array.isArray(product.variants)) {
      let totalStock = 0;
      product.variants.forEach(variant => {
        if (variant.options && Array.isArray(variant.options)) {
          variant.options.forEach(option => {
            totalStock += parseInt(option.stock) || 0;
          });
        }
      });
      return totalStock;
    }
    
    // Fallback to direct stock field
    if (product.stock) {
      if (typeof product.stock === "string") {
        return parseInt(product.stock) || 0;
      }
      return product.stock;
    }
    
    return 0;
  };

  // Get base/starting price (lowest price from all variants)
  const getBasePrice = () => {
    if (!product) return 0;
    
    // If product has variants with nested options
    if (product.variants && Array.isArray(product.variants)) {
      let lowestPrice = Infinity;
      product.variants.forEach(variant => {
        if (variant.options && Array.isArray(variant.options)) {
          variant.options.forEach(option => {
            if (option.price && option.price < lowestPrice) {
              lowestPrice = option.price;
            }
          });
        }
      });
      return lowestPrice !== Infinity ? lowestPrice : (product.currentPrice || product.price || 0);
    }
    
    return product.currentPrice || product.price || 0;
  };

  const totalStock = getTotalStock();
  const inStock = totalStock > 0;
  const displayPrice = getBasePrice();

  // Helper function to show alert
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

  // 🛒 Add to cart logic (redirects to product page for variant selection)
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

    // If product has variants, redirect to product page for selection
    if (product.variants && product.variants.length > 0) {
      router.push(`/products/${product._id}`);
      return;
    }

    // Otherwise add directly to cart
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product._id,
          name: product.name,
          price: displayPrice,
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
      showAlert(
        "Error",
        "Something went wrong. Please try again.",
        "error"
      );
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

  const handleQuickView = (e) => {
    e.stopPropagation();
    setShowQuickView(!showQuickView);
    console.log("Quick view:", product.name);
  };

  const gotoproduct = () => {
    router.push(`/products/${product._id}`);
  };

  const calculateDiscount = () => {
    if (product.originalPrice && displayPrice) {
      return Math.round(
        ((product.originalPrice - displayPrice) / product.originalPrice) * 100
      );
    }
    return product.discountPercentage || 0;
  };

  // Get icon based on alert type
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
          {/* Gradient overlay on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-violet-500/5 via-fuchsia-500/5 to-pink-500/5 transition-opacity duration-500 ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
          ></div>

          {/* Top Badges */}
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

          {/* Product Image Section */}
          <div
            onClick={gotoproduct}
            className="relative h-72 flex items-center justify-center p-8 pt-12 pb-16 overflow-hidden cursor-pointer bg-gradient-to-br from-gray-50 to-gray-100"
          >
            {/* Animated background circles */}
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-violet-200 to-fuchsia-200 rounded-full blur-3xl transition-all duration-700 ${
                isHovering ? "scale-150 opacity-40" : "scale-100 opacity-0"
              }`}
            ></div>

           <Image
  src={product.image}
  alt={product.name}
  width={400}
  height={300}
  className={`relative z-10 object-contain h-52 w-full transition-all duration-500 ${
    isHovering ? "scale-105" : "scale-100"
  }`}
/>

            {/* Wishlist button */}
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

            {/* Quick action overlay */}
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

          {/* Product Info Section */}
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

            {/* Stock indicator */}
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
                {inStock ? `${totalStock} in stock` : "Out of stock"}
              </span>
            </div>

            {/* Show variant count if applicable */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-3 text-xs text-gray-500">
                {product.variants.length} color{product.variants.length > 1 ? 's' : ''} available
              </div>
            )}

            {/* Price and Add to Cart */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex flex-col">
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {product.currency || "₹"}
                    {product.originalPrice}
                  </span>
                )}
                <div className="flex items-baseline gap-1">
                  {/* {product.variants && product.variants.length > 0 && (
                    <span className="text-xs text-gray-500">From </span>
                  )} */}
                  <span className="text-2xl font-bold text-gray-900">
                    {product.currency || "₹"}
                    {displayPrice}
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
                {inStock 
                  ? (product.variants && product.variants.length > 0 ? "see more" : "Add to Cart")
                  : "Unavailable"
                }
              </button>
            </div>
          </div>

          {/* Bottom accent line */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 transition-all duration-500 ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>
      </div>

      {/* shadcn Alert Dialog */}
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



















// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useComparison } from "../../context/ComparisonContext";
// import { useCart } from "@/context/CartContext";
// import { useUser } from "@clerk/nextjs";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from "@/components/ui/alert-dialog";

// export default function ProductCard({ product, loading }) {
//   const router = useRouter();
//   const [isHovering, setIsHovering] = useState(false);
//   const [showQuickView, setShowQuickView] = useState(false);
//   const { addToComparison, canAddMore, comparisonProducts } = useComparison();
//   const { refreshCart } = useCart();
//   const { isSignedIn } = useUser();

//   // Alert dialog states
//   const [alertOpen, setAlertOpen] = useState(false);
//   const [alertConfig, setAlertConfig] = useState({
//     title: "",
//     description: "",
//     type: "info",
//   });

//   // Safety check for product
//   if (!product && !loading) {
//     return null;
//   }

//   const isInComparison = product
//     ? comparisonProducts.some((p) => p._id === product._id)
//     : false;

//   // Calculate total stock from variants (nested structure)
//   const getTotalStock = () => {
//     if (!product) return 0;
    
//     if (product.variants && Array.isArray(product.variants)) {
//       let totalStock = 0;
//       product.variants.forEach(variant => {
//         if (variant.options && Array.isArray(variant.options)) {
//           variant.options.forEach(option => {
//             totalStock += parseInt(option.stock) || 0;
//           });
//         }
//       });
//       return totalStock;
//     }
    
//     if (product.stock) {
//       if (typeof product.stock === "string") {
//         return parseInt(product.stock) || 0;
//       }
//       return product.stock;
//     }
    
//     return 0;
//   };

//   // Get base/starting price (lowest price from all variants)
//   const getBasePrice = () => {
//     if (!product) return 0;
    
//     if (product.variants && Array.isArray(product.variants)) {
//       let lowestPrice = Infinity;
//       product.variants.forEach(variant => {
//         if (variant.options && Array.isArray(variant.options)) {
//           variant.options.forEach(option => {
//             if (option.price && option.price < lowestPrice) {
//               lowestPrice = option.price;
//             }
//           });
//         }
//       });
//       return lowestPrice !== Infinity ? lowestPrice : (product.currentPrice || product.price || 0);
//     }
    
//     return product.currentPrice || product.price || 0;
//   };

//   const totalStock = getTotalStock();
//   const inStock = totalStock > 0;
//   const displayPrice = getBasePrice();

//   // Helper function to show alert
//   const showAlert = (title, description, type = "info") => {
//     setAlertConfig({ title, description, type });
//     setAlertOpen(true);
//   };

//   // Get dynamic gradient based on product index or category
//   const getGradientColor = () => {
//     const gradients = [
//       "from-blue-500 via-blue-600 to-cyan-500",
//       "from-fuchsia-500 via-purple-600 to-pink-500",
//       "from-orange-500 via-red-600 to-pink-500",
//       "from-green-500 via-teal-600 to-cyan-500",
//       "from-violet-500 via-purple-600 to-indigo-500",
//       "from-amber-500 via-orange-600 to-red-500",
//     ];
    
//     if (!product) return gradients[0];
    
//     // Use product name hash to consistently assign gradient
//     const hash = product.name?.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) || 0;
//     return gradients[hash % gradients.length];
//   };

//   const gradientClass = getGradientColor();

//   if (loading) {
//     return (
//       <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden animate-pulse border border-gray-700 shadow-2xl">
//         <div className="relative h-80 bg-gradient-to-br from-gray-700 to-gray-800">
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
//         </div>
//         <div className="p-6 space-y-4">
//           <div className="h-7 bg-gray-700 rounded-lg w-4/5"></div>
//           <div className="h-4 bg-gray-700 rounded w-full"></div>
//           <div className="h-4 bg-gray-700 rounded w-3/4"></div>
//           <div className="flex gap-2 mt-4">
//             <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
//             <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
//             <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
//             <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
//             <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
//           </div>
//           <div className="h-12 bg-gray-700 rounded-xl w-full mt-4"></div>
//         </div>
//       </div>
//     );
//   }

//   // 🛒 Add to cart logic
//   const handleAddToCart = async (e) => {
//     e.stopPropagation();

//     if (!isSignedIn) {
//       showAlert(
//         "Sign In Required",
//         "Please sign in to add items to your cart.",
//         "warning"
//       );
//       return;
//     }

//     if (!inStock) {
//       showAlert(
//         "Out of Stock",
//         "This product is currently out of stock.",
//         "error"
//       );
//       return;
//     }

//     if (product.variants && product.variants.length > 0) {
//       router.push(`/products/${product._id}`);
//       return;
//     }

//     try {
//       const res = await fetch("/api/cart", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           productId: product._id,
//           name: product.name,
//           price: displayPrice,
//           quantity: 1,
//         }),
//       });

//       if (res.ok) {
//         await refreshCart();
//         showAlert(
//           "Added to Cart!",
//           `${product.name} has been added to your cart successfully.`,
//           "success"
//         );
//       } else {
//         const error = await res.json();
//         console.error("Add to cart failed:", error);
//         showAlert(
//           "Failed to Add",
//           "Failed to add product to cart. Please try again.",
//           "error"
//         );
//       }
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       showAlert(
//         "Error",
//         "Something went wrong. Please try again.",
//         "error"
//       );
//     }
//   };

//   const handleCompareClick = (e) => {
//     e.stopPropagation();
//     if (isInComparison) return;
//     if (canAddMore) {
//       addToComparison(product);
//     } else {
//       showAlert(
//         "Comparison Limit Reached",
//         "You can compare up to 4 products at once.",
//         "warning"
//       );
//     }
//   };

//   const gotoproduct = () => {
//     router.push(`/products/${product._id}`);
//   };

//   const calculateDiscount = () => {
//     if (product.originalPrice && displayPrice) {
//       return Math.round(
//         ((product.originalPrice - displayPrice) / product.originalPrice) * 100
//       );
//     }
//     return product.discountPercentage || 0;
//   };

//   // Get icon based on alert type
//   const getAlertIcon = () => {
//     switch (alertConfig.type) {
//       case "success":
//         return (
//           <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
//             <svg
//               className="w-6 h-6 text-green-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//           </div>
//         );
//       case "error":
//         return (
//           <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
//             <svg
//               className="w-6 h-6 text-red-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </div>
//         );
//       case "warning":
//         return (
//           <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
//             <svg
//               className="w-6 h-6 text-amber-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
//               />
//             </svg>
//           </div>
//         );
//       default:
//         return (
//           <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
//             <svg
//               className="w-6 h-6 text-blue-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//           </div>
//         );
//     }
//   };

//   return (
//     <>
//       <div
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//         className="group h-full"
//       >
//         <div className={`relative h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl overflow-hidden border border-gray-700 shadow-2xl transition-all duration-500 ${
//           isHovering ? "shadow-[0_0_40px_rgba(139,92,246,0.4)] scale-[1.02] border-violet-500/50" : ""
//         }`}>
          
//           {/* Animated background circles */}
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${gradientClass} rounded-full blur-3xl opacity-20 transition-all duration-700 ${
//               isHovering ? "scale-150" : "scale-100"
//             }`}></div>
//             <div className={`absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr ${gradientClass} rounded-full blur-3xl opacity-10 transition-all duration-700 ${
//               isHovering ? "scale-110" : "scale-100"
//             }`}></div>
            
//             {/* Decorative wave elements */}
//             <svg className={`absolute top-10 right-10 w-16 h-16 text-${gradientClass.split('-')[1]}-500/30 transition-all duration-700 ${
//               isHovering ? "rotate-180 scale-125" : "rotate-0"
//             }`} viewBox="0 0 100 100" fill="currentColor">
//               <path d="M10 50 Q 30 20, 50 50 T 90 50" stroke="currentColor" fill="none" strokeWidth="3"/>
//             </svg>
//             <svg className="absolute bottom-10 left-10 w-12 h-12 text-pink-500/30" viewBox="0 0 100 100" fill="currentColor">
//               <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3"/>
//             </svg>
//           </div>

//           {/* Price badge - top right */}
//           {calculateDiscount() > 0 && (
//             <div className={`absolute top-4 right-4 z-30 bg-gradient-to-r ${gradientClass} text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg transition-all duration-500 ${
//               isHovering ? "scale-110 rotate-3" : ""
//             }`}>
//               ${displayPrice}
//             </div>
//           )}

//           {/* Product Image Section */}
//           <div
//             onClick={gotoproduct}
//             className={`relative h-80 flex items-center justify-center p-8 overflow-hidden cursor-pointer transition-all duration-500 ${
//               isHovering ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50" : "bg-transparent"
//             }`}
//           >
//             {/* Large gradient orb behind product */}
//             <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
//               isHovering ? "scale-100 opacity-100" : "scale-75 opacity-0"
//             }`}>
//               <div className={`w-72 h-72 bg-gradient-to-br ${gradientClass} rounded-full blur-3xl opacity-30`}></div>
//             </div>

//             <img
//               src={product.image}
//               alt={product.name}
//               className={`relative z-10 object-contain h-64 w-full drop-shadow-2xl transition-all duration-700 ${
//                 isHovering ? "scale-110 rotate-3" : "scale-100 rotate-0"
//               }`}
//             />

//             {/* Wishlist button */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 console.log("Added to wishlist:", product.name);
//               }}
//               className={`absolute top-6 left-6 z-20 p-3 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700 hover:border-red-500 shadow-lg transition-all duration-300 hover:scale-110 ${
//                 isHovering ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
//               }`}
//             >
//               <svg
//                 className="w-5 h-5 text-red-400 hover:fill-red-500 transition-all"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                 />
//               </svg>
//             </button>

//             {/* Compare button */}
//             <button
//               onClick={handleCompareClick}
//               className={`absolute top-6 right-6 z-20 p-3 backdrop-blur-sm rounded-full border shadow-lg transition-all duration-300 hover:scale-110 ${
//                 isInComparison
//                   ? "bg-violet-600 border-violet-400"
//                   : "bg-gray-800/80 border-gray-700 hover:border-violet-500"
//               } ${isHovering ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
//             >
//               <svg
//                 className={`w-5 h-5 ${isInComparison ? "text-white" : "text-violet-400"}`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Divider line */}
//           <div className={`h-px bg-gradient-to-r ${gradientClass} mx-6 opacity-30`}></div>

//           {/* Product Info Section */}
//           <div className="relative z-10 p-6 space-y-4">
//             <h3
//               onClick={gotoproduct}
//               className="text-xl font-bold text-white mb-2 line-clamp-2 cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-violet-400 hover:to-fuchsia-400 transition-all duration-300"
//             >
//               {product.name}
//             </h3>

//             <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
//               {product.description}
//             </p>

//             {/* Details section with colored titles */}
//             <div className="space-y-2">
//               {product.variants && product.variants.length > 0 && (
//                 <div className="flex items-center gap-2">
//                   <span className={`text-sm font-semibold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
//                     YOUR TITLE
//                   </span>
//                   <span className="text-xs text-gray-500">
//                     {product.variants.length} color{product.variants.length > 1 ? 's' : ''} available
//                   </span>
//                 </div>
//               )}
              
//               <div className="flex items-center gap-2">
//                 <span className={`text-sm font-semibold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
//                   STOCK STATUS
//                 </span>
//                 <div className="flex items-center gap-2">
//                   <div className={`w-2 h-2 rounded-full ${inStock ? "bg-green-500" : "bg-red-500"}`}></div>
//                   <span className={`text-xs ${inStock ? "text-green-400" : "text-red-400"}`}>
//                     {inStock ? `${totalStock} in stock` : "Out of stock"}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Rating stars */}
//             {product.averageRating && (
//               <div className="flex items-center gap-2">
//                 <div className="flex gap-1">
//                   {[...Array(5)].map((_, i) => (
//                     <svg
//                       key={i}
//                       className={`w-4 h-4 transition-all duration-300 ${
//                         i < Math.floor(product.averageRating)
//                           ? `text-${gradientClass.split('-')[1]}-400`
//                           : "text-gray-600"
//                       }`}
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <span className="text-xs text-gray-500">
//                   ({product.totalReviews || 0})
//                 </span>
//               </div>
//             )}

//             {/* Add to Cart Button */}
//             <button
//               disabled={!inStock}
//               onClick={handleAddToCart}
//               className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 transform flex items-center justify-center gap-2 ${
//                 inStock
//                   ? `bg-gradient-to-r ${gradientClass} text-white hover:shadow-lg hover:shadow-violet-500/50 hover:scale-[1.02] active:scale-95`
//                   : "bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700"
//               }`}
//             >
//               <svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                 />
//               </svg>
//               {inStock 
//                 ? (product.variants && product.variants.length > 0 ? "VIEW OPTIONS" : "ADD TO CART")
//                 : "OUT OF STOCK"
//               }
//             </button>
//           </div>

//           {/* Bottom glow line */}
//           <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass} transition-all duration-500 ${
//             isHovering ? "opacity-100" : "opacity-0"
//           }`}></div>
//         </div>
//       </div>

//       {/* shadcn Alert Dialog */}
//       <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
//         <AlertDialogContent className="sm:max-w-[425px]">
//           <AlertDialogHeader>
//             <div className="flex flex-col items-center text-center">
//               {getAlertIcon()}
//               <AlertDialogTitle className="text-xl font-bold">
//                 {alertConfig.title}
//               </AlertDialogTitle>
//               <AlertDialogDescription className="text-base mt-2">
//                 {alertConfig.description}
//               </AlertDialogDescription>
//             </div>
//           </AlertDialogHeader>
//           <AlertDialogFooter className="sm:justify-center">
//             <AlertDialogAction
//               className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-8"
//               onClick={() => setAlertOpen(false)}
//             >
//               Got it
//             </AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </>
//   );
// }