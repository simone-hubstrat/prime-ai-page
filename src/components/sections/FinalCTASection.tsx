import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Clock, 
  Shield, 
  Infinity,
  Sparkles
} from 'lucide-react';

const FinalCTASection: React.FC = () => {
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

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main CTA */}
          <div className="scroll-reveal">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Ultimo Step</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral mb-8 leading-tight">
              Pronto a creare landing page efficaci in solo{' '}
              <span className="text-primary">10 lezioni?</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-neutral/70 mb-12 leading-relaxed max-w-3xl mx-auto">
              Non aspettare che la concorrenza ti superi. Inizia oggi stesso a dominare 
              il mercato con landing page che convertono davvero.
            </p>
          </div>

          {/* Action Card */}
          <div className="scroll-reveal">
            <div className="bg-card p-8 lg:p-12 rounded-3xl shadow-2xl border border-border/50 mb-12 hover-lift">
              
              {/* Primary CTA */}
              <Button 
                size="lg" 
                className="w-full lg:w-auto text-2xl py-8 px-12 bg-secondary hover:bg-hover-secondary text-secondary-foreground font-bold rounded-2xl shadow-secondary hover:shadow-glow transition-all duration-300 hover:scale-105 mb-8"
              >
                <ArrowRight className="w-8 h-8 mr-3" />
                Si, voglio imparare - Acquista il corso
              </Button>
              
              {/* Mini CTA */}
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="flex items-center justify-center space-x-2 text-primary">
                  <span className="font-bold text-2xl">€27,97</span>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-neutral">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Accesso immediato</span>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-neutral">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">Nessuna competenza tecnica</span>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-neutral">
                  <Infinity className="w-5 h-5" />
                  <span className="font-medium">Disponibile per sempre</span>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency Elements */}
          <div className="scroll-reveal">
            <div className="bg-gradient-to-r from-secondary/10 via-primary/10 to-secondary/10 p-6 rounded-2xl border border-secondary/20 mb-12">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="font-semibold text-lg text-neutral">Offerta limitata nel tempo</span>
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              </div>
              
              <p className="text-neutral/70">
                Il prezzo di €27,97 è valido solo per i primi 100 studenti. 
                Dopo tornerà al prezzo normale di €49,99.
              </p>
            </div>
          </div>

          {/* Final Guarantee */}
          <div className="scroll-reveal">
            <div className="flex items-center justify-center space-x-4 text-neutral/70">
              <Shield className="w-6 h-6" />
              <span className="font-medium">Garanzia 30 giorni soddisfatti o rimborsati</span>
            </div>
            
            <p className="text-sm text-neutral/50 mt-4 max-w-2xl mx-auto">
              Se Prime AI non supera le tue aspettative, ti rimborsiamo ogni centesimo. 
              Nessuna domanda, nessun problema.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;