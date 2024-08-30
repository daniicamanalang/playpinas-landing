import React from 'react';

const Games = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Games</h2>
      <div className="flex justify-between items-center mb-4">
        <input type="text" placeholder="Search" className="p-2 border rounded" />
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-black text-white rounded">All</button>
          <button className="px-4 py-2 bg-gray-200 rounded">All time favorite</button>
          <button className="px-4 py-2 bg-gray-200 rounded">New</button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-gray-200 h-32"></div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="bg-gray-200 h-32"></div>
        ))}
      </div>
      <button className="mt-4 px-4 py-2 bg-gray-200 rounded">Load more</button>
    </section>
  );
};

export default Games;
