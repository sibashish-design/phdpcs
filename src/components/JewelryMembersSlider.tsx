"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const juryMembers = [
  {
    name: "Mr. Somnath",
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
  const [isPaused, setIsPaused] = useState(false);
  const total = juryMembers.length;

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent((index + total) % total);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating, total]
  );

  const prev = () => goTo(current - 1);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  // Returns indices for left-side, center, and right-side cards
  const getVisible = () => [
    (current - 1 + total) % total,
    current,
    (current + 1) % total,
  ];

  const visible = getVisible();

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f0fafa 0%, #e8f4f3 50%, #f5f9ff 100%)" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(31,165,138,0.06) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(46,91,142,0.06) 0%, transparent 50%)`,
        }}
      />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1FA58A] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{
              background: "linear-gradient(135deg, rgba(31,165,138,0.12), rgba(46,91,142,0.12))",
              color: "#1FA58A",
              border: "1px solid rgba(31,165,138,0.2)",
            }}
          >
            Distinguished Panel
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: "#015D67", letterSpacing: "-0.02em" }}
          >
            Meet Our Jury Members
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#1FA58A]" />
            <div className="w-2 h-2 rounded-full bg-[#1FA58A]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#1FA58A]" />
          </div>
          <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed">
            A distinguished panel of experts shaping excellence in healthcare and pharma.
          </p>
        </div>

        {/* Slider area */}
        <div className="relative flex items-center justify-center">

          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute left-0 z-30 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 group"
            style={{
              background: "white",
              boxShadow: "0 4px 20px rgba(1,93,103,0.15)",
              border: "1px solid rgba(1,93,103,0.12)",
            }}
            aria-label="Previous"
          >
            <ChevronLeft
              className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-0.5"
              style={{ color: "#015D67" }}
            />
          </button>

          {/* Cards track */}
          <div className="flex items-center justify-center gap-5 w-full px-14">
            {visible.map((idx, pos) => {
              const member = juryMembers[idx];
              const isCenter = pos === 1;

              return (
                <div
                  key={`${idx}-${pos}`}
                  onClick={() => !isCenter && goTo(idx)}
                  className="relative flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-500"
                  style={{
                    width: isCenter ? "300px" : "220px",
                    height: isCenter ? "380px" : "300px",
                    cursor: isCenter ? "default" : "pointer",
                    opacity: isCenter ? 1 : 0.7,
                    transform: isCenter ? "scale(1)" : "scale(0.92)",
                    boxShadow: isCenter
                      ? "0 24px 60px rgba(1,93,103,0.22), 0 8px 24px rgba(1,93,103,0.12)"
                      : "0 8px 24px rgba(0,0,0,0.08)",
                    background: "#fff",
                    zIndex: isCenter ? 10 : 5,
                  }}
                >
                  {/* Photo */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700"
                    style={{ transform: isCenter ? "scale(1.03)" : "scale(1)" }}
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: isCenter
                        ? "linear-gradient(to top, rgba(1,45,55,0.92) 0%, rgba(1,45,55,0.5) 40%, transparent 70%)"
                        : "linear-gradient(to top, rgba(1,45,55,0.85) 0%, rgba(1,45,55,0.3) 50%, transparent 75%)",
                    }}
                  />

                  {/* Text info */}
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    {isCenter && (
                      <div
                        className="inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-2"
                        style={{
                          background: "rgba(31,165,138,0.3)",
                          color: "#7DDFCA",
                          border: "1px solid rgba(31,165,138,0.3)",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        Jury Member
                      </div>
                    )}
                    <h3
                      className="font-bold leading-tight text-white mb-1"
                      style={{ fontSize: isCenter ? "17px" : "13px" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="leading-tight font-medium"
                      style={{
                        fontSize: isCenter ? "12px" : "10px",
                        color: "rgba(255,255,255,0.75)",
                      }}
                    >
                      {member.designation}
                    </p>
                    <p
                      className="leading-tight mt-0.5"
                      style={{
                        fontSize: isCenter ? "11px" : "9px",
                        color: "rgba(125,223,202,0.85)",
                      }}
                    >
                      {member.organisation}
                    </p>
                  </div>

                  {/* Active ring */}
                  {isCenter && (
                    <div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{ boxShadow: "inset 0 0 0 2px rgba(31,165,138,0.6)" }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-0 z-30 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 group"
            style={{
              background: "white",
              boxShadow: "0 4px 20px rgba(1,93,103,0.15)",
              border: "1px solid rgba(1,93,103,0.12)",
            }}
            aria-label="Next"
          >
            <ChevronRight
              className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
              style={{ color: "#015D67" }}
            />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center items-center gap-2.5 mt-10">
          {juryMembers.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                background:
                  i === current
                    ? "linear-gradient(90deg, #1FA58A, #2e5b8e)"
                    : "rgba(1,93,103,0.2)",
              }}
              aria-label={`Go to member ${i + 1}`}
            />
          ))}
        </div>

        {/* Member count */}
        <p className="text-center mt-4 text-xs font-medium" style={{ color: "rgba(1,93,103,0.4)" }}>
          {current + 1} / {total}
        </p>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2e5b8e]/20 to-transparent" />
    </section>
  );
};

export default JewelryMembersSlider;