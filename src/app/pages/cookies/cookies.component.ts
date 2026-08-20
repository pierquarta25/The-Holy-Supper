import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';

/* 
 * Pagina Cookie Policy.
 */
@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="legal-page container">
      <div class="legal-content">
        <span class="eyebrow">Legal</span>
        <h1>Cookie Policy</h1>
        <p class="last-updated">Last Updated: August 2026</p>

        <section class="legal-section">
          <h2>1. What Are Cookies</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They help the site remember information about your visit, making your next visit easier and the site more useful to you.</p>
        </section>

        <section class="legal-section">
          <h2>2. How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul>
            <li><strong>Essential:</strong> Required for the website to function properly (e.g., saving your language preference and cookie consent choice).</li>
            <li><strong>Analytics:</strong> To understand how visitors interact with our website, helping us improve the user experience.</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>3. Managing Cookies</h2>
          <p>You can adjust your browser settings to decline cookies if you prefer. However, this may prevent you from taking full advantage of the website.</p>
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
export class CookiesComponent {
  i18n = inject(I18nService);
  get locale() { return this.i18n.currentLocale(); }
}
