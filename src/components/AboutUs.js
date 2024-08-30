import React from 'react';
import MallPlaceholder from '../assets/MallPlaceholder.png';
import Card from './Base/Card';

const AboutUs = () => {
  return (
    <section className="p-5">
      <div className="p-4 lg:p-16">
        <h2 className="text-2xl font-bold mb-4 w-full text-center p-8">About us</h2>
        <div className="w-full pb-12">
          <Card />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-full">
              <Card />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
