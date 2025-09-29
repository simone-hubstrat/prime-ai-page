import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SimpleFooter from '@/components/sections/SimpleFooter';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

const CookiePolicy: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back to Home Button */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Torna alla Home
            </Button>
          </div>

          {/* Content */}
          <div className="conversion-card">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Cookie Policy
            </h1>
            
            <div className="prose prose-slate max-w-none text-foreground space-y-6">
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">INFORMATIVA SULLA PRIVACY</h2>
              
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Definizioni</h2>
              <p>
                "Hubstrat S.r.l.", "noi" e "nostro/a/i/e" si riferiscono a Hubstrat S.r.l., una società a responsabilità limitata soggetta alle leggi dello Stato italiano e con sede legale con sede in Via G.De Sivo n.76 - Napoli (NA), P.Iva 07788231210.
              </p>
              <p>
                "Utente", "Lei", "Suo" e termini analoghi, sia al singolare che al plurale si riferiscono a Lei, in qualità di utente e/o utilizzatore del nostro sito web.
              </p>
              <p>
                "Sito Web", "Sito", "Piattaforma" o termini analoghi, si riferiscono al seguente indirizzo web: https://primeai.it/.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Premessa</h2>
              <p>
                Il presente documento costituisce l'Informativa estesa di cui al paragrafo 4.2 del Provvedimento n. 229 dell'8 maggio 2014. La finalità è di mettere a conoscenza l'Utente sulla tipologia di Cookie presenti sul nostro Sito e descrivere in generale, a fronte dell'esistenza dei cookie, le modalità di gestione del trattamento di dati personali acquisiti dal Sito web https://primeai.it/ (di seguito "Sito"). Questa Policy Cookie è stata realizzata per fornire all'Utente le informazioni necessarie, riguardanti il modo in cui i cookie vengono utilizzati nel presente Sito Internet, e le alternative a disposizione per gestirli secondo le sue preferenze.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 1 - Titolare del trattamento dei dati personali</h2>
              <p>
                Titolare del trattamento dei dati personali è la Hubstrat S.r.l..
              </p>
              <p>
                Può contattare il nostro responsabile della protezione dei dati scrivendo una e-mail a hello@hubstrat.it e indicando nell'oggetto "trattamento dati personali".
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 2 - Definizione di Cookie</h2>
              <p>
                I cookie sono piccoli file di testo che i siti visitati dall'utente inviano direttamente al suo terminale (solitamente al browser), dove vengono memorizzati per essere poi trasmessi, nuovamente, agli stessi siti alla successiva visita del medesimo utente (c.d. cookie propri di prima parte). Nel corso della navigazione su un sito, l'utente può ricevere sul suo terminale anche cookie di siti o di web server diversi (c.d. cookie di terze parti); ciò accade perché sul sito web visitato possono essere presenti elementi come, ad esempio, immagini, mappe, suoni, specifici link a pagine web di altri domini che risiedono su server diversi da quello sul quale si trova la pagina richiesta. In altre parole, sono quei cookie che vengono impostati da un sito web diverso da quello che si sta attualmente visitando.
              </p>
              <p>
                I cookie possono avere una durata limitata ad una singola sessione di navigazione sul browser (c.d. cookie di sessione), ed in tal caso si disattivano automaticamente al momento della chiusura del browser da parte dell'utente; oppure possono avere una scadenza predeterminata e, in tal caso, rimarranno memorizzati ed attivi nel tuo hard disk fino a tale data di scadenza, continuando a raccogliere informazioni nel corso di differenti sessioni di navigazione sul browser (c.d. cookie permanenti).
              </p>
              <p>
                I cookie sono utilizzati per diverse funzioni. Alcuni sono necessari per consentirti di navigare sul Sito e usufruire delle sue funzionalità (c.d. cookie tecnici). Altri sono utilizzati per ottenere informazioni statistiche, in forma aggregata o no, sul numero degli utenti che accedono al Sito e su come il Sito viene utilizzato (c.d. cookie di monitoraggio o analytics). Altri, infine, sono utilizzati per tracciare un tuo profilo di consumatore e farti visualizzare annunci pubblicitari sul Sito che possano essere parte interessanti, in quanto coerenti con i tuoi gusti e le tue abitudini di consumo (c.d. cookie di profilazione).
              </p>
              <p>Sono diverse le categorie di Cookie esistenti ed utilizzate:</p>
              
              <p>
                <strong>cookie tecnici:</strong> Per offrire agli Utenti un Sito intuitivo e avanzato, che si adatti automaticamente alle loro esigenze e preferenze, si utilizzano i cookie tecnici. Questi sono indispensabili per il funzionamento ottimale dei Siti e consentono di visualizzare il Sito web, di farlo funzionare correttamente, di creare un account personale, di effettuare il login e di gestire le richieste.
              </p>
              
              <p>
                <strong>cookie funzionali:</strong> Si utilizzano i cookie funzionali per ricordare le preferenze e per aiutare l'Utente a usare il Sito web in modo efficace ed efficiente, le ricerche e le strutture che si visualizzano ora ed in precedenza. I cookie funzionali non sono indispensabili per il funzionamento del Sito web, ma aggiungono funzionalità e migliorano l'esperienza complessiva.
              </p>
              
              <p>
                <strong>cookie analitici:</strong> Si utilizzano i cookie analitici per capire meglio come i visitatori usano il Sito web, per capire cosa funziona o meno, per ottimizzare e migliorare il Sito e per assicurarsi che il Sito sia sempre interessante e rilevante. I dati che si ricavano includono le pagine web visitate, le pagine di uscita e di ingresso, il tipo di piattaforma, informazioni su data e ora e dati come il numero di click su una determinata pagina, i movimenti del mouse, lo scrolling, le parole cercate e i testi inseriti durante l'utilizzo del Sito. Si integrano i cookie analitici anche per campagne pubblicitarie online, per scoprire in che modo gli Utenti interagiscono, con un Sito per esempio di vendita on-line, dopo aver visualizzato una pubblicità anche su Siti web di terze parti.
              </p>
              
              <p>
                <strong>cookie commerciali:</strong> Si utilizzano i cookie commerciali per mostrare le pubblicità di un Sito su altri Siti web. Questa attività è chiamata "retargeting" e varia in base alle azioni dell'Utente sul Sito web commerciale, come le destinazioni che si cerca, le strutture che si visualizzano e i prezzi che sono stati mostrati.
              </p>
              
              <p>
                <strong>Cookie provenienti dalle reti social:</strong> Alcuni cookie possono venire registrati nel momento in cui si visita il Sito, utilizzando le funzionalità delle reti social presenti su questo. Questi cookie permettono all'Utente di far conoscere ad altre persone sia il contenuto del Sito, che la propria opinione su di esso. Questo è il caso delle opzioni "Condividi" o "Mi piace", tipo che dei social "Facebook", "Twitter", "LinkedIn", "Viadeo" ecc. Nel caso si decida di utilizzare queste opzioni e più in generale, nel caso si decida di visitare il Sito, rimanendo connesso ad una rete social, questi cookie potrebbero comunicare ai social network in questione delle informazioni riguardanti la navigazione dell'Utente sul Sito. Queste informazioni potrebbero essere usate per fini commerciali o pubblicitari.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 3 - Utilizzo dei Cookie</h2>
              <p>
                Quando utilizza il nostro sito web, sul suo dispositivo vengono memorizzati alcuni cookie. Servono per agevolare la fruizione del nostro sito web e per renderlo complessivamente più efficiente. I cookie ci permettono inoltre di identificarla durante le sue visite successive.
              </p>
              <p>
                Il nostro sito utilizza i cookie per personalizzare contenuti ed annunci, per inviarti offerte in linea con le tue preferenze di consumo nell'ambito della navigazione svolta, per fornire funzionalità dei social media e per analizzare il nostro traffico. Condividiamo inoltre informazioni sull'interazione degli utenti e il nostro sito con i nostri partner che si occupano di analisi dei dati web, pubblicità e social media, i quali potrebbero combinarle con altre informazioni che hai fornito loro o che hanno raccolto dal tuo utilizzo dei loro servizi.
              </p>
              <p>Il nostro sito web utilizza le seguenti categorie di Cookie:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cookie tecnici;</li>
                <li>cookie funzionali;</li>
                <li>cookie analitici;</li>
                <li>cookie commerciali;</li>
                <li>cookie terzi provenienti dalle reti social.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <SimpleFooter />
      
      {/* Scroll to Top */}
      <ScrollToTop />
    </>
  );
};

export default CookiePolicy;