

// import React from "react";
// import Link from "next/link";

// const NotFoundPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br flex items-center justify-center px-6 overflow-hidden relative">
      
//       {/* Background Glow */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
//       <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

//       <div className="relative z-10 text-center max-w-2xl mx-auto">
        
//         {/* 404 */}
//         <div className="relative">
//           <h1 className="text-[120px] sm:text-[180px] md:text-[220px] font-black leading-none tracking-tighter bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
//             404
//           </h1>

//           {/* Floating Circle */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 border border-white/10 rounded-full animate-ping" />
//         </div>

//         {/* Content */}
//         <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
//           Oops! Page Not Found
//         </h2>

//         <p className="text-gray-400 mt-4 max-w-md mx-auto text-base sm:text-lg leading-relaxed">
//           The page you're looking for doesn't exist or may have been moved.
//           Don't worry, let's get you back to somewhere useful.
//         </p>

//         {/* Buttons */}
//      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
//   <Link
//     href="/"
//     className="px-7 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
//   >
//     Back Home
//   </Link>
// </div>

//         {/* Small Message */}
//         <p className="text-gray-600 text-sm mt-10">
//           Error Code: <span className="text-gray-400">404</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default NotFoundPage;



import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-6 overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">

        {/* 404 */}
        <div className="relative">
          <h1 className="text-[120px] sm:text-[180px] md:text-[220px] font-black leading-none tracking-tighter bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
            404
          </h1>

          {/* Floating Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 border border-white/10 rounded-full animate-ping" />
        </div>

        {/* Content */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-400 mt-4 max-w-md mx-auto text-base sm:text-lg leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
          Don't worry, let's get you back to somewhere useful.
        </p>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="/"
            className="inline-block px-7 py-3 rounded-xl border border-white/10 bg-blue-600 hover:bg-blue-500 text-white font-semibold backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
          >
            ← Back Home
          </Link>
        </div>

        {/* Small Message */}
        <p className="text-gray-600 text-sm mt-10">
          Error Code: <span className="text-gray-400">404</span>
        </p>

      </div>
    </div>
  );
};

export default NotFoundPage;