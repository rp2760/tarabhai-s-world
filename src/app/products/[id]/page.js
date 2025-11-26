// // // // app/products/[id]/page.js
// // // // "use client";

// // // // import { useEffect, useState } from "react";
// // // // import { useParams } from "next/navigation";
// // // // import Navbar from "@/app/components/Navbar";

// // // // export default function ProductDetails() {
// // // //   const [product, setProduct] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const params = useParams();
// // // //   const { id } = params;

// // // //   useEffect(() => {
// // // //     async function fetchProduct() {
// // // //       try {
// // // //         setLoading(true);
// // // //         const res = await fetch(`/api/products/${id}`);

// // // //         if (!res.ok) {
// // // //           throw new Error('Product not found');
// // // //         }

// // // //         const data = await res.json();
// // // //         setProduct(data);

// // // //       } catch (error) {
// // // //         setError(error.message);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     }

// // // //     if (id) {
// // // //       fetchProduct();
// // // //     }
// // // //   }, [id]);

// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { useParams } from "next/navigation";
// // // import Navbar from "@/app/components/Navbar";
// // // import ProductCard from "@/app/components/ProductCard"; // Make sure to import your ProductCard component

// // // export default function ProductDetails() {
// // //   const [product, setProduct] = useState(null);
// // //   const [relatedProducts, setRelatedProducts] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const params = useParams();
// // //   const { id } = params;

// // //   useEffect(() => {
// // //     async function fetchProduct() {
// // //       try {
// // //         setLoading(true);
// // //         const res = await fetch(`/api/products/${id}`);

// // //         if (!res.ok) {
// // //           throw new Error('Product not found');
// // //         }

// // //         const data = await res.json();
// // //         setProduct(data);

// // //         // Fetch related products after main product is loaded
// // //         if (data.category) {
// // //           const relatedRes = await fetch(`/api/products?category=${data.category}&limit=4&exclude=${id}`);
// // //           const relatedData = await relatedRes.json();
// // //           setRelatedProducts(relatedData);
// // //         }

// // //       } catch (error) {
// // //         setError(error.message);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     }

// // //     if (id) {
// // //       fetchProduct();
// // //     }
// // //   }, [id]);


// // //   if (loading) {
// // //     return (
// // //       <>
// // //         <Navbar />
// // //         <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // //           <div className="text-center">
// // //             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
// // //             <p className="text-gray-600">Loading product details...</p>
// // //           </div>
// // //         </div>
// // //       </>
// // //     );
// // //   }

// // //   if (error || !product) {
// // //     return (
// // //       <>
// // //         <Navbar />
// // //         <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // //           <div className="text-center">
// // //             <h1 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h1>
// // //             <p className="text-gray-600 mb-4">Sorry, the product you're looking for doesn't exist.</p>
// // //             <a href="/" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition-colors">
// // //               Back to Home
// // //             </a>
// // //           </div>
// // //         </div>
// // //       </>
// // //     );
// // //   }

// // //   return (
// // //     <>
// // //       <Navbar />
// // //       <div className="min-h-screen bg-gray-50 py-8">
// // //         <div className="max-w-6xl mx-auto px-4">
// // //           {/* Breadcrumb */}
// // //           <nav className="mb-8">
// // //             <ol className="flex items-center space-x-2 text-sm mt-20 text-gray-500">
// // //               <li><a href="/" className="hover:text-indigo-600">Home</a></li>
// // //               <li>/</li>
// // //               <li><a href={`/?category=${product.category}`} className="hover:text-indigo-600 capitalize">{product.category}</a></li>
// // //               <li>/</li>
// // //               <li className="text-gray-800">{product.name}</li>
// // //             </ol>
// // //           </nav>

// // //           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
// // //             <div className="md:flex">
// // //               {/* Product Image */}
// // //               <div className="md:w-1/2">
// // //                 <div className="h-96 md:h-full">
// // //                   <img
// // //                     src={product.image}
// // //                     alt={product.name}
// // //                     className="w-full h-full object-cover"
// // //                   />
// // //                 </div>
// // //               </div>


// // //               {/* Product Info */}
// // //               <div className="md:w-1/2 p-8">
// // //                 <div className="mb-4">
// // //                   <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
// // //                     {product.tag}
// // //                   </span>
// // //                 </div>

// // //                 <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

// // //                 <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

// // //                 <div className="mb-6">
// // //                   <span className="text-3xl font-bold text-indigo-600">{product.price}</span>
// // //                 </div>

// // //                 <div className="mb-6">
// // //                   <p className="text-sm text-gray-500 mb-2">Category:</p>
// // //                   <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-md capitalize">
// // //                     {product.category}
// // //                   </span>
// // //                 </div>

// // //                 {/* Action Buttons */}
// // //                 <div className="space-y-4">
// // //                   <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center">
// // //                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
// // //                     </svg>
// // //                     Add to Cart
// // //                   </button>

// // //                   <button className="w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-md border border-gray-300 transition-colors duration-200">
// // //                     Buy Now
// // //                   </button>
// // //                 </div>

// // //                 {/* Additional Info */}
// // //                 <div className="mt-8 pt-8 border-t border-gray-200">
// // //                   <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Features</h3>
// // //                   <ul className="space-y-2 text-gray-600">
// // //                     <li className="flex items-center">
// // //                       <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
// // //                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// // //                       </svg>
// // //                       Free Delivery
// // //                     </li>
// // //                     <li className="flex items-center">
// // //                       <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
// // //                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// // //                       </svg>
// // //                       1 Year Warranty
// // //                     </li>
// // //                     <li className="flex items-center">
// // //                       <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
// // //                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// // //                       </svg>
// // //                       Easy Returns
// // //                     </li>
// // //                     <li className="flex items-center">
// // //                       <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
// // //                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// // //                       </svg>
// // //                       Genuine Product
// // //                     </li>
// // //                   </ul>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="min-h-screen bg-gray-50 py-8">
// // //         <div className="max-w-6xl mx-auto px-4">
// // //           {/* ... keep your existing breadcrumb and product details code ... */}

// // //           {/* Related Products Section */}
// // //           {relatedProducts.length > 0 && (
// // //             <div className="mt-12">
// // //               <h2 className="text-2xl font-bold text-gray-800 mb-6">More from {product.category}</h2>
// // //               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // //                 {relatedProducts.map((relatedProduct) => (
// // //                   <ProductCard key={relatedProduct._id} product={relatedProduct} />
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>



// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // }





// // here is a code of zoom on left side
// // //                  |
// ////                   !  


// // "use client";

// // import { useEffect, useState } from "react";
// // import { useParams } from "next/navigation";
// // import Navbar from "@/app/components/Navbar";
// // import ProductCard from "@/app/components/ProductCard";
// // import Image from "next/image";

// // export default function ProductDetails() {
// //   const [product, setProduct] = useState(null);
// //   const [relatedProducts, setRelatedProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [selectedImage, setSelectedImage] = useState(0);
// //   const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
// //   const [showZoom, setShowZoom] = useState(false);
// //   const params = useParams();
// //   const { id } = params;

// //   useEffect(() => {
// //     async function fetchProduct() {
// //       try {
// //         setLoading(true);
// //         const res = await fetch(`/api/products/${id}`);

// //         if (!res.ok) throw new Error('Product not found');

// //         const data = await res.json();
// //         setProduct(data);

// //         if (data.category) {
// //           const relatedRes = await fetch(`/api/products?category=${data.category}&limit=4&exclude=${id}`);
// //           const relatedData = await relatedRes.json();
// //           setRelatedProducts(relatedData);
// //         }
// //       } catch (error) {
// //         setError(error.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     if (id) fetchProduct();
// //   }, [id]);

// //   const handleImageHover = (e, index) => {
// //     setSelectedImage(index);
// //     const { left, top, width, height } = e.target.getBoundingClientRect();
// //     const x = ((e.clientX - left) / width) * 100;
// //     const y = ((e.clientY - top) / height) * 100;
// //     setZoomPosition({ x, y });
// //   };

// //   if (loading) {
// //     return (
// //       <>
// //         <Navbar />
// //         <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// //           <div className="text-center">
// //             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
// //             <p className="text-gray-600">Loading product details...</p>
// //           </div>
// //         </div>
// //       </>
// //     );
// //   }

// //   if (error || !product) {
// //     return (
// //       <>
// //         <Navbar />
// //         <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// //           <div className="text-center">
// //             <h1 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h1>
// //             <p className="text-gray-600 mb-4">Sorry, the product you're looking for doesn't exist.</p>
// //             <a href="/" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition-colors">
// //               Back to Home
// //             </a>
// //           </div>
// //         </div>
// //       </>
// //     );
// //   }

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="min-h-screen bg-gray-50 py-8">
// //         <div className="max-w-6xl mx-auto px-4">
// //           {/* Breadcrumb */}
// //           <nav className="mb-8">
// //             <ol className="flex items-center space-x-2 text-sm mt-20 text-gray-500">
// //               <li><a href="/" className="hover:text-indigo-600">Home</a></li>
// //               <li>/</li>
// //               <li><a href={`/?category=${product.category}`} className="hover:text-indigo-600 capitalize">{product.category}</a></li>
// //               <li>/</li>
// //               <li className="text-gray-800">{product.name}</li>
// //             </ol>
// //           </nav>

// //           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
// //             <div className="md:flex">
// //               {/* Product Image Gallery */}
// //               <div className="md:w-1/2 relative">
// //                <div 
// //   className="h-96 md:h-full relative overflow-hidden cursor-zoom-in bg-white" // Added bg-white here
// //   onMouseMove={(e) => {
// //     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
// //     const x = ((e.clientX - left) / width) * 100;
// //     const y = ((e.clientY - top) / height) * 100;
// //     setZoomPosition({ x, y });
// //   }}
// //   onMouseEnter={() => setShowZoom(true)}
// //   onMouseLeave={() => setShowZoom(false)}
// // >
// //   <Image
// //     src={product.images?.[selectedImage] || product.image}
// //     alt={product.name}
// //     fill
// //     className="object-contain transition-opacity duration-200" // Added transition
// //     style={{ opacity: showZoom ? 0.9 : 1 }} // Adjust opacity when zoomed
// //     priority
// //   />
// //   {showZoom && (
// //     <div 
// //       className="absolute inset-0 pointer-events-none bg-white transition-opacity duration-200" // Added bg-white and transition
// //       style={{
// //         backgroundImage: `url(${product.images?.[selectedImage] || product.image})`,
// //         backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
// //         backgroundSize: '200%',
// //         backgroundRepeat: 'no-repeat',
// //         opacity: 0.8, // Adjusted opacity
// //       }}
// //     />
// //   )}
// // </div>

// //                 {/* Thumbnail Gallery */}
// //                 {product.images && product.images.length > 1 && (
// //                   <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
// //                     {product.images.map((img, index) => (
// //                       <button
// //                         key={index}
// //                         onClick={() => setSelectedImage(index)}
// //                         onMouseEnter={(e) => handleImageHover(e, index)}
// //                         className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${selectedImage === index ? 'border-indigo-500 scale-110' : 'border-transparent'}`}
// //                       >
// //                         <Image
// //                           src={img}
// //                           alt={`${product.name} thumbnail ${index + 1}`}
// //                           width={64}
// //                           height={64}
// //                           className="object-cover w-full h-full"
// //                         />
// //                       </button>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>

// //               {/* Product Info */}
// //               <div className="md:w-1/2 p-8">
// //                 <div className="flex justify-between items-start">
// //                   <div>
// //                     <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
// //                       {product.tag}
// //                     </span>
// //                     <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
// //                     <div className="flex items-center mb-4">
// //                       <div className="flex items-center mr-4">
// //                         {[...Array(5)].map((_, i) => (
// //                           <svg
// //                             key={i}
// //                             className={`w-5 h-5 ${i < Math.floor(product.averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}
// //                             fill="currentColor"
// //                             viewBox="0 0 20 20"
// //                           >
// //                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //                           </svg>
// //                         ))}
// //                         <span className="text-sm text-gray-500 ml-1">
// //                           ({product.totalReviews})
// //                         </span>
// //                       </div>
// //                       <span className="text-sm text-green-600 font-medium">
// //                         {product.inStock ? 'In Stock' : 'Out of Stock'}
// //                       </span>
// //                     </div>
// //                   </div>
// //                   {product.brand && (
// //                     <div className="bg-gray-100 p-2 rounded-lg">
// //                       <span className="text-xs text-gray-500 block">Brand</span>
// //                       <span className="font-medium">{product.brand}</span>
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* Price Section */}
// //                 <div className="mb-6 p-4 bg-gray-50 rounded-lg">
// //                   <div className="flex items-baseline gap-3">
// //                     {product.originalPrice > product.currentPrice && (
// //                       <span className="text-lg text-gray-500 line-through">
// //                         {product.currency || '₹'}{product.originalPrice}
// //                       </span>
// //                     )}
// //                     <span className="text-3xl font-bold text-indigo-600">
// //                       {product.currency || '₹'}{product.currentPrice}
// //                     </span>
// //                     {product.originalPrice > product.currentPrice && (
// //                       <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-0.5 rounded">
// //                         Save {Math.round(((product.originalPrice - product.currentPrice) / product.originalPrice) * 100)}%
// //                       </span>
// //                     )}
// //                   </div>
// //                   {product.deliveryTime && (
// //                     <p className="text-sm text-gray-600 mt-2">
// //                       <span className="font-medium">Delivery:</span> {product.deliveryTime}
// //                       {product.shippingCharge > 0 ? (
// //                         ` • ${product.currency || '₹'}${product.shippingCharge} shipping`
// //                       ) : (
// //                         ' • FREE shipping'
// //                       )}
// //                     </p>
// //                   )}
// //                 </div>

// //                 {/* Color and Size Options */}
// //                 {(product.color || product.size) && (
// //                   <div className="mb-6">
// //                     <div className="flex flex-wrap gap-4">
// //                       {product.color && (
// //                         <div>
// //                           <h3 className="text-sm font-medium text-gray-900 mb-1">Color</h3>
// //                           <div className="flex items-center gap-2">
// //                             <div 
// //                               className="w-8 h-8 rounded-full border-2 border-gray-300"
// //                               style={{ backgroundColor: product.color.toLowerCase() }}
// //                               title={product.color}
// //                             />
// //                             <span>{product.color}</span>
// //                           </div>
// //                         </div>
// //                       )}
// //                       {product.size && (
// //                         <div>
// //                           <h3 className="text-sm font-medium text-gray-900 mb-1">Size</h3>
// //                           <div className="flex items-center gap-2">
// //                             <span className="px-3 py-1 bg-gray-100 rounded-md">
// //                               {product.size}
// //                             </span>
// //                           </div>
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>
// //                 )}

// //                 {/* Action Buttons */}
// //                 <div className="space-y-3 mb-8">
// //                   <button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-medium py-3 px-6 rounded-md transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg">
// //                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
// //                     </svg>
// //                     Add to Cart
// //                   </button>
// //                   <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-200 shadow-md hover:shadow-lg">
// //                     Buy Now
// //                   </button>
// //                 </div>

// //                 {/* Product Details Accordion */}
// //                 <div className="space-y-4">
// //                   <div className="border-b border-gray-200 pb-4">
// //                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
// //                     <p className="text-gray-600 leading-relaxed">{product.description}</p>
// //                   </div>

// //                   <div className="border-b border-gray-200 pb-4">
// //                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Specifications</h3>
// //                     <div className="grid grid-cols-2 gap-4">
// //                       {product.brand && (
// //                         <div>
// //                           <span className="text-sm text-gray-500">Brand</span>
// //                           <p className="font-medium">{product.brand}</p>
// //                         </div>
// //                       )}
// //                       {product.warranty && (
// //                         <div>
// //                           <span className="text-sm text-gray-500">Warranty</span>
// //                           <p className="font-medium">{product.warranty}</p>
// //                         </div>
// //                       )}
// //                       {product.weight && (
// //                         <div>
// //                           <span className="text-sm text-gray-500">Weight</span>
// //                           <p className="font-medium">{product.weight}</p>
// //                         </div>
// //                       )}
// //                       {product.dimensions && (
// //                         <div>
// //                           <span className="text-sm text-gray-500">Dimensions</span>
// //                           <p className="font-medium">{product.dimensions}</p>
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Related Products Section */}
// //           {relatedProducts.length > 0 && (
// //             <div className="mt-12">
// //               <h2 className="text-2xl font-bold text-gray-800 mb-6">You may also like</h2>
// //               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //                 {relatedProducts.map((relatedProduct) => (
// //                   <ProductCard key={relatedProduct._id} product={relatedProduct} />
// //                 ))}
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }


// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Navbar from "../../../app/components/Navbar";
// import ProductCard from "../../../app/components/ProductCard";
// import Image from "next/image";

// export default function ProductDetails() {
//   const [product, setProduct] = useState(null);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
//   const [showZoom, setShowZoom] = useState(false);
//   const params = useParams();
//   const { id } = params;

//   // useEffect(() => {
//   //   async function fetchProduct() {
//   //     try {
//   //       setLoading(true);
//   //       const res = await fetch(`/api/products/${id}`);

//   //       if (!res.ok) throw new Error('Product not found');

//   //       const data = await res.json();
//   //       setProduct(data);

//   //       if (data.category) {
//   //         const relatedRes = await fetch(`/api/products?category=${data.category}&limit=4&exclude=${id}`);
//   //         const relatedData = await relatedRes.json();
//   //         setRelatedProducts(relatedData);
//   //       }
//   //     } catch (error) {
//   //       setError(error.message);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   }

//   //   if (id) fetchProduct();
//   // }, [id]);

//  useEffect(() => {
//     async function fetchProduct() {
//       try {
//         setLoading(true);
//         const res = await fetch(`/api/products/${id}`);

//         if (!res.ok) throw new Error('Product not found');

//         const data = await res.json();
//         setProduct(data);

//         if (data.category) {
//           const relatedRes = await fetch(`/api/products?category=${data.category}&limit=4&exclude=${id}`);
//           const relatedData = await relatedRes.json();
//           setRelatedProducts(relatedData);
//         }
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     if (id) fetchProduct();
//   }, [id]);

//   if (loading) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen bg-gray-50 py-8">
//           <div className="max-w-6xl mx-auto px-4">
//             <div className="h-6 bg-gray-200 rounded-full animate-pulse w-1/3 mb-8"></div>
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <div className="md:flex">
//                 <div className="md:w-1/2 h-96 bg-gray-200 animate-pulse"></div>
//                 <div className="md:w-1/2 p-8">
//                   <div className="h-6 bg-gray-200 rounded-full animate-pulse w-1/4 mb-4"></div>
//                   <div className="h-8 bg-gray-200 rounded-full animate-pulse w-3/4 mb-6"></div>
//                   <div className="h-4 bg-gray-200 rounded-full animate-pulse w-1/2 mb-4"></div>
//                   <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-1/3 mb-8"></div>
//                   <div className="space-y-3 mb-8">
//                     <div className="h-12 bg-gray-200 rounded-md animate-pulse"></div>
//                     <div className="h-12 bg-gray-200 rounded-md animate-pulse"></div>
//                   </div>
//                   <div className="space-y-4">
//                     <div className="h-4 bg-gray-200 rounded-full animate-pulse w-1/4 mb-2"></div>
//                     <div className="h-3 bg-gray-200 rounded-full animate-pulse w-full"></div>
//                     <div className="h-3 bg-gray-200 rounded-full animate-pulse w-5/6"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }





//   const handleImageHover = (e) => {
//     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
//     const x = ((e.clientX - left) / width) * 100;
//     const y = ((e.clientY - top) / height) * 100;
//     setZoomPosition({ x, y });
//   };

//   if (loading) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
//             <p className="text-gray-600">Loading product details...</p>
//           </div>
//         </div>
//       </>
//     );
//   }

//   if (error || !product) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//           <div className="text-center">
//             <h1 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h1>
//             <p className="text-gray-600 mb-4">Sorry, the product you're looking for doesn't exist.</p>
//             <a href="/" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition-colors">
//               Back to Home
//             </a>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50 py-8">
//         <div className="max-w-6xl mx-auto px-4">
//           {/* Breadcrumb */}
//           <nav className="mb-8">
//             <ol className="flex items-center space-x-2 text-sm mt-20 text-gray-500">
//               <li><a href="/" className="hover:text-indigo-600">Home</a></li>
//               <li>/</li>
//               <li><a href={`/?category=${product.category}`} className="hover:text-indigo-600 capitalize">{product.category}</a></li>
//               <li>/</li>
//               <li className="text-gray-800">{product.name}</li>
//             </ol>
//           </nav>

//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="md:flex">
//               {/* Left Column - Product Image */}
//               <div className="md:w-1/2 relative">
//                 <div 
//                   className="h-96 md:h-full relative overflow-hidden"
//                   onMouseMove={handleImageHover}
//                   onMouseEnter={() => setShowZoom(true)}
//                   onMouseLeave={() => setShowZoom(false)}
//                 >
//                   <Image
//                     src={product.images?.[selectedImage] || product.image}
//                     alt={product.name}
//                     fill
//                     className="object-contain"
//                     priority
//                     unoptimized   
//                   />
//                 </div>

//                 {/* Thumbnail Gallery */}
//                 {product.images && product.images.length > 1 && (
//                   <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
//                     {product.images.map((img, index) => (
//                       <button
//                         key={index}
//                         onClick={() => setSelectedImage(index)}
//                         className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${selectedImage === index ? 'border-indigo-500 scale-110' : 'border-transparent'}`}
//                       >
//                         <Image
//                           src={img}
//                           alt={`${product.name} thumbnail ${index + 1}`}
//                           width={64}
//                           height={64}
//                           className="object-cover w-full h-full"
//                         />
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Right Column - Zoom/Product Info */}
//               <div className="md:w-1/2 p-8 relative">
//                 {/* Zoom Preview (shown only on hover) */}
//                 {showZoom && (
//                   <div 
//                     className="absolute inset-0 bg-white z-10 pointer-events-none"
//                     style={{
//                       backgroundImage: `url(${product.images?.[selectedImage] || product.image})`,
//                       backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
//                       backgroundSize: '200%',
//                       backgroundRepeat: 'no-repeat',
//                     }}
//                   />
//                 )}

//                 {/* Product Info (shown when not hovering) */}
//                 <div className={`transition-opacity duration-300 ${showZoom ? 'opacity-0' : 'opacity-100'}`}>
//                   <div className="mb-4">
//                     <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
//                       {product.tag}
//                     </span>
//                   </div>

//                   <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

//                   <div className="flex items-center mb-4">
//                     <div className="flex items-center mr-4">
//                       {[...Array(5)].map((_, i) => (
//                         <svg
//                           key={i}
//                           className={`w-5 h-5 ${i < Math.floor(product.averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       ))}
//                       <span className="text-sm text-gray-500 ml-1">
//                         ({product.totalReviews || 0} reviews)
//                       </span>
//                     </div>
//                     <span className="text-sm text-green-600 font-medium">
//                       {product.inStock ? 'In Stock' : 'Out of Stock'}
//                     </span>
//                   </div>

//                   {/* Price Section */}
//                   <div className="mb-6 p-4 bg-gray-50 rounded-lg">
//                     <div className="flex items-baseline gap-3">
//                       {product.originalPrice > product.currentPrice && (
//                         <span className="text-lg text-gray-500 line-through">
//                           {product.currency || '₹'}{product.originalPrice}
//                         </span>
//                       )}
//                       <span className="text-3xl font-bold text-indigo-600">
//                         {product.currency || '₹'}{product.currentPrice}
//                       </span>
//                       {product.originalPrice > product.currentPrice && (
//                         <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-0.5 rounded">
//                           Save {Math.round(((product.originalPrice - product.currentPrice) / product.originalPrice) * 100)}%
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="space-y-3 mb-8">
//                     <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center">
//                       Add to Cart
//                     </button>
//                     <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200">
//                       Buy Now
//                     </button>
//                   </div>

//                   {/* Product Details */}
//                   <div className="space-y-4">
//                     <div className="border-b border-gray-200 pb-4">
//                       <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
//                       <p className="text-gray-600 leading-relaxed">{product.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Related Products Section */}
//           {relatedProducts.length > 0 && (
//             <div className="mt-12">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">You may also like</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {relatedProducts.map((relatedProduct) => (
//                   <ProductCard key={relatedProduct._id} product={relatedProduct} />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import ProductCard from "../../../app/components/ProductCard";
// import Navbar from "../../../app/components/Navbar";
// import { useComparison } from '../../../context/ComparisonContext';


// export default function ProductDetails() {
//   const [product, setProduct] = useState(null);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
//   const [showZoom, setShowZoom] = useState(false);
//   const { addToComparison, canAddMore, comparisonProducts } = useComparison();
//   const isInComparison = comparisonProducts.some(product => product._id === product._id);

//   const params = useParams();
//   const { id } = params;

//   useEffect(() => {
//     async function fetchProduct() {
//       try {
//         setLoading(true);
//         const res = await fetch(`/api/products/${id}`);
//         if (!res.ok) throw new Error("Product not found");

//         const data = await res.json();
//         setProduct(data);

//         if (data.category) {
//           const relatedRes = await fetch(
//             `/api/products?category=${data.category}&limit=4&exclude=${id}`
//           );
//           const relatedData = await relatedRes.json();
//           setRelatedProducts(relatedData);
//         }
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     if (id) fetchProduct();
//   }, [id]);


//    const handleCompareClick = () => {
//     if (isInComparison) {
//       // Optionally navigate to comparison page
//     } else if (canAddMore) {
//       addToComparison(product);
//       alert('Product added to comparison');
//     } else {
//       alert('You can compare up to 4 products at once');
//     }
//   };  

//   const handleImageHover = (e) => {
//     const { left, top, width, height } =
//       e.currentTarget.getBoundingClientRect();
//     const x = ((e.clientX - left) / width) * 100;
//     const y = ((e.clientY - top) / height) * 100;
//     setZoomPosition({ x, y });
//   };

//   if (loading) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen bg-gray-50 py-8">
//           <div className="max-w-6xl mx-auto px-4">
//             <div className="h-6 bg-gray-200 rounded-full animate-pulse w-1/3 mb-8"></div>
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <div className="md:flex">
//                 <div className="md:w-1/2 h-96 bg-gray-200 animate-pulse"></div>
//                 <div className="md:w-1/2 p-8">
//                   <div className="h-6 bg-gray-200 rounded-full animate-pulse w-1/4 mb-4"></div>
//                   <div className="h-8 bg-gray-200 rounded-full animate-pulse w-3/4 mb-6"></div>
//                   <div className="h-4 bg-gray-200 rounded-full animate-pulse w-1/2 mb-4"></div>
//                   <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-1/3 mb-8"></div>
//                   <div className="space-y-3 mb-8">
//                     <div className="h-12 bg-gray-200 rounded-md animate-pulse"></div>
//                     <div className="h-12 bg-gray-200 rounded-md animate-pulse"></div>
//                   </div>
//                   <div className="space-y-4">
//                     <div className="h-4 bg-gray-200 rounded-full animate-pulse w-1/4 mb-2"></div>
//                     <div className="h-3 bg-gray-200 rounded-full animate-pulse w-full"></div>
//                     <div className="h-3 bg-gray-200 rounded-full animate-pulse w-5/6"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }

//   if (error || !product) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//           <div className="text-center">
//             <h1 className="text-2xl font-bold text-gray-800 mb-2">
//               Product Not Found
//             </h1>
//             <p className="text-gray-600 mb-4">
//               Sorry, the product you're looking for doesn't exist.
//             </p>
//             <a
//               href="/"
//               className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition-colors"
//             >
//               Back to Home
//             </a>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50 py-8">
//         <div className="max-w-6xl mx-auto px-4">
//           {/* Breadcrumb */}
//           <nav className="mb-8">
//             <ol className="flex items-center space-x-2 text-sm mt-20 text-gray-500">
//               <li>
//                 <a href="/" className="hover:text-indigo-600">
//                   Home
//                 </a>
//               </li>
//               <li>/</li>
//               <li>
//                 <a
//                   href={`/?category=${product.category}`}
//                   className="hover:text-indigo-600 capitalize"
//                 >
//                   {product.category}
//                 </a>
//               </li>
//               <li>/</li>
//               <li className="text-gray-800">{product.name}</li>
//             </ol>
//           </nav>

//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="md:flex">
//               {/* Left Column - Product Image */}
// {/* Left Column - Product Image & Thumbnails */}
// {/* Left Column - Product Image & Thumbnails */}
// <div className=" md:w-1/2 flex">
//   {/* Vertical Thumbnails Slider */}
//   {product.images && product.images.length > 1 && (
//     <div className="flex flex-col items-center mr-4 relative">
//       {/* Up Arrow */}
//       <button
//         onClick={() => {
//           setSelectedImage(prev => 
//             prev === 0 ? product.images.length - 1 : prev - 1
//           );
//         }}
//         className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 mb-2 transition-colors"
//         aria-label="Previous image"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-gray-600"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fillRule="evenodd"
//             d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>

//       {/* Thumbnail Container */}
//       <div className="overflow-hidden h-80 relative">
//         <div 
//           className="flex flex-col space-y-2 transition-transform duration-300"
//           style={{
//             transform: `translateY(-${Math.min(
//               selectedImage * 50, // 64px thumbnail + 8px gap
//               (product.images.length - 4) * 72 // Show 4 thumbnails at a time
//             )}px)`
//           }}
//         >
//           {product.images.map((img, index) => (
//             <div
//               key={index}
//               onMouseEnter={() => setSelectedImage(index)}
//               className={`w-16 h-16 rounded-md overflow-hidden border-2 cursor-pointer transition-all ${
//                 selectedImage === index
//                   ? "border-indigo-500 scale-95"
//                   : "border-gray-200"
//               }`}
//             >
//               <Image
//                 src={img}
//                 alt={`${product.name} thumbnail ${index + 1}`}
//                 width={64}
//                 height={64}
//                 className="object-cover w-full h-full"
//                 unoptimized
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Down Arrow */}
//       <button
//         onClick={() => {
//           setSelectedImage(prev => 
//             (prev + 1) % product.images.length
//           );
//         }}
//         className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 mt-2 transition-colors"
//         aria-label="Next image"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-gray-600"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fillRule="evenodd"
//             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>
//     </div>
//   )}

//   {/* Main Image */}
//   <div
//     className="flex-1 relative h-96 md:h-[500px] bg-white overflow-hidden"
//     onMouseMove={handleImageHover}
//     onMouseEnter={() => setShowZoom(true)}
//     onMouseLeave={() => setShowZoom(false)}
//   >
//     <Image
//       src={product.images?.[selectedImage] || product.image}
//       alt={product.name}
//       fill
//       className="object-contain"
//       priority
//       unoptimized
//     />
//   </div>
// </div>
//               {/* Right Column - Zoom/Product Info */}
//               <div className="md:w-1/2 p-8 relative">
//                 {/* Zoom Preview */}
//                 {showZoom && (
//                   <div
//                     className="absolute inset-0 bg-white z-10 pointer-events-none"
//                     style={{
//                       backgroundImage: `url(${
//                         product.images?.[selectedImage] || product.image
//                       })`,
//                       backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
//                       backgroundSize: "200%",
//                       backgroundRepeat: "no-repeat",
//                     }}
//                   />
//                 )}

//                 {/* Product Info */}
//                 <div
//                   className={`transition-opacity duration-300 ${
//                     showZoom ? "opacity-0" : "opacity-100"
//                   }`}
//                 >
//                   <div className="mb-4">
//                     <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
//                       {product.tag}
//                     </span>
//                   </div>

//                   <h1 className="text-3xl font-bold text-gray-900 mb-4">
//                     {product.name}
//                   </h1>

//                   <div className="flex items-center mb-4">
//                     <div className="flex items-center mr-4">
//                       {[...Array(5)].map((_, i) => (
//                         <svg
//                           key={i}
//                           className={`w-5 h-5 ${
//                             i < Math.floor(product.averageRating)
//                               ? "text-yellow-400"
//                               : "text-gray-300"
//                           }`}
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       ))}
//                       <span className="text-sm text-gray-500 ml-1">
//                         ({product.totalReviews || 0} reviews)
//                       </span>
//                     </div>
//                     <span className="text-sm text-green-600 font-medium">
//                       {product.inStock ? "In Stock" : "Out of Stock"}
//                     </span>
//                   </div>

//                   {/* Price Section */}
//                   <div className="mb-6 p-4 bg-gray-50 rounded-lg">
//                     <div className="flex items-baseline gap-3">
//                       {product.originalPrice > product.currentPrice && (
//                         <span className="text-lg text-gray-500 line-through">
//                           {product.currency || "₹"}
//                           {product.originalPrice}
//                         </span>
//                       )}
//                       <span className="text-3xl font-bold text-indigo-600">
//                         {product.currency || "₹"}
//                         {product.currentPrice}
//                       </span>
//                       {product.originalPrice > product.currentPrice && (
//                         <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-0.5 rounded">
//                           Save{" "}
//                           {Math.round(
//                             ((product.originalPrice - product.currentPrice) /
//                               product.originalPrice) *
//                               100
//                           )}
//                           %
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="space-y-3 mb-8">
//                     <button
//                      onClick={async (e) => {
//                         e.preventDefault();
//                         try {
//                           const res = await fetch("/api/cart", {
//                             method: "POST",
//                             headers: { "Content-Type": "application/json" },
//                             body: JSON.stringify({
//                               productId: product._id,
//                               quantity: 1,
//                             }),
//                           });
//                           if (res.ok) {
//                             alert("Product added to cart!");
//                           }
//                         } catch (error) {
//                           console.error("Failed to add to cart", error);
//                         }
//                       }}
//                       className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center"
//                     >
//                       Add to Cart
//                     </button>

//                          <button
//         onClick={handleCompareClick}
//         className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center"
//       >
//         <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//         </svg>
//         {isInComparison ? 'View Comparison' : 'Add to Comparison'}
//       </button>




//                     <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200">
//                       Buy Now
//                     </button>
//                   </div>

//                   {/* Product Details */}
//                   <div className="space-y-4">
//                     <div className="border-b border-gray-200 pb-4">
//                       <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                         Description
//                       </h3>
//                       <p className="text-gray-600 leading-relaxed">
//                         {product.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Related Products Section */}
//           {relatedProducts.length > 0 && (
//             <div className="mt-12">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">
//                 You may also like
//               </h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {relatedProducts.map((relatedProduct) => (
//                   <ProductCard key={relatedProduct._id} product={relatedProduct} />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }



// perplexity ai ka code niche se 














// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import ProductCard from "../../../app/components/ProductCard";
// import Navbar from "../../../app/components/Navbar";
// import { useComparison } from "../../../context/ComparisonContext";

// export default function ProductDetails() {
//   const [product, setProduct] = useState(null);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
//   const [showZoom, setShowZoom] = useState(false);
//   const { addToComparison, canAddMore, comparisonProducts } = useComparison();
//   const isInComparison = comparisonProducts.some(
//     (p) => p._id === product?._id
//   );

//   const params = useParams();
//   const { id } = params;


//   useEffect(() => {
//     async function fetchProduct() {
//       try {
//         setLoading(true);
//         const res = await fetch(`/api/products/${id}`);
//         if (!res.ok) throw new Error("Product not found");

//         const data = await res.json();
//         setProduct(data);


//         if (data.category) {
//           const relatedRes = await fetch(
//             `/api/products?category=${data.category}&limit=4&exclude=${id}`
//           );
//           const relatedData = await relatedRes.json();
//           setRelatedProducts(relatedData);
//         }
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     if (id) fetchProduct();
//   }, [id]);

//   const handleCompareClick = () => {
//     if (isInComparison) {
//       // navigate comparison
//     } else if (canAddMore) {
//       addToComparison(product);
//       alert("Product added to comparison");
//     } else {
//       alert("You can compare up to 4 products at once");
//     }
//   };

//   const handleImageHover = (e) => {
//     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
//     const x = ((e.clientX - left) / width) * 100;
//     const y = ((e.clientY - top) / height) * 100;
//     setZoomPosition({ x, y });
//   };

//   if (loading) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 flex items-center justify-center">
//           <div className="w-96 h-96 bg-white/40 backdrop-blur-lg rounded-3xl animate-pulse shadow-2xl"></div>
//         </div>
//       </>
//     );
//   }

//   if (error || !product) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-orange-500 to-purple-500 text-white">
//           <div className="bg-white/10 p-10 rounded-3xl shadow-xl text-center backdrop-blur-md">
//             <h1 className="text-3xl font-extrabold mb-2">❌ Product Not Found</h1>
//             <p className="text-lg mb-6">
//               Sorry, the product you’re looking for doesn’t exist.
//             </p>
//             <a
//               href="/"
//               className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
//             >
//               Back to Home
//             </a>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-10">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Breadcrumb */}
//           <nav className="mt-16 mb-8 text-sm">
//             <ol className="flex items-center space-x-3 text-gray-500">
//               <li>
//                 <a href="/" className="hover:text-indigo-600">Home</a>
//               </li>
//               <li>/</li>
//               <li>
//                 <a
//                   href={`/?category=${product.category}`}
//                   className="hover:text-indigo-600 capitalize"
//                 >
//                   {product.category}
//                 </a>
//               </li>
//               <li>/</li>
//               <li className="text-gray-800 font-medium">{product.name}</li>
//             </ol>
//           </nav>

//           <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-200">
//             <div className="md:flex">
//               {/* LEFT COLUMN - Images */}
//               <div className="md:w-1/2 p-6 flex">
//                 <div className="flex flex-col items-center mr-4">
//                   {product.images?.map((img, index) => (
//                     <div
//                     key={index}
//                     className={`w-16 h-16 mb-3 rounded-xl shadow-md transition-all overflow-hidden cursor-pointer ${
//                       selectedImage === index
//                           ? "ring-4 ring-indigo-500 scale-105"
//                           : "hover:scale-95"
//                       }`}
//                       onClick={() => setSelectedImage(index)}
//                     >
//                       <Image
//                         src={img}
//                         alt={`${product.name}-thumb-${index}`}
//                         width={64}
//                         height={64}
//                         className="object-cover w-full h-full"
//                         unoptimized
//                       />
//                     </div>
//                   ))}
//                 </div>
//                 {/* Main Image with Zoom */}
//                 <div
//                   className="flex-1 relative rounded-2xl overflow-hidden bg-white border shadow-md"
//                   onMouseMove={handleImageHover}
//                   onMouseEnter={() => setShowZoom(true)}
//                   onMouseLeave={() => setShowZoom(false)}
//                 >
//                   <Image
//                     src={product.images?.[selectedImage] || product.image}
//                     alt={product.name}
//                     fill
//                     className="object-contain transition-transform duration-200 hover:scale-105"
//                     priority
//                     unoptimized
//                   />
//                   {showZoom && (
//                     <div
//                       className="absolute inset-0 bg-white/40 backdrop-blur-lg"
//                       style={{
//                         backgroundImage: `url(${product.images?.[selectedImage]})`,
//                         backgroundSize: "200%",
//                         backgroundRepeat: "no-repeat",
//                         backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
//                       }}
//                     />
//                   )}
//                 </div>
//               </div>

//               {/* RIGHT COLUMN - Info */}
//               <div className="md:w-1/2 p-8 flex flex-col justify-between">
//                 {/* Tags */}
//                 <span className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-sm mb-4">
//                   {product.tag}
//                 </span>

//                 {/* Title */}
//                 <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
//                   {product.name}
//                 </h1>

//                 {/* Ratings */}
//                 <div className="flex items-center mb-6">
//                   {[...Array(5)].map((_, i) => (
//                     <svg
//                       key={i}
//                       className={`w-6 h-6 ${
//                         i < Math.floor(product.averageRating)
//                           ? "text-yellow-400"
//                           : "text-gray-300"
//                       }`}
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                   <span className="ml-2 text-gray-600">
//                     ({product.totalReviews || 0} reviews)
//                   </span>
//                 </div>

//                 {/* Price */}
//                 <div className="mb-6 p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-inner">
//                   <div className="flex items-center gap-3">
//                     {product.originalPrice > product.currentPrice && (
//                       <span className="text-lg line-through text-gray-500">
//                         {product.currency || "₹"}
//                         {product.originalPrice}
//                       </span>
//                     )}
//                     <span className="text-4xl font-extrabold text-indigo-600">
//                       {product.currency || "₹"}
//                       {product.currentPrice}
//                     </span>
//                     {product.originalPrice > product.currentPrice && (
//                       <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
//                         Save{" "}
//                         {Math.round(
//                           ((product.originalPrice - product.currentPrice) /
//                             product.originalPrice) *
//                             100
//                         )}
//                         %
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 {/* Buttons */}
//                 <div className="space-y-3 mb-8">
//                   <button
//                     onClick={async (e) => {
//                       e.preventDefault();
//                       try {
//                         const res = await fetch("/api/cart", {
//                           method: "POST",
//                           headers: { "Content-Type": "application/json" },
//                           body: JSON.stringify({
//                             productId: product._id,
//                             quantity: 1,
//                           }),
//                         });
//                         if (res.ok) alert("✅ Product added to cart!");
//                       } catch {}
//                     }}
//                     className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 transition transform text-white font-bold py-3 rounded-xl flex items-center justify-center shadow-lg"
//                   >
//                     🛒 Add to Cart
//                   </button>

//                   <button
//                     onClick={handleCompareClick}
//                     className="w-full bg-gradient-to-r from-gray-200 to-gray-300 hover:scale-105 transition transform text-gray-800 font-semibold py-3 px-6 rounded-xl shadow-md flex items-center justify-center"
//                   >
//                     {isInComparison ? "🔎 View Comparison" : "➕ Add to Comparison"}
//                   </button>

//                   <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:scale-105 transition transform text-white font-bold py-3 px-6 rounded-xl shadow-lg">
//                     ⚡ Buy Now
//                   </button>
//                 </div>

//                 {/* Description */}
//                 <div className="border-t border-gray-200 pt-6">
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                     Description
//                   </h3>
//                   <p className="text-gray-700 leading-relaxed">
//                     {product.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Related Products */}
//           {relatedProducts.length > 0 && (
//             <div className="mt-14">
//               <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
//                 You may also like ✨
//               </h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//                 {relatedProducts.map((relatedProduct) => (
//                   <ProductCard key={relatedProduct._id} product={relatedProduct} />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }














// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import ProductCard from "../../../app/components/ProductCard";
// import Navbar from "../../../app/components/Navbar";
// import { useComparison } from "../../../context/ComparisonContext";

// export default function ProductDetails() {
//   const [product, setProduct] = useState(null);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
//   const [showZoom, setShowZoom] = useState(false);
//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [selectedColor, setSelectedColor] = useState("");
//   const { addToComparison, canAddMore, comparisonProducts } = useComparison();

//   const params = useParams();
//   const { id } = params;

//   // Check if current product is in comparison
//   const isInComparison = comparisonProducts.some(
//     (p) => p._id === product?._id
//   );

//   useEffect(() => {
//     async function fetchProduct() {
//       try {
//         setLoading(true);
//         const res = await fetch(`/api/products/${id}`);
//         if (!res.ok) throw new Error("Product not found");

//         const data = await res.json();
//         setProduct(data);


//         // Initialize selected variant
//         if (data.variants && data.variants.length > 0) {
//           setSelectedVariant(data.variants[0]);
//           setSelectedColor(data.variants[0].color);
//           if (data.variants[0].sizeOptions.length > 0) {
//             setSelectedSize(data.variants[0].sizeOptions[0]);
//           }
//         }

//         // Fetch related products
//         if (data.category) {
//           const relatedRes = await fetch(
//             `/api/products?category=${data.category}&limit=4&exclude=${id}`
//           );
//           const relatedData = await relatedRes.json();
//           setRelatedProducts(relatedData);
//         }
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     if (id) fetchProduct();
//   }, [id]);

//   // Handle variant color selection
//   const handleColorSelect = (variant) => {
//     setSelectedVariant(variant);
//     setSelectedColor(variant.color);
//     setSelectedSize(variant.sizeOptions.length > 0 ? variant.sizeOptions[0] : "NA");
//     setSelectedImage(0); // Reset to first image when color changes
//   };

//   // Handle size selection
//   const handleSizeSelect = (size) => {
//     setSelectedSize(size);
//   };

//   // Get current display product (variant or main product)
//   const getDisplayProduct = () => {
//     if (selectedVariant) {
//       return {
//         ...product,
//         color: selectedVariant.color,
//         stock: selectedVariant.stock,
//         currentPrice: selectedVariant.price || product.currentPrice,
//         images: selectedVariant.images.length > 0 ? selectedVariant.images : product.images,
//         variant: selectedVariant
//       };
//     }
//     return product;
//   };

//   const displayProduct = getDisplayProduct();

//   // Get available colors from variants
//   const availableColors = product?.variants?.map(variant => variant.color) || [];
//   const uniqueColors = [...new Set(availableColors)];

//   // Get available sizes for selected color
//   const availableSizes = selectedVariant?.sizeOptions || [];

//   const handleCompareClick = () => {
//     if (isInComparison) {
//       // Navigate to comparison page
//       window.location.href = '/comparison';
//     } else if (canAddMore) {
//       addToComparison(displayProduct);
//       alert("Product added to comparison");
//     } else {
//       alert("You can compare up to 4 products at once");
//     }
//   };

//   const handleImageHover = (e) => {
//     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
//     const x = ((e.clientX - left) / width) * 100;
//     const y = ((e.clientY - top) / height) * 100;
//     setZoomPosition({ x, y });
//   };

//   if (loading) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 flex items-center justify-center">
//           <div className="w-96 h-96 bg-white/40 backdrop-blur-lg rounded-3xl animate-pulse shadow-2xl"></div>
//         </div>
//       </>
//     );
//   }

//   if (error || !product) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-orange-500 to-purple-500 text-white">
//           <div className="bg-white/10 p-10 rounded-3xl shadow-xl text-center backdrop-blur-md">
//             <h1 className="text-3xl font-extrabold mb-2">❌ Product Not Found</h1>
//             <p className="text-lg mb-6">
//               Sorry, the product you're looking for doesn't exist.
//             </p>
//             <a
//               href="/"
//               className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
//             >
//               Back to Home
//             </a>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-10">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Breadcrumb */}
//           <nav className="mt-16 mb-8 text-sm">
//             <ol className="flex items-center space-x-3 text-gray-500">
//               <li>
//                 <a href="/" className="hover:text-indigo-600">Home</a>
//               </li>
//               <li>/</li>
//               <li>
//                 <a
//                   href={`/?category=${product.category}`}
//                   className="hover:text-indigo-600 capitalize"
//                 >
//                   {product.category}
//                 </a>
//               </li>
//               <li>/</li>
//               <li className="text-gray-800 font-medium">{product.name}</li>
//             </ol>
//           </nav>

//           <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-200">
//             <div className="md:flex">
//               {/* LEFT COLUMN - Images */}
//               <div className="md:w-1/2 p-6 flex">
//                 <div className="flex flex-col items-center mr-4">
//                   {displayProduct.images?.map((img, index) => (
//                     <div
//                       key={index}
//                       className={`w-16 h-16 mb-3 rounded-xl shadow-md transition-all overflow-hidden cursor-pointer ${selectedImage === index
//                           ? "ring-4 ring-indigo-500 scale-105"
//                           : "hover:scale-95"
//                         }`}
//                       onClick={() => setSelectedImage(index)}
//                     >
//                       <Image
//                         src={img}
//                         alt={`${displayProduct.name}-thumb-${index}`}
//                         width={64}
//                         height={64}
//                         className="object-cover w-full h-full"
//                         unoptimized
//                       />
//                     </div>
//                   ))}
//                 </div>
//                 {/* Main Image with Zoom */}
//                 <div
//                   className="flex-1 relative rounded-2xl overflow-hidden bg-white border shadow-md"
//                   onMouseMove={handleImageHover}
//                   onMouseEnter={() => setShowZoom(true)}
//                   onMouseLeave={() => setShowZoom(false)}
//                 >
//                   <Image
//                     src={displayProduct.images?.[selectedImage] || displayProduct.image}
//                     alt={displayProduct.name}
//                     fill
//                     className="object-contain transition-transform duration-200 hover:scale-105"
//                     priority
//                     unoptimized
//                   />
//                   {showZoom && (
//                     <div
//                       className="absolute inset-100 bg-white/40 backdrop-blur-lg"
//                       style={{
//                         backgroundImage: `url(${displayProduct.images?.[selectedImage]})`,
//                         backgroundSize: "200%",
//                         backgroundRepeat: "no-repeat",
//                         backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
//                       }}
//                     />
//                   )}
//                 </div>
//               </div>

//               {/* RIGHT COLUMN - Info */}
//               <div className="md:w-1/2 p-8 flex flex-col justify-between">
//                 {/* Tags */}
//                 <span className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-sm mb-4">
//                   {product.tag}
//                 </span>

//                 {/* Title */}
//                 <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
//                   {product.name}
//                 </h1>

//                 {/* Features */}
//                 <div className="mb-4">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Features:</h3>
//                   <p className="text-gray-600">{product.features}</p>
//                 </div>

//                 {/* Ratings */}
//                 <div className="flex items-center mb-6">
//                   {[...Array(5)].map((_, i) => (
//                     <svg
//                       key={i}
//                       className={`w-6 h-6 ${i < Math.floor(product.averageRating || 4)
//                           ? "text-yellow-400"
//                           : "text-gray-300"
//                         }`}
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                   <span className="ml-2 text-gray-600">
//                     ({product.totalReviews || 0} reviews)
//                   </span>
//                 </div>

//                 {/* Color Variants */}
//                 {uniqueColors.length > 0 && (
//                   <div className="mb-6">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-3">
//                       Color: <span className="text-indigo-600">{selectedColor}</span>
//                     </h3>
//                     <div className="flex flex-wrap gap-3">
//                       {uniqueColors.map((color) => (
//                         <button
//                           key={color}
//                           onClick={() => {
//                             const variant = product.variants.find(v => v.color === color);
//                             handleColorSelect(variant);
//                           }}
//                           className={`px-4 py-2 rounded-lg border-2 transition-all ${selectedColor === color
//                               ? "border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold"
//                               : "border-gray-300 hover:border-gray-400 text-gray-700"
//                             }`}
//                         >
//                           {color}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Size Variants */}
//                 {availableSizes.length > 0 && (
//                   <div className="mb-6">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-3">
//                       Size: <span className="text-indigo-600">{selectedSize}</span>
//                     </h3>
//                     <div className="flex flex-wrap gap-3">
//                       {availableSizes.map((size) => (
//                         <button
//                           key={size}
//                           onClick={() => handleSizeSelect(size)}
//                           className={`px-4 py-2 rounded-lg border-2 transition-all ${selectedSize === size
//                               ? "border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold"
//                               : "border-gray-300 hover:border-gray-400 text-gray-700"
//                             }`}
//                         >
//                           {size}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Stock Status */}
//                 <div className="mb-4">
//                   <span className={`text-sm font-semibold ${displayProduct.stock > 0 ? 'text-green-600' : 'text-red-600'
//                     }`}>
//                     {displayProduct.stock > 0
//                       ? `✅ In Stock (${displayProduct.stock} available)`
//                       : '❌ Out of Stock'
//                     }
//                   </span>
//                 </div>

//                 {/* Price */}
//                 <div className="mb-6 p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-inner">
//                   <div className="flex items-center gap-3">
//                     {product.originalPrice > displayProduct.currentPrice && (
//                       <span className="text-lg line-through text-gray-500">
//                         {product.currency || "₹"}
//                         {product.originalPrice}
//                       </span>
//                     )}
//                     <span className="text-4xl font-extrabold text-indigo-600">
//                       {product.currency || "₹"}
//                       {displayProduct.currentPrice}
//                     </span>
//                     {product.originalPrice > displayProduct.currentPrice && (
//                       <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
//                         Save{" "}
//                         {Math.round(
//                           ((product.originalPrice - displayProduct.currentPrice) /
//                             product.originalPrice) *
//                           100
//                         )}
//                         %
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 {/* Shipping Info */}
//                 <div className="mb-6 grid grid-cols-2 gap-4 text-sm text-gray-600">
//                   <div className="flex items-center">
//                     <span className="mr-2">🚚</span>
//                     <span>
//                       {product.shippingCharge > 0
//                         ? `Shipping: ₹${product.shippingCharge}`
//                         : 'FREE Shipping'
//                       }
//                     </span>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="mr-2">⏱️</span>
//                     <span>Delivery: {product.deliveryTime}</span>
//                   </div>
//                 </div>

//                 {/* Buttons */}
//                 <div className="space-y-3 mb-8">
//                   <button
//                     onClick={async (e) => {
//                       e.preventDefault();
//                       if (displayProduct.stock <= 0) {
//                         alert("This variant is out of stock");
//                         return;
//                       }
//                       try {
//                         const res = await fetch("/api/cart", {
//                           method: "POST",
//                           headers: { "Content-Type": "application/json" },
//                           body: JSON.stringify({
//                             productId: product._id,
//                             variant: selectedVariant ? {
//                               color: selectedColor,
//                               size: selectedSize,
//                               price: selectedVariant.price
//                             } : null,
//                             quantity: 1,
//                           }),
//                         });
//                         if (res.ok) alert("✅ Product added to cart!");
//                       } catch (error) {
//                         alert("Error adding to cart");
//                       }
//                     }}
//                     disabled={displayProduct.stock <= 0}
//                     className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 transition transform text-white font-bold py-3 rounded-xl flex items-center justify-center shadow-lg ${displayProduct.stock <= 0 ? 'opacity-50 cursor-not-allowed' : ''
//                       }`}
//                   >
//                     🛒 Add to Cart
//                   </button>

//                   <button
//                     onClick={handleCompareClick}
//                     className="w-full bg-gradient-to-r from-gray-200 to-gray-300 hover:scale-105 transition transform text-gray-800 font-semibold py-3 px-6 rounded-xl shadow-md flex items-center justify-center"
//                   >
//                     {isInComparison ? "🔎 View Comparison" : "➕ Add to Comparison"}
//                   </button>

//                   <button
//                     disabled={displayProduct.stock <= 0}
//                     className={`w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:scale-105 transition transform text-white font-bold py-3 px-6 rounded-xl shadow-lg ${displayProduct.stock <= 0 ? 'opacity-50 cursor-not-allowed' : ''
//                       }`}
//                   >
//                     ⚡ Buy Now
//                   </button>
//                 </div>

//                 {/* Description */}
//                 <div className="border-t border-gray-200 pt-6">
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                     Description
//                   </h3>
//                   <p className="text-gray-700 leading-relaxed">
//                     {product.description}
//                   </p>
//                 </div>

//                 {/* Additional Info */}
//                 <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-600">
//                   {product.brand && (
//                     <div>
//                       <span className="font-semibold">Brand:</span> {product.brand}
//                     </div>
//                   )}
//                   {product.weight && (
//                     <div>
//                       <span className="font-semibold">Weight:</span> {product.weight}
//                     </div>
//                   )}
//                   {product.dimensions && (
//                     <div className="col-span-2">
//                       <span className="font-semibold">Dimensions:</span> {product.dimensions}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Related Products */}
//           {relatedProducts.length > 0 && (
//             <div className="mt-14">
//               <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
//                 You may also like ✨
//               </h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//                 {relatedProducts.map((relatedProduct) => (
//                   <ProductCard key={relatedProduct._id} product={relatedProduct} />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }












"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import ProductCard from "../../../app/components/ProductCard";
import Navbar from "../../../app/components/Navbar";
import { useComparison } from "../../../context/ComparisonContext";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const { addToComparison, canAddMore, comparisonProducts } = useComparison();
  
  // Alert Dialog State
  const [alertConfig, setAlertConfig] = useState({
    open: false,
    title: "",
    description: "",
    variant: "default" // 'default', 'success', 'error', 'warning'
  });
  
  const params = useParams();
  const { id } = params;
  
  // Check if current product is in comparison
  const isInComparison = comparisonProducts.some(
    (p) => p._id === product?._id
  );

  // Helper function to show alert
  const showAlert = (title, description, variant = "default") => {
    setAlertConfig({
      open: true,
      title,
      description,
      variant
    });
  };

  // Helper function to close alert
  const closeAlert = () => {
    setAlertConfig({ ...alertConfig, open: false });
  };

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
        
        const data = await res.json();
        setProduct(data);

        // Initialize selected variant
        if (data.variants && data.variants.length > 0) {
          setSelectedVariant(data.variants[0]);
          setSelectedColor(data.variants[0].color);
          if (data.variants[0].sizeOptions.length > 0) {
            setSelectedSize(data.variants[0].sizeOptions[0]);
          }
        }

        // Fetch related products
        if (data.category) {
          const relatedRes = await fetch(
            `/api/products?category=${data.category}&limit=4&exclude=${id}`
          );
          const relatedData = await relatedRes.json();
          setRelatedProducts(relatedData);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchProduct();
  }, [id]);

  // Handle variant color selection
  const handleColorSelect = (variant) => {
    setSelectedVariant(variant);
    setSelectedColor(variant.color);
    setSelectedSize(variant.sizeOptions.length > 0 ? variant.sizeOptions[0] : "NA");
    setSelectedImage(0);
  };

  // Handle size selection
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // Get current display product (variant or main product)
  const getDisplayProduct = () => {
    if (selectedVariant) {
      return {
        ...product,
        color: selectedVariant.color,
        stock: selectedVariant.stock,
        currentPrice: selectedVariant.price || product.currentPrice,
        images: selectedVariant.images.length > 0 ? selectedVariant.images : product.images,
        variant: selectedVariant
      };
    }
    return product;
  };

  const displayProduct = getDisplayProduct();

  // Get available colors from variants
  const availableColors = product?.variants?.map(variant => variant.color) || [];
  const uniqueColors = [...new Set(availableColors)];

  // Get available sizes for selected color
  const availableSizes = selectedVariant?.sizeOptions || [];

  const handleCompareClick = () => {
    if (isInComparison) {
      // Navigate to comparison page
      window.location.href = '/comparison';
    } else if (canAddMore) {
      addToComparison(displayProduct);
      showAlert(
        "Success! 🎉",
        "Product has been added to comparison. You can compare up to 4 products.",
        "success"
      );
    } else {
      showAlert(
        "Comparison Limit Reached",
        "You can compare up to 4 products at once. Please remove a product before adding a new one.",
        "warning"
      );
    }
  };

  const handleImageHover = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 flex items-center justify-center">
          <div className="w-96 h-96 bg-white/40 backdrop-blur-lg rounded-3xl animate-pulse shadow-2xl"></div>
        </div>
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-orange-500 to-purple-500 text-white">
          <div className="bg-white/10 p-10 rounded-3xl shadow-xl text-center backdrop-blur-md">
            <h1 className="text-3xl font-extrabold mb-2">❌ Product Not Found</h1>
            <p className="text-lg mb-6">
              Sorry, the product you're looking for doesn't exist.
            </p>
            <a
              href="/"
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Back to Home
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mt-16 mb-8 text-sm">
            <ol className="flex items-center space-x-3 text-gray-500">
              <li>
                <a href="/" className="hover:text-indigo-600">Home</a>
              </li>
              <li>/</li>
              <li>
                <a
                  href={`/?category=${product.category}`}
                  className="hover:text-indigo-600 capitalize"
                >
                  {product.category}
                </a>
              </li>
              <li>/</li>
              <li className="text-gray-800 font-medium">{product.name}</li>
            </ol>
          </nav>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="md:flex">
              {/* LEFT COLUMN - Images */}
              <div className="md:w-1/2 p-6 flex">
                <div className="flex flex-col items-center mr-4">
                  {displayProduct.images?.map((img, index) => (
                    <div
                      key={index}
                      className={`w-16 h-16 mb-3 rounded-xl shadow-md transition-all overflow-hidden cursor-pointer ${
                        selectedImage === index
                          ? "ring-4 ring-indigo-500 scale-105"
                          : "hover:scale-95"
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={img}
                        alt={`${displayProduct.name}-thumb-${index}`}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
                {/* Main Image with Zoom */}
                <div
                  className="flex-1 relative rounded-2xl overflow-hidden bg-white border shadow-md"
                  onMouseMove={handleImageHover}
                  onMouseEnter={() => setShowZoom(true)}
                  onMouseLeave={() => setShowZoom(false)}
                >
                  <Image
                    src={displayProduct.images?.[selectedImage] || displayProduct.image}
                    alt={displayProduct.name}
                    fill
                    className="object-contain transition-transform duration-200 hover:scale-105"
                    priority
                    unoptimized
                  />
                  {showZoom && (
                    <div
                      className="absolute inset-100 bg-white/40 backdrop-blur-lg"
                      style={{
                        backgroundImage: `url(${displayProduct.images?.[selectedImage]})`,
                        backgroundSize: "200%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                      }}
                    />
                  )}
                </div>
              </div>

              {/* RIGHT COLUMN - Info */}
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                {/* Tags */}
                <span className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-sm mb-4">
                  {product.tag}
                </span>

                {/* Title */}
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
                  {product.name}
                </h1>

                {/* Features */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Features:</h3>
                  <p className="text-gray-600">{product.features}</p>
                </div>

                {/* Ratings */}
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(product.averageRating || 4)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-600">
                    ({product.totalReviews || 0} reviews)
                  </span>
                </div>

                {/* Color Variants */}
                {uniqueColors.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Color: <span className="text-indigo-600">{selectedColor}</span>
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {uniqueColors.map((color) => (
                        <button
                          key={color}
                          onClick={() => {
                            const variant = product.variants.find(v => v.color === color);
                            handleColorSelect(variant);
                          }}
                          className={`px-4 py-2 rounded-lg border-2 transition-all ${
                            selectedColor === color
                              ? "border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold"
                              : "border-gray-300 hover:border-gray-400 text-gray-700"
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size Variants */}
                {availableSizes.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Size: <span className="text-indigo-600">{selectedSize}</span>
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {availableSizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => handleSizeSelect(size)}
                          className={`px-4 py-2 rounded-lg border-2 transition-all ${
                            selectedSize === size
                              ? "border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold"
                              : "border-gray-300 hover:border-gray-400 text-gray-700"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Stock Status */}
                <div className="mb-4">
                  <span className={`text-sm font-semibold ${
                    displayProduct.stock > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {displayProduct.stock > 0 
                      ? `✅ In Stock (${displayProduct.stock} available)` 
                      : '❌ Out of Stock'
                    }
                  </span>
                </div>

                {/* Price */}
                <div className="mb-6 p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-inner">
                  <div className="flex items-center gap-3">
                    {product.originalPrice > displayProduct.currentPrice && (
                      <span className="text-lg line-through text-gray-500">
                        {product.currency || "₹"}
                        {product.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl font-extrabold text-indigo-600">
                      {product.currency || "₹"}
                      {displayProduct.currentPrice}
                    </span>
                    {product.originalPrice > displayProduct.currentPrice && (
                      <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                        Save{" "}
                        {Math.round(
                          ((product.originalPrice - displayProduct.currentPrice) /
                            product.originalPrice) *
                            100
                        )}
                        %
                      </span>
                    )}
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="mb-6 grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="mr-2">🚚</span>
                    <span>
                      {product.shippingCharge > 0 
                        ? `Shipping: ₹${product.shippingCharge}` 
                        : 'FREE Shipping'
                      }
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">⏱️</span>
                    <span>Delivery: {product.deliveryTime}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="space-y-3 mb-8">
                  <button
                    onClick={async (e) => {
                      e.preventDefault();
                      if (displayProduct.stock <= 0) {
                        showAlert(
                          "Out of Stock",
                          "This variant is currently out of stock. Please select a different variant or check back later.",
                          "warning"
                        );
                        return;
                      }
                      try {
                        const res = await fetch("/api/cart", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            productId: product._id,
                            variant: selectedVariant ? {
                              color: selectedColor,
                              size: selectedSize,
                              price: selectedVariant.price
                            } : null,
                            quantity: 1,
                          }),
                        });
                        if (res.ok) {
                          showAlert(
                            "Added to Cart! 🛒",
                            "Product has been successfully added to your cart.",
                            "success"
                          );
                        } else {
                          throw new Error("Failed to add to cart");
                        }
                      } catch (error) {
                        showAlert(
                          "Error",
                          "There was an error adding the product to your cart. Please try again.",
                          "error"
                        );
                      }
                    }}
                    disabled={displayProduct.stock <= 0}
                    className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 transition transform text-white font-bold py-3 rounded-xl flex items-center justify-center shadow-lg ${
                      displayProduct.stock <= 0 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    🛒 Add to Cart
                  </button>

                  <button
                    onClick={handleCompareClick}
                    className="w-full bg-gradient-to-r from-gray-200 to-gray-300 hover:scale-105 transition transform text-gray-800 font-semibold py-3 px-6 rounded-xl shadow-md flex items-center justify-center"
                  >
                    {isInComparison ? "🔎 View Comparison" : "➕ Add to Comparison"}
                  </button>

                  <button 
                    disabled={displayProduct.stock <= 0}
                    className={`w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:scale-105 transition transform text-white font-bold py-3 px-6 rounded-xl shadow-lg ${
                      displayProduct.stock <= 0 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    ⚡ Buy Now
                  </button>
                </div>

                {/* Description */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-600">
                  {product.brand && (
                    <div>
                      <span className="font-semibold">Brand:</span> {product.brand}
                    </div>
                  )}
                  {product.weight && (
                    <div>
                      <span className="font-semibold">Weight:</span> {product.weight}
                    </div>
                  )}
                  {product.dimensions && (
                    <div className="col-span-2">
                      <span className="font-semibold">Dimensions:</span> {product.dimensions}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-14">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                You may also like ✨
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct._id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Alert Dialog Component */}
      <AlertDialog open={alertConfig.open} onOpenChange={closeAlert}>
        <AlertDialogContent className="sm:max-w-[425px]">
          <AlertDialogHeader>
            <div className="flex flex-col items-center text-center">
            <AlertDialogTitle>
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
            onClick={closeAlert}>
              Got it !
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}