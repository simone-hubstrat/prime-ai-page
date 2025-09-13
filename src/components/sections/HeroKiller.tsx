import React from 'react';
import Hero from '@/components/ui/neural-network-hero';

const HeroKiller: React.FC = () => {
  return (
    <Hero 
      title="Questa landing page è stata creata con l'AI. Vuoi imparare a farlo anche tu?"
      description="Il corso Prime AI è pratico e completo per creare landing page efficaci in soli 10 mini lezioni, anche se parti da zero"
      badgeText="Corso Prime AI"
      badgeLabel="Offerta Limitata"
      ctaButtons={[
        { text: "Inizia ora - Accedi al corso", href: "#corso", primary: true },
        { text: "Scopri di più", href: "#dettagli" }
      ]}
      microDetails={["€27,97 investimento minimo", "10 lezioni - 2 ore totali", "Zero codice richiesto"]}
    />
  );
};

export default HeroKiller;