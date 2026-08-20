import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';

/* 
 * Pagina 404 - Not Found.
 */
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="not-found-page container text-center">
      <div class="error-content float-animation">
        <h1 class="error-code">404</h1>
        <h2>Page not found</h2>
        <p class="lead">The page you are looking for doesn't exist or has been moved.</p>
        <a [routerLink]="['/', locale]" class="btn-primary mt-4">Return Home</a>
      </div>
    </div>
  `,
  styles: [`
    .not-found-page {
      min-height: 80vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .error-code {
      font-size: 8rem;
      line-height: 1;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, var(--peach), var(--gilt));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: 'Fraunces', serif;
    }
    h2 { font-size: 2.5rem; margin-bottom: 1rem; }
    .lead { opacity: 0.8; margin-bottom: 2rem; }
  `]
})
export class NotFoundComponent {
  i18n = inject(I18nService);
  get locale() { return this.i18n.currentLocale(); }
}
