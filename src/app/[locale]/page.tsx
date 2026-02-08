'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import ServicesSection from '@/components/ServicesSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import BookCallSection from '@/components/BookCallSection';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <div className="min-h-screen">
      <StructuredData type="organization" />
      <Header />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <HowWeWorkSection />
      <BookCallSection />
      <Footer />
    </div>
  );
}
