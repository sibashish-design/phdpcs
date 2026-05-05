import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speakers | PHDCC Pharma",
  description:
    "Distinguished speakers and industry experts at PHDCC Pharma events",
};

const speakers = [
  
  {
    id: 1,
    name: "Mr. Vineet Kumar Gupta",
    title: "Co-Chair PHDCCI Uttarakhand Chapter",
    bio: "Managing Director G B Equipment System LTD",
    image: "/vineetkumar1.png",
  },
  {
    id: 3,
    name: "Mr. Sumit Agarwal",
    title: "Co-Chair PHDCCI and Event Chair",
    bio: "Director Axa Parenterals Ltd.",
    image: "/speaker003.png",
  },
  {
    id: 6, // ✅ fixed unique id
    name: "Dr. Karthik Ramesh",
    title: "Director, Dr. Hiremath Global",
    bio: "",
    image: "",
  },
  {
    id: 7, // ✅ fixed unique id
    name: "Dr Vijay Kumar Jogdande (IAS)",
    title: "Director, Ayurvedic & Unani Service, Uttarakhand",
    bio: "",
    image: "/vijaybros.png",
  },
];

const SpeakerPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1FA58A] to-[#145C52]">
            Distinguished Speakers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our esteemed speakers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
            >
              <div className="relative w-full">
                {speaker.image ? (
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={500}
                    height={500}
                    className="object-contain"
                  />
                ) : (
                  <div className="w-full h-64 flex items-center justify-center bg-gray-200 text-gray-500">
                    No Image
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {speaker.name}
                </h3>
                <p className="text-sm font-medium text-[#1FA58A] mb-4">
                  {speaker.title}
                </p>
                <p className="text-gray-600">{speaker.bio || "—"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerPage;
