import React from 'react';
import { X, InstagramIcon, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="p-8 bg-gray-800 text-white">
      <div className="flex justify-between items-center mb-8">
        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        <div className="flex space-x-4">
          <X size={24} />
          <InstagramIcon size={24} />
          <Facebook size={24} />
          <Youtube size={24} />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i}>
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
