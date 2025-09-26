import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SimpleFooter from '@/components/sections/SimpleFooter';
import ScrollToTop from '@/components/ui/scroll-to-top';
import SimpleFooter from '@/components/sections/SimpleFooter';
import ScrollToTop from '@/components/ui/scroll-to-top';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-8 px-4">
      <div className="py-8 px-4">
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
            Privacy Policy
          </h1>
          
          <div className="prose prose-slate max-w-none text-foreground space-y-6">
            <p>
              Questa Privacy Policy è resa ai sensi dell'art. 13 del Regolamento Europeo n. 679/2016 e si applica esclusivamente a tutti i Dati raccolti attraverso il Sito web. La presente Privacy Policy è soggetta ad aggiornamenti che verranno pubblicati puntualmente sul Sito web. La presente Privacy Policy, unitamente ai Termini e Condizioni, eventuali altri documenti cui si fa riferimento in essa e la Cookie Policy, stabiliscono le basi sulle quali verranno elaborati i Dati personali dell'Interessato.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 1 - Titolare del Trattamento dei dati personali</h2>
            <p>
              Titolare del trattamento dei dati personali raccolti da questo Sito Web è la società Hubstrat S.r.l., con sede legale con sede in Via G.De Sivo n.76 - Napoli (NA), P.Iva 07788231210,
            </p>
            <p>
              L'interessato può contattare il nostro responsabile della protezione dei dati scrivendo una e-mail a hello@hubstrat.it e indicando nell'oggetto "trattamento dati personali".
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 2 - Dati Personali Trattati</h2>
            <p>
              Per Dato Personale si intende qualsiasi informazione riguardante una persona fisica identificata o identificabile (Interessato). Si considera identificabile la persona fisica che può essere identificata, direttamente o indirettamente, con particolare riferimento a un identificativo come il nome, un numero di identificazione, dati relativi all'ubicazione, un identificativo on-line, uno o più elementi caratteristici della sua identità fisica.
            </p>
            <p>In particolare, tra i Dati Personali trattati da questo Sito Web, ci sono:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>dati comuni (Cookie, Dati di utilizzo);</li>
              <li>dati per finalità precontrattuali (nome, cognome, contatti e-mail e telefonici);</li>
              <li>dati per finalità di marketing (nome, cognome e email);</li>
              <li>dati per finalità contrattuali (nome, cognome, e-mail, telefono, dati fiscali utili all'acquisto).</li>
            </ul>
            <p>
              I Dati Personali possono essere forniti volontariamente dall'Utente quando utilizza il Sito web, mediante la compilazione del Form contatti, mediante il download e al fruizione dei Corsi di Formazione e operazioni simili ed analoghe, quando comunica con il Titolare via mail e/o via telefono. Ulteriori Dati Personali raccolti potrebbero essere indicati in altre sezioni di questa Privacy Policy o mediante testi informativi visualizzati contestualmente alla raccolta dei Dati stessi. L'invio facoltativo, esplicito e volontario di posta elettronica tramite gli appositi form predisposti sul presente Sito web o per mezzo degli indirizzi indicati su questo Sito web, comporta la successiva acquisizione dell'indirizzo del mittente, necessario per rispondere alle richieste, nonché degli eventuali altri Dati Personali inseriti nella email. Il consenso al conferimento dei Dati da parte dell'Utente è necessario per essere inserito nei database del Titolare ed ai fini dell'instaurazione e del corretto svolgimento di quanto offerto dallo stesso ai suoi Utenti, nonché ai terzi per l'adempimento della singola attività richiesta. Il mancato conferimento impedisce, pertanto, la registrazione nei database del Titolare, il perfezionamento di eventuali contratti, nonché l'esecuzione degli stessi e di ogni altra eventuale attività.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 3 - Finalità del Trattamento e Base Giuridica</h2>
            <p>
              I Dati Personali possono essere raccolti in modo autonomo dal Titolare o tramite terze parti. In questo caso i sistemi informatici e le procedure software preposte al funzionamento del presente Sito web acquisiscono alcuni Dati Personali degli Utenti, di carattere tecnico-informatico (ad es. l'indirizzo IP, il tipo di browser utilizzato, il sistema operativo, il nome di dominio e gli indirizzi di siti web dai quali è stato effettuato l'accesso o l'uscita, ecc.), la trasmissione dei quali è connaturata al normale funzionamento di internet. Tali Dati potranno essere trattati al solo fine di ricavare informazioni statistiche anonime sull'uso del sito e/o per controllarne il corretto funzionamento e saranno cancellati immediatamente dopo l'elaborazione.
            </p>
            <p>
              I Dati che l'Interessato sceglie di fornire spontaneamente saranno oggetto di trattamento nel rispetto delle condizioni di liceità ex art. 6 GDPR e saranno trattati per consentire al Sito web di fornire i propri servizi, così come per le Finalità di seguito indicate e saranno conservati per il tempo necessario all'adempimento delle suddette Finalità.
            </p>
            <p>Il Trattamento dei Dati Personali è effettuato per l'esecuzione delle seguenti finalità:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>adempimenti precontrattuali (questo trattamento è facoltativo e basato sul consenso dell'interessato, tuttavia il conferimento dei Dati è necessario per il perseguimento della finalità indicata. Periodo di conservazione dei dati: sino a revoca del consenso da parte dell'Interessato.);</li>
              <li>adempimenti contrattuali (questo trattamento è necessario per l'esecuzione del contratto di cui l'interessato è parte, per l'esecuzione di misure precontrattuali o per adempiere un obbligo legale al quale è soggetto il titolare del trattamento. Periodo di conservazione dei dati: 10 (dieci) anni o diverso obbligo di legge);</li>
              <li>adempimenti di eventuali obblighi previsti dalle leggi vigenti, regolamenti, normative correlate, usi commerciali e materia tributaria/fiscale, tra cui anche per le finalità previste dalla normativa in materia di antiriciclaggio d.lgs. 231/2007 e successive modifiche (questo trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare del Trattamento. Periodo di conservazione dei dati: 10 (dieci) anni o diverso obbligo di legge);</li>
              <li>soft spam per consentire al Titolare di inviare a mezzo e-mail all'Interessato comunicazioni commerciali e promozionali aventi come oggetto Prodotti e/o Servizi analoghi ai Prodotti/Servizi oggetto della vendita senza necessità del consenso espresso e preventivo dell'Interessato, come previsto dall'art. 130, 4 comma, Codice della Privacy così come novellato dal D.lgs. n.101 del 2018, e a condizione che l'Interessato non eserciti il diritto di opposizione (questo trattamento è basato sul legittimo interesse del Titolare del Trattamento ai sensi dell'art. 6, lett. F e Considerando n. 47 del GDPR. Periodo di conservazione dei dati: fino a opposizione dell'Interessato);</li>
              <li>marketing diretto per effettuare analisi statistiche su dati aggregati e anonimi per analizzare i comportamenti dell'Interessato per migliorare i prodotti e i servizi forniti dal Titolare nonché soddisfare le aspettative dell'Interessato stesso (questo trattamento è basato sul consenso liberamente espresso dall'Interessato. Periodo di conservazione dei dati: sino a revoca del consenso da parte dell'Interessato);</li>
              <li>statistica per effettuare analisi statistiche su dati aggregati e anonimi per analizzare i comportamenti dell'Interessato per migliorare i prodotti e i servizi forniti dal Titolare nonché soddisfare le aspettative dell'Interessato stesso (questo trattamento è basato sul consenso liberamente espresso dall'Interessato. Periodo di conservazione dei dati: sino a revoca del consenso da parte dell'Interessato);</li>
              <li>profilazione per l'analisi e valutazione degli interessi, abitudini, scelte di consumo, inclusa la creazione di profili al fine di poter inviare materiale informativo e promozionale personalizzato sui Servizi/Prodotti offerti dal Titolare del Trattamento (questo trattamento è basato sul consenso liberamente espresso dall'Interessato ai sensi dell'art. 6, par. 1, lett. A del GDPR. Periodo di conservazione dei dati: sino a revoca del consenso da parte dell'Interessato);</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 4 - Modalità di Trattamento e Sicurezza</h2>
            <p>
              Il trattamento sarà svolto in forma analogica (cartacea) e digitale (a mezzo strumenti informatici), nel rispetto di quanto previsto dall'art. 32 del GDPR, in materia di misure di sicurezza, ad opera del Titolare e/o di soggetti appositamente incaricati e in ottemperanza a quanto previsto dagli art. 29 del GDPR; nel rispetto dei principi di liceità, limitazione delle finalità e minimizzazione dei dati, ai sensi dell'art. 5 GDPR 2016/679, previo rilascio di consenso libero ed esplicito espresso in calce alla presente informativa, i Suoi dati saranno trattati e conservati per il tempo necessario al il conseguimento delle finalità per le quali sono conferiti e, comunque, per il periodo di tempo previsto dalla legge.
            </p>
            <p>
              Abbiamo adottato ampie precauzioni di sicurezza tecnica e operativa al fine di proteggere i tuoi dati dal rischio che persone non autorizzate possano manipolarli, perderli, distruggerli o accedervi, accidentalmente o intenzionalmente. Le nostre misure di sicurezza sono esaminate periodicamente e aggiornate per mantenerle sempre al passo con i progressi tecnologici.
            </p>
            <p>
              A tal proposito Le comunichiamo che il Titolare del Trattamento adotta ogni ragionevole misura al fine di proteggere i suoi Dati personali da perdite, uso scorretto o da accessi, diffusioni, alterazioni o distruzioni non autorizzate. La preghiamo di considerare che nessuna trasmissione via Internet è mai completamente sicura o esente da errori
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 5 - Soggetti destinatari dei dati</h2>
            <p>Nei limiti pertinenti alle finalità di trattamento (sia implicite che esplicite), i Suoi dati potranno essere comunicati a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>dipendenti e collaboratori del Titolare;</li>
              <li>partner commerciali;</li>
              <li>istituti di credito;</li>
              <li>società di recupero crediti;</li>
              <li>società di assicurazione del credito;</li>
              <li>professionisti e consulenti esterni;</li>
              <li>eventuali nostri subfornitori o subappaltatori se impegnati nell'esecuzione di attività attinenti ai nostri rapporti contrattuali;</li>
              <li>soggetti appositamente incaricati e/o autorizzati dal Titolare che forniscono alla stessa servizi di elaborazione dati, consulenza, certificazioni del bilancio, o che svolgono comunque attività strumentali, complementari e funzionali a quella del Titolare in esecuzione di attività attinenti al rapporto contrattuale in essere;</li>
              <li>tutti i soggetti ai quali la comunicazione sia dovuta in ragione di obblighi di legge.</li>
            </ul>
            <p>
              Senza la necessità di un espresso consenso (art. 6 lett. b) e c) GDPR), il Titolare potrà comunicare i Suoi dati a Organismi di vigilanza, Autorità giudiziarie, a società di assicurazione per la prestazione di servizi assicurativi, nonché a quei soggetti ai quali la comunicazione sia obbligatoria per legge per l'espletamento delle finalità dette. Detti soggetti tratteranno i dati nella loro qualità di autonomi titolari del trattamento. I Suoi dati non saranno diffusi.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 6 - Trasferimento dati all'estero</h2>
            <p>
              I Dati verranno trattati presso la sede del Titolare e in tutte le sedi dei soggetti coinvolti nel trattamento (quali destinatari/terzi, esclusivamente e nell'ambito delle Finalità sopra indicate).
            </p>
            <p>
              Si precisa che l'utilizzo di servizi Cloud (come Google Drive o Onedrive) potrebbe comportare il trasferimento di dati al di fuori dell'Unione Europea, sempre nel rispetto della legislazione vigente e con la garanzia di un livello adeguato di protezione dei dati personali basato su una decisione di adeguatezza, su clausole standard definite dalla Commissione Europea o su Binding Corporate Rules (artt. 46, 47 e 49 GDPR).
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 7 - Periodo di conservazione dei dati personali</h2>
            <p>
              I dati raccolti verranno conservati per un arco di tempo non superiore al conseguimento delle finalità per le quali sono trattati ("principio di limitazione della conservazione", art.5, GDPR) o in base alle scadenze previste dalle norme di legge.
            </p>
            <p>
              Il Titolare tratterà quindi i suoi dati personali per il tempo necessario per adempiere alle finalità di cui sopra, fatti salvi i termini quinquennali o decennali di conservazione dei soli documenti e relativi dati di natura civilistica, contabile e fiscale come previsti dalle leggi in vigore per le finalità di cui al punto 3 lett. a) e per non oltre 5 anni dalla cessazione del rapporto contrattuale stipulato, salvo gli obblighi di legge e/o amministrativi/contabili, nel qual caso il periodo di conservazione sarà superiore.
            </p>
            <p>
              La verifica sulla obsolescenza dei dati conservati in relazione alle finalità per cui sono stati raccolti viene effettuata periodicamente.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 8 - Diritti dell'interessato</h2>
            <p>
              Nella qualità di soggetto interessato ha i diritti di cui agli artt. 15-22 del Regolamento (UE) n. 2016/679 e precisamente i diritti di: Diritto di accesso, Diritto di rettifica, diritto alla cancellazione ("diritto all'oblio"), diritto di limitazione di trattamento, diritto alla portabilità dei dati, diritto di opposizione,nonché il diritto di reclamo all'Autorità Garante.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 9 - Tempi di riscontro delle istanze</h2>
            <p>
              In caso di richiesta in merito ai dati trattati, il titolare darà riscontro al più presto - salvo che ciò si riveli impossibile o implichi uno onere organizzativo sproporzionato - e, comunque, non oltre 30 giorni dall'istanza. Eventuali impossibilità o ritardi da parte del titolare nel soddisfare le richieste verranno motivati.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 10 - Reclami</h2>
            <p>
              Nel caso in cui si desideri reclamare per come abbiamo gestito i dati personali, è possibile contattare il nostro responsabile ai seguenti indirizzi mail: hello@hubstrat, primeai@hubstrat. Il Titolare ed il Responsabile esamineranno quindi il reclamo e lavoreranno per risolvere il problema.
            </p>
            <p>
              Se si ritiene che i dati personali non siano stati gestiti in modo appropriato secondo la legge, è possibile inviare un reclamo all'Autorità Garante per la Protezione dei Dati Personali al seguente indirizzo mail garante@gpdp.it.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 10 - Newsletter</h2>
            <p>
              Solo a seguito di un suo esplicito consenso, come previsto dall'articolo 6(1)(a) del GDPR, potrà iscriversi alla nostra newsletter, grazie alla quale rimarrà sempre aggiornato in merito alle nostre iniziative.
            </p>
            <p>
              L'unica informazione necessaria per l'invio della newsletter è il suo indirizzo e-mail. Ulteriori dati possono essere forniti su base volontaria e saranno utilizzati per contattarla personalmente. Dopo la sua conferma, salveremo il suo indirizzo e-mail allo scopo di inviarle la newsletter. La base giuridica di quanto sopra è l'articolo 6(1)(a) del GDPR.
            </p>
            <p>
              Può revocare il consenso alla ricezione della newsletter in qualunque momento cliccando sul link fornito in ogni newsletter o contattando il nostro responsabile della protezione dei dati.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 11 - Link esterni</h2>
            <p>
              Se il nostro sito web rimanda, tramite link, ad altri siti web o app, tali link non sono soggetti alla presente informativa sulla privacy. È necessario esaminare le informative sulla privacy pubblicate su detti siti web o app per comprendere le rispettive procedure di acquisizione, utilizzo e divulgazione delle informazioni personali.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 12 - Social plugins e widget di terze parti</h2>
            <p>
              Il nostro sito web potrebbe contenere plug-in dei più noti social network (Facebook, Instagram) gestiti dalle terze parti coinvolte. Tali plug-in potrebbero ad esempio corrispondere ai pulsanti "Like", "Share" di Facebook o di Instagram. Se si accede ad una delle pagine del nostro sito web, dotata di un simile plug-in, il suo browser si collega direttamente ai server delle terze parti e il plug-in viene visualizzato sullo schermo grazie alla connessione con il browser. Il plug-in potrebbe comunicare ai server delle terze parti quali pagine l'utente ha visitato. Se un utente di social network visita le nostre pagine web mentre è collegato al proprio account, tali informazioni potrebbero essere associate all'account. Anche nel caso in cui si utilizzino le funzioni del plug-in (per esempio, facendo clic sul pulsante "Mi piace"), le informazioni saranno associate all'account.
            </p>
          </div>
        </div>
      </div>
      </div>
      
      <SimpleFooter />
      <ScrollToTop />
      </div>
      
      <SimpleFooter />
      <ScrollToTop />
    </div>
  );
};

export default PrivacyPolicy;