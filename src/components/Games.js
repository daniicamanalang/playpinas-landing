import React from 'react';
import Button from './Base/Button';

const Games = () => {
  return (
    <section className="p-5">
      <h2 className="text-2xl font-bold mb-4 w-full text-center p-8">Games</h2>
      <div className="flex justify-center md:justify-between items-center mb-4 flex-wrap gap-4">
        <input type="text" placeholder="Search" className="p-2 border rounded" />
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-black text-white rounded">All</button>
          <button className="px-4 py-2 bg-gray-200 rounded">All time favorite</button>
          <button className="px-4 py-2 bg-gray-200 rounded">New</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border border-slate-100 p-2 rounded-md">
            <div className="bg-gray-200 h-[247px]" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="border border-slate-100">
            <div className="bg-gray-200 h-[247px]" />
          </div>
        ))}
      </div>
      <div className='w-full flex justify-end pt-5'>
        <Button>Load more</Button>
      </div>
    </section>
  );
};

export default Games;
