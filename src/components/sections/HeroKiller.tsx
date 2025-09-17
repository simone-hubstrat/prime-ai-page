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
      {/* PADDING BOTTOM ENORME: pb-40 sm:pb-48 lg:pb-56 */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-24">
        <div className="container mx-auto max-w-6xl w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start lg:items-center">
            {/* Left */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 w-full order-2 lg:order-1" data-aos="fade-right">
              <Badge variant="default" className="w-fit bg-primary/20 text-primary border border-primary/30 rounded-full px-3 py-1">
                OFFERTA LIMITATA
              </Badge>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                Questa landing page è stata creata con l'AI. Vuoi imparare a farlo anche tu?
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Il corso Prime AI è pratico e completo per creare landing page efficaci in soli 10 mini lezioni, anche se parti da zero
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
                <div className="conversion-card text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary mb-1">€27,97</div>
                  <div className="text-xs sm:text-sm text-muted-foreground break-words">Investimento minimo, valore massimo</div>
                </div>
                <div className="conversion-card text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-1">10 mini lezioni</div>
                  <div className="text-xs sm:text-sm text-muted-foreground break-words">Dalla teoria alla tua prima landing</div>
                </div>
                <div className="conversion-card text-center sm:col-span-3 lg:col-span-1">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-1">Zero codice</div>
                  <div className="text-xs sm:text-sm text-muted-foreground break-words">Anche se non sei un programmatore</div>
                </div>
              </div>
              
              {/* Pricing Card - CON MARGIN BOTTOM GIGANTESCO */}
              <div className="conversion-card bg-card/80 backdrop-blur-sm w-full max-w-lg mx-auto lg:mx-0 mt-6 sm:mt-8 mb-24 sm:mb-32 lg:mb-40" data-aos="zoom-in">
                <div className="flex items-baseline justify-center gap-3 mb-4">
                  <span className="text-sm sm:text-base text-muted-foreground line-through">€49,99</span>
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary">
                    €<AnimatedCounter from={49} to={27} duration={1500} />,97
                  </div>
                </div>
                
                <Button variant="secondary" size="lg" className="w-full hover:scale-[1.02] transition-all duration-300 mb-4">
                  Inizia ora - Accedi al corso
                </Button>
                
                <p className="text-xs sm:text-sm text-center text-muted-foreground mb-4 leading-relaxed">
                  Accesso immediato • Nessuna competenza tecnica richiesta
                </p>
                
                <div className="text-center p-3 bg-secondary/10 rounded-lg border border-secondary/20 w-full">
                  <p className="text-secondary font-semibold text-xs sm:text-sm leading-relaxed">
                    Offerta scade tra:<br className="sm:hidden" />
                    <span className="block sm:inline sm:ml-1 font-bold">{countdown.displayTime}</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right - Hero Image */}
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none order-1 lg:order-2 mb-8 lg:mb-0">
              <img 
                src="https://vg-bunny-cdn.b-cdn.net/public/x0hdoi7c_.png"
                alt="Persona che lavora al computer con AI"
                className="w-full h-auto object-contain rounded-lg shadow-[var(--shadow-card)]"
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
