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
import { ChevronLeft, ChevronRight, ShoppingCart, Info } from 'lucide-react';
import Image from 'next/image';

export default function ProductSlider() {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(true);
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
      <div className="w-full bg-gradient-to-br from-red-50 to-red-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-white border border-red-200 text-red-700 px-8 py-6 rounded-2xl shadow-lg">
            <svg className="w-16 h-16 mx-auto mb-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg font-semibold mb-4">Error loading products: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
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
      <div className="relative w-full bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[500px] md:h-[600px] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 animate-pulse">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-600 font-medium text-lg">Loading amazing products...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="relative w-full bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-white border border-blue-200 text-blue-700 px-8 py-10 rounded-2xl shadow-lg">
            <svg className="w-20 h-20 mx-auto mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p className="text-xl font-semibold">No featured products available at the moment.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-auto py-12 px-4">
      <div className="max-w-7xl mt-10 mx-4">
        {/* Main Slider */}
        <div
          className="relative overflow-hidden max-h-screen rounded-3xl  shadow-2xl group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-[500px] md:h-[600px]">
            {products.map((product, index) => (
              <div
                key={product._id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
                  ? 'opacity-100 z-10 scale-100'
                  : 'opacity-0 z-0 scale-105'
                  }`}
              >
                {/* Background Image */}
                 <Image
    src={product.bgImage}
    alt={product.title}
    fill
    className="object-cover"
    sizes="100vw"
  />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

                {/* Content - Left Side */}
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full md:w-1/2 md:px-16 z-20">
                    {/* Tag */}
                    {product.tag && (
                      <div className="inline-block mb-4 animate-fadeIn">
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-semibold rounded-full shadow-lg">
                          {product.tag}
                        </span>
                      </div>
                    )}

                    {/* Title */}
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight animate-slideInLeft">
                      {product.title}
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-2xl text-gray-200 mb-6 animate-slideInLeft" style={{ animationDelay: '0.1s' }}>
                      {product.description}
                    </p>

                    {/* Price */}
                    <div className="mb-8 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                      <p className="text-3xl md:text-5xl font-bold text-white">
                        {product.price}
                      </p>
                      {/* {product.slogan && (
                        // <p className="text-sm md:text-base text-gray-300 mt-2 italic">
                        //   {product.slogan}
                        // </p>
                      )} */}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 animate-slideInLeft" style={{ animationDelay: '0.3s' }}>
                      <button className="group/btn bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-4xl font-semibold transition-all transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
                        <ShoppingCart className="w-auto h-auto" />
                        Shop Now
                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-xl border-2 border-white/50 hover:border-white transition-all font-semibold flex items-center justify-center gap-2">
                        <Info className="w-5 h-5" />
                        Learn More
                      </button>
                    </div>
                  </div>

                  {/* Product Image - Right Side */}
                  <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center">
                    <Image
                      src={product.productImage}
                      alt={product.title}
                      width={500}
                      height={500}
                      className="max-w-full max-h-full object-contain drop-shadow-2xl animate-float"
                      style={{
                        filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))",
                        transform: index === currentSlide ? "translateY(0)" : "translateY(20px)",
                        transition: "transform 1s ease-in-out",
                      }}
                    />

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
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md hover:bg-white/40 rounded-full p-3 md:p-4 focus:outline-none transition-all opacity-0 group-hover:opacity-100 transform hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md hover:bg-white/40 rounded-full p-3 md:p-4 focus:outline-none transition-all opacity-0 group-hover:opacity-100 transform hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </button>
            </>
          )}

          {/* Indicators */}
          {products.length > 1 && (
            <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex justify-center gap-2 z-30">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${index === currentSlide
                    ? 'bg-white w-12 h-3'
                    : 'bg-white/50 hover:bg-white/70 w-3 h-3'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>


              {/* Slogan */}
        <div className="mt-8 text-center">
          <p className="text-2xl font-medium text-gray-800 animate-pulse">
            &quot;{products[currentSlide].slogan}&quot;
          </p>
        </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
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
