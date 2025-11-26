// 'use client';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Error } from 'mongoose';

// export default function AddCategory() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     categoryId: '',
//     name: '',
//     description: '',
//     bannerImage: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     // Clear error when user types
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.categoryId.trim()) newErrors.categoryId = 'Category ID is required';
//     if (!formData.name.trim()) newErrors.name = 'Category name is required';
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
    
//     setIsSubmitting(true);
    
//     try {
//       const res = await fetch('/api/categories', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
      
//       if (!res.ok) {
//         if (data.conflict === 'categoryId') {
//           setErrors(prev => ({ ...prev, categoryId: 'This ID is already in use' }));
//         } else if (data.conflict === 'name') {
//           setErrors(prev => ({ ...prev, name: 'This name is already in use' }));
//         }
//         throw new Error(data.error || 'Failed to add category');
//       }

//       toast.success('Category added successfully!');
//       router.push('/admin/categories');
//       router.refresh(); // Refresh to show the new category
//     } catch (error) {
//       console.error('Error adding category:', error);
//       toast.error(error.message || 'Failed to add category');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="bg-purple-600 text-white p-6 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Add New Category</h1>
//           <Link href="/admin/categories" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
//             Back to Categories
//           </Link>
//         </div>
//       </header>

//       <main className="container mx-auto p-6">
//         <div className="bg-white rounded-xl shadow-md p-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-6">Category Details</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 gap-6">
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoryId">
//                   Category ID *
//                 </label>
//                 <input
//                   type="text"
//                   id="categoryId"
//                   name="categoryId"
//                   value={formData.categoryId}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border ${errors.categoryId ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
//                   required
//                   pattern="[a-zA-Z0-9-]+"
//                   title="Only alphanumeric characters and hyphens are allowed"
//                 />
//                 {errors.categoryId && <p className="text-red-500 text-xs mt-1">{errors.categoryId}</p>}
//               </div>

//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                   Category Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
//                   required
//                 />
//                 {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//               </div>

//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
//                   Description
//                 </label>
//                 <textarea
//                   id="description"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   rows="3"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 ></textarea>
//               </div>

//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bannerImage">
//                   Banner Image URL
//                 </label>
//                 <input
//                   type="url"
//                   id="bannerImage"
//                   name="bannerImage"
//                   value={formData.bannerImage}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   placeholder="https://example.com/image.jpg"
//                 />
//                 {formData.bannerImage && (
//                   <div className="mt-2">
//                     <img 
//                       src={formData.bannerImage} 
//                       alt="Preview" 
//                       className="h-20 object-cover rounded"
//                       onError={(e) => {
//                         e.target.src = '/default-category.jpg';
//                       }}
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="mt-6">
//               <button
//                 type="submit"
//                 className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition disabled:opacity-50"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Adding...' : 'Add Category'}
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
import { toast } from 'react-hot-toast';
import Image from 'next/image';

export default function AddCategory() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    categoryId: '',
    name: '',
    description: '',
    bannerImage: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.categoryId.trim()) newErrors.categoryId = 'Category ID is required';
    if (!formData.name.trim()) newErrors.name = 'Category name is required';
    if (formData.categoryId.trim() && !/^[a-zA-Z0-9-]+$/.test(formData.categoryId)) {
      newErrors.categoryId = 'Only letters, numbers, and hyphens are allowed';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.conflict) {
          setErrors(prev => ({ ...prev, [data.conflict]: data.error }));
        } else {
          setErrors(prev => ({ ...prev, form: data.error || 'Error' }));
        }
        toast.error(data.error || 'Something went wrong');
        return;
      }

      toast.success('Category added successfully');
      router.push('/admin/categories');
      router.refresh();
    } catch (error) {
      toast.error(error.message);
      setErrors(prev => ({ ...prev, form: error.message }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-purple-600 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Add New Category</h1>
          <Link href="/admin/categories" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
            Back to Categories
          </Link>
        </div>
      </header>
      <main className="container mx-auto p-6 max-w-3xl">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Category Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoryId">
                Category ID *
              </label>
              <input
                type="text"
                id="categoryId"
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${errors.categoryId ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="e.g., electronics-fashion"
              />
              {errors.categoryId && (
                <p className="text-red-500 text-xs mt-1">{errors.categoryId}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                Only letters, numbers, and hyphens are allowed. This cannot be changed later.
              </p>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Category Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="e.g., Electronics"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Brief description of the category..."
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bannerImage">
                Banner Image URL
              </label>
              <input
                type="url"
                id="bannerImage"
                name="bannerImage"
                value={formData.bannerImage}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="mt-2">
                {formData.bannerImage &&
                  <Image
                    height={128}
                    width={384}
                    src={formData.bannerImage}
                    alt="Preview"
                    unoptimized
                    className="h-32 w-full object-cover rounded"
                  />
                }
              </div>
            </div>
            {errors.form && (
              <p className="text-red-500 text-sm mb-2">{errors.form}</p>
            )}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Adding...
                  </span>
                ) : 'Add Category'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
