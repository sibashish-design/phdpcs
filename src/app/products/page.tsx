'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import ProductCard from '@/components/ProductCard';
import CategoryFilter from '@/components/CategoryFilter';
import SearchBar from '@/components/SearchBar';
import products from '@/data/products';
import { useSearchParams } from 'next/navigation';

function ProductsWithSearch({ setSelectedCategory }: { setSelectedCategory: (c: string) => void }) {
  const searchParams = useSearchParams();
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams, setSelectedCategory]);
  return null;
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.track === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={null}>
        <ProductsWithSearch setSelectedCategory={setSelectedCategory} />
      </Suspense>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            {selectedCategory === 'All' ? 'Nomination Categories' : selectedCategory}
          </h1>
          <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {selectedCategory === 'All'
              ? 'Explore all nomination categories'
              : `Browsing ${selectedCategory}`}
          </p>
        </div>

        {/* Search + Filter */}
        <div className="bg-white rounded-xl shadow-sm p-3 sm:p-6 mb-5 sm:mb-8">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Count */}
        <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-6 px-1">
          Showing <strong>{filteredProducts.length}</strong> of {products.length} categories
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          {searchTerm && ` matching "${searchTerm}"`}
        </p>

        {/* Grid — 2 cols on mobile, 3 on md, 4 on xl */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No categories found.</p>
            <p className="text-gray-400 mt-2 text-sm">Try adjusting your search or filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}