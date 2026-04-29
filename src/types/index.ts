export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  subcategory?: string;
  featured?: boolean;
  inStock: boolean;
  rating: number;
  reviews: number;
  viewdetails?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

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
