import React from 'react';

const SimpleFooter: React.FC = () => {
  return (
    <footer className="py-8 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground">
            <a 
              href="https://hubstrat.it/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Termini e Condizioni HUBSTRAT
            </a>
          </div>
          
          <div className="text-xs text-muted-foreground">
            Metodi di pagamento: PayPal, Carta di Credito/Debito, Bonifico
          </div>
          
          <div className="text-xs text-muted-foreground">
            © 2024 Prime AI Course - Tutti i diritti riservati | Privacy Policy
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;