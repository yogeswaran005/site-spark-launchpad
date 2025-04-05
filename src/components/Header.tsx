
import React from 'react';
import { Shirt } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shirt className="h-8 w-8 text-teal" />
            <span className="text-2xl font-bold text-gray-dark">FashionLens</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-dark hover:text-teal transition-colors">Home</a>
            <a href="#" className="text-gray-dark hover:text-teal transition-colors">How It Works</a>
            <a href="#" className="text-gray-dark hover:text-teal transition-colors">About</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
