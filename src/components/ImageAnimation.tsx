import React, { useEffect, useRef, useState } from "react";

const images = [
  "/images/Home1.jpg",
  "/images/Home2.jpg",
  "/images/Home3.jpg",
  "/images/Home4.jpg",
  "/images/Home5.jpg",
  "/images/Home6.jpg",
  "/images/Home7.jpg",
  "/images/Home8.jpg",
  "/images/Home9.jpg",
  "/images/Home11.jpg",
];

const INTERVAL = 4000;
const SLIDE_DURATION = 700;

const SlideshowWithText = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${current * (100 / images.length)}%)`,
        }}
      >
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="Slideshow Image"
            className="w-full h-full object-cover flex-shrink-0"
            style={{ width: `${100 / images.length}%` }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/50 z-20"></div>
      <div className="absolute inset-0 flex items-center justify-end text-white text-center z-30">
        <div className="bg-black/60 backdrop-blur-sm p-8 mx-8 rounded-2xl shadow-2xl border border-white/20 transition-all duration-700 ease-out transform">
          <h2 className="text-3xl font-bold mb-4 leading-relaxed">
            သင်၏အသိပညာကိုတိုးတက်စေပါ။
          </h2>
          <p className="text-xl opacity-90">နေရာမရွေး အချိန်မရွေး လေ့လာပါ။</p>
        </div>
      </div>
      {/* Optional: Dots navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 border border-white/60 ${
              idx === current ? "bg-white/90 scale-110" : "bg-white/40"
            }`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideshowWithText;
