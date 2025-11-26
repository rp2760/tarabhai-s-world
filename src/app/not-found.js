export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-300 to-gray-400">
      
      {/* Big 404 Text */}
      <h1 className="text-9xl font-extrabold drop-shadow-lg animate-bounce">
        404
      </h1>

      {/* Subheading */}
      <h2 className="text-3xl font-semibold mt-4">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="mt-3 text-lg text-white/90 text-center max-w-md">
        "The page you’re looking for doesn’t exist or may have moved.
        But don’t worry — let's get you back to shopping!"
      </p>

      {/* Illustration Circle */}
      <div className="mt-10">
        <div className="w-52 h-52 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center shadow-2xl">
          <span className="text-6xl">🛒</span>
        </div>
      </div>

      {/* Back Button */}
      <a
        href="/"
        className="mt-10 bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all hover:scale-105"
      >
        Go Back to Home
      </a>
    </div>
  );
}
