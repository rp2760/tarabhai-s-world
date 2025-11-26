  // 'use client';
  // import { useState } from 'react';
  // import { useRouter } from 'next/navigation';
  // import Link from 'next/link';

  // export default function AddSliderProduct() {
  //   const router = useRouter();
  //   const [formData, setFormData] = useState({
  //     title: '',
  //     description: '',
  //     price: '',
  //     tag: '',
  //     slogan: '',
  //     bgImage: '',
  //     productImage: ''
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData(prev => ({
  //       ...prev,
  //       [name]: value
  //     }));
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const res = await fetch('/api/slider-products', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(formData),
  //       });

  //       if (res.ok) {
  //         router.push('/admin/slider-products');
  //       }
  //     } catch (error) {
  //       console.error('Error adding slider product:', error);
  //     }
  //   };

  //   return (
  //     <div className="min-h-screen bg-gray-50">
  //       <header className="bg-purple-600 text-white p-6 shadow-md">
  //         <div className="container mx-auto flex justify-between items-center">
  //           <h1 className="text-2xl font-bold">Add New Slider Product</h1>
  //           <Link href="/admin/slider-products" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
  //             Back to Slider Products
  //           </Link>
  //         </div>
  //       </header>

  //       <main className="container mx-auto p-6">
  //         <div className="bg-white rounded-xl shadow-md p-6">
  //           <h2 className="text-xl font-semibold text-gray-800 mb-6">Slider Product Details</h2>
  //           <form onSubmit={handleSubmit}>
  //             <div className="grid grid-cols-1 gap-6">
  //               <div className="mb-4">
  //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
  //                   Title *
  //                 </label>
  //                 <input
  //                   type="text"
  //                   id="title"
  //                   name="title"
  //                   value={formData.title}
  //                   onChange={handleChange}
  //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
  //                   required
  //                 />
  //               </div>

  //               <div className="mb-4">
  //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
  //                   Description *
  //                 </label>
  //                 <textarea
  //                   id="description"
  //                   name="description"
  //                   value={formData.description}
  //                   onChange={handleChange}
  //                   rows="3"
  //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
  //                   required
  //                 ></textarea>
  //               </div>

  //               <div className="mb-4">
  //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
  //                   Price *
  //                 </label>
  //                 <input
  //                   type="text"
  //                   id="price"
  //                   name="price"
  //                   value={formData.price}
  //                   onChange={handleChange}
  //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
  //                   required
  //                 />
  //               </div>

  //               <div className="mb-4">
  //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tag">
  //                   Tag
  //                 </label>
  //                 <input
  //                   type="text"
  //                   id="tag"
  //                   name="tag"
  //                   value={formData.tag}
  //                   onChange={handleChange}
  //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
  //                 />
  //               </div>

  //               <div className="mb-4">
  //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slogan">
  //                   Slogan
  //                 </label>
  //                 <input
  //                   type="text"
  //                   id="slogan"
  //                   name="slogan"
  //                   value={formData.slogan}
  //                   onChange={handleChange}
  //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
  //                 />
  //               </div>

  //               <div className="mb-4">
  //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bgImage">
  //                   Background Image URL *
  //                 </label>
  //                 <input
  //                   type="url"
  //                   id="bgImage"
  //                   name="bgImage"
  //                   value={formData.bgImage}
  //                   onChange={handleChange}
  //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
  //                   required
  //                 />
  //               </div>

  //               <div className="mb-4">
  //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productImage">
  //                   Product Image URL *
  //                 </label>
  //                 <input
  //                   type="url"
  //                   id="productImage"
  //                   name="productImage"
  //                   value={formData.productImage}
  //                   onChange={handleChange}
  //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
  //                   required
  //                 />
  //               </div>
  //             </div>

  //             <div className="mt-6">
  //               <button
  //                 type="submit"
  //                 className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition"
  //               >
  //                 Add Slider Product
  //               </button>
  //             </div>
  //           </form>
  //         </div>
  //       </main>
  //     </div>
  //   );
  // }




  'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AddSliderProduct() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    tag: '',
    slogan: '',
    bgImage: '',
    productImage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/slider-products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/admin/slider-products');
      }
    } catch (error) {
      console.error('Error adding slider product:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-purple-600 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Add New Slider Product</h1>
          <Link href="/admin/slider-products" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
            Back to Slider Products
          </Link>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Slider Product Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6">

              {/* Live Preview */}
              {formData.bgImage && formData.productImage && (
                <div className="relative w-full h-64 rounded-lg overflow-hidden border">
                  <img src={formData.bgImage} alt="Background" className="w-full h-full object-cover" />
                  <img src={formData.productImage} alt="Product" className="absolute bottom-0 right-10 w-48 object-contain drop-shadow-lg" />
                </div>
              )}

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Title *</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Description *</label>
                <textarea name="description" value={formData.description} onChange={handleChange} rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required></textarea>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Price *</label>
                <input type="text" name="price" value={formData.price} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Tag</label>
                <input type="text" name="tag" value={formData.tag} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Slogan</label>
                <input type="text" name="slogan" value={formData.slogan} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Background Image URL *</label>
                <input type="url" name="bgImage" value={formData.bgImage} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Product Image URL *</label>
                <input type="url" name="productImage" value={formData.productImage} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required />
              </div>

            </div>

            <div className="mt-6">
              <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition">
                Add Slider Product
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
