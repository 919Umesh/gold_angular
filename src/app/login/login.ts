import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Add this import
import { LoginRequest } from '../models/auth';
import { AuthService } from '../services/api/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginData: LoginRequest = { email: '', password: '' }; 
  loading: boolean = false; 
  error: string = '';

  constructor(private authService: AuthService,private router: Router) {}

  login(): void { 
    this.loading = true;
    this.error = '';

    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        this.loading = false;
         this.authService.setLogin(response);
         this.router.navigate(['/profile']);
        console.log('Login successful:', response);
        localStorage.setItem('token', response.token);
      },
      error: (error) => {
        this.loading = false;
        this.error = 'Login failed. Please check your credentials.';
        console.error('Login error:', error);
      }
    });
  }
}