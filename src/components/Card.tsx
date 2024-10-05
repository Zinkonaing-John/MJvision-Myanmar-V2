import React from "react";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Circular image */}
      <div className="flex justify-center mt-4">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src={imageSrc}
          alt="Profile"
        />
      </div>

      {/* Card content */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
