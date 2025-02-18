'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function CartPage() {
  const [quantity, setQuantity] = useState(1);
  const price = 12999;
  const total = price * quantity;

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">购物车</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Cart Item */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center space-x-4">
                <div className="relative w-24 h-24">
                  <Image
                    src="/images/hero-headphones.jpg"
                    alt="Focal Clear Headphones"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Focal Clear
                  </h3>
                  <p className="text-orange-500 font-semibold">¥{price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={handleDecrease}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button 
                    onClick={handleIncrease}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                订单摘要
              </h2>

              <div className="flex justify-between text-gray-600">
                <span>商品小计</span>
                <span>¥{total}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>运费</span>
                <span>免运费</span>
              </div>

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>总计</span>
                  <span className="text-orange-500">¥{total}</span>
                </div>
              </div>

              <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors mt-6">
                结算
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
