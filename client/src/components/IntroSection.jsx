import React from "react";

import { assetsImages } from "../assets/Lead Generation Landing page (Images)/assetsImages";


const IntroSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white relative overflow-hidden">
       
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-32 px-20">
        {/* Left Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Not Your Average Realtor
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Real Trust is a one-stop hub for fast-growing, high-yield consultation, marketing design,
            and effective strategies to get the maximum value out of your real estate.
          </p>
        </div>
     

        {/* Right Images */}
        <div className="w-full md:w-1/2 relative flex justify-center ">
          {/* Large circle image */}
          <img
            src={assetsImages.Ellipse11}
            alt="main"
            className="w-52 h-52 object-cover rounded-full border-none shadow-xl z-20"
          />

          {/* Top small circle */}
          <img
            src={assetsImages.Ellipse12}
            alt="team1"
            className="w-35 h-35 object-cover border-none rounded-full absolute top-[-40px] right-18  md:right-0 border-4  shadow-md"
          />

          {/* Bottom small circle */}
          <img
            src={assetsImages.Ellipse13}
            alt="team2"
            className="w-35 h-35 object-cover  rounded-full absolute bottom-0 right-18 top-26 md:right-0 border-noneshadow-md"
          />

        </div>
      </div>

    </section>
    
  );
};

export default IntroSection;
