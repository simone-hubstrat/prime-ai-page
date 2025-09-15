import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { useCountdown } from '@/hooks/use-countdown';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';

const HeroKiller: React.FC = () => {
  const countdown = useCountdown(47, 23);

  return (
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
    >
      <section className="min-h-screen flex items-center justify-center px-4 py-16 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Ultra-Converting Copy */}
            <div className="space-y-8" data-aos="fade-right">
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
              <div className="grid md:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="200">
                <div className="conversion-card text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-secondary mb-1">€27,97</div>
                  <div className="text-sm text-muted-foreground">Investimento minimo, valore massimo</div>
                </div>
                <div className="conversion-card text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-primary mb-1">10 mini lezioni</div>
                  <div className="text-sm text-muted-foreground">Dalla teoria alla tua prima landing</div>
                </div>
                <div className="conversion-card text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-foreground mb-1">Zero codice</div>
                  <div className="text-sm text-muted-foreground">Anche se non sei un programmatore</div>
                </div>
              </div>
              
              {/* Price + CTA */}
              <div className="conversion-card bg-card/80 backdrop-blur-sm" data-aos="zoom-in" data-aos-delay="400">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="price-crossed">€49,99</span>
                  <div className="price-display">
                    €<AnimatedCounter from={49} to={27} duration={1500} />,97
                  </div>
                </div>
                
                <Button variant="secondary" size="lg" className="w-full hover:scale-[1.02] transition-all duration-300">
                  Inizia ora - Accedi al corso
                </Button>
                
                <p className="text-sm text-center text-muted-foreground mt-3">
                  Accesso immediato • Nessuna competenza tecnica richiesta
                </p>
                
                {/* Countdown */}
                <div className="text-center mt-4 p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                  <p className="text-secondary font-semibold text-sm">
                    ⏰ Offerta scade tra: {countdown.displayTime}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right - Hero Image */}
            <div className="relative" data-aos="fade-left" data-aos-delay="300">
              <img 
                src="https://vg-bunny-cdn.b-cdn.net/public/x0hdoi7c_.png"
                alt="Persona che lavora al computer con AI"
                className="hero-image-natural shadow-[var(--shadow-card)] hover:scale-[1.02] transition-transform duration-500"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
    </BackgroundGradientAnimation>
  );
};

export default HeroKiller;