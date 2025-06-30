import React from "react";
import Link from "next/link";

const departments = [
  { name: "Engineering", icon: "/images/icons/engineering.png" },
  { name: "Health Sciences", icon: "/images/icons/health.png" },
  { name: "Information Technology", icon: "/images/icons/it.png" },
  { name: "Social Sciences", icon: "/images/icons/protect.png" },
];

const DepartmentsSection = () => (
  <section className="py-16 bg-gray-50 px-6 md:px-20">
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
      Our Departments
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {departments.map((dept) => (
        <div
          key={dept.name}
          className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
        >
          <img src={dept.icon} alt={dept.name} className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold text-blue-800">{dept.name}</h3>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-10">
      <Link href="/departments">
        <span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow transition">
          Read Detail
        </span>
      </Link>
    </div>
  </section>
);

export default DepartmentsSection;
