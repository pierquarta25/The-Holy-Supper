import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';

/* 
 * Pagina Privacy Policy.
 */
@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="legal-page container">
      <div class="legal-content">
        <span class="eyebrow">Legal</span>
        <h1>Privacy Policy</h1>
        <p class="last-updated">Last Updated: August 2026</p>

        <section class="legal-section">
          <h2>1. Information We Collect</h2>
          <p>We only collect information about you if we have a reason to do so — for example, to provide our services, to communicate with you, or to make our services better.</p>
          <p>Information you provide to us directly: when you fill out a form to request pricing or join the waiting list, we collect your name, email, church details, and phone number.</p>
        </section>

        <section class="legal-section">
          <h2>2. How We Use Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide our services and fulfill orders.</li>
            <li>Communicate with you about pricing, shipping, and product updates.</li>
            <li>Improve our website and customer service.</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>3. Sharing Information</h2>
          <p>We do not sell our users' private personal information. We share information only in the limited circumstances specified in this policy (e.g., with shipping partners to deliver your order).</p>
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
    ul { padding-left: 1.5rem; margin-top: 1rem; }
    li { margin-bottom: 0.5rem; }
    @media (max-width: 768px) { .legal-content { padding: 2rem; } }
  `]
})
export class PrivacyComponent {
  i18n = inject(I18nService);
  get locale() { return this.i18n.currentLocale(); }
}
