import React, { useEffect, useState } from "react";

const SlideshowWithText = () => {
  const images = [
    "images/Home1.jpg",
    "images/Home2.jpg",
    "images/Home3.jpg",
    "images/Home4.jpg",
    "images/Home5.jpg",
    "images/Home6.jpg",
    "images/Home7.jpg",
    "images/Home8.jpg",
    "images/Home9.jpg",
    "images/Home11.jpg",
  ]; // Add your images
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image Slideshow */}
      <div className="absolute inset-0">
        <img
          src={images[currentIndex]}
          alt="Slideshow Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-1 flex items-center justify-right text-white text-center">
        <div className="bg-black bg-opacity-50 p-4 mx-2 rounded-lg">
          <h2 className="text-2xl font-bold">
            သင်၏အသိပညာကိုတိုးတက်စေပါ။ နေရာမရွေး အချိန်မရွေး လေ့လာပါ။
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SlideshowWithText;
