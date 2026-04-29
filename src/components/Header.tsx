"use client";

import { useState } from "react";
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
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "ABOUT US", href: "/about", icon: Info },
  { name: "SPEAKERS", href: "/speaker", icon: Mic },
  { name: "PARTNERS", href: "/Partners", icon: Building },
  { name: "CONTACT US", href: "/contact", icon: Users },
  { name: "NOMINATION CATEGORIES", href: "/products", icon: ShoppingCart },
];

const Header = () => {
  const { itemCount } = useCart();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="bg-gradient-to-br from-[#1FA58A] to-[#145C52] backdrop-blur-xl sticky top-0 z-50 shadow-[0_8px_32px_rgba(0,150,160,0.15)] border-b border-white/20 overflow-hidden">
        <div className="h-1 bg-[#2e5b8e]"></div>

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%230096a0%22%20fill-opacity=%220.08%22%3E%3Ccircle%20cx=%2210%22%20cy=%2210%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}

            <Link href="/" className="flex items-center space-x-1">
              <Image
                src="/logo.png"
                alt="Pharma Logo"
                width={100}
                height={100}
              />
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
                      "drop-shadow-sm"
                    )}
                  >
                    {link.name}
                    <span
                      className={clsx(
                        "transform origin-left transition-transform duration-500",
                        "shadow-sm shadow-white/50",
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-4">
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
                  mobileOpen &&
                    "bg-white/30 shadow-sm shadow-white/10 translate-x-[1px] translate-y-[1px]"
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
      <div className="w-full bg-yellow-100 text-yellow-900 py-2 shadow-inner sticky top-0 z-40 overflow-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap text-sm md:text-base font-medium">
          <span className="font-semibold">
            📢 For Sponsorship, Speaking Slot and Space booking contact:
            ritesh.singh@phdcci.in / 8527900622. Registration for Excellence
            Award nomination will close by 20th June 2026 |
          </span>
          <span className="font-semibold">
            📢 For Sponsorship, Speaking Slot and Space booking contact:
            ritesh.singh@phdcci.in / 8527900622. Registration for Excellence
            Award nomination will close by 20th June 2026 |
          </span>
          <span className="font-semibold">
            📢 For Sponsorship, Speaking Slot and Space booking contact:
            ritesh.singh@phdcci.in / 8527900622. Registration for Excellence
            Award nomination will close by 20th June 2026
          </span>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-marquee {
            display: flex;
            animation: marquee 40s linear infinite;
          }
        `}</style>
      </div>

      {/* Full Screen Mobile Menu */}
      <div
        className={clsx(
          "fixed inset-0 bg-gradient-to-br from-[#1FA58A] to-[#145C52] backdrop-blur-xl z-[60] md:hidden",
          "transition-transform duration-500 ease-in-out",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Background Pattern for Mobile Menu */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%230096a0%22%20fill-opacity=%220.08%22%3E%3Ccircle%20cx=%2210%22%20cy=%2210%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>

        {/* Header Section */}
        <div className="flex items-center justify-between px-6 py-8 border-b border-white/20 relative z-10">
          <h2 className="text-2xl font-bold text-white drop-shadow-lg">
            Menu Items
          </h2>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setMobileOpen(false)}
            className={clsx(
              "relative overflow-hidden",
              "bg-white/20 hover:bg-white/30",
              "shadow-lg shadow-white/20",
              "active:shadow-sm active:shadow-white/10",
              "active:translate-x-[1px] active:translate-y-[1px]",
              "transform transition-all duration-300",
              "rounded-full p-3",
              "backdrop-blur-sm"
            )}
          >
            <X className="w-6 h-6 text-white drop-shadow-sm" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
          </Button>
        </div>

        {/* Navigation Items */}
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
                    "shadow-sm hover:shadow-lg hover:shadow-white/20",
                    "drop-shadow-lg",
                    isActive &&
                      "bg-white/20 backdrop-blur-sm font-extrabold shadow-xl shadow-white/20 border-white/30 text-white"
                  )}
                >
                  <IconComponent className="w-6 h-6" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
