import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { 
  Check, 
  Star, 
  Crown,
  Zap
} from 'lucide-react';

const PricingSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.scroll-reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    "10 lezioni video complete e pratiche",
    "Template di landing page professionali",
    "Prompt library esclusiva per AI",
    "Accesso alla community privata",
    "Aggiornamenti gratuiti a vita",
    "Supporto diretto per 30 giorni",
    "Certificato di completamento",
    "Garanzia soddisfatti o rimborsati 30 giorni"
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 highlight-section opacity-95"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <div className="inline-flex items-center space-x-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Crown className="w-5 h-5" />
              <span className="font-semibold">Offerta Esclusiva</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Tutto questo a soli <span className="text-secondary">€27,97</span>
            </h2>
            
            <div className="max-w-2xl mx-auto bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <blockquote className="text-xl lg:text-2xl text-primary-foreground/90 italic leading-relaxed">
                "Un piccolo investimento per una competenza che ti accompagnerà per sempre"
              </blockquote>
              <div className="flex items-center justify-center mt-4 space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-secondary fill-secondary" />
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="scroll-reveal">
            <div className="bg-primary-foreground rounded-3xl shadow-2xl overflow-hidden border-2 border-secondary/20 hover-lift">
              <div className="p-8 lg:p-12">
                {/* Pricing Header */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <span className="text-lg text-neutral/60 line-through">€49,99</span>
                    <div className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                      RISPARMIA 44%
                    </div>
                  </div>
                  
                  <div className="flex items-baseline justify-center space-x-2 mb-6">
                    <span className="text-6xl lg:text-7xl font-extrabold text-secondary">
                      €<AnimatedCounter from={49} to={27} duration={2000} />
                    </span>
                    <span className="text-3xl font-bold text-secondary">,97</span>
                  </div>
                  
                  <p className="text-lg text-neutral/70">Pagamento unico • Accesso a vita</p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-neutral font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  size="lg" 
                  className="w-full text-xl py-6 bg-secondary hover:bg-hover-secondary text-secondary-foreground font-bold rounded-xl shadow-secondary hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <Zap className="w-6 h-6 mr-2" />
                  Si, voglio imparare - Acquista il corso
                </Button>
                
                <p className="text-center text-sm text-neutral/60 mt-6">
                  Solo €27,97 • Accesso immediato • Nessuna competenza tecnica richiesta • Disponibile per sempre
                </p>

                {/* Trust Indicators */}
                <div className="mt-8 pt-8 border-t border-neutral/10">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="font-bold text-lg text-neutral">30 giorni</div>
                      <div className="text-sm text-neutral/60">Garanzia rimborso</div>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-neutral">SSL</div>
                      <div className="text-sm text-neutral/60">Pagamenti sicuri</div>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-neutral">24/7</div>
                      <div className="text-sm text-neutral/60">Accesso immediato</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-center scroll-reveal">
            <p className="text-primary-foreground/70 mb-4">Unisciti a oltre 500+ studenti che hanno già trasformato la loro carriera</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((avatar) => (
                  <div 
                    key={avatar}
                    className="w-10 h-10 bg-secondary rounded-full border-2 border-primary-foreground flex items-center justify-center text-secondary-foreground font-semibold text-sm"
                  >
                    {avatar}
                  </div>
                ))}
              </div>
              <span className="text-primary-foreground font-semibold">+495 altri</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;