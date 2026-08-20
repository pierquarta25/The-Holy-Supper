import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';

/* 
 * Pagina Gluten-Free.
 */
@Component({
  selector: 'app-gluten-free',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gluten-free.component.html',
  styleUrl: './gluten-free.component.css'
})
export class GlutenFreeComponent {
  i18n = inject(I18nService);
  
  get locale() { return this.i18n.currentLocale(); }
}
