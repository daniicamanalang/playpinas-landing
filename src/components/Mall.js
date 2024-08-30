import React from 'react';

const Mall = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Mall</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="bg-gray-200 h-32"></div>
        ))}
      </div>
      <button className="mt-4 px-4 py-2 bg-gray-200 rounded">Load more</button>
    </section>
  );
};

export default Mall;
