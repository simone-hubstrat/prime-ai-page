import React, { useEffect } from 'react';
import HeroKiller from '@/components/sections/HeroKiller';
import SocialProof from '@/components/sections/SocialProof';
import StrategicPricing from '@/components/sections/StrategicPricing';
import TargetSection from '@/components/sections/TargetSection';
import FinalKiller from '@/components/sections/FinalKiller';
import SimpleFooter from '@/components/sections/SimpleFooter';

const Index: React.FC = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
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

  // Preload critical images
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
      {/* 1. Hero Killer - Immediate Conversion */}
      <HeroKiller />
      
      {/* 2. Social Proof + Tangible Benefits - Trust Building */}
      <SocialProof />
      
      {/* 3. Strategic Pricing + Urgency - Decision Making */}
      <StrategicPricing />
      
      {/* 4. Target Section */}
      <TargetSection />
      
      {/* 5. Final CTA + Guarantees - Closing Sale */}
      <FinalKiller />
      
      {/* Simple Footer */}
      <SimpleFooter />
    </main>
  );
};

export default Index;
