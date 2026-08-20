import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SupabaseService } from '../../services/supabase.service';
import { I18nService } from '../../i18n/i18n.service';

/* 
 * Pagina di Contatto collegata a Supabase per l'invio delle richieste.
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
  private supabase = inject(SupabaseService);
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
    expectedQuantity: [''],
    productInterest: [''],
    message: [''],
    notify: [false]
  });

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.errorMessage = '';

      const formVal = this.contactForm.value;
      const data = {
        churchName: formVal.churchName || '',
        country: formVal.country || '',
        firstName: formVal.firstName || '',
        lastName: formVal.lastName || '',
        email: formVal.email || '',
        phone: formVal.phone || '',
        congregationSize: formVal.congregationSize || '',
        avgAttendance: formVal.avgAttendance || '',
        expectedQuantity: formVal.expectedQuantity || '',
        productInterest: formVal.productInterest || '',
        message: formVal.message || '',
        notify: !!formVal.notify,
        language: this.locale
      };

      try {
        const { error } = await this.supabase.submitPricingRequest(data);
        this.isSubmitting = false;

        if (error) {
          console.error('Supabase error:', error);
          this.errorMessage = this.t.errors.generic;
        } else {
          this.isSuccess = true;
        }
      } catch (err) {
        this.isSubmitting = false;
        this.errorMessage = this.t.errors.generic;
        console.error('Submission error:', err);
      }
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
