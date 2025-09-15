import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { BackgroundHero } from '@/components/ui/background-hero';
import heroImage from '@/assets/hero-new.png';

const HeroKiller: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative">
      <BackgroundHero />
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Ultra-Converting Copy */}
          <div className="space-y-8 hero-content">
            <Badge variant="limited" className="w-fit">
              🚀 OFFERTA LIMITATA
            </Badge>
            
            <h1 className="hero-title">
              Questa landing page è stata creata con l'AI. Vuoi imparare a farlo anche tu?
            </h1>
            
            <p className="hero-subtitle">
              Il corso Prime AI è pratico e completo per creare landing page efficaci in soli 10 mini lezioni, anche se parti da zero
            </p>
            
            {/* Value Props */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="conversion-card text-center">
                <div className="text-2xl font-bold text-secondary mb-1">€27,97</div>
                <div className="text-sm text-muted-foreground">Investimento minimo</div>
              </div>
              <div className="conversion-card text-center">
                <div className="text-2xl font-bold text-primary mb-1">10 lezioni</div>
                <div className="text-sm text-muted-foreground">Solo 2 ore totali</div>
              </div>
              <div className="conversion-card text-center">
                <div className="text-2xl font-bold text-foreground mb-1">Zero codice</div>
                <div className="text-sm text-muted-foreground">Anche per principianti</div>
              </div>
            </div>
            
            {/* Price + CTA */}
            <div className="conversion-card bg-muted/50">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="price-crossed">€49,99</span>
                <div className="price-display">
                  €<AnimatedCounter from={49} to={27} duration={1500} />,97
                </div>
              </div>
              
              <Button variant="secondary" size="lg" className="w-full">
                Inizia ora - Accedi al corso
              </Button>
              
              <p className="text-sm text-center text-muted-foreground mt-3">
                Accesso immediato • Nessuna competenza tecnica richiesta
              </p>
            </div>
          </div>
          
          {/* Right - Hero Image */}
          <div className="relative hero-image-container">
            <img 
              src={heroImage} 
              alt="Persona che lavora al computer con AI"
              className="hero-image-blend w-full h-auto rounded-lg shadow-[var(--shadow-card)] relative z-10"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroKiller;