import { Injectable } from '@angular/core';
import { API_CONSTANTS } from  '../../constants/api';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfileResponse } from '../../models/profile';


@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = `${API_CONSTANTS.BASE_URL}${API_CONSTANTS.ENDPOINTS.PROFILE}`;

  constructor(private http: HttpClient) { }

  getProfile(token: string | null): Observable<ProfileResponse> {
     if (!token) {
      return throwError(() => new Error('Authentication token is missing'));
    }
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
  
      return this.http.get<ProfileResponse>(this.apiUrl,{headers})
    }

}
