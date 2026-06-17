"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const partnerSliderStyles = `
  .partners-slider {
    padding-bottom: 48px !important;
  }
  .partners-slider .swiper-pagination {
    bottom: 0px;
  }
  .partners-slider .swiper-pagination-bullet {
    background-color: #d1d5db;
    opacity: 1;
    width: 6px;
    height: 6px;
    transition: all 0.3s ease;
  }
  .partners-slider .swiper-pagination-bullet-active {
    background-color: #1FA58A;
    width: 22px;
    border-radius: 3px;
  }
  .partners-slider .swiper-button-next,
  .partners-slider .swiper-button-prev {
    color: #1FA58A;
    background: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 4px 14px rgba(0,0,0,0.12);
    top: calc(50% - 24px);
  }
  .partners-slider .swiper-button-next:after,
  .partners-slider .swiper-button-prev:after {
    font-size: 13px;
    font-weight: 900;
  }
  .partners-slider .swiper-button-next:hover,
  .partners-slider .swiper-button-prev:hover {
    background: #1FA58A;
    color: white;
    box-shadow: 0 6px 18px rgba(31,165,138,0.35);
  }
  .partners-slider .swiper-button-disabled {
    opacity: 0.3;
    pointer-events: none;
  }
  .partners-slider .swiper-button-next {
    right: -8px;
  }
  .partners-slider .swiper-button-prev {
    left: -8px;
  }
  .partner-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .partner-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(31,165,138,0.15);
  }

  @media (max-width: 640px) {
    .partners-slider .swiper-button-next,
    .partners-slider .swiper-button-prev {
      display: none;
    }
  }
`;

const assocPartners = [
  {
    label: "Association Partner",
    labelColor: "#1FA58A",
    borderColor: "#1FA58A",
    src: "/fope.png",
    alt: "FOPE",
    name: "Federation Of Pharma Entrepreneurs (FOPE)",
  },
  {
    label: "Association Partner",
    labelColor: "#1FA58A",
    borderColor: "#1FA58A",
    src: "/DMA-1.png",
    alt: "DMAI",
    name: "Drug Manufacturers Association of India (DMAI)",
  },
  {
    label: "Association Partner",
    labelColor: "#1FA58A",
    borderColor: "#1FA58A",
    src: "/pharmaceutical manufacturer's association, roorkee.png",
    alt: "PHARMA",
    name: "Pharmaceutical Manufacturer's Association",
  },
  
  {
    label: "Association Partner",
    labelColor: "#145C52",
    borderColor: "#145C52",
    src: "/aimed.png",
    alt: "AIMED",
    name: "AIMED",
  },
  {
    label: "Platinum Partner",
    labelColor: "#4b6c3e",
    borderColor: "#4b6c3e",
    src: "/gbequipment.png",
    alt: "GB Equipment",
    name: "GB Equipment",
  },
  {
    label: "Academic Partner",
    labelColor: "#4b6c3e",
    borderColor: "#4b6c3e",
    src: "/DIT Uni.jpeg",
    alt: "DIT University",
    name: "DIT University",
  },
  {
    label: "Silver Partner",
    labelColor: "#4b6c3e",
    borderColor: "#4b6c3e",
    src: "/Walter Bushnell.jpeg",
    alt: "Walter Bushnell",
    name: "Walter Bushnell",
  },
  {
    label: "Silver Partner",
    labelColor: "#4b6c3e",
    borderColor: "#4b6c3e",
    src: "/KSS.jpeg",
    alt: "Karoli Staffing Solutions Pvt Ltd",
    name: "Karoli Staffing Solutions Pvt Ltd",
  },
  {
    label: "Silver Partner",
    labelColor: "#4b6c3e",
    borderColor: "#4b6c3e",
    src: "/AXA.jpg",
    alt: "Karoli Staffing Solutions Pvt Ltd",
    name: "Karoli Staffing Solutions Pvt Ltd",
  },

const partners2025 = [
  {
    label: "Supported by Ayurvedic & Unani Services Govt. of Uttarakhand",
    src: "/uttragovt.png",
    alt: "Uttarakhand Govt",
  },
  {
    label: "Platinum Partner",
    src: "/gbequipment.png",
    alt: "GB Equipment",
  },
  {
    label: "Diamond Partner",
    src: "/Daimond1.png",
    alt: "Axaprental",
  },
  {
    label: "Silver Partner",
    src: "/silver2.png",
    alt: "Multani Pharma",
  },
  {
    label: "Supported By",
    src: "/Vivopart.png",
    alt: "Vivo",
  },
];

const SectionHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#1FA58A] to-[#145C52]">
      {title}
    </h2>
    <div className="flex items-center justify-center gap-2 mb-3">
      <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#1FA58A]" />
      <div className="h-1.5 w-8 rounded-full bg-[#1FA58A]" />
      <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#1FA58A]" />
    </div>
    {subtitle && (
      <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
        {subtitle}
      </p>
    )}
  </div>
);

const PartnersPage = () => {
  return (
    <>
      <style>{partnerSliderStyles}</style>

      <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Our 2026 Partners ── */}
          <div className="mb-20">
            <SectionHeading
              title="Our 2026 Partners"
              subtitle="Proud to collaborate with leading organisations advancing pharma and healthcare excellence."
            />
        <div className="relative px-8 md:px-12"></div>
            <Swiper
  modules={[Autoplay, Pagination, Navigation]}
  autoplay={{ delay: 2800, disableOnInteraction: false }}
  spaceBetween={20}
  slidesPerView={1}
  breakpoints={{
    480: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  loop={true}
  pagination={{ clickable: true }}
  navigation={true}
  className="partners-slider py-6"
>
              {assocPartners.map((p, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="partner-card bg-white rounded-2xl shadow-md flex flex-col items-center p-6 mx-1"
                    style={{
                      borderTop: `4px solid ${p.borderColor}`,
                      minHeight: "280px",
                    }}
                  >
                    <span
                      className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                      style={{
                        color: p.labelColor,
                        backgroundColor: `${p.labelColor}18`,
                      }}
                    >
                      {p.label}
                    </span>
                    <div className="flex-1 w-full flex items-center justify-center mb-4">
                      <img
                        src={p.src}
                        alt={p.alt}
                        className="max-h-32 max-w-full object-contain"
                      />
                    </div>
                    <h3 className="text-sm font-bold text-gray-800 text-center leading-snug">
                      {p.name}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
  
          {/* ── Our 2025 Partners ── */}
          <div className="mb-20">
            <SectionHeading
              title="Our 2025 Partners"
              subtitle="We are grateful to our 2025 partners who made the Pharma & Healthcare Samman a success."
            />

            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{ delay: 3200, disableOnInteraction: false }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                480: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              loop={true}
              pagination={{ clickable: true }}
              navigation={true}
              className="partners-slider py-8 px-2 sm:px-10"
            >
              {partners2025.map((p, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="partner-card bg-white rounded-2xl shadow-md flex flex-col items-center p-6 mx-1"
                    style={{ minHeight: "260px", borderTop: "4px solid #1FA58A" }}
                  >
                    <div className="flex-1 w-full flex items-center justify-center mb-4">
                      <img
                        src={p.src}
                        alt={p.alt}
                        className="max-h-28 max-w-full object-contain"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-700 text-center leading-snug">
                      {p.label}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ── Partnership Benefits Table ── */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              <span className="inline-block pb-2 border-b-2 border-[#1FA58A]">
                Partnership Benefits
              </span>
            </h2>

            <div className="overflow-x-auto bg-gradient-to-br from-[#e6f4f5] to-[#cfe9eb] p-4 md:p-6 rounded-2xl shadow-xl border border-[#0f6f73]/20">
              <table className="w-full border border-[#0f6f73]/30 text-[#0a2540]">
                <thead>
                  <tr className="text-sm font-semibold">
                    <th className="p-4 border border-[#0f6f73]/20 text-left bg-[#e6f4f5]">
                      Sr. No.
                    </th>
                    <th className="p-4 border border-[#0f6f73]/20 text-left bg-[#e6f4f5]">
                      Deliverables
                    </th>
                    <th className="relative p-4 text-white border border-[#0f6f73]/30 bg-[#4b6c3e] overflow-hidden">
                      <span className="relative z-10">Platinum<br />INR 7 Lakh</span>
                      <span className="shine shine-delay-1"></span>
                    </th>
                    <th className="relative p-4 text-white border border-[#0f6f73]/20 bg-[#a30000] overflow-hidden">
                      <span className="relative z-10">Diamond<br />INR 5 Lakh</span>
                      <span className="shine shine-delay-2"></span>
                    </th>
                    <th className="relative p-4 text-white border border-[#0f6f73]/20 bg-[#2e5b8e] overflow-hidden">
                      <span className="relative z-10">Gold<br />INR 3 Lakh</span>
                      <span className="shine shine-delay-3"></span>
                    </th>
                    <th className="relative p-4 text-white border border-[#0f6f73]/20 bg-[#d97706] overflow-hidden rounded-tr-xl">
                      <span className="relative z-10">Silver<br />INR 2 Lakh</span>
                      <span className="shine shine-delay-4"></span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      no: 1,
                      label: <><strong>Speaker Invite</strong> to the CEO/MD of the company in the Inaugural Session</>,
                      p: true, d: true, g: false, s: false,
                    },
                    {
                      no: 2,
                      label: <><strong>Corporate Video Presentation</strong> — Promotional AV to be played during the breaks.</>,
                      p: true, d: true, g: false, s: false,
                    },
                    {
                      no: 3,
                      label: <><strong>Publicity Material of the Organization</strong>: Company brochure &amp; publicity material to be part of Delegate Kit</>,
                      p: true, d: true, g: true, s: false,
                    },
                    {
                      no: 4,
                      label: <><strong>Acknowledgement of Association</strong> — Pre and During the Event</>,
                      p: true, d: true, g: true, s: true,
                    },
                    {
                      no: 5,
                      label: <><strong>Prominent Organization Branding</strong> (Logo displayed in Backdrop, Thank You Sponsor Standees &amp; E-mailers)</>,
                      p: true, d: true, g: true, s: true,
                    },
                    {
                      no: 6,
                      label: <><strong>Individual Promotional Display</strong> (Company standees at the reception of Venue)</>,
                      p: "3 Standees", d: "2 Standees", g: "1 Standee", s: "1 Standee",
                    },
                    {
                      no: 7,
                      label: <><strong>Print Media Branding:</strong> Colored Company Advertisement in PHDCCI&apos;s monthly bulletin</>,
                      p: "1 Full Page", d: "Half Page", g: "Qtr Page", s: null,
                    },
                    {
                      no: 8,
                      label: <><strong>Social Media Branding:</strong> Logo branding on social media handles of Pharma and Healthcare Samman and Conclave 2026</>,
                      p: true, d: true, g: true, s: true,
                    },
                    {
                      no: 9,
                      label: <><strong>Networking Table Space</strong> at the Pharma and Healthcare Samman and Conclave 2026 Venue</>,
                      p: true, d: true, g: false, s: false,
                    },
                    {
                      no: 10,
                      label: <><strong>Complimentary Delegate Invitations</strong></>,
                      p: "5 Delegates", d: "2 Delegates", g: "2 Delegates", s: "1 Delegate",
                    },
                  ].map((row) => (
                    <tr key={row.no} className="border-b border-[#0f6f73]/10 hover:bg-[#0f6f73]/5 transition">
                      <td className="p-4 text-center border border-[#0f6f73]/20">{row.no}</td>
                      <td className="p-4 text-left border border-[#0f6f73]/20">{row.label}</td>
                      {[row.p, row.d, row.g, row.s].map((val, i) => (
                        <td key={i} className="p-4 text-center border border-[#0f6f73]/20">
                          {val === true ? (
                            <span className="text-green-600 text-xl font-bold">✓</span>
                          ) : val === false || val === null ? null : (
                            <span className="text-sm font-medium">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Become a Partner ── */}
          <div className="mt-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Become a Partner
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto border border-gray-100">
              <p className="text-gray-600 mb-8">
                Join our network of partners and sponsors to support innovation
                and excellence in the pharmaceutical and healthcare sectors.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { title: "Platinum Partner", price: "₹7,00,000", color: "#4b6c3e" },
                  { title: "Diamond Partner", price: "₹5,00,000", color: "#a30000" },
                  { title: "Gold Partner", price: "₹3,00,000", color: "#2e5b8e" },
                  { title: "Silver Partner", price: "₹2,00,000", color: "#d97706" },
                ].map((tier) => (
                  <div
                    key={tier.title}
                    className="p-5 rounded-xl text-center"
                    style={{ backgroundColor: `${tier.color}15`, borderTop: `3px solid ${tier.color}` }}
                  >
                    <h3 className="text-sm font-bold text-gray-900 mb-2">{tier.title}</h3>
                    <p className="font-bold" style={{ color: tier.color }}>{tier.price}</p>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-[#1FA58A] to-[#145C52] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
                Contact Us for Partnership
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default PartnersPage;