
// function Header() {
//   return (
//     <header className="flex rounded-full px-2 w-max items-center">
//       {/* Kept the subtle hover scale for a premium feel */}
//       <div className="w-12 sm:w-10 md:w-12 cursor-pointer hover:scale-105 transition-transform duration-300">
//         <svg
//           viewBox="0 0 100 100"
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-full h-auto"
//         >
//           <defs>
//             {/* The exact gradient from your favicon link */}
//             <linearGradient id="faviconGrad" x1="0" y1="0" x2="1" y2="1">
//               <stop offset="0%" stopColor="#ff00cc" /> {/* Hot Pink */}
//               <stop offset="100%" stopColor="#3333ff" /> {/* Bright Blue */}
//             </linearGradient>
//           </defs>

//           {/* The exact circle shape from your favicon */}
//           <circle cx="50" cy="50" r="40" fill="url(#faviconGrad)" />
//         </svg>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React from "react";

function Header() {
  return (
    <header className="flex rounded-full px-2 w-max items-center">
      <div className="w-14 sm:w-12 md:w-14 cursor-pointer group">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-105"
        >
          <defs>
            <linearGradient id="bloodMoonGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff0055" /> {/* Hot Neon Pink/Red */}
              <stop offset="100%" stopColor="#4a0010" /> {/* Deep Dark Crimson */}
            </linearGradient>
          </defs>

          {/* The Black Background Circle has been completely removed! */}

          {/* The Full Moon */}
          <circle
            cx="50"
            cy="50"
            r="32"
            fill="url(#bloodMoonGrad)"
            // The glow will now project directly onto your website's background
            className="transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(255,0,85,0.6)]"
          />

          {/* The Stars */}
          {/* They now float freely in the transparent space around the moon */}
          <g className="opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
            <circle cx="18" cy="25" r="1.5" fill="#ffffff" className="animate-pulse" style={{ animationDuration: '2s' }} />
            <circle cx="82" cy="22" r="2" fill="#ffffff" className="animate-pulse" style={{ animationDuration: '3s' }} />
            <circle cx="15" cy="65" r="2" fill="#ffffff" className="animate-pulse" style={{ animationDuration: '1.5s' }} />
            <circle cx="85" cy="70" r="1.5" fill="#ffffff" className="animate-pulse" style={{ animationDuration: '2.5s' }} />
            <circle cx="50" cy="8" r="1" fill="#ffffff" className="animate-pulse" style={{ animationDuration: '4s' }} />
          </g>
          
        </svg>
      </div>
    </header>
  );
}

export default Header;