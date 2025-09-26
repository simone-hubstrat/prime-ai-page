import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SimpleFooter from '@/components/sections/SimpleFooter';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

const TermsConditions: React.FC = () => {
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
              TERMINI E CONDIZIONI
            </h1>
            
            <div className="prose prose-slate max-w-none text-foreground space-y-6">
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Definizioni</h2>
              <p>
                Fornitore del servizio si riferisce alla società Hubstrat S.r.l. con sede legale con sede in Via G.De Sivo n.76 - Napoli (NA), P.Iva 07788231210.
              </p>
              <p>
                Termini e Condizioni si riferisce all'insieme delle presenti clausole contrattuali che determinano e definiscono i rapporti tra il Fornitore e l'Utente.
              </p>
              <p>
                "Utente", "Cliente", "Lei", "Suo" e termini analoghi, sia al singolare che al plurale si riferiscono a Lei, in qualità di utente e/o utilizzatore del nostro sito web.
              </p>
              <p>
                "Sito Web", "Sito" o termini analoghi, si riferiscono al seguente indirizzo web: primeai.it;
              </p>
              <p>
                "Corsi di Formazione" si riferisce ai Corsi di Formazione in vendita sul sito web;
              </p>
              <p>
                "Prime AI" si riferisce al marchio di proprietà di Hubstrat, attraverso il quale vengono commercializzati i Servizi sul Sito Web;
              </p>
              <p>
                Consumatore si riferisce alla persona fisica che agisce per scopi estranei ad attività professionale o imprenditoriale;
              </p>
              <p>
                Professionista si riferisce a colui che agisce per scopi professionali e imprenditoriali;
              </p>
              <p>
                Materiale si riferisce a tutto il materiale (documenti, pdf, immagini, ecc.) presente sul Sito Web.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 1 - Introduzione</h2>
              <p>
                I presenti Termini e Condizioni Generali di Vendita (di seguito, "T&C") disciplinano l'acquisto dei Corsi di Formazione a marchio "Prime AI" da parte dei potenziali Clienti attraverso l'accesso e l'utilizzo del Sito Web.
              </p>
              <p>
                Attraverso l'uso del Sito (per es. effettuando un qualsiasi acquisto), il Cliente instaura con il Fornitore un vero e proprio rapporto contrattuale (vincolante in termini legali). Tale rapporto contrattuale ha lo scopo di definire le condizioni contrattuali applicate alla vendita, in modalità di commercio elettronico, dei Corsi di Formazione offerti e messi a disposizione dalla Hubstrat S.r.l.. in favore del Cliente che riveste la qualifica di Consumatore e/o Professionista.
              </p>
              <p>
                Il richiamato contratto è concluso in lingua italiana e disciplinato dalla legge italiana, incluso, ove applicabile, il Decreto Legislativo 6 settembre 2005, n. 206 ("Codice del Consumo") e successive modificazioni e integrazioni; il Decreto Legislativo 9 aprile 2003, n. 70 modificato dal D.lgs. n. 21/2014; dal D.lgs. n. 70/2003 in materia di commercio elettronico e dal Regolamento UE 2018/302 del Parlamento Europeo e del Consiglio contenente la disciplina del commercio elettronico.
              </p>
              <p>
                Il Fornitore si riserva il diritto di modificare i presenti T&C in qualsiasi momento. Le modifiche saranno efficaci dal momento della loro pubblicazione sul Sito e si applicheranno solo agli ordini effettuati dopo tale data.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 2 - Descrizione del servizio</h2>
              <p>
                Attraverso l'accesso al Sito Web, è possibile acquistare Corsi di Formazione e/o Webinar registrati fruibili autonomamente dall'utente, senza limiti di orario.
              </p>
              <p>
                A seguito dell'avvenuto acquisto, l'Utente potrà liberamente scaricare il Corso di Formazione e/o Webinar scelto al fine di poterne fruire senza alcun limite temporale.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 3 - Registrazione al Sito</h2>
              <p>
                Per effettuare un qualsiasi acquisto sul Sito Web, non è necessario registrarsi. Qualora il Cliente voglia, comunque, registrarsi per avere un account utente personale al fine di ottenere i relativi benefici (storico ordini, tracciamento dei dati, ecc.), deve seguire le istruzioni che verranno fornite al momento della registrazione al Sito.
              </p>
              <p>
                La registrazione è completamente gratuita, rapida e non comporta nessun obbligo di acquisto. Sono autorizzati a registrarsi solo ed esclusivamente le persone in grado di stipulare contratti legalmente vincolanti.
              </p>
              <p>
                Gli Utenti devono registrarsi fornendo, in maniera veritiera e completa, tutti i dati richiesti nel relativo "FORM DI REGISTRAZIONE" ed accettare la privacy e cookie policy, i presenti T&C di vendita e, eventualmente, l'invio della newsletter.
              </p>
              <p>
                L'Utente ha l'onere di custodire e mantenere riservate le proprie credenziali di accesso. Resta inteso che in nessun caso potremo essere ritenuti responsabili in caso di smarrimento, diffusione, furto o utilizzo non consentito da parte di terzi, a qualsiasi titolo, delle credenziali di accesso degli Utenti al Sito Web.
              </p>
              <p>
                In seguito al corretto completamento del processo di registrazione, l'Utente ottiene un account personale ed univoco per il pieno utilizzo del sito web, nonché il completo accesso ai servizi offerti dallo stesso.
              </p>
              <p>
                In qualsiasi momento, gli Utenti registrati possono disattivare i propri account, richiederne la cancellazione, oppure interrompere l'utilizzo del sito web contattando direttamente il servizio assistenza.
              </p>
              <p>
                Anche in caso di disattivazione e/o cancellazione dell'account, l'utente comprende ed accetta che alcuni dati personali potranno essere conservati e/o oggetto di trattazione. Per ulteriori informazioni sul trattamento dei dati personali, si rimanda all'apposita privacy presente sul Sito Web.
              </p>
              <p>Ci riserviamo il diritto di sospendere e/o cancellare l'account Utente in qualsiasi momento e senza preavviso se riteniamo che:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>L'utente abbia violato i presenti termini e condizioni;</li>
                <li>l'uso del presente sito web da parte dell'Utente possa risultare in una violazione della legge o dei regolamenti applicabili;</li>
                <li>l'account dell'utente sia ritenuto, a nostro insindacabile giudizio, inappropriato o offensivo.</li>
              </ul>
              <p>
                L'utente garantisce che i dati personali forniti durante la procedura di registrazione al Sito o, in qualsiasi altro momento, sono completi, veritieri e riferiti all'utente stesso e si impegna a tenere la Hubstrat S.r.l. indenne e manlevata da qualsiasi danno, obbligo risarcitorio e/o sanzione derivante da e/o in qualsiasi modo collegata alla violazione da parte dell'utente della garanzia di cui al presente articolo e/o alla violazione delle regole sulla registrazione al Sito e/o sulla conservazione delle credenziali di registrazione.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 4 - Condizioni di vendita</h2>
              <p>
                Ciascun ordine effettuato costituisce un'offerta per l'acquisto dei Corsi di Formazione in vendita sul Sito web.
              </p>
              <p>
                Il Cliente, dopo aver verificato attentamente le informazioni contenute nel riepilogo d'ordine, deve completare il check-out. L'ordine è effettuato mediante la conferma dello stesso ed è subordinato al pagamento del prezzo del Corso di Formazione scelto, comprensivo delle imposte di legge, così come specificatamente indicato nell'apposito modulo di Riepilogo dell'Ordine.
              </p>
              <p>
                Si darà corso all'ordine di acquisto effettuato, solo dopo aver ricevuto conferma dell'avvenuto pagamento dell'importo totale dovuto. Nel caso in cui l'Importo Totale dovuto non venga pagato, ovvero il buon esito del pagamento non sia confermato, il contratto di acquisto si intenderà risolto di diritto ai sensi e per gli effetti di cui all'art. 1456 c.c. Di tale risoluzione e della conseguente cancellazione dell'ordine, il Cliente sarà avvisato immediatamente dopo la trasmissione dell'ordine, tramite il Sito web, ovvero attraverso l'invio di una comunicazione all'indirizzo e-mail fornito dallo stesso Cliente.
              </p>
              <p>
                La "Ricevuta di elaborazione d'Ordine" non costituisce accettazione dell'ordine. La conclusione del contratto avviene al momento dell'invio della "Conferma d'Ordine" all'indirizzo e-mail fornito dal Cliente.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 5 - Prezzo di vendita</h2>
              <p>
                Tutti i prezzi indicati sul sito web e riferiti ai Corsi di Formazione in vendita si intendono comprensivi di IVA e di qualunque altro onere accessorio, ove applicato.
              </p>
              <p>
                Il prezzo dei Corsi di Formazione in vendita sul Sito Web può subire variazioni in qualsiasi momento, senza preavviso e senza necessità di motivazione e/o specificazione alcuna. La validità dei prezzi è sempre e solamente quella indicata nella "Conferma d'Ordine" inviata al Cliente a seguito dell'avvenuto acquisto.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 6 - Modalità di pagamento accettate</h2>
              <p>
                Tutti gli acquisti effettuati sul sito sono sicuri, poiché garantiti da certificazione SSL e rispettivo protocollo HTTPS. Le modalità di pagamento proposte vedono coinvolti esclusivamente circuiti pluri-referenziati.
              </p>
              <p>Salvo diversa indicazione e/o comunicazione, sul Sito Web sono accettate, esclusivamente, le seguenti modalità di pagamento:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Carta di credito (circuiti Visa, Mastercard, Maestro);</li>
                <li>Carta di debito (circuiti Visa, Mastercard, Maestro);</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 7 - Diritti sul Materiale</h2>
              <p>
                Tutto il materiale predisposto dal Fornitore resterà di proprietà dello stesso. Il Fornitore concede al Cliente la possibilità di visualizzare e scaricare il materiale (ivi compresi i Corsi di Formazione e/o i Webinar registrati) al solo fine di utilizzo personale, senza la possibilità di copiarlo, diffonderlo, riutilizzarlo, venderlo nonché qualunque altra azione non espressamente prevista e concordata specificamente con il Fornitore. A seguito dell'acquisto del Servizio il Cliente non acquisisce alcun diritto sui contenuti predisposti dal Fornitore. Tutti i diritti non espressamente concessi sono riservati. Ogni comportamento contrario ai presenti Termini e Condizioni da parte del Cliente effettuato anche nell'area membri legittima il Fornitore ad escluderlo immediatamente dalla piattaforma e dall'area membri e di agire nelle sedi e con le forme opportune.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 8 - Proprietà intellettuale, Copyright</h2>
              <p>
                Il contratto non conferisce al Cliente alcun diritto sui prodotti venduti, su marchi, loghi e altri segni distintivi di vario genere presenti nel Sito, né sui relativi contenuti. I contenuti del sito (testi, grafica, immagini e animazioni), nonché gli stessi prodotti venduti sono protetti dal diritto d'autore. Tutto il contenuto presente o visibile nel Sito, inclusi, a titolo esemplificativo ma non esaustivo, loghi, icone, marchi registrati, testo, grafiche, fotografie, immagini (di seguito "Contenuto"), così come i prodotti venduti sono di proprietà della Hubstrat S.r.l. e/o delle aziende sue fornitrici di contenuti. Tutti gli elementi del Sito, incluso, a titolo esemplificativo ma non esaustivo, il design generale e il contenuto, così come i prodotti in vendita sono protetti da copyright, diritti morali, diritti sui database, marchi registrati e altre leggi relative ai diritti di proprietà intellettuale.
              </p>
              <p>
                Qualsiasi riproduzione, comunicazione, download, modifica o utilizzo parziale e totale di questi elementi, per qualsivoglia scopo o con qualunque mezzo di comunicazione, richiede la preventiva autorizzazione scritta da parte della Hubstrat S.r.l. o dei rispettivi titolari dei diritti di proprietà intellettuale, ad eccezione di casi in cui è autorizzato dalla legge.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 9 - Diritto di Recesso e rimborso</h2>
              <p>
                In relazione all'acquisto dei Corsi di Formazione sul Sito, il Cliente che riveste la qualità di consumatore ha diritto di recedere dal contratto concluso con la società Hubstrat S.r.l., senza doverne specificare il motivo, entro quattordici (14) giorni (Periodo di Recesso).
              </p>
              <p>
                Per esercitare il diritto di recesso in relazione a un Ordine effettuato, il Cliente deve informare la Hubstrat S.r.l. della sua decisione di esercitare il proprio diritto di recesso, prima della scadenza del Periodo di Recesso. Per effettuare la richiesta, gli sarà sufficiente contattare il servizio clienti ed indicare il numero d'ordine e/o la mail di conferma ordine.
              </p>
              <p>
                Il Cliente che riveste la qualifica di Consumatore prende atto e accetta espressamente che in caso di esecuzione della fornitura del Servizio effettuando il login all'interno del Sito Web prima della scadenza dei 14 giorni dalla data del suo acquisto, non potrà esercitare il suddetto recesso ai sensi del D. lgs. n. 206 del 2005.
              </p>
              <p>
                Il Cliente che riveste la qualifica di Professionista non è concesso il diritto di recesso.
              </p>
              <p>
                Se il Cliente recede dal contratto nei tempi e nelle modalità indicate, provvederemo al rimborso dell'importo pagato per l'acquisto del Corso di Formazione entro e non oltre i successivi 14 giorni lavorativi dal giorno di avvenuta procedura di recesso. Il rimborso sarà effettuato utilizzando lo stesso mezzo di pagamento usato dall'utente per la transazione iniziale, salvo diversa disposizione scritta da parte del Cliente.
              </p>
              <p>
                Nel caso in cui il recesso non sia stato esercitato conformemente a quanto previsto dalla normativa applicabile, nonché dalle presenti disposizioni e modalità, esso non comporterà la risoluzione del contratto e, conseguentemente, non darà diritto ad alcun rimborso. Ci si riserva, pertanto, il diritto di rifiutare la merce pervenuta nell'ipotesi di mancato rispetto della procedura sopra indicata.
              </p>
              <p>
                Ai sensi della normativa europea e italiana sui contratti a distanza, il consumatore ha diritto di recedere entro 14 giorni dall'acquisto. Tuttavia, questo diritto non si applica ai contenuti digitali forniti su supporto non materiale (come corsi online o file scaricabili) quando l'esecuzione è iniziata con il consenso espresso del consumatore e con la consapevolezza che ciò comporta la perdita del diritto di recesso.
              </p>
              <p>
                Acquistando questo corso, accetti che l'accesso ai contenuti sia immediato e che, dal momento in cui inizi a fruirne, non sarà più possibile richiedere il rimborso.
              </p>
              <p>
                Sono previste eccezioni solo in casi particolari, come: errore tecnico che impedisce l'accesso al corso, acquisto duplicato per sbaglio o problemi gravi di conformità del contenuto rispetto a quanto descritto. In tali situazioni puoi contattarci entro 14 giorni dall'acquisto scrivendo a [tuo indirizzo email]. Le richieste verranno valutate e riceverai risposta entro 72 ore lavorative.
              </p>
              <p>
                Questa politica non limita i tuoi diritti legali di consumatore, che restano comunque garantiti dalla normativa vigente.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 10 - Esonero di responsabilità</h2>
              <p>
                La responsabilità del Fornitore è intesa nei limiti degli obblighi assunti con i presenti Termini e Condizioni e della somma corrisposta all'atto di acquisto.
              </p>
              <p>
                Il Fornitore non è responsabile del comportamento degli Utenti e delle informazioni dagli stessi condivisi.
              </p>
              <p>
                L'Utente garantisce che utilizzerà il sito web secondo le condizioni e per i Servizi stabiliti e offerti dal Fornitore, escludendo ogni uso che si prefigga scopi illegali o contrari a quanto previsto nei presenti Termini e Condizioni di utilizzo e comunque con modalità che potrebbero danneggiarlo, renderlo inagibile, sovraccaricarlo o deteriorarlo o interferire con l'uso dello stesso da parte degli altri Utenti;
              </p>
              <p>
                Il Fornitore non è responsabile dell'acquisto degli Utenti e/o dell'accesso degli stessi nell'area membri, nella misura consentita dalla legge applicabile.
              </p>
              <p>
                Il Fornitore non è responsabile verso gli Utenti o soggetti direttamente o indirettamente a questi collegati per ritardi, disservizi o sospensioni della piattaforma.
              </p>
              <p>
                Il Fornitore non è responsabile per l'incremento o il mancato incremento di affari da parte dell'attività dell'Utente, per mancati raggiungimenti dei risultati desiderati a fronte di investimenti e costi sostenuti e per qualsiasi danno derivante dai Servizi offerti;
              </p>
              <p>
                Il Fornitore non sarà ritenuto responsabile per omissioni o errori che possano essere contenuti nei materiali, né, ancora, dell'eventuale violazione di diritti altrui e dei danni, anche indiretti, consequenziali ad essa, o per altri danni di qualsiasi tipo, anche risultanti da perdita del diritto d'uso, perdita di informazioni o mancato guadagno ovvero discendenti dall'inadempimento del contratto, da negligenza o da altre azioni lesive, derivanti da o in qualsiasi modo connessi all'utilizzo o alle informazioni contenute nella piattaforma.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 11 - Assistenza e Reclami</h2>
              <p>è possibile chiedere informazioni, inviare comunicazioni o inoltrare reclami contattando il nostro servizio clienti:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>attraverso il Sito, accedendo alla sezione "Contatti";</li>
                <li>inviando una mail al seguente indirizzo e-mail: primeai@hubstrat.it</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 12 - Legge applicabile e Foro Competente</h2>
              <p>
                Il Contratto è soggetto alla legge italiana. È fatta salva l'applicazione agli utenti Consumatori che non abbiano la loro residenza abituale in Italia delle disposizioni eventualmente più favorevoli e inderogabili previste dalla legge del paese in cui essi hanno la loro residenza abituale.
              </p>
              <p>
                Si ricorda che nel caso di utente Consumatore per ogni controversia relativa all'applicazione, esecuzione e interpretazione dei presenti Termini e Condizioni o del Contratto è competente il foro del luogo in cui l'utente risiede o ha eletto domicilio.
              </p>
              <p>
                In caso di Utente che riveste la qualifica di Professionista, la competenza territoriale è esclusivamente quella del Foro di Nola (NA).
              </p>
              <p>
                Fermo restando la clausola di competenza di cui sopra, il Cliente, in qualità di consumatore, può promuovere una risoluzione extragiudiziale delle controversie relative ai rapporti di consumo mediante il ricorso alle procedure di cui alla Parte V, Titolo II-bis del Codice del Consumo (ADR – Alternative Dispute Resolution). La piattaforma ODR è accessibile al seguente indirizzo http://ec.europa.eu/consumers/odr/.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 13 - Modifiche ai Termini e Condizioni di vendita</h2>
              <p>
                La Hubstrat S.r.l. si riserva il diritto di modificare, in tutto e in parte, a sua insindacabile volontà, le presenti condizioni generali senza alcun preavviso. Si consiglia, pertanto, al Cliente di controllare, periodicamente, le presenti condizioni generali.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Art. 14 - Privacy e Cookie Policy</h2>
              <p>
                Per maggiori informazioni circa il trattamento dei dati personali, il Cliente può consultare l'informativa sulla privacy e sui cookie presente sul Sito.
              </p>
              <p>
                Ai sensi degli artt. 1341 e 1342 c.c., l'Utente dichiara di aver letto attentamente e di accettare espressamente tutte le clausole dei presenti T&C di vendita e, in particolare, quelle degli artt. 3, 4, 5, 7, 8, 9, 10, 12, 13.
              </p>
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

export default TermsConditions;