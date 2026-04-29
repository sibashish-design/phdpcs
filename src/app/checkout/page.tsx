"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { CartItem } from "@/types/index";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Upload,
  CreditCard,
  User,
  MapPin,
  ShoppingBag,
  ShieldCheck,
  TruckIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/contexts/CartContext";
import { UserDetails } from "@/types/index";
import { sendOrderEmail, EmailOrderData } from "@/lib/emailService";
import { uploadToCloudinary } from "@/lib/cloudinary"; // Ensure this function is defined to handle file uploads
import { toast } from "sonner";
import Link from "next/link";

const sections = [
{
title: "Innovation achievement",
items: [
"Patent filings / IP registration copies",
"R&D expenditure statements (last 2 years)",
"Product design files, prototypes, and testing/validation reports",
"Market launch documentation & media coverage",
"Regulatory approvals (CDSCO, State AYUSH Dept., ISO)",
],
},
{
title: "Social and Ethical Responsibility achievement",
items: [
"ESG or CSR policy documents",
"Supplier audit reports & ethical sourcing declarations",
"Workforce diversity metrics & inclusion policy",
"Packaging innovation proof (design, certifications, recyclability reports)",
"Employee training & capacity building reports",
],
},
{
title: "Sustainable Practices & Efficiency achievement",
items: [
"Energy & water audit reports",
"Green certifications (IGBC, GRIHA, ISO 14001)",
"Waste management and recycling logs",
"Environmental compliance clearances (Pollution Control Board)",
"Renewable energy adoption proof (solar, biogas, etc.)",
],
},
{
title: "Education & Research achievement",
items: [
"Research publications & patents",
"Clinical trial registration & reports",
"Digital platform screenshots & analytics",
"Training program outlines & participant records",
"Recognition letters from research bodies",
],
},
];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentScreenshot, setPaymentScreenshot] = useState<File | null>(null);

  const [userDetails, setUserDetails] = useState<UserDetails>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleInputChange = (field: keyof UserDetails, value: string) => {
    setUserDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        toast.error("File size must be less than 5MB");
        return;
      }
      if (!file.type.startsWith("image/")) {
        toast.error("Please upload an image file");
        return;
      }
      setPaymentScreenshot(file);
      toast.success("Payment screenshot uploaded successfully");
    }
  };

  const validateForm = () => {
    const requiredFields: (keyof UserDetails)[] = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "address",
      "city",
      "postalCode",
      "country",
    ];

    for (const field of requiredFields) {
      if (!userDetails[field].trim()) {
        toast.error(
          `Please fill in your ${field
            .replace(/([A-Z])/g, " $1")
            .toLowerCase()}`
        );
        return false;
      }
    }

    if (!paymentScreenshot) {
      toast.error("Please upload your payment screenshot");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userDetails.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    return true;
  };

  const formatOrderItems = (items: CartItem[]) => {
    return items
      .map(
        (item) =>
          `${item.name} (${item.category}) - Qty: ${item.quantity} - $${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join("\n");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const orderId = `ORDER-${Date.now()}`;
      const orderDate = new Date().toLocaleString();

      let paymentScreenshotUrl = null;
      if (paymentScreenshot) {
        const upload = await uploadToCloudinary(paymentScreenshot);
        if (!upload) {
          toast.error("Failed to upload payment screenshot");
          setIsSubmitting(false);
          return;
        }
        paymentScreenshotUrl = upload;
      }

      // Prepare email data
      const emailData: EmailOrderData = {
        customerName: `${userDetails.firstName} ${userDetails.lastName}`,
        customerEmail: userDetails.email,
        customerPhone: userDetails.phone,
        customerAddress: `${userDetails.address}, ${userDetails.city}, ${userDetails.postalCode}, ${userDetails.country}`,
        orderItems: formatOrderItems(items),
        orderTotal: total.toFixed(2),
        orderId,
        orderDate,
        paymentScreenshotName: paymentScreenshot?.name || "No file uploaded",
        payment_screenshot_url: paymentScreenshotUrl ?? "", // Always provide a string
      };

      console.log("Attempting to send email with data:", emailData);

      // Send email
      const emailSent = await sendOrderEmail(emailData);

      if (emailSent) {
        // Clear cart and redirect
        clearCart();
        toast.success(
          "Order submitted successfully! Email sent to pharma@gmail.com"
        );
        router.push("/order-confirmation");
      } else {
        toast.error(
          "Failed to send order email. Please try again or contact support."
        );
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      toast.error("Failed to submit order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16 flex flex-col items-center">
            <div className="bg-[#015D67]/5 p-6 rounded-full mb-6">
              <ShoppingBag className="h-24 w-24 text-[#015D67]" />
            </div>
            <h2 className="text-3xl font-bold text-[#015D67] mb-3">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-10 max-w-md mx-auto">
              Add some items to your cart before checking out.
            </p>
            <Link href="/products">
              <Button
                size="lg"
                className="bg-[#015D67] hover:bg-[#015D67]/90 text-white px-8 py-6 h-auto font-medium text-base rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <Link
            href="/cart"
            className="inline-flex items-center text-[#015D67] hover:text-[#015D67]/80 mb-4 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#015D67] mb-3">
            Complete Your Nomination
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Please fill in your details below to complete your purchase.
          </p>
          <div className="mt-6 p-4 bg-[#015D67]/5 border border-[#015D67]/10 rounded-xl shadow-sm">
            <p className="text-sm text-[#015D67] flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>
                <strong>Order Confirmation:</strong> Your order details will be
                automatically sent to <strong>phdccihits2025@gmail.com</strong> for
                processing.
              </span>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column - Forms */}
            <div className="space-y-8">
              {/* Personal Information */}
              <Card className="rounded-xl shadow-md border border-[#015D67]/10 overflow-hidden">
                <CardHeader className="pb-2 bg-gradient-to-r from-[#015D67]/5 to-transparent">
                  <CardTitle className="flex items-center text-[#015D67]">
                    <User className="h-5 w-5 mr-2" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="firstName"
                        className="text-[#015D67] mb-1.5 block"
                      >
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        value={userDetails.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        required
                        placeholder="John"
                        className="w-full border-[#015D67]/20 focus-visible:border-[#015D67] focus-visible:ring-[#015D67]/20 rounded-lg"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="lastName"
                        className="text-[#015D67] mb-1.5 block"
                      >
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        value={userDetails.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        required
                        placeholder="Doe"
                        className="w-full border-[#015D67]/20 focus-visible:border-[#015D67] focus-visible:ring-[#015D67]/20 rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-[#015D67] mb-1.5 block"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={userDetails.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                      placeholder="john.doe@example.com"
                      className="w-full border-[#015D67]/20 focus-visible:border-[#015D67] focus-visible:ring-[#015D67]/20 rounded-lg"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-[#015D67] mb-1.5 block"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={userDetails.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      required
                      placeholder="+91 98765 43210"
                      className="w-full border-[#015D67]/20 focus-visible:border-[#015D67] focus-visible:ring-[#015D67]/20 rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card className="rounded-xl shadow-md border border-[#015D67]/10 overflow-hidden">
                <CardHeader className="pb-2 bg-gradient-to-r from-[#015D67]/5 to-transparent">
                  <CardTitle className="flex items-center text-[#015D67]">
                    <MapPin className="h-5 w-5 mr-2" />
                    Shipping Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                  <div>
                    <Label
                      htmlFor="address"
                      className="text-[#015D67] mb-1.5 block"
                    >
                      Street Address
                    </Label>
                    <Textarea
                      id="address"
                      value={userDetails.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      required
                      placeholder="123 Main Street, Apartment 4B"
                      className="w-full min-h-[80px] border-[#015D67]/20 focus-visible:border-[#015D67] focus-visible:ring-[#015D67]/20 rounded-lg"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="city"
                        className="text-[#015D67] mb-1.5 block"
                      >
                        City
                      </Label>
                      <Input
                        id="city"
                        value={userDetails.city}
                        onChange={(e) =>
                          handleInputChange("city", e.target.value)
                        }
                        required
                        placeholder="Mumbai"
                        className="w-full border-[#015D67]/20 focus-visible:border-[#015D67] focus-visible:ring-[#015D67]/20 rounded-lg"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="postalCode"
                        className="text-[#015D67] mb-1.5 block"
                      >
                        Postal Code
                      </Label>
                      <Input
                        id="postalCode"
                        value={userDetails.postalCode}
                        onChange={(e) =>
                          handleInputChange("postalCode", e.target.value)
                        }
                        required
                        placeholder="400001"
                        className="w-full border-[#015D67]/20 focus-visible:border-[#015D67] focus-visible:ring-[#015D67]/20 rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <Label
                      htmlFor="country"
                      className="text-[#015D67] mb-1.5 block"
                    >
                      Country
                    </Label>
                    <Input
                      id="country"
                      value={userDetails.country}
                      onChange={(e) =>
                        handleInputChange("country", e.target.value)
                      }
                      required
                      placeholder="India"
                      className="w-full border-[#015D67]/20 focus-visible:border-[#015D67] focus-visible:ring-[#015D67]/20 rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
              <div
                style={{
                  background: "#ffffff",
                  color: "#000000",
                  border: "1px solid #e5e7eb",
                  borderRadius: "16px",
                  padding: "16px",
                  maxWidth: 920,
                  margin: "0 auto",
                  fontFamily:
                    "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
                }}
              >
                <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>
List of Documents required for each of the Nomination Categories
</h2>
                {sections.map((sec, idx) => (
                  <details
                    key={sec.title}
                    style={{
                      border: "1px solid #e5e7eb",
                      borderRadius: "12px",
                      padding: "12px 14px",
                      marginBottom: idx === sections.length - 1 ? 0 : 12,
                      background: "#ffffff",
                    }}
                  >
                    <summary
                      style={{
                        cursor: "pointer",
                        outline: "none",
                        fontSize: 16,
                        fontWeight: 600,
                        listStyle: "none",
                      }}
                    >
                      {sec.title}
                    </summary>

                    <div style={{ marginTop: 8 }}>
                      {sec.items.map((text) => (
                        <label
                          key={text}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 8,
                            padding: "6px 2px",
                            fontSize: 14,
                          }}
                        >
                          <input type="checkbox" style={{ marginTop: 2 }} />
                          <span>{text}</span>
                        </label>
                      ))}
                    </div>
                  </details>
                ))}
              </div>

              {/* Payment Screenshot */}
              <Card className="rounded-xl shadow-md border border-[#015D67]/10 overflow-hidden">
                <CardHeader className="pb-2 bg-gradient-to-r from-[#015D67]/5 to-transparent">
                  <CardTitle className="flex items-center text-[#015D67]">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Bank Transfer Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="bg-[#015D67]/5 rounded-lg p-4 mb-6 border border-[#015D67]/10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="text-sm">
                          <span className="text-[#015D67] font-semibold block">
                            Organization:
                          </span>
                          <span className="text-gray-700">
                            PHD Chamber of Commerce and Industry
                          </span>
                        </p>
                        <p className="text-sm">
                          <span className="text-[#015D67] font-semibold block">
                            Bank:
                          </span>
                          <span className="text-gray-700">Bank of India</span>
                        </p>
                        <p className="text-sm">
                          <span className="text-[#015D67] font-semibold block">
                            Branch:
                          </span>
                          <span className="text-gray-700"> Panchsheel</span>
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm">
                          <span className="text-[#015D67] font-semibold block">
                            Account Number:
                          </span>
                          <span className="text-gray-700 font-mono bg-white px-2 py-1 rounded border border-[#015D67]/10">
                            602220100010035
                          </span>
                        </p>
                        <p className="text-sm">
                          <span className="text-[#015D67] font-semibold block">
                            IFSC Code:
                          </span>
                          <span className="text-gray-700 font-mono bg-white px-2 py-1 rounded border border-[#015D67]/10">
                            BKID0006022
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-6 bg-white p-4 rounded-lg border border-[#015D67]/10 shadow-sm">
                    <div className="text-center sm:text-left">
                      <h4 className="text-[#015D67] font-semibold mb-2">
                        Scan to Pay (UPI)
                      </h4>
                      <p className="text-sm text-gray-600 mb-4 max-w-xs">
                        Scan the QR code with any UPI app to make your payment
                        of{" "}
                        <span className="font-semibold text-[#015D67]">
                          ₹{total.toFixed(2)}
                        </span>
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#015D67]/10 text-[#015D67]">
                          Google Pay
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#015D67]/10 text-[#015D67]">
                          PhonePe
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#015D67]/10 text-[#015D67]">
                          Paytm
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src="/assets/upi-payment.jpg"
                        alt="UPI QR Code"
                        className="w-32 h-32 sm:w-40 sm:h-40 object-cover border-4 border-white rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-xl shadow-md border border-[#015D67]/10 overflow-hidden">
                <CardHeader className="pb-2 bg-gradient-to-r from-[#015D67]/5 to-transparent">
                  <CardTitle className="flex items-center text-[#015D67]">
                    <Upload className="h-5 w-5 mr-2" />
                    Payment Confirmation
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <p className="text-sm text-gray-600 bg-[#015D67]/5 p-3 rounded-lg border-l-4 border-[#015D67]">
                      Please complete your payment of{" "}
                      <strong className="text-[#015D67]">
                        ₹{total.toFixed(2)}
                      </strong>{" "}
                      using your preferred method and upload a screenshot of the
                      payment confirmation below.
                    </p>

                    <div className="border-2 border-dashed border-[#015D67]/20 rounded-xl p-8 text-center bg-white hover:border-[#015D67]/40 transition-colors duration-200 shadow-sm">
                      <input
                        type="file"
                        id="paymentScreenshot"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="paymentScreenshot"
                        className="cursor-pointer block"
                      >
                        <div className="bg-[#015D67]/5 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                          <Upload className="h-10 w-10 text-[#015D67]" />
                        </div>
                        <div className="text-lg font-medium text-[#015D67] mb-2">
                          {paymentScreenshot
                            ? paymentScreenshot.name
                            : "Upload Payment Screenshot"}
                        </div>
                        <p className="text-sm text-gray-600">
                          Click to select an image file (max 5MB)
                        </p>
                      </label>
                    </div>

                    {paymentScreenshot && (
                      <div className="mt-4 p-4 bg-[#015D67]/5 border border-[#015D67]/20 rounded-lg flex items-center gap-3">
                        <div className="bg-[#015D67] rounded-full p-1 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-[#015D67] font-medium">
                          Payment screenshot uploaded:{" "}
                          <span className="font-normal">
                            {paymentScreenshot.name}
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Order Summary */}
            <div className="md:col-span-1 mt-10 md:mt-0">
              <Card className="sticky top-4 rounded-xl shadow-md border border-[#015D67]/10 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-[#015D67]/10 to-transparent pb-4">
                  <CardTitle className="text-[#015D67]">
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 -mr-2">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-4 p-3 bg-white rounded-lg border border-[#015D67]/5 shadow-sm hover:border-[#015D67]/20 transition-colors duration-200"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-md border border-[#015D67]/10 flex-shrink-0 shadow-sm"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-[#015D67] truncate">
                              {item.name}
                            </h4>
                            <div className="flex justify-between items-center mt-1">
                              <p className="text-sm text-gray-600">
                                Qty:{" "}
                                <span className="font-medium">
                                  {item.quantity}
                                </span>
                              </p>
                              <span className="font-bold text-[#015D67]">
                                ₹{(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-[#015D67]/5 -mx-6 px-6 py-4 border-y border-[#015D67]/10">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium">₹{total.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-600">Shipping</span>
                        <span className="font-medium text-green-600">Free</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold mt-3 pt-3 border-t border-[#015D67]/10">
                        <span className="text-[#015D67]">Total</span>
                        <span className="text-[#015D67]">
                          ₹{total.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#015D67] hover:bg-[#015D67]/90 text-white py-6 h-auto font-medium text-base rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? "Processing Order..."
                        : "Complete Purchase"}
                    </Button>

                    <div className="mt-6 space-y-4">
                      <div className="flex flex-col space-y-3">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <ShieldCheck className="h-4 w-4 text-[#015D67]" />
                          <span>Secure transaction</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <TruckIcon className="h-4 w-4 text-[#015D67]" />
                          <span>Free shipping on orders over ₹500</span>
                        </div>
                      </div>

                      <p className="text-xs text-gray-600 text-center pt-3 border-t border-gray-100">
                        By placing this order, you agree to our terms and
                        conditions. Your order details will be sent to{" "}
                        <strong>pharma@gmail.com</strong> for processing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
