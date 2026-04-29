"use client";

import React, { useEffect, useState } from "react";

const PopupModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative bg-white border-4 border-green-800 rounded-xl shadow-xl w-full max-w-md mx-4 p-6 md:p-8">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-green-900 hover:text-red-600 transition-colors duration-200 text-2xl font-bold focus:outline-none"
          onClick={() => setShow(false)}
          aria-label="Close"
        >
          ×
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-sm font-semibold text-green-700 tracking-wider uppercase">
            Celebrating Excellence
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-green-900 mt-1">
            Excellence Award Registration
          </h2>
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          <p className="text-lg text-green-900 font-medium leading-relaxed">
            <span className="text-3xl font-extrabold text-red-600">Hurry!</span>{" "}
            Nominations for the <span className="font-semibold">Excellence Award</span> are open till{" "}
            <span className="underline font-semibold text-black">10th Sept</span>.
          </p>

          <p className="text-sm text-gray-700">
            Final event will be held on{" "}
            <span className="text-green-800 font-semibold">26th September</span>.
          </p>

          <p className="text-sm text-gray-700">
            Showcase your achievements and be recognized among the best. Limited entries only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
