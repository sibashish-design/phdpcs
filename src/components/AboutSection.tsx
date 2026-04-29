"use client";
/* eslint-disable @next/next/no-img-element */
import { CheckCircle, Users, Globe, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const highlights = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Mission-Driven",
    description: "Advancing healthcare innovation in the Himalayan region",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaborative",
    description: "Bringing together industry leaders and researchers",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Impactful",
    description: "Creating lasting change in healthcare delivery",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutSection() {
  const [showFocusAreas, setShowFocusAreas] = useState(false);
  const [showObjectives, setShowObjectives] = useState(false);
  const [showActivities, setShowActivities] = useState(false);
  const [showParticipants, setShowParticipants] = useState(false);
  const [showOutcomes, setShowOutcomes] = useState(false);

  return (
    <section className="py-10 relative bg-gradient-to-br from-[#145C52] to-[#2e5b8e] text-white">
      <div
        className="container px-6 mx-auto max-w-7xl"
        style={{ position: "relative", zIndex: 2 }}
      >
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-left mb-12 px-0 max-w-5xl mx-auto"
        >
          <h2 className=" text-center mb-4 text-2xl font-bold text-white md:text-5xl">
            PHARMA HEALTHCARE & AYUSH
          </h2>
          <p className="text-md leading-relaxed text-white/80">
            The healthcare and pharmaceutical sectors in India are undergoing a
            transformative shift, driven by innovation, research, and digital
            integration. Uttarakhand, with its growing medical infrastructure,
            skilled human resources, and natural potential for wellness and
            health tourism, stands poised to emerge as a key regional hub. In
            this context, there is a growing need to bring together stakeholders
            from across the healthcare spectrum—industry leaders, medical
            professionals, researchers, policymakers, and entrepreneurs—to
            explore new trends, share knowledge, and recognize excellence in the
            sector.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-start gap-16 lg:grid-cols-2 mb-24 px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Objective Header and Description */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white md:text-4xl">
                OUR OBJECTIVE
              </h3>
              <p className="text-lg leading-relaxed text-white/80">
                The Uttarakhand Pharma & Healthcare Conclave and Samman 2026
                aims to:
              </p>

              {/* View More Button */}
              <motion.div className="text-left">
                <motion.button
                  onClick={() => setShowObjectives(!showObjectives)}
                  className="px-6 py-2 text-white font-semibold rounded-lg transition-all duration-300 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showObjectives ? "View Less" : "View More"}
                </motion.button>
              </motion.div>

              {/* Expanded Objectives */}
              {showObjectives && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-3"
                >
                  {[
                    "Foster dialogue on the future of healthcare and pharma in Uttarakhand and India.",
                    "Showcase emerging technologies in medical devices, clinical trials, telemedicine, and digital health.",
                    "Promote collaboration between academia, industry, and the public sector.",
                    "Encourage innovation in medical equipment manufacturing, health insurance models, and medical outsourcing.",
                    "Recognize outstanding contributions through a prestigious Samman ceremony.",
                  ].map((point, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * (idx + 1) }}
                      className="text-md leading-relaxed text-white/80"
                    >
                      • {point}
                    </motion.p>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Highlights List */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start gap-4 p-4 transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20"
                >
                  <div className="flex items-center justify-center w-10 h-10 text-white bg-white/20 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 transform rotate-2 rounded-2xl blur-lg scale-105 bg-[#00e0ff]/10" />
            <img
              src="/sustain.png"
              alt="Healthcare Innovation"
              className="relative z-10 object-cover w-full h-96 rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>

        {/* Border Line */}
        <div className="border-t border-white/20 mb-16"></div>

        {/* Theoretical Framework Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8 px-4 sm:px-6 lg:px-0 max-w-6xl mx-auto mb-20"
        >
          {/* Title and Description */}
          <div className="text-left">
            <h3 className="mb-4 text-3xl font-bold text-white">
              Theoretical Framework
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              Our comprehensive approach encompasses six key focus areas that
              form the foundation for advancing healthcare innovation and
              pharmaceutical development in Uttarakhand.
            </p>
          </div>

          {/* View More Button */}
          <div className="text-left">
            <motion.button
              onClick={() => setShowFocusAreas(!showFocusAreas)}
              className="px-6 py-2 text-white font-semibold rounded-md transition-all duration-300 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showFocusAreas ? "View Less" : "View More"}
            </motion.button>
          </div>

          {/* Focus Areas */}
          {showFocusAreas && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
            >
              {/* Reusable Card Component */}
              {[
                {
                  title: "Medical Devices and Equipment Manufacturing",
                  icon: <CheckCircle className="w-6 h-6" />,
                  points: [
                    "Innovations and localization",
                    "Regulatory frameworks and compliance",
                    "Investment opportunities in Uttarakhand",
                  ],
                },
                {
                  title:
                    "Artificial Intelligence & Machine Learning in Healthcare",
                  icon: <Target className="w-6 h-6" />,
                  points: [
                    "Predictive analytics and personalized medicine",
                    "AI in diagnostics and patient care",
                    "Data governance and security",
                  ],
                },
                {
                  title: "Clinical Trials and Pharma Outsourcing",
                  icon: <Target className="w-6 h-6" />,
                  points: [
                    "Opportunities for CROs (Contract Research Organizations)",
                    "Ethical and regulatory considerations",
                    "Research infrastructure in the state",
                  ],
                },
                {
                  title: "Medical Tourism",
                  icon: <Globe className="w-6 h-6" />,
                  points: [
                    "Leveraging Uttarakhand's wellness and natural healing potential",
                    "Infrastructure and global partnerships",
                    "Branding and promotion strategies",
                  ],
                },
                {
                  title: "Digital Health and Telemedicine",
                  icon: <Users className="w-6 h-6" />,
                  points: [
                    "Expanding access to rural populations",
                    "Platforms and applications for teleconsultation",
                    "Integration with primary healthcare systems",
                  ],
                },
                {
                  title: "Health Insurance and Financing",
                  icon: <CheckCircle className="w-6 h-6" />,
                  points: [
                    "Innovative insurance models",
                    "Inclusion of emerging therapies and digital services",
                    "Challenges in rural coverage",
                  ],
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (i + 1) }}
                  className="p-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-start w-12 h-12 mb-4 text-white bg-white/20 rounded-lg">
                    {item.icon}
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-white">
                    {item.title}
                  </h4>
                  <ul className="space-y-2 text-sm text-white/80">
                    {item.points.map((point, index) => (
                      <li key={index}>• {point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Border Line */}
        <div className="border-t border-white/20 my-16"></div>

        {/* Proposed Activities Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8 px-4 sm:px-6 lg:px-0 max-w-6xl mx-auto mb-20"
        >
          <div className="text-left">
            <h3 className="mb-4 text-3xl font-bold text-white">
              Proposed Activities
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              A comprehensive program designed to facilitate meaningful
              interactions and showcase innovations in healthcare and
              pharmaceutical sectors.
            </p>
          </div>

          {/* View More Button for Activities */}
          <div className="text-left">
            <motion.button
              onClick={() => setShowActivities(!showActivities)}
              className="px-6 py-2 text-white font-medium rounded-md transition-all duration-300 bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/20"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {showActivities ? "View Less" : "View More"}
            </motion.button>
          </div>

          {/* Activities List - Only shown when expanded */}
          {showActivities && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {[
                {
                  title: "Inaugural Session",
                  text: "Keynotes by government dignitaries, industry leaders, and health experts",
                },
                {
                  title: "Technical Sessions",
                  text: "Thematic panels on each focus area",
                },
                {
                  title: "B2B Networking Lounge",
                  text: "Facilitated interaction among industry, startups, and service providers",
                },
                {
                  title: "Innovation Showcase",
                  text: "Exhibition of medical devices, digital platforms, and research outcomes",
                },
                {
                  title: "Samman Ceremony",
                  text: "Honoring excellence in pharma innovation, healthcare delivery, digital health, etc.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (idx + 1) }}
                  className="p-5 sm:p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl"
                >
                  <h4 className="mb-2 text-xl font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-white/80 text-md">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Border Line */}
        <div className="border-t border-white/20 my-16"></div>

        {/* Target Participants Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8 px-4 sm:px-6 lg:px-0 max-w-6xl mx-auto mb-20"
        >
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white">
              Target Participants
            </h3>
            <p className="text-lg leading-relaxed text-white/80 max-w-3xl">
              Bringing together diverse stakeholders from across the healthcare
              ecosystem to foster collaboration and innovation.
            </p>
          </div>

          {/* View More Button for Participants */}
          <div>
            <motion.button
              onClick={() => setShowParticipants(!showParticipants)}
              className="px-6 py-2 text-white font-semibold rounded-lg transition-all duration-300 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showParticipants ? "View Less" : "View More"}
            </motion.button>
          </div>

          {/* Participants List - Only shown when expanded */}
          {showParticipants && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl"
            >
              {[
                "Healthcare professionals and administrators",
                "Pharmaceutical and medical device companies",
                "Healthtech and AI startups",
                "CROs and research institutions",
                "Government departments and policy think tanks",
                "Health insurance providers and TPAs",
                "Investors and international delegates",
              ].map((participant, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <p className="text-md font-medium text-white">
                    {participant}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Border Line */}
        <div className="border-t border-white/20 my-16"></div>

        {/* Expected Outcomes Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8 px-4 sm:px-6 lg:px-0 max-w-6xl mx-auto mb-20"
        >
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white">Expected Outcomes</h3>
            <p className="text-lg leading-relaxed text-white/80 max-w-3xl">
              Measurable impacts and long-term benefits that will drive
              healthcare innovation and development in Uttarakhand.
            </p>
          </div>

          {/* View More Button for Outcomes */}
          <div>
            <motion.button
              onClick={() => setShowOutcomes(!showOutcomes)}
              className="px-6 py-2 text-white font-semibold rounded-lg transition-all duration-300 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showOutcomes ? "View Less" : "View More"}
            </motion.button>
          </div>

          {/* Outcomes List - Only shown when expanded */}
          {showOutcomes && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {[
                "Strengthening Uttarakhand's position as a healthcare and pharma hub",
                "MoUs and collaborations between stakeholders",
                "Launch of new digital health initiatives",
                "Recognition of exemplary work across the ecosystem",
                "Policy recommendations for inclusive and tech-driven health growth",
              ].map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition duration-300"
                >
                  <p className="text-md text-white/80">{outcome}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
