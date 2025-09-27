"use client";

import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-gray-500 flex items-center gap-2">
            Built with Next.js, Three.js & 
            <Heart className="text-accent" size={16} fill="currentColor" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;