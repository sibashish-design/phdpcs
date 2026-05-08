"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { ShoppingCart, Eye } from "lucide-react";
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

  const priceDisplay =
    product.price === 0 ? "No Fee" : `₹${product.price.toLocaleString("en-IN")}`;

  const trackShort = product.track
    .replace(/^Track [A-Z] – /, "")
    .replace("Cross-Track – ", "")
    .replace(" Recognitions", "")
    .replace(" Recognition", "");

  return (
    <>
      <div className="group bg-white border border-[#015D67]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-row sm:flex-col h-auto sm:h-full">

        {/* Image — left strip on mobile, top on desktop */}
        <div
          className="relative overflow-hidden shrink-0 w-24 sm:w-full h-auto sm:h-36 rounded-l-2xl sm:rounded-none sm:rounded-t-2xl cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 min-h-[100px]"
          />
          {product.featured && (
            <Badge className="absolute top-1.5 left-1.5 bg-[#015D67] text-white text-[8px] px-1.5 py-0.5 leading-tight">
              Featured
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 min-w-0 p-2.5 sm:p-3">

          {/* Code + track */}
          <div className="flex items-center gap-1 mb-1 flex-wrap">
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#015D67]/10 text-[#015D67] shrink-0 leading-tight">
              {product.code}
            </span>
            <span className="text-[9px] text-[#015D67]/50 truncate leading-tight hidden sm:block">
              {trackShort}
            </span>
          </div>

          {/* Name */}
          <h3
            className="font-semibold text-[11px] sm:text-sm leading-snug line-clamp-2 text-[#1a3a5c] cursor-pointer hover:text-[#015D67] transition-colors mb-1"
            onClick={() => setIsModalOpen(true)}
          >
            {product.name}
          </h3>

          {/* Description — desktop only */}
          <p className="hidden sm:block text-[11px] text-slate-500 line-clamp-2 leading-snug mb-2 flex-1">
            {product.shortDescription}
          </p>

          {/* Price */}
          <span
            className={`text-[11px] sm:text-sm font-bold mt-auto ${
              product.price === 0 ? "text-emerald-600" : "text-[#015D67]"
            }`}
          >
            {priceDisplay}
            {product.price > 0 && (
              <span className="text-[9px] text-slate-400 ml-1 font-normal hidden sm:inline">+ GST</span>
            )}
          </span>

          {/* Buttons */}
          <div className="flex gap-1.5 mt-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-1 bg-[#015D67] text-white rounded-lg text-[10px] sm:text-xs font-semibold py-1.5 sm:py-2 hover:bg-[#015D67]/85 active:scale-95 transition-all"
            >
              <ShoppingCart className="h-3 w-3 shrink-0" />
              <span>Add</span>
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-slate-100 text-slate-500 rounded-lg hover:bg-slate-200 active:scale-95 transition-all shrink-0 self-center"
              aria-label="View details"
            >
              <Eye className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </button>
          </div>
        </div>
      </div>

  {isModalOpen && (
  <ProductDetailsModal
    product={product}
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
  />
)}
    </>
  );
};

export default ProductCard;
