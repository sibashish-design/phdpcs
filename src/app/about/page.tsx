"use client";
import Image from "next/image"; // Make sure this is at the top
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  Users,
  Heart,
  Globe,
  Target,
  CheckCircle,
  Star,
  Building,
  Handshake,
  TrendingUp,
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Years of Excellence", value: "120+", icon: Award },
    { label: "Industries Reached", value: "1,50,000+", icon: Users },
    { label: "Global Partnerships", value: "50+", icon: Globe },
    { label: "Sectors Covered", value: "25+", icon: Building },
  ];

  const values = [
    {
      title: "Progress",
      description:
        "Driving forward-looking initiatives for Indian industry and trade development.",
      icon: TrendingUp,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Harmony",
      description:
        "Fostering collaborative relationships between industry and government.",
      icon: Heart,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Development",
      description:
        "Promoting integrated development of the Indian economy at grassroots level.",
      icon: Target,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Excellence",
      description:
        "Maintaining the highest standards in industry advocacy and support.",
      icon: CheckCircle,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const achievements = [
    {
      title: "PAN-India Presence",
      description:
        "Strong national and international linkages for propelling progress",
      icon: Globe,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Industry Voice",
      description:
        "Acting as the 'Voice of Industry & Trade' reaching 1,50,000+ industries",
      icon: Users,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Global Partnerships",
      description:
        "Working with Embassies and High Commissions for international best practices",
      icon: Handshake,
      color: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#015D67] to-[#0284a8] text-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo and Heading Section */}
          <div className="flex items-center gap-4 flex flex-col md:flex-row justify-center items-center">
            <div className="shrink-0">
              <div>
                <Image
                  src="/phdcci-logo1.png"
                  alt="PHDCCI Logo"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="text-center md:text-left ">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
                About PHDCCI
              </div>
              <div className="text-sm sm:text-base md:text-lg font-medium mt-1 tracking-wide">
                1905 - 2026
              </div>
            </div>
          </div>

         

          {/* Paragraph Content */}
          <div className="mt-12 space-y-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-5xl mx-auto px-2">
            <p>
             PHDCCI, as the Voice of Industry and Trade, represents a wide network of over 150,000 large, medium, and small enterprises. Leveraging its deep industry expertise and multi-sectoral engagement, the organisation continues to play a pivotal role in shaping policy dialogue, fostering innovation, and strengthening India’s economic growth trajectory.
            </p>
            <p>
              At the global level, PHDCCI actively collaborates with Embassies and High Commissions in India and abroad to facilitate international partnerships, bring in global best practices, and unlock new business opportunities for Indian enterprises.
            </p>
            <p>
              India’s healthcare and pharmaceutical sector continues to witness rapid expansion, emerging as a key contributor to economic growth, employment generation, and innovation. Uttarakhand, with its well-established pharmaceutical manufacturing clusters, expanding healthcare infrastructure, and strong positioning in AYUSH and wellness, is uniquely placed to lead this transformation.
            </p>
            <p>
              Uttarakhnd Pharma, Healthcare & Ayush Conclave 2026 (2nd Annual Edition) builds on the success of its previous edition, which brought together key stakeholders across the ecosystem — including government leaders, healthcare institutions, pharmaceutical manufacturers, AYUSH practitioners, and innovators. The platform is designed to foster collaboration, showcase excellence, and accelerate growth across the healthcare and pharma sectors, particularly in the Himalayan region.
            </p>
            <p>
              The Samman programme recognises outstanding contributions across 49 carefully defined categories spanning public health, private healthcare, AYUSH, healthcare manufacturing, and cross-track sustainability and community initiatives, providing a structured and credible framework for industry recognition.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-[#015D67]" />
                </div>
                <div className="text-3xl font-bold text-[#015D67] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-[#015D67]">
                  <Target className="h-6 w-6 mr-3" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To act as a catalyst for the promotion of Indian industry,
                  trade and entrepreneurship, working as a partner in progress
                  with industry and government at the grassroots level to propel
                  progress, harmony and integrated development of the Indian
                  economy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-[#015D67]">
                  <Star className="h-6 w-6 mr-3" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading PAN-India apex organization recognized for
                  excellence in industry advocacy, fostering strong national and
                  international linkages, and driving the Indian economy to the
                  next level through innovation and collaboration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our 120-year legacy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex p-3 rounded-full mb-4 ${value.color}`}
                  >
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Key Achievements */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones that define our journey of excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex p-3 rounded-full mb-4 ${achievement.color}`}
                  >
                    <achievement.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
