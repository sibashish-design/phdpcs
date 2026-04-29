'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface CategoryPageProps {
  category: string;
  children: React.ReactNode;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, children }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            className="flex items-center text-[#2e5b8e] hover:text-[#60afaa] transition-colors"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Categories
          </Button>
        </div>
        
        {/* Category Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#2e5b8e] to-[#0096a0] text-transparent bg-clip-text mb-4">
            {category}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2e5b8e] to-[#0096a0] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our selection of {category} products.
          </p>
        </div>
        
        {/* Content */}
        {children}
      </div>
    </div>
  );
};

export default CategoryPage;