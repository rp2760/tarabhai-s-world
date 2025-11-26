"use client";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-300 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* 🛍️ Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-purple-700">YourLogo</h2>
          <p className="mt-3 text-gray-600">
            Discover the best deals on fashion, electronics, and more — your one-stop online shop.
          </p>
          <div className="flex space-x-4 mt-5">
            <a href="#" className="hover:scale-110 transition-transform duration-300 text-gray-500 hover:text-purple-600"><Facebook size={20} /></a>
            <a href="#" className="hover:scale-110 transition-transform duration-300 text-gray-500 hover:text-purple-600"><Twitter size={20} /></a>
            <a href="https://www.instagram.com/rp.17.in" target="_blank" className="hover:scale-110 transition-transform duration-300 text-gray-500 hover:text-purple-600"><Instagram size={20} /></a>
            <a href="https://www.youtube.com" target="_blank" className="hover:scale-110 transition-transform duration-300 text-gray-500 hover:text-purple-600"><Youtube size={20} /></a>
          </div>
        </motion.div>

        {/* 🧭 Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="/" className="hover:text-purple-600 transition-colors">Home</Link></li>
            <li><Link href="/shop" className="hover:text-purple-600 transition-colors">Shop</Link></li>
            <li><Link href="/about" className="hover:text-purple-600 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-purple-600 transition-colors">Contact</Link></li>
          </ul>
        </motion.div>

        {/* 📦 Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Top Categories</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="/?category=fashion" className="hover:text-purple-600 transition-colors">Fashion</Link></li>
            <li><Link href="/?category=electronics" className="hover:text-purple-600 transition-colors">Electronics</Link></li>
            <li><Link href="/?category=beauty" className="hover:text-purple-600 transition-colors">Beauty & Care</Link></li>
            <li><Link href="/?category=home" className="hover:text-purple-600 transition-colors">Home & Living</Link></li>
          </ul>
        </motion.div>

        {/* 📞 Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Us</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center space-x-2">
              <Mail size={18} className="text-purple-600" />
              {/* <span>support@yourcart.com</span> */}
            <span><Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSMVVvfHtfknpLFLZzvDRzmFGbHSsxMGTvFVmGNBcwtmbNkstpXTDCcZzsjKSWtZbdtzPcXv" className="hover:text-purple-600 transition-colors" target="blank">click for mail</Link></span>

            </li>
            <li className="flex items-center space-x-2">
              <Phone size={18} className="text-purple-600" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin size={18} className="text-purple-600" />
              <span>Ahmedabad, Gujarat, India</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* 🔻 Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-white border-t border-gray-200 py-4"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm px-6">
          <p>© {new Date().getFullYear()} <span className="font-medium text-purple-600">YourCart</span>. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/privacy" className="hover:text-purple-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-purple-600 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
