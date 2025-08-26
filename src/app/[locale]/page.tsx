'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import BrandsSection from '@/components/BrandsSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import BookCallSection from '@/components/BookCallSection';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  useEffect(() => {
    // Prevent any automatic scrolling immediately
    const preventScroll = (e: Event) => {
      e.preventDefault();
      window.scrollTo(0, 0);
    };

    // Force scroll to top on page load and disable any hash-based scrolling
    const forceScrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    // Clear any hash from URL that might cause scrolling
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
    
    // Immediate scroll
    forceScrollToTop();
    
    // Temporarily prevent scroll events
    window.addEventListener('scroll', preventScroll, { passive: false });
    
    // Remove scroll prevention and do final scroll to top after a delay
    setTimeout(() => {
      window.removeEventListener('scroll', preventScroll);
      forceScrollToTop();
    }, 500);
    
    return () => {
      window.removeEventListener('scroll', preventScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <StructuredData type="organization" />
      <Header />
      <HeroSection />
      <ServicesSection />
      <BrandsSection />
      <BookCallSection />
      <HowWeWorkSection />
      <Footer />
    </div>
  );
}
