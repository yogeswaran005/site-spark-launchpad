
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToUpload = () => {
    const uploadSection = document.getElementById('upload-section');
    if (uploadSection) {
      uploadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-br from-teal-light to-white py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-dark mb-6">
            Discover Your Perfect Style
          </h1>
          <p className="text-xl md:text-2xl text-gray-dark mb-12">
            Upload an image of clothing and get personalized style recommendations
            for similar styles, matching accessories, and occasions to wear them.
          </p>
          <Button 
            onClick={scrollToUpload}
            className="bg-teal hover:bg-teal/90 text-white rounded-full px-8 py-6 text-lg flex items-center gap-2"
          >
            Try It Now
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
