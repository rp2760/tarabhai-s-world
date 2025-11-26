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

export default function SliderProductDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Alert dialog states
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [feedbackDialogOpen, setFeedbackDialogOpen] = useState(false);
  const [feedbackConfig, setFeedbackConfig] = useState({
    title: "",
    description: "",
    type: "info", // 'success', 'error', 'info'
  });

  // Show feedback alert
  const showFeedback = (title, description, type = "info") => {
    setFeedbackConfig({ title, description, type });
    setFeedbackDialogOpen(true);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/slider-products');
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching slider products:', error);
      showFeedback(
        "Error Loading Products",
        "Failed to fetch slider products. Please try again.",
        "error"
      );
      setLoading(false);
    }
  };

  // Open delete confirmation dialog
  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    setDeleteDialogOpen(true);
  };

  // Confirm delete action
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

  // Cancel delete action
  const cancelDelete = () => {
    setDeleteDialogOpen(false);
    setProductToDelete(null);
  };

  // Get icon based on feedback type
  const getFeedbackIcon = () => {
    switch (feedbackConfig.type) {
      case "success":
        return (
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        );
      case "error":
        return (
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        );
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-purple-600 text-white p-6 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Slider Products Management</h1>
            <Link 
              href="/admin/slider-products/add" 
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Add New Slider Product
            </Link>
          </div>
        </header>

        <main className="container mx-auto p-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">All Slider Products</h2>
                {products.length > 0 && (
                  <span className="px-3 py-1 text-sm font-semibold text-purple-800 bg-purple-100 rounded-full">
                    {products.length} {products.length === 1 ? 'Product' : 'Products'}
                  </span>
                )}
              </div>
              
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                </div>
              ) : products.length === 0 ? (
                <div className="text-center py-12">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
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
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No slider products</h3>
                  <p className="mt-1 text-sm text-gray-500">Get started by adding your first slider product to showcase on the homepage.</p>
                  <div className="mt-6">
                    <Link
                      href="/admin/slider-products/add"
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                      Add Slider Product
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preview</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title & Slogan</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tag</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {products.map((product) => (
                        <tr key={product._id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex-shrink-0 h-16 w-16">
                              <img 
                                src={product.productImage} 
                                alt={product.title} 
                                className="h-16 w-16 object-cover rounded-lg shadow-sm ring-2 ring-gray-100"
                              />
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{product.title}</div>
                            <div className="text-sm text-gray-500 mt-1">{product.slogan}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-semibold text-gray-900">
                              {product.price}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {product.tag ? (
                              <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                {product.tag}
                              </span>
                            ) : (
                              <span className="text-sm text-gray-400">No tag</span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                            <Link 
                              href={`/admin/slider-products/edit/${product._id}`}
                              className="text-blue-600 hover:text-blue-900 inline-flex items-center gap-1 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDeleteClick(product)}
                              className="text-red-600 hover:text-red-900 inline-flex items-center gap-1 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </main>

        <footer className="bg-purple-600 text-white p-4 text-center mt-8">
          <p>© {new Date().getFullYear()} Slider Products Admin Panel</p>
        </footer>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="sm:max-w-[425px]">
          <AlertDialogHeader>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <AlertDialogTitle className="text-xl font-bold">
                Remove from Slider?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-base mt-2">
                Are you sure you want to remove <span className="font-semibold text-gray-900">{productToDelete?.title}</span> from the slider? This action cannot be undone.
              </AlertDialogDescription>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:justify-center gap-2">
            <AlertDialogCancel 
              onClick={cancelDelete}
              className="px-6"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-red-600 hover:bg-red-700 text-white px-6"
            >
              Remove
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