
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export interface RecommendationItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Recommendations {
  similarStyles: RecommendationItem[];
  accessories: RecommendationItem[];
  occasions: RecommendationItem[];
}

interface StyleRecommendationsProps {
  recommendations: Recommendations | null;
  isLoading: boolean;
}

const StyleRecommendations: React.FC<StyleRecommendationsProps> = ({ 
  recommendations, 
  isLoading 
}) => {
  if (isLoading) {
    return <LoadingState />;
  }

  if (!recommendations) {
    return null;
  }

  return (
    <div className="w-full">
      <Tabs defaultValue="similar">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="similar">Similar Styles</TabsTrigger>
          <TabsTrigger value="accessories">Accessories</TabsTrigger>
          <TabsTrigger value="occasions">Occasions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="similar">
          <RecommendationGrid items={recommendations.similarStyles} />
        </TabsContent>
        
        <TabsContent value="accessories">
          <RecommendationGrid items={recommendations.accessories} />
        </TabsContent>
        
        <TabsContent value="occasions">
          <RecommendationGrid items={recommendations.occasions} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const RecommendationGrid: React.FC<{ items: RecommendationItem[] }> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
          <div className="aspect-square relative">
            <img 
              src={item.imageUrl} 
              alt={item.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-medium text-lg mb-1">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const LoadingState = () => {
  return (
    <div className="w-full">
      <div className="h-12 w-full bg-gray-light rounded-lg mb-8 animate-pulse"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="rounded-lg overflow-hidden">
            <div className="aspect-square bg-gray-light animate-pulse"></div>
            <div className="p-4">
              <div className="h-6 bg-gray-light rounded animate-pulse mb-2"></div>
              <div className="h-4 bg-gray-light rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleRecommendations;
