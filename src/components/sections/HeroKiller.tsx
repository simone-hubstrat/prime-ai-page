import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { useCountdown } from '@/hooks/use-countdown';

const HeroKiller: React.FC = () => {
  const countdown = useCountdown(47, 23);
  
  return (
    <section className="relative min-h-screen flex items-start lg:items-center justify-center px-4 py-16 pb-24 sm:pb-32">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(10, 14, 26)"
        gradientBackgroundEnd="rgb(20, 24, 36)"
        firstColor="18, 113, 255"
        secondColor="221, 74, 255"
        thirdColor="100, 220, 255"
        fourthColor="200, 50, 50"
        fifthColor="180, 180, 50"
        pointerColor="140, 100, 255"
        size="80%"
        blendingValue="hard-light"
        interactive={false}
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Ultra-Converting Copy */}
          <div className="space-y-8">
            <Badge variant="default" className="w-fit bg-primary/20 text-primary border border-primary/30 rounded-full">
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
            <div className="conversion-card bg-muted/50 mb-8">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="price-crossed">€49,99</span>
                <div className="price-display">
                  €<AnimatedCounter from={49} to={27} duration={1500} />,97
                </div>
              </div>
              
              <Button variant="secondary" size="lg" className="w-full mb-4">
                Inizia ora - Accedi al corso
              </Button>
              
              <p className="text-sm text-center text-muted-foreground mb-4">
                Accesso immediato • Nessuna competenza tecnica richiesta
              </p>
              
              <div className="text-center p-3 bg-secondary/10 rounded-lg border border-secondary/20 w-full">
                <p className="text-secondary font-semibold text-xs sm:text-sm">
                  Offerta scade tra:<br className="sm:hidden" />
                  <span className="block sm:inline sm:ml-1">{countdown.displayTime}</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Right - Hero Image */}
          <div className="relative">
            <img 
              src="https://vg-bunny-cdn.b-cdn.net/public/x0hdoi7c_.png"
              alt="Persona che lavora al computer con AI"
              className="w-full h-auto rounded-lg shadow-[var(--shadow-card)]"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroKiller;
