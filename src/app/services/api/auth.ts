import { Injectable } from '@angular/core';
import { API_CONSTANTS } from  '../../constants/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest, LoginResponse, UserModel } from '../../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
   private apiUrl =  `${API_CONSTANTS.BASE_URL}${API_CONSTANTS.ENDPOINTS.AUTH}`;
   private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  private currentUserSubject = new BehaviorSubject<UserModel | null>(null);

  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  currentUser$ = this.currentUserSubject.asObservable();

   constructor(private http: HttpClient) { 
    this.loadUserFromStorage();
   }

   login(loginData:LoginRequest):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.apiUrl,loginData);
   }
   setLogin(response: LoginResponse): void {
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
    this.isLoggedInSubject.next(true);
    this.currentUserSubject.next(response.user);
  }

   logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isLoggedInSubject.next(false);
    this.currentUserSubject.next(null);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
  private loadUserFromStorage(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.currentUserSubject.next(JSON.parse(userData));
    }
  }
   getToken(): string | null {
    return localStorage.getItem('token');
  }
   
}
