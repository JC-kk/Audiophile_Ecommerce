'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-screen bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent z-10"></div>
      
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-headphones.jpg"
          alt="Focal Clear Headphones"
          fill
          className="object-cover transform scale-105 transition-transform duration-10000 hover:scale-110"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Focal Clear
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            独家优惠：Focal Clear 动圈耳机现已到货，准备发货！
          </p>
          <Link
            href="/products/focal-clear"
            className="btn-primary group inline-flex items-center"
          >
            立即购买
            <svg
              className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Wireless Icon with Animation */}
      <div className="absolute top-4 left-4 z-30 animate-pulse">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
          />
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-4 right-4 z-30">
        <div className="glass-effect px-4 py-2 rounded-full text-white/90 text-sm font-medium">
          高端音频体验
        </div>
      </div>
    </div>
  );
}