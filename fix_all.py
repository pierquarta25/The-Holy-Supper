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

# Basic replacements
replacements = {
    "Pre-lancio • Per le chiese di tutto il mondo": "{{ t.heroEyebrow }}",
    "Mantenere lo sguardo su Cristo.": "{{ t.heroTitle }}",
    "Bicchierini per la Santa Cena semplici, igienici ed economici, pensati per le chiese. Pane e succo sigillati insieme — pronti da distribuire in pochi secondi.": "{{ t.heroSub }}",
    "Richiedi Prezzi": "{{ t.heroCta }}",
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
    'href="/it/contact"': '[routerLink]="[\'/\', locale, \'contact\']"',
    'src="/__l5e/assets-v1/7f5f7579-bd27-4aac-a4fa-8a45a89b7228/communion-cup-hero.png"': 'src="https://theholysupper.lovable.app/__l5e/assets-v1/7f5f7579-bd27-4aac-a4fa-8a45a89b7228/communion-cup-hero.png"',
    "Pre-lancio": "{{ t.finalCtaEyebrow }}",
    "Sii tra le prime chiese a ricevere i nostri prezzi di lancio.": "{{ t.finalCtaTitle }}"
}

for k, v in replacements.items():
    html = html.replace(k, v)

# Complex loop replacements (we count divs strictly!)

# 1. Problems
p = re.compile(r'(<div class="mt-16 grid gap-8 lg:grid-cols-2">).*?(</section>)', re.DOTALL)
r = r'''\1
<div *ngFor="let p of t.problems" class="relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-8 transition hover:border-primary/30">
<div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
<lucide-icon name="check-circle" class="h-5 w-5"></lucide-icon>
</div>
<h3 class="text-display text-xl">{{ p.t }}</h3>
<p class="mt-2 text-sm text-cream/70">{{ p.d }}</p>
</div>
</div>
</div>
\2'''
html = p.sub(r, html)

# 2. Benefits
b = re.compile(r'(<div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">).*?(</section>)', re.DOTALL)
br = r'''\1
<div *ngFor="let b of t.benefits; let i = index" class="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-8 transition-all hover:border-primary/30 hover:bg-card/50">
<div class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
<lucide-icon [img]="benefitsIcons[i] || icons.CheckCircle" class="h-6 w-6"></lucide-icon>
</div>
<h3 class="text-display text-lg">{{ b.t }}</h3>
<p class="mt-2 text-sm text-cream/70 leading-relaxed">{{ b.d }}</p>
</div>
</div>
</div>
\2'''
html = b.sub(br, html)

# 3. Stats
s = re.compile(r'(<div class="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">).*?(</section>)', re.DOTALL)
sr = r'''\1
<div *ngFor="let stat of t.stats" class="flex flex-col items-center justify-center text-center">
<div class="text-display text-4xl sm:text-5xl text-peach">{{ stat.v }}</div>
<div class="mt-2 text-sm uppercase tracking-widest text-cream/60">{{ stat.l }}</div>
</div>
</div>
</div>
\2'''
html = s.sub(sr, html)

# 4. Impact Pillars
ip = re.compile(r'(<ul class="mt-8 space-y-6">).*?(</ul>)', re.DOTALL)
ipr = r'''\1
<li *ngFor="let pillar of t.impactPillars; let i = index" class="flex gap-4">
<div class="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
<lucide-icon [img]="impactIcons[i] || icons.CheckCircle" class="h-5 w-5"></lucide-icon>
</div>
<div>
<h4 class="text-display text-lg">{{ pillar.t }}</h4>
<p class="mt-1 text-sm text-cream/70">{{ pillar.d }}</p>
</div>
</li>
\2'''
html = ip.sub(ipr, html)

# 5. How Steps
hs = re.compile(r'(<div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">).*?(</section>)', re.DOTALL)
hsr = r'''\1
<div *ngFor="let step of t.howSteps; let i = index" class="relative">
<div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
<lucide-icon [img]="howIcons[i] || icons.CheckCircle" class="h-7 w-7"></lucide-icon>
</div>
<h3 class="text-display text-xl">{{ step.t }}</h3>
<p class="mt-3 text-sm text-cream/70">{{ step.d }}</p>
<div *ngIf="i < t.howSteps.length - 1" class="hidden absolute top-7 left-[4.5rem] w-[calc(100%-5rem)] lg:block">
<div class="divider-gilt w-full opacity-30"></div>
</div>
</div>
</div>
</div>
\2'''
html = hs.sub(hsr, html)

# 6. FAQ
fq = re.compile(r'(<div class="mx-auto mt-16 max-w-3xl divide-y divide-border/60">).*?(</section>)', re.DOTALL)
fqr = r'''\1
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
\2'''
html = fq.sub(fqr, html)

# 7. Final CTA Button (was empty div)
fb = re.compile(r'(<div class="mt-10 flex flex-wrap justify-center gap-3">\s*</div>)', re.DOTALL)
fbr = r'''<div class="mt-10 flex flex-wrap justify-center gap-3">
<a [routerLink]="['/', locale, 'contact']" class="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition hover:brightness-110">{{ t.finalCtaButton }}</a>
</div>'''
html = fb.sub(fbr, html)

with open('src/app/pages/home/home.component.html', 'w') as f:
    f.write(html)
