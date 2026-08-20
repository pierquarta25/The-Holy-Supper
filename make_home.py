import re

with open('lovable_main_pretty.html', 'r') as f:
    lines = f.readlines()

# Extract from <main> to </main>
main_lines = []
in_main = False
for line in lines:
    if '<main' in line:
        in_main = True
    if in_main:
        main_lines.append(line)
    if '</main>' in line:
        break

html = "".join(main_lines)

# Now, we do string replacements to map static Italian text to Angular {{ t.* }} variables.
# And we also need to implement *ngFor loops to keep it dynamic.

replacements = {
    "Pre-lancio • Per le chiese di tutto il mondo": "{{ t.heroEyebrow }}",
    "Mantenere lo sguardo su Cristo.": "{{ t.heroTitle }}",
    "Bicchierini per la Santa Cena semplici, igienici ed economici, pensati per le chiese. Pane e succo sigillati insieme — pronti da distribuire in pochi secondi.": "{{ t.heroSub }}",
    "Richiedi Prezzi": "{{ t.heroCta }}",
    
    # Hero stats
    ">100%<": ">{{ t.heroStat1Value }}<",
    ">Made in Italy<": ">{{ t.heroStat1Label }}<",
    ">12 mesi<": ">{{ t.heroStat2Value }}<",
    ">Conservazione<": ">{{ t.heroStat2Label }}<",
    ">6+<": ">{{ t.heroStat3Value }}<",
    ">Paesi serviti<": ">{{ t.heroStat3Label }}<",

    "LA VERA SANTA CENA": "{{ t.whyEyebrow }}",
    "La vera Santa Cena, senza distrazioni.": "{{ t.whyTitle }}",
    "I momenti più importanti non dovrebbero essere interrotti da rumori, movimenti o attese.": "{{ t.whyIntro }}",

    "Tutto ciò di cui hai bisogno in un unico bicchierino pratico.": "{{ t.benefitsTitle }}",
    "Pensato per semplificare la vita della chiesa, senza rinunciare alla sacralità del momento.": "{{ t.benefitsSub }}",

    "PREZZI": "{{ t.pricingEyebrow }}",
    "Prezzi per tutte le dimensioni di chiesa.": "{{ t.pricingTitle }}",
    "Trasparenza totale. Più ordini, meno paghi. Prezzi pensati per supportare il tuo ministero.": "{{ t.pricingSub }}",
    
    "Scatola": "{{ t.pricingHeaderQty }}",
    "Quantità": "{{ t.pricingHeaderMarket }}",
    "Prezzo": "{{ t.pricingHeaderOurs }}",
    "Costo per porzione": "{{ t.pricingHeaderSave }}",
    "Richiedi Prezzi": "{{ t.pricingCta }}",
    "I prezzi possono subire variazioni in base alla destinazione.": "{{ t.pricingDisclaimer }}",

    "MISSIONE": "{{ t.impactEyebrow }}",
    "Dall'Italia per le Chiese d'Europa e oltre.": "{{ t.impactTitle }}",
    "Siamo fieri di produrre in Italia, garantendo standard elevati e supportando le comunità locali.": "{{ t.impactSubhead }}",
    "Crediamo che ogni chiesa, ovunque si trovi, debba avere accesso a strumenti che facilitino l'adorazione.": "{{ t.impactCaption }}",

    "UN PROCESSO SEMPLICE IN 4 FASI": "{{ t.howEyebrow }}",
    "Dall'ordine al tuo altare, in poco tempo.": "{{ t.howTitle }}",

    "Un partner essenziale per le chiese di ogni dimensione.": "{{ t.statsTitle }}",
    
    "FAQ": "{{ t.faqEyebrow }}",
    "Le tue domande, risolte in un colpo d'occhio.": "{{ t.faqTitle }}",

    "Non è solo un bicchierino, è un modo per facilitare il lavoro.": "{{ t.finalCtaTitle }}",
    "Ordina ora": "{{ t.finalCtaButton }}",
    
    'href="/it/contact"': '[routerLink]="[\'/\', locale, \'contact\']"'
}

for k, v in replacements.items():
    html = html.replace(k, v)

# Clean up SVG definitions or just use them as is.
with open('src/app/pages/home/home.component.html', 'w') as f:
    f.write(html)
