import { useEffect } from 'react';

const CookieConsentScript: React.FC = () => {
  useEffect(() => {
    // Verifica se lo script è già stato caricato
    if (document.getElementById('cookieyes')) {
      return;
    }

    // Crea l'elemento script
    const script = document.createElement('script');
    script.id = 'cookieyes';
    script.type = 'text/javascript';
    script.src = 'https://cdn-cookieyes.com/client_data/bbf5f2c8e20e1a4f0e511350/script.js';
    script.async = true;

    // Aggiungi lo script al head del documento
    document.head.appendChild(script);

    // Cleanup function per rimuovere lo script quando il componente viene smontato
    return () => {
      const existingScript = document.getElementById('cookieyes');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Questo componente non renderizza nulla visivamente
  return null;
};

export default CookieConsentScript;