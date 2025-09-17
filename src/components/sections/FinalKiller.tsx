import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Infinity, Users, Sparkles } from 'lucide-react';
import { useCountdown } from '@/hooks/use-countdown';

const FinalKiller: React.FC = () => {
  const countdown = useCountdown(47, 23);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-secondary/5 to-primary/5 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center w-full">
        <Badge variant="limited" className="mb-6" data-aos="fade-down">
          ULTIMA POSSIBILITÀ
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
              <p> Solo €27,97 • Accesso immediato • Nessuna competenza richiesta</p>
              <p> Disponibile per sempre • Garanzia 30 giorni • Supporto incluso</p>
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
            Questa offerta scade tra<br className="sm:hidden" /> {countdown.displayTime}
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