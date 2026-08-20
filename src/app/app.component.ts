import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { I18nService } from './i18n/i18n.service';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CookieBannerComponent } from './shared/cookie-banner/cookie-banner.component';

/* 
 * Componente radice dell'applicazione.
 * Contiene il layout generale e gestisce il cambio della lingua in base all'URL.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent, CookieBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private i18n = inject(I18nService);

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const urlTree = this.router.parseUrl(event.urlAfterRedirects);
      const segments = urlTree.root.children['primary']?.segments;
      if (segments && segments.length > 0) {
        const locale = segments[0].path;
        if (this.i18n.isValidLocale(locale)) {
          this.i18n.setLocale(locale);
        }
      }
    });
  }
}
