"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Building,
  Globe
} from "lucide-react";

export default function ContactPage() {

  const contactInfo = [
    {
      title: "Ritesh Singh",
      address: "Deputy Resident Director",
      phone: "+91 85279 00622",
      email: "ritesh.singh@phdcci.in",
      icon: MessageSquare,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Rajiv Vaid",
      address: "Executive Officer",
      phone: "+91 74178 09339",
      email: "rajiv.vaid@phdcci.in",
      icon: Building,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Vinaypal Singh Rawat",
      address: "Senior Resident Officer",
      phone: "+91 95605 00181",
      email: "vinaypal.rawat@phdcci.in",
      icon: MessageSquare,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Event Location",
      address: "Dehradun, Uttarakhand",
      phone: "Event Date: June 24, 2026",
      email: "PHD Chamber of Commerce",
      icon: Globe,
      color: "bg-purple-50 text-purple-600"
    }
  ];

  const officeHours = [
    { day: "Event Date", hours: "June 24, 2026" },
    { day: "Location", hours: "Dehradun, Uttarakhand" },
    { day: "Organization", hours: "PHD Chamber of Commerce and Industry" },
    { day: "Registration", hours: "Open Now" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#015D67] to-[#0284a8] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We&apos;re here to help and answer any questions you might have. 
            We look forward to hearing from you.
          </p>
          <div className="flex justify-center">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-lg">
              Customer Support Available 24/7
            </Badge>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Event Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with our event coordinators for any queries about the Uttarakhand Pharma & Healthcare Conclave
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-3 rounded-full mb-4 ${info.color}`}>
                    <info.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-center">
                      <MapPin className="h-4 w-4 mr-2 text-[#015D67]" />
                      <span className="text-gray-600">{info.address}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Phone className="h-4 w-4 mr-2 text-[#015D67]" />
                      <span className="text-gray-600">{info.phone}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Mail className="h-4 w-4 mr-2 text-[#015D67]" />
                      <span className="text-gray-600">{info.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Office Hours */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-[#015D67]">
                <Clock className="h-6 w-6 mr-3" />
                Event Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                    <span className="text-[#015D67] font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}