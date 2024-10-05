import React from "react";

const GradientDiv: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-12 rounded-lg  text-white text-center">
      <h1 className="text-2xl font-bold text-left">
        Visi<b className="text-orange-300">on</b>
      </h1>
      <h1 className="text-1xl font-bold text-left">College of Jeonju</h1>
      <h1 className="text-7xl justify-center">Learn Today, Lead Tomorrow!</h1>
    </div>
  );
};

export default GradientDiv;
