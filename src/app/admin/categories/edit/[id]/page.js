// 'use client';
// import { useState, useEffect } from 'react';
// import { useRouter, useParams } from 'next/navigation';
// import Link from 'next/link';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function EditCategory() {
//   const router = useRouter();
//   const params = useParams();
//   const categoryId = params.id;
  
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     bannerImage: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     const fetchCategory = async () => {
//       try {
//         const res = await fetch(`/api/categories/${categoryId}`);
//         if (!res.ok) throw new Error('Failed to fetch category');
        
//         const data = await res.json();
//         setFormData({
//           name: data.name,
//           description: data.description || '',
//           bannerImage: data.bannerImage || ''
//         });
//       } catch (error) {
//         console.error('Error fetching category:', error);
//         toast.error(error.message || 'Failed to load category');
//         router.push('/admin/categories');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategory();
//   }, [categoryId, router]);

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
//     if (!formData.name.trim()) newErrors.name = 'Category name is required';
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
    
//     setIsSubmitting(true);
    
//     try {
//       const res = await fetch(`/api/categories/${categoryId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
      
//       if (!res.ok) {
//         if (data.conflict === 'name') {
//           setErrors(prev => ({ ...prev, name: 'This name is already in use' }));
//         }
//         throw new Error(data.error || 'Failed to update category');
//       }

//       toast.success('Category updated successfully!');
//       router.push('/admin/categories');
//       router.refresh(); // Refresh to show the updated category
//     } catch (error) {
//       console.error('Error updating category:', error);
//       toast.error(error.message || 'Failed to update category');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="bg-purple-600 text-white p-6 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Edit Category</h1>
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
//                 {isSubmitting ? 'Updating...' : 'Update Category'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// }

'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import Image from 'next/image';

export default function EditCategory() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    bannerImage: 'https://via.placeholder.com/300x200?text=Category'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/categories/${id}`);
        
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || 'Failed to fetch category');
        }
        
        const data = await res.json();
        if (!data) {
          throw new Error('Category not found');
        }

        setFormData({
          name: data.name,
          description: data.description || '',
          bannerImage: data.bannerImage || 'https://via.placeholder.com/300x200?text=Category'
        });
      } catch (error) {
        console.error('Error fetching category:', error);
        toast.error(error.message);
        router.push('/admin/categories');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCategory();
    }
  }, [id, router]);

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
    if (!formData.name.trim()) newErrors.name = 'Category name is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const res = await fetch(`/api/categories/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      if (!res.ok) {
        if (data.conflict === 'name') {
          throw new Error('This category name is already in use');
        }
        throw new Error(data.error || 'Failed to update category');
      }

      toast.success('Category updated successfully');
      router.push('/admin/categories');
      router.refresh();
    } catch (error) {
      console.error('Error updating category:', error);
      toast.error(error.message);
      
      if (error.message.includes('name')) {
        setErrors(prev => ({ ...prev, name: error.message }));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-purple-600 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Edit Category</h1>
          <Link href="/admin/categories" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
            Back to Categories
          </Link>
        </div>
      </header>

      <main className="container mx-auto p-6 max-w-3xl">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Edit Category Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
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
                <Image
                  src={formData.bannerImage} 
                  height={4}
                  width={4}
                  alt="Preview" 
                  unoptimized
                  className="h-32 w-full object-cover rounded"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=Category';
                  }}
                />
              </div>
            </div>

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
                    Updating...
                  </span>
                ) : 'Update Category'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}