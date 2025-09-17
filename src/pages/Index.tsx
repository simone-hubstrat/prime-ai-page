import React from 'react';
import HeroKiller from '../components/sections/HeroKiller';
import SocialProof from '../components/sections/SocialProof';
import FinalKiller from '../components/sections/FinalKiller';

const Index: React.FC = () => {
  return (
    <main className="w-full min-h-screen">
      <HeroKiller />
      <SocialProof />
      <FinalKiller />
    </main>
  );
};

export default Index;