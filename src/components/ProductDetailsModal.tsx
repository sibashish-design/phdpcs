"use client";

import React from "react";
import { X } from "lucide-react";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductDetailsModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md max-h-[90vh] overflow-auto bg-white rounded-lg shadow-xl m-4">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10 rounded-full bg-white/90 p-1.5 text-gray-700 shadow-md hover:bg-gray-100"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Product image */}
        <div className="relative w-full h-48 bg-gray-200 rounded-t-lg overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
              No Image Available
            </div>
          )}
          {product.featured && (
            <Badge className="absolute top-2 left-2 bg-[#015D67] text-white">
              Featured
            </Badge>
          )}
        </div>

        {/* Product details */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>

            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="bg-[#015D67]/10 text-[#015D67] border-none"
              >
                {product.category}
              </Badge>
              {product.subcategory && (
                <Badge
                  variant="outline"
                  className="bg-blue-50 text-blue-600 border-none"
                >
                  {product.subcategory}
                </Badge>
              )}
            </div>
          </div>

          <div className="pt-2">
            <p className="text-lg font-bold text-[#015D67]">
              ₹{product.price.toLocaleString()}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {product.viewdetails && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">Details</h3>
              <p className="text-gray-600">{product.viewdetails}</p>
            </div>
          )}

          {/* <div className="flex items-center justify-between pt-2">
            <div className="flex items-center"></div>
            <span
              className={`px-2 py-1 text-xs font-medium rounded ${
                product.inStock
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
