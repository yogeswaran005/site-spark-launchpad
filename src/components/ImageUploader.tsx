
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;
    
    const file = acceptedFiles[0];
    
    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive",
      });
      return;
    }
    
    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Image size should be less than 5MB",
        variant: "destructive",
      });
      return;
    }
    
    // Create preview
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    
    // Pass file to parent
    onImageUpload(file);
    
    toast({
      title: "Image uploaded",
      description: "Your image is ready for analysis",
    });
    
    return () => URL.revokeObjectURL(objectUrl);
  }, [onImageUpload, toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1
  });

  const clearImage = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
      setPreview(null);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!preview ? (
        <div 
          {...getRootProps()} 
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
            ${isDragActive ? 'border-teal bg-teal/5' : 'border-gray-medium hover:border-teal'}`}
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto h-12 w-12 text-teal mb-4" />
          <p className="text-lg mb-2">Drag and drop your clothing image</p>
          <p className="text-sm text-gray-500 mb-4">or click to browse files</p>
          <p className="text-xs text-gray-400">Supports JPEG, PNG, WebP (max 5MB)</p>
        </div>
      ) : (
        <div className="relative">
          <div className="rounded-lg overflow-hidden border border-gray-medium">
            <img 
              src={preview} 
              alt="Preview" 
              className="w-full max-h-[400px] object-contain"
            />
          </div>
          <Button 
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 rounded-full" 
            onClick={clearImage}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
