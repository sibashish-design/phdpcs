"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const juryMembers = [
  {
    name: "Mr. SOMNATH",
    designation: "Deputy Director",
    organisation: "UN Global Compact Network India",
    image: "/jurymember1.png",
  },
  {
    name: "Dr. (Prof.) Rajendra Dobhal",
    designation: "Vice-Chancellor",
    organisation: "Swami Rama Himalayan University",
    image: "/jurymember3.png",
  },
  {
    name: "UNDP",
    designation: "United Nations Development Programme",
    organisation: "United Nations",
    image: "/jurymember4.png",
  },
  {
    name: "Shri G N Singh",
    designation: "Advisor to Hon'ble CM, UP",
    organisation: "Former-DCGI",
    image: "/jurymember5.png",
  },
  {
    name: "Dr. Narender Ahooja",
    designation: "Ex Drug Controller",
    organisation: "Haryana",
    image: "/jurymember6.png",
  },
];

const JewelryMembersSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = juryMembers.length;

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent((index + total) % total);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating, total]
  );

  const prev = () => goTo(current - 1);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  // Visible cards: show 1 on mobile, 3 on desktop
  const getVisible = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((current + i + total) % total);
    }
    return indices;
  };

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#f8fffe] to-[#edf7f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#60afaa] uppercase mb-2">
            Distinguished Panel
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#015D67] mb-3">
            Meet Our Jury Members
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#1FA58A] to-[#2e5b8e] rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-gray-500 mt-4 max-w-xl mx-auto">
            A team of experts shaping elegance and excellence in healthcare and pharma.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">

          {/* Desktop: show 3 cards side by side */}
          <div className="hidden sm:flex items-center justify-center gap-6">
            {getVisible().map((idx, pos) => {
              const member = juryMembers[idx];
              const isCenter = pos === 1;
              return (
                <div
                  key={idx}
                  onClick={() => !isCenter && goTo(idx)}
                  className={`
                    relative flex flex-col items-center rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer
                    ${isCenter
                      ? "w-72 shadow-2xl scale-100 z-10 bg-white"
                      : "w-56 shadow-md scale-90 opacity-60 hover:opacity-80 bg-white/80"
                    }
                  `}
                >
                  {/* Image */}
                  <div className={`w-full overflow-hidden ${isCenter ? "h-64" : "h-48"} transition-all duration-500`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Gradient overlay on image bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#015D67]/90 to-transparent" />

                  {/* Text */}
                  <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                    <h3 className={`font-bold leading-tight mb-0.5 ${isCenter ? "text-base" : "text-sm"}`}>
                      {member.name}
                    </h3>
                    <p className={`text-white/80 leading-tight ${isCenter ? "text-xs" : "text-[10px]"}`}>
                      {member.designation}
                    </p>
                    <p className={`text-white/60 leading-tight ${isCenter ? "text-[11px]" : "text-[9px]"}`}>
                      {member.organisation}
                    </p>
                  </div>

                  {/* Active border */}
                  {isCenter && (
                    <div className="absolute inset-0 rounded-2xl ring-2 ring-[#1FA58A] pointer-events-none" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile: single card */}
          <div className="sm:hidden flex justify-center">
            <div className="relative w-72 rounded-2xl overflow-hidden shadow-2xl bg-white">
              <div className="h-72 w-full overflow-hidden">
                <img
                  src={juryMembers[current].image}
                  alt={juryMembers[current].name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#015D67]/90 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                <h3 className="font-bold text-base leading-tight mb-0.5">
                  {juryMembers[current].name}
                </h3>
                <p className="text-white/80 text-xs leading-tight">
                  {juryMembers[current].designation}
                </p>
                <p className="text-white/60 text-[11px] leading-tight">
                  {juryMembers[current].organisation}
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-2 ring-[#1FA58A] pointer-events-none" />
            </div>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2.5 hover:bg-[#015D67] hover:text-white text-[#015D67] transition-all duration-300 border border-[#015D67]/10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2.5 hover:bg-[#015D67] hover:text-white text-[#015D67] transition-all duration-300 border border-[#015D67]/10"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {juryMembers.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-[#015D67] w-6 h-2.5"
                  : "bg-[#015D67]/25 w-2.5 h-2.5 hover:bg-[#015D67]/50"
              }`}
              aria-label={`Go to member ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JewelryMembersSlider;