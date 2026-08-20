import re

with open('src/app/pages/home/home.component.html', 'r') as f:
    html = f.read()

# Precise literal replacements to catch all the leftover Italian text!
reps = {
    "Spedizioni rapide in Europa": "{{ t.trust[1] }}",
    "Sostiene la missione": "{{ t.trust[2] }}",
    "Pensato per le chiese": "{{ t.trust[3] }}",
    
    "La Santa Cena dovrebbe unirci — non distrarci.": "{{ t.whyTitle }}",
    "La preparazione e la distribuzione tradizionali introducono spesso rumore, movimento e ritardi proprio nel momento in cui la comunità ha più bisogno di silenzio.": "{{ t.whyIntro }}",
    "Sfide Comuni Durante La Santa Cena": "{{ t.whyProblemsTitle }}",
    "Movimenti, sussurri e passi spostano l&#x27;attenzione da Cristo.": "{{ t.problems[0].d }}",
    "Un bicchierino sigillato. Pane e succo, pronti.": "{{ t.solution.title }}",
    "Ogni bicchierino pre-riempito contiene il pane e il succo, insieme, sigillati. Nessuna distribuzione o rumore durante il momento sacro — solo silenziosa riverenza in ogni banco.": "{{ t.solution.body }}",
    
    "Tutto ciò che serve alla tua chiesa — nulla di superfluo.": "{{ t.benefitsTitle }}",
    "Progettato con pastori e amministratori, perfezionato con l&#x27;uso reale della domenica.": "{{ t.benefitsSub }}",
    "Pane e succo insieme": "{{ t.benefits[0].t }}",
    "Un bicchierino, un gesto.": "{{ t.benefits[0].d }}",
    "Apertura semplice": "{{ t.benefits[1].t }}",
    "Due sigilli asportabili. Chiunque può aprirlo con un gesto delicato.": "{{ t.benefits[1].d }}",
    "Distribuzione rapida": "{{ t.benefits[2].t }}",
    "Servi centinaia di persone in pochi minuti, senza code.": "{{ t.benefits[2].d }}",
    "Igiene garantita": "{{ t.benefits[3].t }}",
    "Ogni porzione è individuale, sicura e senza contaminazioni.": "{{ t.benefits[3].d }}",
    "Silenzio rispettato": "{{ t.benefits[4].t }}",
    "Un culto più silenzioso, più spazio per la riflessione.": "{{ t.benefits[4].d }}",
    "Zero distrazioni": "{{ t.benefits[5].t }}",
    "L&#x27;attenzione resta dove deve essere — su Cristo.": "{{ t.benefits[5].d }}",
    
    "Prezzi per le chiese, onesti e chiari.": "{{ t.pricingTitle }}",
    "Un confronto tra i prezzi tipici di mercato e quelli previsti al nostro lancio. I preventivi finali dipendono dal volume e dal paese.": "{{ t.pricingSub }}",
    "Prezzo di mercato": "{{ t.pricingHeaderMarket }}",
    "Il nostro prezzo": "{{ t.pricingHeaderOurs }}",
    "Il prezzo finale dipende dal volume dell&#x27;ordine, dal paese di destinazione e dalle specifiche.": "{{ t.pricingDisclaimer }}",
    
    "Più di semplici bicchierini. Una visione per il futuro.": "{{ t.impactTitle }}",
    "Il nostro desiderio non è solo servire le chiese rendendo la Santa Cena più accessibile, ma anche usare la crescita di questa azienda per sostenere la missione cristiana e portare speranza a comunità in tutto il mondo.": "{{ t.impactSubhead }}",
    "Crediamo che nessuna chiesa debba scegliere tra qualità e accessibilità economica. Che sia piccola o grande, in Europa o altrove, ogni congregazione merita una soluzione per la Santa Cena che mantenga lo sguardo su Cristo. E mentre The Holy Supper cresce, la nostra speranza è che ogni bicchierino diventi parte di qualcosa di più grande.": "{{ t.impactBody }}",
    
    "Al fianco di pastori e comunità ovunque servano.": "{{ t.impactPillars[0].d }}",
    "Aiuto pratico dove c&#x27;è più bisogno di speranza.": "{{ t.impactPillars[1].d }}",
    "Investire nelle aule per far crescere una nuova generazione.": "{{ t.impactPillars[2].d }}",
    "Sostegno a pozzi e acqua sicura dove la vita quotidiana dipende da essa.": "{{ t.impactPillars[3].d }}",
    
    "A vision beyond the local church": "{{ t.impactCaption }}",
    "Areas we hope to invest in as we grow": "{{ t.impactClosing }}",
    "L&#x27;Uganda è uno dei luoghi che ha ispirato questa visione — un&#x27;immagine dell&#x27;impatto che desideriamo estendere a molti paesi man mano che l&#x27;azienda cresce.": "{{ t.impactFooter1 }}",
    "&quot;<!-- -->La nostra preghiera è che ogni bicchierino che forniamo possa un giorno aiutare a rafforzare le chiese locali e creare opportunità per servire persone al di là di esse.<!-- -->&quot;": "{{ t.impactFooter2 }}",
    
    "Dal primo messaggio alla tua chiesa, in quattro passi.": "{{ t.howTitle }}",
    "Compila il modulo": "{{ t.howSteps[0].t }}",
    "Dicci di cosa ha bisogno la tua chiesa.": "{{ t.howSteps[0].d }}",
    "Ricevi il prezzo": "{{ t.howSteps[1].t }}",
    "Un preventivo su misura per il tuo paese.": "{{ t.howSteps[1].d }}",
    "Produciamo": "{{ t.howSteps[2].t }}",
    "Bicchierini fatti in Italia, per te.": "{{ t.howSteps[2].d }}",
    "Spediamo": "{{ t.howSteps[3].t }}",
    "Spediti in sicurezza a casa tua.": "{{ t.howSteps[3].d }}",
    
    "Risposte per pastori, amministratori e responsabili ministeriali.": "{{ t.faqTitle }}",
    "Cos&#x27;è esattamente un bicchierino pre-riempito?": "{{ faqs[0].q }}",
    "Quanto dura la comunione all&#x27;interno?": "{{ faqs[1].q }}",
    "Come si conservano i bicchierini?": "{{ faqs[2].q }}",
    "Le ostie sono senza glutine?": "{{ faqs[3].q }}",
    "Dove sono prodotti i bicchierini?": "{{ faqs[4].q }}",
    "Spedite in tutto il mondo?": "{{ faqs[5].q }}",
    "Compilando il modulo mi impegno all&#x27;acquisto?": "{{ faqs[6].q }}",
    
    "Sii tra le prime chiese a ricevere i nostri prezzi di lancio.": "{{ t.finalCtaTitle }}"
}

for k, v in reps.items():
    html = html.replace(k, v)
    
with open('src/app/pages/home/home.component.html', 'w') as f:
    f.write(html)
