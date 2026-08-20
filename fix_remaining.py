import re

with open('src/app/pages/home/home.component.html', 'r') as f:
    html = f.read()

# Fix FAQs
faq_regex = re.compile(r'(<div class="mx-auto mt-16 max-w-3xl divide-y divide-border/[0-9]+">).*?(</section>)', re.DOTALL)
faq_replacement = r'''\1
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
html = faq_regex.sub(faq_replacement, html)

# Fix Final CTA
final_cta_regex = re.compile(r'<p class="text-xs uppercase tracking-\[0\.3em\] text-peach-soft">.*?</p>\s*<h2 class="text-display mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl">.*?</h2>', re.DOTALL)
final_cta_replacement = r'''<p class="text-xs uppercase tracking-[0.3em] text-peach-soft">{{ t.finalCtaEyebrow }}</p>
<h2 class="text-display mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl">{{ t.finalCtaTitle }}</h2>'''
html = final_cta_regex.sub(final_cta_replacement, html)

# Fix the final CTA button which is empty in Lovable HTML
final_cta_btn_regex = re.compile(r'(<div class="mt-10 flex flex-wrap justify-center gap-3">)\s*(</div>)', re.DOTALL)
final_cta_btn_replacement = r'''\1
<a [routerLink]="['/', locale, 'contact']" class="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition hover:brightness-110">{{ t.finalCtaButton }}</a>
\2'''
html = final_cta_btn_regex.sub(final_cta_btn_replacement, html)

# Write back
with open('src/app/pages/home/home.component.html', 'w') as f:
    f.write(html)
