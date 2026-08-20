import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { I18nService } from '../../i18n/i18n.service';
import {
  LucideAngularModule,
  ArrowRight, ChevronDown, Sparkles, ShieldCheck, Zap, HeartHandshake, Leaf,
  MapPin, Truck, PackageCheck, Volume2, BadgeCheck, Wallet,
  ClipboardList, Factory, Send, Church, Droplets, School, Users,
  Heart, Book, Flame, CheckCircle
} from 'lucide-angular';

/* 
 * Pagina Home principale.
 * Mostra hero, benefici, prezzi, impatto e FAQ.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  i18n = inject(I18nService);
  title = inject(Title);
  meta = inject(Meta);

  openFaqIndex: number | null = null;

  get t() { return this.i18n.getTranslation().home; }
  get metaT() { return this.i18n.getTranslation().meta; }
  get faqs() { return this.i18n.getTranslation().faqs; }
  get locale() { return this.i18n.currentLocale(); }

  // Array per cicli *ngFor con icone dinamiche (usando lucide-angular components o nomi)
  trustIcons = [MapPin, Truck, ShieldCheck, PackageCheck, HeartHandshake, BadgeCheck];
  benefitsIcons = [PackageCheck, Leaf, Zap, Volume2, ShieldCheck, HeartHandshake, Wallet, MapPin, Truck];
  impactIcons = [Church, HeartHandshake, School, Droplets];
  howIcons = [ClipboardList, Send, Factory, Truck];

  // Esportiamo le singole icone per poterle usare nel template
  icons = {
    ArrowRight, ChevronDown, Sparkles, ShieldCheck, Zap, HeartHandshake, Leaf,
    MapPin, Truck, PackageCheck, Volume2, BadgeCheck, Wallet,
    ClipboardList, Factory, Send, Church, Droplets, School, Users,
    Heart, Book, Flame, CheckCircle
  };

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle(this.metaT.homeTitle);
    this.meta.updateTag({ name: 'description', content: this.metaT.homeDescription });
    this.meta.updateTag({ name: 'keywords', content: this.metaT.keywords });
  }

  toggleFaq(index: number) {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }
}

