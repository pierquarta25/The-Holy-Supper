import { Injectable, signal } from '@angular/core';
import { TRANSLATIONS, Dictionary } from './translations';

/* 
 * Servizio per la gestione delle traduzioni (i18n).
 */
@Injectable({
  providedIn: 'root'
})
export class I18nService {
  currentLocale = signal<string>('en');

  setLocale(locale: string) {
    if (this.isValidLocale(locale)) {
      this.currentLocale.set(locale);
    }
  }

  getTranslation(): Dictionary {
    return TRANSLATIONS[this.currentLocale()] || TRANSLATIONS['en'];
  }

  isValidLocale(locale: string): boolean {
    return ['en', 'it', 'es', 'pt', 'fr', 'de'].includes(locale);
  }
}
