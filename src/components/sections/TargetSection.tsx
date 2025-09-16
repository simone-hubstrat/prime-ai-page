import React, { useEffect, useRef } from 'react';
import { 
  Users, 
  TrendingUp, 
  Lightbulb,
  Target,
  CheckCircle
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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
      color: "text-foreground",
      bgColor: "bg-muted/50"
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 xl:py-32 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 scroll-reveal" data-aos="fade-up">
          <Badge variant="default" className="badge-glow mb-4 sm:mb-6">
            <Target className="w-4 h-4 mr-2" />
            A CHI È RIVOLTO
          </Badge>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            È il corso <span className="text-secondary">giusto per te</span> se...
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Prime AI è perfetto per chi vuole risultati concreti senza perdere tempo in teoria inutile
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Target Profiles */}
          <div className="space-y-6 sm:space-y-8">
            {targetProfiles.map((profile, index) => (
              <div 
                key={index}
                className="conversion-card hover:scale-[1.02] transition-all duration-300 scroll-reveal"
                data-aos="fade-right"
                data-aos-delay={index * 200}
              >
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 ${profile.bgColor} rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-110`}>
                    <profile.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${profile.color}`} />
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3 flex-1 min-w-0">
                    <h3 className="font-bold text-lg sm:text-xl text-foreground">
                      {profile.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {profile.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-secondary">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Perfetto per te!</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Call to Action */}
            <div 
              className="conversion-card bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-secondary/20 scroll-reveal"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="text-center space-y-3 sm:space-y-4">
                <h3 className="font-bold text-lg sm:text-xl text-foreground">Ti riconosci in almeno uno di questi profili?</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Allora Prime AI è esattamente quello che stavi cercando!</p>
                
                <div className="flex items-center justify-center space-x-2 text-primary font-semibold">
                  <span className="text-sm sm:text-base">Scopri tutto quello che imparerai</span>
                  <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative scroll-reveal" data-aos="fade-left">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:scale-[1.02] transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professionisti diversificati che lavorano"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Statistics Overlay */}
            <div 
              className="absolute top-3 left-3 sm:top-6 sm:left-6 conversion-card bg-card/95 backdrop-blur-sm p-3 sm:p-4 border border-border/50 hover:scale-105 transition-transform duration-300"
              data-aos="fade-down"
              data-aos-delay="800"
            >
              <div className="text-xl sm:text-2xl font-bold text-primary">847+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Studenti attivi</div>
            </div>
            
            <div 
              className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 conversion-card bg-card/95 backdrop-blur-sm p-3 sm:p-4 border border-border/50 hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <div className="text-xl sm:text-2xl font-bold text-secondary">95%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Tasso di successo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;