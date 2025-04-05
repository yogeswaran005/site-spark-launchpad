
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-light py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} FashionLens. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 text-sm">Made with</span>
            <Heart className="h-4 w-4 text-coral" />
            <span className="text-gray-500 text-sm">by Lovable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
