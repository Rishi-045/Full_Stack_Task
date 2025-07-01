import React from "react";
import ContactForm from "./ContactForm";
import IntroSection from "./IntroSection";


const Hero = () => {
  return (
    <section
  
      id="home"
      className="hero-section bg-white py-12 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto"
    >
      {/* Text Content */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0" >
        <h1 className="text-4xl md:text-5xl md:text-start font-bold text-white leading-tight mb-4 sm:text-center">
          Consultation, <br /> Design, <br /> & Marketing
        </h1>
      
      </div>

      {/* Form Box */}
      <div className="w-full md:w-1/2 max-w-md bg-[#2C3E50CC] text-black rounded-lg py-3  px-0shadow-lg">
        <h2 className="text-2xl text-white font-semibold mb-4 text-center">Get a Free <br /> Consultation</h2>
        <ContactForm/>
      </div>
      
    </section>
  );
};

export default Hero;
