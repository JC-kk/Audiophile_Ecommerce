'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function BeyerdynamicT1Page() {
  const [quantity, setQuantity] = useState(1);
  const price = 14999;

  const handleAddToCart = () => {
    // TODO: Implement cart functionality
    console.log('Added to cart');
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square">
            <Image
              src="/images/beyerdynamic-t1.jpg"
              alt="Beyerdynamic T1"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">拜亚动力 T1</h1>
            <p className="text-2xl font-semibold text-orange-500">¥{price}</p>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">产品特点</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Tesla磁体技术，提供强大的磁场驱动力</li>
                <li>半开放式设计，平衡声场与隔音性能</li>
                <li>双层音圈设计，确保精准的声音重放</li>
                <li>高品质天鹅绒耳垫，带来舒适的佩戴体验</li>
                <li>德国制造，精工品质</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900">技术规格</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold">类型</p>
                  <p className="text-gray-600">半开放式动圈耳机</p>
                </div>
                <div>
                  <p className="font-semibold">阻抗</p>
                  <p className="text-gray-600">600Ω</p>
                </div>
                <div>
                  <p className="font-semibold">灵敏度</p>
                  <p className="text-gray-600">102dB/mW</p>
                </div>
                <div>
                  <p className="font-semibold">重量</p>
                  <p className="text-gray-600">360g（不含线缆）</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                加入购物车
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}