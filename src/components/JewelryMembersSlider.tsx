"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import EventDetails from "./EventDetails";

const members = [
  {
    id: 1,
    name: "Mr. SOMNATH",
    title: "Deputy Director,UN Global Compact Network India",
    image: "./jurymember1.png",
  },
  {
    id: 2,
    name: "Dr. (Prof.) Rajendra Dobhal",
    title: "Vice-Chancellor,Swami Rama Himalayan University",
    image: "./jurymember3.png",
  },
  {
    id: 3,
    name: "UNDP",
    title: "United Nations Development Programme",
    image: "./jurymember4.png",
  },
  {
    id: 4,
    name: "Shri G N Singh",
    title: "Advisor to Hon’ble CM, UP & Former-DCGI",
    image: "./jurymember5.png",
  },
  {
    id: 5,
    name: "Dr. Narender Ahooja ",
    title: "Ex Drug Controller Haryana",
    image: "/jurymember6.png",
  },
];

export default function JewelryMembersSlider() {
  return (
    <section className="py-12 bg-gradient-to-br from-[#145C52] to-[#0096a0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">
            Meet Our Jury Members
          </h2>
          <p className="text-lg mt-4 text-emerald-100">
            A team of experts shaping elegance and excellence.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          loop={true}
        >
          {members.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:scale-105 transition duration-300 flex flex-col">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-contain bg-white"
                />

                <div className="p-4 text-center flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-sm text-pink-500 mt-2">{member.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export function JewelryMembersWithEvent() {
  return (
    <>
      <JewelryMembersSlider />
      <EventDetails />
    </>
  );
}
