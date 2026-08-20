import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { I18nService } from '../../i18n/i18n.service';

/* 
 * Pagina Waiting List con form reattivo per iscrizione.
 */
@Component({
  selector: 'app-waiting-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './waiting-list.component.html',
  styleUrl: './waiting-list.component.css'
})
export class WaitingListComponent {
  private fb = inject(FormBuilder);
  private api = inject(ApiService);
  i18n = inject(I18nService);

  get t() { return this.i18n.getTranslation().waiting; }
  get locale() { return this.i18n.currentLocale(); }

  isSubmitting = false;
  isSuccess = false;
  errorMessage = '';

  waitingForm = this.fb.group({
    name: ['', Validators.required],
    churchName: ['', Validators.required],
    role: [''],
    country: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    expectedQuantity: [''],
    consent: [false, Validators.requiredTrue]
  });

  onSubmit() {
    if (this.waitingForm.valid) {
      this.isSubmitting = true;
      this.errorMessage = '';
      
      this.api.submitWaitingList(this.waitingForm.value).subscribe({
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
      this.waitingForm.markAllAsTouched();
    }
  }
}
