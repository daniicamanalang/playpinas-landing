import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center p-8">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">Play and Earn points, PlayPinas Rewards!</h1>
        <button className="px-6 py-2 bg-gray-200 rounded">Play now</button>
      </div>
      <div className="md:w-1/2 bg-gray-200 h-64 mt-8 md:mt-0"></div>
    </section>
  );
};

export default Hero;
