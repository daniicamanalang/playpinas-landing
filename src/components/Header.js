import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
      <nav className="hidden md:flex space-x-4">
        <a href="#" className="text-gray-600">
          Games
        </a>
        <a href="#" className="text-gray-600">
          About us
        </a>
        <a href="#" className="text-gray-600">
          Contact
        </a>
      </nav>
      <div className="flex space-x-2">
        <button className="px-4 py-2 bg-gray-200 rounded">Play Now</button>
        <button className="px-4 py-2 bg-black text-white rounded">Login</button>
      </div>
    </header>
  );
};

export default Header;
