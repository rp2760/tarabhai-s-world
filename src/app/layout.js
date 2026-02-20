import { CartProvider } from '../context/CartContext';
import { ClerkProvider } from '@clerk/nextjs';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ComparisonProvider } from '../context/ComparisonContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🌍 GLOBAL DEFAULT SEO (applies to all routes)
export const metadata = {
  metadataBase: new URL("https://tarabhai-s-world-puce.vercel.app/"), // change domain
  title: {
    default: "Dealport - Best E-commerce Store",
    template: "%s | Dealport"
  },
  description: "Dealport is a modern e-commerce platform offering the best deals on electronics, fashion, and more.",
  keywords: [
    "tarabhai nu e-cart",
    "ecommerce",
    "online shopping",
    "dealport store",
    "buy electronics online",
    "cheap products india",
    "best e-commerce website"
  ],
  authors: [{ name: "Tarabhai" }],
  creator: "Tarabhai",
  publisher: "Dealport",

  openGraph: {
    title: "Dealport E-commerce",
    description: "Best deals on products with fast delivery and secure checkout.",
    url: "https://tarabhai-s-world-puce.vercel.app/",
    siteName: "Dealport",
    images: [
      {
        url: "/logo.jpg", // place inside /public
        width: 1200,
        height: 630,
        alt: "Dealport E-commerce"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Dealport E-commerce",
    description: "Best deals on products with fast delivery and secure checkout.",
    images: ["/logo.jpg"]
  },

  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ComparisonProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </ComparisonProvider>
          <ToastContainer position="bottom-right" autoClose={5000} />
        </body>
      </html>
    </ClerkProvider>
  );
}
