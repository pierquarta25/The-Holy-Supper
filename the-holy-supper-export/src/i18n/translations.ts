import type { Locale } from "./config";

export type FaqEntry = { q: string; a: string };

export type Dictionary = {
  nav: {
    why: string;
    benefits: string;
    pricing: string;
    mission: string;
    faq: string;
    contact: string;
    cta: string;
    menu: string;
    language: string;
  };
  footer: {
    tagline: string;
    exploreTitle: string;
    getInTouchTitle: string;
    requestPricing: string;
    privacyPolicy: string;
    cookiePolicy: string;
    terms: string;
    rights: string;
    madeInItaly: string;
  };
  cookie: {
    body: string;
    accept: string;
    essential: string;
    close: string;
    cookiePolicyLink: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroSub: string;
    heroCta: string;
    heroStat1Value: string;
    heroStat1Label: string;
    heroStat2Value: string;
    heroStat2Label: string;
    heroStat3Value: string;
    heroStat3Label: string;
    trust: string[];
    whyEyebrow: string;
    whyTitle: string;
    whyProblemsTitle: string;
    whyIntro: string;
    problems: { t: string; d: string }[];
    solution: { title: string; body: string };
    benefitsEyebrow: string;
    benefitsTitle: string;
    benefitsSub: string;
    benefits: { t: string; d: string }[];
    pricingEyebrow: string;
    pricingTitle: string;
    pricingSub: string;
    pricingHeaderQty: string;
    pricingHeaderMarket: string;
    pricingHeaderOurs: string;
    pricingHeaderSave: string;
    pricingCta: string;
    pricingDisclaimer: string;
    impactEyebrow: string;
    impactTitle: string;
    impactSubhead: string;
    impactBody: string;
    impactPillars: { t: string; d: string }[];
    impactCaption: string;
    impactClosing: string;
    howEyebrow: string;
    howTitle: string;
    howSteps: { t: string; d: string }[];
    faqEyebrow: string;
    faqTitle: string;
    finalCtaEyebrow: string;
    finalCtaTitle: string;
    finalCtaButton: string;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    intro: string;
    sampleNote: string;
    successTitle: string;
    successBody: string;
    backHome: string;
    submit: string;
    submitting: string;
    notify: string;
    messagePlaceholder: string;
    fields: {
      church: string;
      country: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      congregation: string;
      attendance: string;
      quantity: string;
      product: string;
      message: string;
    };
    placeholders: {
      congregation: string;
      attendance: string;
      quantity: string;
      product: string;
    };
    errors: {
      generic: string;
    };
  };
  waiting: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    intro: string;
    successTitle: string;
    successBody: string;
    backHome: string;
    submit: string;
    submitting: string;
    consent: string;
    consentPolicyLink: string;
    noSpam: string;
    fields: {
      name: string;
      church: string;
      role: string;
      country: string;
      email: string;
      phone: string;
      quantity: string;
    };
    placeholders: {
      role: string;
      quantity: string;
    };
    errors: {
      name: string;
      church: string;
      email: string;
      consent: string;
      generic: string;
    };
  };
  legal: {
    lastUpdated: string;
    label: string;
    privacyTitle: string;
    privacyMeta: string;
    privacyBody: string[];
    privacySections: { h: string; p: string }[];
    cookieTitle: string;
    cookieMeta: string;
    cookieBody: string;
    cookieSections: { h: string; p: string }[];
    termsTitle: string;
    termsMeta: string;
    termsBody: string;
    termsSections: { h: string; p: string }[];
  };
  meta: {
    homeTitle: string;
    homeDescription: string;
    keywords: string;
  };
  faqs: FaqEntry[];
};

/* -----------------------------------------------------------
   ENGLISH — source of truth
   ----------------------------------------------------------- */
const en: Dictionary = {
  nav: {
    why: "Why",
    benefits: "Benefits",
    pricing: "Pricing",
    mission: "Mission",
    faq: "FAQ",
    contact: "Contact",
    cta: "Request Pricing",
    menu: "Toggle menu",
    language: "Language",
  },
  footer: {
    tagline:
      "Making simple what must remain sacred. Pre-filled Communion Cups designed for churches — bread and juice, sealed together.",
    exploreTitle: "Explore",
    getInTouchTitle: "Get in touch",
    requestPricing: "Request pricing",
    privacyPolicy: "Privacy policy",
    cookiePolicy: "Cookie policy",
    terms: "Terms",
    rights: "All rights reserved.",
    madeInItaly: "Designed & Made in Italy",
  },
  cookie: {
    body:
      "We use essential cookies to make this site work and, with your consent, analytics cookies to understand how it is used. See our",
    accept: "Accept all",
    essential: "Essential only",
    close: "Close",
    cookiePolicyLink: "Cookie Policy",
  },
  home: {
    heroEyebrow: "Pre-launch • For churches worldwide",
    heroTitle: "Keeping the Focus on Christ.",
    heroSub:
      "Simple, hygienic and affordable Communion Cups designed for churches. Bread and juice sealed together — ready to distribute in seconds.",
    heroCta: "Request Pricing",
    heroStat1Value: "100%",
    heroStat1Label: "Made in Italy",
    heroStat2Value: "12 mo",
    heroStat2Label: "Shelf life",
    heroStat3Value: "6+",
    heroStat3Label: "Countries served",
    trust: [
      "Made in Italy",
      "Fast European shipping",
      "Food safe",
      "Secure packaging",
      "Supports mission",
      "Designed for churches",
    ],
    whyEyebrow: "Why it matters",
    whyTitle: "Communion should draw us in — not distract us.",
    whyProblemsTitle: "Common Challenges During Communion",
    whyIntro: "Traditional preparation and distribution often introduces noise, movement and delays right at the moment your congregation most needs stillness.",
    problems: [
      { t: "Multiple volunteers", d: "Preparation, distribution and cleanup pull people away from worship." },
      { t: "Interrupted flow", d: "Trays, cups and rows create pauses that break the atmosphere." },
      { t: "Noise & distraction", d: "Movement, whispers and shuffling shift the focus off Christ." },
    ],
    solution: {
      title: "One sealed cup. Bread and juice, ready.",
      body:
        "Each pre-filled cup contains the wafer and the juice, together, sealed. No distribution or noise during the sacred moment — just quiet reverence, in every pew.",
    },
    benefitsEyebrow: "Benefits",
    benefitsTitle: "Everything your church needs — nothing it doesn't.",
    benefitsSub:
      "Designed with pastors and administrators, refined by real Sunday-morning use.",
    benefits: [
      { t: "Bread & juice together", d: "One cup, one motion. No separate wafers or trays." },
      { t: "Effortless opening", d: "Two peelable seals. Anyone can open it in one gentle move." },
      { t: "Fast distribution", d: "Serve hundreds in minutes, without a queue." },
      { t: "Less distraction", d: "Quieter service, more room for reflection." },
      { t: "More reverence", d: "Focus stays where it belongs — on Christ." },
      { t: "Affordable at scale", d: "Volume pricing designed for weekly use." },
      { t: "Made in Italy", d: "Crafted to food-safety standards you can trust." },
      { t: "Ships across Europe", d: "Reliable delivery to the UK, EU and beyond." },
    ],
    pricingEyebrow: "Indicative pricing",
    pricingTitle: "Church pricing, honest and clear.",
    pricingSub:
      "A snapshot of typical market pricing compared with our expected launch pricing. Final quotes depend on order volume and country.",
    pricingHeaderQty: "Quantity",
    pricingHeaderMarket: "Market price",
    pricingHeaderOurs: "Our pricing",
    pricingHeaderSave: "You save",
    pricingCta: "Request Custom Quote",
    pricingDisclaimer:
      "Final pricing depends on order volume, destination country and specifications.",
    impactEyebrow: "Our mission",
    impactTitle: "More Than Communion Cups. A Vision for the Future.",
    impactSubhead:
      "Our desire is not only to serve churches by making Communion more accessible, but also to use the growth of this company to support Christian mission and bring hope to communities around the world.",
    impactBody:
      "We believe no church should have to choose between quality and affordability. Whether small or large, in Europe or beyond, every congregation deserves a Communion solution that keeps the focus on Christ. And as The Holy Supper grows, our hope is that every cup we provide becomes part of something greater.",
    impactPillars: [
      { t: "Local churches", d: "Standing with pastors and congregations wherever they serve." },
      { t: "Vulnerable communities", d: "Practical aid in places where hope is most needed." },
      { t: "Education for children", d: "Investing in classrooms so a new generation can rise." },
      { t: "Clean water", d: "Supporting wells and safe water where daily life depends on it." },
    ],
    impactCaption: "Uganda is one of the places that has inspired this vision — a picture of the impact we hope to extend to many countries as the company grows.",
    impactClosing: "Our prayer is that every Communion Cup we provide will one day help strengthen local churches while also creating opportunities to serve people beyond them.",
    howEyebrow: "How it works",
    howTitle: "From first message to your church, in four steps.",
    howSteps: [
      { t: "Fill the form", d: "Tell us about your church." },
      { t: "Receive pricing", d: "A tailored quote for your country." },
      { t: "Production", d: "Cups made in Italy, made for you." },
      { t: "Delivery", d: "Shipped safely to your door." },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Answers for pastors, admins & ministry leaders.",
    finalCtaEyebrow: "Pre-launch",
    finalCtaTitle: "Be among the first churches to receive our launch pricing.",
    finalCtaButton: "Request Pricing",
  },
  contact: {
    metaTitle: "Request Pricing — The Holy Supper",
    metaDescription:
      "Contact The Holy Supper to request pricing, samples or launch information for pre-filled Communion Cups.",
    eyebrow: "Contact",
    title: "Let's talk.",
    intro: "Tell us about your church and we'll come back with pricing and next steps.",
    sampleNote:
      "Sample kits are coming soon. Mention it in your message and we'll add you to the priority list.",
    successTitle: "Message received.",
    successBody:
      "Thank you for reaching out. A member of our team will personally respond within two business days with pricing tailored to your church.",
    backHome: "Back to home",
    submit: "Request Pricing",
    submitting: "Sending…",
    notify: "Notify me when ordering opens.",
    messagePlaceholder: "Tell us how we can help…",
    fields: {
      church: "Church name",
      country: "Country",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone",
      congregation: "Congregation size",
      attendance: "Communion attendance",
      quantity: "Expected quantity (cups)",
      product: "Preferred product",
      message: "Message",
    },
    placeholders: {
      congregation: "e.g. 300",
      attendance: "e.g. 220",
      quantity: "e.g. 500 / month",
      product: "Juice or wine",
    },
    errors: {
      generic: "Please check the form.",
    },
  },
  waiting: {
    metaTitle: "Join the Waiting List — The Holy Supper",
    metaDescription:
      "Be among the first churches to receive launch pricing for pre-filled Communion Cups. Join the Holy Supper waiting list.",
    eyebrow: "Waiting list",
    title: "Be among the first churches to receive our launch pricing.",
    intro: "Priority production. Best per-cup rates. A free preparation guide by email.",
    successTitle: "You're on the list.",
    successBody:
      "Thank you. We'll reach out personally with your launch pricing as soon as production is ready. Meanwhile, our free guide “The Church Guide to Preparing Communion” will be sent to the email you provided.",
    backHome: "Back to home",
    submit: "Join the Waiting List",
    submitting: "Sending…",
    consent:
      "I agree to be contacted about The Holy Supper launch and understand my data is handled per the",
    consentPolicyLink: "Privacy Policy",
    noSpam: "No spam. Unsubscribe anytime.",
    fields: {
      name: "Full name",
      church: "Church name",
      role: "Your role",
      country: "Country",
      email: "Email",
      phone: "Phone (optional)",
      quantity: "Estimated quantity (cups)",
    },
    placeholders: {
      role: "Pastor, admin…",
      quantity: "e.g. 250 per month",
    },
    errors: {
      name: "Please enter your name",
      church: "Church name is required",
      email: "Please enter a valid email",
      consent: "Consent is required to join the waiting list.",
      generic: "Please check the form.",
    },
  },
  legal: {
    lastUpdated: "Last updated",
    label: "Legal",
    privacyTitle: "Privacy Policy",
    privacyMeta: "How The Holy Supper collects, uses and protects your data.",
    privacyBody: [
      "This page is maintained by The Holy Supper to explain how personal information is handled when you visit our website or contact us. It is written in plain language and may be updated to reflect changes in our practices or in applicable law.",
    ],
    privacySections: [
      {
        h: "Information we collect",
        p: "We collect only the information you choose to share with us through our contact and waiting-list forms — such as your name, church, role, country, email and phone number — together with basic technical data (device, browser, referring page) needed to keep the site running and secure.",
      },
      {
        h: "How we use it",
        p: "We use your information to respond to your enquiry, prepare tailored pricing, keep you informed about our launch, and improve our service. We never sell your data.",
      },
      {
        h: "Legal basis (EU / UK)",
        p: "We process personal data on the basis of your consent and our legitimate interest in operating and improving the service.",
      },
      {
        h: "Your rights",
        p: "You may request access to, correction of, or deletion of your personal data at any time by writing to theholysupper@gmail.com.",
      },
      {
        h: "Data retention",
        p: "We keep your data only as long as needed to respond to your enquiry and — where you have consented — to inform you about our launch.",
      },
      {
        h: "Contact",
        p: "For any privacy question, please write to theholysupper@gmail.com.",
      },
    ],
    cookieTitle: "Cookie Policy",
    cookieMeta: "How The Holy Supper uses cookies and similar technologies.",
    cookieBody:
      "This site uses a small number of cookies to function correctly and, with your consent, to help us understand how visitors use the site.",
    cookieSections: [
      {
        h: "Essential cookies",
        p: "These cookies are strictly necessary to remember your preferences (such as your cookie choice) and to keep the site secure. They cannot be turned off.",
      },
      {
        h: "Analytics cookies",
        p: "With your consent we may use privacy-friendly analytics to measure aggregated usage. These cookies do not identify you personally.",
      },
      {
        h: "Managing your choice",
        p: "You can change or withdraw your consent at any time by clearing your browser data for this site — the cookie banner will appear again on your next visit.",
      },
    ],
    termsTitle: "Terms of Use",
    termsMeta: "Terms of use for The Holy Supper website.",
    termsBody:
      "By using this website you agree to the following terms. This site is currently a pre-launch information site — no products are sold, and no orders can be placed online.",
    termsSections: [
      {
        h: "Content",
        p: "All content, imagery and branding on this site are the property of The Holy Supper unless otherwise stated. Prices, features and images are indicative and may change at launch.",
      },
      {
        h: "Enquiries",
        p: "Any information you send us via the contact or waiting-list forms will be handled as described in our Privacy Policy.",
      },
      {
        h: "Liability",
        p: "The site is provided on an “as-is” basis. To the maximum extent permitted by law, The Holy Supper is not liable for any indirect or consequential damages arising from the use of this website.",
      },
      {
        h: "Governing law",
        p: "These terms are governed by the laws of Italy.",
      },
    ],
  },
  meta: {
    homeTitle: "The Holy Supper — Pre-filled Communion Cups for Churches",
    homeDescription:
      "Simple, hygienic and affordable pre-filled communion cups. Bread and juice sealed together. Designed for churches, made in Italy, shipped across Europe and worldwide.",
    keywords:
      "communion cups, pre-filled communion cups, communion elements, holy communion, church communion supplies, Lord's Supper cups, single serve communion, portable communion",
  },
  faqs: [
    {
      q: "What exactly is a pre-filled communion cup?",
      a: "A single, sealed serving that contains both the bread (wafer) and the juice or wine together — ready to distribute, open and partake without preparation.",
    },
    {
      q: "How long does the communion inside stay fresh?",
      a: "Shelf life is typically 12 months from production when stored correctly. Exact dates are printed on every case.",
    },
    {
      q: "How should we store the cups?",
      a: "Store in a cool, dry place away from direct sunlight and heat sources. No refrigeration is required prior to opening.",
    },
    {
      q: "Do you use juice or wine?",
      a: "Our standard cups use non-alcoholic grape juice. Wine variants can be discussed for specific volume orders.",
    },
    {
      q: "Are the wafers gluten free?",
      a: "A gluten-free wafer option is planned. Please indicate your preference in the waiting list form so we can prioritise production.",
    },
    {
      q: "Where are the cups made?",
      a: "Every cup is designed and made in Italy, under strict food-safety standards.",
    },
    {
      q: "Do you ship internationally?",
      a: "Yes — throughout Italy and Europe, with tailored shipping to the UK, Australia, United States and Canada on request.",
    },
    {
      q: "Am I committing to purchase by submitting the form?",
      a: "Submitting this form is simply a request for a personalised quotation based on your church's specific needs. It does not place an order, reserve products, require payment, or create any obligation to purchase.\n\nBecause every church is different, we prepare customised quotations based on factors such as your estimated quantity, delivery location, and any specific requirements you may have. This allows us to provide the most accurate and competitive pricing possible.\n\nOnce we receive your enquiry, our team will review your information and send you a tailored quotation. You are then free to decide whether or not you would like to proceed—there is no commitment, no pressure, and no obligation.\n\nOur goal is simply to help your church understand the available options and pricing so you can make an informed decision when we're ready to begin accepting orders.",
    },
  ],
};

/* -----------------------------------------------------------
   ITALIAN
   ----------------------------------------------------------- */
const it: Dictionary = {
  nav: {
    why: "Perché",
    benefits: "Vantaggi",
    pricing: "Prezzi",
    mission: "Missione",
    faq: "FAQ",
    contact: "Contatti",
    cta: "Richiedi Prezzi",
    menu: "Apri menu",
    language: "Lingua",
  },
  footer: {
    tagline:
      "Rendere semplice ciò che deve restare sacro. Bicchierini per la Santa Cena pensati per le chiese — pane e succo, sigillati insieme.",
    exploreTitle: "Esplora",
    getInTouchTitle: "Contattaci",
    requestPricing: "Richiedi prezzi",
    privacyPolicy: "Informativa privacy",
    cookiePolicy: "Cookie policy",
    terms: "Termini",
    rights: "Tutti i diritti riservati.",
    madeInItaly: "Progettato e Prodotto in Italia",
  },
  cookie: {
    body:
      "Utilizziamo cookie essenziali per il funzionamento del sito e, con il tuo consenso, cookie di analisi. Consulta la nostra",
    accept: "Accetta tutti",
    essential: "Solo essenziali",
    close: "Chiudi",
    cookiePolicyLink: "Cookie Policy",
  },
  home: {
    heroEyebrow: "Pre-lancio • Per le chiese di tutto il mondo",
    heroTitle: "Mantenere lo sguardo su Cristo.",
    heroSub:
      "Bicchierini per la Santa Cena semplici, igienici ed economici, pensati per le chiese. Pane e succo sigillati insieme — pronti da distribuire in pochi secondi.",
    heroCta: "Richiedi Prezzi",
    heroStat1Value: "100%",
    heroStat1Label: "Made in Italy",
    heroStat2Value: "12 mesi",
    heroStat2Label: "Conservazione",
    heroStat3Value: "6+",
    heroStat3Label: "Paesi serviti",
    trust: [
      "Made in Italy",
      "Spedizioni rapide in Europa",
      "Sicurezza alimentare",
      "Imballaggio protetto",
      "Sostiene la missione",
      "Pensato per le chiese",
    ],
    whyEyebrow: "Perché è importante",
    whyTitle: "La Santa Cena dovrebbe unirci — non distrarci.",
    whyProblemsTitle: "Sfide Comuni Durante La Santa Cena",
    whyIntro: "La preparazione e la distribuzione tradizionali introducono spesso rumore, movimento e ritardi proprio nel momento in cui la comunità ha più bisogno di silenzio.",
    problems: [
      { t: "Molti volontari", d: "Preparazione, distribuzione e pulizia sottraggono persone al culto." },
      { t: "Flusso interrotto", d: "Vassoi, bicchierini e fila creano pause che spezzano l'atmosfera." },
      { t: "Rumore e distrazioni", d: "Movimenti, sussurri e passi spostano l'attenzione da Cristo." },
    ],
    solution: {
      title: "Un bicchierino sigillato. Pane e succo, pronti.",
      body:
        "Ogni bicchierino pre-riempito contiene il pane e il succo, insieme, sigillati. Nessuna distribuzione o rumore durante il momento sacro — solo silenziosa riverenza in ogni banco.",
    },
    benefitsEyebrow: "Vantaggi",
    benefitsTitle: "Tutto ciò che serve alla tua chiesa — nulla di superfluo.",
    benefitsSub:
      "Progettato con pastori e amministratori, perfezionato con l'uso reale della domenica.",
    benefits: [
      { t: "Pane e succo insieme", d: "Un bicchierino, un gesto." },
      { t: "Apertura semplice", d: "Due sigilli asportabili. Chiunque può aprirlo con un gesto delicato." },
      { t: "Distribuzione veloce", d: "Servi centinaia di persone in pochi minuti, senza code." },
      { t: "Meno distrazioni", d: "Un culto più silenzioso, più spazio per la riflessione." },
      { t: "Più riverenza", d: "L'attenzione resta dove deve essere — su Cristo." },
      { t: "Prezzi accessibili", d: "Tariffe per volume pensate per l'uso settimanale." },
      { t: "Made in Italy", d: "Prodotti secondo elevati standard di sicurezza alimentare." },
      { t: "Spedizioni in Europa", d: "Consegne affidabili nel Regno Unito, UE e oltre." },
    ],
    pricingEyebrow: "Prezzi indicativi",
    pricingTitle: "Prezzi per le chiese, onesti e chiari.",
    pricingSub:
      "Un confronto tra i prezzi tipici di mercato e quelli previsti al nostro lancio. I preventivi finali dipendono dal volume e dal paese.",
    pricingHeaderQty: "Quantità",
    pricingHeaderMarket: "Prezzo di mercato",
    pricingHeaderOurs: "Il nostro prezzo",
    pricingHeaderSave: "Risparmi",
    pricingCta: "Richiedi Preventivo",
    pricingDisclaimer:
      "Il prezzo finale dipende dal volume dell'ordine, dal paese di destinazione e dalle specifiche.",
    impactEyebrow: "La nostra missione",
    impactTitle: "Più di semplici bicchierini. Una visione per il futuro.",
    impactSubhead:
      "Il nostro desiderio non è solo servire le chiese rendendo la Santa Cena più accessibile, ma anche usare la crescita di questa azienda per sostenere la missione cristiana e portare speranza a comunità in tutto il mondo.",
    impactBody:
      "Crediamo che nessuna chiesa debba scegliere tra qualità e accessibilità economica. Che sia piccola o grande, in Europa o altrove, ogni congregazione merita una soluzione per la Santa Cena che mantenga lo sguardo su Cristo. E mentre The Holy Supper cresce, la nostra speranza è che ogni bicchierino diventi parte di qualcosa di più grande.",
    impactPillars: [
      { t: "Chiese locali", d: "Al fianco di pastori e comunità ovunque servano." },
      { t: "Comunità vulnerabili", d: "Aiuto pratico dove c'è più bisogno di speranza." },
      { t: "Educazione dei bambini", d: "Investire nelle aule per far crescere una nuova generazione." },
      { t: "Acqua pulita", d: "Sostegno a pozzi e acqua sicura dove la vita quotidiana dipende da essa." },
    ],
    impactCaption: "L'Uganda è uno dei luoghi che ha ispirato questa visione — un'immagine dell'impatto che desideriamo estendere a molti paesi man mano che l'azienda cresce.",
    impactClosing: "La nostra preghiera è che ogni bicchierino che forniamo possa un giorno aiutare a rafforzare le chiese locali e creare opportunità per servire persone al di là di esse.",
    howEyebrow: "Come funziona",
    howTitle: "Dal primo messaggio alla tua chiesa, in quattro passi.",
    howSteps: [
      { t: "Compila il modulo", d: "Raccontaci della tua chiesa." },
      { t: "Ricevi il prezzo", d: "Un preventivo su misura per il tuo paese." },
      { t: "Produzione", d: "Bicchierini fatti in Italia, per te." },
      { t: "Consegna", d: "Spediti in sicurezza a casa tua." },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Risposte per pastori, amministratori e responsabili ministeriali.",
    finalCtaEyebrow: "Pre-lancio",
    finalCtaTitle:
      "Sii tra le prime chiese a ricevere i nostri prezzi di lancio.",
    finalCtaButton: "Richiedi Prezzi",
  },
  contact: {
    metaTitle: "Richiedi Prezzi — The Holy Supper",
    metaDescription:
      "Contatta The Holy Supper per richiedere prezzi, campioni o informazioni sul lancio dei bicchierini per la Santa Cena.",
    eyebrow: "Contatti",
    title: "Parliamone.",
    intro: "Raccontaci della tua chiesa e ti risponderemo con prezzi e prossimi passi.",
    sampleNote:
      "I kit campione arriveranno presto. Segnalacelo nel messaggio e ti aggiungeremo alla lista prioritaria.",
    successTitle: "Messaggio ricevuto.",
    successBody:
      "Grazie per averci contattato. Un membro del nostro team ti risponderà personalmente entro due giorni lavorativi con prezzi su misura per la tua chiesa.",
    backHome: "Torna alla home",
    submit: "Richiedi Prezzi",
    submitting: "Invio…",
    notify: "Avvisami quando gli ordini apriranno.",
    messagePlaceholder: "Dicci come possiamo aiutarti…",
    fields: {
      church: "Nome della chiesa",
      country: "Paese",
      firstName: "Nome",
      lastName: "Cognome",
      email: "Email",
      phone: "Telefono",
      congregation: "Dimensione della congregazione",
      attendance: "Partecipanti alla Santa Cena",
      quantity: "Quantità prevista (bicchierini)",
      product: "Prodotto preferito",
      message: "Messaggio",
    },
    placeholders: {
      congregation: "es. 300",
      attendance: "es. 220",
      quantity: "es. 500 / mese",
      product: "Succo o vino",
    },
    errors: { generic: "Controlla il modulo." },
  },
  waiting: {
    metaTitle: "Iscriviti alla Waiting List — The Holy Supper",
    metaDescription:
      "Sii tra le prime chiese a ricevere i prezzi di lancio dei bicchierini per la Santa Cena. Iscriviti alla waiting list.",
    eyebrow: "Waiting list",
    title: "Sii tra le prime chiese a ricevere i nostri prezzi di lancio.",
    intro: "Produzione prioritaria. Migliori tariffe per bicchierino. Una guida gratuita via email.",
    successTitle: "Sei in lista.",
    successBody:
      "Grazie. Ti contatteremo personalmente con i prezzi di lancio non appena la produzione sarà pronta. Nel frattempo ti invieremo la guida gratuita “The Church Guide to Preparing Communion”.",
    backHome: "Torna alla home",
    submit: "Iscriviti alla Waiting List",
    submitting: "Invio…",
    consent:
      "Acconsento a essere contattato riguardo al lancio di The Holy Supper e ho compreso il trattamento dei miei dati come da",
    consentPolicyLink: "Informativa Privacy",
    noSpam: "Niente spam. Puoi cancellarti in qualsiasi momento.",
    fields: {
      name: "Nome completo",
      church: "Nome della chiesa",
      role: "Il tuo ruolo",
      country: "Paese",
      email: "Email",
      phone: "Telefono (facoltativo)",
      quantity: "Quantità stimata (bicchierini)",
    },
    placeholders: { role: "Pastore, admin…", quantity: "es. 250 al mese" },
    errors: {
      name: "Inserisci il tuo nome",
      church: "Il nome della chiesa è obbligatorio",
      email: "Inserisci un indirizzo email valido",
      consent: "Il consenso è necessario per iscriversi alla waiting list.",
      generic: "Controlla il modulo.",
    },
  },
  legal: {
    lastUpdated: "Ultimo aggiornamento",
    label: "Legale",
    privacyTitle: "Informativa Privacy",
    privacyMeta: "Come The Holy Supper raccoglie, utilizza e protegge i tuoi dati.",
    privacyBody: [
      "Questa pagina è gestita da The Holy Supper per spiegare come vengono trattate le informazioni personali quando visiti il nostro sito o ci contatti. È scritta in linguaggio semplice e può essere aggiornata per riflettere cambiamenti nelle nostre pratiche o nella legge applicabile.",
    ],
    privacySections: [
      {
        h: "Informazioni che raccogliamo",
        p: "Raccogliamo solo le informazioni che scegli di condividere con noi tramite i moduli di contatto e waiting list — nome, chiesa, ruolo, paese, email e telefono — insieme a dati tecnici di base necessari per far funzionare il sito in sicurezza.",
      },
      {
        h: "Come le utilizziamo",
        p: "Utilizziamo le tue informazioni per rispondere, preparare prezzi su misura, tenerti aggiornato sul lancio e migliorare il servizio. Non vendiamo mai i tuoi dati.",
      },
      {
        h: "Base giuridica (UE / UK)",
        p: "Trattiamo i dati personali in base al tuo consenso e al nostro legittimo interesse a operare e migliorare il servizio.",
      },
      {
        h: "I tuoi diritti",
        p: "Puoi richiedere accesso, rettifica o cancellazione dei tuoi dati personali in qualsiasi momento scrivendo a theholysupper@gmail.com.",
      },
      {
        h: "Conservazione dei dati",
        p: "Conserviamo i tuoi dati solo per il tempo necessario a rispondere alla tua richiesta e — se hai dato il consenso — per informarti sul lancio.",
      },
      { h: "Contatto", p: "Per qualsiasi domanda sulla privacy, scrivi a theholysupper@gmail.com." },
    ],
    cookieTitle: "Cookie Policy",
    cookieMeta: "Come The Holy Supper utilizza i cookie e tecnologie simili.",
    cookieBody:
      "Questo sito utilizza un numero limitato di cookie per funzionare correttamente e, con il tuo consenso, per aiutarci a capire come viene utilizzato.",
    cookieSections: [
      { h: "Cookie essenziali", p: "Strettamente necessari per ricordare le tue preferenze e mantenere il sito sicuro. Non possono essere disattivati." },
      { h: "Cookie di analisi", p: "Con il tuo consenso possiamo utilizzare strumenti di analisi rispettosi della privacy per misurare l'uso aggregato. Non ti identificano personalmente." },
      { h: "Gestire la tua scelta", p: "Puoi modificare o revocare il consenso in qualsiasi momento cancellando i dati del browser per questo sito." },
    ],
    termsTitle: "Termini di Utilizzo",
    termsMeta: "Termini di utilizzo del sito The Holy Supper.",
    termsBody:
      "Utilizzando questo sito accetti i seguenti termini. Attualmente il sito è informativo di pre-lancio — non vengono venduti prodotti e non è possibile effettuare ordini online.",
    termsSections: [
      { h: "Contenuti", p: "Tutti i contenuti, le immagini e il branding di questo sito sono di proprietà di The Holy Supper salvo diversa indicazione. Prezzi, caratteristiche e immagini sono indicativi e possono cambiare al lancio." },
      { h: "Richieste", p: "Le informazioni inviate tramite i moduli saranno trattate come descritto nell'Informativa Privacy." },
      { h: "Responsabilità", p: "Il sito è fornito “così com'è”. Nei limiti massimi consentiti dalla legge, The Holy Supper non è responsabile per danni indiretti o consequenziali derivanti dall'uso del sito." },
      { h: "Legge applicabile", p: "Questi termini sono regolati dalle leggi italiane." },
    ],
  },
  meta: {
    homeTitle: "The Holy Supper — Bicchierini per la Santa Cena per Chiese",
    homeDescription:
      "Bicchierini per la Santa Cena semplici, igienici ed economici. Pane e succo sigillati insieme. Progettati per le chiese, prodotti in Italia, spediti in Europa e nel mondo.",
    keywords:
      "bicchierini comunione, calici comunione, bicchieri santa cena, Santa Cena, comunione chiese, forniture santa cena",
  },
  faqs: [
    {
      q: "Cos'è esattamente un bicchierino pre-riempito?",
      a: "Una singola porzione sigillata che contiene sia il pane (ostia) che il succo o il vino insieme — pronta per essere distribuita, aperta e consumata senza preparazione.",
    },
    {
      q: "Quanto dura la comunione all'interno?",
      a: "La conservazione è tipicamente di 12 mesi dalla produzione, se conservata correttamente. Le date esatte sono stampate su ogni confezione.",
    },
    {
      q: "Come si conservano i bicchierini?",
      a: "Conservare in luogo fresco e asciutto, lontano da luce solare diretta e fonti di calore. Non è richiesta refrigerazione prima dell'apertura.",
    },
    {
      q: "Usate succo o vino?",
      a: "I nostri bicchierini standard utilizzano succo d'uva analcolico. Per ordini di volumi specifici possiamo discutere varianti con vino.",
    },
    {
      q: "Le ostie sono senza glutine?",
      a: "È prevista un'opzione senza glutine. Indica la tua preferenza nel modulo per aiutarci a pianificare la produzione.",
    },
    {
      q: "Dove sono prodotti i bicchierini?",
      a: "Ogni bicchierino è progettato e prodotto in Italia, secondo severi standard di sicurezza alimentare.",
    },
    {
      q: "Spedite in tutto il mondo?",
      a: "Sì — in tutta Italia ed Europa, con spedizioni su misura per Regno Unito, Australia, Stati Uniti e Canada su richiesta.",
    },
    {
      q: "Compilando il modulo mi impegno all'acquisto?",
      a: "Compilare questo modulo è semplicemente una richiesta di preventivo personalizzato in base alle esigenze specifiche della tua chiesa. Non costituisce un ordine, non riserva prodotti, non richiede pagamento e non crea alcun obbligo di acquisto.\n\nOgni chiesa è diversa, quindi prepariamo preventivi su misura in base a quantità stimata, luogo di consegna e requisiti specifici.\n\nDopo aver ricevuto la tua richiesta, il nostro team la esaminerà e ti invierà un preventivo su misura. Sei libero di decidere se procedere — senza impegno né pressioni.\n\nIl nostro obiettivo è aiutare la tua chiesa a comprendere opzioni e prezzi per prendere una decisione informata quando saremo pronti ad accettare ordini.",
    },
  ],
};

/* -----------------------------------------------------------
   SPANISH
   ----------------------------------------------------------- */
const es: Dictionary = {
  nav: {
    why: "Por qué",
    benefits: "Beneficios",
    pricing: "Precios",
    mission: "Misión",
    faq: "FAQ",
    contact: "Contacto",
    cta: "Solicitar Precios",
    menu: "Abrir menú",
    language: "Idioma",
  },
  footer: {
    tagline:
      "Hacer simple lo que debe permanecer sagrado. Copitas de Santa Cena pre-llenadas diseñadas para iglesias — pan y jugo, sellados juntos.",
    exploreTitle: "Explorar",
    getInTouchTitle: "Contáctanos",
    requestPricing: "Solicitar precios",
    privacyPolicy: "Política de privacidad",
    cookiePolicy: "Política de cookies",
    terms: "Términos",
    rights: "Todos los derechos reservados.",
    madeInItaly: "Diseñado y Hecho en Italia",
  },
  cookie: {
    body:
      "Utilizamos cookies esenciales para que este sitio funcione y, con tu consentimiento, cookies analíticas. Consulta nuestra",
    accept: "Aceptar todas",
    essential: "Solo esenciales",
    close: "Cerrar",
    cookiePolicyLink: "Política de Cookies",
  },
  home: {
    heroEyebrow: "Pre-lanzamiento • Para iglesias en todo el mundo",
    heroTitle: "Manteniendo la Mirada en Cristo.",
    heroSub:
      "Copitas de Santa Cena simples, higiénicas y asequibles, diseñadas para iglesias. Pan y jugo sellados juntos — listos para distribuir en segundos.",
    heroCta: "Solicitar Precios",
    heroStat1Value: "100%",
    heroStat1Label: "Hecho en Italia",
    heroStat2Value: "12 meses",
    heroStat2Label: "Vida útil",
    heroStat3Value: "6+",
    heroStat3Label: "Países servidos",
    trust: [
      "Hecho en Italia",
      "Envío rápido en Europa",
      "Apto para alimentos",
      "Embalaje seguro",
      "Apoya la misión",
      "Diseñado para iglesias",
    ],
    whyEyebrow: "Por qué importa",
    whyTitle: "La Santa Cena debe unirnos — no distraernos.",
    whyProblemsTitle: "Desafíos comunes durante la Comunión",
    whyIntro: "La preparación y distribución tradicionales introducen ruido, movimiento y demoras justo en el momento en que la congregación más necesita quietud.",
    problems: [
      { t: "Muchos voluntarios", d: "Preparación, distribución y limpieza alejan a las personas del culto." },
      { t: "Flujo interrumpido", d: "Bandejas, copas y filas crean pausas que rompen el ambiente." },
      { t: "Ruido y distracción", d: "Movimientos, susurros y pasos desvían la atención de Cristo." },
    ],
    solution: {
      title: "Una copita sellada. Pan y jugo, listos.",
      body:
        "Cada copita pre-llenada contiene la oblea y el jugo, juntos, sellados. Sin distribución ni ruido durante el momento sagrado — solo reverencia silenciosa en cada banco.",
    },
    benefitsEyebrow: "Beneficios",
    benefitsTitle: "Todo lo que tu iglesia necesita — nada más.",
    benefitsSub:
      "Diseñado con pastores y administradores, refinado con el uso real dominical.",
    benefits: [
      { t: "Pan y jugo juntos", d: "Una copita, un solo gesto. Sin obleas ni bandejas aparte." },
      { t: "Apertura sencilla", d: "Dos sellos despegables. Cualquiera puede abrirla con un movimiento suave." },
      { t: "Distribución rápida", d: "Sirve a cientos en minutos, sin fila." },
      { t: "Menos distracción", d: "Un servicio más silencioso, más espacio para la reflexión." },
      { t: "Más reverencia", d: "La atención permanece donde debe estar — en Cristo." },
      { t: "Precio accesible", d: "Precios por volumen pensados para el uso semanal." },
      { t: "Hecho en Italia", d: "Elaborado según estándares de seguridad alimentaria." },
      { t: "Envío en Europa", d: "Entregas confiables al Reino Unido, la UE y más allá." },
    ],
    pricingEyebrow: "Precios indicativos",
    pricingTitle: "Precios para iglesias, honestos y claros.",
    pricingSub:
      "Una comparación entre los precios típicos de mercado y los previstos para nuestro lanzamiento. Los precios finales dependen del volumen y el país.",
    pricingHeaderQty: "Cantidad",
    pricingHeaderMarket: "Precio de mercado",
    pricingHeaderOurs: "Nuestro precio",
    pricingHeaderSave: "Ahorras",
    pricingCta: "Solicitar Cotización",
    pricingDisclaimer:
      "El precio final depende del volumen del pedido, el país de destino y las especificaciones.",
    impactEyebrow: "Nuestra misión",
    impactTitle: "Más que copitas de Comunión. Una visión para el futuro.",
    impactSubhead:
      "Nuestro deseo no es solo servir a las iglesias haciendo la Comunión más accesible, sino también usar el crecimiento de esta empresa para apoyar la misión cristiana y llevar esperanza a comunidades de todo el mundo.",
    impactBody:
      "Creemos que ninguna iglesia debería elegir entre calidad y precio accesible. Sea pequeña o grande, en Europa o más allá, cada congregación merece una solución de Comunión que mantenga la mirada en Cristo. Y a medida que The Holy Supper crece, esperamos que cada copita se convierta en parte de algo más grande.",
    impactPillars: [
      { t: "Iglesias locales", d: "Junto a pastores y congregaciones dondequiera que sirvan." },
      { t: "Comunidades vulnerables", d: "Ayuda práctica donde la esperanza más se necesita." },
      { t: "Educación para los niños", d: "Invertir en aulas para que una nueva generación crezca." },
      { t: "Agua potable", d: "Apoyo a pozos y agua segura donde la vida diaria depende de ello." },
    ],
    impactCaption: "Uganda es uno de los lugares que ha inspirado esta visión — una imagen del impacto que deseamos extender a muchos países a medida que la empresa crece.",
    impactClosing: "Nuestra oración es que cada copita que ofrezcamos algún día ayude a fortalecer iglesias locales y también cree oportunidades para servir a personas más allá de ellas.",
    howEyebrow: "Cómo funciona",
    howTitle: "Del primer mensaje a tu iglesia, en cuatro pasos.",
    howSteps: [
      { t: "Completa el formulario", d: "Cuéntanos sobre tu iglesia." },
      { t: "Recibe precios", d: "Una cotización a medida para tu país." },
      { t: "Producción", d: "Copitas hechas en Italia, hechas para ti." },
      { t: "Entrega", d: "Enviadas de forma segura a tu puerta." },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Respuestas para pastores, administradores y líderes de ministerio.",
    finalCtaEyebrow: "Pre-lanzamiento",
    finalCtaTitle:
      "Sé de las primeras iglesias en recibir nuestros precios de lanzamiento.",
    finalCtaButton: "Solicitar Precios",
  },
  contact: {
    metaTitle: "Solicitar Precios — The Holy Supper",
    metaDescription:
      "Contacta con The Holy Supper para solicitar precios, muestras o información sobre el lanzamiento de las copitas pre-llenadas para la Santa Cena.",
    eyebrow: "Contacto",
    title: "Hablemos.",
    intro: "Cuéntanos sobre tu iglesia y te responderemos con precios y próximos pasos.",
    sampleNote:
      "Los kits de muestra llegarán pronto. Menciónalo en tu mensaje y te añadiremos a la lista prioritaria.",
    successTitle: "Mensaje recibido.",
    successBody:
      "Gracias por escribirnos. Un miembro de nuestro equipo te responderá personalmente en un plazo de dos días hábiles con precios adaptados a tu iglesia.",
    backHome: "Volver al inicio",
    submit: "Solicitar Precios",
    submitting: "Enviando…",
    notify: "Avísame cuando abran los pedidos.",
    messagePlaceholder: "Cuéntanos cómo podemos ayudarte…",
    fields: {
      church: "Nombre de la iglesia",
      country: "País",
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Email",
      phone: "Teléfono",
      congregation: "Tamaño de la congregación",
      attendance: "Asistencia a Santa Cena",
      quantity: "Cantidad esperada (copitas)",
      product: "Producto preferido",
      message: "Mensaje",
    },
    placeholders: {
      congregation: "ej. 300",
      attendance: "ej. 220",
      quantity: "ej. 500 / mes",
      product: "Jugo o vino",
    },
    errors: { generic: "Por favor revisa el formulario." },
  },
  waiting: {
    metaTitle: "Únete a la Lista de Espera — The Holy Supper",
    metaDescription:
      "Sé de las primeras iglesias en recibir precios de lanzamiento para copitas pre-llenadas de Santa Cena. Únete a la lista de espera.",
    eyebrow: "Lista de espera",
    title: "Sé de las primeras iglesias en recibir nuestros precios de lanzamiento.",
    intro: "Producción prioritaria. Mejores tarifas por copita. Guía gratuita por email.",
    successTitle: "Estás en la lista.",
    successBody:
      "Gracias. Te contactaremos personalmente con tus precios de lanzamiento en cuanto la producción esté lista. Mientras tanto, te enviaremos por email nuestra guía gratuita “The Church Guide to Preparing Communion”.",
    backHome: "Volver al inicio",
    submit: "Unirme a la Lista",
    submitting: "Enviando…",
    consent:
      "Acepto ser contactado sobre el lanzamiento de The Holy Supper y entiendo que mis datos se tratan según la",
    consentPolicyLink: "Política de Privacidad",
    noSpam: "Sin spam. Cancela cuando quieras.",
    fields: {
      name: "Nombre completo",
      church: "Nombre de la iglesia",
      role: "Tu rol",
      country: "País",
      email: "Email",
      phone: "Teléfono (opcional)",
      quantity: "Cantidad estimada (copitas)",
    },
    placeholders: { role: "Pastor, admin…", quantity: "ej. 250 al mes" },
    errors: {
      name: "Introduce tu nombre",
      church: "El nombre de la iglesia es obligatorio",
      email: "Introduce un email válido",
      consent: "El consentimiento es necesario para unirse a la lista.",
      generic: "Por favor revisa el formulario.",
    },
  },
  legal: {
    lastUpdated: "Última actualización",
    label: "Legal",
    privacyTitle: "Política de Privacidad",
    privacyMeta: "Cómo The Holy Supper recopila, utiliza y protege tus datos.",
    privacyBody: [
      "Esta página es mantenida por The Holy Supper para explicar cómo se manejan los datos personales cuando visitas nuestro sitio o nos contactas. Está escrita en lenguaje claro y puede actualizarse.",
    ],
    privacySections: [
      { h: "Información que recopilamos", p: "Solo recopilamos la información que decides compartir mediante nuestros formularios: nombre, iglesia, rol, país, email y teléfono, junto con datos técnicos básicos." },
      { h: "Cómo la utilizamos", p: "Usamos tu información para responder, preparar precios a medida, mantenerte informado sobre el lanzamiento y mejorar el servicio. Nunca vendemos tus datos." },
      { h: "Base legal (UE / UK)", p: "Tratamos los datos personales sobre la base de tu consentimiento y nuestro interés legítimo en operar y mejorar el servicio." },
      { h: "Tus derechos", p: "Puedes solicitar acceso, rectificación o eliminación de tus datos personales en cualquier momento escribiendo a theholysupper@gmail.com." },
      { h: "Retención de datos", p: "Conservamos tus datos solo mientras sean necesarios para responder a tu consulta y — si has consentido — informarte sobre el lanzamiento." },
      { h: "Contacto", p: "Para cualquier consulta de privacidad, escribe a theholysupper@gmail.com." },
    ],
    cookieTitle: "Política de Cookies",
    cookieMeta: "Cómo The Holy Supper usa cookies y tecnologías similares.",
    cookieBody:
      "Este sitio utiliza un pequeño número de cookies para funcionar correctamente y, con tu consentimiento, para ayudarnos a entender su uso.",
    cookieSections: [
      { h: "Cookies esenciales", p: "Estrictamente necesarias para recordar tus preferencias y mantener el sitio seguro. No se pueden desactivar." },
      { h: "Cookies analíticas", p: "Con tu consentimiento podemos usar analíticas respetuosas con la privacidad para medir el uso agregado. No te identifican personalmente." },
      { h: "Gestionar tu elección", p: "Puedes cambiar o retirar tu consentimiento en cualquier momento borrando los datos del navegador para este sitio." },
    ],
    termsTitle: "Términos de Uso",
    termsMeta: "Términos de uso del sitio web The Holy Supper.",
    termsBody:
      "Al usar este sitio aceptas los siguientes términos. Actualmente es un sitio informativo de pre-lanzamiento — no se venden productos ni se pueden realizar pedidos online.",
    termsSections: [
      { h: "Contenido", p: "Todo el contenido, imágenes y branding son propiedad de The Holy Supper salvo indicación contraria. Precios, características e imágenes son indicativos y pueden cambiar." },
      { h: "Consultas", p: "La información enviada mediante nuestros formularios se tratará según nuestra Política de Privacidad." },
      { h: "Responsabilidad", p: "El sitio se ofrece “tal cual”. En la máxima medida permitida por la ley, The Holy Supper no es responsable por daños indirectos derivados del uso del sitio." },
      { h: "Ley aplicable", p: "Estos términos se rigen por las leyes de Italia." },
    ],
  },
  meta: {
    homeTitle: "The Holy Supper — Copitas de Santa Cena Pre-llenadas para Iglesias",
    homeDescription:
      "Copitas de Santa Cena simples, higiénicas y asequibles. Pan y jugo sellados juntos. Diseñadas para iglesias, hechas en Italia, enviadas por Europa y todo el mundo.",
    keywords:
      "copitas santa cena, copas comunion, comunion pre-llenada, santa cena iglesia, suministros comunion iglesia",
  },
  faqs: [
    {
      q: "¿Qué es exactamente una copita pre-llenada?",
      a: "Una porción individual sellada que contiene tanto el pan (oblea) como el jugo o vino juntos — lista para distribuir, abrir y consumir sin preparación.",
    },
    {
      q: "¿Cuánto dura la comunión en el interior?",
      a: "La vida útil suele ser de 12 meses desde la producción si se conserva correctamente. Las fechas exactas se imprimen en cada caja.",
    },
    {
      q: "¿Cómo debemos almacenar las copitas?",
      a: "Guardar en un lugar fresco y seco, lejos de luz solar directa y fuentes de calor. No requieren refrigeración antes de abrir.",
    },
    {
      q: "¿Usan jugo o vino?",
      a: "Nuestras copitas estándar utilizan jugo de uva sin alcohol. Podemos hablar de variantes con vino para pedidos de volumen.",
    },
    {
      q: "¿Las obleas son sin gluten?",
      a: "Está prevista una opción sin gluten. Indica tu preferencia en el formulario para ayudarnos a planificar la producción.",
    },
    {
      q: "¿Dónde se fabrican las copitas?",
      a: "Cada copita se diseña y produce en Italia, bajo estrictos estándares de seguridad alimentaria.",
    },
    {
      q: "¿Realizan envíos internacionales?",
      a: "Sí — por toda Italia y Europa, con envíos adaptados al Reino Unido, Australia, Estados Unidos y Canadá bajo demanda.",
    },
    {
      q: "¿Me comprometo a comprar al enviar el formulario?",
      a: "Enviar este formulario es simplemente una solicitud de cotización personalizada según las necesidades específicas de tu iglesia. No supone un pedido, no reserva productos, no requiere pago ni crea obligación de compra.\n\nComo cada iglesia es diferente, preparamos cotizaciones a medida basadas en cantidad estimada, lugar de entrega y requisitos específicos.\n\nUna vez recibida tu consulta, nuestro equipo la revisará y te enviará una cotización personalizada. Eres libre de decidir si continuar — sin compromiso ni presión.\n\nNuestro objetivo es ayudar a tu iglesia a comprender las opciones y precios para tomar una decisión informada cuando estemos listos para aceptar pedidos.",
    },
  ],
};

/* -----------------------------------------------------------
   PORTUGUESE
   ----------------------------------------------------------- */
const pt: Dictionary = {
  nav: {
    why: "Por quê",
    benefits: "Benefícios",
    pricing: "Preços",
    mission: "Missão",
    faq: "FAQ",
    contact: "Contato",
    cta: "Solicitar Preços",
    menu: "Abrir menu",
    language: "Idioma",
  },
  footer: {
    tagline:
      "Tornar simples o que deve permanecer sagrado. Copinhos de Santa Ceia pré-preenchidos, feitos para igrejas — pão e suco, selados juntos.",
    exploreTitle: "Explorar",
    getInTouchTitle: "Fale conosco",
    requestPricing: "Solicitar preços",
    privacyPolicy: "Política de privacidade",
    cookiePolicy: "Política de cookies",
    terms: "Termos",
    rights: "Todos os direitos reservados.",
    madeInItaly: "Projetado e Fabricado na Itália",
  },
  cookie: {
    body:
      "Usamos cookies essenciais para o funcionamento do site e, com seu consentimento, cookies analíticos. Veja nossa",
    accept: "Aceitar tudo",
    essential: "Apenas essenciais",
    close: "Fechar",
    cookiePolicyLink: "Política de Cookies",
  },
  home: {
    heroEyebrow: "Pré-lançamento • Para igrejas em todo o mundo",
    heroTitle: "Mantendo o Foco em Cristo.",
    heroSub:
      "Copinhos de Santa Ceia simples, higiênicos e acessíveis, desenhados para igrejas. Pão e suco selados juntos — prontos para distribuir em segundos.",
    heroCta: "Solicitar Preços",
    heroStat1Value: "100%",
    heroStat1Label: "Feito na Itália",
    heroStat2Value: "12 meses",
    heroStat2Label: "Validade",
    heroStat3Value: "6+",
    heroStat3Label: "Países atendidos",
    trust: [
      "Feito na Itália",
      "Envio rápido na Europa",
      "Seguro para alimentos",
      "Embalagem protegida",
      "Apoia a missão",
      "Desenhado para igrejas",
    ],
    whyEyebrow: "Por que importa",
    whyTitle: "A Santa Ceia deve nos unir — não nos distrair.",
    whyProblemsTitle: "Desafios comuns durante a Comunhão",
    whyIntro: "A preparação e distribuição tradicionais frequentemente trazem barulho, movimento e atrasos justamente no momento em que a congregação mais precisa de silêncio.",
    problems: [
      { t: "Muitos voluntários", d: "Preparo, distribuição e limpeza tiram pessoas do culto." },
      { t: "Fluxo interrompido", d: "Bandejas, cálices e filas criam pausas que quebram o clima." },
      { t: "Barulho e distração", d: "Movimentos, cochichos e passos desviam o foco de Cristo." },
    ],
    solution: {
      title: "Um copinho selado. Pão e suco, prontos.",
      body:
        "Cada copinho pré-preenchido contém a hóstia e o suco, juntos, selados. Sem distribuição ou barulho durante o momento sagrado — só reverência silenciosa em cada banco.",
    },
    benefitsEyebrow: "Benefícios",
    benefitsTitle: "Tudo o que sua igreja precisa — nada além.",
    benefitsSub: "Desenhado com pastores e administradores, refinado no uso real de domingo.",
    benefits: [
      { t: "Pão e suco juntos", d: "Um copinho, um gesto. Sem hóstias ou bandejas separadas." },
      { t: "Abertura fácil", d: "Dois selos destacáveis. Qualquer pessoa abre em um gesto suave." },
      { t: "Distribuição rápida", d: "Sirva centenas em minutos, sem fila." },
      { t: "Menos distração", d: "Culto mais silencioso, mais espaço para reflexão." },
      { t: "Mais reverência", d: "O foco permanece onde deve estar — em Cristo." },
      { t: "Preço acessível", d: "Preços por volume pensados para uso semanal." },
      { t: "Feito na Itália", d: "Fabricado com padrões rigorosos de segurança alimentar." },
      { t: "Envio pela Europa", d: "Entregas confiáveis para o Reino Unido, UE e além." },
    ],
    pricingEyebrow: "Preços indicativos",
    pricingTitle: "Preços para igrejas, honestos e claros.",
    pricingSub:
      "Uma comparação entre preços típicos de mercado e nossos preços previstos no lançamento. Cotações finais dependem do volume e do país.",
    pricingHeaderQty: "Quantidade",
    pricingHeaderMarket: "Preço de mercado",
    pricingHeaderOurs: "Nosso preço",
    pricingHeaderSave: "Economia",
    pricingCta: "Solicitar Orçamento",
    pricingDisclaimer:
      "O preço final depende do volume do pedido, país de destino e especificações.",
    impactEyebrow: "Nossa missão",
    impactTitle: "Mais que copinhos de Santa Ceia. Uma visão para o futuro.",
    impactSubhead:
      "Nosso desejo não é apenas servir às igrejas tornando a Santa Ceia mais acessível, mas também usar o crescimento desta empresa para apoiar a missão cristã e levar esperança a comunidades ao redor do mundo.",
    impactBody:
      "Acreditamos que nenhuma igreja deveria escolher entre qualidade e preço acessível. Seja pequena ou grande, na Europa ou além, cada congregação merece uma solução de Santa Ceia que mantenha o olhar em Cristo. E à medida que The Holy Supper cresce, esperamos que cada copinho se torne parte de algo maior.",
    impactPillars: [
      { t: "Igrejas locais", d: "Ao lado de pastores e congregações onde quer que sirvam." },
      { t: "Comunidades vulneráveis", d: "Ajuda prática onde a esperança é mais necessária." },
      { t: "Educação para crianças", d: "Investir em salas de aula para uma nova geração crescer." },
      { t: "Água potável", d: "Apoio a poços e água segura onde a vida diária depende disso." },
    ],
    impactCaption: "Uganda é um dos lugares que inspirou esta visão — uma imagem do impacto que desejamos estender a muitos países à medida que a empresa cresce.",
    impactClosing: "Nossa oração é que cada copinho que oferecermos um dia ajude a fortalecer igrejas locais e também crie oportunidades para servir pessoas além delas.",
    howEyebrow: "Como funciona",
    howTitle: "Da primeira mensagem até sua igreja, em quatro passos.",
    howSteps: [
      { t: "Preencha o formulário", d: "Conte-nos sobre sua igreja." },
      { t: "Receba preços", d: "Uma cotação sob medida para seu país." },
      { t: "Produção", d: "Copinhos feitos na Itália, feitos para você." },
      { t: "Entrega", d: "Enviados com segurança até sua porta." },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Respostas para pastores, administradores e líderes de ministério.",
    finalCtaEyebrow: "Pré-lançamento",
    finalCtaTitle:
      "Esteja entre as primeiras igrejas a receber nossos preços de lançamento.",
    finalCtaButton: "Solicitar Preços",
  },
  contact: {
    metaTitle: "Solicitar Preços — The Holy Supper",
    metaDescription:
      "Entre em contato com a The Holy Supper para solicitar preços, amostras ou informações de lançamento dos copinhos de Santa Ceia.",
    eyebrow: "Contato",
    title: "Vamos conversar.",
    intro: "Conte-nos sobre sua igreja e responderemos com preços e próximos passos.",
    sampleNote:
      "Kits de amostra chegarão em breve. Mencione no seu recado e te colocamos na lista prioritária.",
    successTitle: "Mensagem recebida.",
    successBody:
      "Obrigado pelo contato. Um membro do nosso time responderá pessoalmente em até dois dias úteis com preços feitos para sua igreja.",
    backHome: "Voltar ao início",
    submit: "Solicitar Preços",
    submitting: "Enviando…",
    notify: "Avise-me quando os pedidos abrirem.",
    messagePlaceholder: "Conte-nos como podemos ajudar…",
    fields: {
      church: "Nome da igreja",
      country: "País",
      firstName: "Nome",
      lastName: "Sobrenome",
      email: "Email",
      phone: "Telefone",
      congregation: "Tamanho da congregação",
      attendance: "Participação na Santa Ceia",
      quantity: "Quantidade esperada (copinhos)",
      product: "Produto preferido",
      message: "Mensagem",
    },
    placeholders: {
      congregation: "ex. 300",
      attendance: "ex. 220",
      quantity: "ex. 500 / mês",
      product: "Suco ou vinho",
    },
    errors: { generic: "Por favor confira o formulário." },
  },
  waiting: {
    metaTitle: "Entre para a Lista de Espera — The Holy Supper",
    metaDescription:
      "Esteja entre as primeiras igrejas a receber preços de lançamento dos copinhos pré-preenchidos de Santa Ceia.",
    eyebrow: "Lista de espera",
    title: "Esteja entre as primeiras igrejas a receber nossos preços de lançamento.",
    intro: "Produção prioritária. Melhores tarifas por copinho. Guia gratuito por email.",
    successTitle: "Você está na lista.",
    successBody:
      "Obrigado. Entraremos em contato pessoalmente com seus preços de lançamento assim que a produção estiver pronta. Enquanto isso, enviaremos o guia gratuito “The Church Guide to Preparing Communion”.",
    backHome: "Voltar ao início",
    submit: "Entrar na Lista",
    submitting: "Enviando…",
    consent:
      "Concordo em ser contatado sobre o lançamento do The Holy Supper e entendo que meus dados são tratados conforme a",
    consentPolicyLink: "Política de Privacidade",
    noSpam: "Sem spam. Cancele quando quiser.",
    fields: {
      name: "Nome completo",
      church: "Nome da igreja",
      role: "Sua função",
      country: "País",
      email: "Email",
      phone: "Telefone (opcional)",
      quantity: "Quantidade estimada (copinhos)",
    },
    placeholders: { role: "Pastor, admin…", quantity: "ex. 250 por mês" },
    errors: {
      name: "Informe seu nome",
      church: "O nome da igreja é obrigatório",
      email: "Informe um email válido",
      consent: "O consentimento é necessário para entrar na lista.",
      generic: "Por favor confira o formulário.",
    },
  },
  legal: {
    lastUpdated: "Última atualização",
    label: "Legal",
    privacyTitle: "Política de Privacidade",
    privacyMeta: "Como a The Holy Supper coleta, usa e protege seus dados.",
    privacyBody: [
      "Esta página é mantida pela The Holy Supper para explicar como dados pessoais são tratados quando você visita nosso site ou nos contata. Está escrita em linguagem simples e pode ser atualizada.",
    ],
    privacySections: [
      { h: "Informações que coletamos", p: "Coletamos apenas as informações que você opta por compartilhar nos formulários: nome, igreja, função, país, email e telefone, além de dados técnicos básicos." },
      { h: "Como as usamos", p: "Usamos suas informações para responder, preparar preços sob medida, mantê-lo informado sobre o lançamento e melhorar o serviço. Nunca vendemos seus dados." },
      { h: "Base legal (UE / UK)", p: "Tratamos dados pessoais com base no seu consentimento e no nosso interesse legítimo em operar e melhorar o serviço." },
      { h: "Seus direitos", p: "Você pode solicitar acesso, correção ou exclusão dos seus dados pessoais escrevendo para theholysupper@gmail.com." },
      { h: "Retenção de dados", p: "Guardamos seus dados apenas pelo tempo necessário para responder à sua consulta e — se consentido — informá-lo sobre o lançamento." },
      { h: "Contato", p: "Para qualquer dúvida de privacidade, escreva para theholysupper@gmail.com." },
    ],
    cookieTitle: "Política de Cookies",
    cookieMeta: "Como a The Holy Supper usa cookies e tecnologias semelhantes.",
    cookieBody:
      "Este site usa um pequeno número de cookies para funcionar corretamente e, com seu consentimento, para nos ajudar a entender o uso.",
    cookieSections: [
      { h: "Cookies essenciais", p: "Estritamente necessários para lembrar suas preferências e manter o site seguro. Não podem ser desativados." },
      { h: "Cookies analíticos", p: "Com seu consentimento, podemos usar análises que respeitam a privacidade para medir o uso agregado. Não identificam você pessoalmente." },
      { h: "Gerenciar sua escolha", p: "Você pode alterar ou retirar seu consentimento a qualquer momento limpando os dados do navegador para este site." },
    ],
    termsTitle: "Termos de Uso",
    termsMeta: "Termos de uso do site The Holy Supper.",
    termsBody:
      "Ao usar este site você concorda com os seguintes termos. Atualmente é um site informativo de pré-lançamento — nenhum produto é vendido e pedidos não podem ser feitos online.",
    termsSections: [
      { h: "Conteúdo", p: "Todo o conteúdo, imagens e marca são propriedade da The Holy Supper salvo indicação em contrário. Preços, funcionalidades e imagens são indicativos." },
      { h: "Solicitações", p: "As informações enviadas pelos nossos formulários serão tratadas conforme a Política de Privacidade." },
      { h: "Responsabilidade", p: "O site é fornecido “como está”. Na máxima extensão permitida por lei, a The Holy Supper não é responsável por danos indiretos decorrentes do uso do site." },
      { h: "Lei aplicável", p: "Estes termos são regidos pelas leis da Itália." },
    ],
  },
  meta: {
    homeTitle: "The Holy Supper — Copinhos de Santa Ceia Pré-preenchidos para Igrejas",
    homeDescription:
      "Copinhos de Santa Ceia simples, higiênicos e acessíveis. Pão e suco selados juntos. Desenhados para igrejas, feitos na Itália, enviados por toda a Europa e mundo.",
    keywords:
      "copinhos santa ceia, calice comunhao, santa ceia igreja, comunhao pre preenchida, suprimentos santa ceia",
  },
  faqs: [
    {
      q: "O que é exatamente um copinho pré-preenchido?",
      a: "Uma porção individual selada que contém tanto o pão (hóstia) quanto o suco ou vinho juntos — pronta para distribuir, abrir e consumir sem preparação.",
    },
    {
      q: "Quanto tempo a Santa Ceia dentro permanece boa?",
      a: "A validade é normalmente de 12 meses a partir da produção, quando armazenada corretamente. As datas exatas são impressas em cada caixa.",
    },
    {
      q: "Como devemos armazenar os copinhos?",
      a: "Armazene em local fresco e seco, longe da luz solar direta e de fontes de calor. Não é necessário refrigerar antes de abrir.",
    },
    {
      q: "Vocês usam suco ou vinho?",
      a: "Nossos copinhos padrão usam suco de uva sem álcool. Variações com vinho podem ser combinadas para pedidos de volume.",
    },
    {
      q: "As hóstias são sem glúten?",
      a: "Uma opção sem glúten está planejada. Indique sua preferência no formulário para ajudarmos a planejar a produção.",
    },
    {
      q: "Onde os copinhos são fabricados?",
      a: "Cada copinho é projetado e fabricado na Itália, sob rigorosos padrões de segurança alimentar.",
    },
    {
      q: "Vocês enviam internacionalmente?",
      a: "Sim — para toda a Itália e Europa, com envios sob medida para Reino Unido, Austrália, Estados Unidos e Canadá mediante solicitação.",
    },
    {
      q: "Estou me comprometendo a comprar ao enviar o formulário?",
      a: "Enviar este formulário é apenas uma solicitação de orçamento personalizado com base nas necessidades da sua igreja. Não é um pedido, não reserva produtos, não requer pagamento e não cria obrigação de compra.\n\nComo cada igreja é diferente, preparamos orçamentos sob medida considerando quantidade estimada, local de entrega e requisitos específicos.\n\nApós receber sua consulta, nossa equipe a revisará e enviará um orçamento personalizado. Você é livre para decidir se deseja prosseguir — sem compromisso ou pressão.\n\nNosso objetivo é ajudar sua igreja a entender opções e preços para tomar uma decisão informada quando estivermos prontos para aceitar pedidos.",
    },
  ],
};

/* -----------------------------------------------------------
   FRENCH
   ----------------------------------------------------------- */
const fr: Dictionary = {
  nav: {
    why: "Pourquoi",
    benefits: "Avantages",
    pricing: "Tarifs",
    mission: "Mission",
    faq: "FAQ",
    contact: "Contact",
    cta: "Demander un tarif",
    menu: "Ouvrir le menu",
    language: "Langue",
  },
  footer: {
    tagline:
      "Simplifier ce qui doit rester sacré. Coupes de communion pré-remplies pensées pour les églises — pain et jus, scellés ensemble.",
    exploreTitle: "Explorer",
    getInTouchTitle: "Nous contacter",
    requestPricing: "Demander un tarif",
    privacyPolicy: "Politique de confidentialité",
    cookiePolicy: "Politique des cookies",
    terms: "Conditions",
    rights: "Tous droits réservés.",
    madeInItaly: "Conçu et Fabriqué en Italie",
  },
  cookie: {
    body:
      "Nous utilisons des cookies essentiels pour le fonctionnement du site et, avec votre consentement, des cookies analytiques. Consultez notre",
    accept: "Tout accepter",
    essential: "Essentiels uniquement",
    close: "Fermer",
    cookiePolicyLink: "Politique des Cookies",
  },
  home: {
    heroEyebrow: "Pré-lancement • Pour les églises du monde entier",
    heroTitle: "Garder les yeux fixés sur Christ.",
    heroSub:
      "Coupes de communion simples, hygiéniques et abordables, pensées pour les églises. Pain et jus scellés ensemble — prêts à distribuer en quelques secondes.",
    heroCta: "Demander un tarif",
    heroStat1Value: "100%",
    heroStat1Label: "Fabriqué en Italie",
    heroStat2Value: "12 mois",
    heroStat2Label: "Conservation",
    heroStat3Value: "6+",
    heroStat3Label: "Pays desservis",
    trust: [
      "Fabriqué en Italie",
      "Expédition rapide en Europe",
      "Sécurité alimentaire",
      "Emballage protégé",
      "Soutient la mission",
      "Conçu pour les églises",
    ],
    whyEyebrow: "Pourquoi c'est important",
    whyTitle: "La communion doit nous unir — pas nous distraire.",
    whyProblemsTitle: "Défis courants pendant la communion",
    whyIntro: "La préparation et la distribution traditionnelles apportent souvent bruit, mouvement et retards au moment où la congrégation a le plus besoin de silence.",
    problems: [
      { t: "Beaucoup de bénévoles", d: "La préparation, la distribution et le rangement éloignent des personnes du culte." },
      { t: "Flux interrompu", d: "Plateaux, coupes et files créent des pauses qui brisent l'atmosphère." },
      { t: "Bruit et distraction", d: "Mouvements, chuchotements et pas détournent l'attention de Christ." },
    ],
    solution: {
      title: "Une coupe scellée. Pain et jus, prêts.",
      body:
        "Chaque coupe pré-remplie contient l'hostie et le jus, ensemble, scellés. Pas de distribution ni de bruit pendant le moment sacré — juste une révérence silencieuse à chaque banc.",
    },
    benefitsEyebrow: "Avantages",
    benefitsTitle: "Tout ce dont votre église a besoin — rien de plus.",
    benefitsSub: "Conçu avec des pasteurs et des administrateurs, affiné par l'usage réel du dimanche.",
    benefits: [
      { t: "Pain et jus ensemble", d: "Une coupe, un geste. Pas d'hosties ni de plateaux séparés." },
      { t: "Ouverture facile", d: "Deux opercules détachables. Chacun peut ouvrir en un geste doux." },
      { t: "Distribution rapide", d: "Servez des centaines de personnes en quelques minutes, sans file." },
      { t: "Moins de distractions", d: "Un culte plus silencieux, plus d'espace pour la réflexion." },
      { t: "Plus de révérence", d: "L'attention reste là où elle doit être — sur Christ." },
      { t: "Prix accessibles", d: "Tarifs volumétriques pensés pour un usage hebdomadaire." },
      { t: "Fabriqué en Italie", d: "Réalisé selon des normes strictes de sécurité alimentaire." },
      { t: "Expédition en Europe", d: "Livraisons fiables au Royaume-Uni, dans l'UE et au-delà." },
    ],
    pricingEyebrow: "Tarifs indicatifs",
    pricingTitle: "Tarifs pour églises, honnêtes et clairs.",
    pricingSub:
      "Un aperçu des prix typiques du marché comparés à nos tarifs de lancement. Le devis final dépend du volume et du pays.",
    pricingHeaderQty: "Quantité",
    pricingHeaderMarket: "Prix du marché",
    pricingHeaderOurs: "Notre prix",
    pricingHeaderSave: "Vous économisez",
    pricingCta: "Demander un devis",
    pricingDisclaimer:
      "Le prix final dépend du volume de la commande, du pays de destination et des spécifications.",
    impactEyebrow: "Notre mission",
    impactTitle: "Plus que des coupes de communion. Une vision pour l'avenir.",
    impactSubhead:
      "Notre désir n'est pas seulement de servir les églises en rendant la communion plus accessible, mais aussi d'utiliser la croissance de cette entreprise pour soutenir la mission chrétienne et apporter de l'espoir à des communautés à travers le monde.",
    impactBody:
      "Nous croyons qu'aucune église ne devrait avoir à choisir entre qualité et accessibilité. Petite ou grande, en Europe ou ailleurs, chaque assemblée mérite une solution de communion qui garde le regard fixé sur Christ. Et à mesure que The Holy Supper grandit, notre espoir est que chaque coupe devienne partie d'une œuvre plus grande.",
    impactPillars: [
      { t: "Églises locales", d: "Aux côtés des pasteurs et des assemblées, où qu'ils servent." },
      { t: "Communautés vulnérables", d: "Aide concrète là où l'espoir est le plus attendu." },
      { t: "Éducation des enfants", d: "Investir dans les salles de classe pour élever une nouvelle génération." },
      { t: "Eau potable", d: "Soutien aux puits et à l'eau saine, là où la vie quotidienne en dépend." },
    ],
    impactCaption: "L'Ouganda est l'un des lieux qui a inspiré cette vision — une image de l'impact que nous souhaitons étendre à de nombreux pays à mesure que l'entreprise se développe.",
    impactClosing: "Notre prière est que chaque coupe que nous fournirons contribue un jour à fortifier les églises locales tout en créant des occasions de servir des personnes au-delà d'elles.",
    howEyebrow: "Comment ça marche",
    howTitle: "Du premier message à votre église, en quatre étapes.",
    howSteps: [
      { t: "Remplissez le formulaire", d: "Parlez-nous de votre église." },
      { t: "Recevez un tarif", d: "Un devis adapté à votre pays." },
      { t: "Production", d: "Coupes fabriquées en Italie, faites pour vous." },
      { t: "Livraison", d: "Expédiées en toute sécurité chez vous." },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Réponses pour pasteurs, administrateurs et responsables.",
    finalCtaEyebrow: "Pré-lancement",
    finalCtaTitle:
      "Soyez parmi les premières églises à recevoir nos tarifs de lancement.",
    finalCtaButton: "Demander un tarif",
  },
  contact: {
    metaTitle: "Demander un tarif — The Holy Supper",
    metaDescription:
      "Contactez The Holy Supper pour demander un tarif, des échantillons ou des informations sur le lancement des coupes de communion pré-remplies.",
    eyebrow: "Contact",
    title: "Parlons-en.",
    intro: "Parlez-nous de votre église et nous reviendrons vers vous avec un tarif.",
    sampleNote:
      "Les kits d'échantillons arrivent bientôt. Mentionnez-le dans votre message pour rejoindre la liste prioritaire.",
    successTitle: "Message reçu.",
    successBody:
      "Merci de nous avoir contactés. Un membre de notre équipe vous répondra personnellement sous deux jours ouvrés avec un tarif adapté à votre église.",
    backHome: "Retour à l'accueil",
    submit: "Demander un tarif",
    submitting: "Envoi…",
    notify: "Prévenez-moi à l'ouverture des commandes.",
    messagePlaceholder: "Dites-nous comment nous pouvons aider…",
    fields: {
      church: "Nom de l'église",
      country: "Pays",
      firstName: "Prénom",
      lastName: "Nom",
      email: "Email",
      phone: "Téléphone",
      congregation: "Taille de la congrégation",
      attendance: "Assistance à la communion",
      quantity: "Quantité prévue (coupes)",
      product: "Produit préféré",
      message: "Message",
    },
    placeholders: {
      congregation: "ex. 300",
      attendance: "ex. 220",
      quantity: "ex. 500 / mois",
      product: "Jus ou vin",
    },
    errors: { generic: "Veuillez vérifier le formulaire." },
  },
  waiting: {
    metaTitle: "Rejoindre la liste d'attente — The Holy Supper",
    metaDescription:
      "Soyez parmi les premières églises à recevoir les tarifs de lancement des coupes de communion pré-remplies.",
    eyebrow: "Liste d'attente",
    title: "Soyez parmi les premières églises à recevoir nos tarifs de lancement.",
    intro: "Production prioritaire. Meilleurs tarifs à la coupe. Un guide gratuit par email.",
    successTitle: "Vous êtes sur la liste.",
    successBody:
      "Merci. Nous vous contacterons personnellement avec vos tarifs de lancement dès que la production sera prête. En attendant, nous vous enverrons le guide gratuit « The Church Guide to Preparing Communion ».",
    backHome: "Retour à l'accueil",
    submit: "Rejoindre la liste",
    submitting: "Envoi…",
    consent:
      "J'accepte d'être contacté au sujet du lancement de The Holy Supper et je comprends que mes données sont traitées selon la",
    consentPolicyLink: "Politique de confidentialité",
    noSpam: "Pas de spam. Désinscription à tout moment.",
    fields: {
      name: "Nom complet",
      church: "Nom de l'église",
      role: "Votre rôle",
      country: "Pays",
      email: "Email",
      phone: "Téléphone (facultatif)",
      quantity: "Quantité estimée (coupes)",
    },
    placeholders: { role: "Pasteur, admin…", quantity: "ex. 250 par mois" },
    errors: {
      name: "Veuillez saisir votre nom",
      church: "Le nom de l'église est requis",
      email: "Veuillez saisir un email valide",
      consent: "Le consentement est requis pour rejoindre la liste.",
      generic: "Veuillez vérifier le formulaire.",
    },
  },
  legal: {
    lastUpdated: "Dernière mise à jour",
    label: "Mentions légales",
    privacyTitle: "Politique de Confidentialité",
    privacyMeta: "Comment The Holy Supper collecte, utilise et protège vos données.",
    privacyBody: [
      "Cette page est tenue par The Holy Supper pour expliquer comment les informations personnelles sont traitées lorsque vous visitez notre site ou nous contactez. Elle est rédigée en langage clair et peut être mise à jour.",
    ],
    privacySections: [
      { h: "Informations collectées", p: "Nous ne collectons que les informations que vous choisissez de partager via nos formulaires : nom, église, rôle, pays, email et téléphone, ainsi que des données techniques de base." },
      { h: "Utilisation", p: "Nous utilisons vos informations pour répondre, préparer un tarif sur mesure, vous tenir informé du lancement et améliorer le service. Nous ne vendons jamais vos données." },
      { h: "Base légale (UE / UK)", p: "Nous traitons vos données sur la base de votre consentement et de notre intérêt légitime à exploiter et améliorer le service." },
      { h: "Vos droits", p: "Vous pouvez demander l'accès, la rectification ou la suppression de vos données à tout moment en écrivant à theholysupper@gmail.com." },
      { h: "Conservation", p: "Nous conservons vos données uniquement le temps nécessaire à répondre et — avec votre consentement — à vous informer du lancement." },
      { h: "Contact", p: "Pour toute question relative à la confidentialité, écrivez à theholysupper@gmail.com." },
    ],
    cookieTitle: "Politique des Cookies",
    cookieMeta: "Comment The Holy Supper utilise les cookies et technologies similaires.",
    cookieBody:
      "Ce site utilise un petit nombre de cookies pour fonctionner correctement et, avec votre consentement, pour nous aider à comprendre son utilisation.",
    cookieSections: [
      { h: "Cookies essentiels", p: "Strictement nécessaires pour mémoriser vos préférences et sécuriser le site. Ils ne peuvent pas être désactivés." },
      { h: "Cookies analytiques", p: "Avec votre consentement, nous pouvons utiliser des outils d'analyse respectueux de la vie privée pour mesurer l'usage global. Ils ne vous identifient pas personnellement." },
      { h: "Gérer votre choix", p: "Vous pouvez modifier ou retirer votre consentement à tout moment en effaçant les données de votre navigateur pour ce site." },
    ],
    termsTitle: "Conditions d'utilisation",
    termsMeta: "Conditions d'utilisation du site The Holy Supper.",
    termsBody:
      "En utilisant ce site vous acceptez les conditions suivantes. Ce site est actuellement un site d'information de pré-lancement — aucun produit n'est vendu et aucune commande ne peut être passée en ligne.",
    termsSections: [
      { h: "Contenu", p: "Tout le contenu, les images et la marque sont la propriété de The Holy Supper sauf mention contraire. Prix, caractéristiques et images sont indicatifs." },
      { h: "Demandes", p: "Les informations envoyées via nos formulaires seront traitées selon notre Politique de confidentialité." },
      { h: "Responsabilité", p: "Le site est fourni « en l'état ». Dans la mesure maximale permise par la loi, The Holy Supper n'est pas responsable des dommages indirects." },
      { h: "Loi applicable", p: "Ces conditions sont régies par les lois italiennes." },
    ],
  },
  meta: {
    homeTitle: "The Holy Supper — Coupes de Communion Pré-remplies pour Églises",
    homeDescription:
      "Coupes de communion simples, hygiéniques et abordables. Pain et jus scellés ensemble. Conçues pour les églises, fabriquées en Italie, expédiées en Europe et dans le monde.",
    keywords:
      "coupes de communion, communion pré-remplie, sainte cène, coupelles communion, fournitures église, communion individuelle",
  },
  faqs: [
    {
      q: "Qu'est-ce qu'une coupe de communion pré-remplie ?",
      a: "Une portion individuelle scellée qui contient à la fois le pain (hostie) et le jus ou le vin — prête à distribuer, à ouvrir et à consommer sans préparation.",
    },
    {
      q: "Combien de temps la communion se conserve-t-elle ?",
      a: "La conservation est généralement de 12 mois à partir de la production, si elle est bien stockée. Les dates exactes sont imprimées sur chaque carton.",
    },
    {
      q: "Comment stocker les coupes ?",
      a: "Conservez dans un endroit frais et sec, à l'abri de la lumière directe et de la chaleur. Aucune réfrigération n'est nécessaire avant ouverture.",
    },
    {
      q: "Utilisez-vous du jus ou du vin ?",
      a: "Nos coupes standard utilisent du jus de raisin sans alcool. Des variantes au vin peuvent être discutées pour des volumes spécifiques.",
    },
    {
      q: "Les hosties sont-elles sans gluten ?",
      a: "Une option sans gluten est prévue. Indiquez votre préférence dans le formulaire pour nous aider à planifier la production.",
    },
    {
      q: "Où sont fabriquées les coupes ?",
      a: "Chaque coupe est conçue et fabriquée en Italie, selon des normes strictes de sécurité alimentaire.",
    },
    {
      q: "Livrez-vous à l'international ?",
      a: "Oui — dans toute l'Italie et l'Europe, avec des expéditions sur mesure vers le Royaume-Uni, l'Australie, les États-Unis et le Canada sur demande.",
    },
    {
      q: "Est-ce que je m'engage à acheter en remplissant le formulaire ?",
      a: "Remplir ce formulaire est simplement une demande de devis personnalisé selon les besoins de votre église. Cela ne constitue pas une commande, ne réserve aucun produit, n'exige aucun paiement et ne crée aucune obligation d'achat.\n\nChaque église étant différente, nous préparons des devis sur mesure selon la quantité estimée, le lieu de livraison et les exigences spécifiques.\n\nAprès réception de votre demande, notre équipe l'examinera et vous enverra un devis personnalisé. Vous êtes libre de décider de poursuivre — sans engagement ni pression.\n\nNotre objectif est simplement d'aider votre église à comprendre les options et les prix pour prendre une décision éclairée lorsque nous serons prêts à accepter les commandes.",
    },
  ],
};

/* -----------------------------------------------------------
   GERMAN
   ----------------------------------------------------------- */
const de: Dictionary = {
  nav: {
    why: "Warum",
    benefits: "Vorteile",
    pricing: "Preise",
    mission: "Mission",
    faq: "FAQ",
    contact: "Kontakt",
    cta: "Preise anfragen",
    menu: "Menü öffnen",
    language: "Sprache",
  },
  footer: {
    tagline:
      "Einfach machen, was heilig bleiben soll. Vorgefüllte Abendmahlskelche für Gemeinden — Brot und Saft, gemeinsam versiegelt.",
    exploreTitle: "Entdecken",
    getInTouchTitle: "Kontakt",
    requestPricing: "Preise anfragen",
    privacyPolicy: "Datenschutz",
    cookiePolicy: "Cookie-Richtlinie",
    terms: "Nutzungsbedingungen",
    rights: "Alle Rechte vorbehalten.",
    madeInItaly: "Entworfen & Hergestellt in Italien",
  },
  cookie: {
    body:
      "Wir verwenden essenzielle Cookies für den Betrieb der Website und mit Ihrer Einwilligung Analyse-Cookies. Siehe unsere",
    accept: "Alle akzeptieren",
    essential: "Nur essenzielle",
    close: "Schließen",
    cookiePolicyLink: "Cookie-Richtlinie",
  },
  home: {
    heroEyebrow: "Vor dem Launch • Für Gemeinden weltweit",
    heroTitle: "Den Fokus auf Christus bewahren.",
    heroSub:
      "Einfache, hygienische und erschwingliche Abendmahlskelche für Gemeinden. Brot und Saft gemeinsam versiegelt — in Sekunden verteilbereit.",
    heroCta: "Preise anfragen",
    heroStat1Value: "100%",
    heroStat1Label: "Made in Italy",
    heroStat2Value: "12 Mon.",
    heroStat2Label: "Haltbarkeit",
    heroStat3Value: "6+",
    heroStat3Label: "Belieferte Länder",
    trust: [
      "Made in Italy",
      "Schneller EU-Versand",
      "Lebensmittelsicher",
      "Sichere Verpackung",
      "Unterstützt Mission",
      "Für Gemeinden entworfen",
    ],
    whyEyebrow: "Warum es zählt",
    whyTitle: "Abendmahl soll uns sammeln — nicht ablenken.",
    whyProblemsTitle: "Herausforderungen beim Abendmahl",
    whyIntro: "Traditionelle Vorbereitung und Austeilung bringen oft Geräusche, Bewegung und Verzögerungen genau in dem Moment, in dem die Gemeinde Stille braucht.",
    problems: [
      { t: "Viele Helfer", d: "Vorbereitung, Austeilung und Reinigung binden Menschen aus dem Gottesdienst." },
      { t: "Unterbrochener Fluss", d: "Tabletts, Kelche und Reihen erzeugen Pausen, die die Atmosphäre stören." },
      { t: "Geräusch & Ablenkung", d: "Bewegung, Flüstern und Schritte lenken den Blick von Christus ab." },
    ],
    solution: {
      title: "Ein versiegelter Kelch. Brot und Saft, bereit.",
      body:
        "Jeder vorgefüllte Kelch enthält Oblate und Saft, gemeinsam, versiegelt. Keine Austeilung oder Geräusche im heiligen Moment — nur stille Ehrfurcht in jeder Bank.",
    },
    benefitsEyebrow: "Vorteile",
    benefitsTitle: "Alles, was Ihre Gemeinde braucht — nichts weiter.",
    benefitsSub: "Entworfen mit Pastoren und Verwaltern, verfeinert im echten Sonntagsalltag.",
    benefits: [
      { t: "Brot & Saft zusammen", d: "Ein Kelch, ein Handgriff. Keine separaten Oblaten oder Tabletts." },
      { t: "Leichtes Öffnen", d: "Zwei abziehbare Siegel. Jeder öffnet ihn mit einer sanften Bewegung." },
      { t: "Schnelle Austeilung", d: "Hunderte in Minuten servieren, ohne Warteschlange." },
      { t: "Weniger Ablenkung", d: "Ruhigerer Gottesdienst, mehr Raum für Besinnung." },
      { t: "Mehr Ehrfurcht", d: "Der Fokus bleibt, wo er hingehört — auf Christus." },
      { t: "Erschwinglich", d: "Mengenpreise für den wöchentlichen Einsatz." },
      { t: "Made in Italy", d: "Nach strengen Lebensmittelstandards gefertigt." },
      { t: "Versand in Europa", d: "Zuverlässige Lieferung nach UK, EU und darüber hinaus." },
    ],
    pricingEyebrow: "Richtpreise",
    pricingTitle: "Gemeindepreise — ehrlich und klar.",
    pricingSub:
      "Ein Überblick über typische Marktpreise im Vergleich zu unseren erwarteten Launch-Preisen. Endgültige Preise hängen von Menge und Land ab.",
    pricingHeaderQty: "Menge",
    pricingHeaderMarket: "Marktpreis",
    pricingHeaderOurs: "Unser Preis",
    pricingHeaderSave: "Ersparnis",
    pricingCta: "Angebot anfragen",
    pricingDisclaimer:
      "Der Endpreis hängt von Bestellmenge, Zielland und Spezifikationen ab.",
    impactEyebrow: "Unsere Mission",
    impactTitle: "Mehr als Abendmahlskelche. Eine Vision für die Zukunft.",
    impactSubhead:
      "Unser Wunsch ist es nicht nur, Gemeinden zu dienen, indem wir das Abendmahl zugänglicher machen, sondern auch das Wachstum dieses Unternehmens zu nutzen, um die christliche Mission zu unterstützen und Gemeinschaften auf der ganzen Welt Hoffnung zu bringen.",
    impactBody:
      "Wir glauben, dass keine Gemeinde zwischen Qualität und Bezahlbarkeit wählen sollte. Ob klein oder groß, in Europa oder darüber hinaus — jede Gemeinde verdient eine Abendmahlslösung, die den Blick auf Christus richtet. Und während The Holy Supper wächst, hoffen wir, dass jeder Kelch Teil von etwas Größerem wird.",
    impactPillars: [
      { t: "Örtliche Gemeinden", d: "An der Seite von Pastoren und Gemeinden, wo immer sie dienen." },
      { t: "Verletzliche Gemeinschaften", d: "Praktische Hilfe dort, wo Hoffnung am dringendsten gebraucht wird." },
      { t: "Bildung für Kinder", d: "Investition in Klassenräume, damit eine neue Generation wachsen kann." },
      { t: "Sauberes Wasser", d: "Unterstützung von Brunnen und sauberem Wasser, wo das tägliche Leben davon abhängt." },
    ],
    impactCaption: "Uganda ist einer der Orte, die diese Vision inspiriert haben — ein Bild der Wirkung, die wir mit dem Wachstum des Unternehmens auf viele Länder ausdehnen möchten.",
    impactClosing: "Unser Gebet ist, dass jeder Kelch, den wir bereitstellen, eines Tages dazu beiträgt, örtliche Gemeinden zu stärken und zugleich Gelegenheiten schafft, Menschen darüber hinaus zu dienen.",
    howEyebrow: "So funktioniert es",
    howTitle: "Von der ersten Nachricht bis zu Ihrer Gemeinde, in vier Schritten.",
    howSteps: [
      { t: "Formular ausfüllen", d: "Erzählen Sie uns von Ihrer Gemeinde." },
      { t: "Preis erhalten", d: "Ein Angebot, zugeschnitten auf Ihr Land." },
      { t: "Produktion", d: "Kelche in Italien gefertigt, für Sie gemacht." },
      { t: "Lieferung", d: "Sicher zu Ihrer Tür versendet." },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Antworten für Pastoren, Verwalter und Verantwortliche.",
    finalCtaEyebrow: "Vor dem Launch",
    finalCtaTitle: "Seien Sie unter den ersten Gemeinden mit unserem Launch-Preis.",
    finalCtaButton: "Preise anfragen",
  },
  contact: {
    metaTitle: "Preise anfragen — The Holy Supper",
    metaDescription:
      "Kontaktieren Sie The Holy Supper für Preise, Muster oder Launch-Informationen zu vorgefüllten Abendmahlskelchen.",
    eyebrow: "Kontakt",
    title: "Sprechen wir.",
    intro: "Erzählen Sie uns von Ihrer Gemeinde und wir melden uns mit Preisen zurück.",
    sampleNote:
      "Muster-Kits kommen bald. Erwähnen Sie es in Ihrer Nachricht, um in die Prioritätsliste zu kommen.",
    successTitle: "Nachricht erhalten.",
    successBody:
      "Vielen Dank für Ihre Nachricht. Ein Teammitglied wird sich innerhalb von zwei Werktagen persönlich mit einem auf Ihre Gemeinde zugeschnittenen Preis melden.",
    backHome: "Zurück zur Startseite",
    submit: "Preise anfragen",
    submitting: "Senden…",
    notify: "Benachrichtigen, sobald Bestellungen möglich sind.",
    messagePlaceholder: "Wie können wir helfen?",
    fields: {
      church: "Gemeindename",
      country: "Land",
      firstName: "Vorname",
      lastName: "Nachname",
      email: "E-Mail",
      phone: "Telefon",
      congregation: "Gemeindegröße",
      attendance: "Abendmahlsteilnehmer",
      quantity: "Erwartete Menge (Kelche)",
      product: "Bevorzugtes Produkt",
      message: "Nachricht",
    },
    placeholders: {
      congregation: "z. B. 300",
      attendance: "z. B. 220",
      quantity: "z. B. 500 / Monat",
      product: "Saft oder Wein",
    },
    errors: { generic: "Bitte prüfen Sie das Formular." },
  },
  waiting: {
    metaTitle: "Warteliste — The Holy Supper",
    metaDescription:
      "Seien Sie unter den ersten Gemeinden mit Launch-Preisen für vorgefüllte Abendmahlskelche.",
    eyebrow: "Warteliste",
    title: "Seien Sie unter den ersten Gemeinden mit unserem Launch-Preis.",
    intro: "Vorrangige Produktion. Beste Kelchpreise. Ein kostenloser Leitfaden per E-Mail.",
    successTitle: "Sie stehen auf der Liste.",
    successBody:
      "Danke. Sobald die Produktion bereit ist, melden wir uns mit Ihrem Launch-Preis persönlich. In der Zwischenzeit senden wir Ihnen den kostenlosen Leitfaden „The Church Guide to Preparing Communion“.",
    backHome: "Zurück zur Startseite",
    submit: "Zur Warteliste",
    submitting: "Senden…",
    consent:
      "Ich stimme zu, zum Launch von The Holy Supper kontaktiert zu werden, und weiß, dass meine Daten gemäß der",
    consentPolicyLink: "Datenschutzerklärung",
    noSpam: "Kein Spam. Jederzeit abbestellen.",
    fields: {
      name: "Vollständiger Name",
      church: "Gemeindename",
      role: "Ihre Rolle",
      country: "Land",
      email: "E-Mail",
      phone: "Telefon (optional)",
      quantity: "Geschätzte Menge (Kelche)",
    },
    placeholders: { role: "Pastor, Admin…", quantity: "z. B. 250 pro Monat" },
    errors: {
      name: "Bitte geben Sie Ihren Namen ein",
      church: "Gemeindename ist erforderlich",
      email: "Bitte gültige E-Mail eingeben",
      consent: "Zustimmung ist erforderlich, um beizutreten.",
      generic: "Bitte prüfen Sie das Formular.",
    },
  },
  legal: {
    lastUpdated: "Zuletzt aktualisiert",
    label: "Rechtliches",
    privacyTitle: "Datenschutzerklärung",
    privacyMeta: "Wie The Holy Supper Ihre Daten erhebt, nutzt und schützt.",
    privacyBody: [
      "Diese Seite erklärt, wie personenbezogene Daten behandelt werden, wenn Sie unsere Website besuchen oder uns kontaktieren. Sie ist in klarer Sprache verfasst und kann aktualisiert werden.",
    ],
    privacySections: [
      { h: "Erhobene Informationen", p: "Wir erheben nur die Informationen, die Sie freiwillig über unsere Formulare teilen: Name, Gemeinde, Rolle, Land, E-Mail und Telefon, sowie grundlegende technische Daten." },
      { h: "Verwendung", p: "Wir verwenden Ihre Informationen, um zu antworten, individuelle Preise vorzubereiten, Sie über den Launch zu informieren und den Service zu verbessern. Wir verkaufen niemals Ihre Daten." },
      { h: "Rechtsgrundlage (EU / UK)", p: "Wir verarbeiten personenbezogene Daten auf Basis Ihrer Einwilligung und unseres berechtigten Interesses am Betrieb und der Verbesserung des Dienstes." },
      { h: "Ihre Rechte", p: "Sie können jederzeit Zugriff, Berichtigung oder Löschung Ihrer Daten verlangen, indem Sie an theholysupper@gmail.com schreiben." },
      { h: "Speicherdauer", p: "Wir speichern Ihre Daten nur solange wie nötig, um Ihre Anfrage zu beantworten und — mit Einwilligung — Sie über den Launch zu informieren." },
      { h: "Kontakt", p: "Für Datenschutzfragen schreiben Sie an theholysupper@gmail.com." },
    ],
    cookieTitle: "Cookie-Richtlinie",
    cookieMeta: "Wie The Holy Supper Cookies und ähnliche Technologien nutzt.",
    cookieBody:
      "Diese Website verwendet eine kleine Anzahl von Cookies, um korrekt zu funktionieren und mit Ihrer Einwilligung die Nutzung zu verstehen.",
    cookieSections: [
      { h: "Essenzielle Cookies", p: "Notwendig, um Ihre Präferenzen zu speichern und die Website sicher zu halten. Sie können nicht deaktiviert werden." },
      { h: "Analyse-Cookies", p: "Mit Ihrer Einwilligung nutzen wir datenschutzfreundliche Analyse, um aggregierte Nutzung zu messen. Sie identifizieren Sie nicht persönlich." },
      { h: "Auswahl verwalten", p: "Sie können Ihre Einwilligung jederzeit ändern oder widerrufen, indem Sie die Browserdaten dieser Seite löschen." },
    ],
    termsTitle: "Nutzungsbedingungen",
    termsMeta: "Nutzungsbedingungen für die Website The Holy Supper.",
    termsBody:
      "Durch die Nutzung dieser Website stimmen Sie den folgenden Bedingungen zu. Die Seite ist derzeit eine Pre-Launch-Informationsseite — es werden keine Produkte verkauft und keine Bestellungen online aufgegeben.",
    termsSections: [
      { h: "Inhalt", p: "Alle Inhalte, Bilder und Marken sind Eigentum von The Holy Supper, sofern nicht anders angegeben. Preise, Merkmale und Bilder sind indikativ." },
      { h: "Anfragen", p: "Über unsere Formulare gesendete Informationen werden gemäß unserer Datenschutzerklärung behandelt." },
      { h: "Haftung", p: "Die Seite wird „wie besehen“ bereitgestellt. Im gesetzlich zulässigen Rahmen haftet The Holy Supper nicht für indirekte Schäden aus der Nutzung." },
      { h: "Anwendbares Recht", p: "Diese Bedingungen unterliegen italienischem Recht." },
    ],
  },
  meta: {
    homeTitle: "The Holy Supper — Vorgefüllte Abendmahlskelche für Gemeinden",
    homeDescription:
      "Einfache, hygienische und erschwingliche vorgefüllte Abendmahlskelche. Brot und Saft gemeinsam versiegelt. Für Gemeinden entworfen, in Italien gefertigt, europa- und weltweit versendet.",
    keywords:
      "Abendmahlskelche, vorgefüllte Abendmahlskelche, Abendmahl, Einzelkelche Abendmahl, Gemeinde Abendmahlszubehör",
  },
  faqs: [
    {
      q: "Was genau ist ein vorgefüllter Abendmahlskelch?",
      a: "Eine einzelne, versiegelte Portion, die sowohl Brot (Oblate) als auch Saft oder Wein enthält — bereit zum Verteilen, Öffnen und Einnehmen ohne Vorbereitung.",
    },
    {
      q: "Wie lange bleibt das Abendmahl frisch?",
      a: "Die Haltbarkeit beträgt bei korrekter Lagerung typischerweise 12 Monate ab Produktion. Genaue Daten sind auf jedem Karton aufgedruckt.",
    },
    {
      q: "Wie sollen wir die Kelche lagern?",
      a: "Kühl und trocken lagern, geschützt vor direkter Sonne und Hitze. Vor dem Öffnen ist keine Kühlung nötig.",
    },
    {
      q: "Verwenden Sie Saft oder Wein?",
      a: "Unsere Standardkelche enthalten alkoholfreien Traubensaft. Weinvarianten sind für spezifische Mengen möglich.",
    },
    {
      q: "Sind die Oblaten glutenfrei?",
      a: "Eine glutenfreie Option ist geplant. Geben Sie Ihre Präferenz im Formular an, damit wir die Produktion planen können.",
    },
    {
      q: "Wo werden die Kelche hergestellt?",
      a: "Jeder Kelch wird in Italien nach strengen Lebensmittelstandards entworfen und produziert.",
    },
    {
      q: "Versenden Sie international?",
      a: "Ja — in ganz Italien und Europa, mit maßgeschneiderten Versendungen nach UK, Australien, USA und Kanada auf Anfrage.",
    },
    {
      q: "Verpflichte ich mich mit dem Formular zum Kauf?",
      a: "Das Ausfüllen des Formulars ist lediglich eine Anfrage nach einem persönlichen Angebot basierend auf den Bedürfnissen Ihrer Gemeinde. Es ist keine Bestellung, reserviert keine Produkte, erfordert keine Zahlung und verpflichtet nicht zum Kauf.\n\nDa jede Gemeinde anders ist, erstellen wir individuelle Angebote basierend auf geschätzter Menge, Lieferort und spezifischen Anforderungen.\n\nNach Erhalt Ihrer Anfrage prüft unser Team diese und sendet Ihnen ein maßgeschneidertes Angebot. Sie entscheiden frei, ob Sie fortfahren möchten — ohne Verpflichtung oder Druck.\n\nUnser Ziel ist, Ihrer Gemeinde zu helfen, Optionen und Preise zu verstehen, um eine informierte Entscheidung zu treffen, sobald wir Bestellungen annehmen.",
    },
  ],
};

export const TRANSLATIONS: Record<Locale, Dictionary> = { en, it, es, pt, fr, de };
