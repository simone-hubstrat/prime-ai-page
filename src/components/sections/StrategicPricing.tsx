import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Zap, Shield } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { useCountdown } from '@/hooks/use-countdown';

const StrategicPricing: React.FC = () => {
  const countdown = useCountdown(47, 23);

  const features = [
    "10 video lezioni step-by-step (2 ore totali)",
    "Template pronti per ogni settore",
    "Prompt AI ottimizzati per landing page",
    "Guida copywriting che converte",
    "Checklist di ottimizzazione mobile",
    "Supporto community Telegram",
    "Aggiornamenti gratuiti a vita"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl w-full">
        <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
          <Badge variant="limited" className="mb-4">
            ⚡ SOLO OGGI - PREZZO LANCIO
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Tutto questo a soli €27,97
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Un piccolo investimento per una competenza che ti accompagnerà per sempre
          </p>
        </div>
        
        {/* Main Pricing Card */}
        <div className="conversion-card max-w-lg mx-auto bg-gradient-to-br from-background to-muted/30 border-2 border-secondary/20 hover:scale-[1.02] transition-all duration-300 w-full" data-aos="zoom-in" data-aos-delay="200">
          <div className="text-center mb-4 sm:mb-6">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
              <span className="price-crossed">€49,99</span>
              <Badge variant="secondary" className="text-xs">-44%</Badge>
            </div>
            <div className="price-display">
              €<AnimatedCounter from={49} to={27} duration={2000} />,97
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">Pagamento unico • Accesso per sempre</p>
          </div>
          
          {/* Features List */}
          <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-200" data-aos="fade-right" data-aos-delay={300 + index * 50}>
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Main CTA */}
          <Button variant="secondary" size="lg" className="w-full mb-3 sm:mb-4 hover:scale-[1.02] transition-all duration-300">
            Sì, voglio imparare - Acquista il corso
          </Button>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center text-xs text-muted-foreground">
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-xs">Garanzia 30gg</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Zap className="w-4 h-4 text-secondary" />
              <span className="text-xs">Accesso immediato</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Clock className="w-4 h-4 text-secondary" />
              <span className="text-xs">Disponibile 24/7</span>
            </div>
          </div>
        </div>
        
        {/* Additional Urgency */}
        <div className="text-center mt-6 sm:mt-8" data-aos="fade-up" data-aos-delay="600">
          <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">
            ⏰ Questa offerta scade tra<br className="sm:hidden" /> {countdown.displayTime}
          </p>
          <p className="text-xs text-muted-foreground">
            Dopo tornerà al prezzo pieno di €49,99
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategicPricing;