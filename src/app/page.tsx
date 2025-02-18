import Image from "next/image";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductList from '@/components/ProductList';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductList />
    </main>
  );
}
