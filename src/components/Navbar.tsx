'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-orange-500/75 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">Headphones.com</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索耳机、放大器、DAC等"
                className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Headphones Dropdown */}
            <div className="relative group">
              <button className="text-white/80 hover:text-white transition-colors py-2">Headphones</button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/headphones" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">All Headphones</Link>
                  <Link href="/headphones/over-ear" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Over-Ear & On-Ear Headphones</Link>
                  <Link href="/headphones/in-ear" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Earbuds & In-Ear Headphones</Link>
                  <Link href="/headphones/wireless" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Wireless Headphones</Link>
                  <Link href="/headphones/noise-canceling" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Noise Canceling Headphones</Link>
                  <Link href="/headphones/bundles" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Curated Headphones Bundles</Link>
                  <Link href="/headphones/flagship" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Flagship Headphones</Link>
                </div>
              </div>
            </div>

            {/* DACs & Amplifiers Dropdown */}
            <div className="relative group">
              <button className="text-white/80 hover:text-white transition-colors py-2">DACs & Amplifiers</button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/dacs-amps" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">All DACs & amplifiers</Link>
                  <Link href="/dacs-amps/combo" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">DAC/Amps</Link>
                  <Link href="/dacs-amps/portable" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Portable</Link>
                  <Link href="/dacs-amps/desktop" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Desktop</Link>
                  <Link href="/dacs-amps/dacs" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">DACs</Link>
                  <Link href="/dacs-amps/amplifiers" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Amplifiers</Link>
                  <Link href="/dacs-amps/players" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Digital Audio Players</Link>
                </div>
              </div>
            </div>

            {/* Accessories Dropdown */}
            <div className="relative group">
              <button className="text-white/80 hover:text-white transition-colors py-2">Accessories</button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/accessories" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">All Accessories</Link>
                  <Link href="/accessories/cables" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Cables</Link>
                  <Link href="/accessories/stands" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Stands</Link>
                  <Link href="/accessories/ear-pads" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Ear Pads & Tips</Link>
                  <Link href="/accessories/power" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Power Strips</Link>
                </div>
              </div>
            </div>

            <Link href="/account" className="text-white/80 hover:text-white transition-colors">
              <div className="flex items-center space-x-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>登录</span>
              </div>
            </Link>
            <Link href="/cart" className="text-white/80 hover:text-white transition-colors">
              <div className="flex items-center space-x-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>购物车</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}