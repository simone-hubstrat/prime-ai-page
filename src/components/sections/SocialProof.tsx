import React from 'react';
import { CheckCircle, Star, Users, Clock } from 'lucide-react';
import { useCountdown } from '@/hooks/use-countdown';
const SocialProof: React.FC = () => {
  const countdown = useCountdown(47, 23);
  const benefits = [
    "Crea landing page professionali in minuti, non giorni",
    "Copywriting AI che converte automaticamente",
    "Ottimizzazione mobile perfetta senza sforzo",
    "Analytics e testing integrati per max conversioni"
  ];
  const testimonials = [
    {
      name: "Marco S.",
      role: "Marketing Manager",
      text: "Ho triplicato le conversioni in una settimana. Incredibile.",
      rating: 5
    },
    {
      name: "Laura F.", 
      role: "Imprenditrice",
      text: "Finalmente posso fare landing da sola. Risparmio migliaia di euro.",
      rating: 5
    }
  ];
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        {/* Social Proof Header */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <Users className="w-5 h-5 text-secondary" />
            <span className="text-base sm:text-lg font-semibold text-foreground">Già 847+ studenti attivi</span>
          </div>
          <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
            ))}
            <span className="ml-2 text-sm sm:text-base text-muted-foreground">4.9/5 (127 recensioni)</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left - Benefits */}
          <div className="space-y-6 sm:space-y-8 w-full" data-aos="fade-right">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Perché questo corso funziona davvero?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Prime AI ti insegna il metodo concreto per creare landing page che convertono, usando l'AI per velocizzare ogni passaggio.
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* Urgency Element */}
            <div className="conversion-card bg-secondary/10 border-secondary/20 hover:scale-[1.02] transition-transform duration-300 w-full max-w-md" data-aos="zoom-in" data-aos-delay="400">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-sm sm:text-base font-bold text-foreground">Offerta scade tra:</span>
              </div>
              <div className="text-lg sm:text-xl font-bold text-secondary break-all">{countdown.displayTime}</div>
            </div>
          </div>
          
          {/* Right - Image + Testimonials */}
          <div className="space-y-4 sm:space-y-6 w-full" data-aos="fade-left">
            <img 
              src="https://vg-bunny-cdn.b-cdn.net/public/or2mjx1q_.png"
              alt="Dashboard corso Prime AI"
              className="w-full h-auto rounded-lg shadow-[var(--shadow-card)] hover:scale-[1.02] transition-transform duration-500 max-w-full"
              loading="lazy"
            />
            
            {/* Testimonials */}
            <div className="space-y-3 sm:space-y-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="conversion-card hover:scale-[1.02] transition-transform duration-300" data-aos="fade-up" data-aos-delay={200 + index * 100}>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-foreground mb-2 sm:mb-3">"{testimonial.text}"</p>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold">{testimonial.name}</span> - {testimonial.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SocialProof;
StrategicPricing.tsx:
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
SimpleFooter.tsx:
import React from 'react';
const SimpleFooter: React.FC = () => {
  return (
    <footer className="py-6 sm:py-8 border-t border-border bg-muted/30 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center w-full max-w-7xl">
        <div className="space-y-3 sm:space-y-4">
          <div className="text-xs sm:text-sm text-muted-foreground">
            <a 
              href="https://hubstrat.it/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Termini e Condizioni HUBSTRAT
            </a>
          </div>
          
          <div className="text-xs text-muted-foreground break-words">
            Metodi di pagamento: PayPal, Carta di Credito/Debito, Bonifico
          </div>
          
          <div className="text-xs text-muted-foreground break-words">
            © 2024 Prime AI Course - Tutti i diritti riservati | Privacy Policy
          </div>
        </div>
      </div>
    </footer>
  );
};
export default SimpleFooter;
FinalKiller.tsx:
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Infinity, Users, Sparkles } from 'lucide-react';
import { useCountdown } from '@/hooks/use-countdown';
const FinalKiller: React.FC = () => {
  const countdown = useCountdown(47, 23);
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-secondary/5 to-primary/5 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center w-full">
        <Badge variant="limited" className="mb-6" data-aos="fade-down">
          🔥 ULTIMA POSSIBILITÀ
        </Badge>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6" data-aos="fade-up">
          Pronto a creare landing page efficaci in solo 10 lezioni?
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Tra 48 ore questo prezzo scomparirà per sempre. Non perdere l'occasione di acquisire una competenza che può cambiare il tuo business.
        </p>
        
        {/* Social Proof Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 w-full" data-aos="fade-up" data-aos-delay="300">
          <div className="conversion-card text-center hover:scale-105 transition-transform duration-300 min-w-0">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-bold text-foreground">847+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Studenti attivi</div>
          </div>
          <div className="conversion-card text-center hover:scale-105 transition-transform duration-300 min-w-0">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-secondary mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-bold text-foreground">4.9/5</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Valutazione media</div>
          </div>
          <div className="conversion-card text-center hover:scale-105 transition-transform duration-300 min-w-0 sm:col-span-3 lg:col-span-1">
            <Infinity className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-bold text-foreground">∞</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Accesso a vita</div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="conversion-card bg-gradient-to-r from-secondary/10 to-primary/10 border-2 border-secondary/30 max-w-lg mx-auto hover:scale-[1.02] transition-all duration-300 w-full" data-aos="zoom-in" data-aos-delay="400">
          <div className="space-y-3 sm:space-y-4">
            <div className="text-2xl sm:text-3xl font-bold text-foreground">Inizia subito per €27,97</div>
            
            <Button variant="secondary" size="lg" className="w-full text-lg sm:text-xl py-4 sm:py-6 hover:scale-[1.02] transition-all duration-300">
              Sì, voglio il corso Prime AI
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <div className="text-xs sm:text-sm text-muted-foreground space-y-1">
              <p>✅ Solo €27,97 • Accesso immediato • Nessuna competenza richiesta</p>
              <p>✅ Disponibile per sempre • Garanzia 30 giorni • Supporto incluso</p>
            </div>
          </div>
        </div>
        
        {/* Final Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10 text-xs sm:text-sm" data-aos="fade-up" data-aos-delay="600">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Shield className="w-4 h-4 text-secondary" />
            <span>Garanzia 30 giorni</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span>Pagamenti sicuri</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Infinity className="w-4 h-4 text-secondary" />
            <span>Accesso a vita</span>
          </div>
        </div>
        
        {/* Final Urgency */}
        <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-secondary/10 rounded-lg border border-secondary/20 hover:scale-[1.02] transition-transform duration-300" data-aos="pulse" data-aos-delay="800">
          <p className="text-sm sm:text-base text-secondary font-semibold">
            ⏰ Questa offerta scade tra<br className="sm:hidden" /> {countdown.displayTime}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Dopo tornerà al prezzo pieno di €49,99. Non aspettare.
          </p>
        </div>
      </div>
    </section>
  );
};
export default FinalKiller;