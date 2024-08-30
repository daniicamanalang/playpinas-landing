import React from 'react';
import HeroPlaceholder from '../assets/HeroPlaceholder.png';
import Button from './Base/Button';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center bg-gray-100 mt-[72px]">
      <div className="p-8 lg:p-16 xl:p-24">
        <h1 className="text-4xl font-bold mb-4 leading-10 !mb-2">
          Play and Earn points,
          <br />
          PlayPinas Rewards!
        </h1>
        <h3 className="uppercase pb-8">
          Check it out now
        </h3>
        <Button className="min-w-60">Play now</Button>
      </div>
      <div className="">
        <img src={HeroPlaceholder} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
