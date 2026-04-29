import React from 'react';
import Link from 'next/link';
import { CheckCircle, Home, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="text-center">
          <CardContent className="p-12">
            <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Order Confirmed!
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your order! We&#39;ve received your payment screenshot and order details. 
              Our team will review and process your order shortly.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-blue-900 mb-2">What happens next?</h2>
              <ul className="text-sm text-blue-800 space-y-2 text-left">
                <li>• We&#39;ll verify your payment screenshot</li>
                <li>• You&#39;ll receive an email confirmation within 24 hours</li>
                <li>• Your order will be prepared and shipped</li>
                <li>• You&#39;ll receive tracking information once shipped</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" className="w-full sm:w-auto">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
              
              <Link href="/products">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Continue Shopping
                </Button>
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Need help? Contact us at{' '}
                <a href="mailto:phdccihits2025@gmail.com" className="text-blue-600 hover:underline">
                  phdccihits2025@gmail.com
                </a>{' '}
                or call{' '}
                <a href="tel:+917417809339" className="text-blue-600 hover:underline">
                  +91 74178 09339
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}