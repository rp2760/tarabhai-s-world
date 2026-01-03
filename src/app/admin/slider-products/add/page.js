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
import Image from 'next/image'; 
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Eye, EyeOff, Upload, X } from 'lucide-react';

export default function AddSliderProduct() {
  const router = useRouter();
  const [showPreview, setShowPreview] = useState(true);
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

  const hasPreviewData = formData.bgImage && formData.productImage && formData.title;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white shadow-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link 
                href="/admin/slider-products" 
                className="p-2 hover:bg-white/20 rounded-lg transition-all"
              >
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold">Add New Slider Product</h1>
            </div>
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all"
            >
              {showPreview ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              <span className="hidden md:inline">{showPreview ? 'Hide' : 'Show'} Preview</span>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-purple-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Product Details</h2>
              </div>

              <div className="space-y-6">
                {/* Title */}
                <div className="group">
                  <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
                    Product Title *
                    <span className="text-xs font-normal text-gray-500">(e.g., iPhone 14 Series)</span>
                  </label>
                  <input 
                    type="text" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleChange}
                    placeholder="Enter product title"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                    required 
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
                    Description *
                    <span className="text-xs font-normal text-gray-500">(e.g., Up to 10% off Voucher)</span>
                  </label>
                  <textarea 
                    name="description" 
                    value={formData.description} 
                    onChange={handleChange} 
                    rows={3}
                    placeholder="Enter product description"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all resize-none"
                    required
                  />
                </div>

                {/* Price and Tag Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Price *
                    </label>
                    <input 
                      type="text" 
                      name="price" 
                      value={formData.price} 
                      onChange={handleChange}
                      placeholder="$999.99"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                      required 
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Tag
                    </label>
                    <input 
                      type="text" 
                      name="tag" 
                      value={formData.tag} 
                      onChange={handleChange}
                      placeholder="NEW ARRIVAL"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                    />
                  </div>
                </div>

                {/* Slogan */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Slogan
                  </label>
                  <input 
                    type="text" 
                    name="slogan" 
                    value={formData.slogan} 
                    onChange={handleChange}
                    placeholder="Innovation at your fingertips"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                  />
                </div>

                {/* Background Image */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
                    Background Image URL *
                    <span className="text-xs font-normal text-gray-500">(Dark/Black background recommended)</span>
                  </label>
                  <input 
                    type="url" 
                    name="bgImage" 
                    value={formData.bgImage} 
                    onChange={handleChange}
                    placeholder="https://example.com/background.jpg"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                    required 
                  />
                  {formData.bgImage && (
                    <div className="mt-2 relative rounded-lg overflow-hidden border-2 border-gray-200 h-24">
                    <Image
                      src={formData.bgImage || "https://via.placeholder.com/600x400?text=Background"}
                      alt="Background preview"
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, bgImage: '' }))}
                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full transition-all"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Product Image */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
                    Product Image URL *
                    <span className="text-xs font-normal text-gray-500">(Transparent PNG works best)</span>
                  </label>
                  <input 
                    type="url" 
                    name="productImage" 
                    value={formData.productImage} 
                    onChange={handleChange}
                    placeholder="https://example.com/product.png"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                    required 
                  />
                  {formData.productImage && (
                    <div className="mt-2 relative rounded-lg overflow-hidden border-2 border-gray-200 h-32 bg-gray-50 flex items-center justify-center">
                      
<Image
  src={formData.productImage || "https://via.placeholder.com/300?text=Preview"}
  alt="Product preview"
  width={300}
  height={300}
  className="max-h-full object-contain"
  unoptimized
/>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, productImage: '' }))}
                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full transition-all"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button 
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 text-lg"
                >
                  <Save className="w-6 h-6" />
                  Add Slider Product
                </button>
              </div>
            </div>
          </div>

          {/* Live Preview Section */}
          <div className={`order-1 lg:order-2 lg:sticky lg:top-24 h-fit transition-all duration-300 ${showPreview ? 'opacity-100' : 'opacity-0 lg:hidden'}`}>
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-purple-600" />
                  Live Preview
                </h3>
                {!hasPreviewData && (
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
                    Fill form to preview
                  </span>
                )}
              </div>

              {/* Preview */}
              {hasPreviewData ? (
                <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl border-4 border-purple-200">
                  <Image
  src={formData.bgImage || "https://via.placeholder.com/800x600?text=Background"}
  alt="Background"
  fill
  className="object-cover"
  sizes="100vw"
  unoptimized
/>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex items-center">
                    {/* Left Content */}
                    <div className="w-1/2 px-6 z-20">
                      {formData.tag && (
                        <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 text-xs font-semibold rounded-full mb-2">
                          {formData.tag}
                        </span>
                      )}
                      <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
                        {formData.title}
                      </h2>
                      <p className="text-sm text-gray-200 mb-3">
                        {formData.description}
                      </p>
                      <p className="text-2xl font-bold text-white mb-2">
                        {formData.price}
                      </p>
                      {formData.slogan && (
                        <p className="text-xs text-gray-300 italic mb-3">
                          {formData.slogan}
                        </p>
                      )}
                      <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                        Shop Now →
                      </button>
                    </div>
                    
                    {/* Right Product Image */}
                    <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center">
                     <Image
  src={formData.productImage || "https://via.placeholder.com/400?text=Product"}
  alt="Product"
  width={400}
  height={400}
  className="max-w-full max-h-full object-contain drop-shadow-2xl"
  style={{ filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))" }}
  unoptimized
/>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-[400px] rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-4 border-dashed border-gray-300">
                  <div className="text-center px-6">
                    <Eye className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600 font-medium text-lg mb-2">Preview will appear here</p>
                    <p className="text-gray-500 text-sm">Fill in the form fields to see your slider design</p>
                  </div>
                </div>
              )}

              {/* Tips */}
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <p className="text-sm text-blue-800 font-semibold mb-2">💡 Pro Tips:</p>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• Use a dark/black background for better contrast</li>
                  <li>• Product image should be PNG with transparent background</li>
                  <li>• Keep title short and impactful</li>
                  <li>• Preview updates in real-time as you type</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}