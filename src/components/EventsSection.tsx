import React from "react";

const events = [
  {
    date: "2024-06-15",
    title: "Annual Sports Meet",
    location: "Main Stadium",
  },
  {
    date: "2024-07-01",
    title: "Open Day for Prospective Students",
    location: "Auditorium",
  },
  {
    date: "2024-07-10",
    title: "Research Symposium",
    location: "Science Block",
  },
];

const EventsSection = () => (
  <section className="py-16 bg-gray-50 px-6 md:px-20">
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
      Upcoming Events
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {events.map((event, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition flex flex-col items-start"
        >
          <span className="text-blue-700 font-bold text-lg mb-2">
            {event.date}
          </span>
          <h3 className="text-xl font-semibold text-blue-800 mb-1">
            {event.title}
          </h3>
          <p className="text-gray-600 text-sm">{event.location}</p>
        </div>
      ))}
    </div>
  </section>
);

export default EventsSection;
