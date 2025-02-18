import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">耳机</h1>
          <div className="flex space-x-4">
            {/* Sort Dropdown */}
            <select className="border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>默认排序</option>
              <option>价格从低到高</option>
              <option>价格从高到低</option>
              <option>最新上架</option>
            </select>
          </div>
        </div>

        {/* Filters and Products Grid */}
        <div className="grid grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="col-span-1 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">品牌</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-orange-500" />
                  <span className="ml-2">Focal</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-orange-500" />
                  <span className="ml-2">Sennheiser</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-orange-500" />
                  <span className="ml-2">Sony</span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">价格区间</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-orange-500" />
                  <span className="ml-2">¥0 - ¥1,000</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-orange-500" />
                  <span className="ml-2">¥1,000 - ¥5,000</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-orange-500" />
                  <span className="ml-2">¥5,000以上</span>
                </label>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product Card */}
            <Link href="/products/focal-clear" className="group">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src="/images/hero-headphones.jpg"
                    alt="Focal Clear Headphones"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Focal Clear</h3>
                  <p className="text-orange-500 font-semibold">¥12,999</p>
                </div>
              </div>
            </Link>

            {/* More Product Cards */}
            {/* Add more product cards here */}
          </div>
        </div>
      </div>
    </div>
  );
}