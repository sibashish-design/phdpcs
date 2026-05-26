"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat overflow-hidden min-h-[100vh] sm:min-h-[100vh] md:min-h-[100vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/banner.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-100/5 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-4 flex flex-col items-center gap-2">
        
        {/* Logos - Desktop */}
        <div className="hidden lg:flex items-center justify-center gap-8 w-full">
          
          {/* UK Gov Logo */}
          <div className="flex items-center justify-center w-[120px] h-[120px]">
            <img
              src="/assets/ukgov.png"
              alt="UK Government Logo"
              className="w-[120px] h-[120px] object-contain drop-shadow-lg"
            />
          </div>

          {/* PHDCCI Logo */}
          <div className="flex items-center justify-center w-[150px] h-[150px]">
            <img
              src="/phdcci-logo1.png"
              alt="PHDCCI Logo"
              className="w-[150px] h-[150px] object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Logos - Mobile */}
        <div className="flex md:hidden items-center justify-center gap-6 w-full">
          
          {/* UK Gov Logo */}
          <div className="flex items-center justify-center w-[96px] h-[97px]">
            <img
              src="/assets/ukgov.png"
              alt="UK Government Logo"
              className="w-[96px] h-[97px] object-contain drop-shadow-lg"
            />
          </div>

          {/* PHDCCI Logo */}
          <div className="flex items-center justify-center w-[100px] h-[100px]">
            <img
              src="/phdcci-logo1.png"
              alt="PHDCCI Logo"
              className="w-[100px] h-[100px] object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Title - Mobile */}
        <div className="block lg:hidden text-center px-3 sm:px-4 md:px-6">
          <img
            src="/phdccitheme1.png"
            alt="Pharma & Healthcare Conclave & Samman 2026"
            className="mx-auto w-[90%] max-w-[600px] h-auto"
          />
        </div>

        <img
          src="/banner4.png"
          alt="Pharma Event"
          className="block lg:hidden w-95 max-w-md md:max-w-lg rounded-2xl"
        />

        {/* Title - Desktop */}
        <div className="hidden sm:block text-center px-3 sm:px-4 md:px-6">
          <img
            src="/phdccitheme1.png"
            alt="Pharma & Healthcare Conclave & Samman 2026"
            className="mx-auto w-[90%] max-w-[800px] h-auto"
          />
        </div>

        {/* Banner image */}
        <img
          src="/banner4.png"
          alt="Pharma Event"
          className="hidden sm:block w-full max-w-md sm:max-w-lg lg:max-w-2xl rounded-2xl mt-4"
        />

        {/* Register Button */}
        <Link href="/products">
          <Button
            size="lg"
            className="mt-2 bg-gradient-to-r from-[#1FA58A] via-[#145C52] to-[#2e5b8e] hover:from-[#00fff0] hover:to-[#1FA58A] text-white transition-all duration-300 shadow-xl shadow-[#00e0ff]/40 border border-white/30 ring-2 ring-[#00e0ff]/30"
          >
            <CalendarDays className="mr-2 h-4 w-4" />
            Nominate Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>

        {/* Date + Location */}
        <div className="w-full max-w-4xl mx-auto mt-8 px-4 flex justify-center items-center gap-2 text-white-800 drop-shadow-md text-sm sm:text-base">
          
          <div className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-white-700 drop-shadow-sm" />
            <span className="font-semibold">24 June, 2026</span>
          </div>

          <span className="text-white-700/50 drop-shadow-sm">•</span>

          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-white-700 drop-shadow-sm" />
            <span className="font-semibold">
              Dehradun, Uttarakhand
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;