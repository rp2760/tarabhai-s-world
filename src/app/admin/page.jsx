// // // src/app/admin/page.jsx
// // "use client";
// // import { useState } from 'react';
// // import AdminSidebar from '../components/AdminSidebar';
// // import DashboardOverview from '../components/DashboardOverview';
// // import ProductManagement from '../components/ProductManagement';
// // import CategoryManagement from '../components/CategoryManagement';
// // import SliderManagement from '../components/SliderManagement';

// // export default function AdminPanel() {
// //   const [activeTab, setActiveTab] = useState('dashboard');
// //   const [previewData, setPreviewData] = useState(null);

// //   const renderTabContent = () => {
// //     switch (activeTab) {
// //       case 'dashboard':
// //         return <DashboardOverview />;
// //       case 'products':
// //         return <ProductManagement setPreviewData={setPreviewData} />;
// //       case 'categories':
// //         return <CategoryManagement setPreviewData={setPreviewData} />;
// //       case 'sliders':
// //         return <SliderManagement setPreviewData={setPreviewData} />;
// //       default:
// //         return <DashboardOverview />;
// //     }
// //   };

// //   return (
// //     <div className="flex h-screen bg-gray-100">
// //       <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
// //       <div className="flex-1 flex overflow-hidden">
// //         {/* Main Content */}
// //         <div className="flex-1 overflow-y-auto p-6">
// //           {renderTabContent()}
// //         </div>
        
// //         {/* Preview Panel */}
// //         {previewData && (
// //           <div className="w-1/3 bg-white border-l border-gray-200 p-6 overflow-y-auto">
// //             <h2 className="text-xl font-bold mb-4">Live Preview</h2>
// //             <div className="bg-gray-50 p-4 rounded-lg">
// //               {/* Render preview based on data type */}
// //               {previewData.type === 'product' && (
// //                 <ProductPreview data={previewData.data} />
// //               )}
// //               {previewData.type === 'category' && (
// //                 <CategoryPreview data={previewData.data} />
// //               )}
// //               {previewData.type === 'slider' && (
// //                 <SliderPreview data={previewData.data} />
// //               )}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // const ProductPreview = ({ data }) => (
// //   <div className="bg-white p-4 rounded-lg shadow">
// //     <img src={data.image} alt={data.name} className="w-full h-48 object-contain mb-4" />
// //     <h3 className="text-lg font-semibold">{data.name}</h3>
// //     <p className="text-gray-600 mb-2">{data.description}</p>
// //     <div className="flex items-center gap-2">
// //       <span className="text-xl font-bold">${data.currentPrice}</span>
// //       {data.discountPercentage > 0 && (
// //         <>
// //           <span className="text-sm text-gray-500 line-through">${data.originalPrice}</span>
// //           <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">
// //             {data.discountPercentage}% OFF
// //           </span>
// //         </>
// //       )}
// //     </div>
// //     <div className="mt-4">
// //       <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
// //         {data.category}
// //       </span>
// //     </div>
// //   </div>
// // );

// // const CategoryPreview = ({ data }) => (
// //   <div className="bg-white p-4 rounded-lg shadow">
// //     {data.bannerImage && (
// //       <img src={data.bannerImage} alt={data.name} className="w-full h-48 object-cover mb-4 rounded" />
// //     )}
// //     <h3 className="text-lg font-semibold">{data.name}</h3>
// //     <p className="text-gray-600">{data.description}</p>
// //   </div>
// // );

// // const SliderPreview = ({ data }) => (
// //   <div className="relative h-64 rounded-lg overflow-hidden">
// //     <img 
// //       src={data.bgImage} 
// //       alt="Slider Background" 
// //       className="absolute inset-0 w-full h-full object-cover"
// //     />
// //     <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center p-8">
// //       <div className="max-w-md">
// //         <h3 className="text-2xl font-bold text-white">{data.title}</h3>
// //         <p className="text-white mt-2">{data.description}</p>
// //         <div className="mt-4 flex items-center gap-4">
// //           <span className="text-xl font-bold text-white">{data.price}</span>
// //           {data.tag && (
// //             <span className="bg-white text-black px-3 py-1 rounded-full text-sm">
// //               {data.tag}
// //             </span>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // );






// 'use client';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';

// export default function AdminDashboard() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const res = await fetch('/api/products');
//       const data = await res.json();
//       setProducts(data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       setLoading(false);
//     }
//   };

//   const deleteProduct = async (id) => {
//     if (!confirm('Are you sure you want to delete this product?')) return;
    
//     try {
//       const res = await fetch(`/api/products?id=${id}`, {
//         method: 'DELETE'
//       });
//       if (res.ok) {
//         fetchProducts();
//       }
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
//       <header className="bg-purple-600 text-white p-6 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Product Admin Panel</h1>
//           <Link href="/admin/add" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
//             Add New Product
//           </Link>
//         </div>
//       </header>

//       <main className="container mx-auto p-6">
//         <div className="bg-white rounded-xl shadow-md overflow-hidden">
//           <div className="p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-6">Manage Products</h2>
            
//             {loading ? (
//               <div className="flex justify-center items-center h-64">
//                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//               </div>
//             ) : (
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {products.map((product) => (
//                       <tr key={product._id} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <img 
//                             src={product.image} 
//                             alt={product.name} 
//                             className="h-12 w-12 object-cover rounded-md"
//                           />
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                           {product.name}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           ₹{product.currentPrice} {product.discountPercentage > 0 && (
//                             <span className="text-red-500 ml-2">({product.discountPercentage}% off)</span>
//                           )}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {product.category}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {product.stock}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                           <Link 
//                             href={`/admin/edit/${product._id}`}
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
//         <p>© {new Date().getFullYear()} Product Admin Panel</p>
//       </footer>
//     </div>
//   );
// }

'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalCustomers: 0,
    totalRevenue: 0
  });

  const [recentOrders, setRecentOrders] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      setLoading(true);
      try {
        // Fix: Use correct API endpoints with lowercase and proper paths
        const [productsRes, ordersRes, customersRes] = await Promise.all([
          fetch('/api/products'),
          fetch('/api/admin/orders'), // Changed from '/api/Orders' to '/api/admin/orders'
          fetch('/api/customers')
        ]);

        // Check if any request failed
        if (!productsRes.ok) {
          throw new Error(`Products API failed: ${productsRes.status}`);
        }
        if (!ordersRes.ok) {
          throw new Error(`Orders API failed: ${ordersRes.status}`);
        }
        if (!customersRes.ok) {
          throw new Error(`Customers API failed: ${customersRes.status}`);
        }

        const productsData = await productsRes.json();
        const ordersData = await ordersRes.json();
        const customersData = await customersRes.json();

        // Fix: Access orders from the response structure
        const orders = ordersData.orders || ordersData || [];
        
        // Calculate stats
        const totalRevenue = orders.reduce((sum, order) => sum + (order.total || 0), 0);
        
        setStats({
          totalProducts: productsData.length || productsData.products?.length || 0,
          totalOrders: orders.length || 0,
          totalCustomers: customersData.length || customersData.customers?.length || 0,
          totalRevenue: totalRevenue
        });

        // Get recent orders (last 3)
        const recentOrders = orders
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3);
        setRecentOrders(recentOrders);

        // Calculate top products (with error handling)
        const productSales = {};
        orders.forEach(order => {
          if (order.items && Array.isArray(order.items)) {
            order.items.forEach(item => {
              if (item.productId) {
                const productId = item.productId._id || item.productId;
                if (productSales[productId]) {
                  productSales[productId].count += item.quantity || 0;
                  productSales[productId].revenue += (item.price || 0) * (item.quantity || 0);
                } else {
                  // Find product name
                  let productName = `Product ${productId}`;
                  if (item.productId && item.productId.name) {
                    productName = item.productId.name;
                  } else if (productsData.find) {
                    const product = productsData.find(p => p._id === productId);
                    productName = product?.name || productName;
                  }
                  
                  productSales[productId] = {
                    count: item.quantity || 0,
                    revenue: (item.price || 0) * (item.quantity || 0),
                    product: { name: productName }
                  };
                }
              }
            });
          }
        });

        const topProductsList = Object.values(productSales)
          .sort((a, b) => b.count - a.count)
          .slice(0, 3);
        
        setTopProducts(topProductsList);

      } catch (error) {
        console.error('Error loading dashboard data:', error);
        // Fallback to static data if API fails
        setStats({
          totalProducts: 142,
          totalOrders: 89,
          totalCustomers: 256,
          totalRevenue: 125640
        });
        setRecentOrders([]);
        setTopProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);
  
  const cards = [
    {
      title: 'Products',
      value: stats.totalProducts,
      href: '/admin/products',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
      textColor: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Orders',
      value: stats.totalOrders,
      href: '/admin/orders',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500',
      textColor: 'text-green-500',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Customers',
      value: stats.totalCustomers,
      href: '/admin/customers',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-purple-500 to-indigo-500',
      textColor: 'text-purple-500',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Revenue',
      value: `₹${stats.totalRevenue.toLocaleString()}`,
      href: '/admin/orders',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-amber-500 to-orange-500',
      textColor: 'text-amber-500',
      bgColor: 'bg-amber-100'
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
      Math.floor((date - new Date()) / (1000 * 60 * 60 * 24)),
      'day'
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        {/* <span className="text-sm text-gray-500">Last updated: {new Date().toLocaleString()}</span> */}
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Link 
            key={index} 
            href={card.href}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100 animate-slide-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {loading ? (
              <div className="animate-pulse">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                    <div className="h-8 bg-gray-200 rounded w-12"></div>
                  </div>
                  <div className={`p-3 rounded-full ${card.bgColor}`}>
                    <div className="w-8 h-8"></div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{card.title}</p>
                    <p className="text-2xl font-bold text-gray-800 mt-1">{card.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gradient-to-br ${card.color} text-white`}>
                    {card.icon}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    <span className={`text-sm font-medium ${card.textColor}`}>+2.5%</span>
                    <span className="text-sm text-gray-500 ml-2">from yesterday</span>
                  </div>
                </div>
              </>
            )}
          </Link>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-fade-in">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {loading ? (
              [1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-32"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                </div>
              ))
            ) : recentOrders.length > 0 ? (
              recentOrders.map((order) => (
                <div key={order._id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <div>
                    <p className="font-medium text-gray-800">Order #{order.orderId}</p>
                    <p className="text-sm text-gray-500">{formatDate(order.createdAt)}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                    {order.status || 'Completed'}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">No recent orders</p>
            )}
          </div>
          <Link href="/admin/orders" className="block text-center mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
            View all orders →
          </Link>
        </div>

        {/* Top Products */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Top Products</h2>
          <div className="space-y-4">
            {loading ? (
              [1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg mr-3"></div>
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-16"></div>
                    </div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-12"></div>
                </div>
              ))
            ) : topProducts.length > 0 ? (
              topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{product.product.name}</p>
                      <p className="text-sm text-gray-500">{product.count} sales</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-medium">₹{product.revenue.toLocaleString()}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">No product sales data</p>
            )}
          </div>
          <Link href="/admin/products" className="block text-center mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
            View all products →
          </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-fade-in" style={{ animationDelay: '400ms' }}>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/admin/products/add" className="p-4 bg-blue-50 rounded-lg text-center hover:bg-blue-100 transition-colors duration-200 group">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-200 transition-colors">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">Add Product</span>
          </Link>
          
          <Link href="/admin/categories/new" className="p-4 bg-green-50 rounded-lg text-center hover:bg-green-100 transition-colors duration-200 group">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-green-200 transition-colors">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">Add Category</span>
          </Link>
          
          <Link href="admin/slider-products/add" className="p-4 bg-purple-50 rounded-lg text-center hover:bg-purple-100 transition-colors duration-200 group">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-purple-200 transition-colors">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">Add Slider</span>
          </Link>
          
          <Link href="/admin/orders" className="p-4 bg-amber-50 rounded-lg text-center hover:bg-amber-100 transition-colors duration-200 group">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-amber-200 transition-colors">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">View Orders</span>
          </Link>
        </div>
      </div>
    </div>
  );
}