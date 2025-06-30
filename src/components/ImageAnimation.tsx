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

const SLIDE_DURATION = 1500;
const INTERVAL = 5000;

const SlideshowWithText = () => {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    intervalRef.current = setInterval(() => {
      setSliding(true);
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setSliding(false);
      }, SLIDE_DURATION);
    }, INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const next = (current + 1) % images.length;

  return (
    <div className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          key={current + "-main"}
          src={images[current]}
          alt="Slideshow Image"
          className={`w-full h-full object-cover absolute top-0 left-0 transition-transform duration-[${SLIDE_DURATION}ms] ease-in-out ${
            sliding ? "-translate-x-full" : "translate-x-0"
          }`}
          style={{ zIndex: 1 }}
        />
        {sliding && (
          <img
            key={next + "-next"}
            src={images[next]}
            alt="Next Slideshow Image"
            className={`w-full h-full object-cover absolute top-0 left-0 transition-transform duration-[${SLIDE_DURATION}ms] ease-in-out ${
              sliding ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ zIndex: 2 }}
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/50 z-10"></div>
      <div className="absolute inset-0 flex items-center justify-end text-white text-center z-20">
        <div className="bg-black/60 backdrop-blur-sm p-8 mx-8 rounded-2xl shadow-2xl border border-white/20 transition-all duration-700 ease-out transform">
          <h2 className="text-3xl font-bold mb-4 leading-relaxed">
            သင်၏အသိပညာကိုတိုးတက်စေပါ။
          </h2>
          <p className="text-xl opacity-90">နေရာမရွေး အချိန်မရွေး လေ့လာပါ။</p>
        </div>
      </div>
    </div>
  );
};

export default SlideshowWithText;
