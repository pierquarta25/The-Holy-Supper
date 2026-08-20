import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';
import { LucideAngularModule, Instagram, Facebook, Mail, Phone } from 'lucide-angular';

/* 
 * Componente Footer.
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  i18n = inject(I18nService);
  
  icons = { Instagram, Facebook, Mail, Phone };
  currentYear = new Date().getFullYear();

  get t() {
    return this.i18n.getTranslation().footer;
  }

  get navT() {
    return this.i18n.getTranslation().nav;
  }

  get locale() {
    return this.i18n.currentLocale();
  }
}
