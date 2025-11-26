// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useParams, useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// export default function EditProduct() {
//   const router = useRouter();
//   const { id } = useParams();
//   const [formData, setFormData] = useState({
//     productId: '',
//     name: '',
//     description: '',
//     originalPrice: '',
//     currentPrice: '',
//     category: '',
//     stock: '',
//     tag: '',
//     image: '',
//     images: [],
//     brand: '',
//     color: '',
//     size: '',
//     weight: '',
//     dimensions: ''
//   });

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`/api/products/${id}`);
//         const data = await res.json();
//         setFormData(data);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }
//     };

//     if (id) {
//       fetchProduct();
//     }
//   }, [id]);

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
//       const res = await fetch(`/api/products?id=${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         router.push('/admin');
//       }
//     } catch (error) {
//       console.error('Error updating product:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
//       <header className="bg-purple-600 text-white p-6 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Edit Product</h1>
//           <Link href="/admin" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
//             Back to Dashboard
//           </Link>
//         </div>
//       </header>

//       <main className="container mx-auto p-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Form Section */}
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-6">Edit Product Details</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productId">
//                     Product ID
//                   </label>
//                   <input
//                     type="text"
//                     id="productId"
//                     name="productId"
//                     value={formData.productId}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                     Product Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4 md:col-span-2">
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
//                     Description
//                   </label>
//                   <textarea
//                     id="description"
//                     name="description"
//                     value={formData.description}
//                     onChange={handleChange}
//                     rows="3"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     required
//                   ></textarea>
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="originalPrice">
//                     Original Price (₹)
//                   </label>
//                   <input
//                     type="number"
//                     id="originalPrice"
//                     name="originalPrice"
//                     value={formData.originalPrice}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currentPrice">
//                     Current Price (₹)
//                   </label>
//                   <input
//                     type="number"
//                     id="currentPrice"
//                     name="currentPrice"
//                     value={formData.currentPrice}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
//                     Category
//                   </label>
//                   <input
//                     type="text"
//                     id="category"
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">
//                     Stock Quantity
//                   </label>
//                   <input
//                     type="number"
//                     id="stock"
//                     name="stock"
//                     value={formData.stock}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
//                     Main Image URL
//                   </label>
//                   <input
//                     type="url"
//                     id="image"
//                     name="image"
//                     value={formData.image}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
//                     Brand
//                   </label>
//                   <input
//                     type="text"
//                     id="brand"
//                     name="brand"
//                     value={formData.brand}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   />
//                 </div>
//               </div>

//               <div className="mt-6 flex gap-4">
//                 <button
//                   type="submit"
//                   className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition"
//                 >
//                   Update Product
//                 </button>
//                 <Link
//                   href="/admin"
//                   className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-md text-center transition"
//                 >
//                   Cancel
//                 </Link>
//               </div>
//             </form>
//           </div>

//           {/* Preview Section */}
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-6">Product Preview</h2>
//             <div className="border border-gray-200 rounded-lg p-4">
//               {formData.image ? (
//                 <Image 
//                   src={formData.image} 
//                   alt="Product preview" 
//                   className="w-full h-64 object-contain mb-4 rounded-lg"
//                 />
//               ) : (
//                 <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-4 rounded-lg">
//                   <span className="text-gray-400">Image will appear here</span>
//                 </div>
//               )}

//               <h3 className="text-xl font-bold text-gray-800">
//                 {formData.name || "Product Name"}
//               </h3>
//               <div className="flex items-center mt-2">
//                 <span className="text-lg font-bold text-purple-600">
//                   ₹{formData.currentPrice || "0"}
//                 </span>
//                 {formData.originalPrice && formData.originalPrice > formData.currentPrice && (
//                   <>
//                     <span className="ml-2 text-sm text-gray-500 line-through">
//                       ₹{formData.originalPrice}
//                     </span>
//                     <span className="ml-2 text-sm font-medium text-green-600">
//                       {Math.round(((formData.originalPrice - formData.currentPrice) / formData.originalPrice) * 100)}% off
//                     </span>
//                   </>
//                 )}
//               </div>

//               <div className="mt-4">
//                 <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
//                   {formData.category || "Category"}
//                 </span>
//                 {formData.tag && (
//                   <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full ml-2">
//                     {formData.tag}
//                   </span>
//                 )}
//               </div>

//               <p className="mt-4 text-gray-600">
//                 {formData.description || "Product description will appear here."}
//               </p>

//               <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
//                 <div>
//                   <span className="font-medium text-gray-700">Brand:</span> {formData.brand || "-"}
//                 </div>
//                 <div>
//                   <span className="font-medium text-gray-700">Color:</span> {formData.color || "-"}
//                 </div>
//                 <div>
//                   <span className="font-medium text-gray-700">Size:</span> {formData.size || "-"}
//                 </div>
//                 <div>
//                   <span className="font-medium text-gray-700">Stock:</span> {formData.stock || "0"}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }





// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useParams, useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// export default function EditProduct() {
//   const router = useRouter();
//   const { id } = useParams();
//   const [formData, setFormData] = useState({
//     productId: '',
//     name: '',
//     description: '',
//     originalPrice: '',
//     currentPrice: '',
//     category: '',
//     stock: '',
//     tag: '',
//     image: '',
//     images: [],
//     brand: '',
//     color: '',
//     size: '',
//     weight: '',
//     dimensions: '',
//     shippingCharge: 0,
//     deliveryTime: '3-5 business days'
//   });

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`/api/products/${id}`);
//         const data = await res.json();
//         setFormData(data);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }
//     };

//     if (id) {
//       fetchProduct();
//     }
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleImageArrayChange = (e, index) => {
//     const newImages = [...formData.images];
//     newImages[index] = e.target.value;
//     setFormData(prev => ({
//       ...prev,
//       images: newImages
//     }));
//   };

//   const addImageField = () => {
//     setFormData(prev => ({
//       ...prev,
//       images: [...prev.images, '']
//     }));
//   };

//   const removeImageField = (index) => {
//     const newImages = formData.images.filter((_, i) => i !== index);
//     setFormData(prev => ({
//       ...prev,
//       images: newImages
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`/api/products?id=${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         router.push('/admin');
//       }
//     } catch (error) {
//       console.error('Error updating product:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
//       <header className="bg-purple-600 text-white p-6 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Edit Product</h1>
//           <Link href="/admin" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
//             Back to Dashboard
//           </Link>
//         </div>
//       </header>

//       <main className="container mx-auto p-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Form Section */}
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-6">Edit Product Details</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Existing fields... */}

//                 {/* Add shipping charge field */}
//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shippingCharge">
//                     Shipping Charge (₹)
//                   </label>
//                   <input
//                     type="number"
//                     id="shippingCharge"
//                     name="shippingCharge"
//                     value={formData.shippingCharge}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   />
//                 </div>

//                 {/* Add delivery time field */}
//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deliveryTime">
//                     Delivery Time
//                   </label>
//                   <input
//                     type="text"
//                     id="deliveryTime"
//                     name="deliveryTime"
//                     value={formData.deliveryTime}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   />
//                 </div>

//                 {/* Multiple images field */}
//                 <div className="mb-4 md:col-span-2">
//                   <label className="block text-gray-700 text-sm font-bold mb-2">
//                     Additional Images
//                   </label>
//                   {formData.images.map((img, index) => (
//                     <div key={index} className="flex items-center mb-2">
//                       <input
//                         type="url"
//                         value={img}
//                         onChange={(e) => handleImageArrayChange(e, index)}
//                         className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                         placeholder={`Image URL ${index + 1}`}
//                       />
//                       <button
//                         type="button"
//                         onClick={() => removeImageField(index)}
//                         className="ml-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   ))}
//                   <button
//                     type="button"
//                     onClick={addImageField}
//                     className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
//                   >
//                     Add Another Image
//                   </button>
//                 </div>
//               </div>

//               <div className="mt-6 flex gap-4">
//                 <button
//                   type="submit"
//                   className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition"
//                 >
//                   Update Product
//                 </button>
//                 <Link
//                   href="/admin"
//                   className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-md text-center transition"
//                 >
//                   Cancel
//                 </Link>
//               </div>
//             </form>
//           </div>

//           {/* Preview Section */}
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-6">Product Preview</h2>
//             <div className="border border-gray-200 rounded-lg p-4">
//               {formData.image ? (
//                 <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
//                   <Image 
//                     src={formData.image} 
//                     alt="Product preview" 
//                     fill
//                     className="object-contain"
//                     priority
//                     unoptimized={true}
//                   />
//                 </div>
//               ) : (
//                 <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-4 rounded-lg">
//                   <span className="text-gray-400">Image will appear here</span>
//                 </div>
//               )}

//               {/* Additional images preview */}
//               {formData.images.length > 0 && (
//                 <div className="mb-6">
//                   <h4 className="text-sm font-medium text-gray-700 mb-2">Additional Images:</h4>
//                   <div className="grid grid-cols-3 gap-2">
//                     {formData.images.map((img, index) => (
//                       img && (
//                         <div key={index} className="relative h-24">
//                           <Image
//                             src={img}
//                             alt={`Preview ${index + 1}`}
//                             fill
//                             className="object-cover rounded-md"
//                             unoptimized={true}
//                           />
//                         </div>
//                       )
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Shipping info in preview */}
//               <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
//                 <div>
//                   <span className="font-medium text-gray-700">Shipping:</span> 
//                   {formData.shippingCharge > 0 ? 
//                     `₹${formData.shippingCharge}` : 'FREE'}
//                 </div>
//                 <div>
//                   <span className="font-medium text-gray-700">Delivery:</span> 
//                   {formData.deliveryTime}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }



'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EditProduct() {
  const router = useRouter();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    productId: '',
    name: '',
    features: '',
    description: '',
    originalPrice: '',
    currentPrice: '',
    category: '',
    stock: '',
    tag: '',
    image: '',
    images: [],
    brand: '',
    color: '',
    size: '',
    weight: '',
    dimensions: '',
    shippingCharge: 0,
    deliveryTime: '3-5 business days'
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageArrayChange = (e, index) => {
    const newImages = [...formData.images];
    newImages[index] = e.target.value;
    setFormData(prev => ({
      ...prev,
      images: newImages
    }));
  };

  const addImageField = () => {
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, '']
    }));
  };

  const removeImageField = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      images: newImages
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/products?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/admin');
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <header className="bg-purple-600 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Edit Product</h1>
          <Link href="/admin" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Edit Product Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Product ID */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Product ID</label>
                  <input type="text" name="productId" value={formData.productId} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>

                {/* Name */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>

                {/* Features */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Features</label>
                  <input type="text" name="Features" value={formData.features} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                  <textarea name="description" value={formData.description} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>

                {/* Original Price */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Original Price</label>
                  <input type="number" name="originalPrice" value={formData.originalPrice} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>

                {/* Current Price */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Current Price</label>
                  <input type="number" name="currentPrice" value={formData.currentPrice} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                  <input type="text" name="category" value={formData.category} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>

                {/* Stock */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Stock</label>
                  <input type="number" name="stock" value={formData.stock} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>

                {/* Tag */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Tag</label>
                  <input type="text" name="tag" value={formData.tag} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>

                {/* Main Image */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Main Image URL</label>
                  <input type="url" name="image" value={formData.image} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>

                {/* Brand */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Brand</label>
                  <input type="text" name="brand" value={formData.brand} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>

                {/* Color */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Color</label>
                  <input type="text" name="color" value={formData.color} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>

                {/* Size */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Size</label>
                  <input type="text" name="size" value={formData.size} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>

                {/* Weight */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Weight</label>
                  <input type="text" name="weight" value={formData.weight} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>

                {/* Dimensions */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Dimensions</label>
                  <input type="text" name="dimensions" value={formData.dimensions} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>

                {/* Shipping Charge */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Shipping Charge (₹)</label>
                  <input type="number" name="shippingCharge" value={formData.shippingCharge} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>

                {/* Delivery Time */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Delivery Time</label>
                  <input type="text" name="deliveryTime" value={formData.deliveryTime} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>

                {/* Additional Images */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Additional Images</label>
                  {formData.images.map((img, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input type="url" value={img} onChange={(e) => handleImageArrayChange(e, index)} placeholder={`Image URL ${index + 1}`} className="flex-1 px-3 py-2 border border-gray-300 rounded-md" />
                      <button type="button" onClick={() => removeImageField(index)} className="ml-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-md">Remove</button>
                    </div>
                  ))}
                  <button type="button" onClick={addImageField} className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Add Another Image</button>
                </div>

              </div>

              <div className="mt-6 flex gap-4">
                <button type="submit" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition">Update Product</button>
                <Link href="/admin" className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-md text-center transition">Cancel</Link>
              </div>
            </form>
          </div>

          {/* Preview Section */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Product Preview</h2>
            <div className="border border-gray-200 rounded-lg p-4">
              {formData.image ? (
                <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                  <Image src={formData.image} alt="Product preview" fill className="object-contain" priority unoptimized />
                </div>
              ) : (
                <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-4 rounded-lg">
                  <span className="text-gray-400">Image will appear here</span>
                </div>
              )}

              {formData.images.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Additional Images:</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {formData.images.map((img, index) => (
                      img && (
                        <div key={index} className="relative h-24">
                          <Image src={img} alt={`Preview ${index + 1}`} fill className="object-cover rounded-md" unoptimized />
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Shipping:</span> {formData.shippingCharge > 0 ? `₹${formData.shippingCharge}` : 'FREE'}
                </div>
                <div>
                  <span className="font-medium text-gray-700">Delivery:</span> {formData.deliveryTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
