"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShoppingCart,
  Menu,
  X,
  Home,
  Info,
  Users,
  Mic,
  Building,
  BookOpen,
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Us", href: "/about", icon: Info },
  { name: "Speaker", href: "/speaker", icon: Mic },
  { name: "Partners", href: "/Partners", icon: Building },
  { name: "Contact Us", href: "/contact", icon: Users },
];

const Header = () => {
  const { itemCount } = useCart();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when overlay is open
  useEffect(() => {
    if (brochureOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [brochureOpen]);

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-50 border-b border-white/10 transition-all duration-300",
          scrolled
            ? "bg-[#061a1c]/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-[#061a1c]"
        )}
      >
        <div className="h-1 bg-[#2e5b8e]"></div>

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%230096a0%22%20fill-opacity=%220.08%22%3E%3Ccircle%20cx=%2210%22%20cy=%2210%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-1">
              <Image src="/logo.png" alt="Pharma Logo" width={100} height={100} />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                      "relative text-white font-bold group px-4 py-2 rounded-xl transition-all duration-500",
                      "hover:text-white hover:bg-white/20 hover:backdrop-blur-sm",
                      "transform hover:-translate-y-1 hover:scale-105",
                      "border border-transparent hover:border-white/30",
                      "drop-shadow-sm",
                      isActive && "bg-white/15 border-white/20"
                    )}
                  >
                    {link.name}
                    <span
                      className={clsx(
                        "absolute bottom-0 left-4 right-4 h-0.5 bg-[#60afaa] rounded-full transform origin-left transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3">

              {/* Brochure Button */}
              <button
                onClick={() => setBrochureOpen(true)}
                className={clsx(
                  "hidden md:flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm",
                  "bg-amber-500 hover:bg-amber-400 text-white",
                  "border border-amber-400/50 hover:border-amber-300",
                  "shadow-md hover:shadow-amber-500/30",
                  "transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                )}
              >
                <BookOpen className="w-4 h-4" />
                Brochure
              </button>

              <Link href="/cart">
                <Button
                  size="icon"
                  variant="ghost"
                  className="relative hover:bg-white/20 hover:backdrop-blur-sm hover:shadow-lg hover:shadow-white/20 transform hover:-translate-y-1 hover:scale-105 transition-all duration-500 border border-transparent hover:border-white/30 rounded-xl"
                >
                  <ShoppingCart className="w-6 h-6 text-white hover:text-white/80 transition-colors duration-300 drop-shadow-sm" />
                  {itemCount > 0 && (
                    <Badge className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full text-xs p-0 bg-red-500 text-white">
                      {itemCount}
                    </Badge>
                  )}
                </Button>
              </Link>

              <Button
                size="icon"
                variant="ghost"
                className={clsx(
                  "md:hidden relative overflow-hidden",
                  "bg-white/20 hover:bg-white/30",
                  "border border-white/30",
                  "shadow-lg shadow-white/20",
                  "active:shadow-sm active:shadow-white/10",
                  "active:translate-x-[1px] active:translate-y-[1px]",
                  "transform transition-all duration-300",
                  "rounded-xl p-3",
                  "backdrop-blur-sm",
                  mobileOpen && "bg-white/30 shadow-sm shadow-white/10"
                )}
                onClick={() => setMobileOpen((prev) => !prev)}
              >
                <Menu className="w-6 h-6 text-white drop-shadow-lg" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* ── PDF Brochure Overlay ── */}
      {brochureOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-black/80 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) setBrochureOpen(false); }}
        >
          {/* Toolbar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#061a1c] border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-amber-400" />
              <span className="text-white font-semibold text-sm sm:text-base">
                PHDCCI UPHACS 2026 — Brochure
              </span>
            </div>
            <div className="flex items-center gap-2">
              
                <button
  onClick={() => window.open("/PHDCCI_UPHACS_2026_Concept_and_Categories_REVISED.pdf", "_blank")}
  className={"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-white text-xs font-semibold transition-all duration-200"}
>
  Download
</button>
              <button
                onClick={() => setBrochureOpen(false)}
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* PDF iframe */}
          <div className="flex-1 overflow-hidden">
            <iframe
              src="/PHDCCI_UPHACS_2026_Concept_and_Categories_REVISED.pdf"
              className="w-full h-full"
              title="PHDCCI UPHACS 2026 Brochure"
            />
          </div>
        </div>
      )}

      {/* Full Screen Mobile Menu */}
      <div
        className={clsx(
          "fixed inset-0 bg-gradient-to-br from-[#1FA58A] to-[#145C52] backdrop-blur-xl z-[60] md:hidden",
          "transition-transform duration-500 ease-in-out",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%230096a0%22%20fill-opacity=%220.08%22%3E%3Ccircle%20cx=%2210%22%20cy=%2210%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>

        <div className="flex items-center justify-between px-6 py-8 border-b border-white/20 relative z-10">
          <h2 className="text-2xl font-bold text-white drop-shadow-lg">Menu Items</h2>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setMobileOpen(false)}
            className="relative overflow-hidden bg-white/20 hover:bg-white/30 shadow-lg shadow-white/20 rounded-full p-3 backdrop-blur-sm transition-all duration-300"
          >
            <X className="w-6 h-6 text-white drop-shadow-sm" />
          </Button>
        </div>

        <div className="px-6 py-8 relative z-10">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={clsx(
                    "flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-500",
                    "text-white font-bold text-lg drop-shadow-lg",
                    "hover:bg-white/20 hover:backdrop-blur-sm hover:shadow-xl hover:shadow-white/20",
                    "transform hover:scale-105 hover:-translate-y-1",
                    "border border-transparent hover:border-white/30",
                    isActive && "bg-white/20 backdrop-blur-sm font-extrabold shadow-xl border-white/30"
                  )}
                >
                  <IconComponent className="w-6 h-6" />
                  <span>{link.name}</span>
                </Link>
              );
            })}

            {/* Brochure button in mobile menu */}
            <button
              onClick={() => { setMobileOpen(false); setBrochureOpen(true); }}
              className={clsx(
                "flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-500",
                "text-white font-bold text-lg drop-shadow-lg",
                "bg-amber-500/30 hover:bg-amber-500/50 border border-amber-400/40 hover:border-amber-300/60",
                "transform hover:scale-105 hover:-translate-y-1"
              )}
            >
              <BookOpen className="w-6 h-6" />
              <span>Brochure</span>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;