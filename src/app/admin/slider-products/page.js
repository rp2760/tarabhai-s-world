// 'use client';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';

// export default function SliderProductDashboard() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const res = await fetch('/api/slider-products');
//       const data = await res.json();
//       setProducts(data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching slider products:', error);
//       setLoading(false);
//     }
//   };

//   const deleteProduct = async (id) => {
//     if (!confirm('Are you sure you want to delete this slider product?')) return;
    
//     try {
//       const res = await fetch(`/api/slider-products/${id}`, {
//         method: 'DELETE'
//       });
//       if (res.ok) {
//         fetchProducts();
//       }
//     } catch (error) {
//       console.error('Error deleting slider product:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="bg-purple-600 text-white p-6 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Slider Products Management</h1>
//           <Link href="/admin/slider-products/add" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
//             Add New Slider Product
//           </Link>
//         </div>
//       </header>

//       <main className="container mx-auto p-6">
//         <div className="bg-white rounded-xl shadow-md overflow-hidden">
//           <div className="p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-6">All Slider Products</h2>
            
//             {loading ? (
//               <div className="flex justify-center items-center h-64">
//                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//               </div>
//             ) : (
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preview</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tag</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {products.map((product) => (
//                       <tr key={product._id} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <div className="flex-shrink-0 h-10 w-10">
//                               <img 
//                                 src={product.productImage} 
//                                 alt={product.title} 
//                                 className="h-10 w-10 object-cover rounded"
//                               />
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm font-medium text-gray-900">{product.title}</div>
//                           <div className="text-sm text-gray-500">{product.slogan}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {product.price}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           {product.tag && (
//                             <span className="px-2 py-1 text-xs font-semibold leading-5 text-purple-800 bg-purple-100 rounded-full">
//                               {product.tag}
//                             </span>
//                           )}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                           <Link 
//                             href={`/admin/slider-products/edit/${product._id}`}
//                             className="text-blue-600 hover:text-blue-900 mr-4"
//                           >
//                             Edit
//                           </Link>
//                           <button
//                             onClick={() => deleteProduct(product._id)}
//                             className="text-red-600 hover:text-red-900"
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>

//       <footer className="bg-purple-600 text-white p-4 text-center">
//         <p>© {new Date().getFullYear()} Slider Products Admin Panel</p>
//       </footer>
//     </div>
//   );
// }




'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Plus, Edit, Trash2, Eye, Loader2, AlertTriangle, CheckCircle2, XCircle, Info } from 'lucide-react';

export default function SliderProductDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [previewProduct, setPreviewProduct] = useState(null);
  const [showPreviewDialog, setShowPreviewDialog] = useState(false);

  // Alert dialog states
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [feedbackDialogOpen, setFeedbackDialogOpen] = useState(false);
  const [feedbackConfig, setFeedbackConfig] = useState({
    title: "",
    description: "",
    type: "info",
  });

  const showFeedback = (title, description, type = "info") => {
  setFeedbackConfig({ title, description, type });
  setFeedbackDialogOpen(true);
};

// ✅ FIX: showFeedback ko useCallback se wrap kiya
const showFeedbackMemo = useCallback((title, description, type = "info") => {
  setFeedbackConfig({ title, description, type });
  setFeedbackDialogOpen(true);
}, []);


useEffect(() => {
  fetchProducts();
}, [fetchProducts]);


const fetchProducts = useCallback(async () => {
  try {
    const res = await fetch('/api/slider-products');
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  } catch (error) {
    console.error('Error fetching slider products:', error);
    showFeedbackMemo(
      "Error Loading Products",
      "Failed to fetch slider products. Please try again.",
      "error"
    );
    setLoading(false);
  }
}, [showFeedbackMemo]);

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    console.log(product);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!productToDelete) return;
    
    try {
      const res = await fetch(`/api/slider-products/${productToDelete._id}`, {
        method: 'DELETE'
      });
      
      if (res.ok) {
        setDeleteDialogOpen(false);
        showFeedback(
          "Slider Product Deleted",
          `${productToDelete.title} has been successfully removed from the slider.`,
          "success"
        );
        fetchProducts();
        setProductToDelete(null);
      } else {
        setDeleteDialogOpen(false);
        showFeedback(
          "Delete Failed",
          "Failed to delete slider product. Please try again.",
          "error"
        );
      }
    } catch (error) {
      console.error('Error deleting slider product:', error);
      setDeleteDialogOpen(false);
      showFeedback(
        "Error",
        "An error occurred while deleting the slider product.",
        "error"
      );
    }
  };

  const handlePreview = (product) => {
    setPreviewProduct(product);
    setShowPreviewDialog(true);
  };

  const getFeedbackIcon = () => {
    switch (feedbackConfig.type) {
      case "success":
        return <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />;
      case "error":
        return <XCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />;
      default:
        return <Info className="w-12 h-12 text-blue-600 mx-auto mb-4" />;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white shadow-xl top-0 z-50">
          <div className="container mx-auto px-6 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-1">Slider Products Management</h1>
                <p className="text-purple-100 text-sm">Manage your homepage slider products</p>
              </div>
              <Link 
                href="/admin/slider-products/add" 
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center gap-2 font-semibold"
              >
                <Plus className="w-5 h-5" />
                Add New Product
              </Link>
            </div>
          </div>
        </header>

        <main className="container mx-auto p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Total Products</p>
                  <p className="text-3xl font-bold text-purple-600">{products.length}</p>
                </div>
                <div className="bg-purple-100 p-4 rounded-xl">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Active Sliders</p>
                  <p className="text-3xl font-bold text-blue-600">{products.length}</p>
                </div>
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Status</p>
                  <p className="text-xl font-bold text-green-600">All Good ✓</p>
                </div>
                <div className="bg-green-100 p-4 rounded-xl">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Products Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100">
            <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 border-b border-purple-100">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">All Slider Products</h2>
                {products.length > 0 && (
                  <span className="px-4 py-2 text-sm font-semibold text-purple-800 bg-purple-200 rounded-full">
                    {products.length} {products.length === 1 ? 'Product' : 'Products'}
                  </span>
                )}
              </div>
            </div>
            
            {loading ? (
              <div className="flex justify-center items-center h-96">
                <div className="text-center">
                  <Loader2 className="w-16 h-16 animate-spin text-purple-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Loading products...</p>
                </div>
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20 px-6">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-12 h-12 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No slider products yet</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">Get started by adding your first slider product to showcase on the homepage. Create engaging product presentations that attract customers.</p>
                <Link
                  href="/admin/slider-products/add"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Add Your First Product
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Preview</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Product Info</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Tag</th>
                      <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((product) => (
                      <tr key={product._id} className="hover:bg-purple-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="relative h-20 w-20 rounded-xl overflow-hidden shadow-md border-2 border-gray-200 cursor-pointer group" onClick={() => handlePreview(product)}>
                           <Image
  src={product.productImage || "https://via.placeholder.com/400?text=Product"}
  alt={product.title}
  fill
  className="object-cover group-hover:scale-110 transition-transform"
  sizes="(max-width: 768px) 100vw, 33vw"
/>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <Eye className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="max-w-xs">
                            <div className="text-sm font-bold text-gray-900 truncate">{product.title}</div>
                            <div className="text-sm text-gray-600 truncate mt-1">{product.description}</div>
                            {product.slogan && (
                              <div className="text-xs text-gray-500 italic mt-1 truncate">{product.slogan}</div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg font-bold text-purple-600">
                            {product.price}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {product.tag ? (
                            <span className="px-3 py-1.5 inline-flex text-xs leading-5 font-bold rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md">
                              {product.tag}
                            </span>
                          ) : (
                            <span className="text-sm text-gray-400 italic">No tag</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => handlePreview(product)}
                              className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-all"
                              title="Preview"
                            >
                              <Eye className="w-5 h-5" />
                            </button>
                            <Link 
                              href={`/admin/slider-products/edit/${product._id}`}
                              className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-all"
                              title="Edit"
                            >
                              <Edit className="w-5 h-5" />
                            </Link>
                            <button
                              onClick={() => handleDeleteClick(product)}
                              className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-all"
                              title="Delete"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white p-6 text-center mt-12">
          <p className="font-medium">© {new Date().getFullYear()} Slider Products Admin Panel - All Rights Reserved</p>
        </footer>
      </div>

      {/* Preview Dialog */}
      <AlertDialog open={showPreviewDialog} onOpenChange={setShowPreviewDialog}>
        <AlertDialogContent className="max-w-4xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-bold text-center mb-4">
              Slider Preview
            </AlertDialogTitle>
          </AlertDialogHeader>
          {previewProduct && (
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
  src={previewProduct.bgImage || "https://via.placeholder.com/800x600?text=Background"}
  alt="Background"
  fill
  className="object-cover"
  sizes="100vw"
  unoptimized
/>
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="w-1/2 px-8 z-20">
                  {previewProduct.tag && (
                    <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 text-sm font-semibold rounded-full mb-3">
                      {previewProduct.tag}
                    </span>
                  )}
                  <h2 className="text-3xl font-bold text-white mb-3 leading-tight">
                    {previewProduct.title}
                  </h2>
                  <p className="text-lg text-gray-200 mb-4">
                    {previewProduct.description}
                  </p>
                  <p className="text-3xl font-bold text-white mb-3">
                    {previewProduct.price}
                  </p>
                  {previewProduct.slogan && (
                    <p className="text-sm text-gray-300 italic mb-4">
                      {previewProduct.slogan}
                    </p>
                  )}
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center">
                 <Image
  src={previewProduct.productImage || "https://via.placeholder.com/400?text=Product"}
  alt="Product"
  width={400}
  height={400}
  className="max-w-full max-h-full object-contain drop-shadow-2xl"
  unoptimized
/>
                </div>
              </div>
            </div>
          )}
          <AlertDialogFooter className="sm:justify-center">
            <AlertDialogAction
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8"
              onClick={() => setShowPreviewDialog(false)}
            >
              Close Preview
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="sm:max-w-[425px]">
          <AlertDialogHeader>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <AlertDialogTitle className="text-2xl font-bold">
                Remove from Slider?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-base mt-3">
                Are you sure you want to remove <span className="font-semibold text-gray-900">{productToDelete?.title}</span> from the slider? This action cannot be undone.
              </AlertDialogDescription>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:justify-center gap-3 mt-4">
            <AlertDialogCancel 
              onClick={() => setDeleteDialogOpen(false)}
              className="px-6"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-red-600 hover:bg-red-700 text-white px-6"
            >
              Remove Product
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Feedback Dialog */}
      <AlertDialog open={feedbackDialogOpen} onOpenChange={setFeedbackDialogOpen}>
        <AlertDialogContent className="sm:max-w-[425px]">
          <AlertDialogHeader>
            <div className="flex flex-col items-center text-center">
              {getFeedbackIcon()}
              <AlertDialogTitle className="text-xl font-bold">
                {feedbackConfig.title}
              </AlertDialogTitle>
              <AlertDialogDescription className="text-base mt-2">
                {feedbackConfig.description}
              </AlertDialogDescription>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:justify-center">
            <AlertDialogAction
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8"
              onClick={() => setFeedbackDialogOpen(false)}
            >
              Got it
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}