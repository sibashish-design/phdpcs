// src/types/index.ts

import type { PriceBand } from "@/data/products";

// ── Product — matches products.ts exactly ─────────────────────────────────────
export interface Product {
  id: string;
  code: string;
  track: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  priceBand: PriceBand;
  priceNote: string;
  featured: boolean;
  image: string;
  universalMandatoryDocs: string[];
  categoryMandatoryDocs: string[];
  supportingOptionalDocs: string[];
  eligibilityNote?: string;
}

// ── Cart ──────────────────────────────────────────────────────────────────────
export interface CartItem extends Product {
  quantity: number;
}

// ── Checkout / Order ──────────────────────────────────────────────────────────
export interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface OrderData {
  user: UserDetails;
  items: CartItem[];
  total: number;
  paymentScreenshot: File | null;
  orderDate: string;
  orderId: string;
}

export type EmailOrderData = {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  orderItems: string;
  orderTotal: string;
  orderId: string;
  orderDate: string;
  paymentScreenshotUrl: string;
};