import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: Lucide icons

const ClientSection = () => {
  const [clients, setClients] = useState([]);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 15 },
      },
    },
  });

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await axios.get("/clients");
        setClients(res.data);
      } catch (err) {
        console.error("Error fetching clients:", err);
      }
    };

    fetchClients();
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-white py-16 px-4 md:px-8 relative"
    >
      <div className="max-w-7xl mx-auto text-center relative">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">Happy Clients</h2>

        {/* Arrows */}
        <button
          onClick={() => slider.current?.prev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border-none shadow p-2 rounded-full hover:bg-gray-100 transition z-10"
        >
          <ChevronLeft className="w-5 h-5 text-blue-600" />
        </button>
        <button
          onClick={() => slider.current?.next()}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border-none shadow p-2 rounded-full hover:bg-gray-100 transition z-10"
        >
          <ChevronRight className="w-5 h-5 text-blue-600" />
        </button>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {clients.map((client) => (
            <div
              key={client._id}
              className="keen-slider__slide bg-white rounded-xl shadow-md px-6 py-8 text-center gap-6 flex flex-col items-center justify-center"
            >
              <img
                src={`http://localhost:5000/uploads/${client.image}`}
                alt={client.name}
                className="w-20 h-20 object-cover rounded-full border"
              />
              <p className="text-gray-600 text-sm italic mb-3">
                "{client.description}"
              </p>
              <h3 className="text-blue-900 font-semibold text-sm">
                {client.name}
              </h3>
              <p className="text-gray-500 text-xs">{client.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
