import re

with open('src/app/pages/home/home.component.html', 'r') as f:
    html = f.read()

# Replace the two "problems" cards with a single ngFor card
# The first card contains {{ t.whyTitle }}? No, it's just after whyIntro
problems_regex = re.compile(r'(<div class="relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-8 transition hover:border-primary/30">.*?Igiene e Sicurezza al primo posto.*?</div>).*?(<div class="relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-8 transition hover:border-primary/30">.*?Preparazione in tempi brevi.*?</div>)', re.DOTALL)
html = problems_regex.sub(r'<div *ngFor="let p of t.problems" class="relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-8 transition hover:border-primary/30">\n<div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">\n<lucide-icon name="check-circle" class="h-5 w-5"></lucide-icon>\n</div>\n<h3 class="text-display text-xl">{{ p.t }}</h3>\n<p class="mt-2 text-sm text-cream/70">{{ p.d }}</p>\n</div>', html)

# Fix benefits loop. They are in a grid.
# The first one is "Vera uva". We can just replace the whole grid contents.
benefits_grid_regex = re.compile(r'(<div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">).*?(</section>)', re.DOTALL)
benefits_replacement = r'''\1
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
html = benefits_grid_regex.sub(benefits_replacement, html)

# Fix pricing rows: they are in a grid inside the pricing section.
# We will just keep the first row and replace the hardcoded "100", "€45" etc.
# Actually, the user's pricing table is static on Lovable, but I had made it dynamic before? Let's just keep it static or dynamic? The translation for pricing rows is NOT in `t`, it's hardcoded in Italian! In my translation I only have `pricingHeaderQty`, `pricingHeaderMarket`, `pricingHeaderOurs`, `pricingHeaderSave`.
# For now, I'll just leave the pricing rows as they are in HTML, they are just numbers and the € symbol, which works across languages! Wait, the pricing row contains "€45", "€85", "€160", "€300", and "0,45 €", "0,42 €". The Lovable HTML has them statically! That's perfectly fine. Let's just leave pricing rows as static HTML.

# Fix stats. The stats are "+5000", "+120", "+20", "12"
stats_regex = re.compile(r'(<div class="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">).*?(</section>)', re.DOTALL)
stats_replacement = r'''\1
<div *ngFor="let s of t.stats" class="flex flex-col items-center justify-center text-center">
<div class="text-display text-4xl sm:text-5xl text-peach">{{ s.v }}</div>
<div class="mt-2 text-sm uppercase tracking-widest text-cream/60">{{ s.l }}</div>
</div>
</div>
</div>
\2'''
html = stats_regex.sub(stats_replacement, html)

# Fix impact pillars.
impact_regex = re.compile(r'(<ul class="mt-8 space-y-6">).*?(</ul>)', re.DOTALL)
impact_replacement = r'''\1
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
html = impact_regex.sub(impact_replacement, html)

# Fix steps (UN PROCESSO SEMPLICE IN 4 FASI)
steps_regex = re.compile(r'(<div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">).*?(</section>)', re.DOTALL)
steps_replacement = r'''\1
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
html = steps_regex.sub(steps_replacement, html)

# Fix FAQs
faq_regex = re.compile(r'(<div class="mx-auto mt-16 max-w-3xl divide-y divide-border/50">).*?(</section>)', re.DOTALL)
faq_replacement = r'''\1
<div *ngFor="let f of faqs; let i = index" class="py-6">
<button (click)="toggleFaq(i)" class="group flex w-full items-center justify-between text-left focus:outline-none" [attr.aria-expanded]="openFaqIndex === i">
<span class="text-display text-lg group-hover:text-primary transition">{{ f.q }}</span>
<span class="ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/50 bg-card/30 transition group-hover:border-primary/50 group-hover:text-primary" [ngClass]="{'rotate-180': openFaqIndex === i}">
<lucide-icon [img]="icons.ChevronDown" class="h-4 w-4"></lucide-icon>
</span>
</button>
<div class="overflow-hidden transition-all duration-300" [ngStyle]="{ 'max-height': openFaqIndex === i ? '500px' : '0', 'opacity': openFaqIndex === i ? '1' : '0' }">
<p class="pt-4 text-cream/70">{{ f.a }}</p>
</div>
</div>
</div>
</div>
\2'''
html = faq_regex.sub(faq_replacement, html)

# Write back
with open('src/app/pages/home/home.component.html', 'w') as f:
    f.write(html)
