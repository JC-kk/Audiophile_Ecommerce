import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-screen bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent z-10"></div>
      
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-headphones.jpg"
          alt="Focal Clear Headphones"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Focal Clear
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            独家优惠：Focal Clear 动圈耳机现已到货，准备发货！
          </p>
          <Link
            href="/products/focal-clear"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            立即购买
          </Link>
        </div>
      </div>

      {/* Wireless Icon */}
      <div className="absolute top-4 left-4 z-30">
        <svg
          className="w-6 h-6 text-white"
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
    </div>
  );
}