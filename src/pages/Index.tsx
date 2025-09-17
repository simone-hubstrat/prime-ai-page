import React from 'react';
import HeroKiller from '../components/sections/HeroKiller';
import SocialProof from '../components/sections/SocialProof';
import StrategicPricing from '../components/sections/StrategicPricing';
import TargetSection from '../components/sections/TargetSection';
import FinalKiller from '../components/sections/FinalKiller';
import SimpleFooter from '../components/sections/SimpleFooter';

const Index: React.FC = () => {
  return (
    <main className="landing-container w-full bg-background">
      <HeroKiller />
      <SocialProof />
      <StrategicPricing />
      <TargetSection />
      <FinalKiller />
      <SimpleFooter />
    </main>
  );
};

export default Index;
