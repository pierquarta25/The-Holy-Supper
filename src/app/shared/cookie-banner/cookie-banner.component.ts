import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';

/* 
 * Banner per il consenso dei cookie.
 */
@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.css'
})
export class CookieBannerComponent implements OnInit {
  i18n = inject(I18nService);
  isVisible = false;

  get t() {
    return this.i18n.getTranslation().cookie;
  }
  
  get locale() {
    return this.i18n.currentLocale();
  }

  ngOnInit() {
    if (!localStorage.getItem('cookieConsent')) {
      this.isVisible = true;
    }
  }

  acceptAll() {
    localStorage.setItem('cookieConsent', 'all');
    this.isVisible = false;
  }

  acceptEssential() {
    localStorage.setItem('cookieConsent', 'essential');
    this.isVisible = false;
  }
}
