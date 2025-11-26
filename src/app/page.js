// import ProductSlider from '@/app/components/ProductSlider';
// import Navbar from '@/app/components/Navbar';


// export default function Home() {
//   return (
//     <>
//         <Navbar />
//       <ProductSlider />
    
//     </>
//   );
// }
import CategoryNav from './components/CategoryNav';
import Navbar from './components/Navbar';
import ProductSlider from './components/ProductSlider';
import Section from './components/Section';
import Footer from "@/app/components/Footer";
import ProductsWithCategoryNav from '@/app/components/ProductsWithCategoryNav';
// import { products } from '@/app/data/products';

export default function () {
  return (
    <>

<div className='min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,140,0,0.9),_rgba(255,200,150,0.6),_rgba(155,240,230,0.4),_rgba(200,220,255,0.5),_rgba(0,70,160,0.9))]'> 

       <Navbar />
      <ProductSlider />
    {/* <ProductsWithCategoryNav defaultTitle="Featured Products" /> */}
      <CategoryNav /> 
       <Section />
      <Footer />


</div>

      
      {/*  abhi niche jo he wo 31 ka updates hei */}
    



    </>
  );
}








