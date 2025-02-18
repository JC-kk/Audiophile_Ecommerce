'use client';

import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart: removeItem, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title text-center mb-12">购物车</h1>
        <div className="glass-effect rounded-xl shadow-lg overflow-hidden">
          {cartItems.length === 0 ? (
            <div className="p-12 text-center text-gray-500 animate-fade-in">
              <svg
                className="w-16 h-16 mx-auto mb-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p className="text-xl">购物车是空的</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200/30">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-24 h-24 relative rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-6 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                        <p className="text-lg font-bold text-orange-500">
                          ¥{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center glass-effect rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            -
                          </button>
                          <span className="px-4 py-2 text-gray-900 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors font-medium"
                        >
                          删除
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {cartItems.length > 0 && (
            <div className="p-6 bg-gradient-to-b from-transparent to-gray-50/80">
              <div className="flex items-center justify-between mb-6">
                <p className="text-xl font-medium text-gray-900">总计</p>
                <p className="text-3xl font-bold text-orange-500">
                  ¥{total.toLocaleString()}
                </p>
              </div>
              <button className="btn-primary w-full py-4 text-lg font-medium">
                结算
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}