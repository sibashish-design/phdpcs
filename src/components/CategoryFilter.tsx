'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/products';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className={`transition-all duration-200 border rounded-full px-4 py-2 font-medium
            ${
              selectedCategory === category
                ? "bg-[#0f6f73] text-white border-[#0f6f73]"
                : "bg-transparent text-[#0a2540] border-[#0a2540] hover:bg-[#0f6f73] hover:text-white hover:border-[#0f6f73]"
            }
          `}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;