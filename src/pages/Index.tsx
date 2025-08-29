import React, { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import LearningSection from '@/components/sections/LearningSection';
import TargetSection from '@/components/sections/TargetSection';
import PricingSection from '@/components/sections/PricingSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import Footer from '@/components/sections/Footer';

const Index: React.FC = () => {
  // Scroll reveal animation setup
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Performance optimization: preload critical images
  useEffect(() => {
    const preloadImages = [
      '/src/assets/hero-ai-course.jpg',
      '/src/assets/course-benefits.jpg',
    ];
    
    preloadImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Above the fold */}
      <HeroSection />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Learning Outcomes */}
      <LearningSection />
      
      {/* Target Audience */}
      <TargetSection />
      
      {/* Pricing Highlight */}
      <PricingSection />
      
      {/* Final CTA */}
      <FinalCTASection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
