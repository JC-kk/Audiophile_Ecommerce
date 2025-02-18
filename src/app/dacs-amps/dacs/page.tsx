import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function DacsPage() {
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const dacs = products.filter(product => 
    product.category === 'dacs-amps' && 
    product.subcategory === 'dacs'
  );

  const sortedProducts = [...dacs].sort((a, b) => {
    if (sortBy === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    } else {
      return sortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    }
  });

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">数字模拟转换器(DAC)</h1>
        <div className="flex gap-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white"
          >
            <option value="name">按名称</option>
            <option value="price">按价格</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white"
          >
            <option value="asc">升序</option>
            <option value="desc">降序</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.brand}</p>
                <p className="text-orange-600 font-bold">¥{product.price.toLocaleString()}</p>
                <Link
                  href={`/product/${product.slug}`}
                  className="mt-4 block text-center bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  查看详情
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">暂无商品</p>
        )}
      </div>
    </div>
  );
}