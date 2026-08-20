import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

/* 
 * Componente di Navigazione.
 * Header fisso con effetto glassmorphism e menu responsive.
 */
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, LanguageSwitcherComponent, LucideAngularModule],
  templateUrl: './nav.component.html'
})
export class NavComponent {
  i18n = inject(I18nService);
  
  isScrolled = false;
  open = false;

  icons = { Menu, X };

  get t() {
    return this.i18n.getTranslation().nav;
  }

  get locale() {
    return this.i18n.currentLocale();
  }

  get navItems() {
    return [
      { href: `/${this.locale}#why`, label: this.t.why },
      { href: `/${this.locale}#benefits`, label: this.t.benefits },
      { href: `/${this.locale}#pricing`, label: this.t.pricing },
      { href: `/${this.locale}#impact`, label: this.t.mission },
      { href: `/${this.locale}#faq`, label: this.t.faq },
      { href: `/${this.locale}/contact`, label: this.t.contact },
    ];
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 24;
  }

  toggleMobileMenu() {
    this.open = !this.open;
  }
}
