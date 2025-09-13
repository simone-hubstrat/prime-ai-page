import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import BackgroundHero from '@/components/ui/demo';

const HeroKiller: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16">
      {/* Background Gradient - esatto come richiesto */}
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Ultra-Converting Copy */}
          <div className="space-y-8">
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
              
              <Button size="xl" className="w-full cta-primary mb-4">
                Inizia ora - Accedi al corso
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                Accesso immediato • Nessuna competenza tecnica richiesta
              </p>
            </div>
          </div>
          
          {/* Right - Hero Image */}
          <div className="relative">
            <div className="hero-image-container">
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Persona che lavora al computer con AI"
                className="hero-image relative z-20"
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
                  <div className="text-xs text-muted-foreground mb-1">Già 847+ studenti attivi</div>
                  <div className="text-xs text-muted-foreground">4.9/5 (127 recensioni)</div>
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