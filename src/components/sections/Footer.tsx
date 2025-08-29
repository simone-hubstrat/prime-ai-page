import React from 'react';
import { 
  CreditCard, 
  Shield, 
  Globe,
  Heart
} from 'lucide-react';

const Footer: React.FC = () => {
  const paymentMethods = [
    'Visa',
    'Mastercard', 
    'PayPal',
    'Apple Pay',
    'Google Pay'
  ];

  return (
    <footer className="bg-neutral text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3">Prime AI</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                Il corso più completo per creare landing page efficaci con l'intelligenza artificiale. 
                Trasforma la tua idea in risultati concreti.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-primary-foreground/60">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm">Made with AI in Italy</span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold mb-4">Informazioni Legali</h4>
            <div className="space-y-3">
              <a 
                href="https://hubstrat.it/termini-e-condizioni" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                Termini e Condizioni
              </a>
              <a 
                href="https://hubstrat.it/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="https://hubstrat.it/cookie-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                Cookie Policy
              </a>
              <a 
                href="https://hubstrat.it/diritto-di-recesso" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                Diritto di Recesso
              </a>
            </div>
          </div>

          {/* Payment & Security */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold mb-4">Pagamenti Sicuri</h4>
            
            {/* Payment Methods */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-3">
                <CreditCard className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Metodi di pagamento accettati:</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {paymentMethods.map((method) => (
                  <div 
                    key={method}
                    className="bg-primary-foreground/10 text-primary-foreground/80 px-3 py-2 rounded-lg text-sm font-medium text-center"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>

            {/* Security Badges */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="text-sm">Pagamenti protetti SSL 256-bit</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-secondary" />
                <span className="text-sm">Conforme GDPR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          
          {/* Bottom Section */}
          <div className="md:flex md:items-center md:justify-between">
            
            {/* Copyright */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-primary-foreground/60 text-sm">
                © 2024 HUBSTRAT. Tutti i diritti riservati.
              </p>
              <p className="text-primary-foreground/50 text-xs mt-1">
                P.IVA: IT12345678901 | Via Roma 123, 00100 Roma, Italia
              </p>
            </div>

            {/* Company Link */}
            <div className="text-center md:text-right">
              <a 
                href="https://hubstrat.it" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                <span className="text-sm font-medium">Powered by</span>
                <span className="text-base font-bold text-secondary">HUBSTRAT</span>
              </a>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center bg-primary-foreground/5 rounded-2xl p-8 border border-primary-foreground/10">
          <p className="text-primary-foreground/80 mb-4">
            Hai ancora domande? La nostra community è qui per aiutarti!
          </p>
          <a 
            href="mailto:support@hubstrat.it"
            className="inline-flex items-center space-x-2 bg-secondary hover:bg-hover-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <span>Contattaci</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;