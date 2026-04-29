'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import ProductCard from '@/components/ProductCard';
import CategoryFilter from '@/components/CategoryFilter';
import SearchBar from '@/components/SearchBar';
import { products } from '@/data/products';
import { useSearchParams } from 'next/navigation';

// Component that uses useSearchParams
function ProductsWithSearch({ setSelectedCategory }: { setSelectedCategory: (category: string) => void }) {
  const searchParams = useSearchParams();
  
  // Set the category from URL query parameter if available
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams, setSelectedCategory]);
  
  return null; // This component only handles the search params effect
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Wrap the component that uses useSearchParams in Suspense */}
      <Suspense fallback={null}>
        <ProductsWithSearch setSelectedCategory={setSelectedCategory} />
      </Suspense>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {selectedCategory === 'All' ? 'Nomination Categories' : selectedCategory}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {selectedCategory === 'All' 
              ? 'Explore our selection of Nomination Categories'
              : `Explore our selection of ${selectedCategory} products.`}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}