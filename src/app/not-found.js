// export default function NotFound() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-300 to-gray-400">
      
//       {/* Big 404 Text */}
//       <h1 className="text-9xl font-extrabold drop-shadow-lg animate-bounce">
//         404
//       </h1>

//       {/* Subheading */}
//       <h2 className="text-3xl font-semibold mt-4">
//         Oops! Page Not Found
//       </h2>

//       {/* Description */}
//       <p className="mt-3 text-lg text-white/90 text-center max-w-md">
//         "The page you’re looking for doesn’t exist or may have moved.
//         But don’t worry — let's get you back to shopping!"
//       </p>

//       {/* Illustration Circle */}
//       <div className="mt-10">
//         <div className="w-52 h-52 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center shadow-2xl">
//           <span className="text-6xl">🛒</span>
//         </div>
//       </div>

//       {/* Back Button */}
//       <a
//         href="/"
//         className="mt-10 bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all hover:scale-105"
//       >
//         Go Back to Home
//       </a>
//     </div>
//   );
// }













"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 via-gray-50 to-blue-50 p-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        
        {/* Error Number with Modern Style */}
        <div className="relative mb-8">
          <h1 className="text-[180px] font-black text-gray-900 opacity-10 tracking-wider">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-orange-500 to-gray-600 bg-clip-text text-transparent drop-shadow-md">
              404
            </h1>
          </div>
        </div>

        {/* Main Message */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
            Looks like you&apos;ve ventured into unknown territory. The page you&apos;re 
            looking for might have been moved, deleted, or never existed.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-12 relative">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-orange-100 to-gray-100 flex items-center justify-center shadow-2xl border-8 border-white/50">
            <div className="text-8xl animate-float">🛍️</div>
          </div>
          <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center text-white text-2xl shadow-lg">
            ?
          </div>
        </div>

        {/* Action Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 w-full max-w-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Let&apos;s Get You Back
          </h3>
          
          <div className="space-y-4">
            <Link
              href="/"
              className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
            >
              🏠 Back to Home
            </Link>
            
            <Link
              href="/products"
              className="block w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
            >
              🛒 Browse Products
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="block w-full bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:border-gray-300"
            >
              ↩️ Go Back
            </button>
          </div>

          {/* Search Suggestion */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600 mb-3">Or try searching:</p>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Search products..."
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Help Text */}
        <p className="mt-8 text-gray-500 text-sm">
          Need help? <a href="/contact" className="text-orange-600 font-semibold hover:underline">Contact Support</a>
        </p>
      </div>
    </div>
  );
}