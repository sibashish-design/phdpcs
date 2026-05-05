"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Custom styles for the partners slider
const partnerSliderStyles = `
  .partners-slider .swiper-pagination-bullet {
    background-color: #1FA58A;
    opacity: 0.5;
    width: 10px;
    height: 10px;
  }
  
  .partners-slider .swiper-pagination-bullet-active {
    background-color: #1FA58A;
    opacity: 1;
  }
  
  .partners-slider .swiper-button-next,
  .partners-slider .swiper-button-prev {
    color: #1FA58A;
    background-color: rgba(255, 255, 255, 0.8);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  .partners-slider .swiper-button-next:after,
  .partners-slider .swiper-button-prev:after {
    font-size: 18px;
  }
  
  .partners-slider .swiper-button-next:hover,
  .partners-slider .swiper-button-prev:hover {
    background-color: rgba(255, 255, 255, 1);
  }
  
  .partners-slider .swiper-button-disabled {
    opacity: 0.35;
  }
`;

const PartnersPage = () => {
  return (
    <>
      <style jsx global>
        {partnerSliderStyles}
      </style>
      <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1FA58A] to-[#145C52]">
              Our 2025 Partners
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are proud to collaborate with leading organizations committed
              to advancing healthcare and pharmaceutical excellence
            </p>

            <div className="mt-10">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                className="partners-slider py-8 px-10"
              >
                {/* Uttrakhand Govt*/}
                <SwiperSlide>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center h-[280px]">
                    <h3 className="text-xl font-bold text-gray-800">
                      Supported by Ayurvedic & Unani Services Government of
                      Uttarakhand
                    </h3>
                    <div className="h-40 w-full flex items-center justify-center mb-4">
                      <img
                        src="/uttragovt.png"
                        alt="UNGCNI"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                
                {/* GB Equipment Partner */}
                <SwiperSlide>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center h-[280px]">
                    <h3 className="text-xl font-bold text-gray-800">
                      Platinum Partner
                    </h3>
                    <div className="h-40 w-full flex items-center justify-center mb-4">
                      <img
                        src="/gbequipment.png"
                        alt="GB Equipment"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>

                {/* Diamond Partner - Axaprental */}
                <SwiperSlide>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center h-[280px]">
                    <h3 className="text-xl font-bold text-gray-800">
                      Diamond Partner
                    </h3>
                    <div className="h-40 w-full flex items-center justify-center mb-4">
                      <img
                        src="/Daimond1.png"
                        alt="Axaprental"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center h-[280px]">
                    <h3 className="text-xl font-bold text-gray-800">
                      Silver Partner
                    </h3>
                    <div className="h-40 w-full flex items-center justify-center mb-4">
                      <img
                        src="/silver2.png"
                        alt="Multani Pharma"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>

                {/* Vivo Partner */}
                <SwiperSlide>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center h-[280px]">
                    <h3 className="text-xl font-bold text-gray-800">
                      Supported By
                    </h3>
                    <div className="h-40 w-full flex items-center justify-center mb-4">
                      <img
                        src="/Vivopart.png"
                        alt="Vivo"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              <span className="inline-block pb-2 border-b-2 border-[#1FA58A]">
                Partnership Benefits
              </span>
            </h2>

            <div className="overflow-x-auto bg-gradient-to-br from-[#e6f4f5] to-[#cfe9eb] p-6 rounded-2xl shadow-xl border border-[#0f6f73]/20">
              <table className="w-full border border-[#0f6f73]/30 text-[#0a2540]">
                <thead>
  <tr className="text-sm font-semibold">

    <th className="p-4 border border-[#0f6f73]/20 text-left bg-[#e6f4f5]">
      Sr. No.
    </th>

    <th className="p-4 border border-[#0f6f73]/20 text-middle bg-[#e6f4f5]">
      Deliverables
    </th>

    {/* Platinum */}
    <th className="relative p-4 text-white border border-[#0f6f73]/30 bg-[#4b6c3e] overflow-hidden">

  <span className="relative z-10">
    Platinum <br /> INR 7 Lakh
  </span>

  <span className="shine shine-delay-1"></span>

</th>

    {/* Diamond */}
    <th className="relative p-4 text-white border border-[#0f6f73]/20 bg-[#a30000] overflow-hidden group">
      <span className="relative z-10">
        Diamond <br /> INR 5 Lakh
      </span>
      <span className="shine shine-delay-2"></span>
    </th>

    {/* Gold */}
    <th className="relative p-4 text-white border border-[#0f6f73]/20 bg-[#2e5b8e] overflow-hidden group">
      <span className="relative z-10">
        Gold <br /> INR 3 Lakh
      </span>
      <span className="shine shine-delay-3"></span>
    </th>

    {/* Silver */}
    <th className="relative p-4 text-white border border-[#0f6f73]/20 bg-[#d97706] overflow-hidden group rounded-tr-xl">
      <span className="relative z-10">
        Silver <br /> INR 2 Lakh
      </span>
      <span className="shine shine-delay-4"></span>
    </th>

  </tr>
</thead>
                <tbody>
                  <tr className="border-b border-[#0f6f73]/10 hover:bg-[#0f6f73]/5 transition">
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      1
                    </td>
                    <td className="p-4 text-left border border-[#0f6f73]/20 text-[#0a2540]">
                      <strong>Speaker Invite</strong> to the CEO/MD of the
                      company
                      <br />
                      In the Inaugural Session
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-green-600 text-2xl">&#10003;</span>
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-green-600 text-2xl">&#10003;</span>
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]"></td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]"></td>
                  </tr>
                  <tr className="border-b border-[#0f6f73]/10 hover:bg-[#0f6f73]/5 transition">
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      2
                    </td>
                    <td className="p-4 text-left border border-[#0f6f73]/20 text-[#0a2540]">
                      <strong>Corporate Video Presentation</strong>-<br />
                      Promotional AV to be played during the breaks.
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-green-600 text-2xl">&#10003;</span>
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-green-600 text-2xl">&#10003;</span>
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]"></td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]"></td>
                  </tr>
                  <tr className="border-b border-[#0f6f73]/10 hover:bg-[#0f6f73]/5 transition">
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      3
                    </td>
                    <td className="p-4 text-left border border-[#0f6f73]/20 text-[#0a2540]">
                      <strong>Publicity Material of the Organization</strong>:
                      <br />
                      Company brochure & publicity material to be part of
                      Delegate Kit
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-green-600 text-2xl">&#10003;</span>
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-green-600 text-2xl">&#10003;</span>
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-[#22c55e] text-xl font-bold">✓</span>
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]"></td>
                  </tr>
                  <tr className="border-b border-[#0f6f73]/10 hover:bg-[#0f6f73]/5 transition">
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      4
                    </td>
                    <td className="p-4 text-left border border-[#0f6f73]/20 text-[#0a2540]">
                      <strong>Acknowledgement of Association</strong>-Pre and
                      <br />
                      During the Event
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-[#22c55e] text-xl font-bold">✓</span>
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-[#22c55e] text-xl font-bold">✓</span>
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-[#22c55e] text-xl font-bold">✓</span>
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-[#22c55e] text-xl font-bold">✓</span>
                    </td>
                  </tr>
                  <tr className="border-b border-[#0f6f73]/10 hover:bg-[#0f6f73]/5 transition">
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      5
                    </td>
                    <td className="p-4 text-left border border-[#0f6f73]/20 text-[#0a2540]">
                      <strong>Prominent Organization Branding</strong>{" "}
                      (Strategic
                      <br />
                      Logo displayed in Backdrop, Thank You
                      <br />
                      Sponsor Standees & E-mailers)
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-[#22c55e] text-xl font-bold">✓</span>
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-[#22c55e] text-xl font-bold">✓</span>
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-[#22c55e] text-xl font-bold">✓</span>
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-[#22c55e] text-xl font-bold">✓</span>
                    </td>
                  </tr>
                  <tr className="border-b border-[#0f6f73]/10 hover:bg-[#0f6f73]/5 transition">
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      6
                    </td>
                    <td className="p-4 text-left border border-[#0f6f73]/20 text-[#0a2540]">
                      <strong>
                        Individual Promotional Display of the Organization
                      </strong>{" "}
                      (Individual Company standees
                      <br />
                      to be displayed at the reception of Venue &<br />
                      to be bought by the organization on the day of event)
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      3 Standees
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      2 Standees
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      1 Standee
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      1 Standee
                    </td>
                  </tr>
                  <tr className="border-b border-[#0f6f73]/10 hover:bg-[#0f6f73]/5 transition">
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      7
                    </td>
                    <td className="p-4 text-left border border-[#0f6f73]/20 text-[#0a2540]">
                      <strong>Print Media Branding:</strong> Colored Company
                      <br />
                      Advertisement in PHDCCI&apos;s widely circulated
                      <br />
                      monthly bulletin
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      1 Full Page
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      Half Page
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      Qtr page
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]"></td>
                  </tr>
                  <tr className="border-b border-[#0f6f73]/10 hover:bg-[#0f6f73]/5 transition">
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      8
                    </td>
                    <td className="p-4 text-left border border-[#0f6f73]/20 text-[#0a2540]">
                      <strong>Social Media Branding</strong> :Logo branding on
                      social
                      <br />
                      media handles of Pharma and Healthcare
                      <br />
                      Samman and Conclave 2025
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-[#22c55e] text-xl font-bold">✓</span>
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-[#22c55e] text-xl font-bold">✓</span>
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-[#22c55e] text-xl font-bold">✓</span>
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-[#22c55e] text-xl font-bold">✓</span>
                    </td>
                  </tr>
                  <tr className="border-b border-[#0f6f73]/10 hover:bg-[#0f6f73]/5 transition">
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      9
                    </td>
                    <td className="p-4 text-left border border-[#0f6f73]/20 text-[#0a2540]">
                      <strong>Networking Table Space</strong> at the Pharma and
                      <br />
                      Healthcare Samman and Conclave 2025 Venue
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-[#22c55e] text-xl font-bold">✓</span>
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      <span className="text-[#22c55e] text-xl font-bold">✓</span>
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]"></td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]"></td>
                  </tr>
                  <tr className="border-b border-[#0f6f73]/10 hover:bg-[#0f6f73]/5 transition">
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      10
                    </td>
                    <td className="p-4 text-left border border-[#0f6f73]/20 text-[#0a2540]">
                      <strong>Complimentary Delegate Invitations</strong>
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      5 Delegates
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      2 Delegates
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      2 Delegates
                    </td>
                    <td className="p-4 text-center border border-[#0f6f73]/20 text-[#0a2540]">
                      1 Delegate
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Become a Partner
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-100">
              <p className="text-gray-600 mb-8">
                Join our network of partners and sponsors to support innovation
                and excellence in the pharmaceutical and healthcare sectors.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-[#4b6c3e]/10 to-[#4b6c3e]/20 p-6 rounded-xl text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Platinum Partner
                  </h3>
                  <p className="text-[#4b6c3e] font-bold">₹7,00,000</p>
                </div>

                <div className="bg-gradient-to-br from-[#a30000]/10 to-[#a30000]/20 p-6 rounded-xl text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Diamond Partner
                  </h3>
                  <p className="text-[#a30000] font-bold">₹5,00,000</p>
                </div>

                <div className="bg-gradient-to-br from-[#2e5b8e]/10 to-[#2e5b8e]/20 p-6 rounded-xl text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Gold Partner
                  </h3>
                  <p className="text-[#2e5b8e] font-bold">₹3,00,000</p>
                </div>

                <div className="bg-gradient-to-br from-[#d97706]/10 to-[#d97706]/20 p-6 rounded-xl text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Silver Partner
                  </h3>
                  <p className="text-[#d97706] font-bold">₹2,00,000</p>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-gradient-to-r from-[#1FA58A] to-[#145C52] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
                  Contact Us for Partnership
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;
