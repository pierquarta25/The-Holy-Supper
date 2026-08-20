import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://vnwdyroxhvqroixhstjh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZud2R5cm94aHZxcm9peGhzdGpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcyNDA0MzYsImV4cCI6MjEwMjgxNjQzNn0.wZk4-UxmQLNQi9rTPrsj-apLngfFMZ3OvhOc3Sxaoqg';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }

  async submitPricingRequest(data: {
    churchName: string;
    country: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    congregationSize?: string;
    avgAttendance?: string;
    expectedQuantity?: string;
    productInterest?: string;
    message?: string;
    notify?: boolean;
    language: string;
  }) {
    return await this.supabase.from('pricing_requests').insert({
      church_name: data.churchName,
      country: data.country,
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone || null,
      congregation_size: data.congregationSize || null,
      communion_attendance: data.avgAttendance || null,
      expected_quantity: data.expectedQuantity || null,
      preferred_product: data.productInterest || null,
      message: data.message || null,
      notify_when_ordering_opens: data.notify || false,
      language: data.language,
      status: 'New'
    });
  }
}
