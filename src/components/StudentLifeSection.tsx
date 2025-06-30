import React from "react";

const images = [
  "/images/coffeeClub.jpg",
  "/images/ukuleleClub.jpg",
  "/images/taekwondo.jpg",
];

const StudentLifeSection = () => (
  <section className="py-16 bg-gray-50 px-6 md:px-20">
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
      Student Life
    </h2>
    <p className="text-lg text-gray-700 text-center mb-10 max-w-2xl mx-auto">
      Experience a vibrant campus life with a variety of clubs, events, and
      activities. Make lifelong friends and unforgettable memories at JJ Myanmar
      University.
    </p>
    <div className="flex flex-wrap justify-center gap-8">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt="Student Life"
          className="w-64 h-40 object-cover rounded-xl shadow-lg"
        />
      ))}
    </div>
  </section>
);

export default StudentLifeSection;
