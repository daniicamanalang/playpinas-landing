import React from 'react';
import Logo from '../assets/logo';
import Button from './Base/Button';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 w-full">
      <Logo />
      <div className="flex items-center gap-6">
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
          <Button>Play now</Button>
          <Button className="!bg-black !text-white !border-0">Join us</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
