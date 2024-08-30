import React from 'react';
import { X, InstagramIcon, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="p-8 bg-gray-800 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="flex space-x-4 pb-8">
          <X size={24} />
          <InstagramIcon size={24} />
          <Facebook size={24} />
          <Youtube size={24} />
        </div>
        {[...Array(3)].map((_, i) => (
            <div key={i} className='w-full pb-8'>
              <h3 className="font-bold mb-2">Points</h3>
              <ul className="space-y-2">
                <li>Points rewards</li>
                <li>Points rewards</li>
                <li>Points rewards</li>
                <li>Points rewards</li>
                <li>Points rewards</li>
              </ul>
            </div>
          ))}
      </div>
    </footer>
  );
};

export default Footer;
