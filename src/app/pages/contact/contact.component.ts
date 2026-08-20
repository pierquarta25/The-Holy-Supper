import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { I18nService } from '../../i18n/i18n.service';

/* 
 * Pagina di Contatto con form reattivo per richiesta preventivo.
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private api = inject(ApiService);
  i18n = inject(I18nService);

  get t() { return this.i18n.getTranslation().contact; }
  get locale() { return this.i18n.currentLocale(); }

  isSubmitting = false;
  isSuccess = false;
  errorMessage = '';

  contactForm = this.fb.group({
    churchName: ['', Validators.required],
    country: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    congregationSize: [''],
    avgAttendance: [''],
    expectedQuantity: ['', Validators.required],
    productInterest: ['Standard Cups'],
    message: [''],
    notify: [false]
  });

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.errorMessage = '';
      
      const payload = {
        ...this.contactForm.value,
        language: this.locale
      };
      
      this.api.submitPricingRequest(payload).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.isSuccess = true;
        },
        error: (err) => {
          this.isSubmitting = false;
          this.errorMessage = this.t.errors.generic;
          console.error(err);
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
