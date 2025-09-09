import React from 'react';
import { CheckCircle, Star, Users, Clock } from 'lucide-react';
import benefitsImage from '@/assets/social-proof-new.png';

const SocialProof: React.FC = () => {
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Social Proof Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-5 h-5 text-secondary" />
            <span className="text-lg font-semibold text-foreground">Già 847+ studenti attivi</span>
          </div>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
            ))}
            <span className="ml-2 text-muted-foreground">4.9/5 (127 recensioni)</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Benefits */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Perché questo corso funziona davvero?
              </h2>
              <p className="text-lg text-muted-foreground">
                Prime AI ti insegna il metodo concreto per creare landing page che convertono, usando l'AI per velocizzare ogni passaggio.
              </p>
            </div>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* Urgency Element */}
            <div className="conversion-card bg-secondary/10 border-secondary/20">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="font-bold text-foreground">Offerta scade tra:</span>
              </div>
              <div className="text-2xl font-bold text-secondary">47 ore 23 minuti</div>
            </div>
          </div>
          
          {/* Right - Image + Testimonials */}
          <div className="space-y-6">
            <img 
              src={benefitsImage} 
              alt="Dashboard corso Prime AI"
              className="w-full h-auto rounded-lg shadow-[var(--shadow-card)]"
              loading="lazy"
            />
            
            {/* Testimonials */}
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="conversion-card">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-3">"{testimonial.text}"</p>
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