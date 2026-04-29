'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';
import { products } from '@/data/products';
import CategoryPage from '@/components/CategoryPage';

export default function HealthcareManufacturersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const categoryName = 'Healthcare Manufacturers Recognition';

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = product.category === categoryName;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm]);

  return (
    <CategoryPage category={categoryName}>
      {/* Search */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredProducts.length} products in {categoryName}
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
          <p className="text-gray-400 mt-2">Try adjusting your search.</p>
        </div>
      )}
    </CategoryPage>
  );
}