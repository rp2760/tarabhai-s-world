// // app/components/Section.js
// "use client";

// import { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";

// export default function Section({ title }) {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       const res = await fetch("/api/products");
//       const data = await res.json();
//       setProducts(data);
//     }
//     fetchProducts();
//   }, []);

//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-indigo-600 pl-3">
//           {title}
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// // app/components/Section.js
// "use client";

// import { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import { useSearchParams } from "next/navigation";

// export default function Section({ title }) {
//   const [products, setProducts] = useState([]);
//   const searchParams = useSearchParams();
//   const category = searchParams.get('category');

//   useEffect(() => {
//     async function fetchProducts() {
//       const url = category 
//         ? `/api/products?category=${category}`
//         : '/api/products';
      
//       const res = await fetch(url);
//       const data = await res.json();
//       setProducts(data);
//     }
//     fetchProducts();
//   }, [category]);

//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-indigo-600 pl-3">
//           {category ? `${category}` : title}
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useSearchParams } from "next/navigation";

export default function Section({ defaultTitle = "Featured Products" }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const url = category 
          ? `/api/products?category=${category}`
          : '/api/products';
        
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <p>Loading products...</p>
        </div>
      </section>
    );
  }



    
  // useEffect(() => {
  //   async function fetchProducts() {
  //     setLoading(true);
  //     try {
  //       const url = category 
  //         ? `/api/products?category=${category}`
  //         : '/api/products';
        
  //       const res = await fetch(url);
  //       const data = await res.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error("Failed to fetch products:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchProducts();
  // }, [category]);

  if (loading) {
    return (
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-8 bg-gray-200 rounded-full animate-pulse w-1/4 mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <ProductCard key={i} loading />
            ))}
          </div>
        </div>
      </section>
    );
  }




  return (
    <section className="bg-transparent py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-indigo-600 pl-3">
          {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : defaultTitle}
        </h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <p>No products found in this category</p>
        )}
      </div>
    </section>
  );
}




// abhi niche jo he wo 31 ka updates hei
