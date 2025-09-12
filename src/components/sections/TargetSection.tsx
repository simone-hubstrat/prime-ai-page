import React, { useEffect, useRef } from 'react';
import { 
  Users, 
  TrendingUp, 
  Lightbulb,
  Target
} from 'lucide-react';

const TargetSection: React.FC = () => {
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

  const targetProfiles = [
    {
      icon: TrendingUp,
      title: "Giovane professionista o marketer",
      description: "Vuoi acquisire una skill spendibile subito per accelerare la tua carriera e aumentare il tuo valore sul mercato",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Lightbulb,
      title: "Imprenditore visionario",
      description: "Cerchi marketing efficace e poco costoso per far crescere il tuo business senza dipendere da agenzie esterne",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Users,
      title: "Creativo indipendente",
      description: "Vuoi creare landing page professionali senza dover imparare a programmare o affidarti a sviluppatori costosi",
      color: "text-neutral",
      bgColor: "bg-neutral/10"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
            <Target className="w-5 h-5" />
            <span className="font-semibold">Chi Sei Tu?</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral mb-6">
            È il corso <span className="text-secondary">giusto per te</span> se...
          </h2>
          
          <p className="text-xl text-neutral/70 max-w-3xl mx-auto">
            Prime AI è perfetto per chi vuole risultati concreti senza perdere tempo in teoria inutile
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Target Profiles */}
          <div className="space-y-8">
            {targetProfiles.map((profile, index) => (
              <div 
                key={index}
                className={`p-8 bg-card rounded-2xl shadow-elegant border border-border/50 hover-lift scroll-reveal`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-16 h-16 ${profile.bgColor} rounded-xl flex items-center justify-center`}>
                    <profile.icon className={`w-8 h-8 ${profile.color}`} />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-bold text-xl text-neutral">
                      {profile.title}
                    </h3>
                    <p className="text-neutral/70 leading-relaxed text-lg">
                      {profile.description}
                    </p>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 flex items-center space-x-2">
                  <div className={`w-2 h-2 ${profile.color.replace('text-', 'bg-')} rounded-full`}></div>
                  <div className="flex-1 h-1 bg-neutral/10 rounded-full">
                    <div 
                      className={`h-full ${profile.color.replace('text-', 'bg-')} rounded-full animate-pulse`}
                      style={{ width: `${(index + 1) * 33}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}

            {/* Call to Action */}
            <div className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/20 scroll-reveal">
              <div className="text-center space-y-4">
                <h3 className="font-bold text-xl text-neutral">Ti riconosci in almeno uno di questi profili?</h3>
                <p className="text-neutral/70">Allora Prime AI è esattamente quello che stavi cercando!</p>
                
                <div className="flex items-center justify-center space-x-2 text-primary font-semibold">
                  <span>Scopri tutto quello che imparerai</span>
                  <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative scroll-reveal">
            <div className="relative rounded-2xl overflow-hidden shadow-glow hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professionisti diversificati che lavorano"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Statistics Overlay */}
            <div className="absolute top-6 left-6 bg-card/95 backdrop-blur-sm p-4 rounded-xl shadow-elegant border border-border/50">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-neutral/70">Studenti attivi</div>
            </div>
            
            <div className="absolute bottom-6 right-6 bg-card/95 backdrop-blur-sm p-4 rounded-xl shadow-elegant border border-border/50">
              <div className="text-2xl font-bold text-secondary">95%</div>
              <div className="text-sm text-neutral/70">Tasso di successo</div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;