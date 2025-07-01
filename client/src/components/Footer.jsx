import React from "react";
import NewsletterForm from "./NewsletterForm";
import { assetsIcons } from "../assets/Lead Generation Landing page (Icons)/assetsIcons";

const Footer = () => {
  return (
    <footer className="mt-5 text-white">
      {/* 🔹 Top CTA Section (Slimmed Down) */}
      <div
        className="relative bg-center bg-cover text-white py-10 px-4 text-center "
    
      >
        <div className="absolute inset-0 footer-bg " />
        <div className="relative z-10 max-w-3xl mx-auto ">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Learn more about our listing process, as well as our staging and design work.
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition">
            Learn More
          </button>
        </div>
      </div>

      {/* 🔹 Middle Footer – Nav + Newsletter */}
      <div className="bg-blue-600 py-2 px-4 md:px-8 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 font-medium">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#testimonials" className="hover:underline">Testimonials</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>

          {/* Newsletter Form (compact inline) */}
          <div className="w-full md:w-auto">
            <NewsletterForm compact />
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Footer – Copy + Icons */}
      <div className="bg-gray-900 py-3 px-6 text-xs flex flex-col md:flex-row justify-between items-center">
        <p>&copy; All Rights Reserved 2025</p>
        <div className="flex justify-center space-x-3 mt-2 md:mt-0 text-center">
          <a href="#"><span className="hover:text-blue-400 mt-4"><img className="mt-1" src={assetsIcons.Group1} alt="" /></span></a>
          <a href="#"><span className="hover:text-blue-400"><img src={assetsIcons.Linkedin} alt="" /></span></a>
          <a href="#"><span className="hover:text-blue-400"><img src={assetsIcons.Frame} alt="" /></span></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
