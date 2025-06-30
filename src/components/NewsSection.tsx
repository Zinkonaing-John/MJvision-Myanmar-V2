import React from "react";

const news = [
  {
    title: "Spring Semester Registration Open",
    date: "2024-06-01",
    summary:
      "Registration for the Spring semester is now open. Please visit the admissions office or register online.",
  },
  {
    title: "New Engineering Lab Inaugurated",
    date: "2024-05-20",
    summary:
      "Our state-of-the-art engineering lab was inaugurated by the Dean. Students can now access the latest technology for their projects.",
  },
  {
    title: "Annual Sports Meet Announced",
    date: "2024-05-10",
    summary:
      "The university's annual sports meet will be held on June 15th. All students are encouraged to participate and cheer for their teams.",
  },
];

const NewsSection = () => (
  <section className="py-16 bg-white px-6 md:px-20">
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
      Latest News
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {news.map((item, idx) => (
        <div
          key={idx}
          className="bg-gray-50 rounded-xl shadow p-6 hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-gray-500 mb-2">{item.date}</p>
          <p className="text-gray-700">{item.summary}</p>
        </div>
      ))}
    </div>
  </section>
);

export default NewsSection;
