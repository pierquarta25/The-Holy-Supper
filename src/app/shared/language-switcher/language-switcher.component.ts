import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';

/* 
 * Componente per il cambio della lingua.
 * Mostra un dropdown con le lingue disponibili.
 */
@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  i18n = inject(I18nService);
  router = inject(Router);
  
  isOpen = false;
  @Input() variant: 'desktop' | 'mobile' = 'desktop';

  languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  get currentLang() {
    return this.languages.find(l => l.code === this.i18n.currentLocale()) || this.languages[0];
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  changeLanguage(code: string) {
    const currentUrl = this.router.url;
    // Sostituisce il primo segmento dell'URL con la nuova lingua
    const urlSegments = currentUrl.split('/').filter(s => s);
    if (urlSegments.length > 0 && this.i18n.isValidLocale(urlSegments[0])) {
      urlSegments[0] = code;
    } else {
      urlSegments.unshift(code);
    }
    
    this.router.navigateByUrl('/' + urlSegments.join('/'));
    this.isOpen = false;
  }
}
