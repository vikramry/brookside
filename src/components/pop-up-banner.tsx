"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link"; 
import { X } from 'lucide-react';


const PopUpBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">


      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none lg:w-[60vw]"> {/* Updated for large screens */}

      <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={30} />
        </button>
      <Link href="/contact">
        <img
          src="/assets/images/brookside-popup-banner.jpeg"
          alt="Brookside popup banner"
          className="w-full h-[300px] sm:h-[200px] md:h-[500px] lg:h-[600px] rounded-lg" // Unchanged
        />
</Link>
      </div>
      
      
    </div>
  );
};

export default PopUpBanner;
