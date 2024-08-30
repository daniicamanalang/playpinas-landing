import React from 'react';
import MallPlaceholder from '../assets/MallPlaceholder.png';
import Button from './Base/Button';

const Mall = () => {
  return (
    <section className="p-5">
      <h2 className="text-2xl font-bold mb-4 w-full text-center p-8">Mall</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="p-4 border border-slate-100 rounded-md flex items-center justify-center">
            <img src={MallPlaceholder} alt="section" />
          </div>
        ))}
      </div>
      <div className='w-full flex justify-end pt-5'>
        <Button>Load more</Button>
      </div>
    </section>
  );
};

export default Mall;
