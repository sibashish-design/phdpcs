"use client";
import React from "react";

import FAQSection from "@/components/FAQSection";
import Hero from "@/components/Hero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import JewelryMembersSlider from "@/components/JewelryMembersSlider";



const animationKeyframes = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  @keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
  }
  @keyframes rotate3d {
    0% { transform: perspective(1000px) rotateY(0deg); }
    100% { transform: perspective(1000px) rotateY(360deg); }
  }
  @keyframes shimmer {
    0% { background-position: -100% 0; }
    100% { background-position: 200% 0; }
  }
`;

export default function Home() {
  return (
    <div>
      <style jsx global>
        {animationKeyframes}
      </style>
      <Hero />

      {/* Chief Guest Section */}
      <section className="py-16 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#1FA58A]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s" }}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#2e5b8e]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: "10s" }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#1FA58A] to-[#2e5b8e] drop-shadow-md transform hover:scale-105 transition-transform duration-300 relative" style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}>
              Chief Guest
            </h2>
            <div className="h-1 w-24 mx-auto mt-3 bg-gradient-to-r from-[#1FA58A] to-[#2e5b8e] rounded-full" style={{ animation: "pulse 2s infinite" }}></div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(31,165,138,0.3)] mb-8 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(31,165,138,0.4)] relative group" style={{ animation: "float 6s ease-in-out infinite" }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1FA58A] to-[#2e5b8e] rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#1FA58A] rounded-tl-2xl z-20 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-16 h-16 b-t-4 border-r-4 border-[#2e5b8e] rounded-tr-2xl z-20 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#2e5b8e] rounded-bl-2xl z-20 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#1FA58A] rounded-br-2xl z-20 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1FA58A]/5 to-[#2e5b8e]/5 z-20 mix-blend-overlay pointer-events-none rounded-2xl"></div>
              <div className="relative p-1 bg-white rounded-2xl z-10" style={{ transform: "perspective(1000px) rotateX(2deg)", transformStyle: "preserve-3d" }}>
                <img src="/chiefguest1.png" alt="Chief Guest" className="w-full h-auto object-cover rounded-xl transform transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/80 to-white/0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 z-30" style={{ backgroundSize: "200% 200%", animation: "shimmer 1.5s linear infinite" }}></div>
              </div>
            </div>

            <div className="transform hover:scale-105 transition-all duration-300 bg-white/50 backdrop-blur-sm py-4 px-6 rounded-xl shadow-md hover:shadow-lg" style={{ animation: "float 5s ease-in-out infinite 0.5s" }}>
              <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1FA58A] to-[#2e5b8e] mb-3 drop-shadow-sm" style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}>
                Shri. Subodh Uniyal
              </h3>
              <p className="text-[#2e5b8e] text-lg max-w-2xl mx-auto font-medium">
                Hon&apos;ble Cabinet Minister Government of Uttarakhand
              </p>
              <p className="text-[#2e5b8e] text-[10px] max-w-xl ml-auto font-medium text-right">
                **Written confirmation Awaited.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 relative bg-[#f2edeb]">
        <div className="absolute inset-0 bg-black/5 pointer-events-none" style={{ zIndex: 1 }} />
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-[#2e5b8e] to-[#0096a0] text-transparent bg-clip-text leading-tight">
              Recognition Categories
            </h2>
            <p className="text-sm md:text-xl max-w-3xl mx-auto mt-3 text-[#336699] font-medium leading-relaxed">
              Explore our recognition categories and find the perfect award for your achievements.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Link href="/categories/private-healthcare" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 h-full flex flex-col">
                <div className="h-48 bg-gradient-to-r from-[#2e5b8e] to-[#60afaa] p-6 flex items-center justify-center">
                  <img src="./private-healthcare.png" alt="Private Healthcare" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-[#2e5b8e] mb-2">Private Healthcare Recognition</h3>
                  <p className="text-sm text-gray-600 mb-4">Honoring excellence in private healthcare services and institutions.</p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-[#60afaa] font-medium group-hover:text-[#015D67]">
                      Explore Category <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/categories/ayush-health" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 h-full flex flex-col">
                <div className="h-48 bg-gradient-to-r from-[#60afaa] to-[#0096a0] p-6 flex items-center justify-center">
                  <img src="./ayushman.png" alt="AYUSH Health Services" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-[#2e5b8e] mb-2">AYUSH Health Services</h3>
                  <p className="text-sm text-gray-600 mb-4">Celebrating excellence in Ayurveda, Yoga, Unani, Siddha, and Homeopathy services.</p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-[#60afaa] font-medium group-hover:text-[#015D67]">
                      Explore Category <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/categories/healthcare-manufacturers" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 h-full flex flex-col">
                <div className="h-48 bg-gradient-to-r from-[#0096a0] to-[#2e5b8e] p-6 flex items-center justify-center">
                  <img src="./HealthcareManufacturers.png" alt="Healthcare Manufacturers" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-[#2e5b8e] mb-2">Healthcare Manufacturers</h3>
                  <p className="text-sm text-gray-600 mb-4">Recognizing innovation and excellence in healthcare manufacturing and production.</p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-[#60afaa] font-medium group-hover:text-[#015D67]">
                      Explore Category <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/categories/Distinguished-Achievers'-Citations" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 h-full flex flex-col">
                <div className="h-48 bg-gradient-to-r from-[#2e5b8e] to-[#60afaa] p-6 flex items-center justify-center">
                  <img src="./jury.png" alt="Distinguished-Achievers'-Citations" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-[#2e5b8e] mb-2">Distinguished Achievers Citations</h3>
                  <p className="text-sm text-gray-600 mb-4">Special recognitions awarded by our distinguished jury for outstanding achievements.</p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-[#60afaa] font-medium group-hover:text-[#015D67]">
                      Explore Category <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    <JewelryMembersSlider />   {/* ← add this */}
      <AboutSection />
      <FAQSection />
    </div>
  );
}