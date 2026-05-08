"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
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

  // Price display helper
  const priceDisplay =
    product.price === 0 ? "No Fee" : `₹${product.price.toLocaleString("en-IN")}`;

  return (
    <>
      <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#015D67]/10 bg-white overflow-hidden flex flex-col h-full">
        {/* Image */}
        <div className="relative overflow-hidden h-40 shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {product.featured && (
            <Badge className="absolute top-2 left-2 bg-[#015D67] text-white text-[10px] px-2 py-0.5">
              Featured
            </Badge>
          )}
          {/* Hover overlay — eye icon only */}
          <div
            className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="bg-white/90 rounded-full p-2 shadow-lg">
              <Eye className="h-5 w-5 text-[#015D67]" />
            </div>
          </div>
        </div>

        <CardContent className="p-3 flex flex-col flex-1 gap-1">
          {/* Track badge */}
          <Badge
            variant="outline"
            className="text-[10px] w-fit bg-[#015D67]/8 text-[#015D67] border-[#015D67]/20 line-clamp-1 leading-tight py-0.5"
          >
            {product.code} · {product.track.replace(/^Track [A-Z] – /, "").replace("Cross-Track – ", "").replace(" Recognitions", "")}
          </Badge>

          {/* Name */}
          <h3
            className="font-semibold text-sm leading-snug line-clamp-2 cursor-pointer hover:text-[#015D67] transition-colors text-[#1a3a5c]"
            onClick={() => setIsModalOpen(true)}
          >
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-[11px] text-slate-500 line-clamp-2 leading-snug flex-1">
            {product.shortDescription}
          </p>

          {/* Price */}
          <div className="mt-1">
            <span
              className={`text-sm font-bold ${
                product.price === 0 ? "text-emerald-600" : "text-[#015D67]"
              }`}
            >
              {priceDisplay}
            </span>
            {product.price > 0 && (
              <span className="text-[10px] text-slate-400 ml-1">+ GST</span>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-3 pt-0 flex gap-2">
          <Button
            onClick={handleAddToCart}
            className="flex-1 bg-[#015D67] text-white hover:bg-[#015D67]/85 h-8 text-xs font-medium"
            size="sm"
          >
            <ShoppingCart className="h-3.5 w-3.5 mr-1" />
            Add to Cart
          </Button>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="h-8 px-3 bg-slate-100 text-slate-600 hover:bg-slate-200 border-0"
            size="sm"
            variant="outline"
            title="View details"
          >
            <Eye className="h-3.5 w-3.5" />
          </Button>
        </CardFooter>
      </Card>

      <ProductDetailsModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProductCard;