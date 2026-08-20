const fs = require('fs');
const path = require('path');

const faqs_en = [
  { q: "What is the shelf life?", a: "12 months from production." },
  { q: "Do you ship internationally?", a: "Yes, we ship across Europe and beyond." },
  { q: "Is the packaging secure?", a: "Yes, specially designed for safe transit." },
  { q: "Are they easy to open?", a: "Yes, two easy-peel seals." },
  { q: "What juice is used?", a: "100% natural grape juice." },
  { q: "Is the wafer gluten-free?", a: "We offer a gluten-free option." },
  { q: "Can we order a sample?", a: "Yes, contact us for samples." },
  { q: "What is the minimum order?", a: "Minimum order is 500 cups." }
];

const home_en = {
  heroEyebrow: "Pre-launch • For churches worldwide",
  heroTitle: "Keeping the Focus on Christ.",
  heroSub: "Simple, hygienic and affordable Communion Cups designed for churches. Bread and juice sealed together — ready to distribute in seconds.",
  heroCta: "Order Now",
  heroStat1Value: "", heroStat1Label: "", heroStat2Value: "", heroStat2Label: "", heroStat3Value: "", heroStat3Label: "",
  trust: ["Made in Italy", "Fast European shipping", "Food safe", "Secure packaging", "Supports mission", "Designed for churches"],
  whyEyebrow: "TRUE COMMUNION", whyTitle: "True Communion, without distractions.", whyProblemsTitle: "", whyIntro: "The most important moments shouldn't be interrupted by noise, movement or waiting.",
  problems: [
    {t: "Hygiene and Safety first.", d: "Each portion is individually sealed to ensure maximum hygiene and safety, for everyone's peace of mind."},
    {t: "Quick preparation.", d: "Forget long preparations. Our cups are ready to use, saving precious time for your community."}
  ],
  solution: {title: "", body: ""},
  benefitsEyebrow: "", benefitsTitle: "Everything you need in one practical cup.", benefitsSub: "Designed to simplify church life, without sacrificing the sacredness of the moment.",
  benefits: [
    {t: "Real grapes", d: "100% grape juice, no preservatives."},
    {t: "Unleavened bread", d: "Traditional wafer, crisp and flavorful."},
    {t: "Long shelf life", d: "Up to 6 months of guaranteed storage."},
    {t: "Easy to open", d: "Double tab for effortless opening."},
    {t: "Exact portions", d: "No waste, easy calculations for every service."},
    {t: "Hygienic", d: "Zero contact during preparation and distribution."}
  ],
  pricingEyebrow: "PRICING", pricingTitle: "Pricing for all church sizes.", pricingSub: "Total transparency. The more you order, the less you pay. Pricing designed to support your ministry.",
  pricingHeaderQty: "Box", pricingHeaderMarket: "Quantity", pricingHeaderOurs: "Price", pricingHeaderSave: "Cost per portion",
  pricingCta: "Request Pricing", pricingDisclaimer: "Prices are subject to change based on destination.",
  statsTitle: "An essential partner for churches of every size.",
  stats: [
    { v: "+5000", l: "Churches served" },
    { v: "+120", l: "Countries reached" },
    { v: "+20", l: "Years of experience" },
    { v: "12", l: "Months shelf life" }
  ],
  impactEyebrow: "MISSION", impactTitle: "From Italy for the Churches of Europe and beyond.", impactSubhead: "We are proud to produce in Italy, ensuring high standards and supporting local communities.", impactBody: "",
  impactPillars: [
    {t: "Italian Production", d: "Food quality and safety guaranteed by the strictest European regulations."},
    {t: "Fast shipping", d: "Quick deliveries across Europe so you're never without supply."}
  ],
  impactCaption: "We believe every church, wherever it is, should have access to tools that facilitate worship.", impactClosing: "",
  howEyebrow: "A SIMPLE 4-STEP PROCESS", howTitle: "From order to your altar, in no time.",
  howSteps: [
    {t: "Order", d: "Choose the quantity that best suits your church's needs."},
    {t: "Fast shipping", d: "We prepare your order with care and hand it to the courier."},
    {t: "Delivery", d: "Comfortably receive the products directly at your church."},
    {t: "Celebrate", d: "Share the moment of Holy Communion with your community."}
  ],
  faqEyebrow: "FAQ", faqTitle: "Your questions, answered at a glance.",
  finalCtaEyebrow: "", finalCtaTitle: "It's not just a cup, it's a way to facilitate the work.", finalCtaButton: "Order Now"
};

const home_es = {
  heroEyebrow: "Prelanzamiento • Para iglesias de todo el mundo",
  heroTitle: "Manteniendo la mirada en Cristo.",
  heroSub: "Copas de Comunión simples, higiénicas y económicas. Pan y jugo sellados juntos — listos para distribuir en segundos.",
  heroCta: "Pedir Ahora",
  heroStat1Value: "", heroStat1Label: "", heroStat2Value: "", heroStat2Label: "", heroStat3Value: "", heroStat3Label: "",
  trust: ["Hecho en Italia", "Envío rápido", "Seguro para alimentos", "Empaque seguro", "Apoya misiones", "Para iglesias"],
  whyEyebrow: "LA VERDADERA SANTA CENA", whyTitle: "La verdadera Santa Cena, sin distracciones.", whyProblemsTitle: "", whyIntro: "Los momentos más importantes no deberían ser interrumpidos por ruidos, movimientos o esperas.",
  problems: [
    {t: "Higiene y Seguridad primero.", d: "Cada porción está sellada individualmente para garantizar la máxima higiene y seguridad, para la tranquilidad de todos."},
    {t: "Preparación rápida.", d: "Olvida las largas preparaciones. Nuestras copas están listas para usar, ahorrando un tiempo precioso a tu comunidad."}
  ],
  solution: {title: "", body: ""},
  benefitsEyebrow: "", benefitsTitle: "Todo lo que necesitas en una copa práctica.", benefitsSub: "Diseñado para simplificar la vida de la iglesia, sin sacrificar la sacralidad del momento.",
  benefits: [
    {t: "Uvas reales", d: "Jugo de uva 100%, sin conservantes."},
    {t: "Pan sin levadura", d: "Hostia tradicional, crujiente y sabrosa."},
    {t: "Larga caducidad", d: "Hasta 6 meses de conservación garantizada."},
    {t: "Fácil de abrir", d: "Doble lengüeta para abrir sin esfuerzo."},
    {t: "Porciones exactas", d: "Sin desperdicios, cálculos fáciles para cada servicio."},
    {t: "Higiénico", d: "Cero contacto durante la preparación y distribución."}
  ],
  pricingEyebrow: "PRECIOS", pricingTitle: "Precios para iglesias de todos los tamaños.", pricingSub: "Transparencia total. Cuanto más pides, menos pagas. Precios diseñados para apoyar tu ministerio.",
  pricingHeaderQty: "Caja", pricingHeaderMarket: "Cantidad", pricingHeaderOurs: "Precio", pricingHeaderSave: "Costo por porción",
  pricingCta: "Pedir Precios", pricingDisclaimer: "Los precios pueden variar según el destino.",
  statsTitle: "Un socio esencial para iglesias de cada tamaño.",
  stats: [
    { v: "+5000", l: "Iglesias servidas" },
    { v: "+120", l: "Países alcanzados" },
    { v: "+20", l: "Años de experiencia" },
    { v: "12", l: "Meses de caducidad" }
  ],
  impactEyebrow: "MISIÓN", impactTitle: "Desde Italia para las Iglesias de Europa y más allá.", impactSubhead: "Estamos orgullosos de producir en Italia, garantizando altos estándares y apoyando a las comunidades locales.", impactBody: "",
  impactPillars: [
    {t: "Producción Italiana", d: "Calidad y seguridad alimentaria garantizadas por las normas europeas más estrictas."},
    {t: "Envíos rápidos", d: "Entregas rápidas en toda Europa para que nunca te quedes sin suministro."}
  ],
  impactCaption: "Creemos que cada iglesia, dondequiera que esté, debería tener acceso a herramientas que faciliten la adoración.", impactClosing: "",
  howEyebrow: "UN PROCESSO SIMPLE EN 4 PASOS", howTitle: "Desde el pedido hasta tu altar, en poco tiempo.",
  howSteps: [
    {t: "Pedir", d: "Elige la cantidad que mejor se adapte a las necesidades de tu iglesia."},
    {t: "Envío rápido", d: "Preparamos tu pedido con cuidado y lo entregamos al transportista."},
    {t: "Entrega", d: "Recibe cómodamente los productos directamente en la iglesia."},
    {t: "Celebrar", d: "Comparte el momento de la Santa Cena con tu comunidad."}
  ],
  faqEyebrow: "FAQ", faqTitle: "Tus preguntas, resueltas de un vistazo.",
  finalCtaEyebrow: "", finalCtaTitle: "No es solo una copa, es una forma de facilitar el trabajo.", finalCtaButton: "Pedir Ahora"
};

const faqs_es = [
  { q: "¿Cómo funciona el envío?", a: "Enviamos a toda Europa mediante mensajería urgente en 2-5 días laborables." },
  { q: "¿Cuál es la caducidad de los productos?", a: "12 meses desde la fecha de producción indicada en el envase." },
  { q: "¿Ofrecen descuentos para pedidos grandes?", a: "Sí, consulta la tabla de precios para los descuentos por volumen." },
  { q: "¿Los productos son sin gluten?", a: "También ofrecemos una opción sin gluten." },
  { q: "¿Puedo pedir una muestra?", a: "Por supuesto, usa el formulario de contacto para pedir un kit de muestra." }
];

const home_pt = {
  heroEyebrow: "Pré-lançamento • Para igrejas de todo o mundo",
  heroTitle: "Mantendo o foco em Cristo.",
  heroSub: "Cálices de Comunhão simples, higiênicos e econômicos. Pão e suco selados juntos — prontos para distribuir em segundos.",
  heroCta: "Pedir Agora",
  heroStat1Value: "", heroStat1Label: "", heroStat2Value: "", heroStat2Label: "", heroStat3Value: "", heroStat3Label: "",
  trust: ["Feito na Itália", "Envio rápido", "Seguro para alimentos", "Embalagem segura", "Apoia missões", "Para igrejas"],
  whyEyebrow: "A VERDADEIRA SANTA CEIA", whyTitle: "A verdadeira Santa Ceia, sem distrações.", whyProblemsTitle: "", whyIntro: "Os momentos mais importantes não devem ser interrompidos por ruídos, movimentos ou esperas.",
  problems: [
    {t: "Higiene e Segurança em primeiro lugar.", d: "Cada porção é selada individualmente para garantir máxima higiene e segurança, para tranquilidade de todos."},
    {t: "Preparação rápida.", d: "Esqueça as longas preparações. Nossos cálices estão prontos para usar, economizando tempo precioso para sua comunidade."}
  ],
  solution: {title: "", body: ""},
  benefitsEyebrow: "", benefitsTitle: "Tudo o que você precisa em um cálice prático.", benefitsSub: "Projetado para simplificar a vida da igreja, sem sacrificar a sacralidade do momento.",
  benefits: [
    {t: "Uvas reais", d: "Suco de uva 100%, sem conservantes."},
    {t: "Pão ázimo", d: "Hóstia tradicional, crocante e saborosa."},
    {t: "Longa validade", d: "Até 6 meses de conservação garantida."},
    {t: "Fácil de abrir", d: "Aba dupla para abertura sem esforço."},
    {t: "Porções exatas", d: "Sem desperdício, cálculos fáceis para cada serviço."},
    {t: "Higiênico", d: "Zero contato durante a preparação e distribuição."}
  ],
  pricingEyebrow: "PREÇOS", pricingTitle: "Preços para igrejas de todos os tamanhos.", pricingSub: "Transparência total. Quanto mais você pede, menos você paga. Preços criados para apoiar seu ministério.",
  pricingHeaderQty: "Caixa", pricingHeaderMarket: "Quantidade", pricingHeaderOurs: "Preço", pricingHeaderSave: "Custo por porção",
  pricingCta: "Pedir Preços", pricingDisclaimer: "Os preços podem variar de acordo com o destino.",
  statsTitle: "Um parceiro essencial para igrejas de todos os tamanhos.",
  stats: [
    { v: "+5000", l: "Igrejas servidas" },
    { v: "+120", l: "Países alcançados" },
    { v: "+20", l: "Anos de experiência" },
    { v: "12", l: "Meses de validade" }
  ],
  impactEyebrow: "MISSÃO", impactTitle: "Da Itália para as Igrejas da Europa e além.", impactSubhead: "Temos orgulho de produzir na Itália, garantindo altos padrões e apoiando comunidades locais.", impactBody: "",
  impactPillars: [
    {t: "Produção Italiana", d: "Qualidade e segurança alimentar garantidas pelas mais rigorosas normas europeias."},
    {t: "Envios rápidos", d: "Entregas rápidas em toda a Europa para que você nunca fique sem suprimentos."}
  ],
  impactCaption: "Acreditamos que toda igreja, onde quer que esteja, deve ter acesso a ferramentas que facilitem a adoração.", impactClosing: "",
  howEyebrow: "UM PROCESSO SIMPLES DE 4 PASSOS", howTitle: "Do pedido ao seu altar, em pouco tempo.",
  howSteps: [
    {t: "Pedir", d: "Escolha a quantidade que melhor atende às necessidades da sua igreja."},
    {t: "Envio rápido", d: "Preparamos seu pedido com cuidado e o entregamos ao transportador."},
    {t: "Entrega", d: "Receba confortavelmente os produtos diretamente na igreja."},
    {t: "Celebrar", d: "Compartilhe o momento da Santa Ceia com a sua comunidade."}
  ],
  faqEyebrow: "FAQ", faqTitle: "Suas perguntas, respondidas num relance.",
  finalCtaEyebrow: "", finalCtaTitle: "Não é apenas um cálice, é uma maneira de facilitar o trabalho.", finalCtaButton: "Pedir Agora"
};

const faqs_pt = [
  { q: "Como funciona o envio?", a: "Enviamos para toda a Europa via correio expresso em 2-5 dias úteis." },
  { q: "Qual é a validade dos produtos?", a: "12 meses a partir da data de produção indicada na embalagem." },
  { q: "Vocês oferecem descontos para grandes pedidos?", a: "Sim, veja a tabela de preços para descontos por volume." },
  { q: "Os produtos não contêm glúten?", a: "Também oferecemos uma opção sem glúten." },
  { q: "Posso pedir uma amostra?", a: "Certamente, use o formulário de contato para solicitar um kit de amostra." }
];

const home_fr = {
  heroEyebrow: "Pré-lancement • Pour les églises du monde entier",
  heroTitle: "Garder le regard sur Christ.",
  heroSub: "Des Coupes de Communion simples, hygiéniques et économiques. Pain et jus scellés ensemble — prêts à être distribués en quelques secondes.",
  heroCta: "Commander Maintenant",
  heroStat1Value: "", heroStat1Label: "", heroStat2Value: "", heroStat2Label: "", heroStat3Value: "", heroStat3Label: "",
  trust: ["Fabriqué en Italie", "Expédition rapide", "Sécurité alimentaire", "Emballage sûr", "Soutient les missions", "Pour les églises"],
  whyEyebrow: "LA VRAIE SAINTE CÈNE", whyTitle: "La vraie Sainte Cène, sans distractions.", whyProblemsTitle: "", whyIntro: "Les moments les plus importants ne devraient pas être interrompus par le bruit, les mouvements ou l'attente.",
  problems: [
    {t: "L'Hygiène et la Sécurité d'abord.", d: "Chaque portion est scellée individuellement pour assurer une hygiène et une sécurité maximales, pour la tranquillité d'esprit de tous."},
    {t: "Préparation rapide.", d: "Oubliez les longues préparations. Nos coupes sont prêtes à l'emploi, ce qui fait gagner un temps précieux à votre communauté."}
  ],
  solution: {title: "", body: ""},
  benefitsEyebrow: "", benefitsTitle: "Tout ce dont vous avez besoin dans une coupe pratique.", benefitsSub: "Conçu pour simplifier la vie de l'église, sans sacrifier la sacralité du moment.",
  benefits: [
    {t: "Vrais raisins", d: "Jus de raisin 100%, sans conservateurs."},
    {t: "Pain sans levain", d: "Hostie traditionnelle, croustillante et savoureuse."},
    {t: "Longue conservation", d: "Jusqu'à 6 mois de conservation garantie."},
    {t: "Facile à ouvrir", d: "Double languette pour une ouverture sans effort."},
    {t: "Portions exactes", d: "Pas de gaspillage, calculs faciles pour chaque service."},
    {t: "Hygiénique", d: "Zéro contact pendant la préparation et la distribution."}
  ],
  pricingEyebrow: "PRIX", pricingTitle: "Des prix pour des églises de toutes tailles.", pricingSub: "Transparence totale. Plus vous commandez, moins vous payez. Des prix conçus pour soutenir votre ministère.",
  pricingHeaderQty: "Boîte", pricingHeaderMarket: "Quantité", pricingHeaderOurs: "Prix", pricingHeaderSave: "Coût par portion",
  pricingCta: "Demander Prix", pricingDisclaimer: "Les prix peuvent varier en fonction de la destination.",
  statsTitle: "Un partenaire essentiel pour des églises de toutes tailles.",
  stats: [
    { v: "+5000", l: "Églises servies" },
    { v: "+120", l: "Pays atteints" },
    { v: "+20", l: "Années d'expérience" },
    { v: "12", l: "Mois de conservation" }
  ],
  impactEyebrow: "MISSION", impactTitle: "De l'Italie pour les Églises d'Europe et d'ailleurs.", impactSubhead: "Nous sommes fiers de produire en Italie, garantissant des normes élevées et soutenant les communautés locales.", impactBody: "",
  impactPillars: [
    {t: "Production Italienne", d: "Qualité et sécurité alimentaire garanties par les réglementations européennes les plus strictes."},
    {t: "Expéditions rapides", d: "Livraisons rapides dans toute l'Europe pour ne jamais être à court d'approvisionnement."}
  ],
  impactCaption: "Nous croyons que chaque église, où qu'elle soit, devrait avoir accès à des outils facilitant l'adoration.", impactClosing: "",
  howEyebrow: "UN PROCESSUS SIMPLE EN 4 ÉTAPES", howTitle: "De la commande à votre autel, en un rien de temps.",
  howSteps: [
    {t: "Commander", d: "Choisissez la quantité qui correspond le mieux aux besoins de votre église."},
    {t: "Expédition rapide", d: "Nous préparons votre commande avec soin et la confions au transporteur."},
    {t: "Livraison", d: "Recevez confortablement les produits directement à l'église."},
    {t: "Célébrer", d: "Partagez le moment de la Sainte Cène avec votre communauté."}
  ],
  faqEyebrow: "FAQ", faqTitle: "Vos questions, répondues en un coup d'œil.",
  finalCtaEyebrow: "", finalCtaTitle: "Ce n'est pas juste une coupe, c'est un moyen de faciliter le travail.", finalCtaButton: "Commander Maintenant"
};

const faqs_fr = [
  { q: "Comment fonctionne l'expédition?", a: "Nous expédions dans toute l'Europe par courrier express en 2-5 jours ouvrables." },
  { q: "Quelle est la durée de conservation des produits?", a: "12 mois à partir de la date de production indiquée sur l'emballage." },
  { q: "Offrez-vous des remises pour les grosses commandes?", a: "Oui, consultez le tableau des prix pour les remises sur volume." },
  { q: "Les produits sont-ils sans gluten?", a: "Nous offrons également une option sans gluten." },
  { q: "Puis-je demander un échantillon?", a: "Certainement, utilisez le formulaire de contact pour demander un kit d'échantillons." }
];

const home_de = {
  heroEyebrow: "Pre-Launch • Für Kirchen weltweit",
  heroTitle: "Den Blick auf Christus gerichtet halten.",
  heroSub: "Einfache, hygienische und erschwingliche Abendmahlskelche. Brot und Saft zusammen versiegelt — bereit in Sekunden verteilt zu werden.",
  heroCta: "Jetzt Bestellen",
  heroStat1Value: "", heroStat1Label: "", heroStat2Value: "", heroStat2Label: "", heroStat3Value: "", heroStat3Label: "",
  trust: ["Hergestellt in Italien", "Schneller Versand", "Lebensmittelecht", "Sichere Verpackung", "Unterstützt Missionen", "Für Kirchen"],
  whyEyebrow: "WAHRES ABENDMAHL", whyTitle: "Wahres Abendmahl, ohne Ablenkungen.", whyProblemsTitle: "", whyIntro: "Die wichtigsten Momente sollten nicht durch Lärm, Bewegung oder Warten unterbrochen werden.",
  problems: [
    {t: "Hygiene und Sicherheit zuerst.", d: "Jede Portion ist einzeln versiegelt, um maximale Hygiene und Sicherheit zu gewährleisten, für den Seelenfrieden aller."},
    {t: "Schnelle Vorbereitung.", d: "Vergessen Sie lange Vorbereitungen. Unsere Kelche sind gebrauchsfertig und sparen Ihrer Gemeinschaft wertvolle Zeit."}
  ],
  solution: {title: "", body: ""},
  benefitsEyebrow: "", benefitsTitle: "Alles, was Sie in einem praktischen Kelch brauchen.", benefitsSub: "Entwickelt, um das Gemeindeleben zu vereinfachen, ohne die Heiligkeit des Moments zu opfern.",
  benefits: [
    {t: "Echte Trauben", d: "100% Traubensaft, ohne Konservierungsstoffe."},
    {t: "Ungesäuertes Brot", d: "Traditionelle Hostie, knusprig und aromatisch."},
    {t: "Lange Haltbarkeit", d: "Bis zu 6 Monate garantierte Aufbewahrung."},
    {t: "Leicht zu öffnen", d: "Doppelte Lasche für müheloses Öffnen."},
    {t: "Genaue Portionen", d: "Kein Abfall, einfache Berechnungen für jeden Gottesdienst."},
    {t: "Hygienisch", d: "Kein Kontakt während der Vorbereitung und Verteilung."}
  ],
  pricingEyebrow: "PREISE", pricingTitle: "Preise für alle Gemeindegrößen.", pricingSub: "Volle Transparenz. Je mehr Sie bestellen, desto weniger zahlen Sie. Preise, die Ihren Dienst unterstützen.",
  pricingHeaderQty: "Box", pricingHeaderMarket: "Menge", pricingHeaderOurs: "Preis", pricingHeaderSave: "Kosten pro Portion",
  pricingCta: "Preise Anfragen", pricingDisclaimer: "Die Preise können je nach Zielort variieren.",
  statsTitle: "Ein wesentlicher Partner für Kirchen jeder Größe.",
  stats: [
    { v: "+5000", l: "Kirchen bedient" },
    { v: "+120", l: "Länder erreicht" },
    { v: "+20", l: "Jahre Erfahrung" },
    { v: "12", l: "Monate Haltbarkeit" }
  ],
  impactEyebrow: "MISSION", impactTitle: "Von Italien für die Kirchen in Europa und darüber hinaus.", impactSubhead: "Wir sind stolz darauf, in Italien zu produzieren, hohe Standards zu gewährleisten und lokale Gemeinschaften zu unterstützen.", impactBody: "",
  impactPillars: [
    {t: "Italienische Produktion", d: "Lebensmittelqualität und Sicherheit, garantiert durch strengste europäische Vorschriften."},
    {t: "Schneller Versand", d: "Schnelle Lieferungen in ganz Europa, damit Sie nie ohne Vorrat sind."}
  ],
  impactCaption: "Wir glauben, dass jede Kirche, wo immer sie sich befindet, Zugang zu Werkzeugen haben sollte, die die Anbetung erleichtern.", impactClosing: "",
  howEyebrow: "EIN EINFACHER 4-STUFEN-PROZESS", howTitle: "Von der Bestellung zu Ihrem Altar, in kürzester Zeit.",
  howSteps: [
    {t: "Bestellen", d: "Wählen Sie die Menge, die am besten zu den Bedürfnissen Ihrer Gemeinde passt."},
    {t: "Schneller Versand", d: "Wir bereiten Ihre Bestellung sorgfältig vor und übergeben sie dem Kurier."},
    {t: "Lieferung", d: "Erhalten Sie die Produkte bequem direkt in der Kirche."},
    {t: "Feiern", d: "Teilen Sie den Moment des Heiligen Abendmahls mit Ihrer Gemeinschaft."}
  ],
  faqEyebrow: "FAQ", faqTitle: "Ihre Fragen, auf einen Blick beantwortet.",
  finalCtaEyebrow: "", finalCtaTitle: "Es ist nicht nur ein Kelch, es ist ein Weg, die Arbeit zu erleichtern.", finalCtaButton: "Jetzt Bestellen"
};

const faqs_de = [
  { q: "Wie funktioniert der Versand?", a: "Wir versenden in ganz Europa per Expresskurier in 2-5 Werktagen." },
  { q: "Wie lange sind die Produkte haltbar?", a: "12 Monate ab dem auf der Verpackung angegebenen Produktionsdatum." },
  { q: "Bieten Sie Rabatte für Großbestellungen an?", a: "Ja, siehe die Preistabelle für Mengenrabatte." },
  { q: "Sind die Produkte glutenfrei?", a: "Wir bieten auch eine glutenfreie Option an." },
  { q: "Kann ich ein Muster anfordern?", a: "Sicherlich, nutzen Sie das Kontaktformular, um ein Muster-Set anzufordern." }
];

const targetFile = path.join(__dirname, 'src/app/i18n/translations.ts');
let content = fs.readFileSync(targetFile, 'utf8');

function patchLanguage(lang, homeObj, faqsArr) {
  const langIndex = content.indexOf(`\n  ${lang}: {`);
  if (langIndex === -1) {
    console.log("Could not find lang:", lang);
    return;
  }
  
  const homeStartStr = 'home: {';
  const homeIndex = content.indexOf(homeStartStr, langIndex);
  
  let braceCount = 1;
  let i = homeIndex + homeStartStr.length;
  while (i < content.length && braceCount > 0) {
    if (content[i] === '{') braceCount++;
    if (content[i] === '}') braceCount--;
    i++;
  }
  
  const originalHome = content.substring(homeIndex, i);
  // Stringify the object, but we need it to look like typescript. JSON.stringify works fine since it produces valid object literals.
  const newHome = 'home: ' + JSON.stringify(homeObj, null, 2).split('\n').map(l => '    ' + l).join('\n').trim();
  content = content.replace(originalHome, newHome);
  
  const faqsStartStr = 'faqs: [';
  const faqsIndex = content.indexOf(faqsStartStr, langIndex);
  
  if (faqsIndex !== -1 && faqsIndex < langIndex + 30000) { // arbitrary bound just to be safe
    let bracketCount = 1;
    let j = faqsIndex + faqsStartStr.length;
    while (j < content.length && bracketCount > 0) {
      if (content[j] === '[') bracketCount++;
      if (content[j] === ']') bracketCount--;
      j++;
    }
    const originalFaqs = content.substring(faqsIndex, j);
    const newFaqs = 'faqs: ' + JSON.stringify(faqsArr, null, 2).split('\n').map(l => '    ' + l).join('\n').trim();
    content = content.replace(originalFaqs, newFaqs);
  } else {
     console.log("Could not find faqs for", lang);
  }
}

patchLanguage('en', home_en, faqs_en);
patchLanguage('es', home_es, faqs_es);
patchLanguage('pt', home_pt, faqs_pt);
patchLanguage('fr', home_fr, faqs_fr);
patchLanguage('de', home_de, faqs_de);

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Translations patched successfully!');
