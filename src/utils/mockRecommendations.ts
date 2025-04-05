
import { Recommendations } from '@/components/StyleRecommendations';

// Demo image for the uploaded image that has been saved in public
const UPLOAD_IMAGE = '/lovable-uploads/cec74317-6b84-4035-8b68-7eed5c8c2bc2.png';

// Mock data for style recommendations
export const getMockRecommendations = (): Recommendations => {
  return {
    similarStyles: [
      {
        id: 's1',
        name: 'Classic Casual Tee',
        description: 'Versatile everyday casual wear',
        imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 's2',
        name: 'Urban Streetwear',
        description: 'Modern street style for any occasion',
        imageUrl: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1287&auto=format&fit=crop'
      },
      {
        id: 's3',
        name: 'Minimalist Design',
        description: 'Simple yet stylish everyday option',
        imageUrl: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1171&auto=format&fit=crop'
      },
      {
        id: 's4',
        name: 'Contemporary Casual',
        description: 'Modern take on casual comfort',
        imageUrl: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=627&auto=format&fit=crop'
      },
      {
        id: 's5',
        name: 'Weekend Relaxed Fit',
        description: 'Perfect for casual weekend outings',
        imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=776&auto=format&fit=crop'
      },
      {
        id: 's6',
        name: 'Everyday Essential',
        description: 'Staple piece for your wardrobe',
        imageUrl: 'https://images.unsplash.com/photo-1520013878279-70cd0624735b?q=80&w=885&auto=format&fit=crop'
      }
    ],
    accessories: [
      {
        id: 'a1',
        name: 'Minimal Watch',
        description: 'Clean design to complement your style',
        imageUrl: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1288&auto=format&fit=crop'
      },
      {
        id: 'a2',
        name: 'Classic Denim Jacket',
        description: 'Versatile layering piece',
        imageUrl: 'https://images.unsplash.com/photo-1608115069153-7a0b0c78db02?q=80&w=687&auto=format&fit=crop'
      },
      {
        id: 'a3',
        name: 'Leather Sneakers',
        description: 'Comfortable yet stylish footwear',
        imageUrl: 'https://images.unsplash.com/photo-1527090526205-beaac8dc3c62?q=80&w=1170&auto=format&fit=crop'
      },
      {
        id: 'a4',
        name: 'Minimalist Backpack',
        description: 'Functional everyday carry option',
        imageUrl: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?q=80&w=1287&auto=format&fit=crop'
      },
      {
        id: 'a5',
        name: 'Silver Chain Necklace',
        description: 'Subtle accessory for any outfit',
        imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1287&auto=format&fit=crop'
      },
      {
        id: 'a6',
        name: 'Classic Cap',
        description: 'Timeless headwear addition',
        imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1236&auto=format&fit=crop'
      }
    ],
    occasions: [
      {
        id: 'o1',
        name: 'Casual Coffee Date',
        description: 'Relaxed yet put-together look',
        imageUrl: 'https://images.unsplash.com/photo-1507914372368-b2b085b925a1?q=80&w=1170&auto=format&fit=crop'
      },
      {
        id: 'o2',
        name: 'Weekend Shopping',
        description: 'Comfortable for a day out in the city',
        imageUrl: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=1295&auto=format&fit=crop'
      },
      {
        id: 'o3',
        name: 'Casual Friday Office',
        description: 'Professional but relaxed work attire',
        imageUrl: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1170&auto=format&fit=crop'
      },
      {
        id: 'o4',
        name: 'Friend's Gathering',
        description: 'Perfect for social casual meetups',
        imageUrl: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1169&auto=format&fit=crop'
      },
      {
        id: 'o5',
        name: 'Movie Night',
        description: 'Cozy yet presentable casual option',
        imageUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1170&auto=format&fit=crop'
      },
      {
        id: 'o6',
        name: 'Campus/School Day',
        description: 'Everyday student style',
        imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1170&auto=format&fit=crop'
      }
    ]
  };
};

export const UPLOADED_IMAGE_PATH = UPLOAD_IMAGE;
