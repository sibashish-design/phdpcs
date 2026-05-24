"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────
interface JuryMember {
  name: string;
  designation: string;
  organisation: string;
  image: string;
}

interface CardConfig {
  translateX: string;
  scale: number;
  opacity: number;
  zIndex: number;
  width: number;
  height: number;
  isCenter: boolean;
  isAdjacent: boolean;
}

// ── Data ───────────────────────────────────────────────────────
const juryMembers: JuryMember[] = [
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
  {
    name: "Dr. Nischal Naveen",
    designation: "Chairman",
    organisation: "Voice of Healthcare",
    image: "/jurymember7.png",
  }
];

const TOTAL = juryMembers.length;

function getCardConfig(pos: number): CardConfig {
  const isCenter = pos === 2;
  const isAdjacent = pos === 1 || pos === 3;
  const translateXValues = ["-220px", "-120px", "0px", "120px", "220px"];
  return {
    translateX: translateXValues[pos],
    scale: isCenter ? 1 : isAdjacent ? 0.82 : 0.64,
    opacity: isCenter ? 1 : isAdjacent ? 0.65 : 0.28,
    zIndex: isCenter ? 20 : isAdjacent ? 10 : 1,
    width: isCenter ? 260 : isAdjacent ? 200 : 155,
    height: isCenter ? 340 : isAdjacent ? 270 : 210,
    isCenter,
    isAdjacent,
  };
}

// ── Component ──────────────────────────────────────────────────
const JewelryMembersSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(((index % TOTAL) + TOTAL) % TOTAL);
      setTimeout(() => setAnimating(false), 500);
    },
    [animating]
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [next, isPaused]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 40) {
      if (delta > 0) next();
      else prev();
    }
  };

  // 5-card positions: far-left, left, center, right, far-right
  const positions = [
    (current - 2 + TOTAL) % TOTAL,
    (current - 1 + TOTAL) % TOTAL,
    current,
    (current + 1) % TOTAL,
    (current + 2) % TOTAL,
  ];

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #062a24 0%, #0a3d35 50%, #082030 100%)",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 50%, rgba(31,165,138,0.15) 0%, transparent 50%), radial-gradient(circle at 85% 20%, rgba(46,91,142,0.15) 0%, transparent 50%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1FA58A]/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(31,165,138,0.15)",
              color: "#4dcfba",
              border: "1px solid rgba(31,165,138,0.25)",
              backdropFilter: "blur(8px)",
            }}
          >
            Distinguished Panel
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Meet Our Jury
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#1FA58A]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#1FA58A]" />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#1FA58A]" />
          </div>
          <p className="text-white/45 text-sm max-w-md mx-auto">
            A distinguished panel of experts shaping excellence in healthcare
            and pharma.
          </p>
        </div>

        {/* ── DESKTOP: 5-card fan ── */}
        <div
          className="hidden md:block relative h-[380px] w-full"
          style={{ perspective: "1200px" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {positions.map((memberIdx, pos) => {
              const c = getCardConfig(pos);
              return (
                <div
                  key={`${pos}-${memberIdx}`}
                  onClick={() => !c.isCenter && goTo(memberIdx)}
                  className="absolute rounded-2xl overflow-hidden"
                  style={{
                    width: `${c.width}px`,
                    height: `${c.height}px`,
                    transform: `translateX(${c.translateX}) scale(${c.scale})`,
                    opacity: c.opacity,
                    zIndex: c.zIndex,
                    cursor: c.isCenter ? "default" : "pointer",
                    boxShadow: c.isCenter
                      ? "0 32px 80px rgba(0,0,0,0.5), 0 8px 24px rgba(31,165,138,0.15)"
                      : "0 8px 24px rgba(0,0,0,0.3)",
                    transition:
                      "all 0.5s cubic-bezier(0.34,1.2,0.64,1)",
                    willChange: "transform, opacity",
                  }}
                >
                  <img
                    src={juryMembers[memberIdx].image}
                    alt={juryMembers[memberIdx].name}
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: c.isCenter
                        ? "linear-gradient(to top, rgba(6,42,36,0.96) 0%, rgba(6,42,36,0.45) 42%, transparent 68%)"
                        : "linear-gradient(to top, rgba(6,42,36,0.92) 0%, rgba(6,42,36,0.2) 60%, transparent 100%)",
                    }}
                  />
                  {/* Text */}
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    {c.isCenter && (
                      <span
                        className="inline-block text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full mb-2"
                        style={{
                          background: "rgba(31,165,138,0.2)",
                          color: "#4dcfba",
                          border: "1px solid rgba(31,165,138,0.3)",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        Jury Member
                      </span>
                    )}
                    <h3
                      className="font-bold text-white leading-tight mb-0.5"
                      style={{
                        fontSize: c.isCenter
                          ? "15px"
                          : c.isAdjacent
                          ? "12px"
                          : "10px",
                      }}
                    >
                      {juryMembers[memberIdx].name}
                    </h3>
                    <p
                      style={{
                        fontSize: c.isCenter ? "11px" : "9px",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {juryMembers[memberIdx].designation}
                    </p>
                    <p
                      style={{
                        fontSize: c.isCenter ? "10px" : "8px",
                        color: "rgba(77,207,186,0.85)",
                      }}
                    >
                      {juryMembers[memberIdx].organisation}
                    </p>
                  </div>
                  {/* Active ring */}
                  {c.isCenter && (
                    <div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        boxShadow: "inset 0 0 0 1.5px rgba(31,165,138,0.5)",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Prev button */}
          <button
            onClick={prev}
            aria-label="Previous jury member"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(12px)",
              color: "white",
            }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Next jury member"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(12px)",
              color: "white",
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators — desktop */}
        <div className="hidden md:flex justify-center items-center gap-2 mt-10">
          {juryMembers.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                background:
                  i === current
                    ? "linear-gradient(90deg, #1FA58A, #2e5b8e)"
                    : "rgba(255,255,255,0.2)",
              }}
              aria-label={`Go to jury member ${i + 1}`}
            />
          ))}
        </div>
        <p
          className="hidden md:block text-center mt-3 text-xs"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          {current + 1} of {TOTAL}
        </p>

        {/* ── MOBILE: swipeable + tap thumbnails ── */}
        <div
          className="md:hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Main card */}
          <div className="flex justify-center mb-6">
            <div
              className="relative w-64 rounded-2xl overflow-hidden"
              style={{
                height: "320px",
                boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
                border: "1px solid rgba(31,165,138,0.25)",
              }}
            >
              <img
                src={juryMembers[current].image}
                alt={juryMembers[current].name}
                className="w-full h-full object-cover object-top transition-opacity duration-300"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(6,42,36,0.96) 0%, rgba(6,42,36,0.4) 42%, transparent 68%)",
                }}
              />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <span
                  className="inline-block text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full mb-2"
                  style={{
                    background: "rgba(31,165,138,0.2)",
                    color: "#4dcfba",
                    border: "1px solid rgba(31,165,138,0.3)",
                  }}
                >
                  Jury Member
                </span>
                <h3 className="font-bold text-white text-base leading-tight mb-0.5">
                  {juryMembers[current].name}
                </h3>
                <p className="text-white/70 text-xs">
                  {juryMembers[current].designation}
                </p>
                <p className="text-[11px]" style={{ color: "#4dcfba" }}>
                  {juryMembers[current].organisation}
                </p>
              </div>
            </div>
          </div>

          {/* Tap-to-navigate thumbnails */}
          <div className="flex items-center justify-center gap-2.5">
            {juryMembers.map((m, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300"
                style={{
                  width: i === current ? "54px" : "42px",
                  height: i === current ? "54px" : "42px",
                  border:
                    i === current
                      ? "2px solid #1FA58A"
                      : "2px solid rgba(255,255,255,0.12)",
                  opacity: i === current ? 1 : 0.5,
                  boxShadow:
                    i === current
                      ? "0 4px 16px rgba(31,165,138,0.4)"
                      : "none",
                }}
                aria-label={`Go to ${m.name}`}
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover object-top"
                />
              </button>
            ))}
          </div>

          <p
            className="text-center mt-4 text-[11px]"
            style={{ color: "rgba(255,255,255,0.22)" }}
          >
            Swipe or tap thumbnail to navigate
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default JewelryMembersSlider;