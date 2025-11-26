// "use client";

// import Link from "next/link";
// import { usePathname, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function CategoryNav() {
//   const [categories, setCategories] = useState([]);
//   const searchParams = useSearchParams();
//   const currentCategory = searchParams.get('category') || '';
//   const pathname = usePathname();

//   useEffect(() => {
//     async function fetchCategories() {
//       try {
//         const res = await fetch("/api/categories");
//         const data = await res.json();
//         // Add "All" category with a unique identifier
//         setCategories([{ name: "All", categoryId: "all" }, ...data]);
//       } catch (error) {
//         console.error("Failed to load categories", error);
//         // Fallback categories in case of error
//         setCategories([{ name: "All", categoryId: "all" }]);
//       }
//     }

//     fetchCategories();
//   }, []);

//   return (
//     <div className="bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//         <div className="flex space-x-4 overflow-x-auto pb-2">
//           {categories.map((cat, index) => (
//             <Link
//               key={cat.categoryId || `category-${index}`}
//               href={cat.categoryId === "all" ? pathname : `${pathname}?category=${cat.name.toLowerCase()}`}
//               className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                 (currentCategory === cat.name.toLowerCase()) || 
//                 (currentCategory === '' && cat.categoryId === 'all')
//                   ? 'bg-indigo-600 text-white'
//                   : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//               }`}
//             >
//               {cat.name}
//             </Link>
//           ))}
//         </div>
        
//         {/* Search Field */}
//         <div className="ml-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-64"
//             />
//             <svg
//               className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CategoryNav() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || '';
  const pathname = usePathname();

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true);
        const res = await fetch('/api/categories');
        
        if (!res.ok) {
          throw new Error('Failed to load categories');
        }
        
        const data = await res.json();
        setCategories([
          { 
            name: "All", 
            categoryId: "all", 
            bannerImage: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww" 
          }, 
          ...data
        ]);
      } catch (error) {
        console.error("Failed to load categories", error);
        setCategories([
          { 
            name: "All", 
            categoryId: "all", 
            bannerImage: "/all-categories.jpg" 
          }
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex space-x-8 overflow-x-auto pb-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-gray-200 animate-pulse"></div>
                <div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-transparent shadow-sm z-10">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex space-x-8 overflow-x-auto pb-2">
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
              <div className={`relative w-16 h-16 rounded-full overflow-hidden border-2 transition-all ${
                (currentCategory === cat.name) || 
                (currentCategory === '' && cat.categoryId === 'all')
                  ? 'border-indigo-600'
                  : 'border-gray-200 group-hover:border-indigo-300'
              }`}>
                <Image
                  src={cat.bannerImage || '/default-category.jpg'}
                  alt={cat.name}
                  width={64}
                  height={64}
                  unoptimized 
                  className="object-cover w-full h-full"
                />
              </div>
              <span className={`text-xs font-medium transition-colors text-center ${
                (currentCategory === cat.name.toLowerCase()) || 
                (currentCategory === '' && cat.categoryId === 'all')
                  ? 'text-indigo-600'
                  : 'text-gray-600 group-hover:text-indigo-500'
              }`}>
                {cat.name}
              </span>
            </Link>
          ))}
        </div>  
      </div>
    </div>
  );
}
