import React from 'react';
import HeroKiller from '../components/sections/HeroKiller';
import SocialProof from '../components/sections/SocialProof';
import StrategicPricing from '../components/sections/StrategicPricing';
import TargetSection from '../components/sections/TargetSection';
import FinalKiller from '../components/sections/FinalKiller';
import SimpleFooter from '../components/sections/SimpleFooter';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-full">
      <main className="flex-1 w-full bg-background overflow-x-hidden">
        <HeroKiller />
        <SocialProof />
        <StrategicPricing />
        <TargetSection />
        <FinalKiller />
        <SimpleFooter />
      </main>
    </div>
  );
};

export default Index;
