import Image from 'next/image';
import Link from 'next/link';

export default function FocalClearProduct() {
  return (
    <div className="min-h-screen bg-white">
      {/* Product Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">首页</Link>
            </li>
            <li>
              <span className="text-gray-300 mx-2">/</span>
            </li>
            <li>
              <Link href="/products" className="text-gray-500 hover:text-gray-700">耳机</Link>
            </li>
            <li>
              <span className="text-gray-300 mx-2">/</span>
            </li>
            <li className="text-gray-900">Focal Clear</li>
          </ol>
        </nav>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="relative aspect-square">
            <Image
              src="/images/hero-headphones.jpg"
              alt="Focal Clear Headphones"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Focal Clear</h1>
            <div className="text-2xl text-orange-500 font-semibold mb-6">¥12,999</div>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Focal Clear是一款高端开放式动圈耳机，采用独特的M型纯铝/镁合金振膜，40mm驱动单元提供出色的声音重现能力。
              </p>
              
              <div className="border-t border-b py-4">
                <h3 className="text-lg font-semibold mb-2">主要特点</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 频率响应：5Hz-28kHz</li>
                  <li>• 阻抗：55欧姆</li>
                  <li>• 灵敏度：104dB SPL</li>
                  <li>• THD：0.25% @ 1kHz</li>
                </ul>
              </div>

              <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                加入购物车
              </button>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  正品保证
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  24小时发货
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}