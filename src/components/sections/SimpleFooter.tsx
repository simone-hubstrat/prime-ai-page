import React from 'react';

const SimpleFooter: React.FC = () => {
  return (
    <footer className="relative w-full py-6 sm:py-8 border-t border-border bg-muted/30 overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center w-full max-w-7xl">
        <div className="space-y-3 sm:space-y-4">
          <div className="text-xs sm:text-sm text-muted-foreground">
            <a 
              href="https://hubstrat.it/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Termini e Condizioni HUBSTRAT
            </a>
          </div>
          
          <div className="text-xs text-muted-foreground break-words">
            Metodi di pagamento: PayPal, Carta di Credito/Debito, Bonifico
          </div>
          
          <div className="text-xs text-muted-foreground break-words">
            © 2024 Prime AI Course - Tutti i diritti riservati | Privacy Policy
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
