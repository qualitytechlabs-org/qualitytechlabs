import React from "react";

const NextSteps: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-24 px-6 text-center">
      <p className="text-gray-400 mb-2">
        Last week, 12,311 brand new publications got started.
      </p>
      <h3 className="text-3xl font-bold mb-8">Today, it's your turn.</h3>
      <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full font-medium">
        Start a Project
      </button>
    </section>
  );
};

export default NextSteps;
