import React from "react";
import {assetsImages} from "../assets/Lead Generation Landing page (Images)/assetsImages"

const Navbar = () => {
  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between align-center">
        
        <div className="">
         <img src={assetsImages.logo} alt="" className="h-10"/>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded font-medium transition"
          >
            Contact
          </a>
        </div>
        </nav>

      
      </div>
    </header>
  );
};

export default Navbar;
