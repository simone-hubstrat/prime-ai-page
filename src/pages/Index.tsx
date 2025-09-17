import React, { useEffect } from 'react';
import HeroKiller from '@/components/sections/HeroKiller';
import SocialProof from '@/components/sections/SocialProof';
import TargetSection from '@/components/sections/TargetSection';
import StrategicPricing from '@/components/sections/StrategicPricing';
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
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
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
    <div className="w-full min-h-screen bg-background overflow-x-hidden">
      {/* 1. Hero Killer - Immediate Conversion */}
      <HeroKiller />
      
      {/* 2. Social Proof + Tangible Benefits - Trust Building */}
      <SocialProof />
      
      {/* 3. Target Section - Who This Is For */}
      <TargetSection />
      
      {/* 4. Strategic Pricing + Urgency - Decision Making */}
      <StrategicPricing />
      
      {/* 5. Final CTA + Guarantees - Closing Sale */}
      <FinalKiller />
      
      {/* Simple Footer */}
      <SimpleFooter />
    </div>
  );
};

export default Index;
