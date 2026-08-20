import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* 
 * Servizio per le chiamate API verso il backend.
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  submitPricingRequest(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/pricing-requests`, data);
  }

  submitWaitingList(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/leads`, data);
  }
}
