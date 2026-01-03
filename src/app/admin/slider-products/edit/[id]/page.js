'use client';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Save, Eye, EyeOff, Loader2, X, RefreshCw } from 'lucide-react';

export default function EditSliderProduct() {
  const router = useRouter();
  const { id } = useParams();
  const [showPreview, setShowPreview] = useState(true);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    tag: '',
    slogan: '',
    bgImage: '',
    productImage: ''
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/slider-products/${id}`);
        const data = await res.json();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching slider product:', error);
      } finally {
        setLoading(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/slider-products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/admin/slider-products');
      }
    } catch (error) {
      console.error('Error updating slider product:', error);
    }
  };

  const hasPreviewData = formData.bgImage && formData.productImage && formData.title;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-16 h-16 animate-spin text-purple-600 mx-auto mb-4" />
          <p className="text-xl font-semibold text-gray-700">Loading product details...</p>
        </div>
      </div>
    );
  }

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
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Edit Slider Product</h1>
                <p className="text-sm text-purple-100 mt-1">Update product information and preview changes</p>
              </div>
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
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Update Product Details</h2>
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
  src={formData.bgImage}
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
  src={formData.productImage}
  alt="Product preview"
  width={500}
  height={500}
  className="max-h-full object-contain"
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

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button 
                    onClick={handleSubmit}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 text-lg"
                  >
                    <Save className="w-6 h-6" />
                    Update Product
                  </button>
                  <Link
                    href="/admin/slider-products"
                    className="px-8 py-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-xl transition-all flex items-center justify-center"
                  >
                    Cancel
                  </Link>
                </div>
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
                <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                  Real-time updates
                </span>
              </div>

              {/* Preview */}
              {hasPreviewData ? (
                <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl border-4 border-purple-200">
                  {/* Background */}
                <Image
  src={formData.bgImage}
  alt="Background"
  fill
  className="object-cover"
  sizes="100vw"
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
  src={formData.productImage}
  alt="Product"
  width={500}
  height={500}
  className="max-w-full max-h-full object-contain drop-shadow-2xl"
  style={{ filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))" }}
/>

                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-[400px] rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-4 border-dashed border-gray-300">
                  <div className="text-center px-6">
                    <Eye className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600 font-medium text-lg mb-2">Preview will appear here</p>
                    <p className="text-gray-500 text-sm">Fill in all required fields to see your slider design</p>
                  </div>
                </div>
              )}

              {/* Tips */}
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <p className="text-sm text-blue-800 font-semibold mb-2">💡 Edit Tips:</p>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• Changes are reflected instantly in the preview</li>
                  <li>• Maintain consistent styling with other slides</li>
                  <li>• Test different images to find the perfect match</li>
                  <li>• Click Update Product to save your changes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 