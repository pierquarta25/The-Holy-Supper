import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';

/* 
 * Pagina Terms of Service.
 */
@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="legal-page container">
      <div class="legal-content">
        <span class="eyebrow">Legal</span>
        <h1>Terms of Service</h1>
        <p class="last-updated">Last Updated: August 2026</p>

        <section class="legal-section">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
        </section>

        <section class="legal-section">
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on The Holy Supper's website for personal, non-commercial transitory viewing only.</p>
        </section>

        <section class="legal-section">
          <h2>3. Disclaimer</h2>
          <p>The materials on The Holy Supper's website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>
        </section>

        <section class="legal-section">
          <h2>4. Limitations</h2>
          <p>In no event shall The Holy Supper or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p>
        </section>
        
        <a [routerLink]="['/', locale]" class="btn-secondary mt-4">Back Home</a>
      </div>
    </div>
  `,
  styles: [`
    .legal-page { padding: 6rem 0; min-height: 80vh; }
    .legal-content { max-width: 800px; margin: 0 auto; background: var(--card); padding: 4rem; border-radius: var(--radius); border: 1px solid var(--border); }
    h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
    .last-updated { opacity: 0.6; font-size: 0.9rem; margin-bottom: 3rem; }
    .legal-section { margin-bottom: 2.5rem; }
    .legal-section h2 { font-size: 1.5rem; color: var(--peach); margin-bottom: 1rem; font-family: 'Manrope', sans-serif; }
    .legal-section p, .legal-section li { opacity: 0.9; line-height: 1.6; }
    @media (max-width: 768px) { .legal-content { padding: 2rem; } }
  `]
})
export class TermsComponent {
  i18n = inject(I18nService);
  get locale() { return this.i18n.currentLocale(); }
}
