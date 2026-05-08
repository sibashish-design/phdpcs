"use client";
import React, { useState } from "react";
import { getProductsByTrack } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const TRACK = "Track D – Healthcare Manufacturers Recognitions";

export default function HealthcareManufacturersPage() {
  const all = getProductsByTrack(TRACK);
  const [search, setSearch] = useState("");

  const filtered = all.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="inline-flex items-center text-[#015D67] hover:text-[#015D67]/80 mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
        </Link>
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Healthcare Manufacturers
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recognising innovation and excellence in healthcare manufacturing and production.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <SearchBar searchTerm={search} onSearchChange={setSearch} />
        </div>
        <p className="text-gray-600 mb-6">
          Showing {filtered.length} of {all.length} categories
        </p>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No categories found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}