import re

with open('lovable_main_pretty.html', 'r') as f:
    lines = f.readlines()

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

# 1. Hero
html = html.replace('Pre-lancio • Per le chiese di tutto il mondo', '{{ t.heroEyebrow }}')
html = html.replace('Mantenere lo sguardo su Cristo.', '{{ t.heroTitle }}')
html = html.replace('Bicchierini per la Santa Cena semplici, igienici ed economici, pensati per le chiese. Pane e succo sigillati insieme — pronti da distribuire in pochi secondi.', '{{ t.heroSub }}')
html = html.replace('Richiedi Prezzi', '{{ t.heroCta }}')
html = html.replace('>100%<', '>{{ t.heroStat1Value }}<')
html = html.replace('>Made in Italy<', '>{{ t.heroStat1Label }}<')
html = html.replace('>12 mesi<', '>{{ t.heroStat2Value }}<')
html = html.replace('>Conservazione<', '>{{ t.heroStat2Label }}<')
html = html.replace('>6+<', '>{{ t.heroStat3Value }}<')
html = html.replace('>Paesi serviti<', '>{{ t.heroStat3Label }}<')

# Marquee (Trust)
# The marquee has "Spedizioni rapide in Europa", "Sostiene la missione", "Pensato per le chiese"
marquee_regex = re.compile(r'(<div class="flex animate-marquee items-center gap-8 py-4 sm:gap-16">).*?(</div>)', re.DOTALL)
html = marquee_regex.sub(r'\1<div *ngFor="let trust of t.trust" class="flex items-center gap-3">\n<lucide-icon name="check-circle" class="h-5 w-5 text-peach"></lucide-icon>\n<span class="text-sm font-medium tracking-wide text-cream/80">{{ trust }}</span>\n</div>\2', html)

# 2. Why Section
html = html.replace('La Santa Cena dovrebbe unirci — non distrarci.', '{{ t.whyTitle }}')
html = html.replace('La preparazione e la distribuzione tradizionali introducono spesso rumore, movimento e ritardi proprio nel momento in cui la comunità ha più bisogno di silenzio.', '{{ t.whyIntro }}')
html = html.replace('Sfide Comuni Durante La Santa Cena', '{{ t.whyProblemsTitle }}')
html = html.replace('Un bicchierino sigillato. Pane e succo, pronti.', '{{ t.solution.title }}')
html = html.replace('Ogni bicchierino pre-riempito contiene il pane e il succo, insieme, sigillati. Nessuna distribuzione o rumore durante il momento sacro — solo silenziosa riverenza in ogni banco.', '{{ t.solution.body }}')

# Why Problems list
why_problems_regex = re.compile(r'(<ul class="mt-8 space-y-4">).*?(</ul>)', re.DOTALL)
html = why_problems_regex.sub(r'\1<li *ngFor="let p of t.problems" class="flex items-start gap-4">\n<div class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/20 text-destructive">\n<lucide-icon name="x" class="h-3 w-3"></lucide-icon>\n</div>\n<p class="mt-1 text-sm text-cream/65">{{ p.d }}</p>\n</li>\2', html)

# 3. Benefits Section
html = html.replace('Vantaggi', '{{ t.benefitsEyebrow }}')
html = html.replace('Tutto ciò che serve alla tua chiesa — nulla di superfluo.', '{{ t.benefitsTitle }}')
html = html.replace("Progettato con pastori e amministratori, perfezionato con l'uso reale della domenica.", '{{ t.benefitsSub }}')

benefits_grid = re.compile(r'(<div class="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">).*?(</section>)', re.DOTALL)
html = benefits_grid.sub(r'''\1
<div *ngFor="let b of t.benefits; let i = index" class="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-8 transition hover:border-primary/50">
<span class="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
<lucide-icon [img]="benefitsIcons[i] || icons.CheckCircle" class="h-5 w-5"></lucide-icon>
</span>
<h3 class="text-display relative mt-6 text-xl text-cream">{{ b.t }}</h3>
<p class="relative mt-2 text-sm text-cream/70">{{ b.d }}</p>
</div>
</div>
</div>
\2''', html)

# 4. Pricing Section
html = html.replace('PREZZI', '{{ t.pricingEyebrow }}')
html = html.replace('Prezzi per le chiese, onesti e chiari.', '{{ t.pricingTitle }}')
html = html.replace('Un confronto tra i prezzi tipici di mercato e quelli previsti al nostro lancio. I preventivi finali dipendono dal volume e dal paese.', '{{ t.pricingSub }}')
html = html.replace('Costo di mercato', '{{ t.pricingHeaderMarket }}')
html = html.replace('Il nostro prezzo', '{{ t.pricingHeaderOurs }}')
html = html.replace("Il prezzo finale dipende dal volume dell'ordine, dal paese di destinazione e dalle specifiche.", '{{ t.pricingDisclaimer }}')
html = html.replace('Richiedi Preventivo', '{{ t.pricingCta }}')

# 5. Impact Section
html = html.replace('La nostra missione', '{{ t.impactEyebrow }}')
html = html.replace('Più di semplici bicchierini. Una visione per il futuro.', '{{ t.impactTitle }}')
html = html.replace('Il nostro desiderio non è solo servire le chiese rendendo la Santa Cena più accessibile, ma anche usare la crescita di questa azienda per sostenere la missione cristiana e portare speranza a comunità in tutto il mondo.', '{{ t.impactSubhead }}')
html = html.replace('Crediamo che nessuna chiesa debba scegliere tra qualità e accessibilità economica. Che sia piccola o grande, in Europa o altrove, ogni congregazione merita una soluzione per la Santa Cena che mantenga lo sguardo su Cristo. E mentre The Holy Supper cresce, la nostra speranza è che ogni bicchierino diventi parte di qualcosa di più grande.', '{{ t.impactBody }}')
html = html.replace('A vision beyond the local church', '{{ t.impactCaption }}')
html = html.replace('Areas we hope to invest in as we grow', '{{ t.impactClosing }}')

impact_grid = re.compile(r'(<div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">).*?(<div aria-hidden="true" class="absolute inset-0")', re.DOTALL)
html = impact_grid.sub(r'''\1
<div *ngFor="let pillar of t.impactPillars; let i = index" class="rounded-2xl border border-primary/20 bg-wine-950/50 p-4 text-center backdrop-blur-sm">
<div class="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
<lucide-icon [img]="impactIcons[i] || icons.CheckCircle" class="h-5 w-5"></lucide-icon>
</div>
<p class="mt-3 text-xs text-cream/60">{{ pillar.d }}</p>
</div>
</div>
\2''', html)

# 6. Steps Section
html = html.replace('Come funziona', '{{ t.howEyebrow }}')
html = html.replace("Dall'ordine alla tua chiesa in 4 passaggi.", '{{ t.howTitle }}')

steps_grid = re.compile(r'(<div class="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">).*?(</section>)', re.DOTALL)
html = steps_grid.sub(r'''\1
<div *ngFor="let step of t.howSteps; let i = index" class="relative group">
<div class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
<lucide-icon [img]="howIcons[i] || icons.CheckCircle" class="h-6 w-6"></lucide-icon>
</div>
<h3 class="text-display text-xl text-cream">{{ step.t }}</h3>
<p class="mt-2 text-sm text-cream/70">{{ step.d }}</p>
<div *ngIf="i < t.howSteps.length - 1" class="absolute left-1/2 top-6 hidden w-full -translate-y-1/2 px-8 lg:block">
<div class="w-full border-t border-dashed border-border/50"></div>
</div>
</div>
</div>
</div>
\2''', html)

# 7. FAQ Section
html = html.replace('FAQ', '{{ t.faqEyebrow }}')
html = html.replace("Risposte alle domande più comuni.", '{{ t.faqTitle }}')

faq_grid = re.compile(r'(<div class="mx-auto mt-16 max-w-3xl divide-y divide-border/60">).*?(</section>)', re.DOTALL)
html = faq_grid.sub(r'''\1
<div *ngFor="let f of faqs; let i = index" class="border-b border-border/60">
<h3 data-orientation="vertical" data-state="closed" class="flex">
<button (click)="toggleFaq(i)" type="button" class="flex flex-1 items-center justify-between font-medium cursor-pointer transition-all py-6 text-left text-lg text-cream hover:no-underline" [ngClass]="{'text-primary': openFaqIndex === i}">
{{ f.q }}
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" [ngClass]="{'rotate-180': openFaqIndex === i}" aria-hidden="true">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</h3>
<div class="overflow-hidden text-sm transition-all duration-300" [ngStyle]="{ 'max-height': openFaqIndex === i ? '500px' : '0', 'opacity': openFaqIndex === i ? '1' : '0' }">
<p class="pt-4 pb-6 text-cream/70 text-base leading-relaxed">{{ f.a }}</p>
</div>
</div>
</div>
</div>
\2''', html)

# 8. Final CTA
html = html.replace('Pre-lancio', '{{ t.finalCtaEyebrow }}')
html = html.replace('Sii tra le prime chiese a ricevere i nostri prezzi di lancio.', '{{ t.finalCtaTitle }}')

# Fix routerLink and images
html = html.replace('href="/it/contact"', '[routerLink]="[\'/\', locale, \'contact\']"')
html = html.replace('src="/__l5e/assets-v1/7f5f7579-bd27-4aac-a4fa-8a45a89b7228/communion-cup-hero.png"', 'src="https://theholysupper.lovable.app/__l5e/assets-v1/7f5f7579-bd27-4aac-a4fa-8a45a89b7228/communion-cup-hero.png"')

# The final CTA button does not exist in the source, it's just <div class="mt-10 flex flex-wrap justify-center gap-3"></div>
html = html.replace('<div class="mt-10 flex flex-wrap justify-center gap-3">\n</div>', '<div class="mt-10 flex flex-wrap justify-center gap-3">\n<a [routerLink]="[\'/\', locale, \'contact\']" class="rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition hover:brightness-110">{{ t.pricingCta }}</a>\n</div>')


with open('src/app/pages/home/home.component.html', 'w') as f:
    f.write(html)
