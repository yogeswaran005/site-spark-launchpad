
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImageUploader from '@/components/ImageUploader';
import StyleRecommendations, { Recommendations } from '@/components/StyleRecommendations';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Undo2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

import { getMockRecommendations, UPLOADED_IMAGE_PATH } from '@/utils/mockRecommendations';

const Index = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendations | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleImageUpload = (file: File) => {
    setUploadedImage(file);
    setRecommendations(null);
  };

  const analyzeImage = async () => {
    if (!uploadedImage) {
      toast({
        title: "No image selected",
        description: "Please upload an image first",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      // Get mock recommendations
      const mockData = getMockRecommendations();
      setRecommendations(mockData);
      setIsLoading(false);
      
      toast({
        title: "Analysis complete",
        description: "We've generated style recommendations for your image",
      });
    }, 2000);
  };

  const resetAnalysis = () => {
    setUploadedImage(null);
    setRecommendations(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {!uploadedImage && !recommendations && (
        <>
          <Hero />
          <HowItWorks />
        </>
      )}
      
      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto">
          <div id="upload-section" className="max-w-4xl mx-auto">
            {!recommendations ? (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-dark">
                  Upload Your Clothing Image
                </h2>
                <ImageUploader onImageUpload={handleImageUpload} />
                
                {uploadedImage && (
                  <div className="mt-8 text-center">
                    <Button 
                      onClick={analyzeImage}
                      className="bg-teal hover:bg-teal/90 text-white px-8 py-6"
                    >
                      Analyze Style
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mb-4 md:mb-0">
                    Your Style Recommendations
                  </h2>
                  <Button 
                    variant="outline"
                    onClick={resetAnalysis}
                    className="flex items-center gap-2"
                  >
                    <Undo2 className="h-4 w-4" />
                    Try Another Image
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                  <div className="lg:col-span-1">
                    <div className="sticky top-4">
                      <h3 className="text-lg font-medium mb-4 text-gray-dark">Your Uploaded Item</h3>
                      <div className="rounded-lg overflow-hidden border border-gray-medium">
                        <img 
                          src={uploadedImage ? URL.createObjectURL(uploadedImage) : UPLOADED_IMAGE_PATH} 
                          alt="Uploaded clothing" 
                          className="w-full aspect-square object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <StyleRecommendations 
                      recommendations={recommendations} 
                      isLoading={isLoading} 
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
