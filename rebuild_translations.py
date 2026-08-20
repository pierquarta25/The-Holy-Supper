import re
import json

it_home = {
  "heroEyebrow": "Pre-lancio • Per le chiese di tutto il mondo",
  "heroTitle": "Mantenere lo sguardo su Cristo.",
  "heroSub": "Bicchierini per la Santa Cena semplici, igienici ed economici, pensati per le chiese. Pane e succo sigillati insieme — pronti da distribuire in pochi secondi.",
  "heroCta": "Richiedi Prezzi",
  "heroStat1Value": "100%", "heroStat1Label": "Made in Italy",
  "heroStat2Value": "12 mesi", "heroStat2Label": "Conservazione",
  "heroStat3Value": "6+", "heroStat3Label": "Paesi serviti",
  "trust": [
    "Made in Italy",
    "Spedizioni rapide in Europa",
    "Sostiene la missione",
    "Pensato per le chiese"
  ],
  "whyEyebrow": "LA VERA SANTA CENA",
  "whyTitle": "La Santa Cena dovrebbe unirci — non distrarci.",
  "whyProblemsTitle": "Sfide Comuni Durante La Santa Cena",
  "whyIntro": "La preparazione e la distribuzione tradizionali introducono spesso rumore, movimento e ritardi proprio nel momento in cui la comunità ha più bisogno di silenzio.",
  "problems": [
    {"t": "", "d": "Movimenti, sussurri e passi spostano l'attenzione da Cristo."}
  ],
  "solution": {
    "title": "Un bicchierino sigillato. Pane e succo, pronti.",
    "body": "Ogni bicchierino pre-riempito contiene il pane e il succo, insieme, sigillati. Nessuna distribuzione o rumore durante il momento sacro — solo silenziosa riverenza in ogni banco."
  },
  "benefitsEyebrow": "Vantaggi",
  "benefitsTitle": "Tutto ciò che serve alla tua chiesa — nulla di superfluo.",
  "benefitsSub": "Progettato con pastori e amministratori, perfezionato con l'uso reale della domenica.",
  "benefits": [
    {"t": "Pane e succo insieme", "d": "Un bicchierino, un gesto."},
    {"t": "Apertura semplice", "d": "Due sigilli asportabili. Chiunque può aprirlo con un gesto delicato."},
    {"t": "Distribuzione rapida", "d": "Servi centinaia di persone in pochi minuti, senza code."},
    {"t": "Igiene garantita", "d": "Ogni porzione è individuale, sicura e senza contaminazioni."},
    {"t": "Silenzio rispettato", "d": "Un culto più silenzioso, più spazio per la riflessione."},
    {"t": "Zero distrazioni", "d": "L'attenzione resta dove deve essere — su Cristo."}
  ],
  "pricingEyebrow": "PREZZI",
  "pricingTitle": "Prezzi per le chiese, onesti e chiari.",
  "pricingSub": "Un confronto tra i prezzi tipici di mercato e quelli previsti al nostro lancio. I preventivi finali dipendono dal volume e dal paese.",
  "pricingHeaderQty": "Scatola", "pricingHeaderMarket": "Prezzo di mercato", "pricingHeaderOurs": "Il nostro prezzo", "pricingHeaderSave": "Risparmio",
  "pricingCta": "Richiedi Preventivo",
  "pricingDisclaimer": "Il prezzo finale dipende dal volume dell'ordine, dal paese di destinazione e dalle specifiche.",
  "impactEyebrow": "La nostra missione",
  "impactTitle": "Più di semplici bicchierini. Una visione per il futuro.",
  "impactSubhead": "Il nostro desiderio non è solo servire le chiese rendendo la Santa Cena più accessibile, ma anche usare la crescita di questa azienda per sostenere la missione cristiana e portare speranza a comunità in tutto il mondo.",
  "impactBody": "Crediamo che nessuna chiesa debba scegliere tra qualità e accessibilità economica. Che sia piccola o grande, in Europa o altrove, ogni congregazione merita una soluzione per la Santa Cena che mantenga lo sguardo su Cristo. E mentre The Holy Supper cresce, la nostra speranza è che ogni bicchierino diventi parte di qualcosa di più grande.",
  "impactPillars": [
    {"t": "", "d": "Al fianco di pastori e comunità ovunque servano."},
    {"t": "", "d": "Aiuto pratico dove c'è più bisogno di speranza."},
    {"t": "", "d": "Investire nelle aule per far crescere una nuova generazione."},
    {"t": "", "d": "Sostegno a pozzi e acqua sicura dove la vita quotidiana dipende da essa."}
  ],
  "impactCaption": "A vision beyond the local church",
  "impactClosing": "Areas we hope to invest in as we grow",
  "impactFooter1": "L'Uganda è uno dei luoghi che ha ispirato questa visione — un'immagine dell'impatto che desideriamo estendere a molti paesi man mano che l'azienda cresce.",
  "impactFooter2": "La nostra preghiera è che ogni bicchierino che forniamo possa un giorno aiutare a rafforzare le chiese locali e creare opportunità per servire persone al di là di esse.",
  "howEyebrow": "Come funziona",
  "howTitle": "Dal primo messaggio alla tua chiesa, in quattro passi.",
  "howSteps": [
    {"t": "Compila il modulo", "d": "Dicci di cosa ha bisogno la tua chiesa."},
    {"t": "Ricevi il prezzo", "d": "Un preventivo su misura per il tuo paese."},
    {"t": "Produciamo", "d": "Bicchierini fatti in Italia, per te."},
    {"t": "Spediamo", "d": "Spediti in sicurezza a casa tua."}
  ],
  "faqEyebrow": "FAQ",
  "faqTitle": "Risposte per pastori, amministratori e responsabili ministeriali.",
  "finalCtaEyebrow": "Pre-lancio",
  "finalCtaTitle": "Sii tra le prime chiese a ricevere i nostri prezzi di lancio.",
  "finalCtaButton": "Richiedi Prezzi"
}

it_faqs = [
  {"q": "Cos'è esattamente un bicchierino pre-riempito?", "a": "È un singolo bicchierino contenente succo e un'ostia separata, tutto sigillato per igiene e freschezza."},
  {"q": "Quanto dura la comunione all'interno?", "a": "Garantiamo una conservazione sicura fino a 12 mesi se conservato correttamente."},
  {"q": "Come si conservano i bicchierini?", "a": "Si consiglia di conservarli in un luogo fresco e asciutto, lontano dalla luce solare diretta."},
  {"q": "Le ostie sono senza glutine?", "a": "Al momento offriamo ostie tradizionali, ma stiamo esplorando opzioni senza glutine per il futuro."},
  {"q": "Dove sono prodotti i bicchierini?", "a": "La produzione avviene interamente in Italia, seguendo rigidi standard di sicurezza alimentare."},
  {"q": "Spedite in tutto il mondo?", "a": "Sì, supportiamo spedizioni in Europa e in molti altri paesi a livello internazionale."},
  {"q": "Compilando il modulo mi impegno all'acquisto?", "a": "No, il modulo serve solo per richiedere un preventivo senza alcun obbligo di acquisto."}
]

en_home = {
  "heroEyebrow": "Pre-launch • For churches worldwide",
  "heroTitle": "Keeping the Focus on Christ.",
  "heroSub": "Simple, hygienic and affordable Communion Cups designed for churches. Bread and juice sealed together — ready to distribute in seconds.",
  "heroCta": "Request Pricing",
  "heroStat1Value": "100%", "heroStat1Label": "Made in Italy",
  "heroStat2Value": "12 months", "heroStat2Label": "Shelf Life",
  "heroStat3Value": "6+", "heroStat3Label": "Countries Served",
  "trust": ["Made in Italy", "Fast European shipping", "Supports mission", "Designed for churches"],
  "whyEyebrow": "TRUE COMMUNION",
  "whyTitle": "Communion should unite us — not distract us.",
  "whyProblemsTitle": "Common Challenges During Communion",
  "whyIntro": "Traditional preparation and distribution often introduce noise, movement, and delays precisely when the community most needs silence.",
  "problems": [{"t": "", "d": "Movements, whispers, and footsteps shift the focus away from Christ."}],
  "solution": {
    "title": "A sealed cup. Bread and juice, ready.",
    "body": "Each pre-filled cup contains bread and juice, together, sealed. No distribution or noise during the sacred moment — only quiet reverence in every pew."
  },
  "benefitsEyebrow": "Benefits",
  "benefitsTitle": "Everything your church needs — nothing unnecessary.",
  "benefitsSub": "Designed with pastors and administrators, perfected by real Sunday use.",
  "benefits": [
    {"t": "Bread and juice together", "d": "One cup, one gesture."},
    {"t": "Simple opening", "d": "Two peel-off seals. Anyone can open it with a gentle motion."},
    {"t": "Fast distribution", "d": "Serve hundreds of people in minutes, without queues."},
    {"t": "Guaranteed hygiene", "d": "Each portion is individual, safe, and contamination-free."},
    {"t": "Respected silence", "d": "A quieter service, more room for reflection."},
    {"t": "Zero distractions", "d": "The focus remains where it should be — on Christ."}
  ],
  "pricingEyebrow": "PRICING",
  "pricingTitle": "Pricing for churches, honest and clear.",
  "pricingSub": "A comparison between typical market prices and our expected launch prices. Final quotes depend on volume and country.",
  "pricingHeaderQty": "Box", "pricingHeaderMarket": "Market Price", "pricingHeaderOurs": "Our Price", "pricingHeaderSave": "Savings",
  "pricingCta": "Request Quote",
  "pricingDisclaimer": "The final price depends on the order volume, destination country, and specifications.",
  "impactEyebrow": "Our Mission",
  "impactTitle": "More than just cups. A vision for the future.",
  "impactSubhead": "Our desire is not only to serve churches by making Communion more accessible but also to use this company's growth to support Christian mission and bring hope to communities worldwide.",
  "impactBody": "We believe no church should have to choose between quality and affordability. Whether small or large, in Europe or elsewhere, every congregation deserves a Communion solution that keeps the focus on Christ. And as The Holy Supper grows, our hope is that every cup becomes part of something bigger.",
  "impactPillars": [
    {"t": "", "d": "Alongside pastors and communities wherever they serve."},
    {"t": "", "d": "Practical help where hope is needed most."},
    {"t": "", "d": "Investing in classrooms to raise a new generation."},
    {"t": "", "d": "Supporting wells and safe water where daily life depends on it."}
  ],
  "impactCaption": "A vision beyond the local church",
  "impactClosing": "Areas we hope to invest in as we grow",
  "impactFooter1": "Uganda is one of the places that inspired this vision — an image of the impact we wish to extend to many countries as the company grows.",
  "impactFooter2": "Our prayer is that every cup we provide may one day help strengthen local churches and create opportunities to serve people beyond them.",
  "howEyebrow": "How it works",
  "howTitle": "From the first message to your church, in four steps.",
  "howSteps": [
    {"t": "Fill out the form", "d": "Tell us what your church needs."},
    {"t": "Receive the price", "d": "A tailored quote for your country."},
    {"t": "We produce", "d": "Cups made in Italy, for you."},
    {"t": "We ship", "d": "Shipped securely to your door."}
  ],
  "faqEyebrow": "FAQ",
  "faqTitle": "Answers for pastors, administrators, and ministry leaders.",
  "finalCtaEyebrow": "Pre-launch",
  "finalCtaTitle": "Be among the first churches to receive our launch pricing.",
  "finalCtaButton": "Request Pricing"
}

en_faqs = [
  {"q": "What exactly is a pre-filled communion cup?", "a": "It is a single cup containing juice and a separate wafer, all sealed for hygiene and freshness."},
  {"q": "How long does the communion inside last?", "a": "We guarantee safe storage for up to 12 months when stored properly."},
  {"q": "How should the cups be stored?", "a": "We recommend storing them in a cool, dry place, away from direct sunlight."},
  {"q": "Are the wafers gluten-free?", "a": "We currently offer traditional wafers, but we are exploring gluten-free options for the future."},
  {"q": "Where are the cups produced?", "a": "Production takes place entirely in Italy, following strict food safety standards."},
  {"q": "Do you ship worldwide?", "a": "Yes, we support shipping across Europe and many other countries internationally."},
  {"q": "Does filling out the form commit me to buying?", "a": "No, the form is only to request a quote with no obligation to purchase."}
]

es_home = en_home.copy()
es_home.update({
  "heroEyebrow": "Pre-lanzamiento • Para iglesias de todo el mundo",
  "heroTitle": "Manteniendo la mirada en Cristo.",
  "heroSub": "Copas de Santa Cena simples, higiénicas y económicas, diseñadas para iglesias. Pan y jugo sellados juntos — listos para distribuir en segundos.",
  "heroCta": "Solicitar Precios",
  "heroStat2Label": "Conservación", "heroStat3Label": "Países servidos",
  "trust": ["Hecho en Italia", "Envíos rápidos en Europa", "Apoya la misión", "Diseñado para iglesias"],
  "whyEyebrow": "LA VERDADERA SANTA CENA",
  "whyTitle": "La Santa Cena debería unirnos — no distraernos.",
  "whyProblemsTitle": "Desafíos Comunes Durante La Santa Cena",
  "whyIntro": "La preparación y distribución tradicionales a menudo introducen ruido, movimiento y demoras precisamente cuando la comunidad más necesita silencio.",
  "problems": [{"t": "", "d": "Movimientos, susurros y pasos desvían la atención de Cristo."}],
  "solution": {
    "title": "Una copa sellada. Pan y jugo, listos.",
    "body": "Cada copa pre-llenada contiene el pan y el jugo, juntos, sellados. Sin distribución ni ruido durante el momento sagrado — solo reverencia silenciosa en cada banco."
  },
  "benefitsEyebrow": "Beneficios",
  "benefitsTitle": "Todo lo que necesita tu iglesia — nada superfluo.",
  "benefitsSub": "Diseñado con pastores y administradores, perfeccionado con el uso real del domingo.",
  "benefits": [
    {"t": "Pan y jugo juntos", "d": "Una copa, un gesto."},
    {"t": "Apertura simple", "d": "Dos sellos desprendibles. Cualquiera puede abrirlo con un movimiento suave."},
    {"t": "Distribución rápida", "d": "Sirve a cientos de personas en minutos, sin colas."},
    {"t": "Higiene garantizada", "d": "Cada porción es individual, segura y sin contaminación."},
    {"t": "Silencio respetado", "d": "Un culto más silencioso, más espacio para la reflexión."},
    {"t": "Cero distracciones", "d": "La atención permanece donde debe estar — en Cristo."}
  ],
  "pricingEyebrow": "PRECIOS",
  "pricingTitle": "Precios para iglesias, honestos y claros.",
  "pricingSub": "Una comparación entre los precios típicos del mercado y nuestros precios de lanzamiento. Las cotizaciones finales dependen del volumen y del país.",
  "pricingHeaderQty": "Caja", "pricingHeaderMarket": "Precio de mercado", "pricingHeaderOurs": "Nuestro precio", "pricingHeaderSave": "Ahorro",
  "pricingCta": "Solicitar Cotización",
  "pricingDisclaimer": "El precio final depende del volumen del pedido, el país de destino y las especificaciones.",
  "impactEyebrow": "Nuestra Misión",
  "impactTitle": "Más que simples copas. Una visión para el futuro.",
  "impactSubhead": "Nuestro deseo no es solo servir a las iglesias haciendo que la Santa Cena sea más accesible, sino también usar el crecimiento de esta empresa para apoyar la misión cristiana y llevar esperanza a comunidades de todo el mundo.",
  "impactBody": "Creemos que ninguna iglesia debería tener que elegir entre calidad y asequibilidad. Ya sea pequeña o grande, en Europa o en cualquier otro lugar, cada congregación merece una solución para la Santa Cena que mantenga la mirada en Cristo. Y a medida que The Holy Supper crece, nuestra esperanza es que cada copa se convierta en parte de algo más grande.",
  "impactPillars": [
    {"t": "", "d": "Junto a pastores y comunidades dondequiera que sirvan."},
    {"t": "", "d": "Ayuda práctica donde más se necesita esperanza."},
    {"t": "", "d": "Invertir en aulas para criar una nueva generación."},
    {"t": "", "d": "Apoyo a pozos y agua segura donde la vida diaria depende de ella."}
  ],
  "impactFooter1": "Uganda es uno de los lugares que inspiró esta visión — una imagen del impacto que deseamos extender a muchos países a medida que la empresa crece.",
  "impactFooter2": "Nuestra oración es que cada copa que proporcionamos pueda algún día ayudar a fortalecer iglesias locales y crear oportunidades para servir a las personas más allá de ellas.",
  "howEyebrow": "Cómo funciona",
  "howTitle": "Desde el primer mensaje hasta tu iglesia, en cuatro pasos.",
  "howSteps": [
    {"t": "Completa el formulario", "d": "Dinos qué necesita tu iglesia."},
    {"t": "Recibe el precio", "d": "Una cotización a medida para tu país."},
    {"t": "Producimos", "d": "Copas hechas en Italia, para ti."},
    {"t": "Enviamos", "d": "Enviado de forma segura a tu puerta."}
  ],
  "faqEyebrow": "FAQ",
  "faqTitle": "Respuestas para pastores, administradores y líderes ministeriales.",
  "finalCtaEyebrow": "Pre-lanzamiento",
  "finalCtaTitle": "Sé de las primeras iglesias en recibir nuestros precios de lanzamiento.",
  "finalCtaButton": "Solicitar Precios"
})

es_faqs = [
  {"q": "¿Qué es exactamente una copa de comunión pre-llenada?", "a": "Es una sola copa que contiene jugo y una hostia separada, todo sellado para higiene y frescura."},
  {"q": "¿Cuánto dura la comunión en el interior?", "a": "Garantizamos un almacenamiento seguro de hasta 12 meses si se almacena correctamente."},
  {"q": "¿Cómo se deben almacenar las copas?", "a": "Recomendamos almacenarlas en un lugar fresco y seco, lejos de la luz solar directa."},
  {"q": "¿Las hostias no tienen gluten?", "a": "Actualmente ofrecemos hostias tradicionales, pero estamos explorando opciones sin gluten para el futuro."},
  {"q": "¿Dónde se producen las copas?", "a": "La producción se realiza íntegramente en Italia, siguiendo estrictos estándares de seguridad alimentaria."},
  {"q": "¿Hacen envíos a todo el mundo?", "a": "Sí, apoyamos envíos a toda Europa y a muchos otros países a nivel internacional."},
  {"q": "¿Completar el formulario me compromete a comprar?", "a": "No, el formulario es solo para solicitar una cotización sin obligación de compra."}
]

pt_home = es_home.copy()
pt_faqs = es_faqs.copy()
fr_home = es_home.copy()
fr_faqs = es_faqs.copy()
de_home = es_home.copy()
de_faqs = es_faqs.copy()

all_langs = {
  'it': (it_home, it_faqs),
  'en': (en_home, en_faqs),
  'es': (es_home, es_faqs),
  'pt': (pt_home, pt_faqs),
  'fr': (fr_home, fr_faqs),
  'de': (de_home, de_faqs)
}

with open('src/app/i18n/translations.ts', 'r') as f:
    ts = f.read()

# We will parse the file using regex, replace the home block and faqs block for each language
def replace_blocks(content, lang, home_dict, faqs_dict):
    # Find home: { ... } inside lang: {
    home_regex = re.compile(rf'({lang}:\s*{{.*?home:\s*)({{.*?}})(,.*?faqs:\s*)(\[.*?\])', re.DOTALL)
    
    # Format the dictionaries as JS strings
    home_str = json.dumps(home_dict, indent=6, ensure_ascii=False)
    # Remove the outer braces of home_str so it fits naturally? No, json.dumps includes {}
    faqs_str = json.dumps(faqs_dict, indent=6, ensure_ascii=False)
    
    # We can just replace the capture groups!
    # BUT json.dumps keys have quotes. TypeScript allows quotes.
    return home_regex.sub(rf'\1{home_str}\3{faqs_str}', content)

for lang, (h, f) in all_langs.items():
    ts = replace_blocks(ts, lang, h, f)

with open('src/app/i18n/translations.ts', 'w') as f:
    f.write(ts)

print("Translations updated successfully.")
