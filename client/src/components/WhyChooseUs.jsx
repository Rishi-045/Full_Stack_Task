import React from "react";


import { assetsIcons} from "../assets/Lead Generation Landing page (Icons)/assetsIcons"

const WhyChooseUs = () => {
  const features = [
    {
      icon: assetsIcons.Home,
      title: "Potential ROI",
      desc: "Maximize returns through strategic consultations and sales planning.",
    },
    {
      icon: assetsIcons.PaintBrush2,
      title: "Creative Design",
      desc: "Stunning, responsive designs that enhance brand presence.",
    },
    {
      icon: assetsIcons.Linkedin,
      title: "Smart Marketing",
      desc: "Expert marketing on LinkedIn, social, and local SEO to drive leads.",
    },
  ];

  return (
    <section id="services" className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-12">Why Choose Us?</h2>
        <div className="flex gap-2 mt-10">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img src={item.icon} alt={item.title} className="w-14 h-14 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
