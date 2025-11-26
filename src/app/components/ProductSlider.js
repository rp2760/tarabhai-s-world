// "use client";
// import { useState, useEffect } from 'react';

// export default function ProductSlider() {
//   const [products, setProducts] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   // useEffect(() => {
//   //   fetch('/api/slider-products')
//   //     .then(res => res.json())
//   //     .then(data => setProducts(data));
//   // }, []);

//       const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('/api/slider-products')
//       .then(res => res.json())
//       .then(data => {
//         setProducts(data);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="relative bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto mt-10">
//           <div className="relative overflow-hidden rounded-xl shadow-lg h-96 md:h-[32rem] bg-gray-200 animate-pulse"></div>
//           <div className="mt-8 text-center">
//             <div className="h-6 bg-gray-200 rounded-full animate-pulse w-1/2 mx-auto"></div>
//           </div>
//           <div className="mt-16">
//             <div className="h-8 bg-gray-200 rounded-full animate-pulse w-1/4 mb-6"></div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {[...Array(4)].map((_, i) => (
//                 <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
//                   <div className="h-48 bg-gray-200 animate-pulse"></div>
//                   <div className="p-4">
//                     <div className="h-5 bg-gray-200 rounded-full animate-pulse mb-2 w-3/4"></div>
//                     <div className="h-4 bg-gray-200 rounded-full animate-pulse w-1/2 mb-4"></div>
//                     <div className="h-6 bg-gray-200 rounded-full animate-pulse w-1/4"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isHovered && products.length > 0) {
//         setCurrentSlide((prev) => (prev + 1) % products.length);
//       }
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [isHovered, products]);

//   const goToSlide = (index) => setCurrentSlide(index);
//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % products.length);
//   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);

//   if (products.length === 0) return <div className="text-center p-10">Loading...</div>;

//    const product = products[currentSlide];


//   return (
//     <div className="relative bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto mt-10">
//         {/* <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Featured Products</h2> */}
        
//         {/* Main Slider */}
//         <div 
//           className="relative overflow-hidden rounded-xl shadow-lg"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <div className="relative h-96 md:h-[32rem]">
//            {products.map((product, index) => (
//   <div
//     key={product._id}
//     className={`absolute inset-0 transition-opacity duration-1000 flex items-center ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
//   >
//     <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
//     <img
//       src={product.bgImage}
//       alt={product.title}
//       className="w-full h-full object-cover"
//     />
//     <div className="absolute left-10 md:left-20 z-20 max-w-md">
//       <span className="bg-indigo-600 text-white px-3 py-1 text-sm font-medium rounded-full mb-2 inline-block">
//         {product.tag}
//       </span>
//       <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{product.title}</h3>
//       <p className="text-xl text-gray-200 mb-4">{product.description}</p>
//       <p className="text-2xl font-bold text-white mb-6">{product.price}</p>
//       <div className="flex space-x-4">
//         <CTAButton text="Buy Now" />
//         <SecondaryButton text="Learn More" />
//       </div>
//     </div>
//   </div>
// ))}

//           </div>

//           {/* Navigation Arrows */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-2 focus:outline-none transition-all"
//           >
//             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-2 focus:outline-none transition-all"
//           >
//             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//             </svg>
//           </button>

//           {/* Indicators */}
//           <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
//             {products.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Slogan Animation */}
//         <div className="mt-8 text-center">
//           <p className="text-2xl font-medium text-gray-800 animate-pulse">
//             "{products[currentSlide].slogan}"
//           </p>
//         </div>

        
//         <div className="mt-16">
//           <h3 className="text-2xl font-bold text-gray-900 mb-6">You Might Also Like</h3>
//         </div>
//       </div>
//     </div>
//   );
// }

// // // Product Card Component
// // function ProductCard({ product }) {
// //   return (
// //     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
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


// // Button Components
// function CTAButton({ text }) {
//   return (
//     <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50">
//       {text}
//     </button>
//   );
// }

// function SecondaryButton({ text }) {
//   return (
//     <button className="bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 border border-white hover:border-transparent">
//       {text}
//     </button>
//   );
// }

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









// // abhi niche jo he wo 31 ka updates hei












"use client";
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

export default function ProductSlider() {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/slider-products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch slider products');
        }
        
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching slider products:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length <= 1) return;

    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % products.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, products.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  if (error) {
    return (
      <div className="mt-10 bg-orange-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            <p>Error loading products: {error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="relative bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mt-10">
          {/* Main Slider Skeleton */}
          <div className="relative overflow-hidden rounded-xl shadow-lg h-96 md:h-[32rem] bg-gray-200 animate-pulse">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Slogan Skeleton */}
          <div className="mt-8 text-center">
            <div className="h-6 bg-gray-200 rounded-full animate-pulse w-1/2 mx-auto"></div>
          </div>

          {/* Related Products Skeleton */}
          <div className="mt-16">
            <div className="h-8 bg-gray-200 rounded-full animate-pulse w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200 animate-pulse"></div>
                  <div className="p-4">
                    <div className="h-5 bg-gray-200 rounded-full animate-pulse mb-2 w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded-full animate-pulse w-1/2 mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded-full animate-pulse w-1/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="relative bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded">
            <p>No featured products available at the moment.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-transparent py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl  mt-10">
        {/* Main Slider */}
        <div 
          className="relative overflow-hidden rounded-xl shadow-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-96 md:h-[32rem]">
            {products.map((product, index) => (
              <div
                key={product._id}
                className={`absolute inset-0 transition-opacity duration-1000 flex items-center ${
                  index === currentSlide 
                    ? 'opacity-100 z-10' 
                    : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
                <img
                  src={product.bgImage}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)'
                  }}
                />
                <div className="absolute left-10 md:left-20 z-20 max-w-md">
                  <span className="bg-indigo-600 text-white px-3 py-1 text-sm font-medium rounded-full mb-2 inline-block">
                    {product.tag}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {product.title}
                  </h3>
                  <p className="text-xl text-gray-200 mb-4">
                    {product.description}
                  </p>
                  <p className="text-2xl font-bold text-white mb-6">
                    {product.price}
                  </p>
                  <div className="flex space-x-4">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition-colors duration-200">
                      Buy Now
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-md border border-white hover:border-transparent transition-colors duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {products.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-2 focus:outline-none transition-all"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-2 focus:outline-none transition-all"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Indicators */}
          {products.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-white w-6' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Slogan */}
        <div className="mt-8 text-center">
          <p className="text-2xl font-medium text-gray-800 animate-pulse">
            "{products[currentSlide].slogan}"
          </p>
        </div>

      </div>
    </div>
  );
}




// "use client";
// import { useState, useEffect } from 'react';
// import ProductCard from './ProductCard';

// export default function ProductSlider() {
//   const [products, setProducts] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('/api/slider-products');
//         if (!response.ok) {
//           throw new Error('Failed to fetch slider products');
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (err) {
//         console.error('Error fetching slider products:', err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     if (products.length <= 1) return;
//     const interval = setInterval(() => {
//       if (!isHovered) {
//         setCurrentSlide((prev) => (prev + 1) % products.length);
//       }
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [isHovered, products.length]);

//   // ... (error, loading, empty states unchanged)

//   return (
//     <div className="relative bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto mt-10">
//         {/* Main Slider */}
//         <div
//           className="relative overflow-hidden rounded-xl shadow-lg"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <div className="relative h-96 md:h-[32rem]">
//             {products.map((product, index) => (
//               <div
//                 key={product._id}
//                 className={`absolute inset-0 transition-opacity duration-1000 flex items-center ${
//                   index === currentSlide
//                     ? 'opacity-100 z-10'
//                     : 'opacity-0 pointer-events-none'
//                 }`}
//               >
//                 {/*  Gradient Overlay for ambience */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-yellow-300 to-green-200 opacity-50 z-10"></div>

//                 {/*  Background Image */}
//                 <img
//                   src={product.bgImage}
//                   alt={product.title}
//                   className="w-full h-full object-cover transition-transform duration-500"
//                   style={{
//                     transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)',
//                   }}
//                 />

//                 {/*  Floating Product Image */}
//                 <div className="absolute inset-0 flex items-center justify-center z-20">
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="max-h-[75%] object-contain drop-shadow-2xl"
//                   />
//                 </div>

//                 {/*  Overlayed Text & Buttons */}
//                 <div className="absolute left-10 md:left-20 z-20 max-w-md">
//                   <span className="bg-indigo-600 text-white px-3 py-1 text-sm font-medium rounded-full mb-2 inline-block">
//                     {product.tag}
//                   </span>
//                   <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
//                     {product.title}
//                   </h3>
//                   <p className="text-xl text-gray-200 mb-4">
//                     {product.description}
//                   </p>
//                   <p className="text-2xl font-bold text-white mb-6">
//                     {product.price}
//                   </p>
//                   <div className="flex space-x-4">
//                     <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition-colors duration-200">
//                       Buy Now
//                     </button>
//                     <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-md border border-white hover:border-transparent transition-colors duration-200">
//                       Learn More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/* Navigation Arrows & Indicators */}
//             {/* ... unchanged as per original */}
//           </div>
//         </div>

//         {/*  Slogan */}
//         <div className="mt-8 text-center">
//         <p className="text-2xl font-medium text-gray-800">
//           "{products[currentSlide]?.slogan || ''}"
//         </p>
//         </div>
//       </div>
//     </div>
//   );
// }
