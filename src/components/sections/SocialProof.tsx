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
    <section className="pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 bg-muted/30 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16" data-aos="fade-up">
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
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start w-full">
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
                <div key={index} className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="conversion-card bg-secondary/10 border-secondary/20 w-full max-w-md">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-sm sm:text-base font-bold text-foreground">Offerta scade tra:</span>
              </div>
              <div className="text-lg sm:text-xl font-bold text-secondary break-all">{countdown.displayTime}</div>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-6 w-full" data-aos="fade-left">
            <img 
              src="https://vg-bunny-cdn.b-cdn.net/public/or2mjx1q_.png"
              alt="Dashboard corso Prime AI"
              className="w-full h-auto object-contain rounded-lg shadow-[var(--shadow-card)]"
              loading="lazy"
            />
            
            <div className="space-y-3 sm:space-y-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="conversion-card" data-aos="fade-up">
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
