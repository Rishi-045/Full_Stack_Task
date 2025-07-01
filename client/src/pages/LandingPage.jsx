import React from "react";
import ProjectSection from "../components/ProjectSection";
import ClientSection from "../components/ClientSection";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import IntroSection from "../components/IntroSection";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <IntroSection/>
      <WhyChooseUs/>
      <AboutUs/>
      <ProjectSection />
      <ClientSection />
      <Footer></Footer>

    </div>
  );
};

export default LandingPage;

