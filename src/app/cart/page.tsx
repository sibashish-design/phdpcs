'use client';
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, ShieldCheck} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

export default function CartPage() {
  const { items, total, updateQuantity, removeFromCart, itemCount } = useCart();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      toast.success('Item removed from cart');
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveItem = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast.success(`${productName} removed from cart`);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16 flex flex-col items-center">
            <div className="bg-[#015D67]/5 p-6 rounded-full mb-6">
              <ShoppingBag className="h-24 w-24 text-[#015D67]" />
            </div>
            <h2 className="text-3xl font-bold text-[#015D67] mb-3">Your cart is empty</h2>
            <p className="text-gray-600 mb-10 max-w-md mx-auto">Looks like you haven&#39;t added any items to your cart yet.</p>
            <Link href="/products">
              <Button size="lg" className="bg-[#015D67] hover:bg-[#015D67]/90 text-white px-8 py-6 h-auto font-medium text-base rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <Link href="/products" className="inline-flex items-center text-[#015D67] hover:text-[#015D67]/80 mb-4 transition-colors duration-200">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#015D67] mb-2">Your Nomination Cart</h1>
          <p className="text-gray-600 mt-2">
            {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-5">
              {items.map((item) => (
                <Card key={item.id} className="bg-white border border-[#015D67]/10 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-6">
                      <div className="relative w-full sm:w-auto">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full sm:w-24 sm:h-24 h-40 object-cover rounded-lg border border-[#015D67]/10 flex-shrink-0 shadow-sm"
                        />
                        <Badge 
                          className="absolute top-2 right-2 bg-[#015D67] text-white font-medium"
                        >
                          ₹{item.price}
                        </Badge>
                      </div>
                      
                      <div className="flex-1 min-w-0 flex flex-col justify-between w-full">
                        <div>
                          <h3 className="font-semibold text-lg sm:text-xl text-[#015D67] mb-2">{item.name}</h3>
                          <p className="text-gray-500 text-sm mb-4 hidden sm:block">Premium quality product</p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                          <div className="flex items-center gap-2 bg-gray-50 rounded-full p-1 border border-gray-100">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="h-8 w-8 rounded-full bg-white border-none shadow-sm hover:bg-[#015D67] hover:text-white transition-all duration-200"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center font-semibold select-none">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="h-8 w-8 rounded-full bg-white border-none shadow-sm hover:bg-[#015D67] hover:text-white transition-all duration-200"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
                            <p className="text-lg font-bold text-[#015D67] sm:hidden">₹{item.price}</p>
                            <p className="text-lg font-bold text-[#015D67] hidden sm:block">₹{(item.price * item.quantity).toFixed(2)}</p>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleRemoveItem(item.id, item.name)}
                              className="text-red-500 hover:text-white hover:bg-red-500 h-8 w-8 rounded-full border-none shadow-sm transition-all duration-200"
                              aria-label={`Remove ${item.name}`}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 border border-[#015D67]/10 rounded-xl shadow-md overflow-hidden">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#015D67]">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm border-b border-gray-100 pb-3">
                      <span className="font-medium text-gray-700">{item.name} <span className="text-gray-500">× {item.quantity}</span></span>
                      <span className="font-semibold text-[#015D67]">₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 -mx-8 px-8 py-4 mb-6">
                  <div className="flex justify-between text-lg font-bold text-[#015D67]">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>

                <Link href="/checkout" className="w-full">
                  <Button size="lg" className="w-full bg-[#015D67] hover:bg-[#015D67]/90 text-white py-6 h-auto font-medium text-base rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                    Proceed to Checkout
                  </Button>
                </Link>

                <div className="mt-6 space-y-4">
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <ShieldCheck className="h-4 w-4 text-[#015D67]" />
                      <span>Secure payment</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 text-center">
                    <Link href="/products" className="text-[#015D67] hover:text-[#015D67]/80 text-sm font-medium transition-colors duration-200">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}