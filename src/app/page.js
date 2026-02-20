
// import CategoryNav from './components/CategoryNav';
// import Navbar from './components/Navbar';
// // import ProductFilter from './components/ProductFilter';
// import ProductSlider from './components/ProductSlider';
// import Section from './components/Section';
// import Footer from "@/app/components/Footer";
// import Voice_Chat from "./components/voice_chat";
// import ProductsWithCategoryNav from '@/app/components/ProductsWithCategoryNav';
// // import { products } from '@/app/data/products';

// export default function  () {
//   return (
//     <>

// <div className='min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,140,0,0.9),_rgba(255,200,150,0.6),_rgba(155,240,230,0.4),_rgba(200,220,255,0.5),_rgba(0,70,160,0.9))]'> 
      
//        <Navbar />
//       <ProductSlider />
//     {/* <ProductsWithCategoryNav defaultTitle="Featured Products" /> */}
//       <CategoryNav /> 
//        <Section />
//        {/* <Voice_Chat/> */}
//       <Footer />
//        {/* <ProductFilter /> */}


// </div>

      
//       {/*  abhi niche jo he wo 31 ka updates hei */}
    



//     </>
//   );
// }
 







// // ✅ FIXED VERSION

// import CategoryNav from './components/CategoryNav';
// import Navbar from './components/Navbar';
// // import ProductFilter from './components/ProductFilter';
// import ProductSlider from './components/ProductSlider';
// import Section from './components/Section';
// import Footer from "@/app/components/Footer";
// import Voice_Chat from "./components/voice_chat";
// import ProductsWithCategoryNav from '@/app/components/ProductsWithCategoryNav';
// // import { products } from '@/app/data/products';

// // ✅ FIX: Anonymous function ko named function banaya
// export default function HomePage() {
//   return (
//     <>
//       <div className='min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,140,0,0.9),_rgba(255,200,150,0.6),_rgba(155,240,230,0.4),_rgba(200,220,255,0.5),_rgba(0,70,160,0.9))]'> 
//         <Navbar />
//         <ProductSlider />
//         {/* <ProductsWithCategoryNav defaultTitle="Featured Products" /> */}
//         <CategoryNav /> 
//         <Section />
//         {/* <Voice_Chat/> */}
//         <Footer />
//         {/* <ProductFilter /> */}
//       </div>
      
//       {/*  abhi niche jo he wo 31 ka updates hei */}
//     </>
//   );
// }












// src/app/page.js
import { Suspense } from 'react';
import CategoryNav from './components/CategoryNav';
import Navbar from './components/Navbar';
import ProductSlider from './components/ProductSlider';
import Section from './components/Section';
import Footer from "@/app/components/Footer";
// import Voice_Chat from "./components/voice_chat";
// import ProductsWithCategoryNav from '@/app/components/ProductsWithCategoryNav';

// ✅ Loading component for Suspense fallback
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600 font-medium">Loading amazing deals...</p>
      </div>
    </div>
  );
}

// ✅ Named export function (build error fix ke liye)
export default function HomePage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className='min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,140,0,100),_rgba(255,200,150,0.6),_rgba(155,240,230,0.4),_rgba(200,220,255,0.5),_rgba(0,70,160,0.9))]'> 
        <Navbar />
        
        <ProductSlider />
        {/* <ProductsWithCategoryNav defaultTitle="Featured Products" /> */}
        <CategoryNav /> 
        <Section />
        {/* <Voice_Chat/> */}
        <Footer />
      </div>
    </Suspense>
  );
}