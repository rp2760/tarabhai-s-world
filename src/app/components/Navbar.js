// "use client"; // Required for interactivity in Next.js 13+

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import {
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from '@clerk/nextjs'

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close menu when clicking on a link
//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
//               YourLogo
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
              
//             </div>
//           </div>
//           {/* CTA Button */}
//           <div className="hidden md:block">
//           <SignedOut>
//     <SignInButton mode="modal">
//       <button className="ml-8 px-6 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-indigo-500/30">
//         Sign in
//       </button>
//     </SignInButton>
//   </SignedOut>
//   <SignedIn>
//     <div className="ml-8">
//       <UserButton />
//     </div>
//   </SignedIn>
// </div>



//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none transition-all"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {/* Hamburger icon */}
//               <svg
//                 className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//               {/* Close icon */}
//               <svg
//                 className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg mx-4">
//           <MobileNavLink href="/" text="Home" onClick={closeMenu} />
//           <MobileNavLink href="/about" text="About" onClick={closeMenu} />
//           <MobileNavLink href="/services" text="Services" onClick={closeMenu} />
//           <MobileNavLink href="/portfolio" text="Portfolio" onClick={closeMenu} />
//           <MobileNavLink href="/contact" text="Contact" onClick={closeMenu} />
//           <div className="mt-4">
//             <Link
//               href="/get-started"
//               onClick={closeMenu}
//               className="block w-full px-4 py-2 text-center rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// // Component for desktop navigation links
// function NavLink({ href, text }) {
//   return (
//     <Link
//       href={href}
//       className="relative px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors group"
//     >
//       {text}
//       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
//     </Link>
//   );
// }

// // Component for mobile navigation links
// function MobileNavLink({ href, text, onClick }) {
//   return (
//     <Link
//       href={href}
//       onClick={onClick}
//       className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
//     >
//       {text}
//     </Link>
//   );
// }











// // abhi niche jo he wo 31 ka updates hei






// // src/app/components/Navbar.js
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import {
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
//   useUser,
// } from "@clerk/nextjs";
// import { ShoppingCart } from "lucide-react";
// import CartPreview from "./CartPreview";

// export default function Navbar() {
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [cartItemsCount, setCartItemsCount] = useState(0);
//   const [showCartPreview, setShowCartPreview] = useState(false);
//   const { isSignedIn } = useUser();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await fetch("/api/categories");
//         const data = await res.json();
//         setCategories(data);
//       } catch (err) {
//         console.error("Failed to load categories", err);
//       }
//     })();
//   }, []);

//   useEffect(() => {
//     if (isSignedIn) {
//       (async () => {
//         try {
//           const res = await fetch("/api/cart");
//           if (res.ok) {
//             const data = await res.json();
//             setCartItemsCount(data.totalItems || 0);
//           }
//         } catch (err) {
//           console.error("Failed to load cart count", err);
//         }
//       })();
//     }
//   }, [isSignedIn]);

//   const closeMenu = () => setIsOpen(false);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (!searchQuery.trim()) {
//       alert("Please enter a product name.");
//       return;
//     }

//     const params = new URLSearchParams();
//     params.set("name", searchQuery.trim());
//     if (selectedCategory && selectedCategory !== "all") {
//       params.set("category", selectedCategory);
//     }

//     try {
//       const res = await fetch(`/api/products?${params.toString()}`);
//       if (!res.ok) {
//         const data = await res.json();
//         alert(data.error || "Product not found in this category.");
//         return;
//       }

//       const product = await res.json();
//       router.push(`/products/${product._id}`);
//     } catch (err) {
//       console.error("Search failed:", err);
//       alert("Something went wrong during search.");
//     }
//   };

//   return (
//     <nav className={`${scrolled ? "bg-white/90 shadow-sm py-2" : "bg-transparent py-4"} fixed w-full z-50 transition-all duration-500`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-4">
//         <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700">
//           YourLogo
//         </Link>

//         <form onSubmit={handleSearch} className="hidden md:flex flex-1 items-center bg-white rounded-md shadow border border-gray-300">
//           <select
//             className="px-3 py-2 bg-gray-100 border-r border-gray-300 text-gray-700 text-sm outline-none"
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//           >
//             <option value="all">All</option>
//             {categories.map((cat) => (
//               <option key={cat._id} value={cat.name}>
//                 {cat.name}
//               </option>
//             ))}
//           </select>

//           <input
//             type="text"
//             placeholder="Search product name..."
//             className="flex-1 px-4 py-2 text-gray-700 text-sm outline-none"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />

//           <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 text-sm font-semibold text-gray-800">
//             Search
//           </button>
//         </form>

//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <button onClick={() => setShowCartPreview(!showCartPreview)} className="p-2 text-gray-700 hover:text-indigo-600 relative">
//               <ShoppingCart className="h-6 w-6" />
//               {cartItemsCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                   {cartItemsCount}
//                 </span>
//               )}
//             </button>
//             {showCartPreview && (
//               <CartPreview onClose={() => setShowCartPreview(false)} onItemCountChange={setCartItemsCount} />
//             )}
//           </div>

//           <div className="hidden md:block">
//             <SignedOut>
//               <SignInButton mode="modal">
//                 <button className="ml-4 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md shadow-lg">
//                   Sign in
//                 </button>
//               </SignInButton>
//             </SignedOut>
//             <SignedIn>
//               <div className="ml-4">
//                 <UserButton />
//               </div>
//             </SignedIn>
//           </div>

//           {/* Mobile menu toggle */}
//           <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-700 hover:text-indigo-600">
//             <svg className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`} viewBox="0 0 24 24" fill="none">
//               <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//             <svg className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`} viewBox="0 0 24 24" fill="none">
//               <path stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Nav & Search */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-lg rounded-b-lg">
//           <div className="px-4 py-3 space-y-2">
//             {/* links... */}
//             <form onSubmit={handleSearch} className="flex flex-col gap-2 mt-4">
//               <select
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//                 className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md"
//               >
//                 <option value="all">All</option>
//                 {categories.map((cat) => (
//                   <option key={cat._id} value={cat.name}>
//                     {cat.name}
//                   </option>
//                 ))}
//               </select>
//               <input
//                 type="text"
//                 placeholder="Search product name..."
//                 className="px-4 py-2 border text-sm rounded-md"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md text-sm font-semibold text-gray-800">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }












// // src/app/components/Navbar.js
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
// import { ShoppingCart } from "lucide-react";
// import CartPreview from "./CartPreview";
// import { useComparison } from '../../context/ComparisonContext';
// import ComparisonModal from './ComparisonModal';


// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [cartItemsCount, setCartItemsCount] = useState(0);
//   const [showCartPreview, setShowCartPreview] = useState(false);
//   const { isSignedIn } = useUser();
//  const { comparisonProducts } = useComparison();
//   const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);


//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Fetch categories from API
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch("/api/categories");
//         const data = await res.json();
//         setCategories(data);
//       } catch (err) {
//         console.error("Failed to load categories", err);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // Fetch cart items count
//   useEffect(() => {
//     if (isSignedIn) {
//       const fetchCartCount = async () => {
//         try {
//           const res = await fetch("/api/cart");
//           if (res.ok) {
//             const data = await res.json();
//             setCartItemsCount(data.totalItems || 0);
//           }
//         } catch (err) {
//           console.error("Failed to load cart count", err);
//         }
//       };
//       fetchCartCount();
//     }
//   }, [isSignedIn]);

//   const closeMenu = () => setIsOpen(false);

//   const handleSearch = async (e) => {
//     e.preventDefault();
    
//     // If no search query, show all products in the selected category
//     if (!searchQuery.trim()) {
//       if (selectedCategory === "all") {
//         window.location.href = "/products";
//       } else {
//         window.location.href = `/products?category=${encodeURIComponent(selectedCategory)}`;
//       }
//       return;
//     }

//     try {
//       // First, fetch products based on category
//       let apiUrl = "/api/products";
//       if (selectedCategory !== "all") {
//         apiUrl += `?category=${encodeURIComponent(selectedCategory.toLowerCase())}`;
//       }
      
//       const res = await fetch(apiUrl);
//       const products = await res.json();
      
//       // Find the product by name in the selected category
//       const foundProduct = products.find(product => 
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
      
//       if (foundProduct) {
//         // Redirect to the product page
//         window.location.href = `/products/${foundProduct._id}`;
//       } else {
//         // Show not found message or redirect to search results page
//         alert(`No product named "${searchQuery}" found in the ${selectedCategory} category.`);
//         // Alternatively, you could redirect to a search results page:
//         // window.location.href = `/products?search=${encodeURIComponent(searchQuery)}&category=${encodeURIComponent(selectedCategory)}`;
//       }
//     } catch (error) {
//       console.error("Search failed:", error);
//       alert("Search failed. Please try again.");
//     }
//   };

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-500 ${
//         scrolled
//           ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
//           : "bg-transparent py-4"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 gap-4">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link
//               href="/"
//               className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
//             >
//               YourLogo
//             </Link>
//           </div>

//           {/* Desktop Navigation with Search */}
//           <div className="hidden md:flex flex-1 items-center gap-4">
//             {/* Category Dropdown */}
//             <form
//               onSubmit={handleSearch}
//               className="flex flex-1 items-center bg-white rounded-md overflow-hidden shadow border border-gray-300"
//             >
//               <select
//                 className="px-3 py-2 bg-gray-100 border-r border-gray-300 text-gray-700 text-sm outline-none"
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//               >
//                 <option value="all">All Categories</option>
//                 {categories.map((cat) => (
//                   <option key={cat._id} value={cat.name}>
//                     {cat.name}
//                   </option>
//                 ))}
//               </select>

//               {/* Search Input */}
//               <input
//                 type="text"
//                 placeholder="Search for products by name..."
//                 className="flex-1 px-4 text-gray-700 py-2 text-sm outline-none"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />

//               {/* Search Button */}
//               <button
//                 type="submit"
//                 className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 text-sm font-semibold text-gray-800 transition-colors"
//               >
//                 Search
//               </button>
//             </form>
//           </div>

//           {/* Right side icons */}
//           <div className="flex items-center gap-4">
//             {/* Cart Icon */}
//             <div className="relative">
//               <button 
//                 onClick={() => setShowCartPreview(!showCartPreview)}
//                 className="p-2 text-gray-700 hover:text-indigo-600 relative"
//               >
//                 <ShoppingCart className="h-6 w-6" />
//                 {cartItemsCount > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                     {cartItemsCount}
//                   </span>
//                 )}
//               </button>
              
//               {/* Cart Preview Dropdown */}
//               {showCartPreview && (
//                 <CartPreview 
//                   onClose={() => setShowCartPreview(false)}
//                   onItemCountChange={setCartItemsCount}
//                 />
//               )}
//             </div>

//             {/* Auth Buttons */}
//             <div className="hidden md:block">
//               <SignedOut>
//                 <SignInButton mode="modal">
//                   <button className="ml-4 px-6 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-indigo-500/30">
//                     Sign in
//                   </button>
                  
//         <button 
//           onClick={() => setIsComparisonOpen(true)}
//           className="relative p-2 text-gray-700 hover:text-indigo-600"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//           </svg>
//           {comparisonProducts.length > 0 && (
//             <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//               {comparisonProducts.length}
//             </span>
//           )}
//         </button>


//                 </SignInButton>
//               </SignedOut>
//               <SignedIn>
//                 <div className="ml-4">
//                   <UserButton />
//                 </div>
//               </SignedIn>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none transition-all"
//             >
//               <span className="sr-only">Open main menu</span>
//               {/* Hamburger icon */}
//               <svg
//                 className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//               {/* Close icon */}
//               <svg
//                 className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div
//         className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
//           isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg mx-4">
//           <MobileNavLink href="/" text="Home" onClick={closeMenu} />
//           <MobileNavLink href="/about" text="About" onClick={closeMenu} />
//           <MobileNavLink href="/services" text="Services" onClick={closeMenu} />
//           <MobileNavLink
//             href="/portfolio"
//             text="Portfolio"
//             onClick={closeMenu}
//           />
//           <MobileNavLink href="/contact" text="Contact" onClick={closeMenu} />

//           {/* Search in mobile */}
//           <form onSubmit={handleSearch} className="flex flex-col gap-2 mt-4">
//             <select
//               className="px-3 py-2 bg-gray-100 border border-gray-300 text-gray-700 text-sm rounded-md"
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//             >
//               <option value="all">All Categories</option>
//               {categories.map((cat) => (
//                 <option key={cat._id} value={cat.name}>
//                   {cat.name}
//                 </option>
//               ))}
//             </select>

//             <input
//               type="text"
//               placeholder="Search for products by name..."
//               className="px-4 py-2 text-sm border border-gray-300 rounded-md"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button
//               type="submit"
//               className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md text-sm font-semibold text-gray-800"
//             >
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// <ComparisonModal 
//         isOpen={isComparisonOpen} 
//         onClose={() => setIsComparisonOpen(false)} 
//       />

// function MobileNavLink({ href, text, onClick }) {
//   return (
//     <Link
//       href={href}
//       onClick={onClick}
//       className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
//     >
//       {text}
//     </Link>
//   );
// }






















// // src/app/components/Navbar.js
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
// import { ShoppingCart } from "lucide-react";
// import CartPreview from "./CartPreview";
// import { useComparison } from '../../context/ComparisonContext';
// import ComparisonModal from './ComparisonModal';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [cartItemsCount, setCartItemsCount] = useState(0);
//   const [showCartPreview, setShowCartPreview] = useState(false);
//   const { isSignedIn } = useUser();
//   const { comparisonProducts } = useComparison();
//   const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false); // Correct state name

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Fetch categories from API
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch("/api/categories");
//         const data = await res.json();
//         setCategories(data);
//       } catch (err) {
//         console.error("Failed to load categories", err);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // Fetch cart items count
//   useEffect(() => {
//     if (isSignedIn) {
//       const fetchCartCount = async () => {
//         try {
//           const res = await fetch("/api/cart");
//           if (res.ok) {
//             const data = await res.json();
//             setCartItemsCount(data.totalItems || 0);
//           }
//         } catch (err) {
//           console.error("Failed to load cart count", err);
//         }
//       };
//       fetchCartCount();
//     }
//   }, [isSignedIn]);

//   const closeMenu = () => setIsOpen(false);

//   const handleSearch = async (e) => {
//     e.preventDefault();
    
//     // If no search query, show all products in the selected category
//     if (!searchQuery.trim()) {
//       if (selectedCategory === "all") {
//         window.location.href = "/products";
//       } else {
//         window.location.href = `/products?category=${encodeURIComponent(selectedCategory)}`;
//       }
//       return;
//     }

//     try {
//       // First, fetch products based on category
//       let apiUrl = "/api/products";
//       if (selectedCategory !== "all") {
//         apiUrl += `?category=${encodeURIComponent(selectedCategory.toLowerCase())}`;
//       }
      
//       const res = await fetch(apiUrl);
//       const products = await res.json();
      
//       // Find the product by name in the selected category
//       const foundProduct = products.find(product => 
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
      
//       if (foundProduct) {
//         // Redirect to the product page
//         window.location.href = `/products/${foundProduct._id}`;
//       } else {
//         // Show not found message or redirect to search results page
//         alert(`No product named "${searchQuery}" found in the ${selectedCategory} category.`);
//       }
//     } catch (error) {
//       console.error("Search failed:", error);
//       alert("Search failed. Please try again.");
//     }
//   };

//   return (
//     <>
//       <nav
//         className={`fixed w-full z-50 transition-all duration-500 ${
//           scrolled
//             ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
//             : "bg-transparent py-4"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 gap-4">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <Link
//                 href="/"
//                 className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
//               >
//                 YourLogo
//               </Link>
//             </div>

//             {/* Desktop Navigation with Search */}
//             <div className="hidden md:flex flex-1 items-center gap-4">
//               {/* Category Dropdown */}
//               <form
//                 onSubmit={handleSearch}
//                 className="flex flex-1 items-center bg-white rounded-md overflow-hidden shadow border border-gray-300"
//               >
//                 <select
//                   className="px-3 py-2 bg-gray-100 border-r border-gray-300 text-gray-700 text-sm outline-none"
//                   value={selectedCategory}
//                   onChange={(e) => setSelectedCategory(e.target.value)}
//                 >
//                   <option value="all">All Categories</option>
//                   {categories.map((cat) => (
//                     <option key={cat._id} value={cat.name}>
//                       {cat.name}
//                     </option>
//                   ))}
//                 </select>

//                 {/* Search Input */}
//                 <input
//                   type="text"
//                   placeholder="Search for products by name..."
//                   className="flex-1 px-4 text-gray-700 py-2 text-sm outline-none"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />

//                 {/* Search Button */}
//                 <button
//                   type="submit"
//                   className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 text-sm font-semibold text-gray-800 transition-colors"
//                 >
//                   Search
//                 </button>
//               </form>
//             </div>

//             {/* Right side icons */}
//             <div className="flex items-center gap-4">
//               {/* Comparison Button */}
//               <button 
//                 onClick={() => setIsComparisonModalOpen(true)}
//                 className="relative p-2 text-gray-700 hover:text-indigo-600"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                 </svg>
//                 {comparisonProducts.length > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                     {comparisonProducts.length}
//                   </span>
//                 )}
//               </button>

//               {/* Cart Icon */}
//               <div className="relative">
//                 <button 
//                   onClick={() => setShowCartPreview(!showCartPreview)}
//                   className="p-2 text-gray-700 hover:text-indigo-600 relative"
//                 >
//                   <ShoppingCart className="h-6 w-6" />
//                   {cartItemsCount > 0 && (
//                     <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                       {cartItemsCount}
//                     </span>
//                   )}
//                 </button>
                
//                 {/* Cart Preview Dropdown */}
//                 {showCartPreview && (
//                   <CartPreview 
//                     onClose={() => setShowCartPreview(false)}
//                     onItemCountChange={setCartItemsCount}
//                   />
//                 )}
//               </div>

//               {/* Auth Buttons */}
//               <div className="hidden md:block">
//                 <SignedOut>
//                   <SignInButton mode="modal">
//                     <button className="ml-4 px-6 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-indigo-500/30">
//                       Sign in
//                     </button>
//                   </SignInButton>
//                 </SignedOut>
//                 <SignedIn>
//                   <div className="ml-4">
//                     <UserButton />
//                   </div>
//                 </SignedIn>
//               </div>
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden flex items-center">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none transition-all"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {/* Hamburger icon */}
//                 <svg
//                   className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//                 {/* Close icon */}
//                 <svg
//                   className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div
//           className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
//             isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg mx-4">
//             <MobileNavLink href="/" text="Home" onClick={closeMenu} />
//             <MobileNavLink href="/about" text="About" onClick={closeMenu} />
//             <MobileNavLink href="/services" text="Services" onClick={closeMenu} />
//             <MobileNavLink
//               href="/portfolio"
//               text="Portfolio"
//               onClick={closeMenu}
//             />
//             <MobileNavLink href="/contact" text="Contact" onClick={closeMenu} />

//             {/* Search in mobile */}
//             <form onSubmit={handleSearch} className="flex flex-col gap-2 mt-4">
//               <select
//                 className="px-3 py-2 bg-gray-100 border border-gray-300 text-gray-700 text-sm rounded-md"
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//               >
//                 <option value="all">All Categories</option>
//                 {categories.map((cat) => (
//                   <option key={cat._id} value={cat.name}>
//                     {cat.name}
//                   </option>
//                 ))}
//               </select>

//               <input
//                 type="text"
//                 placeholder="Search for products by name..."
//                 className="px-4 py-2 text-sm border border-gray-300 rounded-md"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md text-sm font-semibold text-gray-800"
//               >
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>

//       {/* Comparison Modal - Fixed to use correct state variable */}
//       <ComparisonModal 
//         isOpen={isComparisonModalOpen} 
//         onClose={() => setIsComparisonModalOpen(false)} 
//       />
//     </>
//   );
// }

// function MobileNavLink({ href, text, onClick }) {
//   return (
//     <Link
//       href={href}
//       onClick={onClick}
//       className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
//     >
//       {text}
//     </Link>
//   );
// }
















// src/app/components/Navbar.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart, Heart, Search } from "lucide-react";
import CartPreview from "./CartPreview";
import { useComparison } from '../../context/ComparisonContext';
import ComparisonModal from './ComparisonModal';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [showCartPreview, setShowCartPreview] = useState(false);
  const { isSignedIn } = useUser();
  const { comparisonProducts } = useComparison();
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Failed to load categories", err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch cart items count
  useEffect(() => {
    if (isSignedIn) {
      const fetchCartCount = async () => {
        try {
          const res = await fetch("/api/cart");
          if (res.ok) {
            const data = await res.json();
            setCartItemsCount(data.totalItems || 0);
          }
        } catch (err) {
          console.error("Failed to load cart count", err);
        }
      };
      fetchCartCount();
    }
  }, [isSignedIn]);

  const closeMenu = () => setIsOpen(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      if (selectedCategory === "all") {
        window.location.href = "/products";
      } else {
        window.location.href = `/products?category=${encodeURIComponent(selectedCategory)}`;
      }
      return;
    }

    try {
      let apiUrl = "/api/products";
      if (selectedCategory !== "all") {
        apiUrl += `?category=${encodeURIComponent(selectedCategory.toLowerCase())}`;
      }
      
      const res = await fetch(apiUrl);
      const products = await res.json();
      
      const foundProduct = products.find(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      if (foundProduct) {
        window.location.href = `/products/${foundProduct._id}`;
      } else {
        alert(`No product named "${searchQuery}" found in the ${selectedCategory} category.`);
      }
    } catch (error) {
      console.error("Search failed:", error);
      alert("Search failed. Please try again.");
    }
  };

  return (
    <>
      <nav
        className={`fixed min-w-full rounded-full z-50 transition-all duration-500  ${
          scrolled
            ? "bg-gray-300/50 backdrop-blur-lg shadow-sm"
            : "bg-gray-200/90 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center  text-xl font-bold tracking-tight group"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-300">
                <span className="text-white font-bold text-sm">d</span>
              </div>
              <span className="text-gray-900">ealPort</span>
            </Link>

            {/* Center Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <form onSubmit={handleSearch} className="relative w-full group">
                <div className="relative flex items-center bg-gray-50 rounded-full overflow-hidden border-2 border-transparent hover:border-gray-200 focus-within:border-indigo-400 transition-all duration-300 shadow-sm hover:shadow-md">
                  {/* Search Icon */}
                  <div className="pl-5 pr-3">
                    <Search className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  {/* Search Input */}
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="flex-1 bg-transparent py-3 text-gray-700 text-sm outline-none placeholder:text-gray-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />

                  {/* Category Dropdown */}
                  <select
                    className="px-4 py-3 bg-transparent border-l border-gray-200 text-gray-600 text-sm outline-none cursor-pointer hover:text-gray-900 transition-colors"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="all">All</option>
                    {categories.map((cat) => (
                      <option key={cat._id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>

                  {/* Search Button */}
                  <button
                    type="submit"
                    className="m-1.5 bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-3">
              {/* Comparison Button */}
              <button 
                onClick={() => setIsComparisonModalOpen(true)}
                className="relative p-2.5 text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded-full transition-all duration-300 group"
                aria-label="Compare products"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                {comparisonProducts.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {comparisonProducts.length}
                  </span>
                )}
              </button>

              {/* Wishlist/Favorites Button */}
              <button 
                className="p-2.5 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-300"
                aria-label="Wishlist"
              >
                <Heart className="h-5 w-5" />
              </button>

              {/* Cart Button */}
              <div className="relative">
                <button 
                  onClick={() => setShowCartPreview(!showCartPreview)}
                  className="p-2.5 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all duration-300 relative"
                  aria-label="Shopping cart"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </button>
                
                {showCartPreview && (
                  <CartPreview 
                    onClose={() => setShowCartPreview(false)}
                    onItemCountChange={setCartItemsCount}
                  />
                )}
              </div>

              {/* User Profile / Sign In */}
              <div className="hidden md:block ml-2">
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:scale-105">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Sign in
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <div className="flex items-center gap-2 p-1 pr-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-all cursor-pointer">
                    <UserButton 
                      appearance={{
                        elements: {
                          avatarBox: "w-9 h-9"
                        }
                      }}
                    />
                    <span className="text-sm font-medium text-gray-700 hidden xl:block">Account</span>
                  </div>
                </SignedIn>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-all"
                aria-label="Menu"
              >
                <svg
                  className={`h-6 w-6 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100 border-t border-gray-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-6 py-4 space-y-4 bg-white">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="space-y-3">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-indigo-400 focus:bg-white transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <select
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 outline-none focus:border-indigo-400 focus:bg-white transition-all"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                Search
              </button>
            </form>

            {/* Mobile Navigation Links */}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <MobileNavLink href="/" text="Home" onClick={closeMenu} />
              <MobileNavLink href="/about" text="About" onClick={closeMenu} />
              <MobileNavLink href="/services" text="Services" onClick={closeMenu} />
              <MobileNavLink href="/portfolio" text="Portfolio" onClick={closeMenu} />
              <MobileNavLink href="/contact" text="Contact" onClick={closeMenu} />
            </div>

            {/* Mobile Auth */}
            <div className="pt-4 border-t border-gray-100 md:hidden">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Sign in
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <UserButton />
                  <span className="text-sm font-medium text-gray-700">My Account</span>
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>

      {/* Comparison Modal */}
      <ComparisonModal 
        isOpen={isComparisonModalOpen} 
        onClose={() => setIsComparisonModalOpen(false)} 
      />
    </>
  );
}

function MobileNavLink({ href, text, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
    >
      {text}
    </Link>
  );
}