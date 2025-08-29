import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import benefitsImage from '@/assets/course-benefits.jpg';

const BenefitsSection: React.FC = () => {
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
    <section ref={sectionRef} className="py-20 lg:py-32 gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative scroll-reveal">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant hover-lift">
              <img 
                src={benefitsImage} 
                alt="Dashboard moderna con funzionalità AI"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-primary">
              <CheckCircle className="w-8 h-8" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-4 rounded-xl shadow-secondary">
              <span className="font-bold text-lg">AI-Powered</span>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="scroll-reveal">
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral mb-6">
                Perché questo corso <span className="text-primary">funziona?</span>
              </h2>
              
              <p className="text-xl text-neutral/80 leading-relaxed mb-8">
                Prime AI ti insegna metodo concreto per creare landing page efficaci, 
                sfruttando l'AI per velocizzare e ottimizzare ogni passaggio.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-6">
              {[
                {
                  title: "Metodo Provato",
                  description: "Sistema testato su centinaia di progetti reali con risultati misurabili"
                },
                {
                  title: "AI Integrata",
                  description: "Sfrutta l'intelligenza artificiale per ottimizzare ogni elemento della tua landing"
                },
                {
                  title: "Pratico e Immediato",
                  description: "Dalla teoria alla pratica: crei la tua prima landing page durante il corso"
                },
                {
                  title: "Supporto Continuo",
                  description: "Accesso alla community e aggiornamenti gratuiti per sempre"
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 p-6 bg-card rounded-xl border border-border/50 hover-lift scroll-reveal`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral mb-2">{benefit.title}</h3>
                    <p className="text-neutral/70">{benefit.description}</p>
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

export default BenefitsSection;