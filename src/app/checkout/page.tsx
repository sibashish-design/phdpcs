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
  FileText,
  CheckCircle2,
  Circle,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/contexts/CartContext";
import { UserDetails } from "@/types/index";
import { sendOrderEmail, EmailOrderData } from "@/lib/emailService";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { toast } from "sonner";
import Link from "next/link";

// ── Document Checklist Component ─────────────────────────────────────────────

interface DocSectionProps {
  title: string;
  docs: string[];
  type: "universal" | "category" | "optional";
  defaultOpen?: boolean;
}

const DocSection: React.FC<DocSectionProps> = ({ title, docs, type, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  const [checked, setChecked] = useState<boolean[]>(docs.map(() => false));

  const toggle = (i: number) =>
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  const checkedCount = checked.filter(Boolean).length;

  const colors = {
    universal: {
      badge: "bg-red-100 text-red-600 border-red-200",
      bar: "bg-red-400",
      icon: <CheckCircle2 className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />,
      header: "text-red-700",
      border: "border-red-100",
      progress: "bg-red-400",
    },
    category: {
      badge: "bg-orange-100 text-orange-600 border-orange-200",
      bar: "bg-orange-400",
      icon: <CheckCircle2 className="h-3.5 w-3.5 text-orange-400 shrink-0 mt-0.5" />,
      header: "text-orange-700",
      border: "border-orange-100",
      progress: "bg-orange-400",
    },
    optional: {
      badge: "bg-blue-50 text-blue-500 border-blue-100",
      bar: "bg-blue-300",
      icon: <Circle className="h-3.5 w-3.5 text-blue-300 shrink-0 mt-0.5" />,
      header: "text-blue-600",
      border: "border-blue-100",
      progress: "bg-blue-300",
    },
  };

  const c = colors[type];

  return (
    <div className={`border ${c.border} rounded-xl overflow-hidden`}>
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${c.badge}`}>
            {type === "optional" ? "OPTIONAL" : "MANDATORY"}
          </span>
          <span className={`text-sm font-semibold ${c.header}`}>{title}</span>
          <span className="text-xs text-gray-400">
            {checkedCount}/{docs.length} ready
          </span>
        </div>
        <div className="flex items-center gap-2">
          {/* Mini progress bar */}
          <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden hidden sm:block">
            <div
              className={`h-full ${c.progress} rounded-full transition-all duration-300`}
              style={{ width: `${(checkedCount / docs.length) * 100}%` }}
            />
          </div>
          {open ? (
            <ChevronUp className="h-4 w-4 text-gray-400" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-400" />
          )}
        </div>
      </button>

      {/* Doc list */}
      {open && (
        <div className="px-4 pb-3 pt-1 space-y-2 bg-gray-50/50">
          {docs.map((doc, i) => (
            <label
              key={i}
              className={`flex items-start gap-3 p-2.5 rounded-lg border cursor-pointer transition-all ${
                checked[i]
                  ? "bg-green-50 border-green-200"
                  : "bg-white border-gray-100 hover:border-gray-200"
              }`}
            >
              <input
                type="checkbox"
                checked={checked[i]}
                onChange={() => toggle(i)}
                className="mt-0.5 shrink-0 accent-[#015D67]"
              />
              <div className="flex items-start gap-1.5 flex-1 min-w-0">
                {c.icon}
                <span className={`text-xs leading-relaxed ${checked[i] ? "text-green-700 line-through decoration-green-400/60" : "text-gray-700"}`}>
                  {doc}
                </span>
              </div>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

// ── Per-item document checklist ───────────────────────────────────────────────

interface ItemDocChecklistProps {
  item: CartItem;
  index: number;
}

const ItemDocChecklist: React.FC<ItemDocChecklistProps> = ({ item, index }) => {
  const [open, setOpen] = useState(index === 0);

  const totalDocs =
    item.universalMandatoryDocs.length +
    item.categoryMandatoryDocs.length +
    item.supportingOptionalDocs.length;

  return (
    <div className="border border-[#015D67]/15 rounded-xl overflow-hidden">
      {/* Item header */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 bg-[#015D67]/5 hover:bg-[#015D67]/10 transition-colors text-left"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-10 h-10 rounded-lg object-cover shrink-0 border border-[#015D67]/10"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[#015D67] truncate">{item.name}</p>
          <p className="text-[11px] text-[#015D67]/60">{item.code} · {totalDocs} documents required</p>
        </div>
        {open ? (
          <ChevronUp className="h-4 w-4 text-[#015D67]/50 shrink-0" />
        ) : (
          <ChevronDown className="h-4 w-4 text-[#015D67]/50 shrink-0" />
        )}
      </button>

      {/* Doc sections */}
      {open && (
        <div className="p-3 space-y-2.5 bg-white">
          {/* Eligibility note */}
          {item.eligibilityNote && (
            <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2.5">
              <AlertTriangle className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-[11px] text-amber-700 leading-relaxed">{item.eligibilityNote}</p>
            </div>
          )}

          {item.universalMandatoryDocs.length > 0 && (
            <DocSection
              title={`Universal Mandatory — required for every category`}
              docs={item.universalMandatoryDocs}
              type="universal"
              defaultOpen={true}
            />
          )}
          {item.categoryMandatoryDocs.length > 0 && (
            <DocSection
              title={`Category-specific Mandatory — ${item.code}`}
              docs={item.categoryMandatoryDocs}
              type="category"
              defaultOpen={true}
            />
          )}
          {item.supportingOptionalDocs.length > 0 && (
            <DocSection
              title="Supporting / Optional (strengthens nomination)"
              docs={item.supportingOptionalDocs}
              type="optional"
              defaultOpen={false}
            />
          )}
        </div>
      )}
    </div>
  );
};

// ── Main Checkout Page ────────────────────────────────────────────────────────

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
      "firstName", "lastName", "email", "phone",
      "address", "city", "postalCode", "country",
    ];
    for (const field of requiredFields) {
      if (!userDetails[field].trim()) {
        toast.error(`Please fill in your ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`);
        return false;
      }
    }
    if (total > 0 && !paymentScreenshot) {
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

  const formatOrderItems = (items: CartItem[]) =>
    items
      .map(
        (item) =>
          `${item.name} (${item.track}) - Qty: ${item.quantity} - ₹${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join("\n");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const orderId = `ORDER-${Date.now()}`;
      const orderDate = new Date().toLocaleString();

      let paymentScreenshotUrl = null;
      if (paymentScreenshot && total > 0) {
      const upload = await uploadToCloudinary(paymentScreenshot);
      if (!upload) {
      toast.error("Failed to upload payment screenshot");
      setIsSubmitting(false);
      return;
  }
  paymentScreenshotUrl = upload;
}

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
        payment_screenshot_url: paymentScreenshotUrl ?? "",
      };

      const emailSent = await sendOrderEmail(emailData);
      if (emailSent) {
        clearCart();
        toast.success("Order submitted successfully! Email sent to phdupcs2026@gmail.com");
        router.push("/order-confirmation");
      } else {
        toast.error("Failed to send order email. Please try again or contact support.");
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
            <h2 className="text-3xl font-bold text-[#015D67] mb-3">Your cart is empty</h2>
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>
                <strong>Order Confirmation:</strong> Your order details will be automatically sent to{" "}
                <strong>phdupcs2026@gmail.com</strong> for processing.
              </span>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* ── Left Column ── */}
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
                      <Label htmlFor="firstName" className="text-[#015D67] mb-1.5 block">First Name</Label>
                      <Input id="firstName" value={userDetails.firstName} onChange={(e) => handleInputChange("firstName", e.target.value)} required placeholder="John" className="w-full border-[#015D67]/20 focus-visible:border-[#015D67] focus-visible:ring-[#015D67]/20 rounded-lg" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-[#015D67] mb-1.5 block">Last Name</Label>
                      <Input id="lastName" value={userDetails.lastName} onChange={(e) => handleInputChange("lastName", e.target.value)} required placeholder="Doe" className="w-full border-[#015D67]/20 focus-visible:border-[#015D67] focus-visible:ring-[#015D67]/20 rounded-lg" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[#015D67] mb-1.5 block">Email Address</Label>
                    <Input id="email" type="email" value={userDetails.email} onChange={(e) => handleInputChange("email", e.target.value)} required placeholder="john.doe@example.com" className="w-full border-[#015D67]/20 focus-visible:border-[#015D67] focus-visible:ring-[#015D67]/20 rounded-lg" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-[#015D67] mb-1.5 block">Phone Number</Label>
                    <Input id="phone" type="tel" value={userDetails.phone} onChange={(e) => handleInputChange("phone", e.target.value)} required placeholder="+91 98765 43210" className="w-full border-[#015D67]/20 focus-visible:border-[#015D67] focus-visible:ring-[#015D67]/20 rounded-lg" />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card className="rounded-xl shadow-md border border-[#015D67]/10 overflow-hidden">
                <CardHeader className="pb-2 bg-gradient-to-r from-[#015D67]/5 to-transparent">
                  <CardTitle className="flex items-center text-[#015D67]">
                    <MapPin className="h-5 w-5 mr-2" />
                    Address Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                  <div>
                    <Label htmlFor="address" className="text-[#015D67] mb-1.5 block">Street Address</Label>
                    <Textarea id="address" value={userDetails.address} onChange={(e) => handleInputChange("address", e.target.value)} required placeholder="123 Main Street, Apartment 4B" className="w-full min-h-[80px] border-[#015D67]/20 focus-visible:border-[#015D67] focus-visible:ring-[#015D67]/20 rounded-lg" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-[#015D67] mb-1.5 block">City</Label>
                      <Input id="city" value={userDetails.city} onChange={(e) => handleInputChange("city", e.target.value)} required placeholder="Mumbai" className="w-full border-[#015D67]/20 focus-visible:border-[#015D67] focus-visible:ring-[#015D67]/20 rounded-lg" />
                    </div>
                    <div>
                      <Label htmlFor="postalCode" className="text-[#015D67] mb-1.5 block">Postal Code</Label>
                      <Input id="postalCode" value={userDetails.postalCode} onChange={(e) => handleInputChange("postalCode", e.target.value)} required placeholder="400001" className="w-full border-[#015D67]/20 focus-visible:border-[#015D67] focus-visible:ring-[#015D67]/20 rounded-lg" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="country" className="text-[#015D67] mb-1.5 block">Country</Label>
                    <Input id="country" value={userDetails.country} onChange={(e) => handleInputChange("country", e.target.value)} required placeholder="India" className="w-full border-[#015D67]/20 focus-visible:border-[#015D67] focus-visible:ring-[#015D67]/20 rounded-lg" />
                  </div>
                </CardContent>
              </Card>

              {/* ── Dynamic Document Checklist ── */}
              <Card className="rounded-xl shadow-md border border-[#015D67]/10 overflow-hidden">
                <CardHeader className="pb-2 bg-gradient-to-r from-[#015D67]/5 to-transparent">
                  <CardTitle className="flex items-center text-[#015D67]">
                    <FileText className="h-5 w-5 mr-2" />
                    Documentary Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <p className="text-xs text-gray-500 mb-3 px-1">
                    Prepare these documents before starting your nomination submission. Tick each item as you gather it.
                  </p>

                  {/* Eligibility callout if any item has eligibility note */}
                  {items.some((i) => i.eligibilityNote) && (
                    <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2.5 mb-3">
                      <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-amber-700 font-medium">
                        One or more of your selected categories has special eligibility rules. Expand each category below to review them.
                      </p>
                    </div>
                  )}

                  {/* One accordion per cart item */}
                  <div className="space-y-3">
                    {items.map((item, idx) => (
                      <ItemDocChecklist key={item.id} item={item} index={idx} />
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="flex flex-wrap gap-3 pt-3 px-1 border-t border-gray-100 mt-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                      <span className="text-[10px] text-gray-500">Universal mandatory</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                      <span className="text-[10px] text-gray-500">Category mandatory</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-300 shrink-0" />
                      <span className="text-[10px] text-gray-500">Optional / supporting</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Bank Transfer + QR */}
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
                        <p className="text-sm"><span className="text-[#015D67] font-semibold block">Organization:</span><span className="text-gray-700">PHD Chamber of Commerce and Industry</span></p>
                        <p className="text-sm"><span className="text-[#015D67] font-semibold block">Bank:</span><span className="text-gray-700">Bank of India</span></p>
                        <p className="text-sm"><span className="text-[#015D67] font-semibold block">Branch:</span><span className="text-gray-700">Panchsheel</span></p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm"><span className="text-[#015D67] font-semibold block">Account Number:</span><span className="text-gray-700 font-mono bg-white px-2 py-1 rounded border border-[#015D67]/10">602220100010035</span></p>
                        <p className="text-sm"><span className="text-[#015D67] font-semibold block">IFSC Code:</span><span className="text-gray-700 font-mono bg-white px-2 py-1 rounded border border-[#015D67]/10">BKID0006022</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-6 bg-white p-4 rounded-lg border border-[#015D67]/10 shadow-sm">
                    <div className="text-center sm:text-left">
                      <h4 className="text-[#015D67] font-semibold mb-2">Scan to Pay (UPI)</h4>
                      <p className="text-sm text-gray-600 mb-4 max-w-xs">
                        Scan the QR code with any UPI app to make your payment of{" "}
                        <span className="font-semibold text-[#015D67]">₹{total.toFixed(2)}</span>
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        {["Google Pay", "PhonePe", "Paytm"].map((app) => (
                          <span key={app} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#015D67]/10 text-[#015D67]">{app}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <img src="/assets/upi-payment.jpg" alt="UPI QR Code" className="w-32 h-32 sm:w-40 sm:h-40 object-cover border-4 border-white rounded-lg shadow-md" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Screenshot */}
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
                      <strong className="text-[#015D67]">₹{total.toFixed(2)}</strong>{" "}
                      using your preferred method and upload a screenshot of the payment confirmation below.
                    </p>
                    <div className="border-2 border-dashed border-[#015D67]/20 rounded-xl p-8 text-center bg-white hover:border-[#015D67]/40 transition-colors duration-200 shadow-sm">
                      <input type="file" id="paymentScreenshot" accept="image/*" onChange={handleFileChange} className="hidden" />
                      <label htmlFor="paymentScreenshot" className="cursor-pointer block">
                        <div className="bg-[#015D67]/5 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                          <Upload className="h-10 w-10 text-[#015D67]" />
                        </div>
                        <div className="text-lg font-medium text-[#015D67] mb-2">
                          {paymentScreenshot ? paymentScreenshot.name : "Upload Payment Screenshot"}
                        </div>
                        <p className="text-sm text-gray-600">Click to select an image file (max 5MB)</p>
                      </label>
                    </div>
                    {paymentScreenshot && (
                      <div className="mt-4 p-4 bg-[#015D67]/5 border border-[#015D67]/20 rounded-lg flex items-center gap-3">
                        <div className="bg-[#015D67] rounded-full p-1 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm text-[#015D67] font-medium">
                          Payment screenshot uploaded: <span className="font-normal">{paymentScreenshot.name}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ── Right Column — Order Summary ── */}
            <div className="md:col-span-1 mt-10 md:mt-0">
              <Card className="sticky top-4 rounded-xl shadow-md border border-[#015D67]/10 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-[#015D67]/10 to-transparent pb-4">
                  <CardTitle className="text-[#015D67]">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 -mr-2">
                      {items.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 p-3 bg-white rounded-lg border border-[#015D67]/5 shadow-sm hover:border-[#015D67]/20 transition-colors duration-200">
                          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md border border-[#015D67]/10 flex-shrink-0 shadow-sm" />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-[#015D67] truncate">{item.name}</h4>
                            <p className="text-[11px] text-gray-400 truncate">{item.code}</p>
                            <div className="flex justify-between items-center mt-1">
                              <p className="text-sm text-gray-600">Qty: <span className="font-medium">{item.quantity}</span></p>
                              <span className="font-bold text-[#015D67]">
                                {item.price === 0 ? "No Fee" : `₹${(item.price * item.quantity).toFixed(2)}`}
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
                        <span className="text-gray-600">Processing Fee</span>
                        <span className="font-medium text-green-600">Nil</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold mt-3 pt-3 border-t border-[#015D67]/10">
                        <span className="text-[#015D67]">Total</span>
                        <span className="text-[#015D67]">₹{total.toFixed(2)}</span>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#015D67] hover:bg-[#015D67]/90 text-white py-6 h-auto font-medium text-base rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing Order..." : "Complete Purchase"}
                    </Button>

                    <div className="mt-6 space-y-4">
                      <div className="flex flex-col space-y-3">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <ShieldCheck className="h-4 w-4 text-[#015D67]" />
                          <span>Secure transaction</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <TruckIcon className="h-4 w-4 text-[#015D67]" />
                          <span>No hidden charges</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 text-center pt-3 border-t border-gray-100">
                        By placing this order, you agree to our terms and conditions. Your order details will be sent to{" "}
                        <strong>phdupcs2026@gmail.com</strong> for processing.
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