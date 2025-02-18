'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');

  // 过滤和排序产品
  const filteredAndSortedProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-orange-100/80 to-white/40 pt-24 pb-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">耳机</h1>
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              {/* Search Input */}
              <input
                type="text"
                placeholder="搜索耳机..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-orange-200 rounded-lg px-4 py-2 text-gray-700 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full md:w-64"
              />
              {/* Sort Dropdown */}
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border border-orange-200 rounded-lg px-4 py-2 text-gray-700 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="default">默认排序</option>
                <option value="price-asc">价格从低到高</option>
                <option value="price-desc">价格从高到低</option>
                <option value="name-asc">按名称排序</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-orange-100">
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={`${product.name} Headphones`}
                    fill
                    className="object-cover transform transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 transition-colors duration-300 group-hover:bg-orange-50">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-orange-500 font-semibold">¥{product.price.toLocaleString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}