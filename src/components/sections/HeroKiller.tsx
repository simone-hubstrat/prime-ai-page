import React from 'react';
import { Button } from '../ui/button';
import { AnimatedCounter } from '../ui/animated-counter';
import { BackgroundHero } from '../ui/background-hero';

const HeroKiller = () => {
  return (
    <section className="relative min-h-screen py-20 px-4 flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background-mid to-background-end">
      <BackgroundHero />
      <div className="hero-content container mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
            🚀 OFFERTA LIMITATA
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Questa landing page è stata creata con l'AI. Vuoi imparare a farlo anche tu?
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Il corso Prime AI è pratico e completo per creare landing page efficaci in soli 10 mini lezioni, anche se parti da zero
          </p>
          
          <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
            <div className="text-3xl font-bold text-primary">€27,97</div>
            <div className="text-sm text-muted-foreground">
              <div>Investimento minimo</div>
              <div>10 lezioni</div>
            </div>
            <div className="text-sm text-muted-foreground">
              <div>Solo 2 ore totali</div>
              <div>Zero codice</div>
            </div>
            <div className="text-sm text-muted-foreground">
              <div>Anche per principianti</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-8">
            <div className="text-lg text-muted-foreground line-through">€49,99</div>
            <div className="text-4xl font-bold text-primary">€27,97</div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="text-lg px-8 py-6 shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300">
              Inizia ora - Accedi al corso
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4 text-center lg:text-left">
            Accesso immediato • Nessuna competenza tecnica richiesta
          </p>
        </div>
        
        {/* Right Column - Image */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative max-w-md mx-auto lg:max-w-full">
            <img 
              src="https://vg-bunny-cdn.b-cdn.net/public/x0hdoi7c_.png" 
              alt="Persona che lavora al computer con AI"
              className="w-full h-auto rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 relative z-20"
            />
            
            {/* Social Proof */}
            <div className="absolute -bottom-4 -left-4 bg-background/95 backdrop-blur-sm p-4 rounded-xl shadow-glow border z-30">
              <div className="text-center">
                <div className="text-sm font-semibold text-secondary mb-1">
                  Già <AnimatedCounter from={0} to={847} duration={2000} />+ studenti attivi
                </div>
                <div className="flex items-center justify-center gap-1 text-yellow-500">
                  ⭐⭐⭐⭐⭐
                </div>
                <div className="text-xs text-muted-foreground">
                  4.9/5 (127 recensioni)
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-background/95 backdrop-blur-sm p-3 rounded-xl shadow-glow border z-30">
              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-1">
                  Già 847+ studenti attivi
                </div>
                <div className="text-xs text-muted-foreground">
                  4.9/5 (127 recensioni)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroKiller;