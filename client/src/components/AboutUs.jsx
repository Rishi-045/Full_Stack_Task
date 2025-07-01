import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 relative">
      <div className="max-w-3xl mb-2 mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-12">About Us</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-12">
          Flipr’s team of experts believes in delivering excellent customer service and is committed
          to working in a clean and efficient manner. We provide quality services to build relationships
          with clients and, more importantly, maintain those relationships by communicating effectively.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition">
          Learn More
        </button>
      </div>

      {/* Optional Background Shape */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-blue-100 rounded-full opacity-30 -z-10" />
    </section>
  );
};

export default AboutUs;
