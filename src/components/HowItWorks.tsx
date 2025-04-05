
import React from 'react';
import { Camera, Sparkles, Shirt } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Camera className="h-10 w-10 text-teal" />,
      title: "Upload Image",
      description: "Take a photo or upload an image of any clothing item"
    },
    {
      icon: <Sparkles className="h-10 w-10 text-coral" />,
      title: "AI Analysis",
      description: "Our AI identifies the style, color, and details of your clothing"
    },
    {
      icon: <Shirt className="h-10 w-10 text-teal" />,
      title: "Get Recommendations",
      description: "Receive personalized style suggestions, accessories, and occasions"
    }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-dark">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-dark">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
