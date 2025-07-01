import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 4,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("/projects");
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-16 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-3">Our Projects</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          We know what buyers are looking for and suggest projects that will bring
          clients top dollar for the sale of their homes.
        </p>

        {/* Carousel + Arrows Container */}
        <div className="relative">
          {/* Carousel */}
          <div ref={sliderRef} className="keen-slider">
            {projects.map((project) => (
              <div
                key={project._id}
                className="keen-slider__slide bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src={`http://localhost:5000/uploads/${project.image}`}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-blue-900 font-semibold text-base mb-1">
                      {project.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {project.description}
                    </p>
                  </div>
                  <button className="mt-4 w-full bg-orange-500 text-white py-1 text-sm rounded hover:bg-orange-600 transition">
                    See More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows - Positioned outside */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => slider.current?.prev()}
              className="bg-white border shadow p-2 rounded-full hover:bg-gray-100 transition"
            >
              <ChevronLeft className="w-5 h-5 text-blue-600" />
            </button>
          </div>
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => slider.current?.next()}
              className="bg-white border shadow p-2 rounded-full hover:bg-gray-100 transition"
            >
              <ChevronRight className="w-5 h-5 text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
