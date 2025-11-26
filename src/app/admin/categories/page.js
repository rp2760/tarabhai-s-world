// 'use client';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { toast } from 'react-hot-toast';

// export default function CategoryDashboard() {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   const fetchCategories = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch('/api/categories');
      
//       if (!res.ok) {
//         throw new Error('Failed to fetch categories');
//       }
      
//       const data = await res.json();
//       setCategories(data);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//       toast.error(error.message || 'Failed to fetch categories');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteCategory = async (categoryId) => {
//     if (!confirm('Are you sure you want to delete this category? This action cannot be undone.')) return;
    
//     try {
//       const res = await fetch(`/api/categories/${categoryId}`, {
//         method: 'DELETE'
//       });
      
//       if (!res.ok) {
//         const data = await res.json();
//         throw new Error(data.error || 'Failed to delete category');
//       }
      
//       toast.success('Category deleted successfully');
//       fetchCategories(); // Refresh the list
//     } catch (error) {
//       console.error('Error deleting category:', error);
//       toast.error(error.message || 'Failed to delete category');
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="bg-purple-600 text-white p-6 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Category Management</h1>
//           <Link 
//             href="/admin/categories/add" 
//             className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
//           >
//             Add New Category
//           </Link>
//         </div>
//       </header>

//       <main className="container mx-auto p-6">
//         <div className="bg-white rounded-xl shadow-md overflow-hidden">
//           <div className="p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-6">All Categories</h2>
            
//             {loading ? (
//               <div className="flex justify-center items-center h-64">
//                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//               </div>
//             ) : (
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {categories.length > 0 ? (
//                       categories.map((category) => (
//                         <tr key={category._id} className="hover:bg-gray-50">
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                             {category.categoryId}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
//                             {category.name}
//                             {category.description && (
//                               <p className="text-xs text-gray-500 mt-1">{category.description}</p>
//                             )}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <img 
//                               src={category.bannerImage} 
//                               alt={category.name}
//                               className="h-10 w-10 rounded-full object-cover"
//                               onError={(e) => {
//                                 e.target.src = 'https://via.placeholder.com/100?text=Category';
//                               }}
//                             />
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                             <Link 
//                               href={`/admin/categories/edit/${category._id}`}
//                               className="text-blue-600 hover:text-blue-900 mr-4"
//                             >
//                               Edit
//                             </Link>
//                             <button
//                               onClick={() => deleteCategory(category._id)}
//                               className="text-red-600 hover:text-red-900"
//                             >
//                               Delete
//                             </button>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
//                           No categories found. Add your first category!
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }














'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
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

export default function CategoryDashboard() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Alert dialog states
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);
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

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/categories');
      
      if (!res.ok) {
        throw new Error('Failed to fetch categories');
      }
      
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      showFeedback(
        "Error Loading Categories",
        error.message || "Failed to fetch categories. Please try again.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  // Open delete confirmation dialog
  const handleDeleteClick = (category) => {
    setCategoryToDelete(category);
    setDeleteDialogOpen(true);
  };

  // Confirm delete action
  const confirmDelete = async () => {
    if (!categoryToDelete) return;
    
    try {
      const res = await fetch(`/api/categories/${categoryToDelete._id}`, {
        method: 'DELETE'
      });
      
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to delete category');
      }
      
      setDeleteDialogOpen(false);
      showFeedback(
        "Category Deleted",
        `${categoryToDelete.name} has been successfully deleted.`,
        "success"
      );
      fetchCategories(); // Refresh the list
      setCategoryToDelete(null);
    } catch (error) {
      console.error('Error deleting category:', error);
      setDeleteDialogOpen(false);
      showFeedback(
        "Delete Failed",
        error.message || "Failed to delete category. Please try again.",
        "error"
      );
    }
  };

  // Cancel delete action
  const cancelDelete = () => {
    setDeleteDialogOpen(false);
    setCategoryToDelete(null);
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

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-purple-600 text-white p-6 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Category Management</h1>
            <Link 
              href="/admin/categories/add" 
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Add New Category
            </Link>
          </div>
        </header>

        <main className="container mx-auto p-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">All Categories</h2>
              
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                </div>
              ) : categories.length === 0 ? (
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
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No categories</h3>
                  <p className="mt-1 text-sm text-gray-500">Get started by creating your first category.</p>
                  <div className="mt-6">
                    <Link
                      href="/admin/categories/add"
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                      Add New Category
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {categories.map((category) => (
                        <tr key={category._id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <img 
                              src={category.bannerImage} 
                              alt={category.name}
                              className="h-12 w-12 rounded-lg object-cover shadow-sm ring-2 ring-gray-100"
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/100?text=Category';
                              }}
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                              {category.categoryId}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{category.name}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500 max-w-xs truncate">
                              {category.description || 'No description'}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                            <Link 
                              href={`/admin/categories/edit/${category._id}`}
                              className="text-blue-600 hover:text-blue-900 inline-flex items-center gap-1 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDeleteClick(category)}
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
                Delete Category?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-base mt-2">
                Are you sure you want to delete <span className="font-semibold text-gray-900">{categoryToDelete?.name}</span>? This action cannot be undone and will affect all products in this category.
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
              Delete Category
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














// 'use client';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import toast from 'react-hot-toast';

// export default function CategoryAdminPanel() {
//   const [categories, setCategories] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     bannerImage: ''
//   });
//   const [editingId, setEditingId] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Fetch categories
//   const fetchCategories = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch('/api/categories');
//       if (!res.ok) throw new Error('Failed to load categories');
//       const data = await res.json();
//       setCategories(data);
//     } catch (err) {
//       toast.error(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Add / Update category
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.bannerImage.startsWith('http')) {
//       toast.error('Please paste a valid image URL');
//       return;
//     }

//     try {
//       setLoading(true);
//       const method = editingId ? 'PUT' : 'POST';
//       const url = editingId
//         ? `/api/categories/${editingId}`
//         : `/api/categories`;

//       const res = await fetch(url, {
//         method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       if (!res.ok) throw new Error('Error saving category');

//       toast.success(`Category ${editingId ? 'updated' : 'added'} successfully`);
//       setFormData({ name: '', description: '', bannerImage: '' });
//       setEditingId(null);
//       fetchCategories();
//     } catch (err) {
//       toast.error(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Edit category
//   const handleEdit = (cat) => {
//     setFormData({
//       name: cat.name,
//       description: cat.description || '',
//       bannerImage: cat.bannerImage || ''
//     });
//     setEditingId(cat._id);
//   };

//   // Delete category
//   const handleDelete = async (id) => {
//     if (!confirm('Delete this category?')) return;
//     try {
//       const res = await fetch(`/api/categories/${id}`, { method: 'DELETE' });
//       if (!res.ok) throw new Error('Error deleting category');
//       toast.success('Category deleted');
//       fetchCategories();
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Manage Categories</h2>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded shadow">
//         <input
//           type="text"
//           placeholder="Category Name"
//           className="border p-2 w-full mb-2"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           required
//         />
//         <textarea
//           placeholder="Description"
//           className="border p-2 w-full mb-2"
//           value={formData.description}
//           onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Paste image address (https://example.com/img.jpg)"
//           className="border p-2 w-full mb-2"
//           value={formData.bannerImage}
//           onChange={(e) => setFormData({ ...formData, bannerImage: e.target.value })}
//           required
//         />
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//           disabled={loading}
//         >
//           {editingId ? 'Update Category' : 'Add Category'}
//         </button>
//       </form>

//       {/* Table */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <table className="w-full bg-white shadow rounded">
//           <thead>
//             <tr>
//               <th className="p-2 border">Name</th>
//               <th className="p-2 border">Description</th>
//               <th className="p-2 border">Banner</th>
//               <th className="p-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {categories.map((cat) => (
//               <tr key={cat._id}>
//                 <td className="p-2 border">{cat.name}</td>
//                 <td className="p-2 border">{cat.description}</td>
//                 <td className="p-2 border">
//                   {cat.bannerImage ? (
//                     <Image
//                       src={cat.bannerImage}
//                       alt={cat.name}
//                       width={96} // 24 * 4
//                       height={64} // 16 * 4
//                       className="object-cover rounded"
//                       unoptimized
//                     />
//                   ) : (
//                     'No image'
//                   )}
//                 </td>
//                 <td className="p-2 border">
//                   <button
//                     onClick={() => handleEdit(cat)}
//                     className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(cat._id)}
//                     className="bg-red-500 text-white px-2 py-1 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {categories.length === 0 && (
//               <tr>
//                 <td colSpan="4" className="p-4 text-center">
//                   No categories found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }
