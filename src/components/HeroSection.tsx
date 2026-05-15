import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Import Images
import slider1 from "@/assets/hero slider/police1.jpg";
import slider2 from "@/assets/hero slider/police22.jpg";
import slider3 from "@/assets/mt_photos/new-ig-office.jpeg";
import slider4 from "@/assets/hero slider/igoffice.jpg";
import slider5 from "@/assets/photo-Gallery-mt/karmachari.jpg";


// ✅ Static Slider Images
const slides = [
  {
    id: 1,
    image: slider1,
    
  },
  {
    id: 2,
    image: slider2,
    
  },
   {
    id: 3,
    image: slider4,
    
  },
  {
    id: 4
    ,
    image: slider3,
    
  },
   {
    id: 5
    ,
    image: slider5,
    
  },
 
];

const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // ✅ Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Previous Slide
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // ✅ Next Slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[80vh] overflow-hidden">
      
      {/* ✅ Slider Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
           
            className="w-full h-full object-cover"
          />

          {/* ✅ Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* ✅ Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4">
            
           

         

          </div>
        </div>
      ))}

      {/* ✅ Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
      >
        <ChevronLeft size={28} />
      </button>

      {/* ✅ Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
      >
        <ChevronRight size={28} />
      </button>

      {/* ✅ Dots Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full transition ${
              index === current
                ? "bg-white"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;