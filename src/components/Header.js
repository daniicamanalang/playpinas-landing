import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo';
import Button from './Base/Button';
import { Menu, X } from 'lucide-react'; // Assuming you're using lucide-react for icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center p-4 w-full max-w-7xl mx-auto">
        <Logo />
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Games</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About us</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
          <div className="hidden md:flex space-x-2">
            <Button>Play now</Button>
            <Button className="!bg-black !text-white !border-0">Join us</Button>
          </div>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-y-0 right-0 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out bg-white shadow-lg w-64 z-50 md:hidden`}>
        <div className="flex flex-col p-4">
          <button onClick={toggleMenu} className="self-end mb-4">
            <X size={24} />
          </button>
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Games</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About us</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
          <div className="flex flex-col space-y-2 mt-4">
            <Button>Play now</Button>
            <Button className="!bg-black !text-white !border-0">Join us</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;