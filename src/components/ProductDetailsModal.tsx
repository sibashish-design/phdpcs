"use client";
import React, { useEffect, useRef } from "react";
import { X, ShoppingCart, CheckCircle2, Circle, AlertTriangle, Info, FileText, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductDetailsModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

type Tab = "overview" | "universal" | "category" | "optional";

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = React.useState<Tab>("overview");
  const overlayRef = useRef<HTMLDivElement>(null);

  // Reset tab when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab("overview");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
    onClose();
  };

  const priceDisplay =
    product.price === 0 ? "No Fee" : `₹${product.price.toLocaleString("en-IN")}`;

  const isJuryChoice = product.priceBand === "Complimentary";

  const tabs: { id: Tab; label: string; count?: number }[] = [
    { id: "overview", label: "Overview" },
    ...(product.universalMandatoryDocs.length > 0
      ? [{ id: "universal" as Tab, label: "Universal Docs", count: product.universalMandatoryDocs.length }]
      : []),
    ...(product.categoryMandatoryDocs.length > 0
      ? [{ id: "category" as Tab, label: "Category Docs", count: product.categoryMandatoryDocs.length }]
      : []),
    ...(product.supportingOptionalDocs.length > 0
      ? [{ id: "optional" as Tab, label: "Optional Docs", count: product.supportingOptionalDocs.length }]
      : []),
  ];

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(3px)" }}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* ── Header ── */}
        <div className="relative shrink-0">
          {/* Hero image */}
          <div className="h-44 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 h-44 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full p-1.5 shadow-lg transition-colors"
          >
            <X className="h-4 w-4 text-gray-700" />
          </button>

          {/* Featured badge */}
          {product.featured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-[#015D67] text-white text-[10px] px-2 py-0.5 flex items-center gap-1">
                <Star className="h-3 w-3 fill-current" /> Featured
              </Badge>
            </div>
          )}

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-white/80 text-xs mb-1 font-medium tracking-wide">
              {product.code} · {product.track}
            </p>
            <h2 className="text-white font-bold text-lg leading-tight">{product.name}</h2>
          </div>
        </div>

        {/* ── Price + Cart row ── */}
        <div className="shrink-0 flex items-center justify-between px-5 py-3 bg-gray-50 border-b border-gray-100">
          <div>
            <span
              className={`text-xl font-bold ${
                product.price === 0 ? "text-emerald-600" : "text-[#015D67]"
              }`}
            >
              {priceDisplay}
            </span>
            {product.price > 0 && (
              <span className="text-xs text-gray-400 ml-1">+ GST as applicable</span>
            )}
            <p className="text-[11px] text-gray-500 mt-0.5">{product.priceNote}</p>
          </div>
          {!isJuryChoice && (
            <Button
              onClick={handleAddToCart}
              className="bg-[#015D67] text-white hover:bg-[#015D67]/85 h-9 px-4 text-sm"
            >
              <ShoppingCart className="h-4 w-4 mr-1.5" />
              Add to Cart
            </Button>
          )}
        </div>

        {/* ── Tabs ── */}
        <div className="shrink-0 flex border-b border-gray-100 bg-white overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-xs font-semibold whitespace-nowrap transition-all border-b-2 flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? "border-[#015D67] text-[#015D67]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span
                  className={`rounded-full text-[10px] w-4 h-4 flex items-center justify-center font-bold ${
                    activeTab === tab.id
                      ? "bg-[#015D67] text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Scrollable content ── */}
        <div className="flex-1 overflow-y-auto p-5">

          {/* OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div className="space-y-4">
              {/* Who should apply */}
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Info className="h-3.5 w-3.5" /> Who Should Apply
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">{product.fullDescription}</p>
              </div>

              {/* Eligibility note */}
              {product.eligibilityNote && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-amber-700 mb-1">Eligibility Note</p>
                      <p className="text-xs text-amber-800 leading-relaxed">{product.eligibilityNote}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Jury choice note */}
              {isJuryChoice && (
                <div className="bg-[#015D67]/5 border border-[#015D67]/20 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-[#015D67] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#015D67] mb-1">Jury Choice Recognition</p>
                      <p className="text-xs text-[#015D67]/80 leading-relaxed">
                        This award is not open for direct self-nomination. See the Category Docs tab for submission guidance.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick doc summary */}
              {(product.universalMandatoryDocs.length > 0 || product.categoryMandatoryDocs.length > 0) && (
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5" /> Documents Required
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {product.universalMandatoryDocs.length > 0 && (
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                        <span className="text-xs text-gray-600">
                          <strong>{product.universalMandatoryDocs.length}</strong> Universal mandatory
                        </span>
                      </div>
                    )}
                    {product.categoryMandatoryDocs.length > 0 && (
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                        <span className="text-xs text-gray-600">
                          <strong>{product.categoryMandatoryDocs.length}</strong> Category mandatory
                        </span>
                      </div>
                    )}
                    {product.supportingOptionalDocs.length > 0 && (
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                        <span className="text-xs text-gray-600">
                          <strong>{product.supportingOptionalDocs.length}</strong> Optional / supporting
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-[11px] text-gray-400 mt-2">
                    Switch tabs above to see the full document list.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* UNIVERSAL MANDATORY DOCS TAB */}
          {activeTab === "universal" && (
            <div className="space-y-3">
              <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-2.5 flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-4 w-4 text-red-500 shrink-0" />
                <p className="text-xs text-red-700 font-medium">
                  These {product.universalMandatoryDocs.length} documents apply to <strong>all</strong> 50 categories without exception.
                </p>
              </div>
              {product.universalMandatoryDocs.map((doc, idx) => (
                <DocItem key={idx} text={doc} type="mandatory" number={idx + 1} />
              ))}
            </div>
          )}

          {/* CATEGORY MANDATORY DOCS TAB */}
          {activeTab === "category" && (
            <div className="space-y-3">
              <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-2.5 flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0" />
                <p className="text-xs text-orange-700 font-medium">
                  These {product.categoryMandatoryDocs.length} documents are specific to <strong>{product.code}</strong>.
                </p>
              </div>
              {product.categoryMandatoryDocs.map((doc, idx) => (
                <DocItem key={idx} text={doc} type="category" number={idx + 1} />
              ))}
            </div>
          )}

          {/* OPTIONAL DOCS TAB */}
          {activeTab === "optional" && (
            <div className="space-y-3">
              <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5 flex items-center gap-2 mb-4">
                <Circle className="h-4 w-4 text-blue-400 shrink-0" />
                <p className="text-xs text-blue-700 font-medium">
                  These {product.supportingOptionalDocs.length} documents are optional and strengthen your nomination.
                </p>
              </div>
              {product.supportingOptionalDocs.map((doc, idx) => (
                <DocItem key={idx} text={doc} type="optional" number={idx + 1} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ── Doc Item sub-component ────────────────────────────────────────────────────
const DocItem: React.FC<{
  text: string;
  type: "mandatory" | "category" | "optional";
  number: number;
}> = ({ text, type, number }) => {
  const colors = {
    mandatory: {
      num: "bg-red-100 text-red-600",
      border: "border-red-100",
      icon: <CheckCircle2 className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />,
    },
    category: {
      num: "bg-orange-100 text-orange-600",
      border: "border-orange-100",
      icon: <CheckCircle2 className="h-3.5 w-3.5 text-orange-400 shrink-0 mt-0.5" />,
    },
    optional: {
      num: "bg-blue-50 text-blue-500",
      border: "border-blue-100",
      icon: <Circle className="h-3.5 w-3.5 text-blue-300 shrink-0 mt-0.5" />,
    },
  };

  const c = colors[type];

  return (
    <div className={`flex gap-3 p-3 rounded-xl border ${c.border} bg-white shadow-sm`}>
      <span
        className={`shrink-0 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center mt-0.5 ${c.num}`}
      >
        {number}
      </span>
      <div className="flex items-start gap-1.5 flex-1 min-w-0">
        {c.icon}
        <p className="text-xs text-gray-700 leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default ProductDetailsModal;