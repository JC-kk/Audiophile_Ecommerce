'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/data/products';
import Navbar from '@/components/Navbar';

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold text-red-600">产品未找到</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-96">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-gray-600 mb-4">{product.brand}</p>
            <p className="text-2xl font-bold text-orange-500 mb-6">
              ¥{product.price.toLocaleString()}
            </p>
            <button
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
              onClick={() => {
                const cart = JSON.parse(localStorage.getItem('cart') || '[]');
                const existingItem = cart.find((item: { productId: string }) => item.productId === product.id);
                
                if (existingItem) {
                  existingItem.quantity += 1;
                } else {
                  cart.push({ productId: product.id, quantity: 1 });
                }
                
                localStorage.setItem('cart', JSON.stringify(cart));
                alert('已添加到购物车');
              }}
            >
              添加到购物车
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}