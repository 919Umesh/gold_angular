import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { API_CONSTANTS } from  '../../constants/api';
import { TransactionResponse } from '../../models/transaction';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {
 private apiUrl = `${API_CONSTANTS.BASE_URL}${API_CONSTANTS.ENDPOINTS.TRANSACTION}`;
  constructor(private http: HttpClient) { }

  getTransactions(token: string | null): Observable<TransactionResponse> {

    if (!token) {
          return throwError(() => new Error('Authentication token is missing'));
        }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<TransactionResponse>(this.apiUrl, { headers });
  }
}