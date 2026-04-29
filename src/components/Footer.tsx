"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Facebook,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Nomination Categories", to: "/products" },
    { name: "Contact", to: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/phdcci1905",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.facebook.com/phdcci1905",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/p/DLmXzady9RL",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#145C52] to-[#145C52] text-white relative overflow-hidden">
      {/* Dark Line at Top */}
      <div className="h-1 bg-[#2e5b8e]"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%230096a0%22%20fill-opacity=%220.08%22%3E%3Ccircle%20cx=%2210%22%20cy=%2210%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 lg:items-start">
          {/* Company Info */}
          <div className="lg:col-span-1 flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Uttarakhand Pharma Healthcare & AYUSH
              </h3>
              <h4 className="text-lg font-semibold text-white/80 mb-4">
                Conclave and Samman 2026
              </h4>
            </div>

            <p className="text-white/70 mb-8 leading-relaxed text-sm">
              Join us in shaping the future of healthcare in the Himalayan
              region through cutting-edge innovation, collaborative research,
              and transformative healthcare solutions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 mt-auto">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:text-[#032221] hover:bg-white transition-all duration-300 group shadow-md shadow-white/20"
                  aria-label={social.name}
                >
                  <div className="group-hover:scale-110 transition-transform duration-200">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1 flex flex-col h-full">
            <h4 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 flex-grow">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.to}
                    className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group font-medium"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1 flex flex-col h-full">
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact Information
            </h4>
            <div className="space-y-2">
              {/* Rajiv Vaid Contact */}
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm shadow-md shadow-white/20 border border-white/20">
                <h5 className="text-white font-semibold mb-2 text-sm">
                  Ritesh Singh
                </h5>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 group">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <a
                        href="mailto:rajiv.vaid@phdcci.in"
                        className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                      >
                        ritesh.singh@phdcci.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 group">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <a
                        href="tel:+917417809339"
                        className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                      >
                        +91 85279 00622
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Rajiv Vaid Contact */}
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm shadow-md shadow-white/20 border border-white/20">
                <h5 className="text-white font-semibold mb-2 text-sm">
                  Rajiv Vaid
                </h5>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 group">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <a
                        href="mailto:rajiv.vaid@phdcci.in"
                        className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                      >
                        rajiv.vaid@phdcci.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 group">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <a
                        href="tel:+917417809339"
                        className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                      >
                        +91 74178 09339
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location and Event Date */}
              <div className="space-y-2 mt-2">
                <div className="flex items-center space-x-2 group">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-medium">
                      Location
                    </p>
                    <p className="text-white text-sm font-medium">
                      Dehradun, Uttarakhand
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 group">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-medium">
                      Event Date
                    </p>
                    <p className="text-white text-sm font-medium">
                      June 20, 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

 {/* Bottom Section */}
<div className="border-t border-white/20 mt-12 pt-6">
  <div className="flex flex-col justify-center items-center space-y-2">
    <p className="text-white/60 text-center text-sm">
      Created by{" "}
      <a
        href="https://visioncrafts.in"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition"
      >
        Visioncrafts.in
      </a>
    </p>
    <p className="text-white/60 text-center text-sm">
      &copy; 2026 Uttarakhand Pharma & Healthcare Conclave. All rights reserved.
    </p>
  </div>
</div>


      </div>
    </footer>
  );
};

export default Footer;
