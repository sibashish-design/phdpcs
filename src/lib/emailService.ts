import emailjs from '@emailjs/browser';

// EmailJS configuration using environment variables
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export interface EmailOrderData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  orderItems: string;
  orderTotal: string;
  orderId: string;
  orderDate: string;
  paymentScreenshotName: string;
  payment_screenshot_url: string; // ✅ Add this line
}

export const sendOrderEmail = async (orderData: EmailOrderData): Promise<boolean> => {
  try {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_PUBLIC_KEY);

    const templateParams = {
      to_email: 'phdccihits2025@gmail.com',
      customer_name: orderData.customerName,
      customer_email: orderData.customerEmail,
      customer_phone: orderData.customerPhone,
      customer_address: orderData.customerAddress,
      order_items: orderData.orderItems,
      order_total: orderData.orderTotal,
      order_id: orderData.orderId,
      order_date: orderData.orderDate,
      payment_screenshot: orderData.paymentScreenshotName,
      payment_screenshot_url: orderData.payment_screenshot_url,
      reply_to: orderData.customerEmail,
    };

    console.log('Sending email with params:', templateParams);

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response );
    return response.status === 200;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};