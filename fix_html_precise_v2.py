import re

with open('src/app/pages/home/home.component.html', 'r') as f:
    html = f.read()

# Precise literal replacements to catch all the leftover Italian text!
reps = {
    "Movimenti, sussurri e passi spostano l'attenzione da Cristo.": "{{ t.problems[0].d }}",
    "Progettato con pastori e amministratori, perfezionato con l'uso reale della domenica.": "{{ t.benefitsSub }}",
    "L'attenzione resta dove deve essere — su Cristo.": "{{ t.benefits[5].d }}",
    "Il prezzo finale dipende dal volume dell'ordine, dal paese di destinazione e dalle specifiche.": "{{ t.pricingDisclaimer }}",
    "Aiuto pratico dove c'è più bisogno di speranza.": "{{ t.impactPillars[1].d }}",
    "L'Uganda è uno dei luoghi che ha ispirato questa visione — un'immagine dell'impatto che desideriamo estendere a molti paesi man mano che l'azienda cresce.": "{{ t.impactFooter1 }}",
    "\"<!-- -->La nostra preghiera è che ogni bicchierino che forniamo possa un giorno aiutare a rafforzare le chiese locali e creare opportunità per servire persone al di là di esse.<!-- -->\"": "{{ t.impactFooter2 }}",
    "Cos'è esattamente un bicchierino pre-riempito?": "{{ faqs[0].q }}",
    "Quanto dura la comunione all'interno?": "{{ faqs[1].q }}",
    "Compilando il modulo mi impegno all'acquisto?": "{{ faqs[6].q }}",
}

for k, v in reps.items():
    html = html.replace(k, v)
    
with open('src/app/pages/home/home.component.html', 'w') as f:
    f.write(html)
