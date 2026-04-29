"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import ProductDetailsModal from "./ProductDetailsModal";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <>
      <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border border-[#015D67]/10 bg-white p-2 max-w-xs mx-auto">
        <CardContent className="p-0">
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {product.featured && (
              <Badge className="absolute top-2 left-2 bg-[#015D67] text-white">Featured</Badge>
            )}
            {!product.inStock && (
              <Badge variant="secondary" className="absolute top-2 right-2 bg-red-500 text-white">
                Out of Stock
              </Badge>
            )}
            <div 
              className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer"
              onClick={openModal}
            >
              <Button variant="outline" size="sm" className="bg-white/80 hover:bg-white">
                <Eye className="h-4 w-4 mr-1" /> View Details
              </Button>
            </div>
          </div>

          <div className="p-3">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <Badge
                variant="outline"
                className="text-xs whitespace-normal break-words bg-[#015D67]/10 text-[#015D67] border-none"
              >
                {product.category}
              </Badge>
            </div>

            <h3 
              className="font-semibold text-base mb-1 line-clamp-1 cursor-pointer hover:text-[#015D67] transition-colors" 
              style={{ color: '#2e5b8e' }}
              onClick={openModal}
            >
              {product.name}
            </h3>

            <p className="text-xs mb-2 line-clamp-2" style={{ color: '#336699' }}>
              {product.description}
            </p>

            {/* <div className="flex items-center justify-between">
              <span className="text-xl font-bold" style={{ color: '#2e5b8e' }}>
                ₹{product.price}
              </span>
            </div> */}
          </div>
          <CardFooter className="p-2 pt-0 pb-1 flex gap-2">
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex-1 bg-[#015D67] text-white hover:bg-[#60afaa]/90 h-8 text-sm"
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add to Cart
            </Button>
            <Button
              onClick={openModal}
              className="bg-gray-100 text-gray-700 hover:bg-gray-200 h-8 text-sm"
              size="sm"
              variant="outline"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </CardFooter>
        </CardContent>
      </Card>
      
      <ProductDetailsModal 
        product={product} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
};

export default ProductCard;
