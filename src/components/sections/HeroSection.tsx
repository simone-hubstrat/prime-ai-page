import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { Euro, Clock, Code } from 'lucide-react';
import heroImage from '@/assets/hero-ai-course.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background-alt to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 fade-up">
            {/* Badge */}
            <Badge variant="limited" className="fade-up fade-up-delay-1">
              🚀 OFFERTA LIMITATA
            </Badge>

            {/* Main Headline */}
            <h1 className="hero-headline fade-up fade-up-delay-2">
              Questa landing page è stata creata con l'AI. Vuoi imparare a farlo anche tu?
            </h1>

            {/* Subtitle */}
            <h2 className="hero-subtitle fade-up fade-up-delay-3">
              Il corso Prime AI è pratico e completo per creare landing page efficaci in soli 10 mini lezioni, anche se parti da zero
            </h2>

            {/* Key Points */}
            <div className="grid md:grid-cols-3 gap-6 py-8 fade-up fade-up-delay-3">
              <div className="flex items-center space-x-3 p-4 bg-card rounded-xl border border-border/50 hover-lift">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Euro className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-neutral">Solo €27,97</p>
                  <p className="text-sm text-neutral/70">Investimento minimo, valore massimo</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-card rounded-xl border border-border/50 hover-lift">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-neutral">10 mini lezioni</p>
                  <p className="text-sm text-neutral/70">Dalla teoria alla tua prima landing</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-card rounded-xl border border-border/50 hover-lift">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral/10 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-neutral" />
                </div>
                <div>
                  <p className="font-semibold text-neutral">Zero codice</p>
                  <p className="text-sm text-neutral/70">Anche se non sei un programmatore</p>
                </div>
              </div>
            </div>

            {/* Pricing Hero */}
            <div className="bg-card p-8 rounded-2xl shadow-elegant border border-border/50 fade-up fade-up-delay-3">
              <div className="flex items-baseline space-x-4 mb-6">
                <span className="price-original">€49,99</span>
                <div className="price-hero">
                  €<AnimatedCounter from={49} to={27} duration={1500} />,97
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="cta-primary w-full text-xl py-6 hover-glow"
              >
                Inizia ora - Accedi al corso
              </Button>
              
              <p className="text-center text-sm text-neutral/70 mt-4">
                Accesso immediato • Nessuna competenza tecnica richiesta
              </p>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative fade-up fade-up-delay-2">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Persona che lavora al computer con elementi AI"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;