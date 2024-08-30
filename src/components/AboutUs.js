import React from 'react';

const AboutUs = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">About us</h2>
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/4">
          <div className="bg-gray-200 h-32 mb-4"></div>
          <h3 className="font-bold mb-2">Title</h3>
          <p className="text-sm text-gray-600">
            Body text for whatever you'd like to say goes here. Body text contains detailed
            description.
          </p>
          <button className="mt-2 px-4 py-2 bg-gray-200 rounded">Button</button>
        </div>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="md:w-1/4">
            <div className="bg-gray-200 h-32 mb-4"></div>
            <h3 className="font-bold mb-2">Title</h3>
            <p className="text-sm text-gray-600">
              Body text for whatever you'd like to say goes here.
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-gray-200 h-32"></div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
