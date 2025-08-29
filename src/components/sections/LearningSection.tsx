import React, { useEffect, useRef } from 'react';
import { 
  Brain, 
  PenTool, 
  Smartphone, 
  BarChart3, 
  CreditCard,
  Zap
} from 'lucide-react';
import learningImage from '@/assets/learning-outcomes.jpg';

const LearningSection: React.FC = () => {
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

  const learningItems = [
    {
      icon: Brain,
      title: "Prompt engineering avanzato per landing pages perfette",
      description: "Scopri i prompt segreti che trasformano l'AI nel tuo copywriter personale"
    },
    {
      icon: PenTool,
      title: "Tecniche di copywriting che convertono con l'AI",
      description: "Headlines magnetiche, CTA irresistibili e testi che vendono automaticamente"
    },
    {
      icon: Smartphone,
      title: "Ottimizzazione mobile-first automatizzata",
      description: "Landing page che funzionano perfettamente su ogni dispositivo"
    },
    {
      icon: BarChart3,
      title: "Analytics e A/B testing intelligente",
      description: "Misura, ottimizza e migliora le conversioni con dati concreti"
    },
    {
      icon: CreditCard,
      title: "Deploy e integrazione pagamenti",
      description: "Dalla pubblicazione online all'incasso: tutto il processo completo"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">Curriculum Completo</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral mb-6">
            Cosa <span className="text-primary">imparerai</span>
          </h2>
          
          <p className="text-xl text-neutral/70 max-w-3xl mx-auto">
            Un percorso strutturato che ti porta da zero alla creazione di landing page professionali 
            che convertono davvero
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Learning Items */}
          <div className="space-y-8">
            {learningItems.map((item, index) => (
              <div 
                key={index}
                className={`flex items-start space-x-6 p-6 bg-card rounded-2xl shadow-elegant border border-border/50 hover-lift scroll-reveal`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center shadow-primary">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-neutral leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-neutral/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Image */}
          <div className="relative scroll-reveal">
            <div className="relative rounded-2xl overflow-hidden shadow-glow hover-lift">
              <img 
                src={learningImage} 
                alt="Infografica step-by-step del corso"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Progress Indicators */}
            <div className="absolute -top-4 -right-4 space-y-2">
              {[1, 2, 3, 4, 5].map((step) => (
                <div 
                  key={step}
                  className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold shadow-secondary animate-bounce-in"
                  style={{ animationDelay: `${step * 0.2}s` }}
                >
                  {step}
                </div>
              ))}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;