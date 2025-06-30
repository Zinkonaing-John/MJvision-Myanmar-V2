import React from "react";

const testimonials = [
  {
    name: "Roiseng",
    image: "/images/stu3.jpg",
    quote:
      "Vision College of Jeonju gave me the confidence and skills to pursue my dreams!",
  },
  {
    name: "Zin Ko Naing",
    image: "/images/stu1.jpg",
    quote:
      "The faculty and campus life are amazing. I made lifelong friends here.",
  },
  {
    name: "Htoi Bu",
    image: "/images/stu2.jpg",
    quote: "A truly supportive environment for learning and growth!",
  },
];

const TestimonialsSection = () => (
  <section className="py-16 bg-white px-6 md:px-20">
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
      What Our Students Say
    </h2>
    <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-center max-w-xs"
        >
          <img
            src={t.image}
            alt={t.name}
            className="w-20 h-20 rounded-full mb-4 object-cover"
          />
          <p className="italic text-gray-700 mb-2">"{t.quote}"</p>
          <span className="font-semibold text-blue-800">{t.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
